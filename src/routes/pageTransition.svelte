<script>
//   import { fly } from 'svelte/transition';
  import { fade, fly } from 'svelte/transition';
</script>
  
<div
  in:fly="{{ y: 200, duration: 700 }}" 
  out:fly="{{ y: 200, duration: 700 }}" 
    >
    <slot/>
</div>
