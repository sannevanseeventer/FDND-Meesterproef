<script>
  export let skills
</script>

<h2>Skills</h2>

{#each skills as skill (skill.id)}
  <h3>{skill.subtitle}</h3>
  <div class="skillbars">
    {#each skill.bar as bar (bar.id)}
      <div class="skillbar-container">
        <p class="skillbar-name">{bar.name}</p>
        <div class="skillbar-outer">
          <div
            class="skillbar-inner"
            style="width: {bar.value}%; background-color: {bar.color.hex};"
          ></div>
        </div>
      </div>
    {/each}
  </div>
{/each}

<style>
  .skillbars {
    margin-bottom: 2rem;
  }
  .skillbar-container {
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .skillbar-name {
    width: 100px;
    flex-shrink: 0;
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 0;
  }

  .skillbar-outer {
    flex-grow: 1;
    height: 20px;
    background-color: var(--darkpurple-bar);
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 0;
    margin-top: 1rem;
  }

  .skillbar-inner {
    height: 60%;
    margin: 4px;
    border-radius: 3px;
    transition: width 0.5s;
  }

  h2 {
    color: var(--lightorange);
    text-transform: none;
    margin-top: 3rem;
    font-size: 2rem;
  }

  h3 {
    color: var(--yellow);
    text-transform: uppercase;
  }

  @media screen and (min-width: 678px) {
    .skillbars {
      margin-bottom: 4rem;
    }

    .skillbar-container {
      gap: 6rem;
    }

    h2 {
      font-size: 3rem;
      margin-top: 0;
    }

    .skillbar-name {
      font-size: 1.3rem;
    }

    .skillbar-outer {
      height: 40px;
      border-radius: 5px;
      overflow: hidden;
    }

    .skillbar-inner {
      margin: 8px;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
</style>
