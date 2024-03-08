<script>
    export let nr;
    export let title;
    export let categories;
    export let img;
</script>

<button class="relative w-full min-h-[150px] border-1 rounded-[50px] overflow-hidden flex items-center justify-between group projectGroup">
    <div class="flex w-full items-center z-10">
        <div class="h-[3px] w-20 bg-white mr-5 group-hover:mr-0 group-hover:w-44 transition-all duration-300"></div>
        <p class="mr-5 group-hover:hidden transition-all duration-300 font-bold">{nr}</p>
        <div class="flex flex-col group-hover:bg-primary group-hover:text-secondary rounded-xl group-hover:px-4 py-2 items-start">
            <p class="uppercase text-2xl font-semibold transition-all duration-300">{title}</p>
            <p class="uppercase text-[10px] w-fit">
                {#each categories as cat }
                    <span>{cat}</span>
                {/each}
            </p>
        </div>
    </div>
    <div class="relative flex items-center  z-10 w-[284px] h-[80px] bg-cover projectButton transition-all duration-300">
        <p class='absolute left-7 uppercase font-bold text-xs group-hover:text-black'>View Project</p>
    </div>
    <img class="absolute h-full w-[0%] z-0 group-hover:w-full  object-cover transition-all duration-300 opacity-50" src={img} />
</button>