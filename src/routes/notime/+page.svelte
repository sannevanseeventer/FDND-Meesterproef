<script>
  export let data;
  import BackButton from "../../lib/components/partials/BackButton.svelte";
</script>

<BackButton />
<section>
  <h1>{data.notimes[0].title}</h1>
</section>

<style>
  section {
    background-color: var(--lightpink);
    padding: 2rem;
    height: 100vh;
  }

  h1 {
    color: var(--berry);
    font-size: 3rem;
  }
</style>
