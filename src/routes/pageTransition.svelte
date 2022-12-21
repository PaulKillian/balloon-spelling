<script>
//   import { fly } from 'svelte/transition';
  import { fade, fly } from 'svelte/transition';
</script>
  
<div
<!--     in:fly="{{ x: 650, duration: 1050, delay: 700 }}"
    out:fly="{{ x: -3550, duration: 1050 }}"  -->
  in:fly="{{ y: 200, duration: 700 }}" 
  out:fly="{{ y: 200, duration: 700 }}" 
    >
    <slot/>
</div>
