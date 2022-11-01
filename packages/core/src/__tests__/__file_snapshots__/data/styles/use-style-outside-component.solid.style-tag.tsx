import { css } from "solid-styled-components";

function MyComponent(props) {
  return (
    <>
      <button type="button">Button</button>
      <style jsx>{`
        button {
          background: blue;
          color: white;
          font-size: 12px;
          outline: 1px solid black;
        }
      `}</style>
    </>
  );
}

export default MyComponent;
