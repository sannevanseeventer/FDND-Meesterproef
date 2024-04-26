<script>
  export let data;
</script>

<section>
  <nav>
    <input type="checkbox" id="toggle-menu" class="toggle-menu">
    <label for="toggle-menu" class="button-menu"></label>
    <ul class="menu">
      {#each data.pages as page}
        <li><a href={page.url}>{page.title}</a></li>
      {/each}
    </ul>
  </nav>
</section>

<style>
  nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 2rem;
    z-index: 999;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
    text-align: right;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, visibility 0.3s ease;
    visibility: hidden; 
  }

  .toggle-menu:checked ~ .menu {
    max-height: 100vh; 
    visibility: visible;
  }

  .toggle-menu:checked + .button-menu::after {
    content: "✖";
  }

  .button-menu {
    font-family: 'Righteous', sans-serif;
    color: var(--white);
    text-transform: uppercase;
    text-align: center;
    font-size: 1.2rem;
    border-radius: 0.8rem;
    cursor: pointer;
    border: none;
    z-index: 1; 
    position: relative; 
    padding: 0.5rem 1rem; 
    display: inline-block; 
    background-color: var(--darkpurple);
  }

  .button-menu::after {
    content: "menu"; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .menu {
    padding: 0.5rem 1rem;
    border-radius: 0.8rem;
    background-color: var(--darkpurple);
    text-decoration: none;
    transition: max-height 0.3s ease, visibility 0.3s ease; 
    position: absolute;
    bottom: 2rem; 
    right: 0;
    z-index: 0; 
  }

  /* Hide checkbox */
  .toggle-menu {
    display: none;
  }
</style>
