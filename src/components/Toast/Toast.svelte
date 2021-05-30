<script lang="ts">
  import { tweened } from "svelte/motion";
  import { linear } from "svelte/easing";
  import { fly } from "svelte/transition";
  import type { SvelteToastOptions } from "./type";
  export let item: SvelteToastOptions;

  const progress = tweened(item.initial, {
    duration: item.duration,
    easing: linear,
  });
  let prevProgress = item.initial;
  $: if (prevProgress !== item.progress) {
    if (item.progress === 1 || item.progress === 0) {
      progress.set(item.progress);
    } else {
      progress.set(item.progress);
    }
    prevProgress = item.progress;
  }
</script>

<div class="toastItem">
  <div class="toastMsg">
    {@html item.msg}
  </div>
  {#if item.dismissable}
    <div class="toastBtn">✕</div>
    <p in:fly={{ y: 200, duration: 2000 }}>fade out</p>
  {/if}
  <progress class="toastBar" value={$progress} />
</div>

<style type="text/scss">
  @import "./Toast.scss";
</style>
