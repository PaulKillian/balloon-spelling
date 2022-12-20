<script>
  import { handleClick, wrongLetters } from "../handleClick.svelte";
  import PageTransition from "../pageTransition.svelte";

  let letters = {
    r:'c', h: 'i', e: 'c', l: 'i', d: 'c'
  }
  let word = 'red'
  let group = [
    {letter: 'r', distance: 100}, 
    {letter: 'd', distance: -100}
  ]
</script>

<PageTransition>
  <section id={'section'}>
    <canvas id="my-canvas"></canvas>
    <div id={'buttonDiv'}>
      <div>
        {#each Object.entries(letters) as [letter, correct]}
          <button on:click={() => handleClick(event, word, group)}
            id={letter}
            class={correct}
            >{letter}
          </button>
        {/each}
      </div>
      <h1>How do you spell the word, Red?</h1>
      <a href="/blue">Next Question</a>
    </div>
  </section>
</PageTransition>

<style>
  section {
    background-image: url('$lib/images/bg6.jpeg');
	}

	button {
		font-family: 'Balloon', sans-serif;
    font-size: 300px;
		color: #EF233C;
		margin: 5px;
		cursor: pointer;
	}

  a {
    color: white;
  }
  h1 {
    font-size: 30px;
    color: white;
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