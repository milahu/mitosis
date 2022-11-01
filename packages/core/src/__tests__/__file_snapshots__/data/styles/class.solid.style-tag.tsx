import { css } from "solid-styled-components";

function MyBasicComponent(props) {
  return (
    <>
      <div class="test div-50be5eac">
        Hello! I can run in React, Vue, Solid, or Liquid!
      </div>
      <style jsx>{`
        .div-50be5eac {
          padding: 10px;
        }
      `}</style>
    </>
  );
}

export default MyBasicComponent;
