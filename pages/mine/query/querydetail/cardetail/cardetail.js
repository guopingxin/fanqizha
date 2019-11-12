// pages/mine/query/querydetail/cardetail/cardetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accidentimg: ['https://612d-a-data-1a3ebf-1257782233.tcb.qcloud.la/fanqizhalianmeng/accidentimg1.png?sign=4501b2f06963d06c9dfaceeff33e5d4c&t=1568618274', 'https://612d-a-data-1a3ebf-1257782233.tcb.qcloud.la/fanqizhalianmeng/accidentimg2.png?sign=a7a54c1e602bc2a04d910616f75f6277&t=1568618325','https://612d-a-data-1a3ebf-1257782233.tcb.qcloud.la/fanqizhalianmeng/accidentimg3.png?sign=122442877c85850310f5fc05143ca327&t=1568618342'],
    eyeTag:true,
    tel:"13892586824"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },


  onEye:function(){
    var that = this;
    if(that.data.eyeTag){

      that.data.allnumber = that.data.tel;
      var tel = that.data.tel.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');

      that.setData({
        eyeTag:false,
        tel:tel
      })
      
    }else{

      that.setData({
        eyeTag: true,
        tel: that.data.allnumber
      })
    }
  }
  
})