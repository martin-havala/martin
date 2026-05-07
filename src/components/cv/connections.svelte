<div class="profile">
  <h1>Martin Havala</h1>
  <div class="networks">
    <a href="https://github.com/martin-havala" target="_parent">github</a>
    <a href="https://www.linkedin.com/in/martin-havala" target="_parent"
      >linkedin</a
    >
  </div>
  <a
    class="meet"
    target="_blank"
    href="https://calendar.app.google/afBossnqRszAmqmU8"
    title="Opens Google-Meet calendar in a new tab">meet Martin :)</a
  >
  <!-- <img src="{base}/images/profile_pic.jpg" alt="Profile picture" aria-hidden="true" /> -->
</div>

<style lang="scss">
  section {
    h1 {
      margin: 0;
    }
  }
  .profile {
    margin: 0 1em;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .networks {
    font-size: 0.8em;
    margin-left: 3em;
  }
  a {
    padding: 0.5ex;
  }

  .meet {
    display: inline-block;
    text-decoration: none;
    background: var(--fg-color);
    color: var(--bg-color);
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    margin-left: 2rem;

    &:hover {
      background: var(--active-color);
    }
  }
</style>
