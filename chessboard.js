let size = 8;
let board = "";



    for (let y = 0; y < size; y++) {
        //console.log("Y is " + y);
    
        for (let x = 0; x < size; x++) {
           // console.log("X is " + x)
    
            if ((x + y) % 2 == 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
        board += "\n";
    }



console.log(board);