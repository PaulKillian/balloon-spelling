<script>
  import { handleClick } from "../handleClick.svelte";
  import gsap from 'gsap'
	import PageTransition from "../pageTransition.svelte";

  let letters = {w: 'c', h: 'c', f: 'i', i: 'c', t: 'c', n: 'i', e: 'c'}
  let word =  'white'
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
    <h1>How do you spell the word, White?</h1>
    <a href="/violet">Next Question</a>
  </div>
</section>
</PageTransition>



<style>
  section {
    background-image: url('$lib/images/bg11.jpg');
	}

	button {
    font-size: 100px;
		color: white;
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
