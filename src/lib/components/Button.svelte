<script>
  export let data;
</script>

<section>
<nav>
    <ul class="menu">
      {#each data.pages as page}
        <li><a href={page.url}>{page.title}</a></li>
      {/each}
    </ul>
    <div class="button-container">
    <button>?</button>
<button>menu</button>
</div>
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
  }

.button-container{
  display: flex;
  justify-content: right;
  flex-direction: row;
  gap: 0.5rem;
}

button {
  display: flex;
  justify-content: right;
  font-family: 'Righteous', sans-serif;
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

.menu {
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
  background-color: var(--darkpurple);
  text-decoration: none;
}

</style>