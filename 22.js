var generateParenthesis = function(n) {
    let stack = [];
    let result = [];

    function backtrack(open, close){

        if(open == close && open == n) {
            result.push(stack.join(''));
            console.log(stack)
            console.log(result)
            return;
        }

        if(open < n){
            stack.push('(');
            console.log(open, close, stack)
            backtrack(open+1, close);
            stack.pop()
            console.log(open, close, stack)
        }
        if(close < open){
            stack.push(')');
            console.log(open, close, stack)
            backtrack(open, close+1);
            stack.pop();
            console.log(open, close, stack)
        }

    }
    backtrack(0,0)
    return result
};

console.log(generateParenthesis(3))