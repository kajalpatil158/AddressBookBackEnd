module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "env": {
        browser: true,
        commonjs: true,
        es2021: true,
        es6: true,
    },
    rules: {
        "curly": "error",
    }
}