<script>
  export let education
</script>

<h2>Education</h2>

{#each education as school}
  <div class="wrapper">
    <span class="education-period">{school.period}</span>
    <h3 class="education-school">{school.school}</h3>
  </div>
  <p>{school.study}</p>
{/each}

<style>
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
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
  p {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
  @media screen and (min-width: 678px) {
    .wrapper {
      display: flex;
      align-items: center;
      flex-direction: row; /* default direction, can be omitted */
      gap: 1rem;
    }

    .education-period {
      order: 2; /* This item will appear second */
    }

    .education-school {
      order: 1; /* This item will appear first */
    }
    h2 {
      font-size: 3rem;
      margin-top: 0;
    }
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
</style>
