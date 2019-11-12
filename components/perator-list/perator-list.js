//分配作业员模板
Component({
  properties: {
    peratorArray: Array
  },
  data: {

  },
  methods: {

    submitperator:function(e){
      this.triggerEvent('taskid', {
        taskid:e.detail.value.radiogroup
      })
    },
  }
})