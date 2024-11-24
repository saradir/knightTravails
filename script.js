function knightMoves(start, end){
    if(start[0] === end[0] && start[1] === end[1]){
        return [start];
    }

    const queue = [[start]];

    for(const path of queue){
        for(const move of getLegalMoves(path.at(-1))){
            let newPath = path.concat([move]);
            if(move[0] === end[0]  && move[1] === end[1]){
                printResult(newPath);
                return newPath;
            }else{
                queue.push(newPath);
            }
        }
    }
}


function getLegalMoves([x,y]){
    const legalMoves = [[x+2, y+1],[x+2,y-1],[x+1,y+2],[x+1, y-2],[x-2,y+1],[x-2,y-1],[x-1,y+2],[x-2,y-2]].filter(([x,y]) =>
    x >= 0 && x < 8 && y >= 0 && y < 8);

    return legalMoves;

}

function printResult(result){
    console.log(
        `You made it in ${result.length - 1} moves! Here is your path: `
    );
    for(const vertex of result){
        console.log(vertex);
    }
}

