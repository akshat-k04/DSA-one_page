```cpp
#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

typedef long long ll;
typedef vector<int> vii;

// GCD Function
int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

// Sieve of Eratosthenes to mark prime numbers
void sieve() {
    vector<int> is_prime(10001, 1);  // Initially all are prime
    is_prime[0] = 0;
    is_prime[1] = 0;
    for (int e = 2; e * e < is_prime.size(); e++) {
        if (is_prime[e] == 1) {
            for (int f = e * e; f < 10001; f += e) is_prime[f] = 0;
        }
    }
}

// Binary Exponentiation
ll binpow(ll a, ll b, ll m) {
    ll temp = 1;
    while (b) {
        if (b % 2) {
            temp = (temp * a) % m;  // Multiply when b is odd
        }
        a = (a * a) % m;  // Square the base
        b /= 2;  // Halve the exponent
    }
    return temp;
}

// Prime Factor Sieve
vii prime_factor_sieve(int a) {
    vector<int> is_prime(10001, 0);
    for (int i = 2; i < 10001; i++) is_prime[i] = i;  // Initialize with numbers themselves
    for (int e = 2; e * e < is_prime.size(); e++) {
        if (is_prime[e] == e) {  // e is prime
            for (int f = e * e; f < 10001; f += e)
                if (is_prime[f] == f) is_prime[f] = e;  // Mark smallest prime factor
        }
    }
    vector<int> factor_of_a;
    while (a != 1) {
        factor_of_a.push_back(is_prime[a]);
        a /= is_prime[a];
    }
    return factor_of_a;
}

/*
Basic Mod Operation: (a * b) % m == ((a % m) * (b % m)) % m

Modular Inverse:
If I want to find (a / b) % m:
    cond1: a % b != 0
    cond2: b and m are co-prime

Then, we can write (a / b) % m = (a * c) % m

c = (b^(m-2)) % m (Fermat's Little Theorem)
*/

int main() {
    // Example usages:
    int a = 56, b = 98;
    cout << "GCD of " << a << " and " << b << " is: " << gcd(a, b) << endl;

    sieve();  // Run the sieve function

    ll base = 5, exp = 3, mod = 1000000007;
    cout << base << "^" << exp << " % " << mod << " is: " << binpow(base, exp, mod) << endl;

    int num = 60;
    vii factors = prime_factor_sieve(num);
    cout << "Prime factors of " << num << " are: ";
    for (int factor : factors) {
        cout << factor << " ";
    }
    cout << endl;

    return 0;
}
```

## Modular Inverse Explanation

### Multiplicative Inverse:
- In real numbers, 5 and \( \frac{1}{5} \) are multiplicative inverses.  
- Similarly, 5 and -5 are additive inverses because \( 5 + (-5) = 0 \).

- In modular arithmetic, two numbers 'a' and 'b' are multiplicative inverses modulo 'm' if:
    \[
    (a \times b) \% m = 1
    \]

### Methods to Calculate the Modular Inverse:
1. **We have 2 methods to calculate the modular inverse:**  
   (These will be explained in the next sections.)

### Use of the Multiplicative Inverse:
If we want to compute \( \frac{a}{b} \% m \), we can rewrite it as \( (a \times c) \% m \), where 'b' and 'c' are modular inverses of each other.

#### Conditions:
- \( b \) and \( m \) must be co-prime, i.e., \( \text{gcd}(b, m) = 1 \). Only then will the modular inverse exist.
- The division should be exact, i.e., \( a \% b = 0 \).

#### Proof of This:
Let \( a = k \times b \) (which means 'a' is a multiple of 'b'). Then:
\[
\frac{a}{b} \% m = \left(\frac{k \times b}{b}\right) \% m = k \% m
\]
Now, let 'c' be the modular multiplicative inverse of 'b', meaning:
\[
(b \times c) \% m = 1
\]
Then:
\[
(b \times k \times c) \% m = \left((b \times c) \% m \times (k \% m)\right) \% m
\]
\[
= (1 \times (k \% m)) \% m = k \% m
\]

Hence, the original expression \( \frac{a}{b} \% m \) is equivalent to \( (a \times c) \% m \).  
This proves that using the modular inverse gives the correct result.

---

### Fermat's Little Theorem:
If 'b' and 'm' are co-prime and 'm' is a prime number, then:
\[
b^{m-1} \% m = 1
\]

This theorem holds when 'm' is prime, and 'b' is co-prime with 'm'.

#### Explanation:
- If \( b \% m \neq 0 \), then repeated powers of 'b' mod 'm' will cycle through values less than 'm'.
- After \( m-1 \) multiplications, \( b^{m-1} \% m = 1 \).

From Fermat's Little Theorem, we know that:
\[
b^{m-1} \% m = 1
\]
Thus, \( b^{m-2} \) is the modular inverse of 'b' modulo 'm', because:
\[
(b \times b^{m-2}) \% m = 1
\]

---
## [Counting Inversions](https://leetcode.com/problems/count-the-number-of-inversions/description/)

1. can be done with merge sort technique or also with tries.

---

## Finding Missing Number

Do bitwise operations and find the required