module.exports = {
    /* 
    默认情况下，ESLint 会在所有父级目录里寻找配置文件，
    一直到根目录。
    如果你想要你所有项目都遵循一个特定的约定时，这将会很有用，但有时候会导致意想不到的结果。
    为了将 ESLint 限制到一个特定的项目，在你项目根目录下的 package.json 文件或者 .eslintrc.* 文件里的 eslintConfig 字段下设置 "root": true。
    ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
    */
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    // ts 解析器
    parser: '@typescript-eslint/parser',
    extends: [
        // 启用eslint 核心规则
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:vue/vue3-essential',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint'
    ]
}