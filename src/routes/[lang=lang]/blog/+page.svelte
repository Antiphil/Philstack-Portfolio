<script>
	import { locale } from '$i18n/i18n-svelte';
	import BlogitemCard from '$lib/components/modules/blogitems/blogitemCard.svelte';
	import BlogitemMain from '$lib/components/modules/blogitems/blogitemMain.svelte';
	import BlogitemSmall from '$lib/components/modules/blogitems/blogitemSmall.svelte';
	import Button from '$lib/components/modules/button.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import { formatDistance, subDays } from 'date-fns';

	export let data;
</script>

<main class="m-auto mt-12 max-w-7xl p-3 pb-20">
	<div class="mb-8">
		<Title left title="Featured Posts" />
	</div>
	<!-- FEATURED POSTS -->
	<div class="mb-16 flex flex-wrap space-x-0 md:flex-nowrap md:space-x-6">
		<div class="relative mb-3 block w-full pt-20 md:w-1/2 lg:mb-0">
			<BlogitemMain />
		</div>
		<div class="xs:pl-3 flex w-full flex-col gap-3 md:w-1/2">
			{#if data.featured}
				{#each data.featured as featuredItem, index}
					{#if index < 4}
						{#if $locale === 'en'}
							<BlogitemSmall title={featuredItem.attributes.title} tags={featuredItem.attributes.tag} desc={featuredItem.attributes.description} date={formatDistance(subDays(featuredItem.attributes.createdAt, 0), new Date(), { addSuffix: true })} url="/{$locale}/blog/{featuredItem.attributes.uid}" img="https://strapi.antiphil.de{featuredItem.attributes.media.data[0].attributes.url}" />
						{:else if $locale === 'de'}
							<BlogitemSmall title={featuredItem.attributes.localizations.data[0].attributes.title} desc={featuredItem.attributes.localizations.data[0].attributes.description} date={formatDistance(subDays(featuredItem.attributes.createdAt, 0), new Date(), { addSuffix: true })} url="/{$locale}/blog/{featuredItem.attributes.uid}" img="https://strapi.antiphil.de{featuredItem.attributes.media.data[0].attributes.url}" />
						{/if}
					{/if}
				{/each}
			{:else}
				<div class="flex h-full w-full flex-col gap-3">
					<div class="h-1/4 w-full animate-pulse rounded-3xl bg-secondary-900"></div>
					<div class="h-1/4 w-full animate-pulse rounded-3xl bg-secondary-900"></div>
					<div class="h-1/4 w-full animate-pulse rounded-3xl bg-secondary-900"></div>
					<div class="h-1/4 w-full animate-pulse rounded-3xl bg-secondary-900"></div>
				</div>
			{/if}
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
