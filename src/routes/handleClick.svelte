<script context="module">
    import gsap from 'gsap'
    import { groupLetters } from "./groupLetters.svelte";

    /**
	 * @type {any[]}
	 */
     export const pickedLetters = []

    /**
	 * @param {{target: {innerText: any;};}} event
	 * @param {string} word
	 * @param {{ letter: string; distance: number; }[] | undefined} [group]
	 */
    export function handleClick(event, word, group) {
      console.log(word, pickedLetters)
        var tl = gsap.timeline();
        if (event.target.innerText) {
           tl.to(`.${event.target.innerText}`, {
           rotationY: 27, y: -300, duration: .5,
           onComplete() {
            pickedLetters.push(event.target.innerText)
            let string = pickedLetters.toString()
            string=string.replaceAll(',','');
            string === word && groupLetters(group)
        } 
      })
    }
}
</script>