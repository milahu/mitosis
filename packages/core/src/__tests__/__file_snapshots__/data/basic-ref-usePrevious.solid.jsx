import { on, createEffect, createSignal } from "solid-js";

export function usePrevious<T>(value: T) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  let ref = useRef<T>(null); // Store current value in ref

  onUpdate(() => {
    ref = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)

  return ref;
}

function MyPreviousComponent(props) {
  const [count, setCount] = createSignal(0);

  function onUpdateFn_0() {
    prevCount = count();
  }
  createEffect(on(() => [count()], onUpdateFn_0));

  return (
    <div>
      <h1>
        Now:
        {count()}, before:
        {prevCount}
      </h1>
      <button onClick={(event) => setCount(1)}>Increment</button>
    </div>
  );
}

export default MyPreviousComponent;
