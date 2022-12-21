<script>
//   import { fly } from 'svelte/transition';
  import { fade, fly } from 'svelte/transition';
</script>
  
<div
  in:fly="{{ y: 0, duration: 700, delay 700}}" 
  out:fly="{{ y: 0, duration: 700 }}" 
    >
    <slot/>
</div>
