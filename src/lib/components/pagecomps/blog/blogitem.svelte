<script>
    export let img;
    export let day;
    export let month;
    export let text;
    export let category;
</script>


<div class="rounded-xl relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500 hover:scale-[1.02] transition cursor-pointer" style="background-image: url({img})">
    <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-black dark:to-black"></div>
    <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
        <a rel="noopener noreferrer" href="#" class="px-3 py-2 text-xs font-semibold tracki uppercase dark:text-gray-100 bgundefined">{category}</a>
        <div class="flex flex-col justify-start text-center dark:text-gray-100">
            <span class="text-3xl font-semibold leadi tracki">{day}</span>
            <span class="leadi uppercase">{month}</span>
        </div>
    </div>
    <h2 class="z-10 p-5">
        <a rel="noopener noreferrer" href="#" class="font-medium text-md hover:underline dark:text-gray-100">{text}</a>
    </h2>
</div>