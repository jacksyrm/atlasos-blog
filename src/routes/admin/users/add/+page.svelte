<script lang="ts">
	export let form: any;
</script>

<div class="section-nav">
	<div class="section-header">
		<h1>Create a user</h1>
		<p>Create a user for the blog website.</p>
	</div>
</div>
<div class="add-article-form">
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

	<form class="article-add-form" method="post">
		<div class="row">
			<div class="md12">
				<label for="">Email</label>
				<input type="email" name="email" id="email" />
			</div>
			<div class="md6">
				<label for="">Name</label>
				<input type="text" name="name" id="name" />
			</div>
			<div class="md6">
				<label for="">Password</label>
				<input type="password" name="password" id="password" />
			</div>
		</div>
		<button type="submit" class="submit-btn">Submit</button>
	</form>
</div>
