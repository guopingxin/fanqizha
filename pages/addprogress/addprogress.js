// pages/addprogress/addprogress.js
var imgId = 0;
const recorderManager = wx.getRecorderManager();
import common from '../../utils/common.js';
import {Addprogress} from './addprogressmode.js';
var addprogress = new Addprogress();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    voiceIsshow: false,
    imagecell: [],
    margin: 120,
    playvoice: true,
    fileNameTemp:'',
    fileType:'img',
    voice:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.data.caseid = options.caseid;
  },

  chooseimg: function() {
    var that = this
    wx.chooseImage({
      count: 9,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        
        var tempPicLength = res.tempFilePaths.length;
        if (tempPicLength + that.data.imagecell.length > 9) {
          res.tempFilePaths = res.tempFilePaths.slice(0, 9 - that.data.imagecell.length)
        }
        for (let i in res.tempFilePaths) {
          that.data.imagecell.push({
            id: imgId++,
            path: res.tempFilePaths[i]
          })
        }

        that.setData({
          imagecell: that.data.imagecell
        })
      },
      fail: function(res) {

      }
    })
  },


  //删除照片
  deleteimg: function(e) {

    var that = this;
    for (var item in that.data.imagecell) {
      if (that.data.imagecell[item].id == e.currentTarget.id) {
        that.data.imagecell.splice(item, 1)
        that.setData({
          imagecell: that.data.imagecell
        })
        break
      }
    }
  },

  //是否打开录音
  changeimg: function() {
    var that = this;
    if (that.data.voiceIsshow) {
      that.setData({
        voiceIsshow: false
      })
      // recorderManager.stop();
    } else {
      that.setData({
        voiceIsshow: true,
        playvoice: true,
        bg: "white"
      })
    }
  },

  //点击录音
  voice: function() {
    var that = this;
    if (that.data.playvoice) {
      that.setData({
        playvoice: false,
        bg: "#2d69f3"
      })
      const options = {
        duration: 60000,
        format: "mp3",
        frameSize: 50
      }

      recorderManager.start(options);

      // wx.getRecorderManager().onError(console.error)

    } else {
      that.setData({
        playvoice: true,
        bg: "white"
      })

      recorderManager.stop();

      recorderManager.onStop(res => {

        console.log("hhhhh",res);

        if (res.duration <= 1000) {
          wx.showToast({
            title: '录音时长太短,请重新录音!',
            icon: "none",
            duration: 2000
          })

          return
        }
        that.data.voiceSrc = res.tempFilePath
      })
    }
  },

  //提交案件进度
  submitprogress: function(e) {

    var that = this;
    
    if (that.data.describetext) {

      wx.showLoading({
        title: '上传中',
      })

      if (that.data.imagecell) {
        
        that.uploadimg(0, that)

      } else {

        addprogress.addcaseevent(that,res=>{
          wx.hideLoading();
          if (res.status == 1) {

            wx.showToast({
              title: '进度添加成功!',
              icon: 'none',
              duration: 2000
            })

            setTimeout(function () {
              wx.navigateBack({
                delta: 1
              })
            }, 2000)
          }
        })
      }

    } else {

      wx.showToast({
        title: '案件描述不能为空!',
        icon: 'none',
        duration: 2000
      })

      return
    }
  },

  //案件描述
  inputdescribe: function(e) {

    var that = this;
    that.data.describetext = e.detail.value;

  },


  //上传图片
  uploadimg: function(i, that) {

    if (i < that.data.imagecell.length) {

      that.upp(that, i, res => {
        that.uploadimg(i + 1, that)
      })
    } else {

      console.log('上传惋惜和' + that.data.fileNameTemp)
      that.data.fileName = that.data.fileNameTemp.substr(1, that.data.fileNameTemp.length);

      addprogress.addcaseevent(that,res=>{
        wx.hideLoading();
        if(res.status == 1){

          wx.showToast({
            title: '进度添加成功!',
            icon:'none',
            duration:2000
          })

          setTimeout(function(){
            wx.navigateBack({
              delta:1
            })
          },2000)
        }
      })
    }
  },

  upp: function (that, i, callback) {

    that.data.mediaSrc = that.data.imagecell[i].path

    common.uploadDynamic(that).then(function () {
      console.log('上传' + i)
      console.log(that.data.fileName)
      console.log(JSON.stringify(that.data))
      that.data.fileNameTemp = that.data.fileNameTemp + ',' + that.data.fileName
      callback(that.data.fileNameTemp)
    })
  },

  //上传录音
  uploadvoice:function(){
    var that = this;
    if (that.data.voiceSrc){
      common.voiceUploads(that).then(function(){
        console.log("tt", that.data.fileName)
        that.data.voice = that.data.fileName
      })
    }else{
      wx.showToast({
        title: '暂无录音，请录音完成后上传!',
        icon:'none',
        duration:2000
      })
    }
  },


})