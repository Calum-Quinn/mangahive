<script>
    let firstname = '';
    let surname = '';
    let username = '';
    let password = '';
</script>

<section class="pt-12 pb-8" id="info">
    <div class="signup-wrapper max-w-7xl mx-auto px-10 text-center">
        <h1>Enregistrement</h1>
        <form method="POST" class="form-card space-y-4 max-w-md w-full mx-auto">
            <div class="grid grid-cols-[150px_1fr] items-center gap-2">
                <label for="firstname" class="font-medium text-left">Prénom</label>
                <input id="firstname" name="firstname" type="text" bind:value={firstname} required
                    class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div class="grid grid-cols-[150px_1fr] items-center gap-2">
                <label for="surname" class="font-medium text-left">Nom de famille</label>
                <input id="surname" name="surname" type="text" bind:value={surname} required
                    class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div class="grid grid-cols-[150px_1fr] items-center gap-2">
                <label for="username" class="font-medium text-left">Nom d'utilisateur</label>
                <input id="username" name="username" type="text" bind:value={username} required
                    class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div class="grid grid-cols-[150px_1fr] items-center gap-2">
                <label for="password" class="font-medium text-left">Mot de passe</label>
                <input id="password" name="password" type="password" bind:value={password} required
                    class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div class="text-right">
                <button type="submit"
                    class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                    Valider
                </button>
            </div>
        </form>
    </div>
</section>


