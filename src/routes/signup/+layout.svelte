<script>
	let { children } = $props();
</script>

<div class="app">
	<main>
		{@render children()}
	</main>
</div>

<style>
    .centered {
        max-width: 20em;
        margin: 0 auto;
    }

    label {
        width: 100%;
    }

	input {
        flex: 1;
    }
</style>
