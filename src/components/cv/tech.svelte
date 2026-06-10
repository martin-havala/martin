<script lang="ts">
  import { TECHS } from "./cv.model";
  interface Props {
    selectedTech?: string | null;
  }

  let { selectedTech = $bindable(null) }: Props = $props();
  const year = new Date().getUTCFullYear() - 2;
</script>

<section>
  <h1>Technologies</h1>
  {#each TECHS as tech, index}
    {#if index != 0 && tech.group != TECHS[index - 1].group}
      <hr />
    {/if}

    <div
      class="tech"
      style="opacity: {Math.max(
        1 - (year - Math.max(tech.lastWorkUsed, tech.lastUsed)) / 20,
        0.5,
      )}; font-style:{Math.max(tech.lastWorkUsed, tech.lastUsed) >
      new Date().getUTCFullYear() - 3
        ? 'normal'
        : 'italic'}"
      aria-roledescription="hovering this element highlights valid experience in the job listing"
      aria-label={`Technology: ${tech.name}, practiced for ${tech.workYears} years`}
      role="contentinfo"
      onmouseenter={() => (selectedTech = tech.name)}
      onmouseleave={() => (selectedTech = null)}
    >
      <!-- <span class="prefix" title={TECH_GRP_NAMES[tech.group].lng}>{TECH_GRP_NAMES[tech.group].shrt}</span> -->
      <span class="name">{tech.name}</span>

      <span class="spacer"></span>
      <span
        class="years"
        title={`Practiced for ${tech.workYears} years, last used in ${Math.max(
          tech.lastWorkUsed,
          tech.lastUsed,
        )}`}
      >
        <span class="professionally-used"
          >{Array(tech.workYears - tech.hobbyYears)
            .fill("▮")
            .join("")}
        </span>
        {#if tech.workYears - tech.hobbyYears > 0}
          <small
            >{tech.workYears -
              tech.hobbyYears}{#if tech.hobbyYears > 0}+{tech.hobbyYears}{/if}
          </small>
        {/if}
        <span class="hobby-used"
          >{Array(tech.hobbyYears).fill("▯").join("")}</span
        >
      </span>
    </div>
  {/each}
  <div class="legend">
    <div style="font-size:.9em;">
      <span> * approx. usage in years</span>
      <span class="end">professionally</span><span class="end years">▮</span>
      <span></span><span class="end">hobby</span>
      <span class="end years">▯</span>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    width: 100%;
    --tech-width: 30em;
  }
  .tech {
    display: flex;

    width: var(--tech-width);
    margin-right: calc(var(--tech-width) / 10);
    flex-direction: row;
    justify-content: space-between;
    justify-items: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
    cursor: pointer;
    line-height: 1.5em;

    &:hover {
      color: var(--active-color);
      transition: color 0.1s ease-in-out;
    }
    .name {
      flex: 1 1 auto;

      white-space: nowrap;
    }
    .spacer {
      display: block;
      flex: 1 1 auto;
      margin: 0.7em 0.5em 0.8em;
      width: 100%;
      opacity: 0.2;
      overflow: hidden;
      border-bottom: dotted 1px currentColor;
    }

    &:hover {
      small {
        opacity: 1;
      }
    }
  }
  hr {
    height: 1em;
    border: none;
  }

  .years {
    overflow: visible;
    text-overflow: ellipsis;
    flex: 1 0 auto;
    letter-spacing: 0.05em;
    font-size: 1.5em;
    position: relative;

    small {
      font-size: 0.5em;
      display: inline-flex;
      justify-content: center;
      width: 5ex;
      white-space: pre;
      opacity: 0;
      display: none;
    }
  }

  .hobby-used {
    position: absolute;
    margin-left: 1ex;
  }
  .legend {
    border-radius: 0.5em;
    margin: 1em 0;
    width: var(--tech-width);
    div {
      display: grid;
      grid-template-columns: max-content auto 2em;
      align-items: center;
      gap: 0.5em;
      > span {
        display: flex;
        align-items: center;
      }
      .end {
        justify-content: flex-end;
      }
    }
  }
</style>
