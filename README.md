# フロントエンドテンプレ

自分用。

[gaearon/react\-hot\-boilerplate at next](https://github.com/gaearon/react-hot-boilerplate/tree/next)

を参考にしている。

## 構成

- ES2017
- React
- react-hot-loader
- react-router v4
- Redux
- eslint
- ava
- flowtype

まだ途中。

## 設定ファイルポイントメモ

### .babelrc

```
["es2015", {"modules": false}],
```

この `{"modules": false}` が無いとHMRが動作しない。


### webpack.config.babel.js

```
devServer: {
  host: 'localhost',
  port: port,
  historyApiFallback: true,
  hot: true,
  contentBase: 'dist/',
},
```

`dist/` に `index.html` を配置する場合は `contentBase: 'dist/',` が必要。
