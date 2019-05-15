import { Layout, Menu } from 'antd';
import Link from 'umi/link';

import styles from './index.css';

const { Header, Content, Footer } = Layout;

const menuData = [
  {
    route: 'hero',
    name: '英雄',
  },
  {
    route: 'item',
    name: '局内道具',
  },
  {
    route: 'summoner',
    name: '召唤师技能',
  },
];

function BasicLayout(props) {
  const {
    location: { pathname },
    children,
  } = props;

  return (
    <Layout>
      <Header>
        <div className={styles.logo}>王者荣耀资料库</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[pathname]}
          style={{ lineHeight: '64px' }}
        >
          {menuData.map(menu => {
            return (
              <Menu.Item key={`/${menu.route}`}>
                <Link to={menu.route}>{menu.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Yang Wang, Skilled Use!</Footer>
    </Layout>
  );
}

export default BasicLayout;
