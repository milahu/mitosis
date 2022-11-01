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
    <>
      <div class="builder-columns div-3489e5a0">
        <For each={props.columns}>
          {(column, _index) => {
            const index = _index();
            return (
              <div class="builder-column div-3489e5a0-2">
                {column.content}
                {index}
              </div>
            );
          }}
        </For>
      </div>
      <style jsx>{`
        .div-3489e5a0 {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          line-height: normal;
        }
        @media (max-width: 999px) {
          .div-3489e5a0 {
            flex-direction: row;
          }
        }
        @media (max-width: 639px) {
          .div-3489e5a0 {
            flex-direction: row-reverse;
          }
        }
        .div-3489e5a0-2 {
          flex-grow: 1;
        }
      `}</style>
    </>
  );
}

export default Column;
