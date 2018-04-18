# Playing-reward
一个打赏的小功能hexo Next主题版

## 新建文件

将 `reward.swig` 文件放入 `/themes/next/layout/_macro/` 文件夹内

## 修改模板

修改同目录下的 `post.swig` 文件

```html
<!-- 找到对应的部分 -->
{% if theme.wechat_subscriber.enabled and not is_index %}
      <div>
        {% include 'wechat-subscriber.swig' %}
      </div>
    {% endif %}
    <!-- 新增以下片段 -->
    <!-- 新增部分 -->
    {% if theme.reward.enable and not is_index %}
      <div>
        {% include 'reward.swig' %}
      </div>
    {% endif %}
    <!-- 新增部分 -->    

    {% if theme.post_copyright.enable and not is_index %}
      <div>
        {% include 'post-copyright.swig' with { post: post } %}
      </div>
    {% endif %}
```



## 修改配置文件

```yml
# Reward
reward:
  enable: true
  reward_comment: 满分是10分的话，这篇文章你给几分，您的支持将鼓励我继续创作！
  TencentQR: /qcode/tencent_qcode.png
  AliPayQR: /qcode/alipay_qcode.png
  WeChatQR: /qcode/wechat_qcode.png
  PayPalLink: https://www.paypal.me/ihoey
  Github: https://github.com/houyi1121/Playing-reward
```

## 引入 css 文件

将 `reward.css` 文件放入 `themes/next/source/css/_custom`
在 `themes/next/source/css/_custom/custom.styl` 文件中加入
```css
@import "reward.css";
```

## 引入 js 文件

将 `reward.js` 文件放入 `themes/next/source/js/src` 
在 `themes/next/layout/_custom/head.swig` 文件中加入

```html
<script src="/js/src/reward.js"></script>
```

## 引入 images 文件

将 `images` 文件夹中的图片放入 `themes/next/source/images` 文件夹中

好了~ 教程结束

如果觉得还可以的话，点个赞呗~

或者请我喝杯水呗~

![微信支付](images/WeChanQR.png)


![支付宝支付](images/AliPayQR.png)
