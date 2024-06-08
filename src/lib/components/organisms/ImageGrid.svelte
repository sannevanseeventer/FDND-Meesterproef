<script>
  export let images
</script>

<div class="grid-container">
  <div class="grid-item">
    {#each images as image}
      <div class="grid-item-image">
        <img src={image.url} alt="portfolio" loading="lazy" />
      </div>
    {/each}
  </div>
</div>

<style>
  .grid-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .grid-item {
    width: calc(33.33% - 20px);
    margin: 0.6rem;
    position: relative;
  }
  .grid-item img {
    width: 100%;
    height: auto;
    border-radius: 0.3rem;
    transition: transform 0.3s;
  }
  .grid-item:hover img {
    transform: scale(1.05);
  }
</style>
