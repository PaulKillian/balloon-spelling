<script>
  import { handleClick } from "../handleClick.svelte";
  import gsap from 'gsap'
	import PageTransition from "../pageTransition.svelte";

  let letters = {o: 'c', r: 'c', d: 'i', a: 'c', n: 'c', f: 'i', g: 'c', e: 'c'}
  let word = 'orange'
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
      <h1>How do you spell the word, Orange?</h1>
      <a href="/pink">Next Question</a>
    </div>
  </section>
</PageTransition>

<style>
  section {
    background-image: url('$lib/images/bg3.jpeg');
	}

	button {
    font-size: 100px;
		color: #FF9F1C;
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
