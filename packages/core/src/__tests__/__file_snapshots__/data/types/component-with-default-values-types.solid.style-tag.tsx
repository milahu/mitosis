import { css } from "solid-styled-components";

const DEFAULT_VALUES: Props = {
  name: "Sami",
};

function ComponentWithTypes(props) {
  return (
    <>
      <div>
        Hello
        {props.name || DEFAULT_VALUES.name}
      </div>
    </>
  );
}

export default ComponentWithTypes;
