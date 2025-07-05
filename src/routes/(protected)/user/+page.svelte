<script>
	let { data } = $props();
</script>

<section class="flex-grow pt-12 pb-12">
	<div class="max-w-2xl w-full mx-auto px-6">
		<div class="bg-white rounded-xl shadow-lg p-6 text-center">
			<h1 class="text-3xl font-semibold text-gray-800 mb-4">
				Bonjour {data.user.username}!
			</h1>

			<div>
				<a href="/user/mangas" class="inline-block text-blue-600 hover:underline text-lg font-medium">
					Vos mangas
				</a>
			</div>

			<div>
				{#if data.user.admin}
					<a href="/new_admin" class="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
						Ajouter un manga
					</a>
				{/if}
			</div>
		</div>
	</div>
</section>
