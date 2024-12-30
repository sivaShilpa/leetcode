class Solution {
    public boolean isUgly(int n) {
        // Edge case: Non-positive numbers cannot be ugly
        if (n <= 0) {
            return false;
        }

        // Divide n by 2, 3, and 5 as long as it is divisible
        int[] primes = {2, 3, 5};
        for (int prime : primes) {
            while (n % prime == 0) {
                n /= prime;
            }
        }

        // If n reduces to 1, it is an ugly number
        return n == 1;

    }

    public static boolean isPrimeNumber(int n) {
        // Handle edge cases
        if (n <= 1)
            return false; // 0 and 1 are not prime numbers
        if (n == 2 || n == 3)
            return true; // 2 and 3 are prime numbers
        if (n % 2 == 0 || n % 3 == 0)
            return false; // Eliminate multiples of 2 and 3

        // Check divisors from 5 up to the square root of n
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0)
                return false;
        }
        return true;
    }

    public static List<Integer> findFactors(int n) {
        List<Integer> factors = new ArrayList<Integer>();
        
        for (int i = 1; i <= n / 2; i++) { // Check up to n/2 for efficiency
            if (n % i == 0) {
                factors.add(i);
            }
        }
        factors.add(n); // The number itself is always a factor

        return factors;
    }
}