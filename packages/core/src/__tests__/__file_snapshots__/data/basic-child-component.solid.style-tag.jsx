import { createSignal } from "solid-js";

import { css } from "solid-styled-components";

import MyBasicComponent from "./basic.raw";
import MyBasicOnMountUpdateComponent from "./basic-onMount-update.raw";

function MyBasicChildComponent(props) {
  const [name, setName] = createSignal("Steve");

  const [dev, setDev] = createSignal("PatrickJS");

  return (
    <>
      <div>
        <MyBasicComponent id={dev()}></MyBasicComponent>
        <div>
          <MyBasicOnMountUpdateComponent
            hi={name()}
            bye={dev()}
          ></MyBasicOnMountUpdateComponent>
        </div>
      </div>
    </>
  );
}

export default MyBasicChildComponent;
