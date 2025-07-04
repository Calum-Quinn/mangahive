<script>
  export let data;
  const mangas = data.mangas;
</script>

<section class="flex-grow pt-12 pb-12">
	<div class="max-w-5xl w-full mx-auto px-6">
		<h1 class="text-center text-3xl font-semibold text-gray-800 mb-8">Liste des Mangas</h1>

		<!-- Add Manga Button -->
		<div class="mb-6 text-right">
			<a
				href="/user/new"
				class="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
			>
				+ Ajouter un Manga
			</a>
		</div>

		<!-- Manga List -->
		<div class="bg-white rounded-xl shadow-lg p-6">
			<ul class="divide-y divide-gray-200">
				{#each mangas as manga}
					<li class="py-4">
                        <div class="flex items-center gap-4">
                            <img src={manga.image_url} alt="Manga cover" class="w-24 h-32 object-cover rounded" />
                            <div>
                                <h2 class="text-xl font-bold text-gray-800">{manga.title}</h2>
                                <p class="text-sm text-gray-600">{manga.author}</p>
                                <p class="text-sm text-gray-500">{manga.year}</p>
                            </div>
                        </div>
                    </li>
				{/each}
			</ul>
		</div>
	</div>
</section>
