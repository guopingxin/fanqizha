import {Base} from '../../../../utils/base.js'

class Addpersonnel extends Base{
  constructor(){
    super();
  }

  addpersonal(name, pws, tel, callback){

    var params = {
      url: '/service/service/taskAdd',
      type: 'POST',
      data: {
        nickname: name,
        mobile:tel,
        password:pws
      },
      sCallback: callback
    }
    this.request(params);
  }
}

export {Addpersonnel}