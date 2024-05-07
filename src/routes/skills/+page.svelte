<script>
    export let data;
</script>

<section>
    <div class="skills-container">
    <h1>{data.skills[0].title}</h1>
    <h2>{data.skills[0].subtitle}</h2>
    {#each data.skills as skill}
    <p>{skill.name}</p>
    <p>{skill.value}%</p>
  {/each}
</div>
</section>

<style>
    section{
        background-color: var(--darkpurple);
        width: 100vw;
        height: 100vh;
    }
    h1 {
        color: var(--lightorange);
        font-size: 5rem;
    }

    h2 {
        text-transform: uppercase;
        color: var(--yellow);
        font-size: 1.5rem;
    }

    p{
        color: white;
    }


    .skills-container{
    padding: 1rem;
    }
</style>