<script>
import Flex from "./components/flex.svelte";
</script>

<main class="container py-10 gap-y-4">
  <img src="/logo-color.svg" alt="Crayon" class="logo" />
  <Flex />
</main>

<style lang="scss">
  @use "../src/crayon";

  .logo {
    height: crayon.size(20);
    width: auto;
  }
</style>
