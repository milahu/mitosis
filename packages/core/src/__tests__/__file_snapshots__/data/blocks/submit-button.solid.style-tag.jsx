import { css } from "solid-styled-components";

function SubmitButton(props) {
  return (
    <>
      <button type="submit" {...props.attributes}>
        {props.text}
      </button>
    </>
  );
}

export default SubmitButton;
