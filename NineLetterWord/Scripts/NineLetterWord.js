//**************************************************************
// Global Array for cell id's
//**************************************************************
var IDArray = new Array();
IDArray[0] = "Zero";
IDArray[1] = "One";
IDArray[2] = "Two";
IDArray[3] = "Three";
IDArray[4] = "Four";
IDArray[5] = "Five";
IDArray[6] = "Six";
IDArray[7] = "Seven";
IDArray[8] = "Eight";
IDArray[9] = "Nine";

//**************************************************************
// Global Array for available letters
//**************************************************************
var CellCount = 9;
var LettersCount = 26;
var IDLettersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var ConsenentCount = 21;
var IDConsenentsArray = [["B", 2], ["C", 2], ["D", 4], ["F", 2], ["G", 3], ["H", 2], ["J", 1], ["K", 1], ["L", 4], ["M", 2], ["N", 6], ["P", 2], ["Q", 1], ["R", 6], ["S", 4], ["T", 6], ["V", 2], ["W", 2], ["X", 1], ["Y", 2], ["Z", 1]];

var VowelCount = 5;
var IDVowelsArray = [["A", 9], ["E", 12], ["I", 9], ["O", 8], ["U", 4]];

var nullChar = '\0';
var nineRamdomVowels = [nullChar, nullChar, nullChar, nullChar, nullChar, nullChar, nullChar, nullChar, nullChar];
var nineRamdomCons = [nullChar, nullChar, nullChar, nullChar, nullChar, nullChar, nullChar, nullChar, nullChar];
var nineGameLetters = [nullChar, nullChar, nullChar, nullChar, nullChar, nullChar, nullChar, nullChar, nullChar];

var vowelsArray = //42 elements
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
    'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
    'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
    'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
    'U', 'U', 'U', 'U'];

var consArray = //56 elements
    ['B','B',
    'C','C',
    'D','D','D','D',
    'F','F',
    'G','G','G',
    'H','H',
    'J',
    'K',
    'L','L','L','L',
    'M','M',
    'N','N','N','N','N','N',
    'P','P',
    'Q',
    'R','R','R','R','R','R',
    'S','S','S','S',
    'T','T','T','T','T','T',
    'V','V',
    'W','W',
    'X',
    'Y','Y',
    'Z'];


//**************************************************************
// This code handles the timer
//**************************************************************
var timer = null;
var restartTotalSeconds;

function StartTimer(startingValue) {
    var totalSeconds = 0;
    
    if(startingValue)//Check that this has a value
        totalSeconds = startingValue;

    timer = window.setInterval(setTime, 1000);
    function setTime() {
        ++totalSeconds;
        restartTotalSeconds = totalSeconds;
        $('#timer > #seconds').html(pad(totalSeconds % 60));
        $('#timer > #minutes').html(pad(parseInt(totalSeconds / 60) % 60));
        $('#timer > #hours').html(pad(parseInt((totalSeconds / 60) / 60)));
    }
    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        }
        else {
            return valString;
        }
    }
}

//**************************************************************
// This code will put the timer back to the curent game timer
//**************************************************************
function ReStartTimer()
{
    StartTimer(restartTotalSeconds);
}
//**************************************************************
// This code will stop the timer
//**************************************************************
function StopTimer()
{
    if (timer)
    {
        window.clearInterval(timer);
        timer = null;
    }
}
//**************************************************************
function ResetCellInRowOne(rowID, givenID) {

    return;
    $('#' + givenID).removeClass('A');
    $('#' + givenID).removeClass('E');
    $('#' + givenID).removeClass('I');
    $('#' + givenID).removeClass('O');
    $('#' + givenID).removeClass('U');
    $('#' + givenID).addClass('Blank');

    return;
    if ($('#' + rowID).length == 0) {
        alert("One_1 has len 0");
        $('#' + rowID).append("<div id='" + givenID + "' class='Blank'></div>");
    } else {

        if ($('#' + givenID).hasClass("A"))
        {
            alert("has A")
            $('#' + givenID).removeClass('A');
            //$(this).remove(givenID);
            //$('#' + rowID).append("<div id='" + givenID + "' class='Blank'></div>");
        }
        if ($('#' + givenID).hasClass("E"))
        {
            alert("has E")
            $('#' + givenID).removeClass('E');
            //$(this).remove(givenID);
            //$('#' + rowID).append("<div id='" + givenID + "' class='Blank'></div>");
        }
        if ($('#' + givenID).hasClass("I"))
        {
            alert("has I")
            $('#' + givenID).removeClass('I');
            //$(this).remove(givenID);
            //$('#' + rowID).append("<div id='" + givenID + "' class='Blank'></div>");
        }
        if ($('#' + givenID).hasClass("O"))
        {
            alert("has O")
            $('#' + givenID).removeClass('O');
            //$(this).remove(givenID);
            //$('#' + rowID).append("<div id='" + givenID + "' class='Blank'></div>");
        }
        if ($('#' + givenID).hasClass("U"))
        {
            alert("has U")
            $('#' + givenID).removeClass('U');
            //$(this).remove(givenID);
            //$('#' + rowID).append("<div id='" + givenID + "' class='Blank'></div>");
        }
    }
    return;
}

function ResetTheGivens() {
    //$('#One_2').remove('#given_2');
    //$('#One_2').append("<div id='given_2' class='Blank'></div>");

    //for (i_counter = 0; i_counter < 9; i_counter++) {

    //}
    return;
    //ResetCellInRowOne("One_1", "given_1");
    /*
    if ($('#given_2').length == 0) {
        $('#One_2').append("<div id='given_2' class='Blank'></div>");
    } else {
        $('#One_2').remove('given_2');
        $('#One_2').append("<div id='given_2' class='Blank'></div>");
    }

    if ($('#given_3').length == 0) {
        $('#One_3').append("<div id='given_3' class='Blank'></div>");
    } else {
        $('#One_3').remove('given_3');
        //$('#One_3').append("<div id='given_3' class='Blank'></div>");
    }

    if ($('#given_4').length == 0) {
        $('#One_4').append("<div id='given_4' class='Blank'></div>");
    } else {
        $('#One_4').remove('given_4');
        //$('#One_4').append("<div id='given_4' class='Blank'></div>");
    }

    if ($('#given_5').length == 0) {
        $('#One_5').append("<div id='given_5' class='Blank'></div>");
    } else {
        $('#One_5').remove('given_5');
        //$('#One_5').append("<div id='given_5' class='Blank'></div>");
    }

    if ($('#given_6').length == 0) {
        $('#One_6').append("<div id='given_6' class='Blank'></div>");
    } else {
        $('#One_6').remove('given_6');
        //$('#One_6').append("<div id='given_6' class='Blank'></div>");
    }

    if ($('#given_7').length == 0) {
        $('#One_7').append("<div id='given_7' class='Blank'></div>");
    } else {
        $('#One_7').remove('given_7');
        //$('#One_7').append("<div id='given_7' class='Blank'></div>");
    }

    if ($('#given_8').length == 0) {
        $('#One_8').append("<div id='given_8' class='Blank'></div>");
    } else {
        $('#One_8').remove('given_8');
        //$('#One_8').append("<div id='given_8' class='Blank'></div>");
    }

    if ($('#given_9').length == 0) {
        $('#One_9').append("<div id='given_9' class='Blank'></div>");
    } else {
        $('#One_9').remove('given_9');
        //$('#One_9').append("<div id='given_9' class='Blank'></div>");
    }
    return;
    */
}

function ResetTheCells()
{
    $(function () {

        $('#One_1, #One_2, #One_3, #One_4, #One_5, #One_6, #One_7, #One_8, #One_9').addClass("cell");
        $('#One_1, #One_2, #One_3, #One_4, #One_5, #One_6, #One_7, #One_8, #One_9').addClass("full");
        $('#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9').addClass("Blank");
        $('#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9').css({ 'z-index': '999' });

        $('#Three_1, #Three_2, #Three_3, #Three_4, #Three_5, #Three_6, #Three_7, #Three_8, #Three_9').addClass("cell");

        return;
        //*************************************************************************************

        for (i_counter = 0; i_counter < LettersCount; i_counter++) {

            $("." + IDLettersArray[i_counter]).draggable({
                revert: function (droppableObj) {
                    if (droppableObj === false) {
                        $(this).parent().removeClass("full");
                        return true;
                    }
                    else {
                        $(this).parent().addClass("full");
                        return false;
                    }
                },
                cursor: "move",
                drag: function (ev, ui) {
                    $(this).parent().removeClass("full");
                }
            });
        }

        //*************************************************************************************
        $('#One_1').droppable({
            drop: function (ev, ui) {
                if ($('#One_1').hasClass("full")) {
                    alert("One_1 full");
                } else {

                    $(ui.draggable).css({ top: 0, left: 0 }).appendTo(this);
                    if ($('#given_1').length == 0) {
                        $('#Three_1').append("<div id='given_1'></div>");
                    }
                }

            }
        });
        $('#Three_1').droppable({
            drop: function (ev, ui) {
                if ($('#Three_1').hasClass("full")) {
                    alert("Three_1 full");
                } else {
                    $(ui.draggable).css({ top: 0, left: 0 }).appendTo(this);
                    if ($('#given_1').length == 0) {
                        $('#One_1').append("<div id='given_1'></div>");
                    }
                }
            }
        });
        for (i_counter = 2; i_counter <= CellCount; i_counter++) {
            $('#One_' + i_counter).droppable({
                drop: function (ev, ui) {
                    if ($('#One_' + i_counter).hasClass("full")) {
                        //(ui.draggable).attach().css({ top: 0, left: 0 }).appendTo(this);
                        //$(ui.draggable).draggable({ revert: true });
                        //$(ui.draggable).parent().addClass("full");
                        alert("One_" + i_counter + "full");
                    } else {
                        $(ui.draggable).css({ top: 0, left: 0 }).appendTo(this);
                        $('#Three_' + i_counter).append("<div id='given_" + i_counter + "' class='Blank'></div>");
                        //$(ui.draggable).detach().css({ top: 0, left: 0 }).appendTo(this);
                        //$(ui.draggable).removeClass("full");
                        //$(this).addClass("full");
                        //alert("One_" + i_counter + "empty");
                    }

                }
            });
            $('#Three_' + i_counter).droppable({
                drop: function (ev, ui) {
                    if ($('#Three_' + i_counter).hasClass("full")) {
                        //$(ui.draggable).draggable({ revert: true });
                        //$(ui.draggable).parent().addClass("full");
                        alert("Three_" + i_counter + "full");
                    } else {
                        $(ui.draggable).css({ top: 0, left: 0 }).appendTo(this);
                        $('#One_' + i_counter).append("<div id='given_" + i_counter + "' class='Blank'></div>");
                        //$(ui.draggable).detach().css({ top: 0, left: 0 }).appendTo(this);
                        //$(ui.draggable).removeClass("full");
                        //$(this).addClass("full");
                        //alert("Three_" + i_counter + "empty");
                    }
                }
            });
        }
        //*************************************************************************************
    });
    return;    
}

var vowelCount = 0;
var conCount = 9;

$(document).ready(function () {
    $('#One_1, #One_2, #One_3, #One_4, #One_5, #One_6, #One_7, #One_8, #One_9').addClass("cell");
    $('#One_1, #One_2, #One_3, #One_4, #One_5, #One_6, #One_7, #One_8, #One_9').addClass("full");
    $('#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9').addClass("Blank");
    $('#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9').css({ 'z-index': '999' });

    $('#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9').mousedown(
        function () {
            $(this).css({ 'z-index': '1000' });
        }
    );

    $('#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9').mouseup(
        function () {
            $(this).css({ 'z-index': '999' });
            alert($(this).attr("id"));
        }
    );

    $('#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9').mouseleave(
        function () {
            //if ($(this).hasClass("A")) {
            //    $(this).removeClass("A");
            //    $(this).addClass("Blank");
            //}
        }
    );

    $('#ButtonShowHide').attr('disabled', 'disabled');
    $('#ButtonHint').attr('disabled', 'disabled');
    //$('#ButtonNewGame').attr('disabled', 'disabled');

    $(function () {
        $("#slider").slider({
            value: 0,
            min: 0,
            max: 9,
            step: 1,
            slide: function (event, ui) {
                switch (ui.value) {
                    case 0:
                        conCount = 0;
                        vowelCount = 9;
                        break;
                    case 1:
                        conCount = 1;
                        vowelCount = 8;
                        break;
                    case 2:
                        conCount = 2;
                        vowelCount = 7;
                        break;
                    case 3:
                        conCount = 3;
                        vowelCount = 6;
                        break;
                    case 4:
                        conCount = 4;
                        vowelCount = 5;
                        break;
                    case 5:
                        conCount = 5;
                        vowelCount = 4;
                        break;
                    case 6:
                        conCount = 6;
                        vowelCount = 3;
                        break;
                    case 7:
                        conCount = 7;
                        vowelCount = 2;
                        break;
                    case 8:
                        conCount = 8;
                        vowelCount = 1;
                        break;
                    case 9:
                        conCount = 9;
                        vowelCount = 0;
                        break;
                }
                $("#ConsenentsAndVowels").html("Consenents: " + conCount.toString() + " - Vowels: " + vowelCount.toString());
            }
        });
    });
});

function randomFromInterval(from,to)
{
    return Math.floor(Math.random()*(to-from+1)+from);
}

function SetTheRandomLetters()
{
    var localVowelsArray = vowelsArray.slice(0);
    var localConsArray = consArray.slice(0);
    
    for (var i = 0; i < 10; i++)
    {
        var i_randVowel = randomFromInterval(0,41);
        if (localVowelsArray[i_randVowel] == nullChar)
        {
            while (localVowelsArray[i_randVowel] == nullChar)
            {
                i_randVowel = randomFromInterval(0, 41);
            }
        }
        nineRamdomVowels[i] = localVowelsArray[i_randVowel];
        localVowelsArray[i_randVowel] = nullChar

        var i_randCon = randomFromInterval(0, 55);
        if (localConsArray[i_randCon] == nullChar)
        {
            while (localConsArray[i_randCon] == nullChar)
            {
                i_randCon = randomFromInterval(0, 55);
            }
        }
        nineRamdomCons[i] = localConsArray[i_randCon];
        localConsArray[i_randCon] = nullChar;
    }
}

//**************************************************************
// Guess what this does?
//**************************************************************
function Help(event) {
    StopTimer();

    //$('#timer > #seconds').html("00");
    //$('#timer > #minutes').html("00");
    //$('#timer > #hours').html("00");

    $('#ButtonShowHide').attr('disabled', 'disabled');
    $('#ButtonHint').attr('disabled', 'disabled');
    $('#ButtonNewGame').attr('disabled', 'disabled');
    $('#HelpPanelLegend').html("Help");
    //$('#HelpPanelMessage').html("Help");

    $('#HelpPanel').attr("class", "gameBoard Shown HelpPanel Sudoku");
    $('#Game').attr("class", "gameBoard Hidden Sudoku");
    $('#Solution').attr("class", "gameBoard Hidden Sudoku");
    $('#NewGamePanel').attr('class', 'gameBoard Hidden NewGamePanel Sudoku');
    $('#MessagePanel').attr("class", "gameBoard Hidden MessagePanel Sudoku");

    $("#HelpContents").load("help.htm");


}

//**************************************************************
//
//**************************************************************
function DisplayMessagePanel(strTitle, strMessage)
{
    StopTimer();
    
    $('#ButtonShowHide').attr('disabled', 'disabled');
    $('#ButtonHint').attr('disabled', 'disabled');
    $('#ButtonNewGame').attr('disabled', 'disabled');
    $('#MessagePanelLegend').html(strTitle);
    $('#MessagePanelMessage').html(strMessage);

    $('#Game').attr("class", "gameBoard Hidden Sudoku");
    $('#Solution').attr("class", "gameBoard Hidden Sudoku");
    $('#NewGamePanel').attr('class', 'gameBoard Hidden NewGamePanel Sudoku');
    $('#MessagePanel').attr("class", "gameBoard Shown MessagePanel Sudoku");
    $('#HelpPanel').attr("class", "gameBoard Hidden HelpPanel Sudoku");
    return;
}
//**************************************************************
//
//**************************************************************
function MessagePanelContinue(event)
{
    NewGame(event);
}
//**************************************************************
//
//**************************************************************
function NewGame(e) {

    ResetTheCells();
    return;

    /*for (i_counter = 1; i_counter <= 9; i_counter++) {
        var id = IDArray[1] + "_" + i_counter;
        var cell = document.getElementById(id);
        if (cell) {
            var vowel = IDLettersArray[i_counter];
            $("#" + id).attr('class', 'cell full ui-droppable');
            $("#" + id + " > #given_" + (i_counter)).attr('class', "ui-draggable");
            $("#" + id + " > #given_" + (i_counter)).attr('style', "position: relative;");
            $("#" + id + " > #given_" + (i_counter)).addClass(vowel);
        }
    }
    return;
    */
    //ResetTheGivens();
    SetTheRandomLetters();
    //alert(nineRamdomVowels[0] + nineRamdomVowels[1] + nineRamdomVowels[2] + nineRamdomVowels[3] + nineRamdomVowels[4] + nineRamdomVowels[5] + nineRamdomVowels[6] + nineRamdomVowels[7] + nineRamdomVowels[8]);
    //alert(nineRamdomCons[0] + nineRamdomCons[1] + nineRamdomCons[2] + nineRamdomCons[3] + nineRamdomCons[4] + nineRamdomCons[5] + nineRamdomCons[6] + nineRamdomCons[7] + nineRamdomCons[8]);
    //alert("vowel count = " + vowelCount + " con count = " + conCount);
    //Add the vowels to the game
    var counter = 0;
    for (counter = 0; counter < vowelCount; counter++) {
        //alert(counter);

        var idIndex = counter + 1;
        
        var id = IDArray[1] + "_" + idIndex;
        var cell = document.getElementById(id);
        if (cell) {
            var vowel = nineRamdomVowels[counter];
            nineGameLetters[counter] = nineRamdomVowels[counter];
            $("#" + id).attr('class', 'cell full ui-droppable');
            $("#" + id + " > #given_" + (idIndex)).attr('class', "ui-draggable");
            $("#" + id + " > #given_" + (idIndex)).addClass(vowel);
        }
    }
    counter = 0;

    //Add the consenents to the game
    for (counter = vowelCount; counter <= conCount + vowelCount; counter++)
    {
        var idIndex = counter + 1;
        var idCon = IDArray[1] + "_" + idIndex;
        var cellCon = document.getElementById(idCon);
        if (cellCon)
        {
            var con = nineRamdomCons[counter];
            nineGameLetters[counter] = nineRamdomCons[counter];
            $('#' + idCon).addClass('full');
            $("#" + idCon + " > #given_" + (idIndex)).attr('class', "ui-draggable");
            $("#" + idCon + " > #given_" + (idIndex)).addClass(con);
        }

    }
    
    //reset the work area
    for (counter = 0; counter < 9; counter++) {
        var idIndex = counter + 1;
        var idGuess = IDArray[3] + "_" + idIndex;
        var cellGuess = document.getElementById(idGuess);
        if (cellGuess) {
            $('#' + idGuess).attr('class', "cell ui-droppable");
            $('#' + idGuess).html('');
            //$("#" + idGuess + " > #given_" + (idIndex)).attr('class', "ui-draggable");
        }

    }
    //alert(nineGameLetters[0] + nineGameLetters[1] + nineGameLetters[2] + nineGameLetters[3] + nineGameLetters[4] + nineGameLetters[5] + nineGameLetters[6] + nineGameLetters[7] + nineGameLetters[8]);
 
    ResetTheCells();
    

    StopTimer();

    $('#timer > #seconds').html("00");
    $('#timer > #minutes').html("00");
    $('#timer > #hours').html("00");

    StartTimer();
    return;


    $('#ButtonShowHide').attr('disabled', 'disabled');
    $('#ButtonHint').attr('disabled', 'disabled');
    $('#ButtonNewGame').attr('disabled', 'disabled');

    $('#Game').attr("class", "gameBoard Hidden Sudoku");
    $('#Solution').attr("class", "gameBoard Hidden Sudoku");
    $('#MessagePanel').attr("class", "gameBoard Hidden MessagePanel Sudoku");
    $('#NewGamePanel').attr('class', 'gameBoard Shown NewGamePanel Sudoku');
    
    return;
}
//**************************************************************
//
//**************************************************************
function Cancel(e)
{
    ReStartTimer();

    document.getElementById("Game").setAttribute("class", "gameBoard Shown Sudoku");
    document.getElementById("Solution").setAttribute("class", "gameBoard Hidden Sudoku");
    document.getElementById("HelpPanel").setAttribute("class", "gameBoard Hidden HelpPanel Sudoku");
    document.getElementById("MessagePanel").setAttribute("class", "gameBoard Hidden MessagePanel Sudoku");
    document.getElementById("NewGamePanel").setAttribute("class", "gameBoard Hidden NewGamePanel Sudoku");

    $('#ButtonShowHide').attr('disabled', '');
    $('#ButtonHint').attr('disabled', '');
    $('#ButtonNewGame').attr('disabled', '');

    return;
}
