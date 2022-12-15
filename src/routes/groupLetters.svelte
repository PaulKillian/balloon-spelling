<script context="module">
    import gsap from 'gsap'
    import { confetti } from './confetti.svelte';

    /**
	 * @param {any[] | undefined} [group]
	 */
    export function groupLetters(group) {
      console.log(group)
      group.forEach((element) => {
        gsap.to(`.${element.letter}`, 
          {rotationY: 27, x: element.distance, duration: .5})
      });  
      confetti()
    }
</script>