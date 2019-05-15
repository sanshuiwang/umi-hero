import styles from './ename.css';

export default function(props) {
  console.log('herodetails:: -props', props);
  const { match } = props;
  console.log(match);

  return (
    <div className={styles.normal}>
      <h1>Page ename</h1>
    </div>
  );
}
