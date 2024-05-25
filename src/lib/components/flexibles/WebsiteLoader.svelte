<!-- WebsiteLoader.svelte -->
<script>
  export let text = "Loading..."; // Default text
</script>

<div class="loader">
  <p class="loading-text">{text}</p>
</div>

<style>
  /* Styles for the loader */
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(
      255,
      255,
      255,
      0.8
    ); /* Semi-transparent white background */
    z-index: 9999; /* Ensures it's above other content */
  }

  .loading-text {
    font-size: 24px;
    color: #333; /* Change text color as needed */
  }
</style>
