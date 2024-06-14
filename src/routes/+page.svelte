<script>
	import { onMount } from 'svelte';
	let posts = [];
	let environmental = [];
	let social = [];
	let governance = [];
  
	onMount(async () => {
	  const response = await fetch('/api/posts');
	  posts = await response.json();
	  environmental = posts.filter(post => post.category === 'Environmental');
	  social = posts.filter(post => post.category === 'Social');
	  governance = posts.filter(post => post.category === 'Governance');
	});
  </script>
  
  <style>
	.container {
	  display: flex;
	  justify-content: space-between;
	}
  
	.column {
	  width: 32%;
	  padding: 10px;
	  box-sizing: border-box;
	}
  
	iframe {
	  width: 100%;
	  height: 300px; /* Adjust based on content */
	  border: none;
	}
  </style>
  
  <main>
	<h1>LinkedIn ESG Posts Categorized</h1>
	<div class="container">
	  <div class="column">
		<h2>Environmental</h2>
		{#each environmental as post}
		  <div>
			<h3>{post.title || post.text.slice(0, 60)}</h3>
			<iframe src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${post.urn.substring(post.urn.lastIndexOf(':') + 1)}`} 
					allowfullscreen="" 
					title="Embedded post"></iframe>
		  </div>
		{/each}
	  </div>
	  <div class="column">
		<h2>Social</h2>
		{#each social as post}
		  <div>
			<h3>{post.title || post.text.slice(0, 60)}</h3>
			<iframe src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${post.urn.substring(post.urn.lastIndexOf(':') + 1)}`} 
					allowfullscreen="" 
					title="Embedded post"></iframe>
		  </div>
		{/each}
	  </div>
	  <div class="column">
		<h2>Governance</h2>
		{#each governance as post}
		  <div>
			<h3>{post.title || post.text.slice(0, 60)}</h3>
			<iframe src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${post.urn.substring(post.urn.lastIndexOf(':') + 1)}`} 
					allowfullscreen="" 
					title="Embedded post"></iframe>
		  </div>
		{/each}
	  </div>
	</div>
  </main>
  