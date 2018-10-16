/**
 * See extends list
 *
 * node_modules/eslint-config-airbnb-base/rules/best-practices.js
 * node_modules/eslint-config-airbnb-base/rules/errors.js
 * node_modules/eslint-config-airbnb-base/rules/node.js
 * node_modules/eslint-config-airbnb-base/rules/style.js
 * node_modules/eslint-config-airbnb-base/rules/variables.js
 * node_modules/eslint-config-airbnb-base/rules/es6.js
 * node_modules/eslint-config-airbnb-base/rules/imports.js
 * node_modules/eslint-config-airbnb-base/rules/strict.js
 * node_modules/eslint-config-airbnb/rules/react.js
 * node_modules/eslint-config-airbnb/rules/react-a11y.js
 */

module.exports = {
    root: true,
    extends: [
        'airbnb',
    ],
    parser: 'babel-eslint',
    env: {
        node: true,
    },
    rules: {
        'no-warning-comments': [
            'warn',
            {
                'terms': [
                    'todo',
                    'fixme',
                    'xxx'
                ],
                'location': 'start'
            }
        ],

        // ================= BEST PRACTISES ==================

        // require use of the second argument for parseInt()
        // https://eslint.org/docs/rules/radix
        radix: ['error', 'as-needed'],

        // specify the maximum cyclomatic complexity allowed in a program
        // https://eslint.org/docs/rules/complexity
        complexity: ['error', 12],

        // specify curly brace conventions for all control statements
        // https://eslint.org/docs/rules/curly
        curly: ['warn', 'all'],

        // ================= STYLE ==================

        // enforce line breaks after opening and before closing array brackets
        // https://eslint.org/docs/rules/array-bracket-newline
        'array-bracket-newline': ['warn', 'consistent'],

        // enforce line breaks between array elements
        // https://eslint.org/docs/rules/array-element-newline
        'array-element-newline': ['warn', 'consistent'],

        // enforce spacing inside array brackets
        // https://eslint.org/docs/rules/array-bracket-spacing
        'array-bracket-spacing': ['warn', 'never'],

        // enforce spacing inside single-line blocks
        // https://eslint.org/docs/rules/block-spacing
        'block-spacing': ['warn', 'always'],

        // enforce one true brace style
        // https://eslint.org/docs/rules/brace-style
        'brace-style': ['warn', '1tbs'],

        // require camel case names
        // https://eslint.org/docs/rules/camelcase
        camelcase: ['error', { 'properties': 'always' }],

        // require trailing commas in multiline object literals
        // https://eslint.org/docs/rules/comma-dangle
        'comma-dangle': [
            'warn',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'only-multiline',
            },
        ],

        // enforce spacing before and after comma
        // https://eslint.org/docs/rules/comma-spacing
        'comma-spacing': ['error', { before: false, after: true }],

        // enforce one true comma style
        // https://eslint.org/docs/rules/comma-style
        'comma-style': [
            'error',
            'last', {
                exceptions: {
                    ArrayExpression: false,
                    ArrayPattern: false,
                    ArrowFunctionExpression: false,
                    CallExpression: false,
                    FunctionDeclaration: false,
                    FunctionExpression: false,
                    ImportDeclaration: false,
                    ObjectExpression: false,
                    ObjectPattern: false,
                    VariableDeclaration: false,
                    NewExpression: false,
                },
            },
        ],

        // disallow padding inside computed properties
        // https://eslint.org/docs/rules/computed-property-spacing
        'computed-property-spacing': ['warn', 'never'],

        // enforce newline at the end of file, with no multiple empty lines
        // https://eslint.org/docs/rules/eol-last
        'eol-last': ['error', 'always'],

        // enforce spacing between functions and their invocations
        // https://eslint.org/docs/rules/func-call-spacing
        'func-call-spacing': ['error', 'never'],

        // require function expressions to have a name
        // https://eslint.org/docs/rules/func-names
        'func-names': 'warn',

        // enforces use of function declarations or expressions
        // https://eslint.org/docs/rules/func-style
        'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],

        // enforce consistent line breaks inside function parentheses
        // https://eslint.org/docs/rules/function-paren-newline
        'function-paren-newline': ['error', 'consistent'],

        // this option enforces minimum and maximum identifier lengths
        // (variable names, property names etc.)
        // https://eslint.org/docs/rules/id-length
        // TODO: enable when there will be a possibility to ignore in for-loops and/or set limit for properties.
        'id-length': 'off',
        // 'id-length': 'error',

        // require identifiers to match the provided regular expression
        // https://eslint.org/docs/rules/id-match
        'id-match': 'off',

        // Enforce the location of arrow function bodies with implicit returns
        // https://eslint.org/docs/rules/implicit-arrow-linebreak
        'implicit-arrow-linebreak': ['warn', 'beside'],

        // this option sets a specific tab width for your code
        // https://eslint.org/docs/rules/indent
        indent: [
            'warn',
            4,
            {
                SwitchCase: 1,
                // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
                ignoredNodes: [
                    'JSXElement',
                    'JSXElement > *',
                    'JSXAttribute',
                    'JSXIdentifier',
                    'JSXNamespacedName',
                    'JSXMemberExpression',
                    'JSXSpreadAttribute',
                    'JSXExpressionContainer',
                    'JSXOpeningElement',
                    'JSXClosingElement',
                    'JSXText',
                    'JSXEmptyExpression',
                    'JSXSpreadChild',
                ],
            },
        ],

        // require or disallow an empty line between class members
        // https://eslint.org/docs/rules/lines-between-class-members
        'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: false }],

        // specify the maximum depth that blocks can be nested
        // https://eslint.org/docs/rules/max-depth
        'max-depth': ['error', 4],

        // specify the maximum length of a line in your program
        // https://eslint.org/docs/rules/max-len
        'max-len': [
            'error',
            120,
            4,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],

        // enforce a particular style for multiline comments
        // https://eslint.org/docs/rules/multiline-comment-style
        'multiline-comment-style': ['off'],

        // allow/disallow an empty newline after var statement
        // https://eslint.org/docs/rules/newline-after-var
        'newline-after-var': ['warn', 'always'],

        // https://eslint.org/docs/rules/newline-before-return
        'newline-before-return': 'warn',

        // disallow multiple empty lines and only one newline at the end
        // https://eslint.org/docs/rules/no-multiple-empty-lines
        'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0 }],

        // disallow negated conditions
        // https://eslint.org/docs/rules/no-negated-condition
        'no-negated-condition': 'error',

        // disallow use of the Object constructor
        // https://eslint.org/docs/rules/no-new-object
        'no-new-object': 'error',

        // disallow space between function identifier and application
        // https://eslint.org/docs/rules/no-spaced-func
        'no-spaced-func': 'warn',

        // disallow trailing whitespace at the end of lines
        // https://eslint.org/docs/rules/no-trailing-spaces
        'no-trailing-spaces': [
            'warn',
            {
                skipBlankLines: false,
                ignoreComments: false,
            },
        ],

        // disallow dangling underscores in identifiers
        // https://eslint.org/docs/rules/no-underscore-dangle
        'no-underscore-dangle': 'off',

        // enforce the location of single-line statements
        // https://eslint.org/docs/rules/nonblock-statement-body-position
        'nonblock-statement-body-position': ['error', 'below', { overrides: {} }],

        // require padding inside curly braces
        // https://eslint.org/docs/rules/object-curly-spacing
        'object-curly-spacing': ['warn', 'always'],

        // enforce line breaks between braces
        // https://eslint.org/docs/rules/object-curly-newline
        'object-curly-newline': [
            'warn',
            {
                ObjectExpression: { minProperties: 2, multiline: true, consistent: true },
                ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
                ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
                ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
            },
        ],

        // enforce "same line" or "multiple line" on object properties.
        // https://eslint.org/docs/rules/object-property-newline
        'object-property-newline': [
            'warn',
            {
                allowAllPropertiesOnSameLine: true,
            },
        ],

        // require assignment operator shorthand where possible or prohibit it entirely
        // https://eslint.org/docs/rules/operator-assignment
        'operator-assignment': ['warn', 'always'],

        // Requires operator at the beginning of the line in multiline statements
        // https://eslint.org/docs/rules/operator-linebreak
        'operator-linebreak': ['warn', 'after'],

        // disallow padding within blocks
        // https://eslint.org/docs/rules/padded-blocks
        'padded-blocks': ['warn', { blocks: 'never', classes: 'never', switches: 'never' }],

        // require quotes around object literal property names
        // https://eslint.org/docs/rules/quote-props.html
        'quote-props': ['warn', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

        // specify whether double or single quotes should be used
        // https://eslint.org/docs/rules/quotes
        quotes: ['warn', 'single', { avoidEscape: true }],

        // require or disallow use of semicolons instead of ASI
        // https://eslint.org/docs/rules/semi
        semi: ['warn', 'always'],

        // enforce spacing before and after semicolons
        // https://eslint.org/docs/rules/semi-spacing
        'semi-spacing': ['warn', { before: false, after: true }],

        // Enforce location of semicolons
        // https://eslint.org/docs/rules/semi-style
        'semi-style': ['warn', 'last'],

        // require or disallow space before blocks
        // https://eslint.org/docs/rules/space-before-blocks
        'space-before-blocks': 'warn',

        // require or disallow space before function opening parenthesis
        // https://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': [
            'warn',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],

        // require or disallow spaces inside parentheses
        // https://eslint.org/docs/rules/space-in-parens
        'space-in-parens': ['warn', 'never'],

        // require spaces around operators
        // https://eslint.org/docs/rules/space-infix-ops
        'space-infix-ops': 'warn',

        // Require or disallow spaces before/after unary operators
        // https://eslint.org/docs/rules/space-unary-ops
        'space-unary-ops': [
            'warn',
            {
                words: true,
                nonwords: false,
                overrides: {},
            },
        ],

        // require or disallow a space immediately following the // or /* in a comment
        // https://eslint.org/docs/rules/spaced-comment
        'spaced-comment': [
            'warn',
            'always',
            {
                line: {
                    exceptions: ['-', '+'],
                    markers: ['=', '!'], // space here to support sprockets directives
                },
                block: {
                    exceptions: ['-', '+'],
                    markers: ['=', '!'], // space here to support sprockets directives
                    balanced: true,
                },
            },
        ],

        // Enforce spacing around colons of switch statements
        // https://eslint.org/docs/rules/switch-colon-spacing
        'switch-colon-spacing': ['warn', { after: true, before: false }],

        // Require or disallow spacing between template tags and their literals
        // https://eslint.org/docs/rules/template-tag-spacing
        'template-tag-spacing': ['warn', 'never'],

        // require or disallow the Unicode Byte Order Mark
        // https://eslint.org/docs/rules/unicode-bom
        'unicode-bom': ['warn', 'never'],

        // ================= ERRORS ==================

        // disallow use of console
        // https://eslint.org/docs/rules/no-console
        'no-console': 'off',

        // ensure JSDoc comments are valid
        // https://eslint.org/docs/rules/valid-jsdoc
        'valid-jsdoc': 'warn',

        // ================= VARIABLES ==================

        // ================= ES6 ==================

        // enforces no braces where they can be omitted
        // https://eslint.org/docs/rules/arrow-body-style
        'arrow-body-style': [
            'warn',
            'as-needed',
            {
                requireReturnForObjectLiteral: false,
            },
        ],

        // require parens in arrow function arguments
        // https://eslint.org/docs/rules/arrow-parens
        'arrow-parens': ['warn', 'always'],

        // require space before/after arrow function's arrow
        // https://eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': ['warn', { before: true, after: true }],

        // enforce the spacing around the * in generator functions
        // https://eslint.org/docs/rules/generator-star-spacing
        'generator-star-spacing': ['warn', { before: false, after: true }],

        // disallow arrow functions where they could be confused with comparisons
        // https://eslint.org/docs/rules/no-confusing-arrow
        'no-confusing-arrow': [
            'warn',
            {
                allowParens: true,
            },
        ],

        // disallow useless computed property keys
        // https://eslint.org/docs/rules/no-useless-computed-key
        'no-useless-computed-key': 'warn',

        // disallow renaming import, export, and destructured assignments to the same name
        // https://eslint.org/docs/rules/no-useless-rename
        'no-useless-rename': [
            'warn',
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false,
            },
        ],

        // require method and property shorthand syntax for object literals
        // https://eslint.org/docs/rules/object-shorthand
        'object-shorthand': [
            'warn',
            'always',
            {
                ignoreConstructors: false,
                avoidQuotes: true,
            },
        ],

        // suggest using arrow functions as callbacks
        // https://eslint.org/docs/rules/prefer-arrow-callback
        'prefer-arrow-callback': [
            'warn',
            {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            },
        ],

        // suggest destructuring objects
        //https://eslint.org/docs/rules/prefer-destructuring
        'prefer-destructuring': [
            'warn',
            {
                'VariableDeclarator': {
                    'array': false,
                    'object': true,
                },
                'AssignmentExpression': {
                    'array': false,
                    'object': true,
                }
            },
            {
                'enforceForRenamedProperties': false,
            }
        ],

        // suggest using of const declaration for variables that are never modified after declared
        // https://eslint.org/docs/rules/prefer-const
        'prefer-const': [
            'warn',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],

        // enforce spacing between object rest-spread
        // https://eslint.org/docs/rules/rest-spread-spacing
        'rest-spread-spacing': ['warn', 'never'],

        // enforce usage of spacing in template strings
        // https://eslint.org/docs/rules/template-curly-spacing
        'template-curly-spacing': 'warn',

        // enforce spacing around the * in yield* expressions
        // https://eslint.org/docs/rules/yield-star-spacing
        'yield-star-spacing': ['warn', 'after'],

        // ================= IMPORTS ==================

        // ensure default import coupled with default export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
        'import/default': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
        'import/namespace': 'error',

        // Helpful warnings:

        // disallow use of jsdoc-marked-deprecated imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
        'import/no-deprecated': 'error',

        // Forbid the use of extraneous packages
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        // paths are treated both as absolute paths, and relative to process.cwd()
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                dependencies: false,
                optionalDependencies: false,
            },
        ],

        // Style guide:

        // disallow namespace imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
        'import/no-namespace': 'error',

        // ensure absolute imports are above relative imports and that unassigned imports are ignored
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
            },
        ],

        // Restrict which files can be imported in a given folder
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
        'import/no-restricted-paths': [
            'error',
            {
                'zones': [],
            },
        ],

        // prevent importing the submodules of other modules
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
        'import/no-internal-modules': [
            'off',
            {
                allow: [],
            },
        ],

        // Warn if a module could be mistakenly parsed as a script by a consumer
        // leveraging Unambiguous JavaScript Grammar
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
        // this should not be enabled until this proposal has at least been *presented* to TC39.
        // At the moment, it's not a thing.
        'import/unambiguous': 'off',

        // Prevent unassigned imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
        // importing for side effects is perfectly acceptable, if you need side effects.
        'import/no-unassigned-import': [
            'error',
            {
                allow: [
                    '**/*.scss',
                    'core-js/**',
                    'babel-polyfill',
                    'fetch-ie8',
                ],
            },
        ],

        // Reports if a module's default export is unnamed
        // https://github.com/benmosher/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
        'import/no-anonymous-default-export': [
            'off',
            {
                allowArray: false,
                allowArrowFunction: false,
                allowAnonymousClass: false,
                allowAnonymousFunction: false,
                allowCallExpression: false,
                allowLiteral: false,
                allowObject: false,
            },
        ],

        // This rule enforces that all exports are declared at the bottom of the file.
        // https://github.com/benmosher/eslint-plugin-import/blob/98acd6afd04dcb6920b81330114e146dc8532ea4/docs/rules/exports-last.md
        'import/exports-last': 'error',

        // Reports when named exports are not grouped together in a single export declaration
        // or when multiple assignments to CommonJS module.exports or exports object are present
        // in a single file.
        // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/group-exports.md
        'import/group-exports': 'error',

        // Forbid cyclical dependencies between modules
        // https://github.com/benmosher/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
        'import/no-cycle': ['error', { maxDepth: 30 }],

        // dynamic imports require a leading comment with a webpackChunkName
        // https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/dynamic-import-chunkname.md
        'import/dynamic-import-chunkname': [
            'error',
            {
                importFunctions: [],
                webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
            },
        ],
    },
};
