<script lang="ts">
    import { CV_JOBS, TECH_GRPS } from './cv.model';
    export let selectedTech: string | null;

    $: allTechs =
        !!selectedTech && TECH_GRPS[selectedTech] ? [...TECH_GRPS[selectedTech], selectedTech] : [selectedTech];
</script>

<section>
    <h1>Work</h1>
    {#each CV_JOBS as job}
        <ul class="no-padding">
            <li>
                {job.employee}
                <span class="interval">{job.interval[0]} - {job.interval[1] ? job.interval[1] : 'still there'}</span>
                <span class="parttime">{job.parttime ? `${job.parttime} part-time` : ''}</span>

                <div class="tasks">{job.tasks}</div>
                <div class="tech">
                    {#each job.tech as tech, index}
                        {#if index != 0}<i>▪</i>{/if}
                        <span class={allTechs.includes(tech) ? 'selected' : ''}>{tech}</span>
                    {/each}
                </div>
            </li>
        </ul>
    {/each}
</section>
<section>
    <h1>Education</h1>
    <ul>
        Faculty of Mathematics, Physics and Informatics Comenius University Bratislava
        <li><i>2008 - 2010</i>: Mathematics - Computer Graphics and Geometry (Mgr.)</li>
        <li><i>2005 - 2008</i>: Applied Informatics (Bc.)</li>
    </ul>
</section>

<style lang="scss">
    .interval {
        padding: 0 2ex;
        opacity: 0.9;
    }
    .parttime {
        font-size: 0.8em;
        opacity: 0.6;
    }
    .tech {
        font-size: 0.7em;
        i {
            padding: 0 2ex;
            opacity: 0.7;
        }

        span {
            opacity: 0.7;
            display: inline-block;
            transition: all 0.2s ease-in-out;
            &.selected {
                opacity: 1;
                text-shadow: 0 0 10px #fff6;
                color: var(--active-color);
                transform: scale(120%);
                transform-origin: center center;
            }
        }
    }
</style>
