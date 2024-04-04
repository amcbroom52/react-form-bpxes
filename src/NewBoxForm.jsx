import { useState } from "react";

const INITIAL_STATE = {
  width: "",
  height: "",
  backgroundColor: "",
};

function NewBoxForm({ createBox }) {
  const [formValues, setFormValues] = useState(INITIAL_STATE);

  function handleChange(evt) {
    const {fieldName, fieldValue} = evt.target;

    setFormValues(fValues => ({
      ...fValues,
      [fieldName]: fieldValue
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
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

      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        onChange={handleChange}
        value={formValues.height} />

      <label htmlFor="background-color">Background Color:</label>
      <input
        id="background-color"
        name="backgroundColor"
        onChange={handleChange}
        value={formValues.backgroundColor} />

      <button type="submit">Add a new box!</button>

    </form>
  );
}

export default NewBoxForm;