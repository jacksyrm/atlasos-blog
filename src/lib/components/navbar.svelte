<script lang="ts">
	import Logomark from '$lib/images/logomark.svg';
	import { navigating } from '$app/stores';
	import { page } from '$app/stores';

	$: if ($navigating) isMenuOpen = false;

	let isMenuOpen = false;
</script>

<div class="navbar mb-navbar">
	<a href="/"><img src={Logomark} alt="atlas logomark" /></a>
	<div class="navbar-items">
		<a href="https://github.com/Atlas-OS/Atlas/" target="_blank" rel="noreferrer"><i class="fa-brands fa-github" /></a>
		<a href="https://twitter.com/AtlasOS/" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter" /></a>
		<a href="https://discord.atlasos.net/" target="_blank" rel="noreferrer"><i class="fa-brands fa-discord" /></a>
		<a href="https://atlasos.net">Main website -></a>
	</div>
	<div class="mb-navbar-items">
		<button on:click={() => (isMenuOpen = !isMenuOpen)}>
			<i class="fa-solid fa-bars" />
		</button>
	</div>
</div>

<div class="mb-expand" class:active={isMenuOpen}>
	<hr />
	<a href="/">Home</a>
	<hr />
	<a href="/downloads">Downloads</a>
	<hr />
	<a href="https://github.com/Atlas-OS/Atlas">GitHub</a>
	<hr />
</div>
