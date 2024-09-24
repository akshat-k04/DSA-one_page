- **point query range update** (segment tree code)
   - **range query range update** (lazy propogation)
   - **range query point update** (lazy propogation) 
   - **Segment Tree with Lazy Propagation**
   - **Fenwick Tree/Binary Indexed Tree (BIT)**


## point update and range query
``` c++
class point_update_range_query{
    vii arr;
    int n;

    void build(int l, int r, vii &a, int indx){
        if(l == r) {
            arr[indx] = a[l];
            return;  // Return from the base case
        }

        int mid = (l + r) / 2;
        build(l, mid, a, 2 * indx + 1);
        build(mid + 1, r, a, 2 * indx + 2);
        arr[indx] = min(arr[2 * indx + 1], arr[2 * indx + 2]);
    }

    void update(int val, int i, int l, int r, int indx){
        if(l == r) {
            arr[indx] = val;  // Update the correct position
            return;  // Return from the base case
        }

        int mid = (l + r) / 2;
        if(i > mid) update(val, i, mid + 1, r, 2 * indx + 2);
        else update(val, i, l, mid, 2 * indx + 1);
        arr[indx] = min(arr[2 * indx + 1], arr[2 * indx + 2]);
    }

    int query(int l, int r, int ql, int qr, int indx){
        // Completely within range
        if(l >= ql && r <= qr) return arr[indx];

        // No overlap
        if(qr < l || ql > r) return 1e9;

        // Partial overlap
        int mid = (l + r) / 2;
        return min(query(l, mid, ql, qr, 2 * indx + 1), query(mid + 1, r, ql, qr, 2 * indx + 2));
    }

public:
    point_update_range_query() {}

    point_update_range_query(vii a){
        n = a.size();
        if(n == 0) return;  // Avoid empty vector
        arr.resize(4 * n + 5);
        build(0, n - 1, a, 0);
    }

    void update(int val, int i){
        update(val, i, 0, n - 1, 0);
    }

    int query(int l, int r){
        return query(0, n - 1, l, r, 0);
    }
};
```


Lazy propogation 

``` c++

class lazy_propogation {
    vii arr;   // Segment Tree
    vii lazy;  // Lazy Tree
    int n;

    void build(int l, int r, vii& a, int indx) {
        if (l == r) {
            arr[indx] = a[l];
            return;
        }
        int mid = (l + r) / 2;
        build(l, mid, a, 2 * indx + 1);
        build(mid + 1, r, a, 2 * indx + 2);
        arr[indx] = arr[2 * indx + 1] + arr[2 * indx + 2];
    }

    void propagate(int l, int r, int indx) {
        if (lazy[indx] != 0) {
            // Apply the pending updates to the current node
            arr[indx] += lazy[indx] * (r - l + 1);

            if (l != r) {  // Propagate to children if not a leaf
                lazy[2 * indx + 1] += lazy[indx];
                lazy[2 * indx + 2] += lazy[indx];
            }

            // Clear the lazy value for the current node
            lazy[indx] = 0;
        }
    }

    void update(int ul, int ur, int val, int l, int r, int indx) {
        propagate(l, r, indx);  // Apply any pending lazy values before proceeding

        if (ul > r || ur < l) {  // No overlap
            return;
        }
        else if (ul <= l && ur >= r) {  // Total overlap
            lazy[indx] += val;
            propagate(l, r, indx);
            return;
        }
        else {
            int mid = (l + r) / 2;
            update(ul, ur, val, l, mid, 2 * indx + 1);
            update(ul, ur, val, mid + 1, r, 2 * indx + 2);
            arr[indx] = arr[2 * indx + 1] + arr[2 * indx + 2];  // Recalculate the parent node
        }
    }

    int query(int ql, int qr, int l, int r, int indx) {
        propagate(l, r, indx);  // Apply any pending lazy values before proceeding

        if (ql > r || qr < l) {  // No overlap
            return 0;
        }
        else if (ql <= l && qr >= r) {  // Total overlap
            return arr[indx];
        }
        else {
            int mid = (l + r) / 2;
            int left_val = query(ql, qr, l, mid, 2 * indx + 1);
            int right_val = query(ql, qr, mid + 1, r, 2 * indx + 2);
            return left_val + right_val;
        }
    }

public:
    lazy_propogation() {}
    lazy_propogation(vii& a) {
        n = a.size();
        arr.resize(4 * n);
        lazy.resize(4 * n, 0);
        build(0, n - 1, a, 0);
    }

    void update(int ul, int ur, int val) {
        update(ul, ur, val, 0, n - 1, 0);
    }

    int query(int ql, int qr) {
        return query(ql, qr, 0, n - 1, 0);
    }
};

```
---
## BIT 

### Concept of Binary Indexed Tree (BIT)
A **Binary Indexed Tree (BIT)** or **Fenwick Tree** is a data structure that allows efficient updates and prefix queries on an array. It supports two operations in logarithmic time:
1. **Update**: Increment an element at a specific index.
2. **Query**: Get the sum of elements from the start of the array to a specific index.

#### Key Idea:
The structure is based on storing partial sums of the array elements in a way that allows querying and updating operations to be done in \( O(\log n) \).

### BIT Operations

1. **Update**: When we update an index, the change is propagated to other positions based on the binary representation of the index.
2. **Query**: To get the sum up to an index, the tree is traversed by removing the last set bit in the index.

### Code for BIT:

```cpp
#include <iostream>
#include <vector>
using namespace std;

// Function to update BIT
void updateBIT(vector<int> &BIT, int index, int value, int n) {
    // Index in BIT is 1 more than the actual index in the array
    index = index + 1;
    
    // Traverse all ancestors of index
    while (index <= n) {
        // Add value to current node
        BIT[index] += value;
        
        // Update index to that of parent in the update view
        index += index & (-index);
    }
}

// Function to get the sum of elements from 0 to index
int getSum(vector<int> &BIT, int index) {
    int sum = 0;
    index = index + 1; // BIT uses 1-based indexing
    
    // Traverse ancestors of index
    while (index > 0) {
        sum += BIT[index];
        index -= index & (-index); // Move to parent
    }
    return sum;
}

// Function to construct the BIT
vector<int> constructBIT(vector<int> &arr, int n) {
    vector<int> BIT(n + 1, 0); // Initialize BIT with all zeros
    
    // Initialize BIT by updating the values
    for (int i = 0; i < n; i++) {
        updateBIT(BIT, i, arr[i], n);
    }
    
    return BIT;
}

int main() {
    vector<int> arr = {1, 7, 3, 0, 2, 6, 4, 5};
    int n = arr.size();
    
    // Construct the BIT for the array
    vector<int> BIT = constructBIT(arr, n);
    
    // Example: Query for the sum from index 0 to 5
    cout << "Sum of elements from 0 to 5: " << getSum(BIT, 5) << endl;
    
    // Example: Update the element at index 3 (increment by 6)
    updateBIT(BIT, 3, 6, n);
    cout << "Updated sum of elements from 0 to 5: " << getSum(BIT, 5) << endl;
    
    return 0;
}
```

### Explanation:
1. **updateBIT**: Adds a value to a given index and updates the tree.
2. **getSum**: Fetches the sum of elements up to a given index by traversing the tree using the least significant bit.
3. **constructBIT**: Constructs the BIT based on the initial array values. 

This setup allows for efficient querying and updating, both of which take \( O(\log n) \) time.