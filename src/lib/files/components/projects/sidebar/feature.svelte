<script>
    export let title;
    export let icon;
    export let text;
</script>

<div class="md:flex md:items-start ">
    <span class="p-2 text-secondary bg-primary rounded-lg">
        <i class="fa-solid w-5 h-5 flex items-center justify-center {icon}"></i>
    </span>

    <div class="mt-4 md:mx-4 md:mt-0">
        <h1 class="mt-1 text-lg font-semibold">{title}</h1>
        {#if text}
        <p class="mt-3 text-sm text-balance">
            {text}
        </p>
        {/if}
    </div>
</div>