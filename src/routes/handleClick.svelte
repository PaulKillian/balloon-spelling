<script context="module">
    import gsap from 'gsap'
    
    /**
	 * @type {any[]}
	 */
     export let pickedLetters = []

     /**
	 * @param {{target: {innerText: any;};}} event
	 * @param {string} word
	 */
    export function handleClick(event, word) {
        var tl = gsap.timeline();
        tl.to(`.${event.target.innerText}`, {
        rotationY: 27, y: -300, duration: .5,
        onComplete() {
            pickedLetters.push(event.target.innerText)
            let string = pickedLetters.toString()
            string=string.replaceAll(',','');
            // string === word && groupLetters()
        }
    })
}
</script>