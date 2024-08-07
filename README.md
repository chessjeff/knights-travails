# Knight's Travails

This program finds a shortest possible path a knight can take between two squares on a standard chess board. It prints that path along with the number of squares visited.

The program uses a breadth first search on a graph where each graph node is a valid knight's move away from the root. The search queue is a list of <code>GraphNode</code>s that contain the node, the previously checked node (<code>null</code> if first search), and a hash value. Having the previously checked node creates a crumb trail of all visited nodes up to that point. When the node is equal to the end point, it returns the shortest list of all nodes visited. The hash value is necessary because comparing identical arrays in JavaScript will always be false. The program checks if the hash already exists in the <code>visited</code> array. If it does not, the node is enqueued and the hash is added to <code>visited</code>. <code>Visited</code> is not a hash map, it is a growing array of all node's hash values as they occur. 

## To run

To run this program, clone this repo, navigate to its directory and type <code>node main.js</code>. 

The following will print to the console:
```
[1,7] is 4 moves away from [5,6].
Here is a possible path:
[ 1, 7 ]
[ 2, 5 ]
[ 3, 7 ]
[ 5, 6 ]
```
Change the parameters of <code>knightMoves()</code> to change the printed result.