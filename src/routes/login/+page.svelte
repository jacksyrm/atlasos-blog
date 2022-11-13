<script lang="ts">
	export let form: any;
</script>

<div class="login-bg">
	<div class="login-header">
		<h1>Login</h1>
		<p>Please login to access the admin panel.</p>
	</div>
	<div class="login-form">
		{#if form}
			<div class="login-alert">
				<p>Please correct the following errors:</p>
				<ul>
					{#each form.error as error}
						<li>{error}</li>
					{/each}
				</ul>
			</div>
		{/if}
		<form method="post">
			<div class="login-content-wrapper">
				<div class="input-boxes">
					<label for="email">Email</label>
					<input type="email" name="email" id="email" />
					<label for="password">Password</label>
					<input type="password" name="password" id="password" />
				</div>
			</div>
			<button type="submit" class="submit-btn">Log in</button>
		</form>
	</div>
</div>
