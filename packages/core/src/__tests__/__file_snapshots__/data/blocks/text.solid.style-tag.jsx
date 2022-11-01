import { createSignal } from "solid-js";

import { css } from "solid-styled-components";

import { Builder } from "@builder.io/sdk";

function Text(props) {
  const [name, setName] = createSignal("Decadef20");

  return (
    <>
      <div
        contentEditable={allowEditingText || undefined}
        data-name={{
          test: name() || "any name",
        }}
        innerHTML={
          props.text ||
          props.content ||
          name() ||
          '<p class="text-lg">my name</p>'
        }
      ></div>
    </>
  );
}

export default Text;
