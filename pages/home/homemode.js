import {Base} from '../../utils/base.js'

class Home extends Base{
  constructor(){
    super();
  }

  //案件列表
  caselist(that,callback){
    var params = {
      url: '/service/event/caseList',
      type: 'GET',
      data: {
        car_no: that.data.car_no,
        page: that.data.page
      },
      sCallback: callback
    }
    this.request(params);
  }
}

export {Home}