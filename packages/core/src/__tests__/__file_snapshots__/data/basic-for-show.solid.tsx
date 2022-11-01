import { Show, For, createSignal } from "solid-js";

function MyBasicForShowComponent(props) {
  const [name, setName] = createSignal("PatrickJS");

  const [names, setNames] = createSignal(["Steve", "PatrickJS"]);

  return (
    <div>
      <For each={names()}>
        {(person, _index) => {
          const index = _index();
          return (
            <Show when={person === name()}>
              <input
                value={name()}
                onInput={(event) => {
                  setName(event.target.value + " and " + person);
                }}
              />
              Hello
              {person}! I can run in Qwik, Web Component, React, Vue, Solid, or
              Liquid!
            </Show>
          );
        }}
      </For>
    </div>
  );
}

export default MyBasicForShowComponent;
