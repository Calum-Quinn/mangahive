<script>
    import { onMount } from 'svelte';

    export let data;
    let userMangas = data.userMangas;

    let showModal = false;

    let selectedSeries = null;
    let selectedVolume = null;
    let photoFile = null;

    let seriesList = [];
    let volumesForSeries = [];

    onMount(async () => {
        // Fetch the list of series
        const res = await fetch('/api/manga/series');
        if (res.ok) {
            seriesList = await res.json();
        } else {
            console.error('Failed to fetch series list');
        }
    });

    $: if (selectedSeries) {
        // Fetch volumes for the selected series
        fetch(`/api/manga/series/${selectedSeries}/volumes`)
            .then(async res => {
                if (res.ok) volumesForSeries = await res.json();
                else volumesForSeries = [];
            });
    } else {
        volumesForSeries = [];
    }

    async function submitForm() {
        const formData = new FormData();
        formData.append('seriesId', selectedSeries);
        formData.append('volumeId', selectedVolume);
        if (photoFile) formData.append('photo', photoFile);

        const res = await fetch('/api/user/manga/new', {
            method: 'POST',
            body: formData
        });

        if (res.ok) {
            userMangas = await res.json();
            showModal = false;
            selectedSeries = null;
            selectedVolume = null;
            photoFile = null;
        } else {
            alert('Erreur lors de l\'ajout du manga');
        }
    }
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
            {#each userMangas as manga}
                <li class="py-4 flex items-center gap-4">
                <img src={manga.user_image_url} alt="Manga cover" class="w-24 h-32 object-cover rounded" />
                <div>
                    <h2 class="text-xl font-bold text-gray-800">{manga.series_title}</h2>
                    <p class="text-sm text-gray-600">Volume {manga.volume_number}</p>
                    <p class="text-sm text-gray-500">{manga.series_author} - {manga.series_year}</p>
                </div>
                </li>
            {/each}
            </ul>
        </div>
	</div>

    {#if showModal}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white rounded-lg p-8 max-w-md w-full relative">
        <h2 class="text-2xl font-semibold mb-6">Ajouter un manga à votre collection</h2>

        <div class="mb-4">
          <label for="series" class="block mb-1 font-medium">Série</label>
          <select id="series" bind:value={selectedSeries} class="w-full border rounded px-3 py-2">
            <option value="" disabled selected>Choisissez une série</option>
            {#each seriesList as series}
              <option value={series.id}>{series.title} ({series.year})</option>
            {/each}
          </select>
        </div>

        <div class="mb-4">
          <label for="volume" class="block mb-1 font-medium">Volume</label>
          <select id="volume" bind:value={selectedVolume} class="w-full border rounded px-3 py-2" disabled={!volumesForSeries.length}>
            <option value="" disabled selected>Choisissez un volume</option>
            {#each volumesForSeries as volume}
              <option value={volume.id}>Volume {volume.volume_number}</option>
            {/each}
          </select>
        </div>

        <div class="mb-6">
          <label for="photo" class="block mb-1 font-medium">Photo de votre exemplaire</label>
          <input
            id="photo"
            type="file"
            accept="image/*"
            on:change={(e) => (photoFile = e.target.files[0])}
            class="w-full"
          />
        </div>

        <div class="flex justify-end gap-4">
          <button
            class="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
            on:click={() => (showModal = false)}
            type="button"
          >
            Annuler
          </button>
          <button
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            on:click={submitForm}
            disabled={!selectedSeries || !selectedVolume}
            type="button"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  {/if}
</section>
