<script>
    export let data;
  </script>
  
  
  <main>
    <section>
<div  class="container">
  
    {#if data.blogPost}
        <h3>{data.blogPost.title}</h3>
        <p>{@html data.blogPost.content.html}</p>
    {:else}
      <p>Post not found.</p>
    {/if}

</div>
</section>
  </main>


  <style>
 section {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }

    .container {
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 1;
    }

    h3{
        font-size: 2rem;
        margin-left: 1.3rem;
        font-family: 'Fira Code';
    }

    p{
        font-family: 'Fira Code', sans-serif;
        margin-left: 1.3rem;
        max-width: 18rem;
        font-size: 1rem;
    }


  </style>