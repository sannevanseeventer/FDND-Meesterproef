<script>
    export let data;
</script>

<section>
    <div class="skills-container">
    <h2>{data.skills[0].title}</h2>
    <p>{data.skills[0].name}</p>
    <p>{data.skills[0].value}</p>
</div>
</section>

<style>
    section{
        background-color: var(--darkpurple);
        width: 100vw;
        height: 100vh;
    }
    h2 {
        color: var(--lightorange);
    }


    .skills-container{
    padding: 1rem;
    }
</style>