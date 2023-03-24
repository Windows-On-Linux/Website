<script>
    import { onMount } from 'svelte';
    onMount(async() => {
        await import("bs5-lightbox")
    });
</script>
<div class="d-flex justify-content-center">
    <h2>Create a Wineget script</h2>
</div>
<div class="card m-5">
    <div class="card-body">
        <p class="card-text">If you want to add the support for an application in Wineget you must follow this guideline, it's very easy.</p>
        <p>In this example we use <a href="#0" on:click={() => window.open("https://github.com/Windows-On-Linux/Ableton-On-Linux")}>Ableton Live 11 Suite script.</a></p>
        <p>In the repository that we create, we must include an icon, a build script called build.sh and a startup script called startup.sh, in build script we create a Wineprefix in ~/wol/$APPNAME and then we execute the command that make to work our application</p>
        <p>For example in Ableton Live 11 Suite, I install some dependencies in Wineprefix through winetricks(dotnet40, d3dx9...)</p>
        <a href="abletonscript.png" data-toggle="lightbox">
            <img src="abletonscript.png" alt="ableton script" class="img-fluid"/>
        </a>
        <p>then I download Ableton installer zip, unzip it and run the installer</p>
        <a href="abletoninstallscript.png" data-toggle="lightbox">
            <img src="abletoninstallscript.png" alt="Ableton install script" class="img-fluid"/> 
        </a>
        <p>In startup script we write command to run application, for example the Ableton startup in only one line script that execute Ableton Live 11 Suite.exe in Wineprefix of Ableton</p>
        <a href="startup.png" data-toggle="lightbox">
            <img src="startup.png" alt="Start ableton script" class="img-fluid"/>
        </a>
        <p>Now if you want to submit your application to official Wineget repository, open a issue on <a href="#0" on:click={() => window.open("https://github.com/Windows-On-Linux/Repo<")}>https://github.com/Windows-On-Linux/Repo</a> or modify the repository.json with your new application and submit a pull request</p>
    </div>
  </div>