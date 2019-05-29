// pages/animate/animate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    anmiteData:{}
    // 初始化动画元素

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let animation = wx.createAnimation({
        // 动画的持续时间 duration
      // 动画的效果 timingfunction
      // 动画的延迟时间delay
      // 动画的中心点
        duration:1000,
        timingFunction:'linear',
        delay:100
      });
      // 需要吧动画挂载到实例上面
      this.animation = animation;
      animation.rotate(360).scale(0.5).step();
      // 把animation赋值给我们的动画对象anmiteData
      setTimeout(()=>{
        this.setData({
          anmiteData:animation.export()
        });
      },1000)
      
       // export 导出动画队列 export方法每次调用后会清掉之前的动画操作，如果不写export就无法进行下一次动画
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})