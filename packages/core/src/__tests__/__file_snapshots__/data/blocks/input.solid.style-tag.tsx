import { css } from "solid-styled-components";

import { Builder } from "@builder.io/sdk";

function FormInputComponent(props) {
  return (
    <>
      <input
        {...props.attributes}
        key={
          Builder.isEditing && props.defaultValue
            ? props.defaultValue
            : "default-key"
        }
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        value={props.value}
        defaultValue={props.defaultValue}
        required={props.required}
      />
    </>
  );
}

export default FormInputComponent;
