1. kadane's algo (sum and product) 
2. moore's voting algo
3. KMP algo /z-algo / perfect prefix and suffix
4. [Rabin Karp algo](https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/blob/main/lectures/25-hashmaps/notes/KarpRabin.pdf)
5. [Manacher's Algo](https://cp-algorithms.com/string/manacher.html)


# Array 


## A. Kadane's Algorithm

### 1. Maximum Sum Subarray

**Key Idea**:  
- Initialize `temp = 0` to store the current subarray sum.
- Iterate over the array and add elements to `temp`.  
- If `temp` becomes negative, reset it to `0`.
- After each addition, update `ans = max(ans, temp)`.

**Example**:  
For `arr = [1, -2, 5, -7, 5, 5, 8]`, the steps would be:
```cpp
arr    = [1, -2, 5, -7, 5, 5, 8]
temp   = [1, 0, 5, 0, 5, 10, 18]
ans    = 18
```

### 2. Maximum Product Subarray

**Key Idea**:  
- Initialize `temp = 1`. Iterate through the array, multiplying elements with `temp`.  
- After each multiplication, update `ans = max(ans, temp)`.  
- If `temp` becomes `0`, reset `temp = 1`.  
- Reverse the array and repeat the same process.

**Example**:  
For `arr = [1, -2, 5, -7, 5, 5, 8]`, you will calculate twice (original and reversed):

```cpp
arr (forward)   = [1, -2, 5, -7, 5, 5, 8]
temp (forward)  = [1, -2, 5, -35, -175, -875, -7000]
ans (forward)   = 5
arr (reversed)  = [8, 5, 5, -7, 5, -2, 1]
temp (reversed) = [8, 40, 200, -1400, -7000, 14000]
ans (reversed)  = 200
```

Final `ans = 200`.



## B. Moore's Voting Algorithm
   Note:(try solving the question with tries)

### 1. Majority Element (n/2)
**Key Idea**:  
- The problem is to find the element that appears more than `n/2` times.
- First, find a **candidate** using the Boyer-Moore Voting Algorithm. Initialize `count = 0` and `candidate = None`.
- Iterate through the array:
  - If `count == 0`, set `candidate = arr[i]`.
  - If `arr[i] == candidate`, increment `count`, else decrement it.
- After finding the candidate, **verify** if it appears more than `n/2` times.

**Example**:  
For `arr = [3, 1, 3, 3, 2, 3, 3]`:
```cpp
arr       = [3, 1, 3, 3, 2, 3, 3]
candidate = 3
count     = 4 (valid, as 3 appears more than n/2 times)
```

### 2. Elements Appearing More Than n/3 Times
**Key Idea**:  
- The problem is to find all elements that appear more than `n/3` times. At most, there can be **two such elements**.
- First, find **two candidates** using a modified Boyer-Moore Voting Algorithm.
  - Initialize `count1 = 0, count2 = 0`, and `candidate1 = None, candidate2 = None`.
  - Iterate through the array:
    - If `arr[i] == candidate1`, increment `count1`.
    - Else if `arr[i] == candidate2`, increment `count2`.
    - Else if `count1 == 0`, set `candidate1 = arr[i]` and `count1 = 1`.
    - Else if `count2 == 0`, set `candidate2 = arr[i]` and `count2 = 1`.
    - Otherwise, decrement both `count1` and `count2`.
- After finding the candidates, **verify** if they appear more than `n/3` times.

**Example**:  
For `arr = [1, 2, 3, 1, 1, 2, 1, 2, 3, 3]`:
```cpp
arr        = [1, 2, 3, 1, 1, 2, 1, 2, 3, 3]
candidate1 = 1
candidate2 = 2
count1     = 4 (valid, as 1 appears more than n/3 times)
count2     = 3 (valid, as 2 appears more than n/3 times)
```

Final result: `1, 2`.

---

# String 


## C. Perfect Prefix and Suffix

### Explanation

Let the string be `s = "abcababcabc"`.  
We need to create a `dp[]` array where `dp[i]` tells us the length of the longest proper prefix of the string `s[0..i]` which is also a suffix.

### Steps

1. **Initialization**:  
   Take two integers `i = 0` and `j = 1`, and set `dp[0] = 0`.  
   - `dp[0] = 0` because the first character cannot have any prefix-suffix match.
   
2. **Iterating Over the String**:  
   Now, we check for each `j` starting from `j = 1`:
   
   - If `s[i] == s[j]`, set `dp[j]=i `.(Think logically with the example string )
   - Else, we need to find the value of `dp[j]`.

3. **Understanding dp[]**:  
   The `dp[]` array has special features:
   - `dp[i-1] = x` tells us that the first `x` elements (`s[0..x-1]`) are the same as the last `x` elements of the substring `s[0..i-1]`.

4. **When `s[i] != s[j]`**:  
   If `s[i] != s[j]`, we need to backtrack by setting `i = dp[i-1]`.
   
   - **Why?**  
     When there's a mismatch, we reduce `i` to `dp[i-1]` because we are looking for the longest prefix that can still match a suffix up to `i-1`. We are essentially trying to extend this prefix further.

### Example Walkthrough

Let's walk through the steps for `s = "abcababcabc"`.

1. We want to fill `dp[10]`.  
   - Till `j = 9`, we have the prefix and suffix as `"abcab"`.

   ```
   abcababcabc
   -----      (Prefix)
        ----- (Suffix)
   ```

2. At `j = 10` and `i=5`, `s[10] != s[5]`, we must say that `dp[10] <= dp[9]` but not greater.
   To calculate, we reduce `i = dp[i-1]=dp[4]=answer of subarray(abcab)`.  
   - We set `i = dp[4] = 2` (because `dp[4] = 2`).

3. Check if `s[2] == s[10]`.  
   - If yes, set `dp[10] = ++i=3`.  
   - If not, continue reducing `i` by setting `i = dp[i-1]` and repeat until `i > 0`.

   In this case, we continue the while loop until a match is found or `i = 0`.
   if we do not found the match that then go to next iteration

### Final dp[] Array

For `s = "abcabdabc"`, the final `dp[]` array would look like this:

```
s     = a b c a b a b c a b c 
dp[]  = 0 0 0 1 2 1 2 3 4 5 2
```
---


## D. Z-Algorithm

### Purpose
The Z-algorithm finds the starting indices of occurrences of a pattern `p` in a string `s`.

### Steps
1. **Concatenate Strings**:  
   Create a new string `t = p + "#" + s`. The `#` acts as a separator to avoid overlaps between the pattern and the string.
   
2. **Apply Z-Algorithm**:  
   Compute the Z-array for the string `t`. The Z-array indicates the length of the longest substring starting from `i` which is also a prefix of `t`.
   
3. **Extract Indices**:  
   The occurrences of `p` in `s` can be found by checking where the values in the Z-array (after the `#` separator) are equal to the length of `p`.

### Example
- Let `s = "abcabcabc"` and `p = "abc"`.

1. Create `t`:
   ```
   t = "abc#abcabcabc"
   ```

2. Compute the Z-array:
   ```
   Z = [0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 3]
   ```

3. Find occurrences of `p`:
   - Look at the Z-array from index 4 onward:
     - `Z[4] = 3` (matches length of `p`)
     - `Z[7] = 3` (matches length of `p`)
     - `Z[10] = 3` (matches length of `p`)

   **Occurrences**: `2, 5, 8` (0-based index)

### Space Complexity
- `SC = len(p) + len(s)`

---

## E. KMP Algorithm

### Purpose
The KMP algorithm also finds the starting indices of occurrences of a pattern `p` in a string `s`, but does so more efficiently by using the prefix function.

### Steps
1. **Compute Prefix Table**:  
   Construct a prefix table (or LPS array) for the pattern `p`. This table contains the lengths of the longest proper prefix which is also a suffix for each prefix of `p`.

2. **Initialization**:  
   Set `i = 0` for the pattern and `j = 0` for the text.

3. **Iterate Through Text**:  
   Use the prefix table to avoid unnecessary comparisons:
   - If characters match (`s[j] == p[i]`), increment both `i` and `j`.
   - If they don’t match and `i > 0`, set `i = lps[i-1]`.
   - If there is a match and `i` reaches the length of `p`, record the index of occurrence.

### Example
- Let `s = "abcabcabc"` and `p = "abc"`.

1. Compute the LPS (Longest Prefix Suffix) array for `p`:
   ```
   LPS = [0, 0, 0]
   ```

2. Initialize `i = 0` (pattern index) and `j = 0` (text index).

3. Iterate through `s`:
   - Match: `s[0] = 'a'`, `p[0] = 'a'` → `i++, j++`
   - Match: `s[1] = 'b'`, `p[1] = 'b'` → `i++, j++`
   - Match: `s[2] = 'c'`, `p[2] = 'c'` → `i++, j++`
   - **Found an occurrence** at index `j - i = 0` → Record `0`.
   - Set `i = lps[i-1]` (backtrack to find next match).
   - Continue iterating through `s`.

   **Occurrences**: `0, 3, 6` (0-based index)

### Space Complexity
- `SC = len(p)`

---

## F. Rabin Karp algo

1. It is simple Here we will do hasing of string and match the hash.
2. If hash of pattern and the substring is same then we have to check that the substring is pattern or not(it will taken O(n)) 
3. Note : If the hash is not same then sub string is definately not a pattern but if same then the probability that it is not the pattern is 1/len(pattern)
4. avg case TC is O(N) and wrost case is O(N*M)
5. Calculate the initial hash value for the pattern:

    Iterate over each character in the pattern from left to right.
    For each character ‘c’ at position ‘i’, calculate its contribution to the hash value as ‘c * (b^(pattern_length – i – 1)) % p’ and add it to ‘hash‘. p is any constant prime number 

---

## G. Manacher's Algo 


## Manacher's Algorithm

Manacher's algorithm finds all the sub-palindromes with odd lengths, specifically calculating the array \( d_{odd}[] \).

### Initialization

1. **Set Borders**:  
   Maintain the borders \( (l, r) \) of the rightmost found sub-palindrome.  
   Initialize with \( l = 0 \) and \( r = 1 \), corresponding to the empty string.

### Calculation of \( d_{odd}[i] \)

To calculate \( d_{odd}[i] \) for each position \( i \):

1. **If \( i \) is Outside the Current Sub-Palindrome**:  
   If \( i \geq r \), launch the trivial algorithm:
   - Increase \( d_{odd}[i] \) consecutively and check if the substring \( [i - d_{odd}[i], i + d_{odd}[i]] \) is a palindrome.
   - Stop upon the first mismatch or when boundaries of \( s \) are reached.
   - Update \( (l, r) \) after calculating \( d_{odd}[i] \), where \( r \) should represent the last index of the current rightmost sub-palindrome.

2. **If \( i \leq r \)**:  
   Try to extract information from already calculated values in \( d_{odd}[] \):
   - Calculate the "mirror" position \( j = l + (r - i) \) and check \( d_{odd}[j] \).
   - Assign \( d_{odd}[i] = d_{odd}[j] \) based on symmetry about \( (l + r) / 2 \).

### Handling Special Cases

- **Tricky Case**:  
   If \( j - d_{odd}[j] \leq l \) (or \( i + d_{odd}[j] \geq r \)):
   - It indicates that the symmetry outside the "outer" palindrome is not guaranteed.
   - Assign \( d_{odd}[i] = r - i \) to restrict the length of the palindrome.

- **Trivial Algorithm**:  
   After assigning \( d_{odd}[i] \), run the trivial algorithm to attempt to increase \( d_{odd}[i] \) while possible.

Here’s the section with the illustrations formatted correctly for markdown:


### Illustrations

1. **Normal Case**:  
   When the palindrome around \( j \) is symmetrical:
   \(\ldots\ \overbrace{ s_{l+1}\ \ldots\ \underbrace{ s_{j-d_{odd}[j]+1}\ \ldots\ s_j\ \ldots\ s_{j+d_{odd}[j]-1}\ }_\text{palindrome}\ \ldots\ \underbrace{ s_{i-d_{odd}[j]+1}\ \ldots\ s_i\ \ldots\ s_{i+d_{odd}[j]-1}\ }_\text{palindrome}\ \ldots\ s_{r-1}\ }^\text{palindrome}\ \ldots\)

2. **Restricted Case**:  
   When the inner palindrome reaches the borders of the outer one:
   \(\ldots\ \overbrace{ \underbrace{ s_{l+1}\ \ldots\ s_j\ \ldots\ s_{j+(j-l)-1}\ }_\text{palindrome}\ \ldots\ \underbrace{ s_{i-(r-i)+1}\ \ldots\ s_i\ \ldots\ s_{r-1} }_\text{palindrome}\ }^\text{palindrome}\ \underbrace{ \ldots \ldots \ldots \ldots \ldots }_\text{try moving here}\)


Feel free to let me know if you need any other adjustments!
### Conclusion

Update the values \( (l, r) \) after calculating each \( d_{odd}[i] \) to ensure accurate tracking of the rightmost palindrome.
