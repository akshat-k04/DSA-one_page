
# Trie Data Structure Implementation

## Overview
A Trie, also known as a prefix tree, is a tree-like data structure used to store a dynamic set of strings, where keys are usually strings. Tries are commonly used for tasks like autocomplete, spell checking, and searching for words or prefixes efficiently.

## Node Structure

The `Node` structure represents each node in the Trie. Each node contains:
- `links`: An array of pointers to child nodes, each representing a letter.
- `flag`: A boolean indicating whether the node marks the end of a word.

### Code

```cpp
#include <iostream>
using namespace std;

// Node structure for Trie
struct Node {
    vector<Node *> links;

    Node() {
        for(int e=0 ;e<26 ;e++) links.push_back(nullptr);
    }

    // Alternative constructor to initialize links
    // Node() : links(26, nullptr) {}

    bool flag = false;

    // Check if a particular key (letter) exists in the node
    bool containsKey(char ch) {
        return links[ch - 'a'] != NULL;
    }

    // Insert a new node with the given key (letter)
    void put(char ch) {
        links[ch - 'a'] = new Node();
    }

    // Retrieve the node corresponding to the given key (letter)
    Node* get(char ch) {
        return links[ch - 'a'];
    }

    // Mark this node as the end of a word
    void setEnd() {
        flag = true;
    }

    // Check if this node marks the end of a word
    bool isEnd() {
        return flag;
    }
};
```

### Explanation

- **links:** An array of 26 pointers (for each letter of the alphabet) to the child nodes. This enables navigation through the Trie.
- **flag:** Marks whether the current node represents the end of a valid word in the Trie.

## Trie Class

The `Trie` class provides an interface to interact with the Trie. It supports inserting words, searching for complete words, and checking for prefixes.

### Code

```cpp
// Trie class
class Trie {
private:
    Node* root;

public:
    // Constructor to initialize the Trie with an empty root node
    Trie() {
        root = new Node();
    }

    // Insert a word into the Trie
    // Time Complexity: O(len) where len is the length of the word
    void insert(string word) {
        Node* node = root;
        for (int i = 0; i < word.length(); i++) {
            if (!node->containsKey(word[i])) {
                node->put(word[i]);
            }
            node = node->get(word[i]);
        }
        node->setEnd();
    }

    // Check if the word is present in the Trie
    bool search(string word) {
        Node* node = root;
        for (int i = 0; i < word.length(); i++) {
            if (!node->containsKey(word[i])) {
                return false;
            }
            node = node->get(word[i]);
        }
        return node->isEnd();
    }

    // Check if there is any word in the Trie that starts with the given prefix
    bool startsWith(string prefix) {
        Node* node = root;
        for (int i = 0; i < prefix.length(); i++) {
            if (!node->containsKey(prefix[i])) {
                return false;
            }
            node = node->get(prefix[i]);
        }
        return true;
    }
};
```

### Explanation

- **insert(word):** Inserts a word into the Trie, creating new nodes as needed.
- **search(word):** Searches for a complete word in the Trie.
- **startsWith(prefix):** Checks if any word in the Trie starts with the given prefix.

## Example Usage

```cpp
int main() {
    Trie trie;
    cout << "Inserting words: Striver, Striving, String, Strike" << endl;
    trie.insert("striver");
    trie.insert("striving");
    trie.insert("string");
    trie.insert("strike");
    
    cout << "Search if Strawberry exists in Trie: " <<
    (trie.search("strawberry") ? "True" : "False")<< endl;
    
    cout << "Search if Strike exists in Trie: " <<
   ( trie.search("strike") ? "True" : "False" )<< endl;
    
    cout << "If words in Trie start with Stri: " <<
    (trie.startsWith("stri") ? "True" : "False" )<< endl;

    return 0;
}
```

### Output

```
Inserting words: Striver, Striving, String, Strike
Search if Strawberry exists in Trie: False
Search if Strike exists in Trie: True
If words in Trie start with Stri: True
```

### Key Points

- The `insert` operation has a time complexity of O(len), where `len` is the length of the word being inserted.
- The `search` and `startsWith` operations also have a time complexity of O(len).
- The Trie is case-sensitive and works for lowercase English letters (a-z).
```

This markdown format includes the code, explanations, and examples to facilitate a clear understanding of Trie data structures.