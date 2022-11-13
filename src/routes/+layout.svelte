<script lang="ts">
	import '$lib/scss/style.scss';
	import '$lib/scss/grid.scss';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { page } from '$app/stores';
</script>

{#if $page.url.pathname.startsWith('/admin')}
	<slot />
{:else}
	<div class="header-bg-color">
		<div class="container">
			<Navbar />
		</div>
	</div>

	<div class="header-bg-neg-margin" />

	<div class="container">
		<slot />
	</div>

	<Footer />
{/if}
