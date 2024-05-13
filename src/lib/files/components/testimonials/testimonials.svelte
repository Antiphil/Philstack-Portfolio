<script>
	import Title from "$lib/files/modules/title.svelte";

</script>
<section class="">
    <div class="max-w-6xl px-6 py-10 mx-auto">
        <Title title="What my clients are saying"/>
        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full bg-primary -z-10 md:h-96 rounded-2xl"></div>
            
            <div class="w-full p-6 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://le-cdn.website-editor.net/s/62a4b676400345d6b859ef64526dd05a/dms3rep/multi/opt/BESCHRIFTUNGSTEAM_Karina_Hartung_1219-585e8ef2-2880w.jpg?Expires=1717332504&Signature=GYGs-wUuAI3SywJgSxihhgIK~q4QPqfTJo~4I5xtGu2FNFbuUizh2i8wMrjcQ8OOHE98iT74JwxFgb7g5-AS10S-lqHHnQkOc70L8QJGRiFRnJOfFzN5ORHp-AI2lNi0ISjxxU3TUg8G~mPvnbHGD3QreuhfF0vKBvND6SnbE7CU-9zr66aL2heW4cPBU1Ae8xonROaXtEssWbbNf~Tzy4ffWGm2~bljb66FkMrY5b~k9FzeWRhcWld17ElQ2~759WS4vnHx313yoVFqUgJmQdgkCQorpNI7w3dKZkWv6JC0LV6uUMJ0IqB9uaJn4QN8Tw75H7IQXglGrC8Pyleepg__&Key-Pair-Id=K2NXBXLF010TJW" alt="client photo" />
                
                <div class="mt-2 md:mx-6">
                    <div>
                        <p class="text-xl font-bold  text-secondary">Karina Hartung</p>
                        <p class="text-secondary">Head of Design at "Beschriftungsteam"</p>
                    </div>

                    <p class="mt-4 text-lg leading-relaxed text-secondary md:text-xl"> “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda”.</p>
                    
                    <div class="flex items-center justify-between mt-6 md:justify-start">
                        <button title="left arrow" class="p-2 text-secondary hover:text-primary transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button title="right arrow" class="p-2 text-secondary hover:text-primary transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</section>
