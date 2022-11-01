import { css } from "solid-styled-components";

function NestedStyles(props) {
  return (
    <>
      <div class="div-5a4c7fde">Hello world</div>
      <style jsx>{`
        .div-5a4c7fde {
          display: flex;
          foo: var(--bar);
        }
        @media (max-width: env(--mobile)) {
          .div-5a4c7fde {
            display: block;
          }
        }
        .div-5a4c7fde:hover {
          display: flex;
        }
        .div-5a4c7fde .nested-selector {
          display: grid;
        }
      `}</style>
    </>
  );
}

export default NestedStyles;
