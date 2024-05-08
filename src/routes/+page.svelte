<script>
import Nav from "../lib/components/Nav.svelte";
import Homepage from "../lib/components/Homepage.svelte"
import Homepage2 from "../lib/components/Homepage2.svelte"


export let data;

</script>

<Nav {data}/>
<Homepage2 {data}/>