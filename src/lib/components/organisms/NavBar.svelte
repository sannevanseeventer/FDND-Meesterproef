<script>
  export let data
  import { onMount } from 'svelte'

  onMount(() => {
    const menu = document.querySelector('.menu')
    const buttonMenu = document.querySelector('.show-links')
    const buttonInfo = document.querySelector('.show-info')
    const infoBox = document.querySelector('.info')

    // Hide the menu and info box if JavaScript is enabled
    menu.classList.add('hidden')
    buttonMenu.classList.remove('hidden')
    buttonInfo.classList.remove('hidden')

    buttonMenu.addEventListener('click', function () {
      menu.classList.toggle('hidden')

      // Hide info box when menu button is clicked
      if (!menu.classList.contains('hidden')) {
        infoBox.classList.add('hidden')
        // Change button content to SVG
        buttonMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0,0,256,256">
          <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <g transform="scale(8.53333,8.53333)">
              <path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path>
            </g>
          </g>
        </svg>`
        // Change info button text back to "?"
        buttonInfo.textContent = '?'
      } else {
        // Change button text back to "Menu"
        buttonMenu.textContent = 'Menu'
      }
    })

    buttonInfo.addEventListener('click', function () {
      infoBox.classList.toggle('hidden')
      // Hide menu when info button is clicked
      if (!infoBox.classList.contains('hidden')) {
        menu.classList.add('hidden')
        // Change button content to SVG
        buttonInfo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0,0,256,256">
          <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <g transform="scale(8.53333,8.53333)">
              <path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path>
            </g>
          </g>
        </svg>`
        // Change menu button text back to "Menu"
        buttonMenu.textContent = 'Menu'
      } else {
        // Change button text back to "?"
        buttonInfo.textContent = '?'
      }
    })
  })
</script>

<section>
  <nav>
    <ul class="menu">
      {#each data.pages as page}
        <li><a href={page.url}>{page.title}</a></li>
      {/each}
    </ul>
    <div class="info hidden">
      <p>Scroll through the map and explore my resume</p>
    </div>
    <div class="button-container">
      <button class="show-info hidden">?</button>
      <button class="show-links hidden">menu</button>
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
    z-index: 1000;
  }

  li {
    padding: 0.3rem;
  }

  .button-container {
    display: flex;
    justify-content: right;
    flex-direction: row;
    gap: 0.5rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
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

  button:hover {
    background-color: var(--pink);
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
    font-family: 'Righteous', sans-serif;
  }

  .hidden {
    display: none;
  }

  .show-info {
    width: 3rem;
    height: 3rem;
  }
</style>
