<script lang="ts">
    import laser from '$lib/assets/Thumbnails/industrial-laser-cutting-machine-about-1.jpg'
    import git from '$lib/assets/Thumbnails/Git.png'
    import tauri from '$lib/assets/Thumbnails/tauri.png'
    import frage from '$lib/assets/Thumbnails/frage.jpg'
	import Blogitem from './blogitem.svelte';
    import sec2 from '$lib/assets/SectionSplitter/split_bot_y.svg';
</script>

<section class="py-6 sm:py-32 bg-[#F2CD19]">
    <div class="mx-5 lg:mx-32 justify-center">
        <h1 class="text-3xl font-bold uppercase mb-3 text-[#101011]"><span class="outlinex">01.</span> Latest Posts</h1>

        <div class="max-w-screen-xl p-5 mx-auto bg-[#101011] rounded-xl">
            <div class="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2 ">
                <Blogitem img={laser} day="21" month="Feb" category="Mechanical Stuff" text="Erfahrungsbericht: Einstieg ins Laser Cutting Universum"/>
                <Blogitem img={git} day="22" month="Feb" category="Version Control" text="Git & Versionskontrolle - Grundlagen"/>
                <Blogitem img={tauri} day="23" month="Feb" category="Coding" text="Einstieg in das Tauri Framework"/>
                <Blogitem img={frage} day="24" month="Feb" category="Mechanical Stuff" text="Frage"/>
            </div>
        </div>
        <div class="w-full flex justify-content mt-5">
            <button class="rounded-xl bg-[#101011] px-3 py-2 mx-auto uppercase font-bold text-sm">To Blog Overview</button>
        </div>
</section>
<img class="imgtest" src={sec2} alt="">
<style>
.outlinex {
  font-weight: 900;
  font-size: 20px;
  color: #fff;
  -webkit-text-stroke-color: #101011;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
}

.lined{
    border:solid 7px #101011;
    box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
      border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
}

</style>