<script lang="ts">
  import { tweened } from "svelte/motion";
  import { linear } from "svelte/easing";
  import type { Toast } from "./type";
  import { toast } from "./store";
  export let item: Toast;

  const progress = tweened(item.initial, {
    duration: item.duration,
    easing: linear,
  });
  let prevProgress = item.initial;
  $: if (prevProgress !== item.progress) {
    if (item.progress === 1 || item.progress === 0) {
      progress.set(item.progress).then(() => toast.pop(item.id));
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
    <div class="toastBtn" on:click={() => toast.pop(item.id)}>✕</div>
  {/if}
  <progress class="toastBar" value={$progress} />
</div>

<style type="text/scss">
  @import "./Toast.scss";
</style>
