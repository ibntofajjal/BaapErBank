document.getElementById("submit-button").addEventListener('click', function(){
    // get email from user
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    // get user password
    const passField = document.getElementById("user-password");
    const userPass = passField.value;
    // check account valid or not
    if (userEmail == 'pola@baap.com' && userPass == 'baaperBank') {
        window.location.href = 'banking.html';
    } else {
        alert(`Try with Default Account 👇🏻
        email : pola@baap.com | pass : baaperBank`);
    };
})