import { on, createEffect, createSignal } from "solid-js";

function MultipleOnUpdateWithDeps(props) {
  const [a, setA] = createSignal("a");

  const [b, setB] = createSignal("b");

  const [c, setC] = createSignal("c");

  const [d, setD] = createSignal("d");

  function onUpdateFn_0() {
    console.log("Runs when a or b changes", a(), b());

    if (a() === "a") {
      setA("b");
    }
  }
  createEffect(on(() => [a(), b()], onUpdateFn_0));

  function onUpdateFn_1() {
    console.log("Runs when c or d changes", c(), d());

    if (a() === "a") {
      setA("b");
    }
  }
  createEffect(on(() => [c(), d()], onUpdateFn_1));

  return <div></div>;
}

export default MultipleOnUpdateWithDeps;
