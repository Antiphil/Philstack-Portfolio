<script lang="ts">
	import Button from '$lib/files/modules/button.svelte';
	//import { blogStore } from '$lib/stores/blog';
	import Blogitem from './blogitem.svelte';
</script>

<section class="relative flex w-full py-[35px] pr-[70px]">
	<div class="curved-corner-topright !absolute right-0 top-[calc(0px-35px)] !z-50"></div>
	<div class="curved-corner-bottomleft !absolute left-0 top-[calc(0px-65px)] !z-50"></div>
	<div class="relative flex h-full w-full gap-3 overflow-hidden rounded-r-[75px] bg-secondary p-10">
		<section class="flex w-full flex-col items-center px-5 py-2">
			<div class="flex w-full flex-col gap-1">
				<div class="group relative my-4 flex h-[178px] w-full rounded-3xl border-2 border-primary text-primary shadow-[4px_3px_0px_rgba(237,233,208,1)] transition-all hover:scale-[1.01]">
					<img class="absolute h-[175px] w-[300px] rounded-l-3xl object-cover" src="http://localhost:5173/src/lib/assets/Screenshot%202024-03-13%20115119.png" alt="" />
					<div class="absolute left-20 top-[90px] flex w-4/6 flex-col justify-center rounded-xl bg-primary px-2 py-3 transition-all group-hover:bg-secondary">
						<span class="mb-10 block font-bold text-secondary group-hover:text-primary">HERE WE ARE</span>
						<h2 class="text-sm text-secondary group-hover:text-primary">Hier muss ich mir irgendwas ausdenken was ganz cool klingt</h2>
					</div>
				</div>

				<!-- {#if $blogStore.data}
					{#each $blogStore.data.reverse() as blog, index}
						{#if index < 4}
							<Blogitem title={blog.attributes.title} tag={blog.attributes.tag} date={blog.attributes.date} desc={blog.attributes.description} />
						{/if}
					{/each}
				{/if} -->
			</div>
			<Button text="View Blog" link="/" />
		</section>
	</div>
</section>
