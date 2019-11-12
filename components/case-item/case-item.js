//案件查询记录
Component({
  properties: {
    caselist: Array
  },
  data: {

  },
  methods: {

    todetail: function (e) {
      wx.navigateTo({
        url: '../../details/details',
      })
    }

  }
})