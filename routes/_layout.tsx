import { defineLayout } from "$fresh/server.ts";

export default defineLayout((req, { Component }) => {
  return (
    <>
      <Component />
    </>
  );
});
