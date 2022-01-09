//index.js
Page({
  data: {
    number: 0,
    inputValue: '',
  },

  onLoad() {
    const number = Math.floor(Math.random() * 100 + 1);
    const inputValue = '';
    this.setData({ number, inputValue });
  },

  onInput(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },

  onSubmit() {
    const  { number, inputValue } = this.data;
    if (inputValue < 1 || inputValue > 100 || !Number.isInteger(parseFloat(inputValue))) {
      wx.showToast({
        title: '请输入 1~100 的整数！',
        icon: 'none',
      });
      return;
    }
    if (inputValue != number) {
      if (inputValue > number) {
        wx.showToast({
          title: '猜大了！',
          icon: 'none',
        });
      } else {
        wx.showToast({
          title: '猜小了！',
          icon: 'none',
        });
      }
      return;
    }
    wx.showModal({
      content: '恭喜你！猜对了！',
      showCancel: false,
      success: () => {
        this.onLoad();
      },
    });
  },
})
