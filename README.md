# 一个打赏的小功能

直接 `Fork` 之后需要修改以下内容为你的账户

```js
/script.js:4-6 对应账户的二维码路径

/index.html:28 PayPal.me 改为现在收款页面，这样可以删除原来的按钮方式了。
```


使用 iframe 嵌入页面的代码，高度至少 240px，宽度至少 310px！

```js
<iframe src="https://houyi1121.github.io/Playing-reward/" style="overflow-x:hidden;overflow-y:hidden; border:0xp none #fff; min-height:240px; width:100%;"  frameborder="0" scrolling="no"></iframe>
```
