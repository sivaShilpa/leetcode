var inorderTraversal = function(root, retVal=[]) {
    if(root === null) return retVal

    inorderTraversal(root.left, retVal)
    retVal.push(root.val)

    inorderTraversal(root.right, retVal)
    
    return retVal
};