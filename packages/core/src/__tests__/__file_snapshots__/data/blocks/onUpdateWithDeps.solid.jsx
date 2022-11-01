import { on, createEffect, createSignal } from "solid-js";

function OnUpdateWithDeps(props) {
  const [a, setA] = createSignal("a");

  const [b, setB] = createSignal("b");

  function onUpdateFn_0() {
    console.log("Runs when a, b or size changes", a(), b(), props.size);
  }
  createEffect(on(() => [a(), b(), props.size], onUpdateFn_0));

  return <div></div>;
}

export default OnUpdateWithDeps;
