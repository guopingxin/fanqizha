import {Base} from '../../utils/base.js'

class Detailsmode extends Base{
  
  constructor() {
    super();
  }

  //案件详情
  caseInfo(id, callback){
    var params = {
      url: '/service/event/caseInfo',
      type: 'GET',
      data: {
        id:id
      },
      sCallback: callback
    }
    this.request(params);
  }
}

export {Detailsmode}