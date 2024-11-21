const {climbStairs} = require('./index');

// Test Suite for climbStairs function
function runTests() {
    let passed = 0;
    let total = 0;

    // Helper function to compare results
    function assertEqual(actual, expected, testName) {
        total++;
        if (actual === expected) {
            passed++;
            console.log(`${testName} passed.`);
        } else {
            console.log(`${testName} failed. Expected ${expected}, got ${actual}.`);
        }
    }

    // Test 1: Base case when n = 0 (1 way to stay on the ground)
    assertEqual(climbStairs(0), 1, "Test 1: n = 0");

    // Test 2: Base case when n = 1 (1 way to reach the first step)
    assertEqual(climbStairs(1), 1, "Test 2: n = 1");

    // Test 3: Test when n = 2 (2 ways: 1+1 or 2)
    assertEqual(climbStairs(2), 2, "Test 3: n = 2");

    // Test 4: Test when n = 3 (3 ways: 1+1+1, 1+2, 2+1)
    assertEqual(climbStairs(3), 3, "Test 4: n = 3");

    // Test 5: Test when n = 4 (5 ways: 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2)
    assertEqual(climbStairs(4), 5, "Test 5: n = 4");

    // Test 6: Test when n = 5 (8 ways: 1+1+1+1+1, 1+1+1+2, etc.)
    assertEqual(climbStairs(5), 8, "Test 6: n = 5");

    // Test 7: Test larger n = 10
    assertEqual(climbStairs(10), 89, "Test 7: n = 10");

    // Test 8: Test larger n = 20
    assertEqual(climbStairs(20), 10946, "Test 8: n = 20");

    // Test 9: Test edge case for n = 100 (should run without timing out)
    const result100 = climbStairs(100);
    console.log("Test 9: n = 100 result:", result100);

    // Test 10: Test edge case for n = 1000 (should run without timing out)
    const result1000 = climbStairs(1000);
    console.log("Test 10: n = 1000 result:", result1000);

    // Test 11: Test for n = 50 (mid-range value)
    assertEqual(climbStairs(50), 365010934, "Test 11: n = 50");

    // Final Results Summary
    console.log(`\n${passed} out of ${total} tests passed.`);
}

// Run the test suite
runTests();