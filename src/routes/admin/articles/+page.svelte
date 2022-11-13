<script lang="ts">
	export let data;

	let posts = data.posts;
</script>

<div class="section-nav">
	<div class="section-header">
		<h1>Articles</h1>
		<p>Manage articles for the Atlas blog.</p>
	</div>
	<div class="section-items">
		<a href="articles/add" class="articles-add-btn">
			<i class="fa-solid fa-plus" />
		</a>
	</div>
</div>
<div class="article-list">
	{#if !posts.length}
		<p>It looks like there aren't any articles to display. Create the first one!</p>
	{/if}

	{#each posts as post}
		<div class="article active-{post.published}">
			<div class="article-id">
				<p>{post.id}</p>
			</div>
			<div class="article-title">
				<h2>{post.title}</h2>
			</div>
			<div class="article-author">
				<p>{post.author.name}</p>
			</div>
			<div class="article-manage-buttons">
				<a class="button" href="articles/edit/{post.slug}">
					<i class="fa-solid fa-pencil" />
				</a>
				<a class="button" href="articles/delete/{post.slug}">
					<i class="fa-solid fa-trash" />
				</a>
				<a class="button" href="/articles/{post.slug}">
					<i class="fa-solid fa-eye" />
				</a>
			</div>
		</div>
	{/each}
</div>
