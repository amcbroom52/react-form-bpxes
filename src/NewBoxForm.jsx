import { useState } from "react";

const INITIAL_STATE = {
  width: "",
  height: "",
  backgroundColor: "",
};

/** Renders a form to create new boxes
 *
 * props:
 * - createBox()
 *
 * state:
 * - formValues
 *
 * BoxList -> NewBoxForm
 *
 */

function NewBoxForm({ createBox }) {
  const [formValues, setFormValues] = useState(INITIAL_STATE);

  function handleChange(evt) {
    const { name, value} = evt.target;

    setFormValues(fValues => ({
      ...fValues,
      [name]:value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("formValues", formValues);
    createBox(formValues);
    setFormValues(INITIAL_STATE);
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        onChange={handleChange}
        value={formValues.width} />
      <br />

      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        onChange={handleChange}
        value={formValues.height} />
      <br />

      <label htmlFor="background-color">Background Color:</label>
      <input
        id="background-color"
        name="backgroundColor"
        onChange={handleChange}
        value={formValues.backgroundColor} />
      <br />

      <button type="submit">Add a new box!</button>

    </form>
  );
}

export default NewBoxForm;