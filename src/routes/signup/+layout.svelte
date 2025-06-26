<script>
	let { children } = $props();
</script>

<div class="app">
	<main>
		{@render children()}
	</main>
</div>

<style>
    :global(body) {
        margin: 0;
        font-family: system-ui, sans-serif;
        background: #f5f7fa;
        color: #333;
    }

    .signup-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 1rem;
        background: #f5f7fa;
    }

    h1 {
        margin-bottom: 1rem;
        color: #2c3e50;
        font-size: 1.8rem;
        text-align: center;
    }

    .form-card {
        display: flex;
        flex-direction: column;
        background: white;
        padding: 2rem;
        border-radius: 0.75rem;
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        max-width: 400px;
        width: 100%;
        box-sizing: border-box;
        gap: 1rem;
    }

    label {
        display: flex;
        flex-direction: column;
        font-weight: 500;
    }

	input {
        margin-top: 0.25rem;
        padding: 0.5rem 0.75rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        font-size: 1rem;
        transition: border-color 0.2s;
    }

    input:focus {
        border-color: #0070f3;
        outline: none;
    }

    button {
        margin-top: 1rem;
        padding: 0.75rem;
        background-color: #0070f3;
        color: white;
        font-weight: bold;
        border: 1px solid #333;
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.2s;
    }

    button:hover {
        background-color: #0059c1;
    }

    .form-grid {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        gap: 1rem;
    }

    .form-row label {
        text-align: right;
        font-weight: 500;
    }

    .form-row input {
        width: 100%;
        padding: 0.5rem 0.75rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        font-size: 1rem;
    }

    .button-row {
        text-align: right;
    }

</style>
