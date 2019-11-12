// pages/details/details.js
import {Detailsmode} from './detailsmode.js'

var detailsmode = new Detailsmode();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:[
    {
      imgurl:'/images/icon_tianjiajindu@2x.png',
      text:"添加进度"
    },
    {
      imgurl: '/images/icon_fenpeizuoyeyuan@2x.png',
      text: "分配作业员"
    },
    {
      imgurl: '/images/icon_weituoanjian@2x.png',
      text: "委托案件"
    }],

    bottomTab:true,
    isprogress:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    if (options.type == 4){
      that.setData({
        bottomTab:true,
        caseid: options.caseid
      })
    } else if (options.type == 3){
       var tab = [
        {
          imgurl: '/images/icon_tianjiajindu@2x.png',
          text: "添加进度"
        },
        {
          imgurl: '/images/icon_tianjiadanju@2x.png',
          text: "添加单据"
        },
        {
          imgurl: '/images/icon_jiean@2x.png',
          text: "结案"
        }]
      that.setData({
        bottomTab: false,
        tab: tab,
        caseid: options.caseid
      })
    } else if (options.type == 2){
      that.setData({
        bottomTab: true,
        prograss:false,
        caseprograss:'已分配',
        caseid: options.caseid
      })
    } else if (options.type == 5) {
      that.setData({
        bottomTab: true,
        prograss: false,
        caseprograss: '委托中',
        caseid: options.caseid
      })
    } else if (options.type == 6) {
      that.setData({
        bottomTab: true,
        prograss: false,
        caseprograss: '已委托',
        caseid: options.caseid
      })
    }else{
      that.setData({
        bottomTab: false,
        caseid: options.caseid,
      })
    }

    
  },

 

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    detailsmode.caseInfo(that.data.caseid, res => {
      that.setData({
        caseInfo: res.data.case_info,
        schedules: res.data.schedules
      })
    })

    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    if (currPage.data.temp) {
      if (currPage.data.temp == 'weituosuccess'){
        that.setData({
          bottomTab: true,
          prograss: false,
          caseprograss: '委托中',
        })
      } else if (currPage.data.temp == 'fenpeisuccess'){
        that.setData({
          bottomTab: true,
          prograss: false,
          caseprograss: '分配中',
        })
      }
      
    }
  },

  previewImage:function(e){
    
    var imgurl = e.currentTarget.dataset.imgurl

    wx.previewImage({
      urls: [imgurl],
    })
  }

  
})