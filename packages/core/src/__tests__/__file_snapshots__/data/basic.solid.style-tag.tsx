import { createSignal } from "solid-js";

import { css } from "solid-styled-components";

export const DEFAULT_VALUES = {
  name: "Steve",
};

function MyBasicComponent(props) {
  const [name, setName] = createSignal("Steve");

  function underscore_fn_name() {
    return "bar";
  }

  return (
    <>
      <div class="test div-74a9dc87">
        <input
          value={DEFAULT_VALUES.name || name()}
          onInput={(myEvent) => setName(myEvent.target.value)}
        />
        Hello! I can run in React, Vue, Solid, or Liquid!
      </div>
      <style jsx>{`
        .div-74a9dc87 {
          padding: 10px;
        }
      `}</style>
    </>
  );
}

export default MyBasicComponent;
