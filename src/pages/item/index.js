import { connect } from 'dva';
import styles from './index.css';

function Item(props) {
  console.log('Item::: ', props);

  return (
    <div className={styles.normal}>
      <h1>Page Item</h1>
      <h2>This is {JSON.stringify(props.item)}</h2>
    </div>
  );
}

export default connect(({ item }) => ({ item }))(Item);
