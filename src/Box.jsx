function Box({ width, height, backgroundColor, id, removeBox, idx }) {
  const style = { width:`${width}px`, height: `${height}px`, backgroundColor };

  return (
    <div id={id}>
      <div style={style}></div>
      <button onClick={() => removeBox(idx)}>Remove The Box!</button>
    </div>
  );
}

export default Box;