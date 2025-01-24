/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a = 0, b = 1;
    yield a; // Yield the first Fibonacci number (0)
    yield b; // Yield the second Fibonacci number (1)

    while (true) {
        let next = a + b; // Calculate the next number in the sequence
        yield next;       // Yield the next Fibonacci number
        a = b;            // Update a to the previous b
        b = next;         // Update b to the newly calculated next
    }
    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */