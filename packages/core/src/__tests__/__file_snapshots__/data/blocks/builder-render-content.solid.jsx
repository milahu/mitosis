import { createSignal } from "solid-js";

import RenderBlock from "./builder-render-block.raw";

function RenderContent(props) {
  function getRenderContentProps(block, index) {
    return {
      block: block,
      index: index,
    };
  }

  return (
    <RenderBlock
      {...getRenderContentProps(props.renderContentProps.block, 0)}
    ></RenderBlock>
  );
}

export default RenderContent;
