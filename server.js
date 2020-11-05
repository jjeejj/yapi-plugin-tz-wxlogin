const request = require('request');

module.exports = function (options) {
  const { loginUrl, emailPostfix } = options;

  this.bindHook('third_login', (ctx) => {
    let code = ctx.request.body.code || ctx.request.query.code;
    return new Promise((resolve, reject) => {
      request(loginUrl + code, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          let bodyInfo = JSON.parse(body);
          if (bodyInfo && bodyInfo.success === true) {
            let ret = {
              email: bodyInfo.result.email,
              username: bodyInfo.result.nickname
            };
            resolve(ret);
          } else {
            reject(bodyInfo);
          }
        }
        reject(error);
      });
    });
  })
}