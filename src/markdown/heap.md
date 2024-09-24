- **Priority Queue using Heap**
   - **Order Statistics** (Kth Largest/Smallest element)

## priority queue syntax 

``` c++
// priority_queue<datatype , container_in_which_you_want_to_store , comparator_class> 

#include<bits/stdc++.h>
using namespace std ;

class systum{
    public:

    bool operator ()(int a , int b){
        return (a<b) ;
    }
};
int main(){
    priority_queue<int,vector<int>, systum> pq ;
    // if we want simply want to do comparison of a>b or b>a then instead of making the 
    // class systum we can use the inbuilt stl class greater<int> , less<int>
    // greater will make the pq in decreasing and less will in increasing 
    priority_queue<int,vector<int>, greater<int>> pq1 ;

}
```
---
## Priority queue implementation

```c++
class PQ{
    vector<int> heap ;
    void heapifyDown(int index){
        int left_child = index*2 +1 ; int right_child = index*2 +2 ;
        int largest = index ;

        if(left_child<heap.size() && heap[left_child]>heap[largest]) largest = left_child ;
        if(right_child<heap.size() && heap[right_child]>heap[largest]) largest = right_child ;
        if(largest!=index){
            swap(heap[largest],heap[index]) ;
            heapifyDown(largest) ;
        }
    }
    public:

    void insert(int x){
        heap.push_back(x) ;

        // satisfying the heap property 

        int index=  heap.size()-1 ; int parent = (index-1)/2 ;

        while(heap[parent]<heap[index]){
            swap(heap[parent], heap[index]) ;
            index = parent ;
            parent =(index-1)/2 ;
        }
    }

    int get_max(){
        return heap[0] ;
    }

    int extract_max(){
        int num = heap[0] ;

        swap(heap[0],heap[heap.size() -1]) ;
        heap.pop_back() ;

        heapifyDown(0) ;
        return num ;
    }
    int size(){
        return heap.size() ;
    }
} ;
```