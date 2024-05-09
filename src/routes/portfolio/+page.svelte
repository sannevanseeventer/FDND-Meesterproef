<script>
    export let data;
  </script>

<section>
  {#each data.portfolios as portfolio}
  <div class="portfolio">
    <h1>{portfolio.title}</h1>
    <article>
      <h2>{portfolio.subtitle}</h2>
      <div class="image-container">
        {#each portfolio.image as image}
        <img src="{image.url}" alt="portfolio" loading="lazy">
        {/each}
      </div>
      <div class="label-container">
        {#each portfolio.label as label}
        <p class="label" style="background-color:{label.labelcolor.hex};">{label.label}</p>
        {/each}
      </div>
      <p>{portfolio.description}</p>
    </article>
  </div>
  {/each}
</section>


  <style>
    section{
    background-color: var(--midpurple);
    width: 100vw;
    height: 100vh;
    }

    h1 {
        color: var(--lightpink);
    }

    img{
      width: 235px;
      height: 185px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      scroll-snap-align: start; 
    }

    .portfolio{
      padding: 1rem;
    }

    .image-container{
      display: flex;
      gap: 1rem;
      width: 100%;
      overflow-x: scroll;
      scroll-snap-type: x mandatory; /* Enable horizontal snap */
      white-space: nowrap; /* Prevent images from wrapping */
      margin-bottom: 1rem;
    }

    .label-container{
      display: flex;
      gap: 0.8rem;
      margin-bottom: 1rem;
    }

    .label{
      padding: 0.2rem 1rem;
      /* background-color: var(--orange); */
      border-radius: 5px;
    }

    p{
      font-family: "Outfit", sans-serif;
      margin: 0;
    }

  </style>
  