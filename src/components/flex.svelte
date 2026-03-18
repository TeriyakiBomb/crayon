<script>
  import sections from "../data/flex.yaml";
</script>

<section>
  <h2 class="text-red-500">Flex</h2>
  <p class="text-blue-950">
    It's flex, you know flex. How he do, what he be. Yeah, him. Anyway
  </p>
  <div>
    {#each sections as section}
      <h3 class="text-red-400">{section.title}</h3>
      <table class="bg-blue-100">
        <thead class="text-blue-800">
          <tr>
            <td><b>Crayon</b></td>
            <td><b>Tailwind</b></td>
            <td><b>What do?</b></td>
          </tr>
        </thead>
        <tbody>
          {#each section.classes as row}
            <tr>
              <td>
                {#each row.crayon as name, i}
                  {#if i > 0},  {/if}<code class="bg-blue-200 text-blue-950">{name}</code>
                {/each}
              </td>
              <td><code class="bg-blue-200 text-blue-950">{row.tailwind}</code></td>
              <td><code class="bg-blue-200 text-blue-950">{row.css}</code></td>
            </tr>
          {/each}
        </tbody>
      </table>
    {/each}
  </div>
</section>

<style lang="scss">
  @use "../crayon";

  h2 {
    @include crayon.dark { color: crayon.color("red-400"); }
  }

  h3 {
    padding: crayon.size(4) 0;
    @include crayon.dark { color: crayon.color("red-300"); }
  }

  p {
    @include crayon.dark { color: crayon.color("blue-200"); }
  }

  thead {
    @include crayon.dark { color: crayon.color("blue-300"); }
  }

  table {
    border-radius: crayon.rounded("xl");
    @include crayon.dark { background-color: crayon.color("blue-900"); }

    td {
      border-bottom: crayon.size(0.5) crayon.color("blue-900") dashed;
      padding: crayon.size(4);
      @include crayon.dark { border-bottom-color: crayon.color("blue-700"); }
    }
  }

  code {
    padding: crayon.size(1.5) crayon.size(2);
    border-radius: crayon.rounded("lg");
    font-size: crayon.font-size("sm");

    @include crayon.dark {
      background-color: crayon.color("blue-800");
      color: crayon.color("blue-100");
    }
  }
</style>
