module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "@vue/standard",
        "@vue/typescript"
    ],
    "rules": {
        "quotes": [
            "error",
            "single"
        ]
    },
    "parserOptions": {
        "parser": "typescript-eslint-parser"
    }
}