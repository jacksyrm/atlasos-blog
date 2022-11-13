<script lang="ts">
	import { dirty_components } from "svelte/internal";

	export let data;

	let permission = data.permission;
	let users = data.users;
</script>

{#if permission}
	<div class="section-nav">
		<div class="section-header">
			<h1>Users</h1>
			<p>Manage users for the Atlas blog.</p>
		</div>
		<div class="section-items">
			<a href="users/add" class="articles-add-btn">
				<i class="fa-solid fa-plus" />
			</a>
		</div>
	</div>
	<div class="user-list">
		{#each users as user}
			<div class="user">
				<div class="user-id">
					<p>{user.id}</p>
				</div>
				<div class="user-name">
					<h2>{user.name}</h2>
				</div>
				<div class="user-email">
					<p>{user.email}</p>
				</div>
				<div class="user-manage-buttons">
					<a class="button" href="users/edit/{user.id}">
						<i class="fa-solid fa-pencil" />
					</a>
					<a class="button" href="users/delete/{user.id}">
						<i class="fa-solid fa-trash" />
					</a>
				</div>
			</div>
		{/each}
	</div>
{:else}
	<div class="section-header">
		<h1>Users</h1>
		<p>Manage users for the Atlas blog.</p>
	</div>
	<br />
	<div class="alert">
		<p>You don't have permission to edit users</p>
	</div>
{/if}
