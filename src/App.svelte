<script lang="ts">
  import { Button } from "./components/Button";
  import { Form } from "./components/Form";
  import { Toast } from "./components/Toast";
  const item = {
    duration: 4000,
    dismissable: true,
    initial: 1,
    progress: 0,
    reversed: false,
    intro: { x: 256 },
    theme: {},
    msg: `<strong>You won the jackpot!</strong><br>
  Click <a href="#" target="_blank">here</a> for details! 😛`,
  };
</script>

<main>
  <h1>Hello!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
<Button size="xs" />
<Button size="sm" />
<Button size="md" />
<Button size="lg" />
<Form />
<Toast {item} />

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
