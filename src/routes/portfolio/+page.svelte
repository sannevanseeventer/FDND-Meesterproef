<script>
  import { BackButton, ImageSlider } from '$lib/index'

  export let data
</script>

<BackButton />

<!-- Mobile -->
<section class="mobile-view">
  {#each data.portfolios as portfolio}
    <div class="portfolio-container">
      {#if portfolio.title}
        <h1>{portfolio.title}</h1>
      {/if}
      <article>
        <h2>{portfolio.subtitle}</h2>
        <ImageSlider images={portfolio.image} />
        <div class="label-container">
          {#each portfolio.label as label}
            <p class="label" style="background-color:{label.labelcolor.hex};">
              {label.label}
            </p>
          {/each}
        </div>
        <p>{portfolio.description}</p>
      </article>
    </div>
  {/each}
</section>

<!-- Full screen -->
<section class="container">
  {#each data.portfolios as portfolio}
    {#if portfolio.title}
      <h1>{portfolio.title}</h1>
    {/if}
  {/each}
  <ul id="cards">
    {#each data.portfolios as portfolio, index}
      <li class="card" id={'card' + (index + 1)}>
        <div class="card-body">
          <div class="grid-content">
            <div class="item1">
              <h2>{portfolio.subtitle}</h2>
              <div class="label-container">
                {#each portfolio.label as label}
                  <p class="label" style="background-color:{label.labelcolor.hex};">
                    {label.label}
                  </p>
                {/each}
              </div>
              <p>{portfolio.description}</p>
            </div>
            <div class="item2"><img src={portfolio.image[0].url} alt="portfolio" /></div>
            <div class="item3" style="background-image: url({portfolio.image[1].url})"></div>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    background-color: var(--midpurple);
    padding: 2rem;
    height: 100vh;
    overflow-x: hidden;
  }

  .container {
    display: none;
  }

  h1 {
    color: var(--lightpink);
  }

  .label-container {
    display: flex;
    gap: 0.8rem;
  }

  .label {
    padding: 0.2rem 1rem;
    border-radius: 0.3rem;
    margin: 0;
  }

  p {
    font-family: 'Outfit', sans-serif;
    margin-bottom: 4rem;
  }

  /* medium screen */
  @media screen and (min-width: 34.2rem) {
    :root {
      --cards: 3;
      --cardHeight: 80vh;
      --cardTopPadding: 1.8em;
      --cardMargin: 4vw;
    }
    .mobile-view {
      display: none;
    }

    .container {
      display: block;
      margin: 0 auto;
      padding-bottom: 10rem;
    }

    #cards {
      list-style: none;
      padding-left: 0;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(var(--cards), var(--cardHeight));
      gap: var(--cardMargin);
      padding-bottom: calc(var(--cards) * var(--cardTopPadding));
      margin-bottom: var(--cardMargin);
    }

    #card1 {
      --index: 1;
    }
    #card2 {
      --index: 2;
    }
    #card3 {
      --index: 3;
    }

    .card {
      position: sticky;
      top: 0;
      padding-top: calc(var(--index) * var(--cardTopPadding));
    }

    #card1 .card-body {
      background-color: var(--berry);
    }
    #card2 .card-body {
      background-color: var(--darkpurple);
    }
    #card3 .card-body {
      background-color: #d17198;
    }
    #card4 .card-body {
      background-color: #d4afb9;
    }

    .card-body {
      box-sizing: border-box;
      padding: 2rem;
      border-radius: 1.25rem;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      transition: all 0.5s;
    }

    .grid-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      gap: 1rem;
      width: 100%;
      grid-template-areas:
        'item1  item3 item3'
        'item2  item3 item3'
        'item2  item3 item3';
    }

    .item1 {
      grid-area: item1;
    }
    .item2 {
      grid-area: item2;
      max-height: 18.75rem;
    }
    .item3 {
      grid-area: item3;
      background-size: cover;
      background-position: center;
      background-repeat: none;
    }

    .grid-content div {
      border-radius: 0.6rem;
      text-align: left;
    }

    .grid-content .label-container {
      background-color: transparent;
    }

    h2 {
      font-size: 1.5em;
      margin-bottom: 1.25rem;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 0.6rem;
    }
    p {
      margin-bottom: 1rem;
      max-width: 25em;
      font-size: 1.2rem;
    }
  }

  /* full screen */
  @media screen and (min-width: 48em) {
    h2 {
      font-size: 2.5em;
      margin-bottom: 1.25rem;
    }
  }
</style>
