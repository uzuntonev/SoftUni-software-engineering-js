
module.exports = {
    parser: "babel-eslint",
    plugins: [
        "promise",
        "babel"
    ],
    globals: {
        'game': true,
    },
    env: {
        browser: true,
    },
    rules: {
        "array-bracket-spacing": ["error", "always", { "singleValue": true }],
        "arrow-body-style": ["error", "as-needed"], // enforces curly brackets for arrow functions only when needed
        "block-scoped-var": ["error"], // treat var statements as if they were block scoped (off by default)
        "comma-dangle": ["error", "always-multiline"], // comma is required at the end of each line, when in object or arrays
        "consistent-return": "error", // require return statements to either always or never specify values
        "curly": ["error", "all"], // specify curly brace conventions for all control statements
        "default-case": ["error"], // require default case in switch statements (off by default)
        "dot-notation": ["error"], // encourages use of dot notation whenever possible
        "eol-last": "error", // enfores files to end with a new line
        "eqeqeq": "error", // require the use of === and !==
        "func-names": "off",  // anonymous are not obliged to have a name
        "func-style": "off", // enforces the use of function expressions for more predictable code
        "function-paren-newline": ["error", "multiline"], // function params are either on the same line or each is on a new line
        "global-require": "off", // allows require(__PACKAGE_NAME__) everywhere in the file
        "guard-for-in": "error", // make sure for-in loops have an if statement (off by default)
        "indent": ["error", 4, {
            ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
        }], // indent is 4 spaces
        "key-spacing": ["error", { "mode": "strict" }], // enforces consistent spacing between keys and values in object literal properties
        "linebreak-style": ["off", "unix"], // linebreak unix (LF) is better than Windows (CRLF)
        "max-len": ["error", { "tabWidth": 4, "code": 140, "comments": 100, "ignoreUrls": true, "ignorePattern": "^import\\s.+\\sfrom\\s.+;$"  }], // max 140 characters for code, and 100 for comments
        "multiline-ternary": ["error", "always"], // enforces ternary on multiple lines
        "no-async-promise-executor": "error", // disallow using an async function as a Promise executor
        "no-caller": "error", // disallow use of arguments.caller or arguments.callee
        "no-catch-shadow": "error", // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
        "no-cond-assign": "error", // disallow assignment in conditional expressions
        "no-console": "off", // console.log() is allowed
        "no-constant-condition": "error", // disallow use of constant expressions in conditions
        "no-debugger": "error", // disallow use of debugger
        "no-delete-var": "error", // disallow deletion of variables
        "no-dupe-keys": "error", // disallow duplicate keys when creating object literals
        "no-else-return": "error", // disallow else after a return in an if (off by default)
        "no-empty": "error", // disallow empty statements
        "no-ex-assign": "error", // disallow assigning to the exception in a catch block
        "no-extend-native": "error", // disallow adding to native types
        "no-extra-bind": "error", // disallow unnecessary function binding
        "no-extra-boolean-cast": "error", // disallow double-negation boolean casts in a boolean context
        "no-extra-parens": 0, // disallow unnecessary parentheses (off by default)
        "no-extra-semi": "error", // disallow unnecessary semicolons
        "no-fallthrough": "error", // disallow fallthrough of case statements
        "no-floating-decimal": "error", // disallow the use of leading or trailing decimal points in numeric literals (off by default)
        "no-func-assign": "error", // disallow overwriting functions written as function declarations
        "no-inner-declarations": "error", // disallow function or variable declarations in nested blocks
        "no-irregular-whitespace": "error", // disallow irregular whitespace outside of strings and comments
        "no-loop-func": "error", // disallow creation of functions within loops
        "no-multi-spaces": "error", // disallow use of multiple spaces
        "no-multi-str": "error", // disallow use of multiline strings
        "no-native-reassign": "error", // disallow reassignments of native objects
        "no-negated-in-lhs": "error", // disallow negation of the left operand of an in expression
        "no-new": "error", // disable 'new ClassType()' without assigning the object
        "no-new-func": "error", // disallow use of new operator for Function object
        "no-new-wrappers": "error", // disallows creating new instances of String, Number, and Boolean
        "no-obj-calls": "error", // disallow the use of object properties of the global object (Math and JSON) as functions
        "no-octal": "error", // disallow use of octal literals
        "no-octal-escape": "error", // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        "no-prototype-builtins": "off", // allows calling built-ins
        "no-redeclare": "error", // disallow declaring the same variable more then once
        "no-return-await": "error", // disallows unnecessary return await
        "no-return-assign": "error", // disallow use of assignment in return statement
        "no-self-compare": "error", // disallow comparisons where both sides are exactly the same (off by default)
        "no-sequences": "error", // disallow use of comma operator
        "no-shadow": "error", // disallow declaration of variables already declared in the outer scope
        "no-shadow-restricted-names": "error", // disallow shadowing of names such as arguments
        "no-sparse-arrays": "error", // disallow sparse arrays
        "no-undef": "off", // disallow undeclared variables
        "no-undef-init": "error", // disallow use of undefined when initializing variables
        "no-undefined": "off", // disallow use of undefined variable (off by default)
        "no-underscore-dangle": ["error", { allowAfterThis: true, allowAfterSuper: true }], // dissalow the usage of _ af both ends of an object name, except with class/object functions
        "no-unreachable": "error", // disallow unreachable statements after a return, throw, continue, or break statement
        "no-unused-expressions": "off", // disallow usage of expressions in statement position
        "no-unused-vars": "off", // disallow declaration of variables that are not used in the code
        "no-use-before-define": "error", // dissalow usage of a variable, before it is defined
        "object-curly-newline": ["error", {
            "ObjectExpression": { "multiline": true },
            "ObjectPattern": { "multiline": true },
        }], // enforce consistent line breaks inside braces
        "object-curly-spacing": ["error", "always"],  // enforce consistent spacing inside braces
        "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }], // enforce consistent linebreak style for operators
        "prefer-const": "error", // Suggest using const
        "quote-props": ["error", "as-needed"], // require quotes around object literal property names only when needed
        "quotes": ["error", "single"], // Use single quotes
        "semi": "error", // semicolons at the end of each line
        "space-before-function-paren": ["error", { anonymous: "always", named: "never", asyncArrow: "always" }],  // space-before-function-paren
        "space-in-parens": ["error", "never"], // Disallow spaces inside of parentheses

        /* promise rules */
       /* "promise/always-return": "error",
        "promise/no-return-wrap": "error",
        "promise/param-names": "error",
        "promise/catch-or-return": "error",
        "promise/no-native": "off",
        "promise/no-nesting": "error",
        "promise/no-promise-in-callback": "error",
        "promise/no-callback-in-promise": "warn",
        "promise/avoid-new": "off",
        "promise/no-new-statics": "error",
        "promise/no-return-in-finally": "warn",
        "promise/valid-params": "warn",
        "promise/prefer-await-to-then": "error",
        "promise/prefer-await-to-callbacks": "error",
       */ 
        /* babel */
        "babel/semi": "off",
    }
};