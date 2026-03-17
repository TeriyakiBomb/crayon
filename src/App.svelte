<script>
import Flex from "./components/flex.svelte";
</script>

<main class="container py-10 gap-y-4">
  <Flex />
</main>

<style lang="scss">
  @use "crayon";

  h1 {
    color: crayon.color("blue-950");
  }
</style>
