import { css } from "solid-styled-components";

function ContentSlotCode(props) {
  return (
    <>
      <div>
        <Slot name={props.slotTesting}></Slot>
        <div>
          <hr />
        </div>
        <div>
          <Slot></Slot>
        </div>
      </div>
    </>
  );
}

export default ContentSlotCode;
