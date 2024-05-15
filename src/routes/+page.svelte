<script>
  import Nav from "../lib/components/flexibles/Nav.svelte";
  import Homepage from "../lib/components/pages/Homepage.svelte";
  import Homepage2 from "../lib/components/pages/Homepage2.svelte";

  export let data;
</script>

<Nav {data} />
<Homepage {data} />
