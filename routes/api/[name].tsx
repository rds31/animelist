export const handler = {
  GET(_req, ctx) {
    const name = "Lightyear1603";

    return Response.json({
      username: name,
    });
  },
};
