<script>
  import { handleClick } from "../handleClick.svelte";
  import gsap from 'gsap'
	import PageTransition from "../pageTransition.svelte";

  let letters = {s: 'c', f: 'i', e: 'c', p: 'c', n: 'i', i: 'c', a: 'c'}
  let word =  'sepia'
  let group = [
    {letter: 'b', distance: 100}, 
    {letter: 'u', distance: -100},
    {letter: 'e', distance: -110}
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
    <h1>How do you spell the word, Sepia?</h1>
    <a href="/peach">Next Question</a>
  </div>
</section>
</PageTransition>



<style>
  xsection {
    background-image: url('$lib/images/bg7.jpeg');
	}

	button {
		font-family: 'Balloon', sans-serif;
    font-size: 300px;
		color: #CC7B47;
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