## csutom sort
``` c++

#include<bits/stdc++.h>
using namespace std ;

bool comparator_function(int a , int b){
    // we have a comes before b if we want b comes before a then return false 
    // else return true if we want the arrangement 
    return (a>b) ;
}
int main(){
    vector<int> a={1,2,3,4,5}

    sort(a.begin() ,a.end(),comparator_function) ; 
}

```
## custom set
``` c++
#include<bits/stdc++.h>
using namespace std ;

class systum{
    public:
    // operator is a keyword and () is a operator 
    // we are overloading the () operator 
    // this is how we can make the custom set map etc
    bool operator() (int a , int b){
        // if we want a comes before b return true 
        // else return false

        return (a>b) ; // it means that if a>b then we don't want to change the arrangement 
        // else we want to change the arrangement 
    }
} ;

int main(){
    // if I want to use a set with custom sort I have to do similar type of this like comparator function 
    // here I have to make the class
    set<int , systum> st ;
    
}
```
## unordered map
```c++

#include<bits/stdc++.h>
using namespace std ;

class hash_pair {
public:
    template <class T1, class T2>


    // instead of directly using pair<int,int> I used T1,T2 this is because to resue the same class 
    // if I have pair<string,int> i can use the same class 
    // if you don't want just remove the tamplate and inplace of T1, T2 write int ,int
    size_t operator()(const pair<T1, T2>& p) const {
        auto hash1 = hash<T1>{}(p.first);
        auto hash2 = hash<T2>{}(p.second);
        return hash1 ^ hash2; // Combine the two hash values
    }
};


int main(){
    
    unordered_map<pair<int,int>,int,systum> st ;
    // here systum is used to generate the key 
    
}

```

## concept of namespace and tamplete (Learn it in OOPs)

---

## set implementation

## map implementation



how the pointer works in unorderd set , binary search in unordered map and then do it++ will it work or not https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/



int i = lower_bound(indx.begin() ,indx.end() , idx) -indx.begin() ;
if indx is set the subtracting iterator is not allowed


working of hash map