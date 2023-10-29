import { defineRoute, RouteContext } from "$fresh/server.ts";

export default defineRoute((req, ctx) => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
        consectetur nihil? Voluptate quos quibusdam, odio nemo repellat,
        voluptas iure vitae laboriosam debitis ipsam sunt omnis expedita
        inventore laudantium, eligendi ipsa.
      </p>
    </div>
  );
});
