<script>
    export let data;
</script>

<section>
    <div class="skills-container">
        <h1>{data.skills[0].title}</h1>
        <div class="skill-bars">
            {#each data.skills as skill}
                <h2>{skill.subtitle}</h2>
                {#each skill.bar as bar}
                    <div class="skill">
                        <div class="skill-name"> <p>{bar.name}</p></div>
                        <div class="skill-bar__container">
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: {bar.value}%; background-color: {bar.color.hex};"></div>
                            </div>
                            <div class="skill-bar-value"><p>{bar.value}%</p></div>
                        </div>
                    </div>
                {/each}
            {/each}
        </div>
    </div>
</section>


<style>
    section{
        background-color: var(--darkpurple-background);
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
        margin-bottom: 1rem;
    }

    p{
        color: white;
        margin: 0.5rem 0;
    }


    .skills-container{
    padding: 2rem;
    }

    .skill-bars {
        margin: 0 auto;
    }

    .skill {
        margin-bottom: 10px;
    }

    .skill-bar {
        height: 33px;
        width: 270px;
        background-color: var(--darkpurple);
        border-radius: 5px;
        overflow: hidden;
    }

    .skill-bar-fill {
        height: 25px;
        margin: 4px;
        border-radius: 5px;
        transition: width 0.5s ease-in-out;
    }

    .skill-bar__container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
</style>