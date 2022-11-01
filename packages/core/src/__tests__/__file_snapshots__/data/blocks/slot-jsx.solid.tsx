import ContentSlotCode from "./content-slot-jsx.raw";

function SlotCode(props) {
  return (
    <div>
      <ContentSlotCode slotTesting={<div>Hello</div>}></ContentSlotCode>
    </div>
  );
}

export default SlotCode;
