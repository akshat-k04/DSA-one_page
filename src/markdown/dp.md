- **Knapsack Problem (0/1 Knapsack, Unbounded Knapsack)**
   - **Longest Common Subsequence (LCS)**
   - **Longest Increasing Subsequence (LIS)**
   - **Matrix Chain Multiplication**
   - **Coin Change Problem**
   - **Subset Sum Problem**
   - **Rod Cutting Problem**
   - **Egg Dropping Problem**
   - **Fibonacci Series**
   - **Minimum Path Sum in a Grid**
   - **Edit Distance**
   - **Partition Problem**
   - **Palindromic Subsequence and Substring**


### 1. **1D DP**
   - **Key Idea**: Define a `dp[i]` array where `dp[i]` represents the best solution to a problem up to index `i`. The value at each index depends on previous states.
   - **Example**: **Climbing Stairs**: You can climb 1 or 2 steps at a time. To find the number of ways to reach the top of `n` stairs, use `dp[i] = dp[i-1] + dp[i-2]`, where `dp[i]` is the number of ways to reach the `i-th` stair.

### 2. **2D DP**
   - **Key Idea**: Use a `dp[i][j]` table where `i` and `j` represent different dimensions (e.g., rows and columns). The solution at each cell depends on its neighboring cells.
   - **Example**: **Unique Paths**: Find the number of unique paths in an `m x n` grid from the top-left to the bottom-right corner. You can only move right or down. `dp[i][j]` stores the number of paths to cell `(i, j)` and is computed as `dp[i-1][j] + dp[i][j-1]`.

### 3. **3D DP**
   - **Key Idea**: Extend 2D DP to three dimensions, adding an extra layer of complexity, often due to additional constraints.
   - **Example**: **Knapsack with Volume Constraint**: You have items with weight and volume. `dp[i][j][k]` represents the maximum value you can achieve using the first `i` items, with `j` weight and `k` volume. Update based on whether to include or exclude the current item.


### 4. **DP on Subsequence**
   - **Key Idea**: Focus on selecting subsequences by considering choices at each index. Use `dp[i][j]` to store solutions for subsequences up to index `i` in one sequence and `j` in another.
   - **Example**: **Longest Common Subsequence (LCS)**: For two strings, find the length of their longest common subsequence. `dp[i][j]` represents the LCS of substrings `str1[0...i-1]` and `str2[0...j-1]`. If `str1[i-1] == str2[j-1]`, then `dp[i][j] = dp[i-1][j-1] + 1`; otherwise, it's the maximum of ignoring the last character from either string.


### 5. **DP on String**
   - **Key Idea**: Use a `dp[i][j]` table to compare substrings or apply operations (like insertion, deletion, replacement) on strings.
   - **Example**: **Edit Distance**: To transform one string into another with the minimum operations, use `dp[i][j]` where `dp[i][j]` is the minimum cost to convert the first `i` characters of `str1` into the first `j` characters of `str2`. If the characters match, no extra cost is needed; otherwise, consider the cost of the three operations.


### 7. **DP on Longest Increasing Subsequence (LIS)**
   - **Key Idea**: Use `dp[i]` to represent the length of the longest increasing subsequence that ends at index `i`. Compare the current element with all previous elements to update `dp[i]`.
   - **Example**: **LIS Problem**: In `arr = [10, 22, 9, 33, 21, 50, 41, 60]`, calculate the longest increasing subsequence. For each element, find the maximum LIS by considering all previous elements that are smaller, then update `dp[i]`.

### 8. **Partition DP**
   - **Key Idea**: Partition the problem into subproblems and use DP to find the optimal partition. `dp[i]` represents the best solution for the first `i` elements.
   - **Example**: **Palindrome Partitioning**: Partition a string into the fewest number of palindromes. `dp[i]` stores the minimum cuts needed for the substring `str[0...i]`. If the entire substring is a palindrome, no cuts are needed; otherwise, try cutting at every possible position and use the minimum cuts from the resulting partitions.


### 6. **DP on Stocks**
   - **Key Idea**: Define states based on actions (buy, sell, or hold) and use transitions based on whether you're holding a stock or not.
   - **Example**: **Best Time to Buy and Sell Stock**: Given stock prices, determine the maximum profit with at most one transaction. Track the minimum price seen so far and compute the maximum profit by comparing the current price with the minimum price.

### 9. **DP on Squares**
   - **Key Idea**: Focus on problems involving squares, where `dp[i][j]` represents the size of the largest square ending at cell `(i, j)`.
   - **Example**: **Maximal Square**: Given a binary matrix, find the largest square containing only `1s`. For each `dp[i][j]`, if `matrix[i][j] == 1`, update it based on the minimum of the neighboring cells (`dp[i-1][j]`, `dp[i][j-1]`, `dp[i-1][j-1]`), plus one.


That finding the maximum area of rectangle in the grid is the good one which reduceses to the histogram problem and that histogram problem reduceses to the previous smaller element. 

// https://www.geeksforgeeks.org/problems/print-all-lcs-sequences3413/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=print-all-lcs-sequences
imporant problem for dp on string 
