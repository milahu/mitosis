import { For } from "solid-js";

import { Builder } from "@builder.io/sdk";

function SelectComponent(props) {
  return (
    <select
      {...props.attributes}
      value={props.value}
      key={
        Builder.isEditing && props.defaultValue
          ? props.defaultValue
          : "default-key"
      }
      defaultValue={props.defaultValue}
      name={props.name}
    >
      <For each={props.options}>
        {(option, _index) => {
          const index = _index();
          return (
            <option value={option.value} data-index={index}>
              {option.name || option.value}
            </option>
          );
        }}
      </For>
    </select>
  );
}

export default SelectComponent;
