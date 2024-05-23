<script>
  import { enhance } from "$app/forms";
  import BackButton from "../../lib/components/partials/BackButton.svelte";

  export let form;
  export let data;

  let loading = false;

  function handleForm() {
    loading = true;

    return async ({ update }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      update();
      loading = false;
    };
  }
</script>

<section>
  <h1>{data.contacts[0].title}</h1>
  <form action="/contact" method="POST" use:enhance={handleForm}>
    <h2>Let’s create together and hit me up!</h2>

    {#if form?.error}
      <p class="message fail">{form.message}</p>
    {/if}

    <fieldset>
      <label>
        <input
          type="text"
          name="name"
          minlength="2"
          required
          value={form?.name ?? ""}
          placeholder="Name"
        />
      </label>
    </fieldset>
    <fieldset>
      <label>
        <input
          type="email"
          name="email"
          required
          value={form?.email ?? ""}
          placeholder="Email"
        />
      </label>
    </fieldset>
    <fieldset>
      <label for="comment" class="medium-body"></label>
      <textarea
        name="comment"
        id="comment"
        rows="5"
        required
        value={form?.comment ?? ""}
        placeholder="Message"
      ></textarea>
    </fieldset>

    <button>Send</button>

    {#if loading}
      <svg
        class="loader"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          .spinner_rect {
            animation: bounce 0.5s infinite;
            fill: var(--lightpink);
            border-radius: 1.5px;
          }
          .rect2 {
            animation-delay: 0.1s;
          }
          .rect3 {
            animation-delay: 0.2s;
          }
          @keyframes bounce {
            0%,
            57.14% {
              animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
              transform: translate(0);
            }
            28.57% {
              animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
              transform: translateY(-6px);
            }
            100% {
              transform: translate(0);
            }
          }
        </style>
        <rect
          class="spinner_rect"
          x="4.5"
          y="2"
          width="3"
          height="20"
          rx="1.5"
          ry="1.5"
        />
        <rect
          class="spinner_rect rect2"
          x="10.5"
          y="4"
          width="3"
          height="16"
          rx="1.5"
          ry="1.5"
        />
        <rect
          class="spinner_rect rect3"
          x="16.5"
          y="6"
          width="3"
          height="12"
          rx="1.5"
          ry="1.5"
        />
      </svg>
    {/if}

    {#if form?.success}
      <p class:active={form?.success}>Thank you for your message!</p>
    {/if}
  </form>
  <BackButton />
</section>

<style>
  h1 {
    color: var(--lightpink);
  }

  form:target {
    display: block;
  }

  input,
  textarea {
    background-color: var(--lightorange);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
    font-family: "Outfit";
    font-size: 1.1rem;
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  textarea:focus {
    background-color: var(--midpurple);
  }

  fieldset {
    border: none;
    padding: 0;
    margin-bottom: 1rem;
  }

  textarea {
    resize: none;
    height: 100px;
  }

  ::placeholder {
    color: white;
    font-family: "Outfit";
    font-size: 1.1rem;
  }

  section {
    background-color: var(--berry);
    padding: 2rem;
    height: 100vh;
  }

  button {
    border: none;
    background: transparent;
    color: white;
    font-size: 1.2rem;
    font-family: "Righteous";
    text-transform: uppercase;
    cursor: pointer;
    padding: 0;
  }

  .loader {
    display: block;
    margin: 1rem auto;
  }

  .fail {
    color: red;
  }
</style>
