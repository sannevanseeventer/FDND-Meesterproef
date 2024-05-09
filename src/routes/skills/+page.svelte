<script>
    export let data;
</script>

<section>
    <h1>Skills</h1>
    <div class="skills-container">
            {#each data.skills as skill}
                <div class="skill-bars">
                    {#if skill.largetext}
                        <span><span class="sign">&</span>{skill.largetext.text}</span>
                    {/if}
                    {#if skill.subtitle}
                        <h2>{skill.subtitle}</h2>
                    {/if}
                    {#each skill.bar as bar}
                        <div class="skill">
                            {#if bar.name}
                                <div class="skill-name"> <p>{bar.name}</p></div>
                            {/if}
                                <div class="skill-bar__container">
                                    <div class="skill-bar">
                                    <div class="skill-bar-fill" style="width: {bar.value}%; background-color: {bar.color.hex};"></div>
                                </div>
                            <!-- <div class="skill-bar-value"><p>{bar.value}%</p></div> -->
                        </div>
                </div>
                {/each}
     </div>
        {/each}
</section>


<style>
    section{
        background-color: var(--darkpurple-background);
        padding: 2rem;
    }
    h1 {
        color: var(--lightorange);
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
        font-size: 1.2rem;
    }
    .sign{
        font-family: "Alata", "Roboto", sans-serif;
        margin-right: 0.5rem;
    }
    span{
        position: relative;
        color: var(--white);
        font-size: 1.8rem;

    }
    .skills-container{
        display: flex;
        flex-direction: column;
        gap: 2rem 0rem;
    }
    .skill {
        margin-bottom: 10px;
    }
    .skill-bar {
        display: flex;
        justify-content: left;
        align-items: center;
        height: 35px;
        width: 100%;
        background-color: var(--darkpurple-bar);
        border-radius: 5px;
        overflow: hidden;
    }
    .skill-bar-fill {
        height: 26px;
        margin: 0.3rem;
        border-radius: 5px;
        transition: width 0.5s ease-in-out;
    }
    .skill-bar__container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>