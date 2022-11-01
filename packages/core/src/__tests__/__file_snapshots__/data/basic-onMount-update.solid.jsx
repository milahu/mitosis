import { onMount, createSignal } from "solid-js";

function MyBasicOnMountUpdateComponent(props) {
  const [name, setName] = createSignal("PatrickJS");

  const [names, setNames] = createSignal(["Steve", "PatrickJS"]);

  onMount(() => {
    setName("PatrickJS onMount" + props.bye);
  });

  return (
    <div>
      Hello
      {name()}
    </div>
  );
}

export default MyBasicOnMountUpdateComponent;
