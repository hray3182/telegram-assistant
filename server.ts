// Simple HTTP server to serve the presentation
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    // Serve presentation.html by default
    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(Bun.file("presentation.html"));
    }

    // Serve static files
    const filePath = url.pathname.slice(1); // Remove leading slash
    const file = Bun.file(filePath);

    return new Response(file);
  },
});

console.log(`🎬 Presentation is running at http://localhost:${server.port}`);
console.log(`📊 Open http://localhost:${server.port} in your browser to view the slides`);
console.log(`\n💡 Navigation tips:`);
console.log(`   - Press → or space to go to next slide`);
console.log(`   - Press ← to go to previous slide`);
console.log(`   - Press ESC to see slide overview`);
console.log(`   - Press S to open speaker notes`);
console.log(`\n✨ Press Ctrl+C to stop the server\n`);
