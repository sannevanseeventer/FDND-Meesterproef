<script>
  import NavBar from '../lib/components/organisms/NavBar.svelte'
  import Homepage2 from '../lib/components/pages/Homepage2.svelte'

  export let data
</script>

<NavBar {data} />
<Homepage2 {data} />
