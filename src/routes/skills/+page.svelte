<script>
  import BackButton from "../../lib/components/partials/BackButton.svelte";
  import SkillBars from "../../lib/components/SkillBars.svelte";
  export let data;
</script>

<BackButton />

<section>
  <h1>Skills</h1>
  <div class="skills-container">
    {#each data.skills as skill}
      <SkillBars {skill} />
    {/each}
  </div>
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
      overflow-x: auto; /* Enable horizontal scrolling */
      display: flex;
      justify-content: flex-start; /* Adjust alignment */
      margin-bottom: 0rem;
      gap: 8rem;
      margin-left: -2rem; /* Add negative margin to counteract left padding */
      margin-right: -2rem; /* Add negative margin to counteract right padding */
      padding-right: 2rem; /* Remove right padding */
      padding-left: 2rem;
    }
  }
</style>
