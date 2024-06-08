<script>
  export let images
</script>

<div class="image-container-wrapper">
  <div class="image-container">
    {#each images as image}
      <div class="image-wrapper">
        <img src={image.url} alt="portfolio" loading="lazy" />
      </div>
    {/each}
  </div>
</div>

<style>
  .image-container-wrapper {
    overflow-x: auto;
    margin-left: -2rem;
    margin-right: -2rem;
  }

  .image-container {
    display: flex;
    gap: 1rem;
    white-space: nowrap;
    scroll-snap-type: x mandatory;
    padding-left: 2rem;
    margin-bottom: 1rem;
  }

  .image-wrapper {
    padding-right: 2rem;
  }

  .image-wrapper:first-child {
    padding-right: 0;
  }

  img {
    overflow: hidden;
    flex-shrink: 0;
    width: 14.7rem;
    height: 11.3rem;
    border-radius: 0.6rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    scroll-snap-align: start;
  }
</style>
