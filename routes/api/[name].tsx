export const handler = {
  async GET(_req, ctx) {
    const name = "Lightyear1603";

    const query = `
      query ($name: String) {
        User(name: $name) {
          name
          statistics {
            anime {
              count
              episodesWatched
            }
            manga {
              count
              chaptersRead
            }
          }
        }
      }
    `;

    const res = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { name },
      }),
    });

    const json = await res.json();

    const user = json.data.User;

    return Response.json({
      username: user.name,
      anime_count: user.statistics.anime.count,
      episodes_watched: user.statistics.anime.episodesWatched,
      manga_count: user.statistics.manga.count,
      chapters_read: user.statistics.manga.chaptersRead,
    });
  },
};
