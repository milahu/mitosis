import { Show, For, onMount, createSignal } from "solid-js";

import { css } from "solid-styled-components";

import { kebabCase } from "lodash";
import { snakeCase } from "lodash";

function SmileReviews(props) {
  const [reviews, setReviews] = createSignal([]);

  const [name, setName] = createSignal("test");

  const [showReviewPrompt, setShowReviewPrompt] = createSignal(false);

  function kebabCaseValue() {
    return kebabCase("testThat");
  }

  function snakeCaseValue() {
    return snakeCase("testThis");
  }

  onMount(() => {
    fetch(
      `https://stamped.io/api/widget/reviews?storeUrl=builder-io.myshopify.com&apiKey=${
        props.apiKey || "pubkey-8bbDq7W6w4sB3OWeM1HUy2s47702hM"
      }&productId=${props.productId || "2410511106127"}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data);
      });
  });

  return (
    <div data-user={name()}>
      <button onClick={(event) => setShowReviewPrompt(true)}>
        Write a review
      </button>
      <Show when={showReviewPrompt()}>
        <input placeholder="Email" />
        <input
          class={css({
            display: "block",
          })}
          placeholder="Title"
        />
        <textarea
          class={css({
            display: "block",
          })}
          placeholder="How was your experience?"
        ></textarea>
        <button
          class={css({
            display: "block",
          })}
          onClick={(event) => {
            event.preventDefault();
            setShowReviewPrompt(false);
          }}
        >
          Submit
        </button>
      </Show>
      <For each={reviews()}>
        {(review, _index) => {
          const index = _index();
          return (
            <div
              class={css({
                margin: "10px",
                padding: "10px",
                background: "white",
                display: "flex",
                borderRadius: "5px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              })}
              key={review.id}
            >
              <img
                class={css({
                  height: "30px",
                  width: "30px",
                  marginRight: "10px",
                })}
                src={review.avatar}
              />
              <div class={showReviewPrompt() ? "bg-primary" : "bg-secondary"}>
                <div>
                  N:
                  {index}
                </div>
                <div>{review.author}</div>
                <div>{review.reviewMessage}</div>
              </div>
            </div>
          );
        }}
      </For>
    </div>
  );
}

export default SmileReviews;
