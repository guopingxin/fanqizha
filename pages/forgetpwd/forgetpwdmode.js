import {Base} from '../../utils/base.js'

class Forgetpwd extends Base{

  constructor(){
    super();
  }

  forgetpwd(that, callback){
    var params = {
      url: '/service/login/forPwd',
      type: 'POST',
      data: {
        mobile: that.data.mobile,
        code: that.data.code
      },
      sCallback: callback
    }
    this.request(params);
  }

  setPwd(that, callback){
    var params = {
      url: '/service/login/setPwd',
      type: 'POST',
      data: {
        mobile: that.data.mobile,
        password: that.data.password,
        passwords: that.data.passwords
      },
      sCallback: callback
    }
    this.request(params);
  }
}

export {Forgetpwd}