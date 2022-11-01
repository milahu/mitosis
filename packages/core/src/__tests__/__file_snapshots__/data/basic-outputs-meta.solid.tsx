import { onMount, createSignal } from "solid-js";

function MyBasicOutputsComponent(props) {
  const [name, setName] = createSignal("PatrickJS");

  onMount(() => {
    props.onMessage(name());
    props.onEvent(props.message);
  });

  return <div></div>;
}

export default MyBasicOutputsComponent;
