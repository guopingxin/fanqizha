// pages/mine/personmanage/addpersonnel/addpersonnel.js
import {Addpersonnel} from './addpersonnelmode.js'

var addpersonnel = new Addpersonnel();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  addpersonal:function(e){
    var that = this
    that.data.name = e.detail.value.username
    that.data.password = e.detail.value.password
    that.data.tel = e.detail.value.tel
    
    if (that.data.name){
      if (that.data.tel){
        var regPhone = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/
        if (regPhone.test(that.data.tel)){
          if (!that.data.password){
            that.data.password = '123456'
            that.add();
          }else{
            if (that.data.password.length<6){
              wx.showToast({
                title: '密码不能小于6位!',
                icon: 'none',
                duration: '2000'
              })
            }else{
              that.add();
            }
          }
        }else{
          wx.showToast({
            title: '手机号输入不正确!',
            icon: 'none',
            duration: '2000'
          })
        }
      }else{
        wx.showToast({
          title: '联系电话不能为空!',
          icon: 'none',
          duration: '2000'
        })
      }
    }else{
      wx.showToast({
        title: '姓名不能为空!',
        icon:'none',
        duration:'2000'
      })
    }
  },

  add:function(){
    var that = this;
    addpersonnel.addpersonal(that.data.name, that.data.password, that.data.tel,res=>{
      if (res.status == 1){
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