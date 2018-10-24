import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './TimeTracker.scss';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
    },
    palette: {
        primary: blue,
    },
});

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

// const styles = theme => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.paper,
//     },
// });

class TimeTracker extends React.Component {
    state = {
        value: 0,
        timer: {
            hour: '00',
            minute: '00',
            second: '00',
        },
        isStarted: false,
        trackerDailyHistory: [],
    };

        if (!this.state.isStarted) {
    handleStartTracker = () => {
            const date = new Date();
            let second = 1;
            let minute = 0;
            let hour = 0;
            const currentSecond = date.getSeconds().toString().padStart(2, '0');
            const currentMinute = date.getMinutes().toString().padStart(2, '0');
            const currentHour = date.getHours().toString().padStart(2, '0');
            const currentTime = `${currentHour} : ${currentMinute} : ${currentSecond}`;
            const dailyDeltaTime = [];

            this.setState({
                timer: {
                    hour: '00',
                    minute: '00',
                    second: `0${second}`,
                },
            });

            dailyDeltaTime.push({
                startTime: currentTime,
            });

            this.intervalState = setInterval(() => {
                second++;

                if (second === 60) {
                    minute++;
                    second = '00';
                }
                if (minute === 60) {
                    hour++;
                    minute = '00';
                }

                if (String(second).length !== 2) {
                    second = `0${String(second)}`;
                }

                if (String(minute).length !== 2) {
                    minute = `0${String(minute)}`;
                }

                if (String(hour).length !== 2) {
                    hour = `0${String(hour)}`;
                }

                this.setState({
                    timer: {
                        hour,
                        minute,
                        second,
                    },
                    isStarted: true,
                });

                const dailyDeltaTimeToString = JSON.stringify(dailyDeltaTime);

                localStorage.setItem('TimeTrackerData', dailyDeltaTimeToString);
            }, 100);
        }
    };

        if (this.state.isStarted) {
            const date = new Date();
            const timeTrackerData = JSON.parse(localStorage.getItem('TimeTrackerData'));
            const currentSecond = date.getSeconds().toString().length !== 2 ? `0${date.getSeconds().toString()}` : date.getSeconds().toString();
            const currentMinute = date.getMinutes().toString().length !== 2 ? `0${date.getMinutes().toString()}` : date.getMinutes().toString();
            const currentHour = date.getHours().toString().length !== 2 ? `0${date.getHours().toString()}` : date.getHours().toString();

            const currentTime = `${currentHour} : ${currentMinute} : ${currentSecond}`;
    handleEndTracker = () => {

            const currentTotalDate = `${this.state.timer.hour} : ${this.state.timer.minute} : ${this.state.timer.second}`;
            const trackerDailyHistory = [...this.state.trackerDailyHistory];

            trackerDailyHistory.push(currentTotalDate);

            timeTrackerData[timeTrackerData.length - 1].endTime = currentTime;

            timeTrackerData[timeTrackerData.length - 1].trackTime = `${this.state.timer.hour} : ${this.state.timer.minute} : ${this.state.timer.second}`;

            localStorage.setItem('TimeTrackerData', JSON.stringify(timeTrackerData));
            // localStorage.setItem('TimeTrackerData', JSON.stringify(dailyDeltaTime));
            clearInterval(this.intervalState);

            this.setState({
                timer: {
                    hour: '00',
                    minute: '00',
                    second: '00',
                },
                isStarted: false,
                intervalState: null,
                trackerDailyHistory,
            });
        }
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        const timer = `${this.state.timer.hour} : ${this.state.timer.minute} : ${this.state.timer.second}`;
        const trackerDailyHistory = [...this.state.trackerDailyHistory];
        const trackerDailyHistoryItems = trackerDailyHistory.map((item, key) => <li key={key}>{item}</li>);

        let totalHour = 0;
        let totalMinute = 0;
        let totalSecond = 0;
        let totalTime = '';

        for (let i = 0, len = trackerDailyHistory.length; i < len; i++) {
            totalHour += Number(trackerDailyHistory[i].slice(0, 2));
            totalMinute += Number(trackerDailyHistory[i].slice(5, 7));
            totalSecond += Number(trackerDailyHistory[i].slice(10, 12));
        }

        totalHour = totalHour.toString().length === 2 ? totalHour : `0${totalHour.toString()}`;
        totalMinute = totalMinute.toString().length === 2 ? totalMinute : `0${totalMinute.toString()}`;
        totalSecond = totalSecond.toString().length === 2 ? totalSecond : `0${totalSecond.toString()}`;
        if (totalSecond.toString() !== '00') {
            totalTime = `${totalHour} : ${totalMinute} : ${totalSecond}`;
        }

        return (
            <div className="wrapper">
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Daily Time Tracker" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </AppBar>
                {value === 0 && (
                <TabContainer>
                    <div className="Container">
                        <div className="Timer">{timer}</div>
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={this.handleStartTracker}
                            >
                                Start
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={this.handleEndTracker}
                            >
                                Stop
                            </Button>
                        </div>
                        <ul className="trackerDailyHistory">{trackerDailyHistoryItems}</ul>
                        <div className="Total">{totalTime}</div>
                    </div>
                </TabContainer>
                )}
                {value === 1 && <TabContainer>Item Two</TabContainer>}
                {value === 2 && <TabContainer>Item Three</TabContainer>}
            </div>
        );
    }
}

TimeTracker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimeTracker);
