import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the Sorting Algorithm Visualizer</h1>
      <p>Click below to explore!</p>
      <nav>
        <Link href="/sorting">
          <button style={{ margin: "10px" }}>Go to Sorting Visualizer</button>
        </Link>
        <Link href="/sorting/about">
          <button style={{ margin: "10px" }}>About Sorting Algorithms</button>
        </Link>
      </nav>
    </div>
  );
}
