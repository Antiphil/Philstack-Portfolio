<script>
	import BlogitemCard from '$lib/components/modules/blogitems/blogitemCard.svelte';
	import BlogitemMain from '$lib/components/modules/blogitems/blogitemMain.svelte';
	import BlogitemSmall from '$lib/components/modules/blogitems/blogitemSmall.svelte';
	import Button from '$lib/components/modules/button.svelte';
	import Title from '$lib/components/modules/title.svelte';
</script>

<main class="m-auto mt-12 max-w-7xl pb-20">
	<div class="mb-8">
		<Title left title="Featured Posts" />
	</div>
	<!-- FEATURED POSTS -->
	<div class="mb-16 flex flex-wrap space-x-0 md:flex-nowrap md:space-x-6">
		<div class="md:w-4/7 relative mb-3 block w-full pt-20 lg:mb-0">
			<BlogitemMain />
		</div>
		<div class="md:w-4/7 xs:pl-3 flex w-full flex-col gap-3">
			<BlogitemSmall />
			<BlogitemSmall />
			<BlogitemSmall />
			<BlogitemSmall />
		</div>
	</div>

	<!-- recent posts -->
	<div class="mb-4 mt-16 flex items-center justify-between px-4 lg:px-0">
		<div class="">
			<Title left title="Latest Posts" />
		</div>
		<Button text="View All" link="/" />
	</div>
	<div class="block space-x-0 lg:flex lg:space-x-6">
		<BlogitemCard />
		<BlogitemCard />
		<BlogitemCard />
	</div>
	<!-- end recent posts -->

	<!-- subscribe
	<div class="mt-12 flex rounded md:shadow">
		<img src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" class="w-0 rounded-l object-cover md:w-1/4" />
		<div class="px-4 py-2">
			<h3 class="text-3xl font-bold text-gray-800">Subscribe to newsletter</h3>
			<p class="text-xl text-gray-700">We sent latest news and posts once in every week, fresh from the oven</p>
			<form class="mb-10 mt-4">
				<input type="email" class="rounded border bg-gray-100 px-4 py-2 focus:border-green-400" placeholder="john@tech.com" />
				<button class="rounded bg-green-800 px-4 py-2 text-gray-100">
					Subscribe
					<i class="bx bx-right-arrow-alt"></i>
				</button>
				<p class="mt-1 text-sm text-green-900 opacity-50">No spam. We promise</p>
			</form>
		</div>
	</div>
	ens subscribe section -->

	<!-- popular posts -->
	<div class="mb-4 mt-16 flex items-center justify-between px-4 lg:px-0">
		<div class="">
			<Title left title="Popular Posts" />
		</div>
		<Button text="View All" link="/" />
	</div>
	<div class="block space-x-0 lg:flex lg:space-x-6">
		<BlogitemCard />
		<BlogitemCard />
		<BlogitemCard />
	</div>
	<!-- end popular posts -->
</main>
