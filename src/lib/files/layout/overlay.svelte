<script>
    import logo from "$lib/assets/logos/logo.svg"
</script>

<div class="hidden md:flex justify-between absolute w-[calc(100%-3px)] px-3 pb-10 pt-5 h-[calc(100vh-12px)] z-50  text-secondary pointer-events-none">
    <div class="pt-3 flex flex-col justify-between items-center h-full">
        <a href="/" class="pointer-events-auto">
            <img class="w-[50px] h-[50px] " src={logo} alt="">
        </a>
        <div class=" hidden sm:flex pointer-events-auto flex-col items-center  gap-2 max-w-5 text-secondary">
            <a href="https://twitter.com/MisterNamazu" target="_blank" class=" relative flex items-center socHov hover:text-[#1DA1F2]">
                <i class="fa-brands fa-threads"></i>
                <span class="absolute left-5 font-bold text-xs overflow-hidden w-0 mix-blend-normal drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">Threads</span>
            </a>
            <a href="https://www.instagram.com/mrnamazu/" target="_blank" class=" relative flex items-center socHov hover:text-[#FCAF45]">
                <i class="fa-brands fa-instagram"></i>
                <span class="absolute left-5 font-bold text-xs overflow-hidden w-0 mix-blend-exclusion drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/in/philipp-stehle-24a125249/" target="_blank" class="  relative flex items-center socHov hover:text-[#1DA1F2]">
                <i class="fa-brands fa-x-twitter"></i>
                <span class="absolute left-5 font-bold text-xs overflow-hidden w-0 mix-blend-lighten drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] ">Twitter/X</span>
            </a>
            <a href="https://www.linkedin.com/in/philipp-stehle-24a125249/" target="_blank" class="  relative flex items-center socHov hover:text-[#0072b1]">
                <i class="fa-brands fa-linkedin-in"></i>
                <span class="absolute left-5 font-bold text-xs overflow-hidden w-0 mix-blend-lighten drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] ">LinkedIn</span>
            </a>
            <a href="https://www.linkedin.com/in/philipp-stehle-24a125249/" target="_blank" class="  relative flex items-center socHov hover:text-[#1DA1F2]">
                <i class="fa-brands fa-discord"></i>
                <span class="absolute left-5 font-bold text-xs overflow-hidden w-0 mix-blend-lighten drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] ">Discord</span>
            </a>
            <div class="w-[1px] h-20 my-5 bg-secondary mix-blend-exclusion " />
            <div class="vl mix-blend-exclusion">FOLLOW ME</div>
        </div>
    </div>
</div>

<style lang="postcss">
	.socHov:hover {
		transition: 0.3s all;
	}
	.socHov:hover > i {
		transition: 0.3s all;
	}
	.socHov:hover > span {
		width: 200px;
		transition: 0.6s width;
	}
	.vl {
		writing-mode: vertical-rl;
		text-orientation: mixed;
		font-weight: 800;
		font-size: 13px;
		letter-spacing: 2px;
	}
</style>
