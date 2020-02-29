//展现动画效果

function showNumberWithAnimation(i,j,x) {
    var theNumberCell = $('#number-cell-'+i+'-'+j);
    theNumberCell.css("background-color",getNumberBackgroundColor(x));
    theNumberCell.css("color",getNumberColor(x));
    theNumberCell.text(x);

    theNumberCell.animate({
        width:cellSideLength,
        height:cellSideLength,
        top:getPosTop(i,j),
        left:getPosLeft(i,j)
},50);
}


function showMoveAnimation(fromx,fromy,tox,toy) {
    var theNumberCell = $('#number-cell-'+fromx+'-'+fromy);
    theNumberCell.animate(
        {
            top:getPosTop(tox,toy),
            left:getPosLeft(tox,toy)
        },200
    );
}

function updateScore(score) {
   $('#score').text(score);
}

