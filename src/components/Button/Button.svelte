<script lang="ts">
  type ButtonSizes = "xs" | "sm" | "md" | "lg";
  export let size: ButtonSizes = "xs";
</script>

<button
  class:xsStyle={size === "xs"}
  class:mdStyle={size === "md"}
  class:smStyle={size === "sm"}
  class:lgStyle={size === "lg"}>Button</button
>

<style>
  :root {
    --main-bg-teal-600: #2c7a7b;
    --main-bg-blue-600: #2c6cb0;
    --main-colors-white: #ffffff;
    --main-space-1: 0.25rem;
    --main-space-2: 0.5rem;
    --main-space-3: 0.75rem;
    --main-space-4: 1rem;
    --main-space: mainSpace;
    --main-fontWeights-normal: 400;
    --main-fontWeights-medium: 500;
    --main-fontWeights-semibold: 600;
    --main-fontWeights-bold: 700;
    --main-radius-sm: 0.125rem;
    --main-radius-base: 0.25rem;
    --main-radius-md: 0.375rem;
    --main-radius-lg: 0.5rem;
    --main-radius-xl: 0.75rem;
  }
  button {
    display: inline-flex;
    align-items: center;
    width: auto;
    color: var(--main-colors-white);
    background-color: var(--main-bg-teal-600);
    font-weight: var(--main-fontWeights-semibold);
    transition: all 250ms ease 0s;
    cursor: pointer;
  }
  button:hover {
    background-color: var(--main-bg-blue-600);
  }
  .xsStyle {
    padding-inline-start: var(--main-space-1);
    padding-inline-end: var(--main-space-1);
    border-radius: var(--main-radius-sm);
    font-weight: var(--main-fontWeights-normal);
  }
  .smStyle {
    padding-inline-start: var(--main-space-2);
    padding-inline-end: var(--main-space-2);
    border-radius: var(--main-radius-sm);
    font-weight: var(--main-fontWeights-medium);
  }
  .mdStyle {
    padding-inline-start: var(--main-space-3);
    padding-inline-end: var(--main-space-3);
    border-radius: var(--main-radius-md);
    font-weight: var(--main-fontWeights-semibold);
  }
  .lgStyle {
    padding-inline-start: var(--main-space-4);
    padding-inline-end: var(--main-space-4);
    border-radius: var(--main-radius-lg);
    font-weight: var(--main-fontWeights-bold);
  }
</style>
