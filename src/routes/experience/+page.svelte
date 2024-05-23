<script>
  export let data;
  import BackButton from "../../lib/components/partials/BackButton.svelte";
  console.log(data);
</script>

<BackButton />

<section>
  <h1>{data.experiences[0].title}</h1>
  {#each data.experiences as work}
    <div class="experience-container">
      <h1>{work.year}</h1>

      <h2>{work.function}</h2>
      <h2>{work.subtitle}</h2>
      <p>{work.description}</p>
    </div>
  {/each}
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
