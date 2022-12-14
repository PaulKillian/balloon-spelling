<script>
    import { confetti } from "./confetti.svelte";
    import { handleClick, pickedLetters } from "./handleClick.svelte";
    import gsap from 'gsap'

    let redLettersPick = ['r', 'w', 'e', 'k', 'd']

    function groupLetters() {
      gsap.to('.r', {rotationY: 27, x: 70, duration: .5});
      gsap.to('.d', {rotationY: 27, x: -70, duration: .5});
      confetti()
    } 
</script>

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