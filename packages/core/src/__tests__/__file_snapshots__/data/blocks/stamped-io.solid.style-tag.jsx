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
    <>
      <div data-user={name()}>
        <button onClick={(event) => setShowReviewPrompt(true)}>
          Write a review
        </button>
        <Show when={showReviewPrompt()}>
          <input placeholder="Email" />
          <input class="input-08f3c58a" placeholder="Title" />
          <textarea
            class="textarea-08f3c58a"
            placeholder="How was your experience?"
          ></textarea>
          <button
            class="button-08f3c58a"
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
              <div class="div-08f3c58a" key={review.id}>
                <img class="img-08f3c58a" src={review.avatar} />
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
      <style jsx>{`
        .input-08f3c58a {
          display: block;
        }
        .textarea-08f3c58a {
          display: block;
        }
        .button-08f3c58a {
          display: block;
        }
        .div-08f3c58a {
          margin: 10px;
          padding: 10px;
          background: white;
          display: flex;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .img-08f3c58a {
          height: 30px;
          width: 30px;
          margin-right: 10px;
        }
      `}</style>
    </>
  );
}

export default SmileReviews;
