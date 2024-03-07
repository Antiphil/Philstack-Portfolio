<script>
  import Footer from "$lib/files/layout/footer.svelte";
  import Noise from "$lib/files/layout/noise.svelte";
  import Overlay from "$lib/files/layout/overlay.svelte";
  import "../app.css";
  import logo2 from "$lib/assets/logos/logo2.svg"

  /**
     * @type {any}
     */
  let scrollY
  $:distance = scrollY/5;
  
  $:console.log(scrollY)
</script>

<svelte:window bind:scrollY={scrollY} />

<Noise />
<div class="">
    <img class="MotionObj" src={logo2} style={`offset-distance:${distance}%`} alt="">
    <svg width="621" height="577" viewBox="0 0 621 577" class="motionPath" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.00001 0V470C-0.333323 505.5 19.1 576.5 107.5 576.5C195.9 576.5 486.667 576.5 621 576.5" stroke="red"/>
      </svg>
    
    <Overlay />
    <slot />
    <Footer />
</div>
<style>
  .MotionObj {
    offset-path: path('M1.00001 0V470C-0.333323 505.5 19.1 576.5 107.5 576.5C195.9 576.5 486.667 576.5 621 576.5');
    width: 75px;
    height: 75px;
    position: absolute;
    z-index: 100;
    left: 35px;
    
  }
  .motionPath {
    position: absolute;
    z-index: 100;
    left: 35px
  }
  @keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
</style>