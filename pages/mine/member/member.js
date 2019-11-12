// pages/mine/member/member.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    marker: [{
      id: 0,
      latitude: '28.68',
      longitude: "115.85",
      iconPath: "/images/position.png",
      width: "22",
      height: "22",
      label: {
        content: "中保信",
        color: "#2d69f3",
        anchorX: "14",
        anchorY: "-22",
        fontSize: 15
      }
    }, {
      id: 1,
      latitude: '34.62',
      longitude: "108.93",
      iconPath: "/images/position.png",
      width: "22",
      height: "22",
      label: {
        content: "志信行\n陕西分公司",
        color: "#2d69f3",
        anchorX: "-80",
        anchorY: "-22",
        fontSize: 15
      }
    }, {
      id: 2,
      latitude: '34.75',
      longitude: "113.62",
      iconPath: "/images/position.png",
      width: "22",
      height: "22",
      label: {
        content: "平保",
        color: "#2d69f3",
        anchorX: "14",
        anchorY: "-22",
        fontSize: 15
      }
    }, {
      id: 3,
      latitude: '31.83',
      longitude: "117.25",
      iconPath: "/images/position.png",
      width: "22",
      height: "22",
      label: {
        content: "平衡保险",
        color: "#2d69f3",
        anchorX: "-30",
        anchorY: "6",
        fontSize: 15
      }
    }, {
      id: 4,
      latitude: '36.67',
      longitude: "116.98",
      iconPath: "/images/position.png",
      width: "22",
      height: "22",
      label: {
        content: "协航风险管理",
        color: "#2d69f3",
        anchorX: "14",
        anchorY: "-22",
        fontSize: 15
      }
      }, {
        id: 5,
        latitude: '30.75',
        longitude: "121.33",
        iconPath: "/images/position.png",
        width: "22",
        height: "22",
        label: {
          content: "古众保险公估",
          color: "#2d69f3",
          anchorX: "14",
          anchorY: "-22",
          fontSize: 15
        }
      }, {
        id: 6,
        latitude: '30.28',
        longitude: "120.15",
        iconPath: "/images/position.png",
        width: "22",
        height: "22",
        label: {
          content: "正达兴保险\n公估浙江分公司",
          color: "#2d69f3",
          anchorX: "-30",
          anchorY: "6",
          fontSize: 15
        }
      }, {
        id: 7,
        latitude: '18.25',
        longitude: "109.50",
        iconPath: "/images/position.png",
        width: "22",
        height: "22",
        label: {
          content: "德泰保险公估\n海南分公司",
          color: "#2d69f3",
          anchorX: "14",
          anchorY: "-22",
          fontSize: 15
        }
      }, {
        id: 8,
        latitude: '40.22',
        longitude: "116.23",
        iconPath: "/images/position.png",
        width: "22",
        height: "22",
        label: {
          content: "汇德盛(北京)\n商务管理",
          color: "#2d69f3",
          anchorX: "14",
          anchorY: "-22",
          fontSize: 15
        }
      }, {
        id: 9,
        latitude: '32.07',
        longitude: "118.08",
        iconPath: "/images/position.png",
        width: "22",
        height: "22",
        label: {
          content: "方正公估",
          color: "#2d69f3",
          anchorX: "14",
          anchorY: "-22",
          fontSize: 15
        }
      }, {
        id: 10,
        latitude: '23.12',
        longitude: "113.27",
        iconPath: "/images/position.png",
        width: "22",
        height: "22",
        label: {
          content: "极安(广州)\n数据科技",
          color: "#2d69f3",
          anchorX: "14",
          anchorY: "-22",
          fontSize: 15
        }
      }, {
        id: 11,
        latitude: '34.27',
        longitude: "108.93",
        iconPath: "/images/position.png",
        width: "22",
        height: "22",
        label: {
          content: "众邦商务信息",
          color: "#2d69f3",
          anchorX: "14",
          anchorY: "-22",
          fontSize: 15
        }
      }, {
        id: 12,
        latitude: '26.88',
        longitude: "100.23",
        iconPath: "/images/position.png",
        width: "22",
        height: "22",
        label: {
          content: "硕翔保险理赔",
          color: "#2d69f3",
          anchorX: "14",
          anchorY: "-22",
          fontSize: 15
        }
      }, {
        id: 13,
        latitude: '31.90',
        longitude: "102.22",
        iconPath: "/images/position.png",
        width: "22",
        height: "22",
        label: {
          content: "四川正鼎新义\n保险调查公司",
          color: "#2d69f3",
          anchorX: "14",
          anchorY: "-22",
          fontSize: 15
        }
      }, {
        id: 14,
        latitude: '30.67',
        longitude: "104.07",
        iconPath: "/images/position.png",
        width: "22",
        height: "22",
        label: {
          content: "国盾企业管理",
          color: "#2d69f3",
          anchorX: "14",
          anchorY: "-22",
          fontSize: 15
        }
      }, {
        id: 15,
        latitude: '45.80',
        longitude: "126.53",
        iconPath: "/images/position.png",
        width: "22",
        height: "22",
        label: {
          content: "睿中保险公估",
          color: "#2d69f3",
          anchorX: "14",
          anchorY: "-22",
          fontSize: 15
        }
      },{
        id: 16,
        latitude: '37.38',
        longitude: "117.97",
        iconPath: "/images/position.png",
        width: "22",
        height: "22",
        label: {
          content: "A6工作室",
          color: "#2d69f3",
          anchorX: "14",
          anchorY: "-22",
          fontSize: 15
        }
      },{
        id: 17,
        latitude: '36.07',
        longitude: "103.82",
        iconPath: "/images/position.png",
        width: "22",
        height: "22",
        label: {
          content: "信衡商务",
          color: "#2d69f3",
          anchorX: "14",
          anchorY: "-22",
          fontSize:15
        }
      }],
    scale: 6,
    markerinfor: true,
    callphone: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var that = this;
    wx.getLocation({
      type: "gcj02",
      success: function(res) {
        const latitude = res.latitude
        const longitude = res.longitude

        // that.data.marker.push({
        //   id: 3,
        //   latitude: latitude,
        //   longitude: longitude,
        //   iconPath: "/images/position.png",

        //   width: "22",
        //   height: "22",
        //   label: {
        //     content: "中银保险有限公司",
        //     color: "#f37804ea",
        //     anchorX: "-110",
        //     anchorY: "-15"
        //   }
        // })

        console.log("marker", that.data.marker);

        that.setData({
          latitude: latitude,
          longitude: longitude,
          marker: that.data.marker
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  addscale: function() {
    var that = this;

    that.data.scale += 1;
    if (that.data.scale == 20) {
      that.data.scale = 20
    }

    that.setData({
      scale: that.data.scale
    })
  },

  reducescale: function() {
    var that = this;

    that.data.scale -= 1;
    if (that.data.scale == 3) {
      that.data.scale = 3
    }

    that.setData({
      scale: that.data.scale
    })
  },

  //标记点
  markertap: function(e) {
    var that = this;
    that.setData({
      index: e.markerId
    })

    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
    })

    that.animation = animation
    animation.translateY(146).step()
    that.setData({
      animationData: animation.export(),
      markerinfor: false
    })

    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 400)
  },

  callphone: function() {
    var that = this;

    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
    })

    that.animation = animation
    animation.translateY(146).step()
    that.setData({
      animationData: animation.export(),
      markerinfor: true,
      callphone: false
    })

    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 400)
  },

  phonenumber: function() {
    wx.makePhoneCall({
      phoneNumber: '029-89521836',
    })
  },

  cancel: function() {
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

    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        callphone: true
      })
    }.bind(this), 400)
  },




})