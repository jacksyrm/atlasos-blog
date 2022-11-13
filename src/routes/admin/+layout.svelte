<script lang="ts">
	import "$lib/scss/admin.scss";
	import AdminLayout from "$lib/components/adminlayout.svelte";

	export let data;

	let name = data.username;
</script>

<AdminLayout {name} />
<div class="admin-content">
	<slot />
</div>
