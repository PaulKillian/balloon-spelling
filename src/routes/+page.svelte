<script>
	import LettersToPick from "./LettersToPick.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<LettersToPick />
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100vh; 
	}
</style>
