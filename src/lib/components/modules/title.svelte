<script lang="ts">
	export let title: string = 'Title text';
	export let left: boolean = false;
	export let right: boolean = false;
	export let center: boolean = false;
</script>

<div class="flex md:flex {center ? 'justify-center' : ''} {right ? 'justify-end' : ''}">
	<div class={center ? 'flex flex-col items-center' : ''}>
		<h1 class="text-2xl font-bold uppercase lg:text-3xl">
			{title}
		</h1>

		<div class="mx-auto mt-3 flex {right ? 'flex-row-reverse' : ''} {left ? '' : ''} {left ? '' : ''}">
			<span class="inline-block h-1 w-40 rounded-full bg-primary-main"></span>
			<span class="mx-1 inline-block h-1 w-4 rounded-full bg-primary-main"></span>
			<span class="inline-block h-1 w-2 rounded-full bg-primary-main"></span>
		</div>
	</div>
</div>
