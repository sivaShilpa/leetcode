class Solution(object):
    def floodFill(self, image, sr, sc, color):
        """
        :type image: List[List[int]]
        :type sr: int
        :type sc: int
        :type color: int
        :rtype: List[List[int]]
        """
        rows, cols = len(image), len(image[0])
        original_color = image[sr][sc]
        
        # If the starting pixel's color is already the desired color, return the image as is
        if original_color == color:
            return image

        def dfs(r, c):
            # Base case: If the pixel is out of bounds or not of the original color, stop
            if r < 0 or r >= rows or c < 0 or c >= cols or image[r][c] != original_color:
                return
            
            # Change the pixel's color
            image[r][c] = color
            
            # Recur for the adjacent pixels
            dfs(r + 1, c)  # Down
            dfs(r - 1, c)  # Up
            dfs(r, c + 1)  # Right
            dfs(r, c - 1)  # Left

        # Start the DFS from the given starting point
        dfs(sr, sc)
        return image
        