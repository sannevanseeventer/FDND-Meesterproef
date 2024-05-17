<script>
  import { onMount } from "svelte";

  let loading = true;

  onMount(() => {
    setTimeout(() => {
      loading = false;
    }, 2000); // Simuleer een laadtijd van 2 seconden
  });
</script>

{#if loading}
  <div class="loading-screen">
    <div class="loading-animation"></div>
    <p>Loading...</p>
  </div>
{/if}

<style>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 9999;
  }

  .loading-animation {
    width: 50px;
    height: 50px;
    border: 5px solid #333;
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
