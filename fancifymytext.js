function makeTextBigger() {
    // Select the text area using its ID
    var textArea = document.getElementById('textArea');

    // Change the font size of the text area
    textArea.style.fontSize = '24pt';
}
function changeStyle() {
    var textArea = document.getElementById('textArea');
    var fancyShmancy = document.getElementById('fancyShmancy');
    var boringBetty = document.getElementById('boringBetty');

    if (fancyShmancy.checked) {
        // Apply styles for FancyShmancy
        textArea.style.fontWeight = 'bold';       // Make text bold
        textArea.style.color = 'blue';            // Change text color to blue
        textArea.style.textDecoration = 'underline';  // Underline the text
    } else if (boringBetty.checked) {
        // Revert to normal styles for BoringBetty
        textArea.style.fontWeight = 'normal';     // Make text normal weight
        textArea.style.color = 'initial';         // Revert text color to default
        textArea.style.textDecoration = 'none';   // Remove text underline
    }
}
function mooFunction() {
    var textArea = document.getElementById('textArea');
    var text = textArea.value;

    // Uppercase the text
    text = text.toUpperCase();

    // Split the text into sentences and add '-Moo' to the end of each sentence
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim() + "-Moo";
        }
    }
    text = sentences.join(". ");

    // Update the text area
    textArea.value = text;
}
