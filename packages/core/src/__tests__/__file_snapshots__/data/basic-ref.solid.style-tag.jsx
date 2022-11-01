import { Show, createSignal } from "solid-js";

import { css } from "solid-styled-components";

function MyBasicRefComponent(props) {
  const [name, setName] = createSignal("PatrickJS");

  function onBlur() {
    // Maintain focus
    inputRef.focus();
  }

  function lowerCaseName() {
    return name().toLowerCase();
  }

  let inputRef;
  let inputNoArgRef;

  return (
    <>
      <div>
        <Show when={props.showInput}>
          <>
            <input
              class="input-12f9800e"
              ref={inputRef}
              value={name()}
              onBlur={(event) => onBlur()}
              onInput={(event) => setName(event.target.value)}
            />
            <label for="cars" ref={inputNoArgRef}>
              Choose a car:
            </label>
            <select name="cars" id="cars">
              <option value="supra">GR Supra</option>
              <option value="86">GR 86</option>
            </select>
          </>
        </Show>
        Hello
        {lowerCaseName()}! I can run in React, Qwik, Vue, Solid, or Web
        Component!
      </div>
      <style jsx>{`
        .input-12f9800e {
          color: red;
        }
      `}</style>
    </>
  );
}

export default MyBasicRefComponent;
