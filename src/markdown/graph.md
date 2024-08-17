# what to do in graph 
1. ~~DFS~~
2. ~~BFS~~
3. ~~CYCLE DETECTION IN UNDIRECTED (USING BFS AND DFS)~~
4. ~~BIPARTITE GRAPH (DFS , BFS)~~
5. ~~CYCLE DETECTION IN DIRECTED (DFS, BFS)~~
6. ~~TOPOLOGICAL SORT ALGO (DFS,BFS)~~
7. ~~DIJKSTRA ALGO~~
8.  ~~BELLMAN FORD ALGO~~
9.  ~~FLOYD WARSHALL~~
10. ~~MINIMUM SPANNING TREE (PRIM'S ALGO)~~
11. ~~MINIMUM SPANNING TREE (KRUSKAL'S ALGO)~~
12. ~~KOSARAJU ALGO (STRONGLY CONNECTED COMPONENT)~~
13. ~~TARJAN'S ALGO (CRITICAL CONNECTION)~~
14. ~~HAMILTONIAN PATH~~


# Summary

## Note
1. Detection of cycle in directed graph
   Just do dfs travesal and when you go in put visi =1 and when you move out put visi = -1 
   if you find some node is visited with visi =1 it means this is cycle else not a cycle.

# Graph Algorithms

## 1. Depth First Search (DFS)
- **Description**: DFS is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It's commonly used for tasks like topological sorting, finding connected components, and detecting cycles.
- **Approach**:
  1. Start from a selected node (usually the root) and mark it as visited.
  2. Recursively visit all adjacent unvisited nodes from the current node.
  3. After visiting all adjacent nodes, backtrack to the previous node and continue the traversal.
  4. Repeat the process until all nodes are visited.
  5. The DFS can be implemented using recursion or an explicit stack.
- **Complexity**:
  - Time Complexity: \(O(V + E)\), where \(V\) is the number of vertices and \(E\) is the number of edges.
  - Space Complexity: \(O(V)\) for the recursion stack in the worst case.

## 2. Breadth First Search (BFS)
- **Description**: BFS is a graph traversal algorithm that explores all the vertices at the present depth level before moving on to nodes at the next depth level. It's useful for finding the shortest path in unweighted graphs.
- **Approach**:
  1. Start from a selected node (usually the root) and mark it as visited.
  2. Initialize a queue and enqueue the starting node.
  3. Dequeue a node from the front of the queue, and visit all its adjacent unvisited nodes, marking them as visited and enqueueing them.
  4. Continue this process until the queue is empty, ensuring all nodes are visited level by level.
  5. BFS can also be used to check for bipartiteness, shortest path in an unweighted graph, and more.
- **Complexity**:
  - Time Complexity: \(O(V + E)\)
  - Space Complexity: \(O(V)\) for the queue.

## 3. Cycle Detection in Undirected Graph (Using BFS and DFS)
- **Description**: Detects the presence of a cycle in an undirected graph using BFS and DFS. A cycle in an undirected graph occurs if there is a path from a node back to itself without repeating any edge.
- **Approach**:
  1. **DFS Method**:
     - Start DFS from an unvisited node and mark it as visited.
     - Track the parent of each node to ensure that when revisiting a node, it's not revisited through the same path (not via its parent).
     - If a visited node is encountered and it's not the parent, a cycle is detected.
  2. **BFS Method**:
     - Use a queue to implement BFS and track the parent of each node.
     - If a node is revisited and the revisited node is not the parent, then a cycle is present.
     - This method also detects cycles by checking nodes during BFS traversal.
- **Complexity**:
  - Time Complexity: \(O(V + E)\)
  - Space Complexity: \(O(V)\)

## 4. Bipartite Graph (DFS, BFS)
- **Description**: A graph is bipartite if the vertices can be divided into two independent sets such that every edge connects a vertex in one set to a vertex in the other set. This can be checked using DFS or BFS.
- **Approach**:
  1. **DFS/BFS Method**:
     - Start from any node, assign it a color (e.g., 0 or 1).
     - Assign the opposite color to all adjacent nodes.
     - If an adjacent node has the same color as the current node, the graph is not bipartite.
     - Continue the process until all nodes are colored or a conflict is found.
     - Use DFS or BFS to traverse the graph and check for color conflicts.
- **Complexity**:
  - Time Complexity: \(O(V + E)\)
  - Space Complexity: \(O(V)\)

## 5. Cycle Detection in Directed Graph (DFS, BFS)
- **Description**: Detects if there is a cycle in a directed graph. In directed graphs, a cycle occurs if there is a path from a node back to itself following the direction of edges.
- **Approach**:
  1. **DFS Method**:
     - Use a recursion stack to keep track of nodes currently in the DFS path.
     - If a node is revisited and is still in the recursion stack, a cycle is detected.
     - Mark nodes when they are fully processed to avoid false positives.
  2. **BFS (Kahn's Algorithm)**:
     - Count the in-degrees of all nodes.
     - Use BFS and process nodes with zero in-degree.
     - Reduce in-degrees of connected nodes as you process them.
     - If at the end there are still nodes with non-zero in-degrees, a cycle exists.
- **Complexity**:
  - Time Complexity: \(O(V + E)\)
  - Space Complexity: \(O(V)\)

## 6. Topological Sort (DFS, BFS)
- **Description**: A topological sort is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge \(uv\), vertex \(u\) comes before \(v\) in the ordering.
- **Approach**:
  1. **DFS Method**:
     - Perform DFS and push nodes onto a stack only after all its adjacent nodes are visited.
     - Pop nodes from the stack to get the topological order.
  2. **BFS Method (Kahn's Algorithm)**:
     - Count the in-degrees of all nodes.
     - Use BFS to process nodes with zero in-degree.
     - As you process a node, append it to the topological order and reduce the in-degrees of its adjacent nodes.
     - Continue until all nodes are processed.
- **Complexity**:
  - Time Complexity: \(O(V + E)\)
  - Space Complexity: \(O(V)\)

## 7. Dijkstra's Algorithm
- **Description**: Dijkstra's algorithm finds the shortest path from a single source node to all other nodes in a weighted graph with non-negative weights.
- **Approach**:
  1. Initialize the distance to the source node as 0 and all other nodes as infinity.
  2. Use a priority queue to greedily select the node with the smallest known distance.
  3. Update the distance to all adjacent nodes if a shorter path is found via the selected node.
  4. Repeat until all nodes are processed and their shortest distances from the source are determined.
- **Complexity**:
  - Time Complexity: \(O((V + E) \log V)\)
  - Space Complexity: \(O(V + E)\)

## 8. Bellman-Ford Algorithm
- **Description**: The Bellman-Ford algorithm computes the shortest paths from a single source vertex to all other vertices in a weighted graph, even if some of the edge weights are negative.
- **Approach**:
  1. Initialize the distance to the source node as 0 and all other nodes as infinity.
  2. For each vertex, repeatedly relax all the edges \(V-1\) times, updating the shortest paths found.
  3. After \(V-1\) iterations, check for negative weight cycles by trying to relax the edges one more time.
  4. If any edge can still be relaxed, the graph contains a negative weight cycle.
- **Complexity**:
  - Time Complexity: \(O(V \times E)\)
  - Space Complexity: \(O(V)\)

## 9. Floyd-Warshall Algorithm
- **Description**: The Floyd-Warshall algorithm finds the shortest paths between all pairs of vertices in a weighted graph, and works with both positive and negative weights.
- **Approach**:
  1. Initialize a distance matrix using the adjacency matrix of the graph.
  2. For each pair of vertices, check if there is a shorter path through another vertex. Update the distance matrix accordingly.
  3. Repeat the above step for all possible intermediate vertices.
  4. The final distance matrix will contain the shortest distances between all pairs of vertices.
- **Complexity**:
  - Time Complexity: \(O(V^3)\)
  - Space Complexity: \(O(V^2)\)

## 10. Minimum Spanning Tree (Prim's Algorithm)
- **Description**: Prim's algorithm finds a minimum spanning tree (MST) for a connected weighted graph, ensuring that the total weight of the tree is minimized.
- **Approach**:
  1. Start with an arbitrary node and mark it as part of the MST.
  2. Use a priority queue to select the smallest edge connecting a node in the MST to a node outside it.
  3. Add the selected edge to the MST and mark the connected node as part of the MST.
  4. Repeat until all nodes are included in the MST.
- **Complexity**:
  - Time Complexity: \(O((V + E) \log V)\)
  - Space Complexity: \(O(V)\)

## 11. Minimum Spanning Tree (Kruskal's Algorithm)
- **Description**: Kruskal's algorithm is used to find the Minimum Spanning Tree (MST) of a connected, undirected graph. The MST is a subset of the edges that connect all vertices together, without any cycles, and with the minimum possible total edge weight.
- **Approach**:
  1. Sort all the edges of the graph by their weight in non-decreasing order.
  2. Initialize an empty set for the MST.
  3. Iterate over the sorted edges and for each edge, check if adding it to the MST will form a cycle:
     - Use a disjoint-set (union-find) data structure to keep track of which vertices are in the same connected component.
     - If the current edge connects two different components, add it to the MST.
     - If it forms a cycle, skip it.
  4. Continue the process until the MST includes \(V-1\) edges, where \(V\) is the number of vertices in the graph.
- **Complexity**:
  - Time Complexity: \(O(E \log E)\), where \(E\) is the number of edges (due to sorting).
  - Space Complexity: \(O(V)\) for the disjoint-set structure.

## 12. Kosaraju's Algorithm (Strongly Connected Components)
- **Description**: Kosaraju's algorithm is used to find all the Strongly Connected Components (SCCs) in a directed graph. An SCC is a maximal subgraph where any two vertices are reachable from each other.
- **Approach**:
  1. Perform a DFS on the graph and store the vertices in a stack according to their finish times (i.e., the time when the DFS completes for a node).
  2. Reverse the direction of all edges in the graph to get the transpose graph.
  3. While the stack is not empty, pop a vertex and perform DFS on the transpose graph, starting from the popped vertex:
     - Each DFS call on the transpose graph will give you one strongly connected component.
  4. Continue until all vertices are processed.
- **Complexity**:
  - Time Complexity: \(O(V + E)\)
  - Space Complexity: \(O(V)\)

## 13. Tarjan's Algorithm (Critical Connections)
- **Description**: Tarjan's algorithm is used to find bridges (critical connections) in a graph. A bridge is an edge which, when removed, increases the number of connected components in the graph.
- **Approach**:
  1. Perform DFS and assign a discovery time to each vertex.
  2. For each vertex, maintain the lowest discovery time reachable from the vertex, considering both its descendants and back edges.
  3. During DFS, if a vertex's lowest reachable discovery time from its child is greater than the discovery time of the vertex itself, then the edge between the vertex and the child is a bridge.
  4. Continue the DFS traversal until all vertices are visited.
- **Complexity**:
  - Time Complexity: \(O(V + E)\)
  - Space Complexity: \(O(V)\)

## 14. Hamiltonian Path
- **Description**: A Hamiltonian Path is a path in an undirected or directed graph that visits each vertex exactly once. Unlike the Eulerian path, which involves every edge exactly once, the Hamiltonian path concerns itself with vertices.
- **Approach**:
  1. There is no known polynomial-time algorithm to find a Hamiltonian Path; hence, it is usually solved using backtracking.
  2. Start from any vertex and explore all possible paths, marking vertices as visited.
  3. Recur for all adjacent vertices that are not yet visited.
  4. If the path includes all vertices, then a Hamiltonian Path exists.
  5. Backtrack when no further vertices can be added to the current path, and continue exploring other possibilities.
- **Complexity**:
  - Time Complexity: Exponential \(O(N!)\) in the worst case, where \(N\) is the number of vertices.
  - Space Complexity: \(O(N)\) for the recursion stack.
