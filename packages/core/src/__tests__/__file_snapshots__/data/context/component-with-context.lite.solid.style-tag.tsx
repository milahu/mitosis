import { useContext } from "solid-js";
import { Dynamic } from "solid-js/web";

import { css } from "solid-styled-components";

import Context1 from "@dummy/1";
import Context2 from "@dummy/2";

function ComponentWithContext(props) {
  const foo = useContext(Context1);

  return (
    <>
      <Dynamic
        value={{
          bar: "baz",
        }}
        component={Context2.Provider}
      >
        <Dynamic
          value={{
            foo: "bar",

            content() {
              return props.content;
            },
          }}
          component={Context1.Provider}
        >
          <>
            <>{foo.value}</>
          </>
        </Dynamic>
      </Dynamic>
    </>
  );
}

export default ComponentWithContext;
