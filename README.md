# yapi-plugin-tz-wxlogin

第三方插件，在生成的配置文件中，添加如下配置即可：  

```
"plugins": [
    {
      "name": "tz-wxlogin",
      "options": {
          "type": "sso",
          "loginUrl": "https://new.h5no1.com/wechat/get_user_by_code?code=",
          "AUTH_SERVER" : "https://new.h5no1.com/cerberus/wechat/auth-iframe.html"
      }
    }
  ]
```   
这里面的配置项含义如下：  

- `type` 登陆类型，目前只支持sso登陆  
- `loginUrl` 服务端在获取微信code之后，可以通过这个url来获取用户的详细信息
- `AUTH_SERVER` 点击登陆按钮式需要跳转的url，用户通过该页面登录以后会向服务器发送微信code

