<script>
	import BlogitemMini from './../../modules/blogitems/blogitemMini.svelte';
	import phil from '$lib/assets/images/hero.jpg';
	import BlogitemSmall from '$lib/components/modules/blogitems/blogitemSmall.svelte';
	import Titlesmall from '$lib/components/modules/titlesmall.svelte';
	import Tag from './tag.svelte';
	import { locale } from '$i18n/i18n-svelte';

	export let tags;
	export let data;
</script>

<div class="h-full w-full bg-secondary-900 p-10">
	<Titlesmall title="about me" />
	<div class="my-10 flex flex-col">
		<img class="m-auto mb-2 h-40 w-40 rounded-full object-cover" src={phil} alt="Philstack" />
		<div class="mt-3 flex flex-col gap-1">
			<div class="flex items-center gap-3">
				<p class="text-xs font-bold">Name:</p>
				<p class="text-sm font-light">Phil aka. AntiPhil</p>
			</div>
			<div class="flex items-center gap-3">
				<p class="text-xs font-bold">Job:</p>
				<p class="text-sm font-light">Frontend Developer & UX/UI Designer</p>
			</div>
			<div class="flex items-center gap-3">
				<p class="text-xs font-bold">Location:</p>
				<p class="text-sm font-light">Thuringia/Germany</p>
			</div>
			<div class="mt-3 text-sm font-light">Ich bin ein 28 jähriger IT-Nerd aus Thüringen mit einer großen Leidenschaft für alles Technische und Kreative. Die meisten meiner Fähigkeiten habe ich mir selbst beigebracht und möchte hier meine Erfahrungen und Skills mit euch zu teilen!</div>
		</div>
	</div>
	<Titlesmall title="Tags" />
	<div class="my-10 flex flex-wrap gap-2">
		{#each tags as tag}
			<Tag name={tag} url="/{$locale}/blog/tag/{tag}" />
		{/each}
	</div>
	<Titlesmall title="Other Posts" />
	<div class="mt-10 flex flex-col items-center justify-center gap-3">
		{#each data.data as post, index}
			{#if index >= 4}
				{#if $locale === 'en'}
					<BlogitemMini title={post.attributes.title} desc={post.attributes.description} url="/{$locale}/blog/article/{post.attributes.uid}" img="https://strapi.antiphil.de{post.attributes.media.data[0].attributes.url}" />
				{:else}
					<BlogitemMini title={post.attributes.localizations.data[0].attributes.title} desc={post.attributes.localizations.data[0].attributes.description} url="/{$locale}/blog/article/{post.attributes.uid}" img="https://strapi.antiphil.de{post.attributes.media.data[0].attributes.url}" />
				{/if}
			{/if}
		{/each}
	</div>
</div>
