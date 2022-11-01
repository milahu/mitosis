import { For, createSignal } from "solid-js";

import { css } from "solid-styled-components";

function Column(props) {
  function getColumns() {
    return props.columns || [];
  }

  function getGutterSize() {
    return typeof props.space === "number" ? props.space || 0 : 20;
  }

  function getWidth(index) {
    const columns = getColumns();
    return (columns[index] && columns[index].width) || 100 / columns.length;
  }

  function getColumnCssWidth(index) {
    const columns = getColumns();
    const gutterSize = getGutterSize();
    const subtractWidth = (gutterSize * (columns.length - 1)) / columns.length;
    return `calc(${getWidth(index)}% - ${subtractWidth}px)`;
  }

  return (
    <div
      class={
        "builder-columns " +
        css({
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          lineHeight: "normal",
          "@media (max-width: 999px)": {
            flexDirection: "row",
          },
          "@media (max-width: 639px)": {
            flexDirection: "row-reverse",
          },
        })
      }
    >
      <For each={props.columns}>
        {(column, _index) => {
          const index = _index();
          return (
            <div
              class={
                "builder-column " +
                css({
                  flexGrow: "1",
                })
              }
            >
              {column.content}
              {index}
            </div>
          );
        }}
      </For>
    </div>
  );
}

export default Column;
