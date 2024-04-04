/** Renders a Box based on given specifications
 *
 * props:
 * - width
 * - height
 * - backgroundColor
 * - id
 * - idx
 * - removeBox()
 *
 * state:
 * - none
 *
 * BoxList -> Box
 *
 */

function Box({ width, height, backgroundColor, id, removeBox}) {
  const style = {
    width:`${width}px`,
    height: `${height}px`,
    backgroundColor
  };

  return (
    <div id={id}>
      <div style={style}></div>
      <button onClick={() => removeBox(id)}>Remove The Box!</button>
    </div>
  );
}

export default Box;