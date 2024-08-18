
# Disjoint Set Union (DSU) Implementation

## Overview
Disjoint Set Union (DSU), also known as Union-Find, is a data structure that helps manage and keep track of a partition of a set into disjoint (non-overlapping) subsets. It supports two main operations:
1. **Find**: Determines which subset a particular element is in. This can be used for checking if two elements are in the same subset.
2. **Union**: Merges two subsets into a single subset.

The DSU is often used in problems related to connected components, cycle detection in graphs, and more.

## Code Implementation

```cpp
#include <bits/stdc++.h>
using namespace std;

#define pb push_back
#define pob pop_back
#define fir first 
#define sec second
#define all(x) x.begin(), x.end()

typedef long long ll;
typedef vector<long long> vll;
typedef pair<long long, long long> pll;
typedef vector<pair<long long, long long>> vpll;
typedef vector<pair<int,int>> vpii;
typedef vector<int> vii;
typedef vector<vector<int>> vvii;

void print(vii& a){int n = a.size(); for(int e=0; e<n; e++) cout << a[e] << ' '; cout << endl;}

void take_vec(vii& a, int n){for(int e=0; e<n; e++){int h; cin >> h; a.push_back(h);}}

class DSU {
    private:
        vector<int> size, parent, rank;
        // parent vector tells the ultimate parent of the node
        // rank vector tells the rank of the group in which it is present 

    public:
        // Constructor
        DSU(int n) {
            parent.resize(n);
            // Initializing the parent of each node as the node itself
            for(int e=0; e<n; e++) parent[e] = e;
            size.resize(n, 1);

            // Uncomment to use rank
            // rank.resize(n, 0);
        }

        // This function returns the ultimate parent of the node x 
        // and also compresses the path
        int find(int x) {
            if(parent[x] != x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        }

        // This function unites 2 groups based on size
        void union_set(int x, int y) {
            int ulti_x = find(x);
            int ulti_y = find(y);

            if(ulti_x != ulti_y) {
                // Unite based on size
                if(size[ulti_x] >= size[ulti_y]) {
                    parent[ulti_y] = ulti_x;
                    size[ulti_x] += size[ulti_y];
                } else {
                    parent[ulti_x] = ulti_y;
                    size[ulti_y] += size[ulti_x];
                }

                // Uncomment to use rank
                /*
                if(rank[ulti_x] > rank[ulti_y]) {
                    parent[ulti_y] = ulti_x;
                } else if(rank[ulti_y] > rank[ulti_x]) {
                    parent[ulti_x] = ulti_y;
                } else {
                    parent[ulti_x] = ulti_y;
                    rank[ulti_y]++;
                }
                */
            }
        }
};

int main() {
    DSU dsu(10);
}
```

## Explanation

1. **Data Members:**
   - `parent`: Stores the parent of each node. Initially, each node is its own parent.
   - `size`: Stores the size of each component (used for union by size).
   - `rank`: (Optional) Stores the rank of each component (used for union by rank).

2. **Constructor:**
   - The constructor initializes the `parent` of each node to itself and sets the `size` of each component to 1.

3. **Find Function:**
   - The `find(int x)` function returns the root or ultimate parent of the node `x`.
   - Path compression is used to optimize the `find` operation by making nodes point directly to the root.

4. **Union Function:**
   - The `union_set(int x, int y)` function merges two components if they are different.
   - Union by size is implemented to ensure that smaller trees are attached under the root of larger trees, keeping the tree balanced.

   (Optional) The union by rank strategy can also be used, where trees are merged based on their rank, but size is generally more intuitive and effective in many cases.

## Example Usage
In the `main()` function, a DSU object is created with 10 elements. The `union_set` and `find` functions can be used to manipulate and query the disjoint sets.
