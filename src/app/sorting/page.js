"use client"; // Untuk memungkinkan penggunaan state dan efek di komponen ini
import SortingVisualizer from "../component/sortingVisual";

export default function SortingPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Sorting Visualizer</h1>
      <SortingVisualizer />
    </div>
  );
}
