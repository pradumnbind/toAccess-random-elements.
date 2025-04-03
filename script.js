function extractElements(arr) {
    // Destructure the first two elements and the last element
    const [first, second] = arr;
    const last = arr[arr.length - 1];

    // Return an array with the first, second, and last elements
    return [first, second, last];
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const result = extractElements(numbers);

console.log(result);  // Output: [1, 2, 5]
