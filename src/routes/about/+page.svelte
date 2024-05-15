<script>
  export let data;
  import FeatureGrid from "../../lib/components/FeatureGrid.svelte";
  import BackButton from "../../lib/components/partials/BackButton.svelte";
</script>

<BackButton />

<section>
  <h1>{data.abouts[0].title}</h1>
  <FeatureGrid />
</section>

<style>
  section {
    background-color: var(--yellow);
    padding: 2rem;
    height: 100vh;
  }
  h1 {
    color: var(--midpurple);
  }
</style>
