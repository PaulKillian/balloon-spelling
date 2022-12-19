<script>
  import { fly } from 'svelte/transition';
</script>
  
<div
    in:fly="{{ y: 650, duration: 1050, delay: 700 }}"
    out:fly="{{ y: -950, duration: 1050 }}" 
    >
    <slot/>
</div>