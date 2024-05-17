<script>
  import NavBar from "../lib/components/flexibles/NavBar.svelte";
  import Homepage from "../lib/components/pages/Homepage.svelte";
  import Homepage2 from "../lib/components/pages/Homepage2.svelte";

  export let data;
</script>

<NavBar {data} />
<Homepage {data} />
