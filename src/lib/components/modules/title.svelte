<script lang="ts">
	export let title1: string;
	export let title2: string;
</script>

<div class="relative flex flex-col justify-center items-center mb-20 text-center">
	<h1 class="absolute -top-9 opacity-10 text-6xl font-semibold uppercase">{title2}</h1>
	<h2 class="text-3xl font-semibold uppercase">{title1}</h2>
	<div class="mt-2">
		<h3 class=" font-light text-sm uppercase text-white/80">{title2}</h3>
		<div class="h-[2px] mt-3 w-full bg-white/10" />
	</div>
</div>
