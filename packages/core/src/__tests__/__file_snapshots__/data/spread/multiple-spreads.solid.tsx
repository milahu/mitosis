import { createSignal } from "solid-js";

function MyBasicComponent(props) {
  const [attrs, setAttrs] = createSignal({
    hello: "world",
  });

  return <input {...attrs()} {...props} />;
}

export default MyBasicComponent;
