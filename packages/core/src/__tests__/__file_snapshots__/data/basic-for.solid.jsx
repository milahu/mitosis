import { For, onMount, createSignal } from "solid-js";

function MyBasicForComponent(props) {
  const [name, setName] = createSignal("PatrickJS");

  const [names, setNames] = createSignal(["Steve", "PatrickJS"]);

  onMount(() => {
    console.log("onMount code");
  });

  return (
    <div>
      <For each={names()}>
        {(person, _index) => {
          const index = _index();
          return (
            <>
              <input
                value={name()}
                onInput={(event) => {
                  setName(event.target.value + " and " + person);
                }}
              />
              Hello
              {person}! I can run in Qwik, Web Component, React, Vue, Solid, or
              Liquid!
            </>
          );
        }}
      </For>
    </div>
  );
}

export default MyBasicForComponent;
