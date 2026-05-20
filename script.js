
console.log("Running Sal's Strawberries")
const HTML_OUTPUT = document.getElementById("databaseOutput");
let authenticationListener
let GLOBAL_User;
SalsStrawberries = {
    SalsStrawberries: {
        Users: {
            Message: "Here is every google users name data"
        },
    },
}

    firebase.database().ref('/').update(SalsStrawberries);


function fb_handleLogin(_User) {
    if (_User) {
        console.log("User is logged in");
        HTML_OUTPUT.innerHTML = "<br>" + "You are logged in";
        GLOBAL_User = _User;
        firebase.database().ref('/SalsStrawberries/Users/' + GLOBAL_User.uid).update(
            {
                name: GLOBAL_User.displayName
            }
        );
    } else {
        console.log("User has not logged in");
        HTML_OUTPUT.innerHTML = "You are not actively logged in" + "<br>" + "Please log in with the current popup.";
        loginWithGoogle();
    }
}

function loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
        GLOBAL_User = result.user;
        console.log("User has logged in");
        console.log(GLOBAL_User);
    });
}

function fb_logout() {
    authenticationListener();
    firebase.auth().signOut();
    console.log("user has logged out");
}

function writeForm() {
    // Get the form data
    const favouriteFruit = document.getElementById("favoriteFruit").value;
    const fruitQuantity = document.getElementById("fruitQuantity").value;
    firebase.database().ref('/SalsStrawberries/Users/' + GLOBAL_User.uid).update(
        {
            favFruit: favouriteFruit,
            quantity: fruitQuantity
        }
    );
}

function fb_write() {
    writeForm();
    console.log(GLOBAL_User);
let emailStart = ["Dear", "Hello", "Goodmorrow", "Fine day"];
let startIndex = Math.floor(Math.random() * emailStart.length);
let startResponse = emailStart[startIndex];
HTML_OUTPUT.innerHTML = startResponse + " " + GLOBAL_User.displayName + " I hear your favourite fruit is "
}

