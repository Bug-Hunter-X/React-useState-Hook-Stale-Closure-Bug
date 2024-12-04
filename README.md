# React useState Stale Closure Bug

This repository demonstrates a common bug encountered when using the `useState` hook in React with nested functions. The bug arises from the asynchronous nature of state updates and the use of closures.

## Bug Description
When an inner function attempts to update state using a value captured from a closure, this value might be outdated if the inner function isn't immediately executed. In this case, the state might not reflect the most recent update, leading to unexpected behavior and inconsistent UI updates.

## Solution
The solution uses the `useCallback` hook to create a memoized version of the function that closes over the latest values of the state variables. This ensures that the update happens with the most recent value of the state. A functional approach can also be used to prevent closure issues.