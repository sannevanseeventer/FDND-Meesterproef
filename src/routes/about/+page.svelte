<script>
    export let data;
</script>

<section>
    <div class="about-container">
    <h2>{data.abouts[0].title}</h2>
    <p>{data.abouts[0].content}</p>
</div>
</section>

<style>
        section{
        background-color: var(--yellow);
        width: 100vw;
        height: 100vh;
    }
    h2 {
        color: var(--midpurple);
    }


    .about-container{
    padding: 1rem;
    }
</style>