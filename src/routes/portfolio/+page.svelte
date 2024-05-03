<script>
    export let data;
  </script>
  
  <section>
    <div class="portfolio-container">
    <h2>{data.portfolios[0].title}</h2>
    </div>
  </section>

  <style>
          section{
        background-color: var(--midpurple);
        width: 100vw;
        height: 100vh;
    }
    h2 {
        color: var(--lightpink);
    }


    .portfolio-container{
    padding: 1rem;
    }
  </style>
  