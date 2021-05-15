console.log("CONNECTED")
var btn = document.querySelector(".btnRestart")
var header = document.querySelector(".titleh1")
var tables = document.getElementsByTagName("td");
var winner = document.querySelector(".winner");

let roundWon = false;


var fplayer = true; 
var winnerz = '';
for(var i=0; i<tables.length;i++)
{
    tables[i].textContent = ''
}

console.log(fplayer === true)
btn.addEventListener('click',function(){
    for(var i=0; i<tables.length;i++)
    {
        tables[i].textContent = ''
    }
    winner.innerHTML = ''
    

} )

console.log(btn)
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleResultValidation() {
    

    if(tables[0].textContent == tables[1].textContent && tables[1].textContent == tables[2].textContent && tables[0].textContent !== '')
    {
        winner.innerHTML = winnerz + " Won!!"
        for(var i=0; i<tables.length;i++)
        {
            tables[i].textContent = ''
        }
        fplayer= true


    }
    else if(tables[3].textContent == tables[4].textContent && tables[4].textContent == tables[5].textContent && tables[3].textContent !== '')
    {
        winner.innerHTML = winnerz + " Won!!"
        for(var i=0; i<tables.length;i++)
        {
            tables[i].textContent = ''
        }
        fplayer= true

    }
    else if(tables[6].textContent == tables[7].textContent && tables[7].textContent == tables[8].textContent && tables[6].textContent !== '')
    {
        winner.innerHTML = winnerz + " Won!!"
        for(var i=0; i<tables.length;i++)
        {
            tables[i].textContent = ''
        }
        fplayer= true

    }
    else if(tables[0].textContent == tables[3].textContent && tables[3].textContent == tables[6].textContent && tables[0].textContent !== '')
    {
        winner.innerHTML = winnerz + " Won!!"
        for(var i=0; i<tables.length;i++)
        {
            tables[i].textContent = ''
        }
        fplayer= true

    }
    else if(tables[1].textContent == tables[4].textContent && tables[4].textContent == tables[7].textContent && tables[1].textContent !== '')
    {
        winner.innerHTML = winnerz + " Won!!"
        for(var i=0; i<tables.length;i++)
        {
            tables[i].textContent = ''
        }
        fplayer= true

    }
    else if(tables[2].textContent == tables[5].textContent && tables[5].textContent == tables[8].textContent && tables[2].textContent !== '')
    {
        winner.innerHTML = winnerz + " Won!!"
        for(var i=0; i<tables.length;i++)
        {
            tables[i].textContent = ''
        }
        fplayer= true

    }
    else if(tables[0].textContent == tables[4].textContent && tables[4].textContent == tables[8].textContent && tables[0].textContent !== '')
    {
        winner.innerHTML = winnerz + " Won!!"
        for(var i=0; i<tables.length;i++)
        {
            tables[i].textContent = ''
        }
        fplayer= true

    }
    else if(tables[2].textContent == tables[4].textContent && tables[4].textContent == tables[6].textContent && tables[2].textContent !== '')
    {
        winner.innerHTML = winnerz + " Won!!"
        for(var i=0; i<tables.length;i++)
        {
            tables[i].textContent = ''
        }
        fplayer= true
    }
    
}



function player(){
    if(this.textContent === '' && fplayer == true){
        this.textContent = 'X';
        console.log(this.textContent)
        fplayer = !fplayer;
        winnerz = "X"
        handleResultValidation();
}
    else if (this.textContent === '' && fplayer == false)
    {
    this.textContent = 'O'
    winnerz= 'O'
    fplayer = !fplayer;
    handleResultValidation();
}

}

for(var i=0; i<tables.length;i++)
{
    tables[i].addEventListener('click',player)
    console.log(tables[i])
}

console.log(tables)






