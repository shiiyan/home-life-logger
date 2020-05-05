module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended",
        "standard"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        'parser': 'babel-eslint',
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};