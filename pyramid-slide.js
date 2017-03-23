//var brickType = document.getElementById("brick-type").value;
//function changeBrick() {
//    return brickType = document.getElementById("brick-type").value;
//    document.getElementById("pyramid").innerHTML = brickType;
//}

//function findHeight(val) {
//    var height = document.getElementById("height").value;
//    document.getElementById("demo").innerHTML = val;
//    drawPyramid();
//}

function drawPyramid() {

    document.getElementById("pyramid").innerHTML = "";

    var brickType = document.getElementById("brick-type").value;
//    document.getElementById("pyramid").innerHTML = brickType;

    var height = document.getElementById("height").value;
    document.getElementById("demo").innerHTML = height;
    // first, clear the old content


    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brickType;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
