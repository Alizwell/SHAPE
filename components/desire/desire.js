Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  data: {
    title: ["序号", "项目", "消耗"],
    allDesires: [
      {
        name: 'Play Dota2',
        waste: 60
      },
      {
        name: 'Watch Dota2 Vide',
        waste: 100
      },
      {
        name: '斗地主',
        waste: 60
      },
      {
        name: '刷知乎',
        waste: 60
      },
      {
        name: 'Play Dota2',
        waste: 60
      },
      {
        name: 'Watch Dota2 Vide',
        waste: 100
      },
      {
        name: '斗地主',
        waste: 60
      },
      {
        name: '刷知乎',
        waste: 60
      },
      {
        name: 'Play Dota2',
        waste: 60
      },
      {
        name: 'Watch Dota2 Vide',
        waste: 100
      },
      {
        name: '斗地主',
        waste: 60
      },
      {
        name: '刷知乎',
        waste: 60
      },
      {
        name: 'Play Dota2',
        waste: 60
      },
      {
        name: 'Watch Dota2 Vide',
        waste: 100
      },
      {
        name: '斗地主',
        waste: 60
      },
      {
        name: '刷知乎',
        waste: 60
      },
      {
        name: 'Play Dota2',
        waste: 60
      },
      {
        name: 'Watch Dota2 Vide',
        waste: 100
      },
      {
        name: '斗地主',
        waste: 60
      },
      {
        name: '刷知乎',
        waste: 60
      }
    ]
  },
  methods: {
    
  }
})
