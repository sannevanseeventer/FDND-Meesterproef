<script>
  import BackButton from "../../lib/components/partials/BackButton.svelte";
  import ImageSlider from "../../lib/components/flexibles/ImageSlider.svelte";

  export let data;
</script>

<BackButton />

<section>
  {#each data.portfolios as portfolio}
    <div class="portfolio-container">
      {#if portfolio.title}
        <h1>{portfolio.title}</h1>
      {/if}
      <article>
        <h2>{portfolio.subtitle}</h2>
        <ImageSlider images={portfolio.image} />
        <div class="label-container">
          {#each portfolio.label as label}
            <p class="label" style="background-color:{label.labelcolor.hex};">
              {label.label}
            </p>
          {/each}
        </div>
        <p>{portfolio.description}</p>
      </article>
    </div>
  {/each}
</section>

<style>
  section {
    background-color: var(--midpurple);
    padding: 2rem;
    height: 100vh;
    overflow-x: hidden;
  }

  h1 {
    color: var(--lightpink);
  }

  .label-container {
    display: flex;
    gap: 0.8rem;
  }

  .label {
    padding: 0.2rem 1rem;
    border-radius: 5px;
    margin: 0;
  }

  p {
    font-family: "Outfit", sans-serif;
    margin-bottom: 4rem;
  }
</style>
