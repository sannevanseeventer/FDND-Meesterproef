<script>
  export let data;
  import FeatureGrid from "../../lib/components/flexibles/FeatureGrid.svelte";
  import BackButton from "../../lib/components/partials/BackButton.svelte";
</script>

<BackButton />

<section>
  <h1>{data.abouts[0].title}</h1>
  <h3>Scroll down to reveal more information about me</h3>
  <FeatureGrid />
</section>

<style>
  section {
    background-color: var(--yellow);
    padding: 2rem;
    height: auto;
  }
  h1 {
    color: var(--midpurple);
  }

  h3 {
    color: var(--orange);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
</style>
