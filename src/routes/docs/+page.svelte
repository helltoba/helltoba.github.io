<script lang="ts">
    import { page } from "$app/stores";
</script>

<h1>docs</h1>
<br>

<article> 
    <p>虚無</p>
    <p>もうリンク置き場として使うか</p>
    <a href="/kaigakusai/60">第60回海学祭</a>  
    <br>
    <a href="/kaigakusai/99">第99回海学祭</a>
</article>

<svelte:head>
    <title>docs</title>
    <meta property="og:url" content="{$page.url.href}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="docs"/>
    <meta property="og:description" content="何かしらのドキュメントが置かれる予定"/>
    <meta property="og:site_name" content="HellToba"/>
    <meta property="og:image" content="/favicon.png"/>
    <meta name="description" content="何かしらのドキュメントが置かれる予定"/>
</svelte:head>