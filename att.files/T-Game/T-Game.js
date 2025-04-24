<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <style>
        body {
            display: flex;
            height: 100vh;
            margin: 0;
            background-color: #04DC87;
        }
        #P1 {
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 100vh;
            width: 120vw;
        }
        #title {
            margin-top: 80px;
            margin-left: 150px;
            color: #260381;
            font-size: 25px;
            text-shadow: -1px -1px 0px #FF5733;
        }
        .openbtn {
            width: 130px;
            height: 130px;
            cursor: pointer;
            margin-left: 30px;
            float: left;
        }
        .openbtn img {
            position: fixed;
            top: 40px;
            left: 20px;
            z-index: 10;
        }
        #Px {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
            display: none;
        }
        #drag-elements {
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            gap: 10px;
            margin-bottom: -10px;
            margin-top: -120px;
        }
        #P2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
        }
        .droptarget {
            border: 2px solid black;
            height: 160px;
            width: 91px;
            margin-bottom: 8px;
            display: inline-block;
            vertical-align: top;
        }
        #line1, #line2 {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin: 0;
            padding: 0;
        }
        #game-over {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 100;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 20px;
            border-radius: 10px;
            display: none;
            font-size: 24px;
        }
        #correct-attempts-container {
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 5px;            
            position: absolute;
            top: 20px;
            padding: 0.5% 70%;
            font-size: 16px;
            color: white;
            white-space: nowrap;
        }
        #winner {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.6);
            display: none;
            align-items: center;
            justify-content: center;
        }
        #winner img {
            max-width: 100%;
            max-height: 100%;
        }
    </style>
</head>
<body>
    <div class="row" id="P1">
        <h1 id="title">Arrange these packages exactly as shown in the photo to proceed!</h1>
        <div class="openbtn" id="boutons">
            <div>
                <img src="foto/heartbtn.svg" class="elemento" type="button" onclick="showPacket()">
            </div>
            <img id="Px" src="foto/tabacrb.svg" alt="affichez le Packet">
        </div>
        <div class="col-sm-12" id="drag-elements">
            <p id="drag-marlboro" draggable="true" ondragstart="drag(event)">
                <img src="foto/5marlboro.svg" alt="???"></p>
            <p id="drag-camel" draggable="true" ondragstart="drag(event)">
                <img src="foto/11camel.svg" alt="???"></p>
            <p id="drag-winston" draggable="true" ondragstart="drag(event)">
                <img src="foto/1winston.svg" alt="???"></p>
            <p id="drag-salem" draggable="true" ondragstart="drag(event)">
                <img src="foto/2salem.svg" alt="???"></p>
            <p id="drag-king" draggable="true" ondragstart="drag(event)">
                <img src="foto/10king.svg" alt="???"></p>
            <p id="drag-perfectos" draggable="true" ondragstart="drag(event)">
                <img src="foto/7perfectos.svg" alt="???"></p>
            <p id="drag-kent" draggable="true" ondragstart="drag(event)">
                <img src="foto/8kent.svg" alt="???"> </p>
            <p id="drag-stuyvesant" draggable="true" ondragstart="drag(event)">
                <img src="foto/6stuyvesant.svg" alt="???"></p>
            <p id="drag-special" draggable="true" ondragstart="drag(event)">
                <img src="foto/3special.svg" alt="???"></p>
            <p id="drag-consulate" draggable="true" ondragstart="drag(event)">
                <img src="foto/9consulate.svg" alt="???"></p>
            <p id="drag-lucky" draggable="true" ondragstart="drag(event)">
                <img src="foto/12lucky.svg" alt="???"></p>
            <p id="drag-dunhill" draggable="true" ondragstart="drag(event)">
                <img src="foto/4dunhill.svg" alt="???"></p>
        </div>
        <div class="row" id="P2">
            <div class="col-sm-12" id="line1">
                <div id="droptarget1" class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <div id="droptarget2" class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <div id="droptarget3" class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <div id="droptarget4" class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <div id="droptarget5" class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <div id="droptarget6" class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            </div>
            <div class="col-sm-12" id="line2">
                <div id="droptarget7" class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <div id="droptarget8" class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <div id="droptarget9" class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <div id="droptarget10" class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <div id="droptarget11" class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <div id="droptarget12" class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            </div>
        </div>
    </div>

    <div id="game-over">
        Game Over! Click Restart to try again.
        <button onclick="restartGame()">Restart</button>
    </div>

    <div id="winner">
        <img src="foto/gagnant.gif" alt="You Win!">
    </div>

    <div id="correct-attempts-container">
        <span id="correct-attempts">Correct Attempts: 0</span>
    </div>

    <script>


// Initialize game state variables
let correctAttempts = 0; 
let incorrectAttempts = 0; 
const maxAttempts = 3; 
const totalDropTargets = 12; 
let filledDropTargets = 0; 




// Function to allow elements to be dropped on a target
function allowDrop(event) {
    event.preventDefault(); 
}
// Function to handle the drag start event
function drag(event) {
    event.dataTransfer.setData("text", event.target.parentNode.id); 
}
// Function to handle the drop event
function drop(event) {
    event.preventDefault(); 
    const data = event.dataTransfer.getData("text"); 
    const draggedElement = document.getElementById(data); 

    // Check if the dragged element is dropped on the correct target
    if ((event.target.id === "droptarget1" && draggedElement.id === "drag-winston") ||
        (event.target.id === "droptarget2" && draggedElement.id === "drag-salem") ||
        (event.target.id === "droptarget3" && draggedElement.id === "drag-special") ||
        (event.target.id === "droptarget4" && draggedElement.id === "drag-dunhill") ||
        (event.target.id === "droptarget5" && draggedElement.id === "drag-marlboro") ||
        (event.target.id === "droptarget6" && draggedElement.id === "drag-stuyvesant") ||
        (event.target.id === "droptarget7" && draggedElement.id === "drag-perfectos") ||
        (event.target.id === "droptarget8" && draggedElement.id === "drag-kent") ||
        (event.target.id === "droptarget9" && draggedElement.id === "drag-consulate") ||
        (event.target.id === "droptarget10" && draggedElement.id === "drag-king") ||
        (event.target.id === "droptarget11" && draggedElement.id === "drag-camel") ||
        (event.target.id === "droptarget12" && draggedElement.id === "drag-lucky")) {



    



        correctAttempts++; // Increment the correct attempts counter
        document.getElementById("correct-attempts").textContent = "Correct Attempts: " + correctAttempts; 

        draggedElement.style.visibility = 'hidden'; 




        // Clone the dragged element's image and place it on the drop target
        const clone = draggedElement.firstElementChild.cloneNode(true);
        event.target.innerHTML = ""; 
        event.target.appendChild(clone); 

        filledDropTargets++; // Increment the filled drop targets counter

        // Check if all drop targets are filled
        if (filledDropTargets === totalDropTargets) {
            setTimeout(showWinner, 1000); 
        }

    } else {
        incorrectAttempts++; 
        if (incorrectAttempts >= maxAttempts) {
            showGameOver(); 
        }
    }
}

// Function to show the game over message
function showGameOver() {
    document.getElementById("game-over").style.display = "block"; 
    disableAllDragAndDrop(); 
}

// Function to disable all drag-and-drop interactions
function disableAllDragAndDrop() {
    const droptargets = document.querySelectorAll('.droptarget');
    droptargets.forEach(target => {
        target.removeEventListener('drop', drop); 
        target.removeEventListener('dragover', allowDrop); 
    });

    const draggables = document.querySelectorAll('[draggable="true"]');
    draggables.forEach(item => {
        item.setAttribute('draggable', 'false'); 
    });
}



// Function to show the packet image
function showPacket() {
    if (document.getElementById("game-over").style.display === "block") {
        restartGame(); 
        return; 
    }

    const packetImage = document.getElementById("Px");
    packetImage.style.display = "block"; 

    // Hide game elements to show the packet image
    document.getElementById("line1").style.display = "none";
    document.getElementById("line2").style.display = "none";
    document.getElementById("drag-elements").style.display = "none";

    setTimeout(hidePacket, 2000); // Hide the packet image after 2 seconds
}

// Function to hide the packet image and restore game elements
function hidePacket() {
    const packetImage = document.getElementById("Px");
    packetImage.style.display = "none"; 

    // Restore the display of game elements
    document.getElementById("line1").style.display = "flex";
    document.getElementById("line2").style.display = "flex";
    document.getElementById("drag-elements").style.display = "flex";
}

// Function to restart the game
function restartGame() {
    incorrectAttempts = 0; 
    correctAttempts = 0; 
    filledDropTargets = 0; 
    document.getElementById("correct-attempts").textContent = "Correct Attempts: 0"; 

    document.getElementById("game-over").style.display = "none"; 
    document.getElementById("winner").style.display = "none"; 

    // Re-enable all drag-and-drop interactions
    const droptargets = document.querySelectorAll('.droptarget');
    droptargets.forEach(target => {
        target.addEventListener('drop', drop); 
        target.addEventListener('dragover', allowDrop); 
        target.innerHTML = ""; 
    });

    const draggables = document.querySelectorAll('[draggable="true"], [draggable="false"]');
    draggables.forEach(item => {
        item.setAttribute('draggable', 'true'); 
        item.style.visibility = 'visible'; 
    });
}

// Function to show the winner image
function showWinner() {
    document.getElementById("winner").style.display = "flex"; 
}
    </script>
</body>
</html>