<script>
  import Noise from "$lib/files/layout/noise.svelte";
    import Overlay from "$lib/files/layout/overlay.svelte";
    import "../app.css";
</script>

<Noise />
<div class="">    
    <Overlay />
    <slot />
</div>