<script lang="ts">
	export let title = 'Title text';
	export let nr = '00';
</script>

<div class="mb-8 mt-4 md:flex md:items-center md:justify-between">
	<div>
		<h1 class="text-2xl font-bold uppercase lg:text-3xl">
			{title}
		</h1>

		<div class="mx-auto mt-3 flex">
			<span class="inline-block h-1 w-40 rounded-full bg-primary"></span>
			<span class="mx-1 inline-block h-1 w-4 rounded-full bg-primary"></span>
			<span class="inline-block h-1 w-2 rounded-full bg-primary"></span>
		</div>
	</div>
</div>
