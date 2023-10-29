import { defineRoute } from "$fresh/src/server/defines.ts";
import ApiForm from "../components/ApiForm.tsx";

export default defineRoute((req, ctx) => {
  return (
    <>
      <ApiForm />
    </>
  );
});
