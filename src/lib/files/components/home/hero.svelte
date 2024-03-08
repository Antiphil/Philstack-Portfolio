<script>
    import logo from "$lib/assets/logos/logo.svg"   
    import logofull from "$lib/assets/logos/logo_full.svg"   
    import hero from "$lib/assets/hero.png"   
</script>


<section class="flex w-full h-screen pl-[70px] pb-[35px]">
    <div class="relative bg-secondary w-full h-full rounded-bl-[75px] overflow-hidden">
        <img class="absolute w-full z-0 h-full object-cover" src={hero} alt="hero background">
        <div class="relative flex items-end justify-between h-full flex-col z-10 p-10">
            <img class="w-72" src={logofull} alt="">
            <div class="flex flex-col text-[50px] font-extrabold uppercase text-right">
                <span>A <span class="outline-text">Designer </span>is an</span>
                <span>emerging <span class="outline-text">Symbiosis </span>of</span>
                <span><span class="outline-text">artist</span>, <span class="outline-text">coder</span> and <span class="outline-text">writer</span></span>
            </div>
        </div>
    </div>
</section>