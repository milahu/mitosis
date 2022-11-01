import { Show } from "solid-js";

import { css } from "solid-styled-components";

function Button(props) {
  return (
    <>
      <div>
        <Show when={props.link}>
          <a
            {...props.attributes}
            href={props.link}
            target={props.openLinkInNewTab ? "_blank" : undefined}
          >
            {props.text}
          </a>
        </Show>
        <Show when={!props.link}>
          <button type="button" {...props.attributes}>
            {props.text}
          </button>
        </Show>
      </div>
    </>
  );
}

export default Button;
