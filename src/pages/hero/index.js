import { connect } from 'dva';
import { Row, Col } from 'antd';
import styles from './index.less';

function Hero(props) {
  console.log('hero::: ', props);
  const { hero } = props;
  const { heros = [] } = hero;
  return (
    <div className={styles.normal}>
      <h1>Page hero</h1>
      <Row>
        {heros.reverse().map(item => (
          <Col key={item.ename} span={3} className={styles.heroitem}>
            <img
              alt={item.cname}
              src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${
                item.ename
              }.jpg`}
            />
            <p>{item.cname}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default connect(({ hero }) => ({ hero }))(Hero);
