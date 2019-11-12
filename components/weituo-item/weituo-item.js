Component({
  properties: {
    weituolist: Array,
    channel:String
  },
  data: {

  },
  methods: {

    weituodetail:function(e){

      var channel = e.currentTarget.dataset.channel;

      if (channel == "find"){
        wx.navigateTo({
          url: '../weituodetail/weituodetail',
        })
      }else{
        wx.navigateTo({
          url: '../../details/details',
        })
      }
      
    }
  }
})