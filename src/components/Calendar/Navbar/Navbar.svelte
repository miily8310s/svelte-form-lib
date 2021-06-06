<script lang="ts">
  // export let month = 12;
  export let month: number;
  export let year: number;
  export let start;
  export let end;
  // export let canIncrementMonth;
  // export let canDecrementMonth;
  export let monthsOfYear: string[][];

  let availableMonths:
    | {}
    | {
        name: string;
        abbrev: string;
      };

  availableMonths = monthsOfYear.map((m, i) => {
    return Object.assign(
      {},
      {
        name: m[0],
        abbrev: m[1],
      }
    );
  });
</script>

<div class="title">
  <div class="heading-section">
    <div class="control">
      <i class="arrow left" />
    </div>
    <div class="label">
      {monthsOfYear[month][0]}
      {year}
    </div>
    <div class="control">
      <i class="arrow right" />
    </div>
  </div>
  <div class="month-selector">
    {#each availableMonths as monthDefinition, index}
      <div class="month" class:selected={index === month}>
        <span>{monthDefinition.abbrev}</span>
      </div>
    {/each}
  </div>
</div>

<style type="text/scss">
  @import "./Navbar.scss";
</style>
