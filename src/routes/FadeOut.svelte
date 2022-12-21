<script>
  import { fade, fly } from 'svelte/transition';
</script>
  
<div
  in:fade="{{ y: 0, duration: 700 }}" 
  >
  <slot/>
</div>
