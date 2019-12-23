import React, { useState } from 'react';
import { div as asmdDiv } from 'calculate-asmd';
import { useListenResize } from 'react-listen-resize';
import styles from './index.less';

function Rem(props) {
  const [dpr, setDpr] = useState(null);

  useListenResize(() => {
    const deviceWidth = document.documentElement.clientWidth;
    const dpr = asmdDiv(deviceWidth, 19.2);
    document.documentElement.style.fontSize = dpr + 'px';
    setDpr(dpr);
  }, true);

  return (
    <React.Fragment>
      <div className={styles.showDpr}>document font size: {dpr}px</div>
    </React.Fragment>
  );
}

export default Rem;
