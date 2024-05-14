<script>
    export let data;
    import FeatureGrid from '../../lib/components/FeatureGrid.svelte';
    import BackButton from '../../lib/components/partials/BackButton.svelte';
</script>

<BackButton />

<section>
    <div class="about-container">
        <h1>{data.abouts[0].title}</h1>
    </div>

    <FeatureGrid />
</section>

<style>
    section {
        background-color: var(--yellow);
        padding: 2rem;
    }
    h1 {
        color: var(--midpurple);
    }
</style>
