//name functionality
document.getElementById('nameForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const nameInput = document.getElementById('name'); // Get the name input element
    const formContent = nameInput.value; //get element value
    document.getElementById("yourName").innerHTML = formContent;
    jsonNameInput = JSON.stringify(formContent); //stringify the value
    localStorage.setItem("name", jsonNameInput);
});

if(typeof(Storage) !== "undefined") { //checks for local storage
    if (localStorage.getItem("name") !== null) { //checks if name key is in storage
        let name = localStorage.getItem("name"); //retrieves name key value
        let storedName = JSON.parse(name);                  //parses JSON
        document.getElementById("yourName").innerHTML = storedName + "!"; //sets html
    } else {
        console.log("No name key found");
    }
} else {
    console.log("No local storage found");
}