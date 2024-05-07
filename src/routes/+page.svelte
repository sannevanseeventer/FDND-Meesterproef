<script>
import Nav from "../lib/components/Nav.svelte";
import Homepage from "../lib/components/Homepage.svelte"


export let data;

</script>

<Nav {data}/>
<Homepage {data}/>