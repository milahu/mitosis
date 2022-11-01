import { css } from "solid-styled-components";

function MyBasicComponent(props) {
  return (
    <>
      <div>
        Hello! I can run in React, Vue, Solid, or Liquid!
        {props.name}
      </div>
    </>
  );
}

export default MyBasicComponent;
