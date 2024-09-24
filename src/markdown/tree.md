1. Binary Search Tree (BST) Operations (Insert, Delete, Search)
2. **Lowest Common Ancestor**
4. **Height Balanced Trees (AVL Trees)**
5. morries traversal

## Types of tree

Here are a few types of trees for your revision:

1. **Complete Binary Tree**:  
   Every level of the tree is fully filled, except possibly for the last, which is filled from the left.
   ```
       1
      / \
     2   3
    / \ 
   4   5
   ```

2. **Full Binary Tree**:  
   Every node has either 0 or 2 children, ensuring the tree is "full" at every level.
   ```
       1
      / \
     2   3
    / \
   4   5
   ```

3. **Perfect Binary Tree**:  
   All internal nodes have two children, and all leaves are at the same level.
   ```
       1
      / \
     2   3
    / \ / \
   4  5 6  7
   ```

4. **Balanced Binary Tree**:  
   The height difference between the left and right subtrees for every node is at most one.
   ```
       1
      / \
     2   3
    /     \
   4       5
   ```

5. **Binary Search Tree (BST)**:  
   The left child of a node has a smaller value, and the right child has a larger value.
   ```
       5
      / \
     3   7
    / \   \
   2   4   8
   ```

6. **AVL Tree**:  

   An AVL tree is a type of self-balancing binary search tree where the height difference between the left and right subtrees of any node is at most one. This ensures that the tree remains balanced and maintains O(log n) time complexity for operations like search, insert, and delete.

   Diagram:

   ```
         30
        /  \
      20    40
     /      /  
   10      35   
   ```

   Here, the difference in heights of subtrees of every node is at most 1.
   The difference in height of 1 between the left and right subtrees in an AVL tree (called the **balance factor**) ensures that the tree remains balanced. This balance is important for the following reasons:

   1. **Efficient Search, Insert, and Delete**:  
   A balanced tree ensures that operations such as search, insert, and delete have a time complexity of **O(log n)**. If the tree becomes unbalanced (i.e., if the height difference is more than 1), these operations can degrade to **O(n)**, as in the case of a skewed binary tree.

   2. **Prevents Skewing**:  
   Without balancing, a tree could degenerate into a linked list if every node only has one child, which would make search operations inefficient. The height balance in AVL trees ensures that this doesn’t happen.

---
## Lowest Common Ancestor

1. If there is a question of query a,b and find ancesters then the wrost case TC is O(n) to find LCA so for that case you have to find the 2^i ancestors of all the node and store them in a array then jump with 2 factors and find LCA in log(n)

``` c++
void fillancester(int root, vvii &list , vvii &ancesters){
// before calling  the function create this in main func
    // vvii ancesters ; 

    //initializing
    int n=list.size() ; // number of node
    int k = log2(n) +1 ;
    vii temp(k,-1) ;
    ancesters.assign(n,temp) ;
    vii parent(n,-2) ;parent[root]=-1 ;
    dfs(root,list,parent) ;


    // finding 2^i th ancester
    for(int e=0 ;e<n ;e++) ancesters[e][0]=parent[e] ;

    for(int e=1 ;e<k ;e++){

        for(int f=0 ;f<n ;f++){

            int prev =ancesters[f][e-1] ;
            if(prev!=-1)ancesters[f][e] =ancesters[prev][e-1] ;
        }
    }

}

int LCA(int root,int a,int b , vvii&ancesters,vvii&list){
    int n = ancesters.size() ;
    
    vii level(n,-1) ; // level means depth
    bfs(root,list,level) ;

    if(level[a]<level[b]){
        swap(a,b) ;
    }
    int diff = level[a]-level[b] ;
    // making a to same level

    while(diff>0){
        int i = log2(diff) ;
        a= ancesters[a][i];
        diff-=binpow(2,i,primeInt2) ;
    }

    if(a==b)return a ;
    int m = ancesters[0].size() ;// =log2(n)+1
    for (int i=m-1;i>=0;i--) {
        if (ancesters[a][i]!=-1 &&ancesters[a][i]!=ancesters[b][i]) {
            a=ancesters[a][i];
            b=ancesters[b][i];
        }
    }
    if (a!=b) return ancesters[a][0];
    else return a;
}



int main(){
    int node ;
    cin>>node ;
    int m;
    cin>>m;
    vvii list(n) ;
    for(int e=0 ;e<m;e++){
        int h,k;
        cin>>h>>k ;
        list[h].pb(k) ;
        list[k].pb(h) ;
    }
    
    
    vvii ancesters ; 
    fillancester(0,list,ancesters) ;

    int a,b ;
    cin>>a>>b ;
    cout<<LCA(0,a,b,ancester) ;
}
```

---
## Morries Traversal

Morris Traversal is a tree traversal algorithm that allows in-order traversal of a binary tree **without using extra space** (i.e., no recursion or stack). It modifies the tree during the traversal by setting right child pointers to in-order successors and then restores the tree to its original structure.

### Code for Morris Inorder Traversal:

```cpp
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;

    Node(int val) {
        data = val;
        left = right = nullptr;
    }
};

// Morris Inorder Traversal
void morrisTraversal(Node* root) {
    Node* current = root;

    while (current != nullptr) {
        // Case 1: If the current node has no left child
        if (current->left == nullptr) {
            cout << current->data << " "; // Print the current node
            current = current->right;     // Move to the right subtree
        }
        else {
            // Find the inorder predecessor of the current node
            Node* predecessor = current->left;
            while (predecessor->right != nullptr && predecessor->right != current) {
                predecessor = predecessor->right;
            }

            // Case 2: If the predecessor's right is null, link it to the current node
            if (predecessor->right == nullptr) {
                predecessor->right = current; // Create the link
                current = current->left;      // Move to the left subtree
            }
            // Case 3: If the predecessor's right is the current node, restore tree
            else {
                predecessor->right = nullptr; // Restore the tree
                cout << current->data << " "; // Print the current node
                current = current->right;     // Move to the right subtree
            }
        }
    }
}

// Helper function to create a binary tree
Node* createSampleTree() {
    Node* root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->left = new Node(4);
    root->left->right = new Node(5);
    return root;
}

int main() {
    Node* root = createSampleTree();
    cout << "Morris Inorder Traversal: ";
    morrisTraversal(root);
    return 0;
}
```

### Explanation:
1. **Case 1**: If the current node has no left child, print its value and move to the right child.
2. **Case 2**: If the current node has a left child, find its in-order predecessor (rightmost node in the left subtree). If the predecessor’s right pointer is `nullptr`, link it to the current node and move to the left child.
3. **Case 3**: If the predecessor’s right pointer already points to the current node, this indicates a cycle. Break the link, print the current node, and move to the right child.

### Time Complexity:
- **O(n)**, where n is the number of nodes in the tree.

### Space Complexity:
- **O(1)** (no additional space for recursion or stack).