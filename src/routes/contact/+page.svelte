<script>
  import { enhance } from '$app/forms'
  import BackButton from '../../lib/components/atoms/BackButton.svelte'
  import FormLoader from '../../lib/components/atoms/FormLoader.svelte'
  import SendButton from '../../lib/components/atoms/SendButton.svelte'

  export let form
  export let data

  let loading = false

  function handleForm() {
    loading = true

    return async ({ update }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      update()
      loading = false
    }
  }
</script>

<section>
  <h1>{data.contacts[0].title}</h1>

  <div class="contact-container">
    <h2>Lets create together and hit me up!</h2>
    <!-- Progressive enhanced form -->
    <form action="/contact" method="POST" use:enhance={handleForm}>
      <fieldset>
        <label>
          <input
            type="text"
            name="name"
            minlength="2"
            required
            value={form?.name ?? ''}
            placeholder="Name"
            autocomplete="name"
          />
        </label>
      </fieldset>

      <fieldset>
        <label>
          <input
            type="email"
            name="email"
            required
            value={form?.email ?? ''}
            placeholder="Email"
            autocomplete="email"
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
          value={form?.comment ?? ''}
          placeholder="Message"
          autocomplete="off"
        ></textarea>
      </fieldset>

      <SendButton />

      <!-- <FormLoader /> -->
      {#if loading}
        <FormLoader />
      {/if}

      <!-- Message when it's send /> -->
      {#if form?.success}
        <p role="alert" class:active={form?.success}>Thank you for your message!</p>
      {/if}

      <!-- Message when it failed /> -->
      {#if form?.error}
        <p role="alert" class="message fail">{form.message}</p>
      {/if}
    </form>
    <div class="background-image"></div>
  </div>

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
    font-family: 'Outfit';
    font-size: 1.1rem;
  }

  input[type='text']:focus,
  input[type='email']:focus,
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
    height: 6rem;
  }

  ::placeholder {
    color: white;
    font-family: 'Outfit';
    font-size: 1.1rem;
  }

  section {
    background-color: var(--berry);
    padding: 2rem;
    height: 100vh;
  }

  @media screen and (min-width: 768px) {
    form {
      width: 40%;
    }

    .contact-container {
      margin: 5rem auto;
    }
  }
</style>
