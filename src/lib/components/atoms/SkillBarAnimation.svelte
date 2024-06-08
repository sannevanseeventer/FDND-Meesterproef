<script>
  export let bar
</script>

<div class="skillbar-container">
  <div
    class="skillbar-outer"
    aria-label="{bar.name} skill at {bar.value}%"
    role="progressbar"
    aria-valuenow={bar.value}
  >
    <div
      class="skillbar-inner skillbar-inner-animation"
      style="width: {bar.value}%; background-color: {bar.color.hex};"
    ></div>
  </div>
  <p class="skillbar-value">{bar.value}%</p>
</div>

<style>
  .skillbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .skillbar-outer {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 35px;
    width: 80%;
    background-color: var(--darkpurple-bar);
    border-radius: 5px;
    overflow: hidden;
  }
  .skillbar-inner {
    height: 26px;
    margin: 0.3rem;
    border-radius: 5px;
    transition: width 0.5s ease-in-out;
  }

  p {
    font-size: 1.2rem;
  }

  /* Animation */
  .skillbar-inner-animation {
    animation: fillAnimation 1s ease-in-out;
  }

  @keyframes fillAnimation {
    from {
      width: 0%;
    }
  }

  @media screen and (min-width: 48em) {
    .skillbar-outer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 350px;
      height: 45px;
    }
    .skillbar-inner {
      height: 35px;
    }
    .skillbar-container {
      gap: 1rem;
    }
  }
</style>
