function Box({ width, height, backgroundColor, id, removeBox }) {
  const style = { width:`${width}px`, height: `${height}px`, backgroundColor };
  return (
    <div id={id}>
      <div style={style}></div>
      <button onClick={removeBox}>Remove The Box!</button>
    </div>
  );
}

export default Box;