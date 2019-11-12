import {Base} from "../../utils/base.js"

class Register extends Base{

  constructor(){
    super();
  }


  //申请加盟
  register(that,callback){
    var params = {
      url: '/service/login/register',
      type: 'POST',
      data: {
        true_name: that.data.true_name,
        password: that.data.password,
        name: that.data.name,
        mobile: that.data.mobile,
        code:that.data.code
      },
      sCallback: callback
    }
    this.request(params);
  }

  //发送短信验证码
  setCode(mobile, callback){
    var params = {
      url: '/service/login/setCode',
      type: 'POST',
      data: {
        mobile: mobile
      },
      sCallback: callback
    }
    this.request(params);
  }
  
}

export {Register}