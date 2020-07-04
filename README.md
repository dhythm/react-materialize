```
git init
touch README.md .gitignore
npm init -y
mkdir public src
touch public/index.html
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
npm install
touch src/{index,App}.tsx
npm i -D husky lint-staged concurrently
```