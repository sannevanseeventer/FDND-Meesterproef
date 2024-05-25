<script>
  import BackButton from "../../lib/components/partials/BackButton.svelte";
  import SkillBars from "../../lib/components/flexibles/SkillBars.svelte";
  export let data;
</script>

<section>
  <h1>Skills</h1>
  <div class="skills-container">
    {#each data.skills as skill}
      <SkillBars {skill} />
    {/each}
  </div>
  <BackButton />
</section>

<style>
  section {
    background-color: var(--darkpurple-background);
    padding: 2rem;
  }
  h1 {
    color: var(--lightorange);
  }
  .skills-container {
    margin-bottom: 6rem;
  }

  @media screen and (min-width: 768px) {
    section {
      height: 100vh;
    }
    .skills-container {
      display: flex;
      overflow-x: auto;
      justify-content: flex-start;
      gap: 7rem;
      margin: 0 -2rem 0 -2rem;
      padding: 0 2rem 0 2rem;
    }
  }
</style>
