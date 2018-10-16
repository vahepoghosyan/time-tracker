module.exports = {
    extends: [
        '../.eslintrc.js',
    ],
    env: {
        browser: true,
        node: false,
    },
    globals: {},
    rules: {
        // ================= REACT ==================

        react: {
            pragma: 'React',
            version: '16.0',
        },

        // ================= IMPORTS ==================

        // disallow require()
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
        'import/no-commonjs': 'error',

        // No Node.js builtin modules
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
        'import/no-nodejs-modules': 'error',

        // Forbid the use of extraneous packages
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        // paths are treated both as absolute paths, and relative to process.cwd()
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [ '**/*.test.js', '**/*.test.jsx' ],
                dependencies: true,
                optionalDependencies: false,
            },
        ],

        // ================= REACT ==================

        // Specify whether double or single quotes should be used in JSX attributes
        // https://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': [ 'warn', 'prefer-double' ],

        // Forbid certain propTypes (any, array, object)
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-prop-types.md
        // NOTE: instead of `array` you can, at least, specify `arrayOf({string|object\number|node})`.
        'react/forbid-prop-types': [
            'error',
            {
                forbid: [ 'any', 'array' ],
                checkContextTypes: true,
                checkChildContextTypes: true,
            },
        ],

        // Enforce boolean attributes notation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        'react/jsx-boolean-value': [ 'warn', 'never', { always: [] } ],

        // Validate closing bracket location in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        'react/jsx-closing-bracket-location': [ 'warn', 'line-aligned' ],

        // Validate closing tag location in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
        'react/jsx-closing-tag-location': 'warn',

        // Enforce or disallow spaces inside of curly braces in JSX attributes
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
        'react/jsx-curly-spacing': [ 'warn', 'never', { allowMultiline: true } ],

        // Enforce event handler naming conventions in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
        'react/jsx-handler-names': [
            'error',
            {
                eventHandlerPrefix: 'handle',
                eventHandlerPropPrefix: 'on',
            },
        ],

        // Validate props indentation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        'react/jsx-indent-props': [ 'warn', 4 ],

        // Validate JSX has key prop when in array or iterator
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        'react/jsx-key': 'error',

        // Limit maximum of props on a single line in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
        'react/jsx-max-props-per-line': [ 'warn', { maximum: 1, when: 'multiline' } ],

        // Enforce propTypes declarations alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
        // TODO: disabled as unsafe. consider re-enabling
        'react/sort-prop-types': 'off',
        // 'react/sort-prop-types': [
        //     'error',
        //     {
        //         ignoreCase: true,
        //         callbacksLast: true,
        //         requiredFirst: false,
        //         sortShapeProp: true,
        //     },
        // ],

        // Enforce props alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
        // TODO: disabled as unsafe. consider re-enabling
        'react/jsx-sort-props': 'off',
        // 'react/jsx-sort-props': [
        //     'warn',
        //     {
        //         ignoreCase: true,
        //         callbacksLast: true,
        //         shorthandFirst: false,
        //         shorthandLast: true,
        //         noSortAlphabetically: false,
        //         reservedFirst: true,
        //     },
        // ],

        // Enforce defaultProps declarations alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-sort-default-props.md
        // TODO: disabled as unsafe. consider re-enabling
        'react/jsx-sort-default-props': 'off',
        // 'react/jsx-sort-default-props': [
        //     'error',
        //     {
        //         ignoreCase: true,
        //     },
        // ],

        // Prevent usage of setState in componentDidMount
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
        // this is necessary for server-rendering
        'react/no-did-mount-set-state': 'error',

        // Prevent direct mutation of this.state
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
        'react/no-direct-mutation-state': 'error',

        // Prevent extra closing tags for components without children
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        'react/self-closing-comp': 'warn',

        // Enforce component methods order
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
        // TODO: change to 'warn' after https://www.npmjs.com/package/react-codemod integration.
        'react/sort-comp': [
            'error',
            {
                order: [
                    'static-methods',
                    'lifecycle',
                ],
                groups: {
                    lifecycle: [
                        'displayName',
                        'propTypes',
                        'defaultProps',
                        'contextTypes',
                        'childContextTypes',
                        'state',
                        'instance-variables',
                        'statics',
                        'constructor',
                        'mixins',
                        'getters',
                        'setters',
                        '/^(get|set)(InitialState|DefaultProps|ChildContext|.+)$/',
                        '/^(on|handle).+$/',
                        'instance-methods',
                        'everything-else',
                        'getDerivedStateFromProps',
                        'componentWillReceiveProps',
                        'UNSAFE_componentWillReceiveProps',
                        'componentWillMount',
                        'UNSAFE_componentWillMount',
                        '/^render.+$/',
                        'render',
                        'componentDidMount',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'UNSAFE_componentWillUpdate',
                        'getSnapshotBeforeUpdate',
                        'componentDidUpdate',
                        'componentDidCatch',
                        'componentWillUnmount',
                    ],
                },
            },
        ],

        // Prevent missing parentheses around multilines JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-wrap-multilines.md
        'react/jsx-wrap-multilines': [
            'warn',
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
            },
        ],

        // Require that the first prop in a JSX element be on a new line when the element is multiline
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
        'react/jsx-first-prop-new-line': [ 'warn', 'multiline-multiprop' ],

        // Enforce spacing around jsx equals signs
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
        'react/jsx-equals-spacing': [ 'warn', 'never' ],

        // Enforce JSX indentation
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        'react/jsx-indent': [ 'warn', 4 ],

        // Forbid certain props on Components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
        'react/forbid-component-props': [ 'error', { forbid: [ 'style' ] } ],

        // Validate whitespace in and around the JSX opening and closing brackets
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-tag-spacing.md
        'react/jsx-tag-spacing': [
            'warn',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
                beforeClosing: 'never',
            },
        ],

        // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
        'react/jsx-curly-brace-presence': [ 'warn', { props: 'never', children: 'never' } ],

        // One JSX Element Per Line
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-one-expression-per-line.md
        'react/jsx-one-expression-per-line': 'off',

        // Ensures inline tags are not rendered without spaces between them
        // TODO: see if still needed. enabled for experimenting.
        'react/jsx-child-element-spacing': 'error',

        // Validate JSX maximum depth
        // https://github.com/yannickcr/eslint-plugin-react/blob/abe8381c0d6748047224c430ce47f02e40160ed0/docs/rules/jsx-max-depth.md
        'react/jsx-max-depth': [ 'error', { 'max': 10 } ],

        // Disallow multiple spaces between inline JSX props
        // https://github.com/yannickcr/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-props-no-multi-spaces.md
        'react/jsx-props-no-multi-spaces': 'warn',

        // ================= REACT-A11Y ==================
        // TODO: Re-enable following rules for accessibility.

        // Enforce that anchors have content
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
        // 'jsx-a11y/anchor-has-content': ['warn', { components: [] }],
        'jsx-a11y/anchor-has-content': 'off',

        // Require ARIA roles to be valid and non-abstract
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
        // 'jsx-a11y/aria-role': ['warn', { ignoreNonDom: false }],
        'jsx-a11y/aria-role': 'off',

        // Enforce all aria-* props are valid.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
        // 'jsx-a11y/aria-props': 'warn',
        'jsx-a11y/aria-props': 'off',

        // Enforce ARIA state and property values are valid.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
        // 'jsx-a11y/aria-proptypes': 'warn',
        'jsx-a11y/aria-proptypes': 'off',

        // Enforce that elements that do not support ARIA roles, states, and
        // properties do not have those attributes.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
        // 'jsx-a11y/aria-unsupported-elements': 'warn',
        'jsx-a11y/aria-unsupported-elements': 'off',

        // Enforce that all elements that require alternative text have meaningful information
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
        // 'jsx-a11y/alt-text': [
        //     'warn',
        //     {
        //         elements: ['img', 'object', 'area', 'input[type="image"]'],
        //         img: [],
        //         object: [],
        //         area: [],
        //         'input[type="image"]': [],
        //     },
        // ],
        'jsx-a11y/alt-text': 'off',

        // Prevent img alt text from containing redundant words like "image", "picture", or "photo"
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
        // 'jsx-a11y/img-redundant-alt': 'warn',
        'jsx-a11y/img-redundant-alt': 'off',

        // require that JSX labels use "htmlFor"
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
        // 'jsx-a11y/label-has-for': [
        //     'warn',
        //     {
        //         components: [],
        //         required: {
        //             every: ['nesting', 'id'],
        //         },
        //         allowChildren: false,
        //     },
        // ],
        'jsx-a11y/label-has-for': 'off',

        // require that mouseover/out come with focus/blur, for keyboard-only users
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
        // 'jsx-a11y/mouse-events-have-key-events': 'warn',
        'jsx-a11y/mouse-events-have-key-events': 'off',

        // Prevent use of `accessKey`
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
        // 'jsx-a11y/no-access-key': 'warn',
        'jsx-a11y/no-access-key': 'off',

        // Elements with an interactive role and interaction handlers must be focusable
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md
        // 'jsx-a11y/interactive-supports-focus': 'warn',
        'jsx-a11y/interactive-supports-focus': 'off',

        // Enforce that elements with ARIA roles must have all required attributes
        // for that role.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
        // 'jsx-a11y/role-has-required-aria-props': 'warn',
        'jsx-a11y/role-has-required-aria-props': 'off',

        // Enforce that elements with explicit or implicit roles defined contain
        // only aria-* properties supported by that role.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
        // 'jsx-a11y/role-supports-aria-props': 'warn',
        'jsx-a11y/role-supports-aria-props': 'off',

        // Enforce tabIndex value is not greater than zero.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
        // 'jsx-a11y/tabindex-no-positive': 'warn',
        'jsx-a11y/tabindex-no-positive': 'off',

        // ensure <hX> tags have content and are not aria-hidden
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
        // 'jsx-a11y/heading-has-content': ['warn', { components: [''] }],
        'jsx-a11y/heading-has-content': 'off',

        // require HTML elements to have a "lang" prop
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md
        // 'jsx-a11y/html-has-lang': 'warn',
        'jsx-a11y/html-has-lang': 'off',

        // require HTML element's lang prop to be valid
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md
        // 'jsx-a11y/lang': 'warn',
        'jsx-a11y/lang': 'off',

        // prevent distracting elements, like <marquee> and <blink>
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md
        // 'jsx-a11y/no-distracting-elements': [
        //     'warn',
        //     {
        //         elements: ['marquee', 'blink'],
        //     },
        // ],
        'jsx-a11y/no-distracting-elements': 'off',

        // only allow <th> to have the "scope" attr
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
        // 'jsx-a11y/scope': 'warn',
        'jsx-a11y/scope': 'off',

        // require onClick be accompanied by onKeyUp/onKeyDown/onKeyPress
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
        // 'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/click-events-have-key-events': 'off',

        // Enforce that DOM elements without semantic behavior not have interaction handlers
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
        // 'jsx-a11y/no-static-element-interactions': [
        //     'warn',
        //     {
        //         handlers: [
        //             'onClick',
        //             'onMouseDown',
        //             'onMouseUp',
        //             'onKeyPress',
        //             'onKeyDown',
        //             'onKeyUp',
        //         ],
        //     },
        // ],
        'jsx-a11y/no-static-element-interactions': 'off',

        // A non-interactive element does not support event handlers (mouse and key handlers)
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
        // 'jsx-a11y/no-noninteractive-element-interactions': [
        //     'warn',
        //     {
        //         handlers: [
        //             'onClick',
        //             'onMouseDown',
        //             'onMouseUp',
        //             'onKeyPress',
        //             'onKeyDown',
        //             'onKeyUp',
        //         ],
        //     },
        // ],
        'jsx-a11y/no-noninteractive-element-interactions': 'off',

        // ensure emoji are accessible
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
        // 'jsx-a11y/accessible-emoji': 'warn',
        'jsx-a11y/accessible-emoji': 'off',

        // elements with aria-activedescendant must be tabbable
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md
        // 'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
        'jsx-a11y/aria-activedescendant-has-tabindex': 'off',

        // ensure iframe elements have a unique title
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md
        // 'jsx-a11y/iframe-has-title': 'warn',
        'jsx-a11y/iframe-has-title': 'off',

        // prohibit autoFocus prop
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md
        // 'jsx-a11y/no-autofocus': ['warn', { ignoreNonDOM: true }],
        'jsx-a11y/no-autofocus': 'off',

        // ensure HTML elements do not specify redundant ARIA roles
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md
        // 'jsx-a11y/no-redundant-roles': 'warn',
        'jsx-a11y/no-redundant-roles': 'off',

        // media elements must have captions
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md
        // 'jsx-a11y/media-has-caption': [
        //     'warn',
        //     {
        //         audio: [],
        //         video: [],
        //         track: [],
        //     },
        // ],
        'jsx-a11y/media-has-caption': 'off',

        // WAI-ARIA roles should not be used to convert an interactive element to non-interactive
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md
        // 'jsx-a11y/no-interactive-element-to-noninteractive-role': [
        //     'warn',
        //     {
        //         tr: ['none', 'presentation'],
        //     },
        // ],
        'jsx-a11y/no-interactive-element-to-noninteractive-role': 'off',

        // WAI-ARIA roles should not be used to convert a non-interactive element to interactive
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md
        // 'jsx-a11y/no-noninteractive-element-to-interactive-role': [
        //     'warn',
        //     {
        //         ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        //         ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        //         li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        //         table: ['grid'],
        //         td: ['gridcell'],
        //     },
        // ],
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',

        // Tab key navigation should be limited to elements on the page that can be interacted with.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md
        // 'jsx-a11y/no-noninteractive-tabindex': [
        //     'warn',
        //     {
        //         tags: [],
        //         roles: ['tabpanel'],
        //     },
        // ],
        'jsx-a11y/no-noninteractive-tabindex': 'off',

        // ensure <a> tags are valid
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/0745af376cdc8686d85a361ce36952b1fb1ccf6e/docs/rules/anchor-is-valid.md
        // 'jsx-a11y/anchor-is-valid': [
        //     'warn',
        //     {
        //         components: ['Link'],
        //         specialLink: ['to'],
        //         aspects: ['noHref', 'invalidHref', 'preferButton'],
        //     },
        // ],
        'jsx-a11y/anchor-is-valid': 'off',
    },
};
