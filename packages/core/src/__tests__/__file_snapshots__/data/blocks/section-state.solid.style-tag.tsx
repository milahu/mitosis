import { Show, For, createSignal } from "solid-js";

import { css } from "solid-styled-components";

function SectionStateComponent(props) {
  const [max, setMax] = createSignal(42);

  const [items, setItems] = createSignal([42]);

  return (
    <>
      <Show when={max()}>
        <For each={items()}>
          {(item, _index) => {
            const index = _index();
            return (
              <section
                {...props.attributes}
                style={{
                  "max-width": item + max(),
                }}
              >
                {props.children}
              </section>
            );
          }}
        </For>
      </Show>
    </>
  );
}

export default SectionStateComponent;
