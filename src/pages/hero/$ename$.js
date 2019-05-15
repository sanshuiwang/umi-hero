export default function(props) {
  console.log('details:: -props', props);

  const { match } = props;
  console.log(match);
  return (
    <div>
      <h1>herodetail ename Page ename</h1>
    </div>
  );
}
