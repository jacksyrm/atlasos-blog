<script lang="ts">
	export let data;

	let posts = data.posts;
</script>

<h1 class="header-title">Blog</h1>
<div class="row post-list">
	{#each posts as post}
		<div class="md4">
			<a href="/articles/{post.slug}" class="blog-item-img">
				<img src={post.thumbnail} alt={post.title} />
			</a>
			<a href="/category/{post.category.name}">
				<span class="post-category-tag">{post.category.name}</span>
			</a>
			<a href="/articles/{post.slug}">
				<h2>{post.title}</h2>
			</a>
		</div>
	{/each}
</div>
