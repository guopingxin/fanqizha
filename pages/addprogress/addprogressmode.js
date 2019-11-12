import {Base} from '../../utils/base.js'

class Addprogress extends Base{
  constructor() {
    super();
  }

  //添加案件进度
  addcaseevent(that, callback){
    
    var params = {
      url: '/service/event/schedule',
      type: 'POST',
      data: {
        title: that.data.describetext,
        picture: that.data.fileName,
        voice: that.data.voice,
        case_id:that.data.caseid
      },
      sCallback: callback
    }
    this.request(params);
  }
}

export {Addprogress}