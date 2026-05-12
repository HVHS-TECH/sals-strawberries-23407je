
console.log("Running Sal's Strawberries")
var AuthenticationListener
function writeForm(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
}
function fb_authenticate() {
    AuthenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
}
function fb_handleLogin(_User) {
    if (_User) {
        console.log("User are already logged in");
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