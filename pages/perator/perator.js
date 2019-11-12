// pages/perator/perator.js
import {Perator} from './peratormode.js'
var perator = new Perator();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    peratorArray:[],
    letter:['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.data.caseid = options.caseid
    perator.peratorlist('',res=>{
      console.log(res)
      if(res.status == 1){
        that.setData({
          peratorArray:res.data
        })
      }
    })
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

  peratormode:function(e){

    var that = this
    that.data.taskid = e.detail.taskid
    perator.caseAllot(that,res=>{

      if(res.status == 1){

        var pages = getCurrentPages();
        var currPage = pages[pages.length - 1];   //当前页面
        var prevPage = pages[pages.length - 2];   //上一个页面

        prevPage.setData({
          temp: "fenpeisuccess"
        })  

        wx.navigateBack({
          delta:1
        })
      }else{
        wx.showToast({
          title: res.msg,
          icon:'none',
          duration:2000
        })
      }
    })
  }
})