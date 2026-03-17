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
      <h3>{section.title}</h3>
      <table>
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
                  {#if i > 0}, {/if}<code>{name}</code>
                {/each}
              </td>
              <td><code>{row.tailwind}</code></td>
              <td><code>{row.css}</code></td>
            </tr>
          {/each}
        </tbody>
      </table>
    {/each}
  </div>
</section>

<style lang="scss">
  @use "../crayon";

  h3 {
    padding: crayon.size(4) 0;
    color: crayon.color("red-400");
  }

  table {
    background-color: crayon.color("blue-100");
    border-radius: crayon.rounded("xl");

    td {
      border-bottom: crayon.size(0.5) crayon.color("blue-900") dashed;
      padding: crayon.size(4);
    }
  }

  code {
    padding: crayon.size(1.5) crayon.size(2);
    background-color: crayon.color("blue-200");
    border-radius: crayon.rounded("lg");
    color: crayon.color("blue-950");
  }
</style>
