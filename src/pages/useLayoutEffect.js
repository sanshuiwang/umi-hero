import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';

export default () => {
  const divRef = useRef(null);

  const [height, setHeight] = useState(100);

  useEffect(() => {
    console.log(100, '执行useEffect');
  });

  useLayoutEffect(() => {
    // DOM 更新完成后打印出 div 的高度
    console.log('divRef:: ', divRef);

    console.log('useLayoutEffect: ', divRef.current.clientHeight);
  });

  return (
    <>
      <div ref={divRef} style={{ background: 'red', height: height }}>
        Hello
      </div>
      <button onClick={() => setHeight(height + 50)}>改变 div 高度</button>
    </>
  );
};
