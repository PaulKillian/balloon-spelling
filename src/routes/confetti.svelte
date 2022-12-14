<script context="module">
    import ConfettiGenerator from "confetti-js";

    export let isConfettiFalling = false
    export function confetti() {
        var confettiSettings = { target: 'my-canvas' };
        // @ts-ignore
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    }
</script>