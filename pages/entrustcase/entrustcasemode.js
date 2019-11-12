import {Base} from '../../utils/base.js'

class Entrustcase extends Base{
  constructor(){
    super()
  }

  setEntrust(that, callback){
    var params = {
      url: '/service/entrust/setEntrust',
      type: 'POST',
      data: {
        case_id: that.data.caseid,
        city: that.data.city,
        type: that.data.type,
        price: that.data.price
      },
      sCallback: callback
    }
    this.request(params);
  }
}

export {Entrustcase}