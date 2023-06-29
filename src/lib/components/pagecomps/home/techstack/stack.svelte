<script lang="ts">
    export let alt: string;
    export let img: string;
    export let text: string;
    export let invert: boolean = false;
</script>

<div class="bg-black/30 hover:bg-black/40 transition-all flex flex-col items-center group justify-center p-4 sm:p-6 md:py-12 duration-300">
    <img alt={alt} class={`${invert?'invert w-20 object-contain':'w-20 object-contain'}`} draggable="true" loading="lazy" sizes="10vw" src={img} width="150" height="75" />
    <div class="flex items-center space-x-2 font-mono text-xs mt-4">
        <span class="transition-colors font-semibold uppercase text-xl duration-500 group-hover:text-white">{text}</span>
        
    </div>
</div>