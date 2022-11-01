import { on, createEffect, createSignal } from "solid-js";

function MyBasicOnUpdateReturnComponent(props) {
  const [name, setName] = createSignal("PatrickJS");

  function onUpdateFn_0() {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://patrickjs.com/api/resource.json", {
      signal,
    })
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
      });
    return () => {
      if (!signal.aborted) {
        controller.abort();
      }
    };
  }
  createEffect(on(() => [name()], onUpdateFn_0));

  return (
    <div>
      Hello!
      {name()}
    </div>
  );
}

export default MyBasicOnUpdateReturnComponent;
