<script>
  export let data
  import { BackButton, ArrowAnimationRight } from '$lib/index'
  console.log(data)
</script>

<BackButton />
<ArrowAnimationRight />

<section>
  <h1>{data.experiences[0].title}</h1>
  <div class="experience-container">
    {#each data.experiences as experience}
      {#each experience.work as item}
        <ul class="work-items-container">
          <li style="background-color: {item.color.hex};" class="rectangle-fullscreen"></li>
          <li class="work-item">
            <div class="line-year">
              <div style="background-color: {item.color.hex};" class="rectangle"></div>
              <span style="color: {item.color.hex};">{item.year}</span>
            </div>
            <h2>{item.function}</h2>
            <div class="subtitle-period">
              <h3>{item.subtitle}</h3>
              <span class="period">{item.period}</span>
            </div>
            <p>{item.description}</p>
          </li>
        </ul>
      {/each}
    {/each}
  </div>
</section>

<style>
  section {
    background-color: var(--midpurple);
    padding: 2rem;
    height: auto;
  }

  .experience-container {
    padding-bottom: 3rem;
  }

  h1 {
    color: var(--lightpink);
    font-size: 3.5rem;
  }

  span {
    font-size: 5rem;
  }

  .subtitle-period {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1rem;
    color: var(--white);
  }

  .period {
    font-size: 1rem;
    font-family: 'Outfit', sans-serif;
    margin-bottom: 0.5rem;
    color: var(--lightpink);
  }

  h3 {
    margin-bottom: 0.5rem;
    color: var(--lightpink);
  }

  p {
    margin-top: 0;
  }

  .rectangle {
    width: 100px;
    height: 35px;
    border-radius: 5px;
    position: relative;
    left: -3rem;
  }

  .rectangle-fullscreen {
    display: none;
  }

  .line-year {
    display: flex;
    align-items: center;
  }

  .work-item {
    margin-bottom: 3rem;
  }

  @media screen and (min-width: 462px) {
    section {
      height: 100vh;
    }
    .experience-container {
      overflow-x: auto;
      display: flex;
      gap: 6rem;
      margin: 0 -2rem 0 -2rem;
      padding: 0 2rem 0 2rem;
    }
    .work-items-container {
      width: 200vw;
      display: flex;
      margin-top: 4rem;
      /* align-items: center; */
    }
    .rectangle {
      display: none;
    }

    .rectangle-fullscreen {
      display: block;
      width: 40px;
      height: 400px;
      border-radius: 5px;
      margin-right: 2rem;
    }

    .work-item {
      width: 22rem;
      margin-bottom: 0;
    }
  }
</style>
