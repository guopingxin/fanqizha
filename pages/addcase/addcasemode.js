import {Base} from "../../utils/base.js"

class Addcase extends Base{

  constructor(){
    super();
  }

  addcase(that, callback){
    var params = {
      url: '/service/event/caseAdd',
      type: 'POST',
      data: {
        case_no: that.data.case_no,
        car_no: that.data.car_no,
        car_model: that.data.car_model,
        happen_time: that.data.happen_time,
        happen_place: that.data.happen_place,
        case_type: that.data.case_type,
        insurance: that.data.insurance,
        driver_name: that.data.driver_name,
        driver_mobile: that.data.driver_mobile,
        insured_name: that.data.insured_name,
        insured_mobile: that.data.insured_mobile,
        describe: that.data.describe
      },
      sCallback: callback
    }
    this.request(params);
  }
}

export{Addcase}