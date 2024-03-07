<nav class="flex justify-center items-center flex-col w-full h-screen">
    <ul class="divide-y-2 w-full divide-[#383838]">
        <li class="w-full stack ">
            <div class="container h-full active"></div>
            <a class="px-[20%] text-[70px] uppercase font-bold transition-all duration-[2000] z-10 relative" href="">01. Home</a>
        </li>
        <li class="w-full stack h-fit">
            <div class="container h-full"></div>
            <a class="px-[20%] text-[70px] uppercase font-bold transition-all duration-[2000] z-10 relative" href="">Blog</a>
        </li>
        <li class="w-full stack ">
            <div class="container h-full"></div>
            <a class="px-[20%] text-[70px] uppercase font-bold transition-all duration-[2000] z-10 relative" href="">Projects</a>
        </li>
        <li class="w-full stack ">
            <div class="container h-full"></div>
            <a class="px-[20%] text-[70px] uppercase font-bold transition-all duration-[2000] z-10 relative" href="">Resume</a>
        </li>
    </ul>
</nav> 

<style>
.active {
    background: rgb(255, 174, 0);
}
.container {
    
    position: relative;
    overflow: hidden;
    animation-duration: 2s;
    
}
.container::after {
    content: "";
    position: absolute;
    bottom: 50%;
    left: 0%;
    width: 100%;
    height: 0%;
    background: rgb(255, 174, 0);
    transition: all 0.3s ease;
    z-index: -1;
}

.container::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0%;
    width: 100%;
    height: 0%;
    background: rgb(255, 174, 0);
    transition: all 0.3s ease;
    z-index: -1;
}

li:hover  > .container::after {
    height: 100%;
}
li:hover > .container::before {
    height: 100%;
}

  </style>