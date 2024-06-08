<script>
  import { SkillBarAnimation } from '$lib/index'
  export let skill
</script>

<div class="skills-container">
  <!-- Baking Text -->
  {#if skill.largetext}
    <div class="large-text">
      <span><span class="large-text__ampersand">&</span>{skill.largetext.text}</span>
    </div>
  {/if}
  {#if skill.subtitle}
    <h2>{skill.subtitle}</h2>
  {/if}
  <!-- Skill Bars -->
  <ul class="skills-bars">
    {#each skill.bar as bar}
      <li class="skill">
        {#if bar.name}
          <p class="skill-name">{bar.name}</p>
        {/if}
        <SkillBarAnimation {bar} />
      </li>
    {/each}
  </ul>
</div>

<style>
  .skills-container {
    margin-bottom: 3rem;
  }

  span {
    position: relative;
    color: var(--white);
    font-size: 1.8rem;
  }

  .large-text__ampersand {
    font-family: 'Alata', 'Roboto', sans-serif;
    margin-right: 0.5rem;
  }

  .skills-bars {
    display: flex;
    flex-direction: column;
  }

  .skill {
    margin-bottom: 0.6rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 0;
    margin-top: 0.5rem;
  }

  /* full screen */
  @media screen and (min-width: 48em) {
    .skills-container {
      display: inline-block;
      vertical-align: top;
      margin-right: 20px;
      width: 400px;
      height: auto;
    }

    span {
      font-size: 2.8rem;
    }

    .large-text {
      width: 20rem;
      margin: 50% auto;
    }

    p {
      font-size: 1.3rem;
    }
  }
</style>
