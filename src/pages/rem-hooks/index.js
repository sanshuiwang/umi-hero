import React, { useState, useEffect } from 'react';
import { div as asmdDiv } from 'calculate-asmd';
import { useListenResize } from 'react-listen-resize';
import styles from './index.css';

function Rem(props) {
  const [dpr, setDpr] = useState(null);

  useEffect(() => {});

  useListenResize(() => {
    const deviceWidth = document.documentElement.clientWidth;
    const dpr = asmdDiv(deviceWidth, 19.2);
    document.documentElement.style.fontSize = dpr + 'px';
    setDpr(dpr);
  }, true);

  return (
    <React.Fragment>
      <div className={styles.showDpr}>document font size: {dpr}px</div>
      {/**两个div也组合不了一个border,甚至不能radius */}
      <div className={styles.showBorderWrapper}>
        <div className={styles.showBorder}>下边有根线：： </div>
      </div>
    </React.Fragment>
  );
}

export default Rem;
