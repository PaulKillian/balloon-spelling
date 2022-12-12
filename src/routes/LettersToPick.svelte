<script>
  import ConfettiGenerator from "confetti-js";
  let redLettersPick = ['r', 'w', 'e', 'k', 'd']
  /**
	 * @type {any[]}
	 */
  export let pickedLetters = []
  export let confetti = false
  import gsap from 'gsap'
  /**
	 * @param {any} event
	 */
  function handleClick(event) {
    var tl = gsap.timeline();
    tl.to(`.${event.target.innerText}`, {
      rotationY: 27, y: -300, duration: .5,
      onComplete() {
        pickedLetters.push(event.target.innerText)
        let string = pickedLetters.toString()
        string=string.replaceAll(',','');
        string === 'red' && groupLetters()
      }
    })

    function groupLetters() {
      gsap.to('.r', {rotationY: 27, x: 70, duration: .5});
      gsap.to('.d', {rotationY: 27, x: -70, duration: .5});
      var confettiSettings = { target: 'my-canvas' };
      // @ts-ignore
      var confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
    } 
  }

   
</script>

<svelte:head>
	<title>Balloon Spelling</title>
	<meta name="description" content="Spelling with Balloons" />
</svelte:head>

<canvas id="my-canvas"></canvas>
<div id={'buttonDiv'}>
  <div>
    {#each redLettersPick as letter}
      <button on:click={handleClick}
        class={letter}
        >{letter}
      </button>
    {/each}
  </div>
  <h1>How do you spell the word, Red?</h1>
</div>

<style>
	button {
		font-family: 'Balloon', sans-serif;
    font-size: 200px;
		color: brown;
		margin: 5px;
		cursor: pointer;
	}

  h1 {
    font-size: 30px;
  }

	.red {
		color: red;
	}
	.purple {
		color: purple;
	}
	.blue {
		color: blue;
	}

  canvas {
    position: relative;
    z-index: 1;
    pointer-events: none;
  }

  #buttonDiv {
    position: absolute;
    display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
  }
</style>
