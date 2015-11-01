<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="NLW.NineLetterWord" %>

<!DOCTYPE html>

<html lang="en">

<head runat="server">
<link href="~/CSS/NineLetterWord.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css"/>

    <title id="title">9 Letter Word</title>
</head>

<body>

<div id='Game' class='gameBoard NineLetterWord'>
    <div class='grid'>
        <div id="row1" class="row">
            <div id='One_1' class="cell"><div id='given_1'></div></div>
            <div id='One_2' class="cell"><div id='given_2'></div></div>
            <div id='One_3' class="cell"><div id='given_3'></div></div>
            <div id='One_4' class="cell"><div id='given_4'></div></div>
            <div id='One_5' class="cell"><div id='given_5'></div></div>
            <div id='One_6' class="cell"><div id='given_6'></div></div>
            <div id='One_7' class="cell"><div id='given_7'></div></div>
            <div id='One_8' class="cell"><div id='given_8'></div></div>
            <div id='One_9' class="cell"><div id='given_9'></div></div>
        </div>
        <div id="row2" class="row">
            <div id='Two_1' class='cell closed'></div>
            <div id='Two_2' class='cell closed'></div>
            <div id='Two_3' class='cell closed'></div>
            <div id='Two_4' class='cell closed'></div>
            <div id='Two_5' class='cell closed'></div>
            <div id='Two_6' class='cell closed'></div>
            <div id='Two_7' class='cell closed'></div>
            <div id='Two_8' class='cell closed'></div>
            <div id='Two_9' class='cell closed'></div>
        </div>
        <div id="row3" class="row">
            <div id='Three_1' class="cell"><div id='guess_1'></div></div>
            <div id='Three_2' class="cell"><div id='guess_2'></div></div>
            <div id='Three_3' class="cell"><div id='guess_3'></div></div>
            <div id='Three_4' class="cell"><div id='guess_4'></div></div>
            <div id='Three_5' class="cell"><div id='guess_5'></div></div>
            <div id='Three_6' class="cell"><div id='guess_6'></div></div>
            <div id='Three_7' class="cell"><div id='guess_7'></div></div>
            <div id='Three_8' class="cell"><div id='guess_8'></div></div>
            <div id='Three_9' class="cell"><div id='guess_9'></div></div>
        </div>
        <div class='spacer'>
            <label id='ConsenentsAndVowels'>Consenents: 9 - Vowels: 0</label>
        </div>
        <div class='slider' id="slider"></div>

        <div id="ResultPanel" class='Result'>
        <fieldset class='ResultFielsdSet'>
            <legend id="MessagePanelLegend" class="PanelLegend">Results</legend>
            <div id="MessagePanelMessage" class="CenterThis"></div>
        </fieldset>
        </div>

    </div>

</div>

<div id='ButtonBar' class='ButtonBar NineLetterWord'>
        
    <input id="ButtonStartGame" class='ActionAreaButton Button' type="button" value="Start" onclick="StartGame(event)"/>
    <input id="ButtonStopGame" class='ActionAreaButton Button' type="button" value="Stop" onclick="StopGame(event)"/>
    <div  class='TimerBar NineLetterWord'>
        <div id="timer" class='TextTimer'><a class="HelpLink" id="HelpLink" onclick="Help(event)">?</a>Game Time : <label id="hours" class='TextTimer'>00</label>:<label id="minutes" class='TextTimer'>00</label>:<label id="seconds" class='TextTimer'>00</label></div>
    </div>
<div class='footer'>&copy;Nine Letter Word</div>        
</div>

<span id="audio" />

</body>

<script type="text/jscript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script type="text/jscript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

<script src="Scripts/9_letter.js" type="text/javascript"></script>
</html>
