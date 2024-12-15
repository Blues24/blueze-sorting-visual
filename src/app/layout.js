export const metadata = {
  title: "Sorting Visualizer",
  description: "Visualize sorting algorithms dynamically.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px" }}>
          <nav style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <a href="/sorting" style={{ color: "white", textDecoration: "none" }}>Visualizer</a>
            <a href="/sorting/about" style={{ color: "white", textDecoration: "none" }}>About</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
