import { css } from "solid-styled-components";

function MyBasicComponent(props) {
  return (
    <>
      <input {...props.nested} />
    </>
  );
}

export default MyBasicComponent;
