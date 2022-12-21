<script>
  import { handleClick } from "../handleClick.svelte";
  import gsap from 'gsap'
  import PageTransition from "../pageTransition.svelte";
  import bgImg from '$lib/images/bg.jpeg';

  // document.body.style.backgroundImage = `url(${bgImg})`;
  let letters = {b: 'c', r: 'i', l: 'c', k: 'i', u: 'c', e: 'c'}
  let word = 'blue'
  let group = [
    {letter: 'b', distance: 100}, 
    {letter: 'u', distance: -100},
    {letter: 'e', distance: -110}
  ]
</script>

<!-- <svelte:head>
  <style>
    body {
      background-color: blue;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  </style>
</svelte:head> -->

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
    <h1>How do you spell the word, Blue?</h1>
    <a href="/orange">Next Question</a>
  </div>
  <!-- <img src={bgImg} /> -->
</section>
</PageTransition>



<style>
  section {
    background-image: url('$lib/images/bg.jpeg');
	}

  button {
    font-family: 'Bungee Shade', cursive;
    font-size: 300px;
    color: blue;
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
