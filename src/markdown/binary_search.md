
### 1. **Bubble Sort**
   - **Approach**: Repeatedly swap adjacent elements if they are in the wrong order. This process continues until no more swaps are needed.
   - **Time Complexity**: O(n²)
   - **Best For**: Small or nearly sorted arrays.

### 2. **Selection Sort**
   - **Approach**: Repeatedly find the minimum element from the unsorted portion of the array and swap it with the first unsorted element.
   - **Time Complexity**: O(n²)
   - **Best For**: Small datasets.

### 3. **Insertion Sort**
   - **Approach**: Build the sorted array one item at a time, by comparing the current element with the elements in the sorted portion and shifting them to make room for the current element.
   - **Time Complexity**: O(n²)
   - **Best For**: Small datasets or nearly sorted arrays.

### 4. **Merge Sort**
   - **Approach**: Recursively divide the array into halves, sort each half, and then merge the sorted halves back together.
   - **Time Complexity**: O(n log n)
   - **Best For**: Stable and efficient sorting for larger datasets.

### 5. **Quick Sort**
   - **Approach**: Select a "pivot" element, partition the array such that elements smaller than the pivot come before it and larger elements come after it, then recursively sort the partitions.
   - **Time Complexity**: O(n log n) on average, O(n²) worst-case
   - **Best For**: Large datasets, but avoid worst-case by using randomized or median-of-three pivot selection.

### 6. **Heap Sort**
   - **Approach**: Build a max-heap from the array, repeatedly extract the maximum element, and place it at the end of the sorted portion.
   - **Time Complexity**: O(n log n)
   - **Best For**: Large datasets requiring in-place sorting.

### 7. **Counting Sort**
   - **Approach**: Count the occurrences of each distinct element, then place elements in sorted order using this count. Suitable only for integer sorting with a known range.
   - **Time Complexity**: O(n + k), where k is the range of the input
   - **Best For**: Large datasets with small ranges of integer values.

### 8. **Radix Sort**
   - **Approach**: Sort numbers digit by digit starting from the least significant digit to the most significant, using a stable sort like counting sort for each digit.
   - **Time Complexity**: O(d * (n + k)), where d is the number of digits
   - **Best For**: Sorting large numbers or strings.

### 9. **Bucket Sort**
   - **Approach**: Divide elements into buckets, sort each bucket individually (typically using another sorting algorithm), and then concatenate the buckets.
   - **Time Complexity**: O(n + k), where k is the number of buckets
   - **Best For**: Uniformly distributed data.
