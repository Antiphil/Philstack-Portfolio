<script>
	import Feature from "../components/projects/sidebar/feature.svelte";

</script>
<div class="bg-[#181715] w-1/4 relative z-50 px-10 py-5 flex flex-col gap-5">
    <div class="flex flex-col gap-3">
        <div class="mt-4 mb-4 md:flex md:items-center md:justify-between">
            <div>
                <h1 class="text-lg font-bold uppercase lg:text-2xl">
                    Features 
                </h1>

                <div class="flex mx-auto mt-1">
                    <span class="inline-block w-32 h-1 bg-primary rounded-full"></span>
                    <span class="inline-block w-4 h-1 mx-1 bg-primary rounded-full"></span>
                    <span class="inline-block w-2 h-1 bg-primary rounded-full"></span>
                </div>
            </div>
        </div>
        <Feature title="Datenbank" icon="fa-database" text="lorem irasda asdasd asdasd asdasdas dasdasda asda" />
        <Feature title="Datenbank" icon="fa-database"  />
        <Feature title="Datenbank" icon="fa-database"  />
    </div>
    <div class="">
        <div class="mt-4 mb-4 md:flex md:items-center md:justify-between">
            <div>
                <h1 class="text-lg font-bold uppercase lg:text-2xl">
                    Our Team
                </h1>

                <div class="flex mx-auto mt-1">
                    <span class="inline-block w-32 h-1 bg-primary rounded-full"></span>
                    <span class="inline-block w-4 h-1 mx-1 bg-primary rounded-full"></span>
                    <span class="inline-block w-2 h-1 bg-primary rounded-full"></span>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <a href="https://github.com/syntafin" class="hover:scale-[1.01] transition-all hover:bg-secondary rounded-xl" target="_blank"><Feature title="Syntafin" icon="fa-brands fa-github text-2xl"/></a>
            <a href="https://github.com/Weneg" class="hover:scale-[1.01] transition-all hover:bg-secondary rounded-xl" target="_blank"><Feature title="Weneg" icon="fa-brands fa-github text-2xl"/></a>
        </div>
    </div>
    <div class="">
        <div class="mt-4 mb-4 md:flex md:items-center md:justify-between">
            <div>
                <h1 class="text-lg font-bold uppercase lg:text-2xl">
                    Tags 
                </h1>

                <div class="flex mx-auto mt-1">
                    <span class="inline-block w-32 h-1 bg-primary rounded-full"></span>
                    <span class="inline-block w-4 h-1 mx-1 bg-primary rounded-full"></span>
                    <span class="inline-block w-2 h-1 bg-primary rounded-full"></span>
                </div>
            </div>
        </div>
        <div class="flex gap-2 flex-wrap">
            <span class="bg-primary rounded-full px-3 py-1 text-sm font-semibold text-secondary">#Laravel</span>
            <span class="bg-primary rounded-full px-3 py-1 text-sm font-semibold text-secondary">#PHP</span>
            <span class="bg-primary rounded-full px-3 py-1 text-sm font-semibold text-secondary">#Svelte</span>
            <span class="bg-primary rounded-full px-3 py-1 text-sm font-semibold text-secondary">#Redis</span>
            <span class="bg-primary rounded-full px-3 py-1 text-sm font-semibold text-secondary">#Postgres</span>
            <span class="bg-primary rounded-full px-3 py-1 text-sm font-semibold text-secondary">#Mailisearch</span>
            <span class="bg-primary rounded-full px-3 py-1 text-sm font-semibold text-secondary">#Frontend</span>
            <span class="bg-primary rounded-full px-3 py-1 text-sm font-semibold text-secondary">#Gaming</span>
        </div>
    </div>
</div>
