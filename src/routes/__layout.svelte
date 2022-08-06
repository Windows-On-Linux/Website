<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
</script>

<svelte:head>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous"></script>
</svelte:head>
<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Wineget</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/packages">Packages</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/download">Download</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="" on:click={() => window.open("https://github.com/Windows-On-Linux")}>Source code</a>
          </li>
        </ul>
    
      </div>
    </div>
  </nav>
  <br/>
  <br/>
<main>
   <slot>

</slot> 
</main>
<br/>
<br/>
<footer class="bg-light text-center text-lg-start">
  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2022 Copyright:
    <a class="text-dark" href="/">Windows-On-Linux</a>
    <p>Source code available <a href="https://github.com/Windows-On-Linux">here</a></p>
  </div>
  <!-- Copyright -->
</footer>