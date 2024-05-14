<script>
</script>

<ul class="container">
    <li class="picture">picture</li>
    <li class="feature1">27</li>
    <li class="feature2">Amsterdam</li>
    <li class="feature3">Perfectionistisch</li>
    <li class="feature4">Leergierig</li>
    <li class="feature5">Creatief</li>
    <li class="feature6"></li>
    <li class="feature7"></li>
</ul>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 1rem;
        margin-bottom: 4rem;
        grid-auto-flow: row;
        grid-template-areas:
            '. . picture'
            '. . picture'
            'feature1 feature2 feature2'
            'feature3 feature3 feature3'
            '. feature4 feature4'
            'feature5 feature5 feature6'
            'feature7 feature7 feature7';
    }

    li {
        padding: 0.5rem 1rem;
        color: var(--white);
        border-radius: 10px;
        font-size: 1.7rem;
        text-align: center;
        text-transform: uppercase;
    }

    .picture {
        grid-area: picture;
        background-color: var(--darkpurple);
    }

    .feature1 {
        grid-area: feature1;
        background-color: var(--midpurple);
    }

    .feature2 {
        grid-area: feature2;
        background-color: var(--orange);
    }

    .feature3 {
        grid-area: feature3;
        background-color: var(--berry);
    }

    .feature4 {
        grid-area: feature4;
        background-color: var(--darkpurple);
    }

    .feature5 {
        grid-area: feature5;
        background-color: var(--orange);
    }

    .feature6 {
        grid-area: feature6;
        background-color: var(--midpurple);
    }

    .feature7 {
        grid-area: feature7;
        background-color: var(--lightpink);
    }
</style>
