<script>
    import mainHero from "$lib/assets/heroMain.png"
    import one from "$lib/assets/1.png"
    import two from "$lib/assets/2.png"
</script>

<div class="relative h-screen w-full">
    <img class="absolute h-screen z-10" src={mainHero} alt="">
    <div class="absolute z-20 w-[380px] h-[300px] right-[100px] bottom-[150px]">
        <div class="absolute top-[200px] left-[180px] z-20 flex justify-center items-center">
            <div class="absolute w-[100px] h-1 bg-red-700"></div>
            <div class="absolute h-[100px] w-1 bg-red-700"></div>
        </div>
        <img class="absolute w-[200px] h-[200px]" src={one} alt="">
        <img class="absolute right-0 bottom-0 w-[200px] h-[200px]" src={two} alt="">
    </div>
    <p class="z-0 right-[-550px] top-20 absolute text-white/10 text-[250px] font-bold uppercase">Philstack</p>
</div>