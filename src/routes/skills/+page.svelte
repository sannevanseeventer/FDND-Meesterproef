<script>
    export let data;
</script>

<section>
    <h2>{data.skills[0].title}</h2>
    <p>{data.skills[0].name}</p>
    <p>{data.skills[0].value}</p>
</section>

<style>
    section{
        background-color: var(--darkpurple);
    }
</style>