<script>
    import logofull from "$lib/assets/logos/logo_full.svg"   
</script>


<footer class="bg-secondary w-full h-[200px] flex flex-col justify-center items-center gap-3 mt-[35px] relative">
    <div class="left-0 top-[calc(0px-100px)] !absolute !z-50 curved-corner-bottomleft"></div>
    <img class="w-[200px]" src={logofull} alt="">
    <p class="text-xs uppercase font-semibold">Copyright  © 2022 -2024 Philstack. All rights reserved</p>
    <div class="flex gap-2">
        <button class="bg-primary rounded-full  w-6 h-6 flex justify-center items-center hover:bg-secondary transition-all group">
            <i class="fa-brands fa-threads text-secondary text-xs group-hover:text-primary transition-all"></i>
        </button>
        <button class="bg-primary rounded-full  w-6 h-6 flex justify-center items-center hover:bg-secondary transition-all group">
            <i class="fa-brands fa-x-twitter text-secondary text-xs group-hover:text-primary transition-all"></i>
        </button>
        <button class="bg-primary rounded-full  w-6 h-6 flex justify-center items-center hover:bg-secondary transition-all group">
            <i class="fa-brands fa-instagram text-secondary text-xs group-hover:text-primary transition-all"></i>
        </button>
        <button class="bg-primary rounded-full  w-6 h-6 flex justify-center items-center hover:bg-secondary transition-all group">
            <i class="fa-brands fa-linkedin-in text-secondary text-xs group-hover:text-primary transition-all"></i>
        </button>
        <button class="bg-primary rounded-full  w-6 h-6 flex justify-center items-center hover:bg-secondary transition-all group">
            <i class="fa-brands fa-discord text-secondary text-xs group-hover:text-primary transition-all"></i>
        </button>
    </div>
</footer>