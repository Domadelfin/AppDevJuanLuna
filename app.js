function hoverpainting(element) {element.setAttribute('src', 'img/PaintingPink.png');}
function unhoverpainting(element) {element.setAttribute('src', 'img/PaintingsLogo.png');}
function hoveroa(element) {element.setAttribute('src', 'img/OtherArtistPink.png');}
function unhoveroa(element) {element.setAttribute('src', 'img/OtherArtistLogo.png');}
function hoverjl(element) {element.setAttribute('src', 'img/jllogopink.png');}
function unhoverjl(element) {element.setAttribute('src', 'img/JuanLunaLogo.svg');}


function changeText(newDescription) {
    var textElement = document.getElementById('changingText');
    var titleElement = document.getElementById('changingTitle');
    var dateElement = document.getElementById('changingDate');
    
    if (newDescription == 1) {
        titleElement.innerText = "ENSUEÑOS DE AMOR";
        dateElement.innerText = "(1890)";
        textElement.innerText = "Literally means 'Daydreams of Love', is a 'dreamy' oil on wood painting. It depicts Luna's wife Maria de la Paz Pardo de Tavera while sound asleep.";
    } else if (newDescription == 2) {
        titleElement.innerText = "TAMPUHAN";
        dateElement.innerText = "(1895)";
        textElement.innerText = "Tampuhan is a 1895 classic oil on canvas painting. It depicts a Filipino man and Filipino woman having a lovers quarrel.";
    } else if (newDescription == 3) {
        titleElement.innerText = "THE PARISIAN LIFE";
        dateElement.innerText = "(1892)";
        textElement.innerText = "The Parisian Life, also known as Interior d'un Cafe, literally meaning 'Inside a Cafe', is a 1892 oil on canvas painting. it portrayed a scene inside a cafe in Paris with a woman identified as a courtesan or a prostitute representing 'fallen womanhood', who was about to rise from a sofa overshadowing three men placed at the far left corner of the painting";
    } else if (newDescription == 4) {
        titleElement.innerText = "EL PACTO DE SANGRE";
        dateElement.innerText = "(1886)";
        textElement.innerText = "Literally means 'The Blood Compact', it portrays the blood compact ritual between Rajan Sikatuna and Miguel Lopez de Legazpi who is accompanied by other conquistadors.";
    } else if (newDescription == 5) {
        titleElement.innerText = "THE BATTLE OF LEPANTO";
        dateElement.innerText = "(1887)";
        textElement.innerText = "The painting features Don Juan of Austria in battle in 1571 while at at the bow of a ship.";
    } else if (newDescription == 6) {
        titleElement.innerText = "DAMAS ROMANAS";
        dateElement.innerText = "(1882)";
        textElement.innerText = "Damas Romanas or 'The Roman Dames' is an oil on canvas painting by Luna when he was a student of the school of painting in the Real Academia de Bellas Artes de San Fernando in Madrid, Spain in 1877.";
    } else if (newDescription == 7) {
        titleElement.innerText = "NENA Y TINITA";
        dateElement.innerText = "(1897)";
        textElement.innerText = "This is a painting of Nena and Tinita by Juan Luna.";
    } else if (newDescription == 8) {
        titleElement.innerText = "SOUVENIR DE 1899";
        dateElement.innerText = "(1899)";
        textElement.innerText = "This painting was completed by Luna on May 21, 1899, Leitmeritz, Bohemia, after his meeting with Rizal's bosom friend, Dr. Ferdinand Blumentritt.";
    }
}