Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/components/desire/desire",
      text: "欲望库"
    }, {
      pagePath: "/components/achievement/achievement",
      text: "成就库"
    }, {
      pagePath: "/components/bill/bill",
      text: "账单"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})