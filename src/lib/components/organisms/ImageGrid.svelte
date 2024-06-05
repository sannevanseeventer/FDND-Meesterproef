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
    <div class="overlay">
      <div class="overlay-text">Tekst hier</div>
    </div>
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
    margin: 10px;
    position: relative;
  }
  .grid-item img {
    width: 100%;
    border-radius: 5px;
    transition: transform 0.3s;
  }
  .grid-item:hover img {
    transform: scale(1.05);
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .grid-item:hover .overlay {
    opacity: 1;
    background-color: pink;
  }
  .overlay-text {
    color: white;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
</style>
