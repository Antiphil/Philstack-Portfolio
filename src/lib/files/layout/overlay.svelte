<script>
    import logo from "$lib/assets/logos/logo.svg"
</script>

<div class="flex justify-between fixed w-[calc(100%-3px)] px-3 h-[calc(100vh-12px)] z-50">
    <div class="pt-3 flex flex-col justify-between items-center h-full">
        <a href="#">
            <img class="w-[50px] h-[50px]" src={logo} alt="">
        </a>
        <div class="hidden sm:flex pointer-events-auto flex-col items-center gap-2 max-w-5">
            <a href="https://twitter.com/MisterNamazu" target="_blank" class="drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] relative flex items-center socHov hover:text-[#1DA1F2]">
                <i class="fa-brands fa-x-twitter"></i>
                <span class="absolute left-5 font-bold text-xs overflow-hidden w-0 mix-blend-normal">X</span>
            </a>
            <a href="https://www.instagram.com/mrnamazu/" target="_blank" class="drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] relative flex items-center socHov hover:text-[#FCAF45]">
                <i class="fa-brands fa-instagram"></i>
                <span class="absolute left-5 font-bold text-xs overflow-hidden w-0 mix-blend-exclusion">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/in/philipp-stehle-24a125249/" target="_blank" class="drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] relative flex items-center socHov hover:text-[#0072b1]">
                <i class="fa-brands fa-linkedin"></i>
                <span class="absolute left-5 font-bold text-xs overflow-hidden w-0 mix-blend-lighten">LinkedIn</span>
            </a>
            <div class="w-[1px] h-20 my-5 bg-white mix-blend-exclusion drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]" />
            <div class="vl mix-blend-exclusion drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">FOLLOW ME</div>
        </div>
    </div>
    <nav class="pt-3 pr-4 h-[60px] flex items-center">
        <ul class="flex gap-5">
            <li class="uppercase font-semibold text-sm"><a href="#">Home</a></li>
            <li class="uppercase font-semibold text-sm"><a href="#">Projects</a></li>
            <li class="uppercase font-semibold text-sm"><a href="#">Blog</a></li>
            <li class="uppercase font-semibold text-sm"><a href="#">Contact</a></li>
        </ul>
    </nav>
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
		transition: 0.8s all;
	}
	.vl {
		writing-mode: vertical-rl;
		text-orientation: mixed;
		font-weight: 600;
		font-size: 12px;
		letter-spacing: 2px;
	}
</style>
