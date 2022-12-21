<script>
  import { fly } from 'svelte/transition';
</script>
  
<div
    in:fly="{{ x: 650, duration: 1050, delay: 700 }}"
    out:fly="{{ x: -1550, duration: 1050 }}" 
    >
    <slot/>
</div>
