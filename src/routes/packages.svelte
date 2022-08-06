<script>
    import { onMount } from 'svelte';
    import axios from 'axios';
    import { SvelteToast, toast } from '@zerodevx/svelte-toast';
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/index';
    let repo_apps= [], detail_app = false, appname, cliname, description, author, version, repo, appsearch, repofilter = [];
    onMount(async () => {
        let repo_apps_request = await axios.get("https://raw.githubusercontent.com/Windows-On-Linux/Repo/main/repository.json");
        repo_apps = repo_apps_request.data;
    });
    function detail(name, app_description, app_author, app_version, app_repo, cli) {
        detail_app = true;
        appname = name;
        description = app_description;
        author = app_author;
        version = app_version;
        repo = app_repo;
        cliname = cli;
    }
    function copy(){
        navigator.clipboard.writeText("wineget -i " + cliname);
        toast.push("Command copied to clipboard");
    }
    function search(){
        repofilter = repo_apps.filter(app => {
            if(app.App.toLowerCase().includes(appsearch)){
                return app;
            }
        });
    }
</script>

<SvelteToast  />

{#if detail_app == false}
<h5 class="icon">All packages are available at this link: <a href="#0" on:click={() => window.open("https://github.com/Windows-On-Linux/Repo")}>https://github.com/Windows-On-Linux/Repo</a></h5>
<h5 class="icon">Feel free to write and add script to repository</h5>
<div class="d-flex m-5" role="search">
    <input class="form-control me-2" type="search" placeholder="Search package" aria-label="Search" bind:value={appsearch} on:keyup={search}>
    <button class="btn btn-outline-success" on:click={search}>Search</button>
</div>


<ul class="list-group m-5">
    {#if appsearch == "" || appsearch == null}
    {#each repo_apps as app}
        <li class="list-group-item" on:click={() => detail(app.App, app.Description, app.Author, app.Version, app.Repository, app.CliName)}>{app.App} - {app.CliName}</li>
    {/each}
    {:else if repofilter.length != 0 && appsearch != ""}
        {#each repofilter as app}
            <li class="list-group-item" on:click={() => detail(app.App, app.Description, app.Author, app.Version, app.Repository, app.CliName)}>{app.App} - {app.CliName}</li>
        {/each}
    {:else}
    <p></p>
    {/if}
</ul>
{:else}
<div class="icon" on:click={() => detail_app = false}>
    <Fa icon={faArrowLeft} size="2x" ></Fa>
</div>

<div class="card m-5">
    <h5 class="card-header">{appname} {version}</h5>
    <div class="card-body">
      <h5 class="card-title">{description}</h5>
      <p class="card-text">{author}</p>
      <p class="card-text">Package name for CLI: {cliname}</p>
      <a href="#0" class="btn btn-primary" on:click={copy}>Install</a>
      <a href="#0" on:click={() => window.open(repo)} class="btn btn-primary">Go to repository of script</a>
    </div>
  </div>
{/if}

<style>
    .icon {
        margin-left: 52px;
    }
</style>
