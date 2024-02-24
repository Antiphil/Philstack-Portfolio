<script>
  export let count;
  export let title;
</script>

<h1 class="text-3xl font-bold uppercase mb-3 text-primary-800">
  <span class="outlinex">{count}.</span> {title}
</h1>

<style>
.outlinex {
  font-weight: 900;
  font-size: 20px;
  color: #fff;
  -webkit-text-stroke-color: #F2CD19;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
}
</style>