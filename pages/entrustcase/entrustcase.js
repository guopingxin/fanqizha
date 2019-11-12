// pages/entrustcase/entrustcase.js
import {Entrustcase} from './entrustcasemode.js'
var entrustcase = new Entrustcase();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['陕西省', '西安', '雁塔区'],
    regionvalue:["","",""],
    casemode:['全面委托','合作委托','提供资源'],
    casemodevalue:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.data.caseid = options.caseid;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  //城市选择
  bindRegionChange:function(e){
    
    this.setData({
      regionvalue: e.detail.value
    })
  },

  //案件类型选择
  bindcasemodeChange:function(e){
    console.log('picker发送选择改变，携带值为', e)
    this.setData({
      casemodevalue: e.detail.value
    })
  },

  inputprice:function(e){
    var that = this;
    that.data.price = e.detail.value
  },

  submitweituo:function(){

    var that = this;

    if (that.data.regionvalue[0]) {

      if (that.data.casemodevalue) {

        if (that.data.price) {

          that.data.city = that.data.regionvalue[0] + that.data.regionvalue[1] + that.data.regionvalue[2]
          that.data.type = parseInt(that.data.casemodevalue)+1
          entrustcase.setEntrust(that, res => {
            if(res.status == 1){

              var pages = getCurrentPages();
              var currPage = pages[pages.length - 1];   //当前页面
              var prevPage = pages[pages.length - 2];   //上一个页面

              prevPage.setData({
                temp: "weituosuccess"
              })

              wx.navigateBack({
                delta: 1
              })
            }else{
              wx.showToast({
                title: res.msg,
                icon: 'none',
                duration: 2000
              })
            }
          })

        } else {
          wx.showToast({
            title: '请填写案件金额!',
            icon: 'none',
            duration: 2000
          })
        }

      } else {
        wx.showToast({
          title: '请选择案件类型!',
          icon: 'none',
          duration: 2000
        })
      }
    } else {
      wx.showToast({
        title: '请选择委托城市!',
        icon: 'none',
        duration: 2000
      })
    }
    
  }
})