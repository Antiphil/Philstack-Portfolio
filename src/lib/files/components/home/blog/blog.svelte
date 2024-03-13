<script>
	import Blogitem from './blogitem.svelte';

	let blogData = [1, 2, 3, 4];
</script>

<section class="relative flex w-full py-[35px] pr-[70px]">
	<div class="curved-corner-topright !absolute right-0 top-[calc(0px-35px)] !z-50"></div>
	<div class="curved-corner-bottomleft !absolute left-0 top-[calc(0px-65px)] !z-50"></div>
	<div class="relative flex h-full w-full gap-3 overflow-hidden rounded-r-[75px] bg-secondary p-10">
		<section class="w-full px-5 py-10">
			<div class="flex w-full flex-col gap-3">
				{#each blogData as blog}
					<Blogitem title={undefined} tag={undefined} date={undefined} desc={undefined} img={undefined} />
				{/each}
			</div>
		</section>
	</div>
</section>
