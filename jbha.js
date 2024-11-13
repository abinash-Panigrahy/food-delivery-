// Add this script to `order.html` to validate the form
function validateForm() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const contact = document.getElementById("contact").value;

    if (!name || !address || !contact) {
        alert("Please fill out all fields.");
        return false;
    }
    return true;
}
