//**************************************************************
// Global Array for available letters
//**************************************************************
var CellCount = 9;
//var LettersCount = 26;
//var IDLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//var ConsenentCount = 21;
//var IDConsenentsArray = [["B", 2], ["C", 2], ["D", 4], ["F", 2], ["G", 3], ["H", 2], ["J", 1], ["K", 1], ["L", 4], ["M", 2], ["N", 6], ["P", 2], ["Q", 1], ["R", 6], ["S", 4], ["T", 6], ["V", 2], ["W", 2], ["X", 1], ["Y", 2], ["Z", 1]];

//var VowelCount = 5;
//var IDVowelsArray = [["A", 9], ["E", 12], ["I", 9], ["O", 8], ["U", 4]];

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
    ['B', 'B',
    'C', 'C',
    'D', 'D', 'D', 'D',
    'F', 'F',
    'G', 'G', 'G',
    'H', 'H',
    'J',
    'K',
    'L', 'L', 'L', 'L',
    'M', 'M',
    'N', 'N', 'N', 'N', 'N', 'N',
    'P', 'P',
    'Q',
    'R', 'R', 'R', 'R', 'R', 'R',
    'S', 'S', 'S', 'S',
    'T', 'T', 'T', 'T', 'T', 'T',
    'V', 'V',
    'W', 'W',
    'X',
    'Y', 'Y',
    'Z'];

//**************************************************************
// This code handles the timer
//**************************************************************
var timer = null;
var restartTotalSeconds;
var gameTime = 30;
var gameTimeLeft = 0;

function StartTimer(startingValue) {

    var totalSeconds = 0;
    gameTimeLeft = 0;

    if (startingValue)//Check that this has a value
        totalSeconds = startingValue;

    timer = window.setInterval(setTime, 1000);
    function setTime() {
        ++totalSeconds;
        restartTotalSeconds = totalSeconds;
        $('#timer > #seconds').html(pad(totalSeconds % 60));
        $('#timer > #minutes').html(pad(parseInt(totalSeconds / 60) % 60));
        $('#timer > #hours').html(pad(parseInt((totalSeconds / 60) / 60)));
        gameTimeLeft = gameTime - (totalSeconds % 60);
        if ((totalSeconds % 60) == gameTime) {
            
            TimesUp(true);
        }
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
    playTickTock();
}

//**************************************************************
// This code will put the timer back to the curent game timer
//**************************************************************
function ReStartTimer() {
    StartTimer(restartTotalSeconds);
}
//**************************************************************
// This code will stop the timer
//**************************************************************
function StopTimer() {
    stopTickTock();
    if (timer) {
        window.clearInterval(timer);
        timer = null;
    }
}
var vowelCount = 0;
var conCount = 9;
//**************************************************************
//
//**************************************************************
function playTickTock()
{
    $("#audio").html("<embed src='../Sounds/ticktock.mp3' volume='100' hidden=true autostart=true loop=true/>");
}

function stopTickTock()
{
    $("#audio").html("");
}


//**************************************************************

//======================================================================

$(document).ready(function () {

    ResetTheCells();
    SetupDrag();
    $('#ButtonStartGame').attr('disabled', false);
    $('#ButtonStopGame').attr('disabled', true);
    $('#ButtonStopGame').addClass('DisabledButton');

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
//**************************************************************
//
//**************************************************************
function ResetTheCells()
{
    $(function () {
        $('#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9').attr('class', 'ui-draggable ui-droppable Blank');
        $('#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9').css({ 'z-index': '999' });

        $('#guess_1, #guess_2, #guess_3, #guess_4, #guess_5, #guess_6, #guess_7, #guess_8, #guess_9').attr('class', 'ui-draggable ui-droppable Blank');
        $('#guess_1, #guess_2, #guess_3, #guess_4, #guess_5, #guess_6, #guess_7, #guess_8, #guess_9').css({ 'z-index': '999' });

    });
    return;
}
//**************************************************************
//
//**************************************************************
function randomFromInterval(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}
//**************************************************************
//
//**************************************************************
function SetTheRandomLetters() {
    var localVowelsArray = vowelsArray.slice(0);
    var localConsArray = consArray.slice(0);

    for (var i = 0; i < 10; i++) {
        var i_randVowel = randomFromInterval(0, 41);
        if (localVowelsArray[i_randVowel] == nullChar) {
            while (localVowelsArray[i_randVowel] == nullChar) {
                i_randVowel = randomFromInterval(0, 41);
            }
        }
        nineRamdomVowels[i] = localVowelsArray[i_randVowel];
        localVowelsArray[i_randVowel] = nullChar

        var i_randCon = randomFromInterval(0, 55);
        if (localConsArray[i_randCon] == nullChar) {
            while (localConsArray[i_randCon] == nullChar) {
                i_randCon = randomFromInterval(0, 55);
            }
        }
        nineRamdomCons[i] = localConsArray[i_randCon];
        localConsArray[i_randCon] = nullChar;
    }
}
//**************************************************************
//
//**************************************************************
function SetupDrag()
{
    $('#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9').removeClass("Blank");
    $('#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9').css({ 'z-index': '999', 'position': 'relative', 'left': '0px', 'top': '0px' });
    $('#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9').mousedown(
        function () {
            $(this).css({ 'z-index': '1000' });
        }
    );
    $('#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9').mouseup(
        function () {
            $(this).css({ 'z-index': '999' });
        }
    );

    $('#guess_1, #guess_2, #guess_3, #guess_4, #guess_5, #guess_6, #guess_7, #guess_8, #guess_9').css({ 'z-index': '999', 'position': 'relative', 'left': '0px', 'top': '0px' });
    $('#guess_1, #guess_2, #guess_3, #guess_4, #guess_5, #guess_6, #guess_7, #guess_8, #guess_9').mousedown(
        function () {
            $(this).css({ 'z-index': '1000' });
        }
    );
    $('#guess_1, #guess_2, #guess_3, #guess_4, #guess_5, #guess_6, #guess_7, #guess_8, #guess_9').mouseup(
        function () {
            $(this).css({ 'z-index': '999' });
        }
    );

    $('#guess_1, #guess_2, #guess_3, #guess_4, #guess_5, #guess_6, #guess_7, #guess_8, #guess_9').draggable({ revert: 'invalid' });
    $('#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9').draggable({ revert: 'invalid' });

    $('#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9, #guess_1, #guess_2, #guess_3, #guess_4, #guess_5, #guess_6, #guess_7, #guess_8, #guess_9').droppable({
        accept: '#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9, #guess_1, #guess_2, #guess_3, #guess_4, #guess_5, #guess_6, #guess_7, #guess_8, #guess_9',
        //activeClass: 'ui-state-hover',
        hoverClass: 'ui-state-active',
        drop: function (event, ui) {
            var droppedOnto = $(this);
            var beingDragged = $(ui.draggable);

            if($(ui.draggable).hasClass("Blank"))
            {
                $(ui.draggable).removeClass("Blank");
            }

            var wasDroppedBlank = false;
            if($(this).hasClass("Blank"))
            {
                $(this).removeClass("Blank");
                wasDroppedBlank = true;
            }
            
            if($(this).hasClass("ui-draggable-dragging"))
                $(this).removeClass('ui-draggable-dragging');

            if($(ui.draggable).hasClass("ui-draggable-dragging"))
                $(ui.draggable).removeClass('ui-draggable-dragging');

            var attribDroppedClass = droppedOnto.attr("class");
            var attribDraggedClass = $(ui.draggable).attr("class");

            var strDroppedClassPartsArray = attribDroppedClass.split(" ");
            var strDraggedClassPartsArray = attribDraggedClass.split(" ");

            var DroppedLetter;
            if(strDroppedClassPartsArray.length == 4)
            {
                DroppedLetter = strDroppedClassPartsArray[3];
                $(this).removeClass(DroppedLetter);
            }
            else if(strDroppedClassPartsArray.length == 3)
            {
                DroppedLetter = strDroppedClassPartsArray[2];
                $(this).removeClass(DroppedLetter);
            }else
                DroppedLetter = "Blank";

            var DraggedLetter;
            if(strDraggedClassPartsArray.length == 3)
            {
                DraggedLetter = strDraggedClassPartsArray[2];
                $(ui.draggable).removeClass(DraggedLetter);
            }else
                DraggedLetter = "Blank";
            
            if(DraggedLetter.length >= 1)
            {
                $(this).addClass(DraggedLetter);
                $(this).css({ 'z-index': '999', 'position': 'relative', 'left': '0px', 'top': '0px' });
                $(ui.draggable).css({ 'z-index': '999', 'position': 'relative', 'left': '0px', 'top': '0px' });
                
            }
            var dropLen = DroppedLetter.length;
            if(dropLen >= 1)
            {
                $(ui.draggable).addClass(DroppedLetter);
            }

            if(wasDroppedBlank == true)
                $(ui.draggable).addClass('Blank');
        }
    });
}
//--------------------------------------------------------------

function StartGame(e) {
    $('#MessagePanelMessage').html("");
    $("#slider").slider("option", "disabled", true);

    StopTimer();
    ResetTheCells();
    SetTheRandomLetters();
    var counter;

    for(counter = 1; counter <= CellCount; counter++)
    {
        if(counter <= vowelCount)
            $('#given_' + counter).addClass(nineRamdomVowels[counter - 1]);
        if (counter > vowelCount && counter <= (conCount + vowelCount))
            $('#given_' + counter).addClass(nineRamdomCons[counter - 1]);
    }
  
    $('#given_1, #given_2, #given_3, #given_4, #given_5, #given_6, #given_7, #given_8, #given_9').removeClass("Blank");

    $('#timer > #seconds').html("00");
    $('#timer > #minutes').html("00");
    $('#timer > #hours').html("00");
    
    StartTimer();

    $('#ButtonStartGame').attr('disabled', true);
    $('#ButtonStartGame').addClass('DisabledButton');
    $('#ButtonStopGame').removeClass('DisabledButton');
    $('#ButtonStopGame').attr('disabled', false);

    return;
}
function StopGame(e) {
    
    TimesUp(false);

    var strGuess = "";

    for (counter = 1; counter <= CellCount; counter++) {
        var attribGuessClass = $('#guess_' + counter).attr("class");
        var strClassPartsArray = attribGuessClass.split(" ");
        if (strClassPartsArray[2] != "Blank")
            strGuess += strClassPartsArray[2];
        else
            break;
    }

    if (strGuess.length > 0)
        $('#MessagePanelMessage').load("AjaxLoad.aspx?param=" + strGuess + "&gameTimeLeft=" + gameTimeLeft);
}

function TimesUp(changeMessage) {
    $('#ButtonStartGame').attr('disabled', false);
    $('#ButtonStopGame').attr('disabled', true);
    $("#slider").slider("option", "disabled", false);

    $('#ButtonStartGame').removeClass('DisabledButton');
    $('#ButtonStopGame').addClass('DisabledButton');

    if (changeMessage)
        $('#MessagePanelMessage').html("<BR><BR>Times Up!<BR><BR>");
    
    StopTimer();
}