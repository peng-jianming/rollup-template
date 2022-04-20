## 多模块打包

## 开发

npm run start 模块名

## 打包

npm run build 模块名(不写则遍历所有模块重新打包)

### 引入方式

可通过require.js进行引用，也可以直接通过script标签进行加载

requirejs 调用方式示例:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://cdn.bootcss.com/require.js/2.3.6/require.js"></script>
</head>

<body>
  <div id="app"></div>
</body>
<script>
  window.require(['http://localhost:8003/dist/debug/test.js'], function (test) {
    test.render();
  })
</script>

</html>
```

script 调用方式示例:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div id="app"></div>
</body>
<script src="http://localhost:8003/dist/debug/test.js"></script>

<script>
  window.Test.render()
</script>

</html>

```
