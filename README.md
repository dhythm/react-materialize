# React Materialize
## use materialize-css
https://materializecss.com/
http://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome

## Get started
```
git init
touch README.md .gitignore
npm init -y

npm i react react-dom

npm i -D @babel/core @babel/cli @babel/preset-env @babel/preset-react
touch .babelrc
npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
touch webpack.config.js

npm i -D typescript ts-loader typesync
npx tsc --init

npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-loader
npx eslint --init
touch .prettierrc
npm i -D husky lint-staged concurrently

npm install

mkdir public src
touch public/index.html
touch src/{index,App}.tsx
```

```
npm i materialize-css@next
npm i react-materialize
```