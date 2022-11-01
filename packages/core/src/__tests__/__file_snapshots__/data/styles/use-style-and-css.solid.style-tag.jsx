import { css } from "solid-styled-components";

function MyComponent(props) {
  return (
    <>
      <button class="button-9f7d04e4" type="button">
        Button
      </button>
      <style jsx>{`
        .button-9f7d04e4 {
          background: blue;
          color: white;
        }

        button {
          font-size: 12px;
          outline: 1px solid black;
        }
      `}</style>
    </>
  );
}

export default MyComponent;
