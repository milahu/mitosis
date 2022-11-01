import { createSignal } from "solid-js";

export const defaultValues = {
  name: "PatrickJS",
};

function OnInit(props) {
  const [name, setName] = createSignal("");

  return (
    <div>
      Default name defined by parent
      {name()}
    </div>
  );
}

export default OnInit;
