
console.log("Running Sal's Strawberries")
const HTML_OUTPUT = document.getElementById("databaseOutput");
let authenticationListener;
let GLOBAL_User;
let loginCheck;

async function fb_handleLogin(_User) {

    if (_User) {
        HTML_OUTPUT.innerHTML = "Please wait for the login." + "<br>" + "This will not take long."
        GLOBAL_User = _User;
        await firebase.database().ref('/SalsStrawberries/Users/' + GLOBAL_User.uid).update(
            {
                name: GLOBAL_User.displayName,
                email: GLOBAL_User.email
            }
        );
        loginCheck = "loginStored"
        console.log("User is logged in");
        HTML_OUTPUT.innerHTML = "You are logged in";
    } else {
        console.log("User has not logged in");
        HTML_OUTPUT.innerHTML = "You are not actively logged in" + "<br>" + "Please log in with the current popup.";
        loginWithGoogle();
    }
    if (GLOBAL_User.uid == "h1nH68fOsrZcCeUz0XxjdfH9xEz1") {
        console.log("hello");
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
    HTML_OUTPUT.innerHTML = "You have logged out, thank you for joining us today."
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
    if (loginCheck == "loginStored") {
        console.log("logged in");
        writeForm();
        console.log(GLOBAL_User);
        firebase.database().ref('/SalsStrawberries/Users/' + GLOBAL_User.uid + '/favFruit').on('value', displaydata, fb_error);
    } else {
        console.log("not logged in");
        HTML_OUTPUT.innerHTML = "Please log in before submitting."
    }
}
function displaydata(snapshot) {
    let emailStart = ["Dear", "Hello", "Goodmorrow", "Fine day"];
    let startIndex = Math.floor(Math.random() * emailStart.length);
    let startResponse = emailStart[startIndex];

    let emailOpinion = [" well I wont judge you", ". Thats my favourite fruit as well", ". I find them overrated but they are nice", " and damn taste really nice"];
    let opinionIndex = Math.floor(Math.random() * emailOpinion.length);
    let opinionResponse = emailOpinion[opinionIndex];

    let fruitdata = snapshot.val();

    let discount = Math.round(Math.random() * 80);
    HTML_OUTPUT.innerHTML = startResponse + " " + GLOBAL_User.displayName + " I hear your favourite fruit is the " + fruitdata + opinionResponse + ". Well because you were apart of the survey I would like to give you " + discount + "% off for joining us today!!"
}