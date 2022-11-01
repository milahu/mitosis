import { For, createSignal } from "solid-js";

function ImgStateComponent(props) {
  const [canShow, setCanShow] = createSignal(true);

  const [images, setImages] = createSignal(["http://example.com/qwik.png"]);

  return (
    <div>
      <For each={images()}>
        {(item, _index) => {
          const itemIndex = _index();
          return (
            <>
              <img class="custom-class" src={item} key={itemIndex} />
            </>
          );
        }}
      </For>
    </div>
  );
}

export default ImgStateComponent;
