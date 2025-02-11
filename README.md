# 【有道云笔记】react-vite-travel
- https://note.youdao.com/s/JKX4DjYw

# React + TypeScript + Vite
- pnpm create vite react-vite-travel --template react-ts

# Css modules
- npm install typescript-plugin-css-modules --save-dev
- naming Conventions: styles.module.css
- add below to tsconfig.json
```
{
  "compilerOptions": {
    "plugins": [
      { "name": "typescript-plugin-css-modules" }
    ]
  }
}
```
