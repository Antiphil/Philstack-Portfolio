<script>
    import { tooltip } from 'svooltip';
    export let link;
    export let text;
</script>

<div class="bg-[rgba(22,22,19,0.8)] mb-5 text-xs px-5 py-2 rounded-xl flex justify-between items-center">
    <div class="">
        <span>Website: <a class="underline hover:text-primaryhover transition-colors" href={link} target="_blank">{link}</a></span>
        -
        <span>{text}</span>
    </div>
    <div class="flex gap-3 text-sm">
        <a href="/" use:tooltip={{content: "Share on Facebook"}} class="hover:bg-primary hover:text-secondary transition-all w-6 h-6 rounded-full flex items-center justify-center">
            <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="/" use:tooltip={{content: "Share on X/Twitter"}} class="hover:bg-primary hover:text-secondary transition-all w-6 h-6 rounded-full flex items-center justify-center">
            <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="/" use:tooltip={{content: "Share on Threads"}} class="hover:bg-primary hover:text-secondary transition-all w-6 h-6 rounded-full flex items-center justify-center">
            <i class="fa-brands fa-threads"></i>
        </a>
        <a href="/" use:tooltip={{content: "Copy URL"}} class="hover:bg-primary hover:text-secondary transition-all w-6 h-6 rounded-full flex items-center justify-center">
            <i class="fa-solid fa-link"></i>
        </a>
    </div>
</div>