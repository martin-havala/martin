<script lang="ts">
    import Connections from '../components/cv/connections.svelte';
    import Cv from '../components/cv/cv.svelte';
    import Hobbies from '../components/cv/hobbies.svelte';
    import Tech from '../components/cv/tech.svelte';

    let selectedTech: string | null = null;
    let lightMode = false;
</script>

<svelte:head>
    <title>Martin Havala</title>
</svelte:head>

<button class='noprint' on:click={() => (lightMode = !lightMode)}>{lightMode ? '☽' : '☀'}</button>
<Connections />
<div class="grid">
    <div class="column">
        <Cv bind:selectedTech />
    </div>
    <div class="column">
        <Tech bind:selectedTech />
        <Hobbies bind:selectedTech />
    </div>
    <!-- <Datavis /> -->
</div>
<div class="noprint rect {lightMode ? 'white' : 'dark'} " />

<style lang="scss">
    button {
        font-size: 3ex;
        position: absolute;
        top: 1ex;
        right: 1ex;
        text-align: center;
        width: 3ex;
        height: 3ex;
        line-height: 3ex;
        margin: 0;
        padding: 0;
        border: none;
        border-radius: 50%;
    }
    .rect {
        position: fixed;
        user-select: none;
        background-color: #fff;
        pointer-events: none;
        top: calc(-200vmax + 4ex);
        right: calc(-200vmax + 4ex);
        width: 400vmax;
        height: 400vmax;
        transform-origin: center center;
        mix-blend-mode: difference;
        border-radius: 200vmax;

        transform: scale(0);
        transition: transform 1s ease-out;
        &.white {
            transition: transform 1s ease-in;

            transform: scale(100%);
        }
    }

    .grid {
        display: grid;
        width: 100%;
        grid-template-columns: 2fr 1fr;
    }
    .column {
        padding: 1em;
    }
</style>
