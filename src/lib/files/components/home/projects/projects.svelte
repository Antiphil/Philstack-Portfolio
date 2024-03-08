<script>
  import ProjectItem from "./projectItem.svelte";


</script>

<section class="relative flex w-full pl-[70px] py-[35px] ">
    <div class="right-0 top-[calc(0px-65px)] !absolute !z-50 curved-corner-bottomright"></div>
    <div class="left-0 top-[calc(0px-35px)] !absolute !z-50 curved-corner-topleft"></div>
    <div class="relative bg-secondary w-full h-full rounded-l-[75px] overflow-hidden p-10 flex flex-col gap-3">
        <ProjectItem title="XIVData" nr="01" categories={["Javascript, PHP, Tailwind, Svelte, Inertia, HTML & CSS"]} img="https://i.imgur.com/kqqHOLo.png"/>
        <ProjectItem title="Landkautz" nr="02" categories={["Shopify, Liquid, Javascript, HTML & CSS"]} img="https://i.imgur.com/kqqHOLo.png" />
        <ProjectItem title="Lukas Kleinecke" nr="03" categories={["Sveltekit, Javascript, Node.js"]} img="https://i.imgur.com/kqqHOLo.png" />
        <ProjectItem title="Triostate" nr="04" categories={["Vue, Typescript, C#"]} img="https://i.imgur.com/kqqHOLo.png" />        
        <ProjectItem title="XIVDB" nr="04" categories={["React, Javascript, SCSS"]} img="https://i.imgur.com/kqqHOLo.png" />        
    </div>
</section>