import { useContext, onMount, createSignal } from "solid-js";
import { Dynamic } from "solid-js/web";

import { Injector, createInjector, MyService } from "@dummy/injection-js";

function MyBasicComponent(props) {
  const [name, setName] = createSignal("PatrickJS");

  function onChange() {
    const change = myService.method("change");
    console.log(change);
  }

  const myService = useContext(MyService);

  onMount(() => {
    const bye = myService.method("hi");
    console.log(bye);
  });

  return (
    <Dynamic component={Injector.Provider}>
      <div>
        {myService.method("hello") + name()}
        Hello! I can run in React, Vue, Solid, or Liquid!
        <input onInput={(event) => onChange} />
      </div>
    </Dynamic>
  );
}

export default MyBasicComponent;
