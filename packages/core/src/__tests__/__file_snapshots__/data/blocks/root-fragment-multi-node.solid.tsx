import { Show } from "solid-js";

function Button(props) {
  return (
    <>
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
    </>
  );
}

export default Button;
