<script>
    import BackButton from '../../lib/components/partials/BackButton.svelte';

    export let data;
</script>

<BackButton />

<section>
    {#each data.portfolios as portfolio}
        <div class="portfolio">
            {#if portfolio.title}
                <h1>{portfolio.title}</h1>
            {/if}
            <article>
                <h2>{portfolio.subtitle}</h2>
                <div class="image-container-wrapper">
                    <div class="image-container">
                        {#each portfolio.image as image}
                            <div class="image-wrapper">
                                <img src={image.url} alt="portfolio" loading="lazy" />
                            </div>
                        {/each}
                    </div>
                </div>
                <div class="label-container">
                    {#each portfolio.label as label}
                        <p class="label" style="background-color:{label.labelcolor.hex};">
                            {label.label}
                        </p>
                    {/each}
                </div>
                <p>{portfolio.description}</p>
            </article>
        </div>
    {/each}
</section>

<style>
    section {
        background-color: var(--midpurple);
        padding: 2rem;
        height: 100vh;
        overflow-x: hidden;
    }

    h1 {
        color: var(--lightpink);
    }

    .image-container-wrapper {
        overflow-x: auto;
        margin-left: -2rem;
        margin-right: -2rem;
    }

    .image-container {
        display: flex;
        gap: 1rem;
        white-space: nowrap;
        scroll-snap-type: x mandatory;
        padding-left: 2rem;
        margin-bottom: 1rem;
    }

    .image-wrapper {
        padding-right: 2rem;
    }

    .image-wrapper:first-child {
        padding-right: 0;
    }
    img {
        overflow: hidden;
        flex-shrink: 0;
        width: 235px;
        height: 180px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        scroll-snap-align: start;
    }

    .label-container {
        display: flex;
        gap: 0.8rem;
    }

    .label {
        padding: 0.2rem 1rem;
        border-radius: 5px;
        margin: 0;
    }

    p {
        font-family: 'Outfit', sans-serif;
        margin-bottom: 4rem;
    }
</style>
