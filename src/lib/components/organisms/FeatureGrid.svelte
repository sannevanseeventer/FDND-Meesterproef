<script>
</script>

<section>
  <ul class="container">
    <li class="picture grid-item"><img src="sannevanseeventer2.webp" alt="Sanne" /></li>
    <li class="feature1 grid-item">Sanne van Seeventer</li>
    <li class="feature2 grid-item">28</li>
    <li class="feature3 grid-item">Amsterdam</li>
    <li class="feature4 grid-item"></li>
    <li class="feature5 grid-item">Creative</li>
    <li class="feature6 grid-item"></li>
    <li class="feature7 grid-item">Perfectionist</li>
    <li class="feature8 grid-item">Eager to learn</li>
    <li class="feature9 grid-item"></li>
    <li class="feature10 grid-item">Flexible</li>
    <li class="feature11 grid-item"></li>
    <li class="feature12 grid-item"></li>
  </ul>
</section>

<style>
  section {
    width: 100%;
    height: auto;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(11, 1fr);
    gap: 1rem;
    margin-bottom: 4rem;
    grid-auto-flow: dense;
    grid-template-areas:
      '. . picture'
      '. . picture'
      'feature1 feature1 feature1'
      'feature2 feature3 feature3'
      'feature4 feature4 .'
      'feature6 feature5 feature5'
      '. feature7 feature7'
      'feature8 feature8 feature8'
      'feature9 feature10 feature10'
      '. . feature11'
      '. feature12 feature12';
  }

  /* scroll driven animation */
  @supports (animation-timeline: scroll()) {
    @keyframes slide-fade-in {
      from {
        opacity: 0;
        transform: translateY(5vh) scale(0.8);
      }
    }
    @media (prefers-reduced-motion: no-preference) {
      .grid-item {
        view-timeline-name: --item-timeline;
        animation: slide-fade-in 1s ease-in both;
        animation-timeline: --item-timeline;
        animation-range: contain 20% contain 30%;
      }
    }
  }

  li {
    padding: 0.8rem 1rem;
    color: var(--white);
    border-radius: 0.6rem;
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
  }

  img {
    width: 11.9rem;
    height: 7.8rem;
    object-fit: cover;
    border-radius: 0.6rem;
  }

  .picture {
    grid-area: picture;
    padding: 0;
  }

  .feature1 {
    grid-area: feature1;
    background-color: var(--orange);
  }

  .feature2 {
    grid-area: feature2;
    background-color: var(--midpurple);
  }

  .feature3 {
    grid-area: feature3;
    background-color: var(--pink);
  }

  .feature4 {
    grid-area: feature4;
    background-color: var(--featureyellow);
  }

  .feature5 {
    grid-area: feature5;
    background-color: var(--darkpurple);
  }

  .feature6 {
    grid-area: feature6;
    background-color: var(--lightorange);
  }

  .feature7 {
    grid-area: feature7;
    background-color: var(--orange);
  }
  .feature8 {
    grid-area: feature8;
    background-color: var(--midpurple);
  }
  .feature9 {
    grid-area: feature9;
    background-color: var(--featureyellow);
  }
  .feature10 {
    grid-area: feature10;
    background-color: var(--pink);
  }
  .feature11 {
    grid-area: feature11;
    background-color: var(--lightorange);
  }
  .feature12 {
    grid-area: feature12;
    background-color: var(--lightpink);
  }

  /* full screen */
  @media screen and (min-width: 48em) {
    .container {
      width: 100%;
      column-gap: 4rem;
    }

    li {
      padding: 1.7rem 1rem;
      font-size: 2rem;
    }
    img {
      width: 26.9rem;
      height: 12.5rem;
      object-fit: cover;
      border-radius: 0.6rem;
    }
    .picture {
      padding: 0;
    }
  }
</style>
