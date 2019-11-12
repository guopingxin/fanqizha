import {Base} from '../../utils/base.js'

class LoginMode extends Base{

  // constructor() {
  //   super();
  // }

  login(that, callback){

    var params = {
      url: '/service/login/login',
      type: 'POST',
      data: {
        account: that.data.account,
        password: that.data.password
      },
      sCallback: callback
    }
    this.request(params);
  }
}

export { LoginMode }