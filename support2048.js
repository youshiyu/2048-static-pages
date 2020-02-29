
documentWidth=window.screen.availWidth;
gridContainerWidth=0.92*documentWidth;
cellSideLength=0.18*documentWidth;
cellSpace=0.04*documentWidth;



function getPosLeft(i,j){
    return cellSpace+j*(cellSpace+cellSideLength);
}
function getPosTop(i,j){
    return cellSpace+i*(cellSpace+cellSideLength);
}

function getNumberBackgroundColor(number){
    switch (number) {
        case 2: return "#DBDBDB";break;
        case 4: return "#DBDBDB";break;
        case 8: return "#f1aaab";break;
        case 16: return "#ff7a6e";break;
        case 32: return "#8fa6ff";break;
        case 64: return "#9e7edb";break;
        case 128: return "#bf786e";break;
        case 256: return "#CC99CC";break;
        case 512: return "#FF5C5C";break;
        case 1024: return "#FF0000";break;
        case 2048: return "#89fff8";break;
        case 4096: return "#ff0e52";break;

    }
    return "black";
}

function  getNumberColor(number) {
    if(number<=4)
        return "#141728";
    else
        return "#f9e9ff";

}

function nospace() {

    for( var i = 0 ; i < 4 ; i ++ )
        for (var j = 0; j < 4; j++)
            if(board[i][j]===0)
                return false;

            return true;

}


function canMoveLeft(board) {
    for(var i=0;i<4;i++)
        for(var j=1;j<4;j++)
            if(board[i][j]!=0)//存在数字
                if(board[i][j-1]==0||board[i][j-1]==board[i][j])//左侧存在空的位置，或者左边的数字和自己一样
                    return true;
    return false;
}
function canMoveRight(board)
{
    for(var i=0;i<4;i++)
        for(var j=0;j<3;j++)
        {
            if(board[i][j]!=0)
                if(board[i][j+1]==0||board[i][j+1]==board[i][j])
                    return true;
        }
    return false;
}
function canMoveUp(board)
{
    for(var i=1;i<4;i++)
        for(var j=0;j<4;j++)
        {
            if(board[i][j]!=0)
                if(board[i-1][j]==0||board[i-1][j]==board[i][j])
                    return true;
        }
    return false;
}
function canMoveDown(board)
{
    for(var i=0;i<3;i++)
        for(var j=0;j<4;j++)
        {
            if(board[i][j]!=0)
                if(board[i+1][j]==0||board[i+1][j]==board[i][j])
                    return true;
        }
    return false;
}

function noBlockHorizontal( row , col1 , col2 , board ){
    for( var i = col1 + 1 ; i < col2 ; i ++ )
        if( board[row][i] != 0 )
            return false;
    return true;
}

//水平方向
function noBlockVertical( col , row1 , row2 , board ){
    for( var i = row1 + 1 ; i < row2 ; i ++ )
        if( board[i][col] != 0 )
            return false;
    return true;
}




function nomove( board ){
    if( canMoveLeft( board ) ||
        canMoveRight( board ) ||
        canMoveUp( board ) ||
        canMoveDown( board ) )
        return false;

    return true;
}
