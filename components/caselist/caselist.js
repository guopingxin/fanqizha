//首页案件统计模板

Component({
  properties: {
    caselist:Array,
    serialshow:Boolean
  },
  data: {

  },
  methods: {

    todetails:function(e){

      console.log(e)
      var type = e.currentTarget.dataset.type
      var id = e.currentTarget.dataset.caseid

      wx.navigateTo({
        url: '../details/details?type=' + type + '&caseid=' + id,
      })
    }
  }
})