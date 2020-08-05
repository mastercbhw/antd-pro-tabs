import React from 'react';
import { Breadcrumb } from 'antd'
import { TabsLayout } from 'umi';
import ProLayout from '@ant-design/pro-layout'
import { Link } from 'umi'
import styles from './BasicLayout.less'
// 平铺路由
const getFlatMenuKeys = (menuData, parentName = '') => {
  let keys = [];
  menuData.forEach(item => {
    const name = item.name || item.menu?.name
    keys.push({ path: item.path, title: name, parentName });
    if (item.routes) {
      keys = keys.concat(getFlatMenuKeys(item.routes, name));
    }
  });
  return keys;
};

const menus = [
  {
    "path": "/building",
    "children": [
      {
        "path": "/building/apartment",
        "name": "11111"
      },
      {
        "path": "/building/map",
        "name": "22222"
      },
    ]
  }
  // ....
]


const BasicLayout = (props) => {
  console.log("BasicLayout -> props", props)
  const { location: { pathname } } = props
  // 平铺路由，此数据为tabsLayout服务，为了tabs显示中文
  const flatMenu = getFlatMenuKeys([props.route])
  const matchName = flatMenu.find(f => f.path === pathname)
  console.log("BasicLayout -> matchName", matchName)
  console.log("BasicLayout -> flatMenu", flatMenu)
  return (
    <ProLayout
      {...props}
      locale="zh-CN"
      title="未来社区管理平台"
      siderWidth={220}
      headerContentRender={() => (
        <div className={styles.header}>
          <Breadcrumb>
            <Breadcrumb.Item>{matchName?.parentName}</Breadcrumb.Item>
            <Breadcrumb.Item>{matchName?.title}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      )}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
    // breadcrumbRender={() => menus}
    >
      <TabsLayout {...props} menu={flatMenu} />
    </ProLayout>
  );
};

export default BasicLayout;
