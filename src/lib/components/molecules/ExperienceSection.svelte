<script>
  export let work
</script>

<h2>Experience</h2>

{#each work as job}
  <div class="work">
    <div class="wrapper">
      <h3>{job.function}</h3>
      <span>{job.period}</span>
    </div>
    <p class="work-place">{job.subtitle}</p>
    <p class="description">{job.description}</p>
  </div>
{/each}

<style>
  .wrapper {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1rem;
  }
  h2 {
    color: var(--lightorange);
    text-transform: none;
    margin-top: 3rem;
  }
  span {
    color: var(--coral);
    font-size: 1.2rem;
  }
  h3 {
    color: var(--yellow);
    text-transform: uppercase;
  }
  p {
    font-size: 1.2rem;
    margin-top: 0.6rem;
    color: white;
  }
  .work-place {
    color: var(--lightpink);
    margin-bottom: 0;
  }

  .work {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 678px) {
    h2 {
      font-size: 3rem;
      margin-top: 0;
    }
    p {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--pink);
    }
    .description {
      font-size: 1.3rem;
      margin-top: 0;
      margin-bottom: 2rem;
      max-width: 32rem;
      line-height: 1.5;
      color: white;
    }

    span {
      padding-bottom: 0;
    }
    h3 {
      margin-bottom: 0;
      font-size: 1.5rem;
    }
  }
</style>
