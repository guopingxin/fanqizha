//底部tab模板
Component({
  properties: {
    tab: Array,
    caseid:String
  },
  data: {
    danju:true,
    jiean:true
  },
  methods: {

    tabitem:function(e){

      var that = this;

      if (e.currentTarget.dataset.itemtext == "添加进度"){
        
        wx.navigateTo({
          url: '../addprogress/addprogress?caseid='+that.properties.caseid,
        })
      }else if(e.currentTarget.dataset.itemtext == "分配作业员"){

        wx.navigateTo({
          url: '../perator/perator?caseid=' + that.properties.caseid,
        })
      } else if (e.currentTarget.dataset.itemtext == "委托案件"){
        wx.navigateTo({
          url: '../entrustcase/entrustcase?caseid=' + that.properties.caseid,
        })
      } else if (e.currentTarget.dataset.itemtext == "添加单据"){

        var that = this;

        var animation = wx.createAnimation({
          duration: 400,
          timingFunction: 'ease',
        })

        that.animation = animation
        animation.translateY(300).step()
        that.setData({
          animationData: animation.export(),
          danju: false
        })

        setTimeout(function () {
          animation.translateY(0).step()
          this.setData({
            animationData: animation.export()
          })
        }.bind(this), 400)
        
      } else if (e.currentTarget.dataset.itemtext == "结案") {

        var that = this;

        var animation = wx.createAnimation({
          duration: 400,
          timingFunction: 'ease',
        })

        that.animation = animation
        animation.translateY(300).step()
        that.setData({
          animationData: animation.export(),
          jiean: false
        })

        setTimeout(function () {
          animation.translateY(0).step()
          this.setData({
            animationData: animation.export()
          })
        }.bind(this), 400)
      }
    },

    cancel1:function(){
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
          danju: true
        })
      }.bind(this), 400)
    },

    cancel2: function () {
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
          jiean: true
        })
      }.bind(this), 400)
    }
  }
})