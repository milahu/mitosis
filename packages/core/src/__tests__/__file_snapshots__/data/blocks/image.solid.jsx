import { Show, onMount, createSignal } from "solid-js";

import { css } from "solid-styled-components";

function Image(props) {
  const [scrollListener, setScrollListener] = createSignal(null);

  const [imageLoaded, setImageLoaded] = createSignal(false);

  const [load, setLoad] = createSignal(false);

  function setLoaded() {
    setImageLoaded(true);
  }

  function useLazyLoading() {
    // TODO: Add more checks here, like testing for real web browsers
    return !!props.lazy && isBrowser();
  }

  function isBrowser() {
    return (
      typeof window !== "undefined" && window.navigator.product != "ReactNative"
    );
  }

  let pictureRef;

  onMount(() => {
    if (useLazyLoading()) {
      // throttled scroll capture listener
      const listener = () => {
        if (pictureRef) {
          const rect = pictureRef.getBoundingClientRect();
          const buffer = window.innerHeight / 2;

          if (rect.top < window.innerHeight + buffer) {
            setLoad(true);
            setScrollListener(null);
            window.removeEventListener("scroll", listener);
          }
        }
      };

      setScrollListener(listener);
      window.addEventListener("scroll", listener, {
        capture: true,
        passive: true,
      });
      listener();
    }
  });

  return (
    <div>
      <picture ref={pictureRef}>
        <Show when={!useLazyLoading() || load()}>
          <img
            class={
              "builder-image" +
              (props._class ? " " + props._class : "") +
              " " +
              css({
                opacity: "1",
                transition: "opacity 0.2s ease-in-out",
                objectFit: "cover",
                objectPosition: "center",
              })
            }
            alt={props.altText}
            aria-role={props.altText ? "presentation" : undefined}
            src={props.image}
            onLoad={(event) => setLoaded()}
            srcset={props.srcset}
            sizes={props.sizes}
          />
        </Show>
        <source srcset={props.srcset} />
      </picture>
      {props.children}
    </div>
  );
}

export default Image;
