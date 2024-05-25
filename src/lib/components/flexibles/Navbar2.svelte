<script>
  export let data;
</script>

<section id="nav">
  <nav>
    <ul class="menu" id="menu">
      {#each data.pages as page}
        <li><a href={page.url}>{page.title}</a></li>
      {/each}
    </ul>
    <div class="info" id="info">
      <p>Scroll through the map and explore my resume</p>
    </div>
    <div class="button-container">
      <a href="#info" class="show-info">?</a>
      <a href="#menu" class="show-links">menu</a>
    </div>
  </nav>
</section>

<style>
  /* Remove unnecessary CSS */

  /* Hide the menu and info box initially */
  .menu,
  .info {
    display: none;
  }

  /* Show menu when its corresponding anchor is targeted */
  #menu:target,
  #menu:target ~ .info {
    display: block;
  }

  /* Show info box when its corresponding anchor is targeted */
  #info:target {
    display: block;
  }

  /* Rest of the CSS remains the same */
  nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 2rem;
    z-index: 1000;
  }

  ul {
    text-align: right;
  }

  li {
    padding: 0.5rem;
  }

  .button-container {
    display: flex;
    justify-content: right;
    flex-direction: row;
    gap: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Righteous", sans-serif;
    color: var(--white);
    text-transform: uppercase;
    text-align: center;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 0.8rem;
    background-color: var(--darkpurple);
    text-decoration: none;
    cursor: pointer;
    border: none;
  }

  .menu,
  .info {
    padding: 0.5rem 1.5rem;
    border-radius: 0.8rem;
    background-color: var(--darkpurple);
    text-decoration: none;
    margin-bottom: 1rem;
  }

  p {
    max-width: 10rem;
    color: white;
    font-family: "Righteous", sans-serif;
  }
</style>
