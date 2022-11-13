<script lang="ts">
	export let form: any;
	export let data: any;

	let categories = data.category;
</script>

<div class="section-nav">
	<div class="section-header">
		<h1>Add an article</h1>
		<p>Write an article to be posted.</p>
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
				<label for="">Title</label>
				<input type="text" name="title" id="title" />
			</div>
			<div class="md6">
				<label for="">Category</label>
				<select name="category" id="category">
					{#each categories as category}
						<option value={category.id}>{category.name}</option>
					{/each}
				</select>
			</div>
			<div class="md6">
				<label for="">Slug</label>
				<input type="text" name="slug" id="slug" />
			</div>
			<div class="md12">
				<label for="">Thumbnail (imgur)</label>
				<input type="text" name="thumbnail" id="thumbnail" />
				<label for="">Content</label>
				<textarea name="content" id="content" cols="30" rows="10" />

				<input type="checkbox" name="published" id="published" />
				<label class="published" for="">Published</label>

				<button type="submit" class="submit-btn">Submit</button>
			</div>
		</div>
	</form>
</div>
