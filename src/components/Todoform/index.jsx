import React, { useState } from "react";
import PropTypes from "prop-types";

Todoform.propTypes = {
  onSubmit: PropTypes.func,
};

Todoform.defaultProps = {
  onSubmit: null,
};
function Todoform(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    const formValues = {
      title: value,
    };
    onSubmit(formValues);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
}

export default Todoform;
