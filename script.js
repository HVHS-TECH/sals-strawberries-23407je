
console.log("Running Sal's Strawberries")
const HTML_OUTPUT = document.getElementById("databaseOutput");
var AuthenticationListener
let GLOBAL_User;
function writeForm(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    const name = document.getElementById("name").value;
    const fruitQuantity = document.getElementById("fruitQuantity").value;

     .[;'.database().ref('/').set(favoriteFruit);
}

function fb_handleLogin(_User) {
    if (_User) {
        console.log("User is logged in");
        HTML_OUTPUT.innerHTML += "<br>" + "You are logged in";
        GLOBAL_User = _User;
    } else {
        console.log("User has not logged in");
        HTML_OUTPUT.innerHTML = "You are not actively logged in" + "<br>" + "Please log in with the current popup.";
        loginWithGoogle();
    }
}
function loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
        GLOBAL_User = result.user;
        console.log("User has logged in");
    });
}
function fb_write() {

}