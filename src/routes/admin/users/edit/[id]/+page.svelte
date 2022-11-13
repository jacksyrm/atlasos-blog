<script lang="ts">
	export let form: any;
	export let data: any;

	let user = data.user;
</script>

<div class="section-nav">
	<div class="section-header">
		<h1>Edit article</h1>
		<p>You're editing <span class="current-editing">{user.name}</span>'s information.</p>
	</div>
</div>
<div class="add-user-form">
	{#if form}
		<div class="alert warning">
			Please correct the following errors:
			<ul>
				{#each form.error as error}
					<li>{error}</li>
				{/each}
			</ul>
		</div>
	{/if}

	<form class="user-add-form" method="post">
		<div class="row">
			<div class="md12">
				<label for="">Email</label>
				<input type="email" name="email" id="email" value={user.email} />
			</div>
			<div class="md6">
				<label for="">Name</label>
				<input type="text" name="name" id="name" value={user.name} />
			</div>
			<div class="md6">
				<label for="">Password</label>
				<input type="password" name="password" id="password" />
			</div>
		</div>
		<button type="submit" class="submit-btn">Submit</button>
	</form>
</div>
