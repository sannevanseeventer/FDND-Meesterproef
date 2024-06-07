<script>
  export let data
</script>

<main class="map-container">
  <div class="map">
    {#each data.pages as page}
      <a class="link" style="top: {page.top}rem; left: {page.left}rem;" href={page.url}
        >{page.title}</a
      >
    {/each}
  </div>
</main>

<style>
  .map-container {
    /* background-color: #333; */
    height: 100%;
    width: 100%;
    overflow: auto;
    position: relative;
    z-index: 999;
  }
  .map {
    width: 2500px;
    height: 2500px;
    position: relative;
    background-image: url('CV-background.svg');
    /* background-image: url("/static/backgroundalmost.svg"); */
    /* background-image: url("nocolor.svg"); */
    background-size: cover;
    background-repeat: no-repeat;
  }
  a {
    all: unset;
  }
  .link {
    position: absolute;
    font-family: 'Righteous', sans-serif;
    font-size: 5rem;
    color: var(--yellow);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: transform 0.3s ease; /* Smooth transition */
  }

  .link:hover {
    transform: scale(1.1); /* Zoom-in effect */
  }
</style>
