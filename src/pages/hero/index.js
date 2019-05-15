import { connect } from 'dva';
import { Row, Col, Card, Radio } from 'antd';
import FreeHeroItem from './components/FreeHeroItem';
import styles from './index.less';

const RadioGroup = Radio.Group;

const heroType = [
  { key: 0, value: '全部' },
  { key: 1, value: '战士' },
  { key: 2, value: '法师' },
  { key: 3, value: '坦克' },
  { key: 4, value: '刺客' },
  { key: 5, value: '射手' },
  { key: 6, value: '辅助' },
];

function Hero(props) {
  console.log('hero::: -props', props);
  const { hero, dispatch, history } = props;
  const { heros = [], filterKey = 0, freeheros = [], itemHover = 0 } = hero;

  const onChange = e => {
    console.log(e.target.value);
    dispatch({
      type: 'hero/save',
      payload: {
        filterKey: e.target.value,
      },
    });
  };
  const onItemHover = index => {
    dispatch({
      type: 'hero/save',
      payload: {
        itemHover: index,
      },
    });
  };

  const onClickToDetails = ename => {
    console.log(1000, ename);
    history.push(`/herodetail/${ename}`);
  };

  return (
    <div className={styles.normal}>
      <div className={styles.info}>
        <Row className={styles.freehero}>
          <Col span={24}>
            <p>周免英雄</p>
            <div>
              {freeheros.map((data, index) => {
                return (
                  <FreeHeroItem
                    data={data}
                    itemHover={itemHover}
                    onItemHover={onItemHover}
                    thisIndex={index}
                    key={index}
                    handleClick={onClickToDetails}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
      <Card className={styles.radioPanel}>
        <RadioGroup onChange={onChange} value={filterKey}>
          {heroType.map(data => (
            <Radio value={data.key} key={`hero-rodio-${data.key}`}>
              {data.value}
            </Radio>
          ))}
        </RadioGroup>
      </Card>
      <Row>
        {heros
          .filter(item => filterKey === 0 || item.hero_type === filterKey)
          .reverse()
          .map(item => (
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
