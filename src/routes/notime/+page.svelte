<script>
  export let data
  import BackButton from '../../lib/components/atoms/BackButton.svelte'
</script>

<section>
  <h1>{data.notimes[0].title}</h1>
  <BackButton />

  <div class="container">
    <ul id="cards">
      <li class="card" id="card1">
        <div class="card-body">
          <div class="grid-content">
            <div class="item1"><h2>Card 1</h2></div>
            <div class="item2">Item 2</div>
            <div class="item3">Item 3</div>
            <div class="item4">Item 4</div>
          </div>
        </div>
      </li>
      <li class="card" id="card2">
        <div class="card-body">
          <div class="grid-content">
            <div class="item1"><h2>Card 1</h2></div>
            <div class="item2">Item 2</div>
            <div class="item3">Item 3</div>
            <div class="item4">Item 4</div>
          </div>
        </div>
      </li>
      <li class="card" id="card3">
        <div class="card-body">
          <div class="grid-content">
            <div class="item1"><h2>Card 1</h2></div>
            <div class="item2">Item 2</div>
            <div class="item3">Item 3</div>
            <div class="item4">Item 4</div>
          </div>
        </div>
      </li>
      <li class="card" id="card4">
        <div class="card-body">
          <div class="grid-content">
            <div class="item1"><h2>Card 1</h2></div>
            <div class="item2">Item 2</div>
            <div class="item3">Item 3</div>
            <div class="item4">Item 4</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>

<style>
  section {
    background-color: var(--pink);
    padding: 2rem;
    height: auto;
  }

  h1 {
    color: var(--lightorange);
    font-size: 3rem;
  }

  :root {
    --cards: 4;
    --cardHeight: 87vh;
    --cardTopPadding: 1.5em;
    --cardMargin: 4vw;
  }

  .container {
    width: 90%;
    margin: 0 auto;
  }

  #cards {
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(var(--cards), var(--cardHeight));
    gap: var(--cardMargin);
    padding-bottom: calc(var(--cards) * var(--cardTopPadding));
    margin-bottom: var(--cardMargin);
  }

  #card1 {
    --index: 1;
  }
  #card2 {
    --index: 2;
  }
  #card3 {
    --index: 3;
  }
  #card4 {
    --index: 4;
  }

  .card {
    position: sticky;
    top: 0;
    padding-top: calc(var(--index) * var(--cardTopPadding));
  }

  #card1 .card-body {
    background-color: #52b2cf;
  }
  #card2 .card-body {
    background-color: #e5a36f;
  }
  #card3 .card-body {
    background-color: #9cadce;
  }
  #card4 .card-body {
    background-color: #d4afb9;
  }

  .card-body {
    box-sizing: border-box;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
    height: var(--cardHeight);
    display: flex;
    flex-direction: column;
    transition: all 0.5s;
  }

  .grid-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 10px;
    width: 100%;
    grid-template-areas:
      'item1 item1 item2'
      'item3 item4 item4';
  }

  .item1 {
    grid-area: item1;
  }
  .item2 {
    grid-area: item2;
  }
  .item3 {
    grid-area: item3;
  }
  .item4 {
    grid-area: item4;
  }

  .grid-content div {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 10px;
    border-radius: 5px;
    text-align: left;
  }

  h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
</style>
