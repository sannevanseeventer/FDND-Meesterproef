<script>
  export let bar
</script>

<div class="skill-value__container">
  <div
    class="skill-bar__outer"
    aria-label="{bar.name} skill at {bar.value}%"
    role="progressbar"
    aria-valuenow={bar.value}
  >
    <div
      class="skill-bar__inner skill-bar__inner-animation"
      style="width: {bar.value}%; background-color: {bar.color.hex};"
    ></div>
  </div>
  <p class="skill-bar__value">{bar.value}%</p>
</div>

<style>
  .skill-value__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .skill-bar__outer {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 35px;
    width: 80%;
    background-color: var(--darkpurple-bar);
    border-radius: 5px;
    overflow: hidden;
  }
  .skill-bar__inner {
    height: 26px;
    margin: 0.3rem;
    border-radius: 5px;
    transition: width 0.5s ease-in-out;
  }

  p {
    font-size: 1.2rem;
  }

  /* Animation */
  .skill-bar__inner-animation {
    animation: fillAnimation 1s ease-in-out;
  }

  @keyframes fillAnimation {
    from {
      width: 0%;
    }
  }

  @media screen and (min-width: 768px) {
    .skill-bar__outer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 350px;
      height: 45px;
    }
    .skill-bar__inner {
      height: 35px;
    }
    .skill-value__container {
      gap: 1rem;
    }
  }
</style>
