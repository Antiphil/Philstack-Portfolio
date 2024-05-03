<script>
	// @ts-nocheck
    import logo from '$lib/assets/logos/logo_full.svg'
	import Footer from '$lib/files/layout/footer.svelte';
	import {Tooltip} from 'svooltip';
    import { tooltip } from 'svooltip';
	import 'svooltip/styles.css'; // Include default styling

</script>
<section class="relative flex flex-col w-full pl-[10px] xl:pl-[70px] pb-[5px] xl:pb-[35px]">
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
            <li>
                <div class="flex items-center">
                    <i class="fa-solid fa-angles-right text-xs mr-1"></i>
                    <a href="/projects" class="ms-1 text-sm font-medium hover:text-primaryhover transition-colors">Impressum</a>
                </div>
            </li>
            </ol>
        </nav>
  
    </div>
	<div class="relative flex h-full w-full flex-row-reverse gap-3 overflow-hidden rounded-bl-3xl bg-secondary xl:rounded-bl-[75px]">
        

		<div class="p-10 w-full mt-10">
            <div class="bg-[rgba(22,22,19,0.8)] mb-5 text-xs px-5 py-2 rounded-xl flex justify-between items-center">
                <div class="">
                    <span>Updated at 03.05.2023</span>
                </div>
                <div class="flex gap-3 text-sm">
                    <a href="/" use:tooltip={{content: "Copy URL"}} class="hover:bg-primary hover:text-secondary transition-all w-6 h-6 rounded-full flex items-center justify-center">
                        <i class="fa-solid fa-link"></i>
                    </a>
                </div>
            </div>
            <div class="bg-[rgba(22,22,19,0.8)] p-5 rounded-xl">
                <slot />
            </div>
        </div>
	</div>
</section>

<style>
    :global(.svooltip) {
        z-index: 100;
    }
</style>