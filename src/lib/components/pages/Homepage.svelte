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
    height: 100vh; /* Zorgt ervoor dat de container de volledige hoogte van het scherm vult */
    width: 100vw; /* Zorgt ervoor dat de container de volledige breedte van het scherm vult */
    overflow: auto; /* Voorkomt dat de inhoud buiten de container wordt getoond */
    position: relative;
    z-index: 999;
  }

  .map {
    width: 2500px;
    height: 2500px;
    position: absolute; /* Zorgt ervoor dat de map relatief aan de container gepositioneerd wordt */
    /* background-image: url('CV-background.svg'); */
    background-image: url('/static/CV-background.svg');
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
    transition: transform 0.3s ease;
  }

  .link:hover {
    transform: scale(1.1);
  }
</style>
