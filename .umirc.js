import { defineConfig } from 'umi';
import HeaderLayout from './src/layout/HeaderLayout'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {
  //   name: '未来社区服务平台',
  //   // logout: () => { }, // do something
  //   // rightRender: data => (<HeaderLayout {...data} />),
  //   // rightRender: data => "sddsd",
  //   headerRender: () => (<span>asdad</span>),
  //   headerTitleRender: () => (<span>asdad</span>),
  //   rightContentRender: () => (<span>asdad</span>)
  // },
  dva: {
    immer: true,
    hmr: false,
  },
  plugins: ['@alitajs/tabs-layout'],
  tabsLayout: [/./],
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
  title: '未来社区服务平台',
  routes: [
    {
      path: '/',
      component: '@/layout/BasicLayout.jsx',
      name: '未来社区服务平台',
      flatMenu: true,
      routes: [
        {
          path: '/building', redirect: '/building/map', menu: {
            name: '欢迎', // 兼容此写法
            icon: 'smile',
          },
          routes: [
            {
              path: '/building/map',
              component: '@/pages/buildingManage/buildingMap/inedx.jsx',
              name: '建筑一张图',
              title: '建筑一张图',
              menu: {
                name: '建筑一张图', // 兼容此写法
                icon: 'smile',
              },
              layout: {
                hideNav: false,
              },
            },
            {
              path: '/building/apartment',
              component: '@/pages/buildingManage/apartment/index.jsx',
              name: '公寓组团',
              menu: {
                name: '公寓组团', // 兼容此写法
                icon: 'smile',
              },
              layout: {
                hideNav: false,
              },
            },
          ]
        },
      ]
    },

  ],
});
