<script lang="ts">
    export let title = "Title text"
    export let nr = "00"
</script>

<div class="mt-4 mb-8 ml-4 md:flex md:items-center md:justify-between">
    <div>
        <h1 class="text-2xl font-bold uppercase lg:text-3xl">
            {title}
        </h1>

        <div class="flex mx-auto mt-3">
            <span class="inline-block w-40 h-1 bg-primary rounded-full"></span>
            <span class="inline-block w-4 h-1 mx-1 bg-primary rounded-full"></span>
            <span class="inline-block w-2 h-1 bg-primary rounded-full"></span>
        </div>
    </div>
</div>