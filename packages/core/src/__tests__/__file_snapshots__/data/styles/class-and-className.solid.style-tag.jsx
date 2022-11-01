import { css } from "solid-styled-components";

function MyBasicComponent(props) {
  return (
    <>
      <div class="test2 test div-1ddae416">
        Hello! I can run in React, Vue, Solid, or Liquid!
      </div>
      <style jsx>{`
        .div-1ddae416 {
          padding: 10px;
        }
      `}</style>
    </>
  );
}

export default MyBasicComponent;
