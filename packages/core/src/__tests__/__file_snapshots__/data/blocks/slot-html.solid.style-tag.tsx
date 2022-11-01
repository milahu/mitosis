import { css } from "solid-styled-components";

import ContentSlotCode from "./content-slot-jsx.raw";

function SlotCode(props) {
  return (
    <>
      <div>
        <ContentSlotCode>
          <Slot testing={<div>Hello</div>}></Slot>
        </ContentSlotCode>
      </div>
    </>
  );
}

export default SlotCode;
