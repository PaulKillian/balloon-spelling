<script>
  import { handleClick } from "../handleClick.svelte";
  import gsap from 'gsap'
	import PageTransition from "../pageTransition.svelte";

  let letters = {p: 'c', r: 'i', e: 'c', a: 'c', c: 'c', f: 'i', h: 'c'}
  let word = 'peach'
  let group = [
    // {letter: 'o', distance: 70}, 
    {letter: 'o', distance: 115},
    {letter: 'r', distance: 105},
    {letter: 'a', distance: 5},
    {letter: 'g', distance: -95},
    {letter: 'e', distance: -105}
  ]
</script>

<PageTransition>
  <section>
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
      <h1>How do you spell the word, Peach?</h1>
    </div>
  </section>
</PageTransition>

<style>
  section {
    background-image: url('$lib/images/bg4.jpeg');
	}

	button {
		font-family: 'Balloon', sans-serif;
    font-size: 300px;
		color: peachpuff;
		margin: 5px;
		cursor: pointer;
	}

  h1 {
    font-size: 30px;
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