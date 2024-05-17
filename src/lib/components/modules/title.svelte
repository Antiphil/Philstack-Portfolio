<script lang="ts">
	export let title: string = 'Title text';
</script>

<div class="mb-8 mt-4 md:flex md:items-center md:justify-between">
	<div>
		<h1 class="text-2xl font-bold uppercase lg:text-3xl">
			{title}
		</h1>

		<div class="mx-auto mt-3 flex">
			<span class="bg-primary inline-block h-1 w-40 rounded-full"></span>
			<span class="bg-primary mx-1 inline-block h-1 w-4 rounded-full"></span>
			<span class="bg-primary inline-block h-1 w-2 rounded-full"></span>
		</div>
	</div>
</div>
