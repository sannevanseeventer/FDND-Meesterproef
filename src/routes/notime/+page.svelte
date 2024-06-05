<!-- <script>
  import BackButton from '../../lib/components/atoms/BackButton.svelte'
</script>

<BackButton />
<section>
  <h1>{data.notimes[0].title}</h1>
</section> -->

<script>
  export let data
</script>

<section>
  <h1>{data.notimes[0].title}</h1>
</section>

<style>
  section {
    background-color: var(--pink);
    padding: 2rem;
  }

  h1 {
    color: var(--lightorange);
    font-size: 3rem;
  }
</style>
