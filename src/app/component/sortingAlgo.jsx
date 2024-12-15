"use client";

import { resolve } from "styled-jsx/css";

export const bubbleSort = async (array, updateArray, speed) => {
    const delay = ms => new Promise(res => setTimeout(res, ms));

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
          if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
            updateArray([...array]);
            await delay(speed);
          }
        }
    }
};

export const insertionSort = async (array, updateArray, speed) => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const len = array.length;
    for (let i = 1; i < len; i++){
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key){
            array[j + 1] = array[j];
            j--;
            updateArray([...array]);
            await delay(speed);
        }
        array[j + 1] = key;
        updateArray([...array]);
        await delay(speed);
    }
};

export const selectionSort = async (array, updateArray, speed) => {
    const delay = ms => new Promise(res => setTimeout(res, ms));

    for (let i = 0; i < array.length; i++){
        let minIndex = i;
        for(let j = i + 1; j < array.length; j++){
            if (array[j] < array[minIndex]){
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            updateArray([...array]);
            await delay(speed);
        }
    }
};

export const mergeSort = async (array, updateArray, speed) => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    
    const merge = async (left, right) => {
        let sorted = [];
        while (left.length && right.length){
            sorted.push(left[0] <= right[0] ? left.shift() : right.shift());
        }
        return [...sorted, ...left, ...right];
    };
    const sort = async arr => {
        if (arr.length <= 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = await sort(arr.slice(0, mid));
        const right = await sort(arr.slice(mid));
        const merged = await merge(left, right);
        updateArray([...merged]);
        await delay(speed);
        return merged;
    };

    return await sort(array);
};

export const sleepSort = async (array, updateArray, speed) => {
    const delay = ms => new Promise (res => setTimeout(res. ms));
    const sorted = [];
    const promises = array.map(value =>
        new Promise(resolve => 
            setTimeout(() => {
                sorted.push(value);
                updateArray([...sorted]);
                resolve();
            }, value * speed)
        )
    );
    await Promise.all(promises)    
};