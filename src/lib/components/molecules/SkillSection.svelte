<script>
</script>

<h2>Skills</h2>
<h3>Frontend</h3>
<div class="skillbar">
  <p class="skillbar-title">HTML</p>
  <div class="outerbar">
    <div class="skillbar-bar" style="width: 90%;"></div>
  </div>
</div>
<div class="skillbar">
  <p class="skillbar-title">CSS</p>
  <div class="outerbar">
    <div class="skillbar-bar" style="width: 80%;"></div>
  </div>
</div>
<div class="skillbar">
  <p class="skillbar-title">JavaScript</p>
  <div class="outerbar">
    <div class="skillbar-bar" style="width: 70%;"></div>
  </div>
</div>
<h3>Design</h3>
<div class="skillbar">
  <p class="skillbar-title">HTML</p>
  <div class="outerbar">
    <div class="skillbar-bar2" style="width: 90%;"></div>
  </div>
</div>
<div class="skillbar">
  <p class="skillbar-title">CSS</p>
  <div class="outerbar">
    <div class="skillbar-bar2" style="width: 80%;"></div>
  </div>
</div>
<div class="skillbar">
  <p class="skillbar-title">JavaScript</p>
  <div class="outerbar">
    <div class="skillbar-bar2" style="width: 70%;"></div>
  </div>
</div>
<h3>Language</h3>
<div class="skillbar">
  <p class="skillbar-title">Nederlands</p>
  <div class="outerbar">
    <div class="skillbar-bar3" style="width: 90%;"></div>
  </div>
</div>
<div class="skillbar">
  <p class="skillbar-title">English</p>
  <div class="outerbar">
    <div class="skillbar-bar3" style="width: 80%;"></div>
  </div>
</div>

<style>
  .skillbar {
    margin-bottom: 0px;
  }

  .outerbar {
    height: 20px;
    background-color: #27072e;
    border-radius: 5px;
    overflow: hidden; /* Ensures the inner bar is clipped to the outer bar */
  }

  .skillbar-bar {
    height: 60%;
    margin: 4px;
    border-radius: 3px;
    background-color: var(--lightpink);
    transition: width 0.5s;
  }

  .skillbar-bar2 {
    height: 60%;
    margin: 4px;
    border-radius: 3px;
    background-color: var(--berry);
    transition: width 0.5s;
  }
  .skillbar-bar3 {
    height: 60%;
    margin: 4px;
    border-radius: 3px;
    background-color: var(--orange);
    transition: width 0.5s;
  }

  h2 {
    color: var(--lightorange);
    text-transform: none;
  }
  h3 {
    color: var(--yellow);
    text-transform: uppercase;
    margin-top: 2rem;
  }
  p {
    font-size: 1rem;
    margin-bottom: 5px;
    margin-top: 0.5rem;
  }
  @media screen and (min-width: 678px) {
    h2 {
      font-size: 3rem;
      margin-top: 0;
    }
    p {
      font-size: 1.3rem;
    }
    .outerbar {
      height: 50px;
      background-color: var(--darkpurple-bar);
      border-radius: 5px;
      margin-bottom: 1.5rem;
      overflow: hidden; /* Ensures the inner bar is clipped to the outer bar */
    }
    .skillbar-bar {
      margin: 10px;
    }
    .skillbar-bar2 {
      margin: 10px;
    }
    .skillbar-bar3 {
      margin: 10px;
    }
    h3 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }
</style>
