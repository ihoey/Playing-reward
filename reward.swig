<div style="padding: 10px 0; margin: 20px auto; width: 90%; text-align: center;">
  <div>{{ theme.reward.reward_comment }}</div>
  <div class="reward-content">
    	<a id="github" href="{{ theme.reward.Github }}" target="_blank" class="pos-a" title="Github"></a>
      <a href="{{ theme.url }}" target="_blank" id="DonateText" title="ihoey.com">ihoey.com</a>
      <ul id="donateBox" class="list pos-a">
        <li id="PayPal"><a href="{{ theme.reward.PayPalLink }}" target="_blank" title="PayPal">PayPal</a></li>
        <li id="QQ" data-img="{{ theme.reward.TencentQR }}" title="QQ">QQ</li>
        <li id="AliPay" data-img="{{ theme.reward.AliPayQR }}" title="{{ __('reward.alipay') }}">{{ __('reward.alipay') }}</li>
        <li id="WeChat" data-img="{{ theme.reward.WeChatQR }}" title="{{ __('reward.wechatpay') }}">{{ __('reward.wechatpay') }}</li>
      </ul>
      <div id="QRBox" class="pos-f left-100">
        <div id="MainBox"></div>
      </div>
  </div>
</div>
