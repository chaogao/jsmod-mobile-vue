docute.init({
  home: '/zh/README.md',

  nav: {
    default: [
      {
        title: '首页',
        path: '/zh/'
      },

      {
        title: 'API',
        type: 'dropdown',
        items: [
          {
            title: '弹出层组',
            path: '/zh/dialog/'
          },
          {
            title: '操作控件组',
            path: '/zh/functions/'
          },
        ]
      }
    ],
  }
});
