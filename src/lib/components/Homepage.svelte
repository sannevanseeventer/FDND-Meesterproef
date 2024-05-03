<script>
    export let data
    import { onMount } from "svelte";
    import { enableDrag } from "./partials/drag.js";
  
    onMount(() => {
      enableDrag(".container", "section");
    });
  </script>
  
  <section>
      <div class="container">       
          <!-- Pages -->
          {#each data.pages as page}
              <a class="link" style="top: {page.top}rem; left: {page.left}rem;" href={page.url}>{page.title}</a>
          {/each}
      </div>
  </section>
  
  <style>
    section {
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }
    .container {
      position: absolute;
      width: 400%;
      height: 400%;
      top: 0;
      left: 0;
      background-image: url("newcolors.svg");
      background-size: contain;
      background-repeat: no-repeat;
      z-index: 1;
      cursor: grabbing;
    }
    a {
      all: unset;
    }
    .link {
      position: absolute;
      font-family: "Righteous", sans-serif;
      font-size: 5rem;
      color: var(--yellow);
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  </style>
  