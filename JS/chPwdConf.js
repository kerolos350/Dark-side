function validateForm() {
    var password = document.getElementById("chPassword").value;
    var confirmPassword = document.getElementById("chConfirmPassword").value;

    if (password !== confirmPassword) {
        document.getElementById("chMessage").textContent = "Passwords do not match!";
        return false;
    } else {
        document.getElementById("chMessage").textContent = "Registration successful!";
        return true;
    }
}