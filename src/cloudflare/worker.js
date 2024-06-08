export default {
  async fetch(request) {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/data") {
      const result = await "DATABASE".execute("SELECT * FROM comments");
      return new Response(JSON.stringify(result), { headers: { "Content-Type": "application/json" } });
    }
    return new Response("Not found", { status: 404 });
  },
};
