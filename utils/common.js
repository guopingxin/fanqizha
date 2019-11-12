var app = getApp();
import {
  Config
} from './config.js'

//上传发动态的文件
function uploadDynamic(that) {
  return new Promise(function(resolve, reject) {

    console.log("###", that.data.mediaSrc);
    console.log("%%%%" + that.data.fileType);

    wx.uploadFile({
      url: Config.restUrl + '/service/common/imgUploads',
      method: 'POST',
      name: 'image',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'PHPSESSID=' + app.globalData.sessionId
      },
      filePath: that.data.mediaSrc,
      success: function(res) {

        console.log("444444444" + JSON.stringify(res.data));
        var jsonStr = res.data;
        jsonStr = jsonStr.replace(" ", "");
        jsonStr = jsonStr.replace(/\ufeff/g, ""); //重点
        res.data = JSON.parse(jsonStr);
        if (res.data.status == 1) {
          that.data.fileName = res.data.file_name
          console.log(that.data.fileName)
          resolve(that)
        } else if (res.data.status == -2) {
          wx.hideLoading()
          wx.showModal({
            title: '文件大于2M',
            content: '',
          })
          reject(that)
        }

      },
      fail: function() {
        reject(that)
      },

    })
  })
}

//上传录音
function voiceUploads(that) {
  return new Promise(function(resolve, reject) {

    wx.uploadFile({
      url: Config.restUrl + '/service/common/voiceUploads',
      method: 'POST',
      name: 'file',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'PHPSESSID=' + app.globalData.sessionId
      },
      filePath: that.data.voiceSrc,
      success: function(res) {
        console.log("res",res);
        var jsonStr = res.data;
        jsonStr = jsonStr.replace(" ", "");
        jsonStr = jsonStr.replace(/\ufeff/g, ""); //重点
        res.data = JSON.parse(jsonStr);
        if (res.data.status == 1) {
          
          that.data.fileName = res.data.file_name

          console.log(that.data.fileName)
          resolve(that)
        }
      },
      fail: function () {
        reject(that)
      },
    })
  })
}



module.exports = {
  uploadDynamic: uploadDynamic,
  voiceUploads: voiceUploads
}