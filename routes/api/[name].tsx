import { define } from "../../utils.ts";

export const handler = define.handlers({
  GET(ctx) {
    const name = "Lightyear1603";
    return new Response(
      `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`,
    );
  },
});
