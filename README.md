# [react-vite-travel notes](https://note.youdao.com/s/JKX4DjYw)
- pnpm create vite react-vite-travel --template react-ts

# [Css modules](https://github.com/AntonyC/react-vite-travel/commit/bcc616f46169afa8f846becfb8a17d46c2e1e1e2)
1. npm install typescript-plugin-css-modules --save-dev
2. naming Conventions: styles.module.css
3. add config to tsconfig.json
4. add config to settings.json under .vscode

# Add prettier
1. [Add package and code](https://github.com/AntonyC/react-vite-travel/commit/a148e4f4aa6dedd7e945db45ae30797753bb9186)
2. Install extension `Prettier - Code formatter` for vscode
3. [Add config to vscode](https://github.com/AntonyC/react-vite-travel/commit/3eccca5c394df6f9d64c222b0a39ea68f25099bb)

# [Add eslint-config-prettier and eslint-plugin-prettier](https://github.com/AntonyC/react-vite-travel/commit/f2d43c5ec0389d68ceca3f660a174a5078ea08b6#diff-a32a0887ed9d1d707bbb3b845b7df7fd40e673c47e7b60a3ebd896b68d3b8839)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#eslint-config-prettier)
  Turns off all rules that are unnecessary or might conflict with Prettier.
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file#installation)
  For flat configuration, this plugin ships with an eslint-plugin-prettier/recommended config that [sets up both eslint-plugin-prettier and eslint-config-prettier in one go](https://github.com/AntonyC/react-vite-travel/commit/7c055e181e59ab9cb9f71d53d4dfff7616dc5129).
  ```
  const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

  module.exports = [
    // Any other config imports go at the top
    eslintPluginPrettierRecommended,
  ];
  ```
# [Add router](https://github.com/AntonyC/react-vite-travel/commit/7f7a6c9f73704329bfaf641a5ce7c5384dc7b33b)
# [Add i18n code](https://github.com/AntonyC/react-vite-travel/commit/9fd240cefe6631036999dbfba26ed077d628ce8f) - [react-i18next](https://react.i18next.com/getting-started)
# [Add Redux code](https://github.com/AntonyC/react-vite-travel/commit/785b3ee75a140a2c73e34fbb94ec178ed5929011) - [react-redux](https://react-redux.js.org/introduction/getting-started)
1. Create Reducer
2. Create Store ```const store = createStore(languageReducer)```
3. Add type to Store ```export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;```
4. Create Action
5. Add Provider
6. Get store value ```const language = useSelector(state => state.language)```
7. Send action ```dispatch(changeLanguageActionCreator(e.key))```
