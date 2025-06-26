<script>
	import '../app.css';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<div class="app">
	<main>
		<!-- Navigation -->
		<nav class="w-full bg-gray-900">
			<div class="max-w-7xl mx-auto flex justify-between items-center px-10 py-4">
				<a href="{base}/" class="text-3xl font-bold text-gray-400">Manga Hive</a>
				<ul class="hidden md:flex gap-6 text-gray-600">
					<li><a href="{base}/" class="hover:underline">Accueil</a></li>
					<li><a href="{base}/about" class="hover:underline">A propos</a></li>
					<li><a href="{base}/contact" class="hover:underline">Contact</a></li>
					<li><a href="{base}/faq" class="hover:underline">FAQ</a></li>
				</ul>
			</div>
		</nav>

		{@render children()}
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
