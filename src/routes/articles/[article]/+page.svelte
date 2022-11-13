<script lang="ts">
	export let data;

	let post = data.post;
</script>

<div class="blog-post">
	<img class="blog-img" src={post.thumbnail} alt="" />
	<span>{post.category.name}</span>
	<h1>{post.title}</h1>
	<p>{post.content}</p>
</div>
