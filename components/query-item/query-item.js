//查询记录的模板
Component({
  properties: {
    querylist: Array,
    flag:String
  },
  data: {

  },
  methods: {

    todetail:function(e){

      var that = this;
      if(that.properties.flag == "1"){
        wx.navigateTo({
          url: '../../mine/query/querydetail/querydetail',
        })
      }else{
        wx.navigateTo({
          url: './querydetail/querydetail',
        })
      }
      
    }

  }
})