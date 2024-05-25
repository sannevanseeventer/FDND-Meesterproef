<script>
  export let data;
  import FeatureGrid from "../../lib/components/flexibles/FeatureGrid.svelte";
  import BackButton from "../../lib/components/partials/BackButton.svelte";
</script>

<BackButton />

<section>
  <h1>{data.abouts[0].title}</h1>
  <h2>Scroll down to reveal more information about me</h2>
  <FeatureGrid />
</section>

<style>
  section {
    background-color: var(--berry);
    padding: 2rem;
    height: auto;
  }
  h1 {
    color: var(--lightpink);
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
</style>
