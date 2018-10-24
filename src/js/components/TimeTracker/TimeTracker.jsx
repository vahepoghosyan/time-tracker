import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import './TimeTracker.scss';

const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class TimeTracker extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    state = {
        value: 0,
        timer: 0,
        timeSummary: 0,
        isStarted: false,
        trackerDailyHistory: [],
    };

    summaryCounter = (timer) => {
        const hour = parseInt(timer / 3600);

        const minute = parseInt(timer / 60) - hour * 60;

        const seconds = parseInt(timer) - hour * 3600 - minute * 60;

        return `${hour.toString().padStart(2, '0')} : 
                ${minute.toString().padStart(2, '0')} : 
                ${seconds.toString().padStart(2, '0')}`;
    };

    getDate = (time) => {
        const date = new Date();
        let currentTime = '';
        let currentDate = '';

        if (time) {
            currentTime = `${date.getHours().toString().padStart(2, '0')} :
                           ${date.getMinutes().toString().padStart(2, '0')} :
                           ${date.getSeconds().toString().padStart(2, '0')}`;
        } else {
            currentDate = `${date.getDate().toString().padStart(2, '0')} : 
                           ${date.getMonth().toString().padStart(2, '0')} : 
                           ${date.getFullYear().toString().padStart(2, '0')}`;
        }

        return currentTime || currentDate;
    };

    handleStartTracker = () => {
        const { timeSummary, isStarted } = this.state;

        if (!isStarted) {
            const date = new Date();
            const getTimeTrackerDailyData = JSON.parse(localStorage.getItem('TimeTrackerDailyData'));
            const totalSummarySecondFromStorage = getTimeTrackerDailyData ?
                getTimeTrackerDailyData.map((item) => (date.getDate().toString() === item.date.slice(0, 2) ?
                    item.delta : 0))
                    .reduce((accumulator, currentValue) => accumulator + currentValue) : 0;

            let timerSecond = 0;
            let totalSummarySecond = totalSummarySecondFromStorage || timeSummary;

            const startTime = this.getDate(true);

            const currentDate = this.getDate();

            const temporaryValue = [
                {
                    temporary: {
                        startTime,
                    },
                    date: currentDate,
                },
            ];

            if (getTimeTrackerDailyData) {
                getTimeTrackerDailyData.push(temporaryValue[0]);
                localStorage.setItem('TimeTrackerDailyData', JSON.stringify(getTimeTrackerDailyData));
            } else {
                localStorage.setItem('TimeTrackerDailyData', JSON.stringify(temporaryValue));
            }

            this.intervalState = setInterval(() => {
                timerSecond += 1;
                totalSummarySecond += 1;

                const endTime = this.getDate(true);

                if (getTimeTrackerDailyData) {
                    getTimeTrackerDailyData[getTimeTrackerDailyData.length - 1].temporary.endTime = endTime;
                    getTimeTrackerDailyData[getTimeTrackerDailyData.length - 1].delta = timerSecond;
                    localStorage.setItem('TimeTrackerDailyData', JSON.stringify(getTimeTrackerDailyData));
                }

                this.setState({
                    timer: timerSecond,
                    timeSummary: totalSummarySecond,
                    isStarted: true,
                });
            }, 1000);
        }
    };

    handleEndTracker = () => {
        const { timer, isStarted, trackerDailyHistory } = this.state;

        if (isStarted) {
            const endTime = this.getDate(true);

            const getTimeTrackerDailyData = JSON.parse(localStorage.getItem('TimeTrackerDailyData'));

            getTimeTrackerDailyData[getTimeTrackerDailyData.length - 1].temporary.endTime = endTime;
            getTimeTrackerDailyData[getTimeTrackerDailyData.length - 1].delta = timer;
            localStorage.setItem('TimeTrackerDailyData', JSON.stringify(getTimeTrackerDailyData));

            trackerDailyHistory.push(this.summaryCounter(timer));

            clearInterval(this.intervalState);
            this.setState({
                timer: 0,
                isStarted: false,
                trackerDailyHistory,
            });
        }
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    componentWillMount() {
        const getTimeTrackerDailyData = JSON.parse(localStorage.getItem('TimeTrackerDailyData'));

        const date = new Date();

        const totalSummarySecondFromStorage = getTimeTrackerDailyData ?
            getTimeTrackerDailyData.map((item) => (date.getDate().toString() === item.date.slice(0, 2) ? item.delta : 0))
                .reduce((accumulator, currentValue) => accumulator + currentValue) : 0;

        const trackerDailyHistory = getTimeTrackerDailyData ?
            getTimeTrackerDailyData.map((item) => (date.getDate().toString() === item.date.slice(0, 2) ?
                this.summaryCounter(item.delta) : '')) : [];

        const currentTime = date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();

        const updateInterval = 86400 - currentTime;

        this.dailyInterval = setInterval(() => {
            this.setState([]);
        }, updateInterval * 1000);

        this.setState({
            timeSummary: totalSummarySecondFromStorage,
            trackerDailyHistory,
        });
    }

    render() {
        const { classes } = this.props;
        const {
            value,
            timer,
            timeSummary,
            trackerDailyHistory,
        } = this.state;

        const trackerDailyHistoryItems = trackerDailyHistory.map((item) => item && <li key={Math.random()}>{item}</li>);
        const currentDelta = this.summaryCounter(timer) || '00 : 00 : 00';
        const totalSummary = this.summaryCounter(timeSummary);

        return (
            <div className="wrapper">
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Daily Time Tracker" />
                    </Tabs>
                </AppBar>
                {value === 0 && (
                    <div className="Container">
                        <div className="Timer">{currentDelta}</div>
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
                        <div className="Total">Total: {totalSummary}</div>
                    </div>
                )}
            </div>
        );
    }
}

export default withStyles(styles)(TimeTracker);
