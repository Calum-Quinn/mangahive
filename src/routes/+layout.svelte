<script>
	import '../app.css';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<div class="app min-h-screen flex flex-col">
	<main class="flex-1 flex flex-col">
		<!-- Navigation -->
		<nav class="w-full bg-gray-900">
			<div class="max-w-7xl mx-auto flex justify-between items-center px-10 py-4">
				<div>
					<a href="{base}/" class="main-title font-bold text-3xl text-gray-400">Manga Hive</a>
				</div>
				<ul class="hidden md:flex gap-6 text-gray-600">
					<li><a href="{base}/" class="hover:underline">Accueil</a></li>
					<li><a href="{base}/about" class="hover:underline">A propos</a></li>
					<li><a href="{base}/contact" class="hover:underline">Contact</a></li>
					<li><a href="{base}/faq" class="hover:underline">FAQ</a></li>
				</ul>
			</div>
		</nav>

		<!-- Content -->
		{@render children()}

		<!-- Spacer -->
		<div class="flex-grow"></div>

		<!-- Footer -->
		<aside class="bg-blue-600 text-white py-7 text-center">
			<div class="max-w-3xl mx-auto px-10">
				<p class="text-white/70">Seulement une petite attente avant le reste...</p>
			</div>
		</aside>
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

	.main-title:hover {
		text-decoration: none;
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
