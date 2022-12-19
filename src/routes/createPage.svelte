<script context="module">
  import PageTransition from "./pageTransition.svelte";
</script>

<PageTransition>
  <section id={'section'}>
    <canvas id={'my-canvas'}></canvas>
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
  <h1>{wrongLetters[0]}</h1>
</PageTransition>

<style>
    section {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          width: 100%;
          height: 100vh; 
      /* opacity: 0; */
      }
  
      button {
          font-family: 'Balloon', sans-serif;
      font-size: 300px;
          color: red;
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