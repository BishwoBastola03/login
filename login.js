document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the values entered by the user
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Check if username and password match the expected values
        if (username === 'god' && password === 'apk') {
            // Show success message with typing animation
            var successMessage = document.getElementById('successMessage');
            successMessage.textContent = ''; // Clear any existing text
            var successText = 'Password correct. Redirecting...';

            // Function to simulate typing effect for success message
            function typeSuccessMessage(index) {
                if (index < successText.length) {
                    successMessage.textContent += successText.charAt(index);
                    setTimeout(function() {
                        typeSuccessMessage(index + 1);
                    }, 50); // Adjust typing speed here (50ms for demo)
                }
            }

            // Start typing animation for success message
            typeSuccessMessage(0);

            successMessage.style.display = 'block'; // Ensure success message is visible

            // Redirect to main.html after a short delay (demo purpose)
            setTimeout(function() {
                window.location.href = 'main.html';
            }, successText.length * 50 + 2000); // Adjust delay for animation to complete

        } else {
            // Show error message with typing animation
            var errorMessage = document.getElementById('errorMessage');
            errorMessage.textContent = ''; // Clear any existing text
            var errorText = 'Username or password is incorrect. Please try again.';

            // Function to simulate typing effect for error message
            function typeErrorMessage(index) {
                if (index < errorText.length) {
                    errorMessage.textContent += errorText.charAt(index);
                    setTimeout(function() {
                        typeErrorMessage(index + 1);
                    }, 50); // Adjust typing speed here (50ms for demo)
                }
            }

            // Start typing animation for error message
            typeErrorMessage(0);

            errorMessage.style.opacity = '1'; // Ensure error message is visible
            errorMessage.style.transform = 'translateY(0)'; // Ensure error message is in place
            
            // Clear the input fields for a new login attempt after animation completes
            setTimeout(function() {
                errorMessage.style.opacity = '0'; // Hide error message
                errorMessage.style.transform = 'translateY(-10px)'; // Move error message slightly up
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
            }, errorText.length * 50 + 2000); // Adjust delay for animation to complete
        }
    });
});
   