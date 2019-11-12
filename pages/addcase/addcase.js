// pages/addcase/addcase.js
var dateTimePicker = require("../../utils/dateTimePicker.js");
import {Addcase} from "./addcasemode.js"
var addcase = new Addcase();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    carmode: "请选择车辆型号",
    startYear: 2010,
    endYear: 2050,
    dangertime: "请选择出险时间",
    casemode: "请选择案件类型",
    casemodeArray: ["车务调查", "人伤调查", "财产险调查"],
    casemodeindex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.initializetime();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    if (currPage.data.temp) {
      this.setData({
        carmode: currPage.data.temp.seriesName,
        carInfo: currPage.data.temp,
        color: "#000"
      })
    }
  },

  //选择车型
  toSelectBrand: function() {
    wx.navigateTo({
      url: './car-brand/car-brand',
    })
  },

  //初始化时间
  initializetime: function() {
    // 获取完整的年月日 时分秒，以及默认显示的数组
    var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    // 精确到分的处理，将数组的秒去掉
    var lastArray = obj1.dateTimeArray.pop();

    this.setData({
      dateTimeArray: obj1.dateTimeArray,
      dateTime: obj1.dateTime
    })
  },

  changeDateTime(e) {

    this.setData({
      dateTime: e.detail.value,
      dangertime: ""
    });
  },

  changecasemode: function(e) {
    var that = this;
    const val = e.detail.value;
    that.setData({
      casemodeindex: val,
      casemode: ''
    })
  },

  addsubmit: function(e) {

    var that = this
    
    if (e.detail.value.caseId) {

      that.data.case_no = e.detail.value.caseId

      if (e.detail.value.carId) {

        that.data.car_no = e.detail.value.carId

        if (that.data.carmode != "请选择车辆型号") {

          that.data.car_model = that.data.carmode

          if (that.data.dangertime != '请选择出险时间') {

            that.data.happen_time = that.data.dateTimeArray[0][that.data.dateTime[0]] +"-"+ that.data.dateTimeArray[1][that.data.dateTime[1]] +
              "-"+ that.data.dateTimeArray[2][that.data.dateTime[2]] + " " + that.data.dateTimeArray[3][that.data.dateTime[3]] + ':' + that.data.dateTimeArray[4][that.data.dateTime[4]] 

            if (e.detail.value.dangeraddress) {

              that.data.happen_place = e.detail.value.dangeraddress

              if (that.data.casemode !="请选择案件类型") {

                that.data.case_type = parseInt(that.data.casemodeindex)+1

                if (e.detail.value.acceptcompany) {

                  that.data.insurance = e.detail.value.acceptcompany

                  if (e.detail.value.drivingname) {

                    that.data.driver_name = e.detail.value.drivingname

                    if (e.detail.value.drivingtel) {

                      that.data.driver_mobile = e.detail.value.drivingtel

                      if (e.detail.value.insuredname) {

                        that.data.insured_name = e.detail.value.insuredname

                        if (e.detail.value.insuredtel) {

                          that.data.insured_mobile = e.detail.value.insuredtel

                          if (e.detail.value.casedescript) {

                            that.data.describe = e.detail.value.casedescript
                            
                            addcase.addcase(that,res=>{

                              if(res.status == 1){
                                wx.switchTab({
                                  url: '../home/home',
                                })
                              }else{
                                wx.showToast({
                                  title: res.smg,
                                  icon:"none",
                                  duration:2000
                                })
                              }
                            })

                          }else{
                            wx.showToast({
                              title: '案件描述不能为空!',
                              icon: "none",
                              duration: 2000
                            })
                          }
                        }else{
                          wx.showToast({
                            title: '被保人电话不能为空!',
                            icon: "none",
                            duration: 2000
                          })
                        }
                      }else{
                        wx.showToast({
                          title: '被保人姓名不能为空!',
                          icon: "none",
                          duration: 2000
                        })
                      }
                    }else{
                      wx.showToast({
                        title: '驾驶员电话不能为空!',
                        icon: "none",
                        duration: 2000
                      })
                    }
                  }else{
                    wx.showToast({
                      title: '驾驶员姓名不能为空!',
                      icon: "none",
                      duration: 2000
                    })
                  }
                }else{
                  wx.showToast({
                    title: '承保公司不能为空!',
                    icon: "none",
                    duration: 2000
                  })
                }
              }else{
                wx.showToast({
                  title: '案件类型不能为空!',
                  icon: "none",
                  duration: 2000
                })
              }
            }else{
              wx.showToast({
                title: '地点不能为空!',
                icon: "none",
                duration: 2000
              })
            }
          }else{
            wx.showToast({
              title: '出险时间不能为空!',
              icon: "none",
              duration: 2000
            })
          }
        }else{
          wx.showToast({
            title: '车辆型号不能为空!',
            icon: "none",
            duration: 2000
          })
        }
      }else{
        wx.showToast({
          title: '车牌号不能为空!',
          icon: "none",
          duration: 2000
        })
      }
    }else{
      wx.showToast({
        title: '案件号不能为空!',
        icon:"none",
        duration:2000
      })
    }


  }

  // changeDateTimeColumn(e) {

  //   console.log("TT",e);
  //   var arr = this.data.dateTime,
  //   dateArr = this.data.dateTimeArray;

  //   arr[e.detail.column] = e.detail.value;
  //   dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

  //   this.setData({
  //     dateTimeArray: dateArr
  //   });
  // },


})