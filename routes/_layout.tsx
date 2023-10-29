import { defineLayout } from "$fresh/server.ts";

export default defineLayout((req, { Component }) => {
  return (
    <>
      <h1>This is global _layout.tsx</h1>
      <Component />
    </>
  );
});
