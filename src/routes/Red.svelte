<script>
    import { handleClick } from "./handleClick.svelte";

    let redLettersPick = ['r', 'w', 'e', 'k', 'd']
    let word = 'red'
    let group = [
      {letter: 'r', distance: 70}, 
      {letter: 'd', distance: -70}
    ]
</script>

<canvas id="my-canvas"></canvas>
<div id={'buttonDiv'}>
  <div>
    {#each redLettersPick as letter}
      <button on:click={() => handleClick(event, word, group)}
        class={letter}
        >{letter}
      </button>
    {/each}
  </div>
  <h1>How do you spell the word, Red?</h1>
</div>
<a href="/blue">Next Question</a>

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