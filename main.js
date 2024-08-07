function knightMoves(start, end) {
    if (!(start instanceof Array) && !(end instanceof Array) && start.length !== 2 & end.length !== 2) throw new Error("'start' and 'end' must both be arrays with length 2");

    const tree = searchGraph(start, end)
    let movesOrder = order(tree)
    console.log(`[${start}] is ${movesOrder.length} moves away from [${end}].`)
    console.log("Here is a possible path:")
    movesOrder.forEach((move) => console.log(move))

    function searchGraph(start, end) {
        start = GraphNode(start)
        let q = [start]
        let visited = [];
    
        while (q[0]) {
            let current = q.shift()
            if (current.node[0] === end[0] && current.node[1] === end[1]) {
                return current
            }
            let moves = findPossibleMoves(current.node)
            for (let i = 0; i < moves.length; i++) {
                let move = GraphNode(moves[i], current)
                if(!visited.includes(move.hash)) {
                    visited.push(move.hash)
                    q.push(move)
                }
            }
        }
    }

    function findPossibleMoves(coords) {
        if (coords === undefined || coords.length !== 2 || !(coords instanceof Array))
          return undefined;
        let i = coords[0];
        let j = coords[1];
        let X = [2, 1, -1, -2, -2, -1, 1, 2];
        let Y = [1, 2, 2, 1, -1, -2, -2, -1];
        let moves = [];
      
        for (let k = 0; k < 8; k++) {
          let x = i + X[k];
          let y = j + Y[k];
      
          if (x > 0 && x < 8 && y > 0 && y < 8) {
            moves.push([x, y]);
          }
        }
        return moves;
      }

    function order(tree, moves = []) {
        if (tree === null) return;
        if (tree.previous) order(tree.previous, moves)
        moves.push(tree.node)
        return moves
    }

    function GraphNode(node, previous = null) {
        return {node: node, previous: previous, hash: hash(node)}
        
        function hash(node) {
            return `${node[0]}${node[1]}`
        }
    }
    
}

knightMoves([1,1], [5, 6])