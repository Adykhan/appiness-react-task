import React from "react";

const index = (props) => {
  return (
    <React.Fragment>
      <label>{props.label}</label>
      <input
        name={props.name}
        value={props.value}
        className={"form-control " + props.className}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </React.Fragment>
  );
};

index.defaultProps = {
  className: "",
  placeholder: "",
  type: "",
  label: "",
};

export default index;
