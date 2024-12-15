"use client";

import React, { useState, useRef} from "react";
import { bubbleSort, mergeSort, sleepSort, selectionSort, insertionSort } from "./sortingAlgo"
import "./styles/module.css";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [arraySize, setArraySize] = useState(10);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("Bubble Sort");
  const sortingRef = useRef(null);

  const algorithms = {
    "Bubble Sort": bubbleSort,
    "Merge Sort" : mergeSort,
    "Sleep Sort" : sleepSort,
    "Insertion Sort" : insertionSort,
    "Selection Sort" : selectionSort
  };
  
  const generateRandomArray = () => {
    if (isSorting) return;
    const randomArray = Array.from({ length: arraySize }, () => 
        Math.floor(Math.random() * 100 + 1)
    );
    setArray(randomArray);
  };

  const handleSort = async () => {
    if (isSorting) return;
    setIsSorting(true);
    const sortAlgorithm = algorithms[selectedAlgorithm];
    sortingRef.current = true;
    await sortAlgorithm([...array], newArray => {
        if(sortingRef.current) setArray(newArray);
    }, speed);
    setIsSorting(false);
  };

  const handleCancel = () => {
    sortingRef.current = false;
    setIsSorting(false);
  };

  const SVG_WIDTH = 500;
  const SVG_HEIGHT = 300;

  return (
    <div className="sorting-visualizer">
      <h1>Sorting Visualizer</h1>
      <div className="controls">
        <button onClick={generateRandomArray} disabled={isSorting}>
          Generate Array
        </button>
        <select
          value={selectedAlgorithm}
          onChange={e => setSelectedAlgorithm(e.target.value)}
        >
          {Object.keys(algorithms).map(algo => (
            <option key={algo} value={algo}>
              {algo}
            </option>
          ))}
        </select>
        <button onClick={handleSort} disabled={isSorting}>
          Sort
        </button>
        <button onClick={handleCancel} disabled={!isSorting}>
          Cancel
        </button>
        <div className="speed-control">
          <label>Speed:</label>
          <input
            type="range"
            min="10"
            max="1000"
            step="10"
            value={speed}
            onChange={e => setSpeed(Number(e.target.value))}
            disabled={isSorting}
          />
        </div>
        <div className="array-size-control">
          <label>Array Size:</label>
          <input
            type="number"
            min="5"
            max="100"
            value={arraySize}
            onChange={e => setArraySize(Number(e.target.value))}
            disabled={isSorting}
          />
        </div>
      </div>
      <svg
        className="array-container"
        width={SVG_WIDTH}
        height={SVG_HEIGHT}
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
      >
        {array.map((value, index) => {
          const barWidth = SVG_WIDTH / array.length;
          const barHeight = (value / 100) * SVG_HEIGHT;
          const x = index * barWidth;
          const y = SVG_HEIGHT - barHeight;

          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={barWidth - 2}
              height={barHeight}
              fill="#4caf50"
              rx="2"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default SortingVisualizer;