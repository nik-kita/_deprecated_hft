import { defineRoute, RouteContext } from "$fresh/server.ts";

export default defineRoute((req, ctx) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul class="list-outside bg-slate-500">{steps}</ul>
    </div>
  );
});

const title = "What is this? (wtf)";
const steps = [
  {
    step: "Login with google",
    description: `You should provide to bot your API credentials \
and because it is very sensitive information it should be done \
only once, and then bot will continue to reuse them according to \
your authentication.`,
  },
  {
    step: "Copy API key and secret from your crypto-exchange",
    description: `As is already mentioned before this is very sensitive data \
and theoretically you should not to share it with anyone. So first of all it is important to understand that \
this service is not responsible for it's usage. You can use it only on your own risk. \
But below I provide some instruction how obtain your API keys to minimize this risk. \
At any case this is not required option because my service has not any goals to take your \
money. Problem is only that it may not work as expected and some security issues also are possible \
because it is amateur project.`,
  },
  {
    step: 'Use "monitor" ui to configure / start / stop your bot.',
    description:
      "// TODO this is not implement yet. However this is the main part of this project.",
  },
].map((s, i) => (
  <ul>
    <h5>{s.step}</h5>
    <p>{s.description}</p>
  </ul>
));
