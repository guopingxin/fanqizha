import {
  Base
} from '../../utils/base.js'

class Perator extends Base {
  constructor() {
    super();
  }

  peratorlist(keyname, callback) {
    var params = {
      url: '/service/service/taskList',
      type: 'GET',
      data: {
        keywords: keyname
      },
      sCallback: callback
    }

    this.request(params);
  }

  //分配作业员
  caseAllot(that, callback) {
    var params = {
      url: '/service/event/caseAllot',
      type: 'POST',
      data: {
        case_id: that.data.caseid,
        task_id: that.data.taskid
      },
      sCallback: callback
    }

    this.request(params);
  }
}

export {
  Perator
}