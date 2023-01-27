# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
1: I eleminated constant TRIVIAL_PARTITION_KEY and defined my own variable as partitionKey. I replaced this variable with candidate variable. My defined variable is explaining more about the data it is going to hold. and initialized it to "0" because at the end, when we are not going to have anything in our parameters, we are going to return "0" That's why, i eliminated the condition where we are checking if candidate exists or not.
2: I eliminated the extra conditionals because they were unnecessary. The code first checks if the event object has a partitionKey property, and if it does, it assigns that value to the partitionKey variable. If the event object doesn't have a partitionKey property, it instead assigns the stringified version of the entire event object to the partitionKey variable and hashes using the SHA3-512 algorithm and the hex digest is returned.. Then, if the partitionKey variable is not already a string, it is stringified. Finally, if the partitionKey variable is longer than the maximum partition key length, it is hashed using the SHA3-512 algorithm and the hex digest is returned. These steps ensure that the partitionKey variable is always a string and that its length does not exceed the maximum allowed length.
3: I made a new function hashDigestKey, which returns hex digest. As this task was being repeated two times in
our code, so making separate function for repeating tasks is always a good practice.
So, according to above mentioned points, my refactored code is more explaining and readable and is according to latest Javascript version.