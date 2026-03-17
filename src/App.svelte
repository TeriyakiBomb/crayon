<script>
import Flex from "./components/flex.svelte";
</script>

<main class="container py-10 gap-y-4">
  <img src="/logo-color.svg" alt="Crayon" class="logo" />
  <Flex />
</main>

<style lang="scss">
  @use "crayon";

  .logo {
    height: crayon.size(20);
    width: auto;
  }

  h1 {
    color: crayon.color("blue-950");
  }
</style>
