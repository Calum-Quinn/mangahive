<script>
    let firstname = '';
    let surname = '';
    let username = '';
    let password = '';
</script>

<div class="centered">
    Enregistrement
    <form method="POST">
        <label>
            Prénom:
            <input
                name="firstname"
                bind:value={firstname} required
            />
        </label>
        <label>
            Nom de famille:
            <input
                name="surname"
                bind:value={surname} required
            />
        </label>
        <label>
            Nom d'utilisateur:
            <input
                name="username"
                bind:value={username} required
            />
        </label>
        <label>
            Mot de passe:
            <input
                name="password"
                bind:value={password} required
            />
        </label>
        <button type="submit">Valider</button>
    </form>
</div>
