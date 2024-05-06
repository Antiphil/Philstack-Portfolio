<script>
    import logo from '$lib/assets/logos/logo_full.svg'
    export let slugs = ["test1", "test2", "test3"]
    export let titles;
</script>

<div class="bg-[rgba(22,22,19,0.8)] px-10 py-5 fixed z-10 w-full backdrop-blur-xl flex ">
    <a href="/"><img class="h-5 mr-10" src={logo} alt=""></a>
    <nav class="flex items-center" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li class="inline-flex items-center">
            <a href="/" class="inline-flex items-center text-sm font-medium hover:text-primaryhover transition-colors">
                <i class="fa-solid fa-house text-xs mr-2"></i>
                Home
            </a>
        </li>
        {#each slugs as slug, index }
            <li>
                <div class="flex items-center">
                    <i class="fa-solid fa-angles-right text-xs mr-1"></i>
                    <a href={slug} class="ms-1 text-sm font-medium hover:text-primaryhover transition-colors">{titles[index]}</a>
                </div>
            </li>
        {/each}
        
        </ol>
    </nav>

</div>