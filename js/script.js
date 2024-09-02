document.addEventListener('DOMContentLoaded', function () {
    // Elements for the search functionality (from previous code)
    const searchInput = document.getElementById('searchInput');
    const searchResultPopup = document.getElementById('searchResultPopup');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn');
    const minimizeBtn = document.getElementById('minimizeBtn');
    const enlargeBtn = document.getElementById('enlargeBtn');

    const menuKeywords = ['burger', 'pizza', 'siopao', 'siomai', 'lomi', 'shake', 'potato fries', 'footlong'];

    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const filter = searchInput.value.toLowerCase();
            const matchedItem = menuKeywords.find(item => item.includes(filter));

            if (matchedItem) {
                searchResultPopup.textContent = `We have ${matchedItem} available!`;
            } else {
                searchResultPopup.textContent = "We don't have that available.";
            }

            popup.style.display = 'block';
        }
    });

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    minimizeBtn.addEventListener('click', function () {
        popup.classList.toggle('minimized');
    });

    enlargeBtn.addEventListener('click', function () {
        popup.classList.toggle('enlarged');
    });

    // Elements for the login functionality
    const loginButton = document.querySelector('nav ul li a[href="#login"]');
    const loginPopup = document.getElementById('loginPopup');
    const loginCloseBtn = document.getElementById('loginCloseBtn');
    const loginForm = document.getElementById('loginForm');
    const successPopup = document.getElementById('successPopup');
    const successCloseBtn = document.getElementById('successCloseBtn');

    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        loginPopup.style.display = 'block'; // Show the login popup
    });

    loginCloseBtn.addEventListener('click', function () {
        loginPopup.style.display = 'none'; // Close login popup
    });

    successCloseBtn.addEventListener('click', function () {
        successPopup.style.display = 'none'; // Close success popup
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Here, you could add validation or authentication logic if needed
        loginPopup.style.display = 'none'; // Close the login popup
        successPopup.style.display = 'block'; // Show the success popup
    });
});
