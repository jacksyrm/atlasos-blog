<script lang="ts">
	import Logomark from "$lib/images/logomark.svg";
	import { page } from "$app/stores";

	export let name: string;
</script>

<div class="admin-layout">
	<div class="admin-navbar">
		<a href="/admin">
			<img src={Logomark} alt="" />
		</a>
		<a href="/">Exit admin panel -></a>
	</div>
	<div class="admin-column">
		<div class="user-greeting">
			<span>👋 {name}</span>
		</div>
		<a class="column-item" class:active={$page.url.pathname == "/admin"} href="/admin">
			<i class="fa-solid fa-house" />
			<p>Home</p>
		</a>
		<a class="column-item" class:active={$page.url.pathname == "/admin/articles"} href="/admin/articles">
			<i class="fa-solid fa-file-pen" />
			<p>Articles</p>
		</a>
		<a class="column-item" class:active={$page.url.pathname == "/admin/users"} href="/admin/users">
			<i class="fa-solid fa-user" />
			<p>Users</p>
		</a>
	</div>
</div>
