<script context="module">
    import gsap from 'gsap'
    import { confetti } from './confetti.svelte';

    /**
	 * @type {any[]}
	 */
     export let pickedLetters = []
     export let wrongLetters = []
     let letter = ''
     let incorrect = ''
    /**
	 * @param {string} word
	 * @param {{letter: string;distance: number;}[] | undefined} [group]
	 * @param {Event | undefined} event
	 */
    export function handleClick(event, word, group) {
      letter = event.target.id
      incorrect = (event?.target.className.substring(0, 1));
      let tl = gsap.timeline();

      // if (wrongLetters.length > 0) {
      //   console.log('try again')
      //   tl.to(`#${letter}`, {scale: 3 -3, opacity: 0, duration: .5})
      // }
      if (incorrect === 'i') {
        wrongLetters.push(letter)
        wrongLetters = wrongLetters
        tl.to(`#${letter}`, {scale: 3 -3, opacity: 0, duration: .5})
      } else {
        pickedLetters.push(letter)
        let string = pickedLetters.toString()
        string=string.replaceAll(',','');
        tl.to(`#${letter}`, {
        rotationY: 27, y: -250, duration: .5,
        onComplete() {
          string === word && group.forEach((element) => {
            console.log(element)
            gsap.to(`#${element.letter}`, 
            {rotationY: 27, x: element.distance, duration: .5})
            confetti()
            pickedLetters = []
          });  
        }
      })}
    }
</script>
