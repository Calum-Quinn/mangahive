<script>
	let { data } = $props();
</script>

<section class="flex-grow pt-12 pb-12">
	<div class="max-w-2xl w-full mx-auto px-6">
		<div class="bg-white rounded-xl shadow-lg p-6 text-center">
			<h1 class="text-3xl font-semibold text-gray-800 mb-4">
				Bonjour {data.user.username}!
			</h1>

			<a
				href="/user/mangas"
				class="inline-block text-blue-600 hover:underline text-lg font-medium"
			>
				Vos mangas
			</a>
		</div>
	</div>
</section>
