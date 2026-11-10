const langEnButton = document.getElementById("en-button");
const langUaButton = document.getElementById("ua-button");

langEnButton.onclick = () => {
    if(!langEnButton.classList.contains('active')) {
        langUaButton.classList.remove('active');
        langEnButton.classList.add('active');
    }

}
    
langUaButton.onclick = () => {
    if(!langUaButton.classList.contains('active')) {
        langEnButton.classList.remove('active');
        langUaButton.classList.add('active');
    }
}
