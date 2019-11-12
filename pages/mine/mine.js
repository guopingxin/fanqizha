// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personalbg:'',
    backlogin:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    wx.getFileSystemManager().readFile({
      filePath: "/images/personalbg.png", //选择图片返回的相对路径
      encoding: 'base64', //编码格式
      success: res => { //成功的回调
        // console.log('data:image/png;base64,' + res.data)
        that.setData({
          personalbg: res.data
        })
      }
    })
  },

  //编辑头像
  useredit:function(){
    wx.navigateTo({
      url: './useredit/useredit',
    })
  },

  //账户钱包
  wallet:function(){
    wx.navigateTo({
      url: './wallet/wallet',
    })
  },

  //查询记录
  query:function(){
    wx.navigateTo({
      url: './query/query',
    })
  },

  //案件记录
  caserecord:function(){
    wx.navigateTo({
      url: './case/case',
    })
  },

  //市场记录
  marketrecord:function(){
    wx.navigateTo({
      url: './market/market',
    })
  },

  //人员管理
  personmanage:function(){
    wx.navigateTo({
      url: './personmanage/personmanage',
    })
  },

  //退出登录
  backlogin:function(){
    var that = this;

    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
    })

    that.animation = animation
    animation.translateY(300).step()
    that.setData({
      animationData: animation.export(),
      backlogin: false
    })

    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 400)
    
  },


  sure:function(){
    wx.redirectTo({
      url: '../login/login',
    })
  },

  cancel:function(){
    var that = this;

    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
    })

    that.animation = animation
    animation.translateY(300).step()
    that.setData({
      animationData: animation.export(),
      
    })

    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        backlogin: true
      })
    }.bind(this), 400)
  },

  //成员机构
  memberorganization:function(){
    wx.navigateTo({
      url: './member/member',
    })
  }

})