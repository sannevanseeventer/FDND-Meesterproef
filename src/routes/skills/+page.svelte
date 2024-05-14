<script>
    import BackButton from '../../lib/components/partials/BackButton.svelte';
    export let data;
</script>

<BackButton />

<section>
    <h1>Skills</h1>
    <div class="skills-container">
        {#each data.skills as skill}
            <div class="skill-group">
                {#if skill.largetext}
                    <div class="large-text">
                        <span><span class="sign">&</span>{skill.largetext.text}</span>
                    </div>
                {/if}
                {#if skill.subtitle}
                    <h2>{skill.subtitle}</h2>
                {/if}
                <ul class="skill-bars">
                    {#each skill.bar as bar}
                        <li class="skill">
                            {#if bar.name}
                                <div class="skill-name"><p>{bar.name}</p></div>
                            {/if}
                            <div class="skill-bar__container">
                                <div
                                    class="skill-bar"
                                    aria-label="{skill.name} skill at {bar.value}%"
                                    role="progressbar"
                                    aria-valuenow={bar.value}
                                >
                                    <div
                                        class="skill-bar-fill animate"
                                        style="width: {bar.value}%; background-color: {bar.color
                                            .hex};"
                                    ></div>
                                </div>
                                <div class="skill-bar-value"><p>{bar.value}%</p></div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</section>

<style>
    .animate {
        animation: fillAnimation 1s ease-in-out;
    }

    @keyframes fillAnimation {
        from {
            width: 0%;
        }
    }
    section {
        background-color: var(--darkpurple-background);
        padding: 2rem;
    }
    h1 {
        color: var(--lightorange);
    }
    h2 {
        text-transform: uppercase;
        color: var(--yellow);
    }
    p {
        color: white;
        margin: 0.5rem 0;
        font-size: 1.2rem;
        font-weight: 300;
    }
    .sign {
        font-family: 'Alata', 'Roboto', sans-serif;
        margin-right: 0.5rem;
    }
    span {
        position: relative;
        color: var(--white);
        font-size: 1.8rem;
    }

    .skill-group {
        margin-bottom: 3rem;
    }
    .skills-container {
        margin-bottom: 6rem;
    }
    .skill-bars {
        display: flex;
        flex-direction: column;
    }
    .skill {
        margin-bottom: 10px;
    }
    .skill-bar {
        display: flex;
        justify-content: left;
        align-items: center;
        height: 35px;
        width: 80%;
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
    .skill-bar__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
        .skill-group {
            display: inline-block;
            vertical-align: top;
            margin-right: 20px;
            width: 400px;
        }

        .skill-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 350px;
        }
        span {
            font-size: 2.8rem;
        }
        .large-text {
            width: 20rem;
            margin: 50% auto;
        }
        .skill-bar__container {
            gap: 2rem;
        }
    }
</style>
