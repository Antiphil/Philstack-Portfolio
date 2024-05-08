<script>
	export let img;
	export let text;
</script>

<div class="flex flex-col items-center justify-center gap-3 text-center">
	<img class="w-16" src={img} alt="" />
	<span class="text-xs font-bold">{@html text}</span>
</div>
