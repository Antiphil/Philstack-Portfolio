<script>
// @ts-nocheck

    let data;
	const fetchDataFromAPI = async () => {
		try {
			const response = await fetch('https://strapi.antiphil.de/api/project-xivdata?populate=*');
			data = await response.json();
		} catch (error) {
			console.error('Fehler beim Abrufen der xivdata Daten:', error);
		}
	};
	fetchDataFromAPI();
</script>


<article id="blogContent" class="prose-base prose-pink">
	{#if data}
		{@html data.data?.attributes?.content}
	{/if}
</article>

<style>
	:global(#blogContent img) {
		filter: sepia(0.5);
		border-radius: 20px;
		border: 3px solid #EDE9D0;
		transition: .5s all;
	}
	:global(#blogContent img:hover) {
		filter: sepia(0);
		transition: .5s all;
	}
</style>