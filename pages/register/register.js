// pages/register/register.js
import {Register} from './registermode.js';
var registerMode = new Register();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    code:"发送验证码"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onHide: function(){
    var that = this;
    clearInterval(that.data.time)
  },

  obtainphone:function(e){
    var that = this;
    that.data.mobile = e.detail.value;
    
  },

  sendcode:function(){

    var that = this;
    var num = 60
    var regPhone = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/

    if (regPhone.test(that.data.mobile)){

      registerMode.setCode(that.data.mobile,res=>{

        if(res.status == 1){
          wx.showToast({
            title: '验证码已发送!',
            icon: 'none',
            duration: 2000
          })

          that.setData({
            code: num + "s"
          })

          that.data.time = setInterval(function () {
            num--;
            if (num < 1) {
              that.setData({
                code: "发送验证码"
              })
              clearInterval(that.data.time)
            } else {
              that.setData({
                code: num + "s"
              })
            }
          }, 1000)
  
        }else{
          wx.showToast({
            title: '验证码发送失败!',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }else{
      wx.showToast({
        title: '请核对您输入的手机号!',
        icon: 'none',
        duration: 2000
      })
    } 
  },

  registersubmit:function(e){

    var that = this;
    var regPhone = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/
    var regName = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/


    if (e.detail.value.username){

      if (regName.test(e.detail.value.username)){

        if (e.detail.value.companyname){

          if (e.detail.value.mobile){

            if(e.detail.value.code){

              if (e.detail.value.password){

                that.data.true_name = e.detail.value.username;
                that.data.password = e.detail.value.password;
                that.data.name = e.detail.value.companyname;
                that.data.mobile = e.detail.value.mobile;
                that.data.code = e.detail.value.code;

                registerMode.register(that,res=>{

                  console.log(res);
                  if(res.status == 1){
                    wx.redirectTo({
                      url: '../login/login',
                    })
                  }else{
                    wx.showToast({
                      title: res.msg,
                      icon: 'none',
                      duration: 2000
                    })
                  }
                })

              }else{

                wx.showToast({
                  title: '密码不能为空!',
                  icon: 'none',
                  duration: 2000
                })
              }

            }else{

              wx.showToast({
                title: '验证码不能为空!',
                icon: 'none',
                duration: 2000
              })
            }

          }else{
            wx.showToast({
              title: '手机号不能为空!',
              icon: 'none',
              duration: 2000
            })
          }

        }else{
          wx.showToast({
            title: '公司名称不能为空!',
            icon: 'none',
            duration: 2000
          })
        }

      }else{
        wx.showToast({
          title: '请核对您输入的姓名!',
          icon: 'none',
          duration: 2000
        })
      }
    }else{
      wx.showToast({
        title: '姓名不能为空!',
        icon: 'none',
        duration: 2000
      })
    }
  }

})