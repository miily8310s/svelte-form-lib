<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { Button } from "./components/Button";
  import { Form } from "./components/Form";
  import { Toast } from "./components/Toast";
  import { toast } from "./components/Toast/store";
  import type { ToastOptions } from "./components/Toast/type";
  const defaults: ToastOptions = {
    duration: 400,
    dismissable: true,
    initial: 1,
    progress: 0,
    reversed: false,
    intro: { x: 256 },
    theme: {},
  };
  toast._opts(defaults);
  $: toast.push("I'm Done!!!", { duration: 2000 });
  $: toast.push("hoge hoge");
</script>

<Button size="xs" />
<Button size="sm" />
<Button size="md" />
<Button size="lg" />
<Form />
<ul>
  {#each $toast as item (item.id)}
    <li in:fly={item.intro} out:fade animate:flip={{ duration: 200 }}>
      <Toast {item} />
    </li>
  {/each}
</ul>
