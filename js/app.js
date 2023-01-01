class Board {
    constructor() {

    }
    //pass where you want to display the board 
    displayBoard = (divClass) => {
        let board = document.querySelector(`.${divClass}`)

        for (let i = 1; i < 65; i++) {
            // board.innerHTML = `<div class="sqaure n${i}>test</div>`
            board.innerHTML += `<div class="square n${i}"></div>`
        }
        let squares = [9,16,25,32,41,48,57,64]
        squares.forEach(square => {
            x.colorBoard(square)
        })
        //displaying the pieces
        this.displayPieces("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR")
    }
    //board coloring 
    colorBoard = (x) => {
        let on = 0;
        for (let i = x - 8; i < x+1; i++) {
            if (on == 0) {
                document.querySelector(`.n${i}`).classList.add("dark")
                on = 1
            } else if (on == 1) {
                document.querySelector(`.n${i}`).classList.add("light")
                on = 0
            }
        }
    }
    //adding PNGs to the board
    displaySinglePiece = (sqaureNumber, pieceType) =>{
        let piece = document.querySelector(`.n${sqaureNumber}`)

        
        if(pieceType == "r"){
            piece.style.backgroundImage = "url('pieces/bRook.png')"

        }else if(pieceType == "n"){
            piece.style.backgroundImage = "url('pieces/bKnight.png')"
        }else if(pieceType == "b"){
            piece.style.backgroundImage = "url('pieces/bBishop.png')"
        }else if(pieceType == "q"){
            piece.style.backgroundImage = "url('pieces/bQueen.png')" 
        }else if(pieceType == "k"){
            piece.style.backgroundImage = "url('pieces/bKing.png')" 
        }else if(pieceType == "p"){
            piece.style.backgroundImage = "url('pieces/bPawn.png')" 
        }else if(pieceType == "N"){
            piece.style.backgroundImage = "url('pieces/wKnight.png')"
        }else if(pieceType == "B"){
            piece.style.backgroundImage = "url('pieces/wBishop.png')"
        }else if(pieceType == "Q"){
            piece.style.backgroundImage = "url('pieces/wQueen.png')" 
        }else if(pieceType == "K"){
            piece.style.backgroundImage = "url('pieces/wKing.png')" 
        }else if(pieceType == "P"){
            piece.style.backgroundImage = "url('pieces/wPawn.png')" 
        }else if(pieceType == "R"){
            piece.style.backgroundImage = "url('pieces/wRook.png')"
        }
       
    }
    //empty
    clearPieces = ()=>{
        for(let i =1; i < 65;i++){
            document.querySelector(`.n${i}`).style.backgroundImage = "url()"
            
        }
    }
    //dispalying every piece using FEN
    displayPieces = (fen)=>{
        this.clearPieces()
        let fenArray = fen.split("")
        let index = 1
        for(let i= 1;i < 65;i++){
            
            if(i == fenArray.length+1){
                break
            }else if(parseInt(fenArray[i-1])){
                
                index += parseInt(fenArray[i-1])

            }else if(fenArray[i-1] == "/"){
                //getting current position 
                if(parseInt(fenArray[i-2])){
                    continue
                }else{
                    //figure out a function for this or a way to tell if the value is under a certain breakpoint
                    if(index < 9){
                        let x = 9 - index 
                        index += x
                        console.log(index)
                    }else if(index > 9 && index <  17){
                        let x = 17 - index 
                        index += x
                        console.log(index)
                    }else if(index > 17 && index < 25){
                        let x = 25 - index 
                        index += x
                    }else if(index > 25 && index < 33){
                        let x = 33 - index 
                        index += x
                    }else if(index > 33 && index < 41){
                        let x = 41 - index 
                        index += x
                    }else if(index > 41 && index < 49){
                        let x = 49 - index 
                        index += x
                    }else if(index > 41 && index < 57){
                        let x = 57 - index 
                        index += x
                    }
                }
                
                //figure out a way to this  with a function later 
            }else{
                this.displaySinglePiece(index, fenArray[i-1])
                if(!parseInt(fenArray[i-1])){
                    index+=1
                }
            }
        }
        
            
        
    }
    
   


}
let x = new Board()
x.displayBoard("board")

// add this as a function somewhere to the class 

let btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
    let fen = document.querySelector("input")
    
    x.displayPieces(`${fen.value}`)
})

// add custom colors using the constructor maybe??? 

// css later 


