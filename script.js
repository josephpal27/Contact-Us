// Functionality For Map Address Pop-Up
document.addEventListener('DOMContentLoaded', function () {
    const flags = document.querySelectorAll('.india-map .flag');
    const addresses = document.querySelectorAll('.india-map .address');

    flags.forEach(flag => {
        flag.addEventListener('mouseenter', function () {
            const addressId = this.id.replace('flag', 'address');
            const address = document.getElementById(addressId);
            address.style.opacity = '1';
            address.style.visibility = 'visible';
        });

        flag.addEventListener('mouseleave', function () {
            const addressId = this.id.replace('flag', 'address');
            const address = document.getElementById(addressId);
            setTimeout(() => {
                if (!address.matches(':hover')) {
                    address.style.opacity = '0';
                    address.style.visibility = 'hidden';
                }
            }, 100);
        });
    });

    addresses.forEach(address => {
        address.addEventListener('mouseenter', function () {
            this.style.opacity = '1';
            this.style.visibility = 'visible';
        });

        address.addEventListener('mouseleave', function () {
            this.style.opacity = '0';
            this.style.visibility = 'hidden';
        });
    });
});


// ------------------------------------------------------------------------------------------------------------------------------------------

// Functionality Dropdown
document.addEventListener('DOMContentLoaded', () => {
    const servicesInput = document.getElementById('services');
    const dropdown = document.getElementById('dropdown');
    const caret = document.getElementById('caret');
    const dropOptions = document.querySelectorAll('.drop-option');

    // Show the dropdown with transition
    servicesInput.addEventListener('focus', () => {
        dropdown.classList.add('show');
        servicesInput.setAttribute('aria-expanded', 'true');
        caret.style.transform = 'rotate(180deg)'; // Rotate caret up
    });

    // Hide the dropdown with transition when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!servicesInput.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
            servicesInput.setAttribute('aria-expanded', 'false');
            caret.style.transform = 'rotate(0deg)'; // Rotate caret back down
        }
    });

    // Set the selected option as the input value and hide the dropdown
    dropOptions.forEach(option => {
        option.addEventListener('click', () => {
            servicesInput.value = option.textContent;
            dropdown.classList.remove('show');
            servicesInput.setAttribute('aria-expanded', 'false');
            caret.style.transform = 'rotate(0deg)'; // Rotate caret back down
        });
    });
});


//   ------------------------------------------------------------------------------------------------------------------------------------

// Functionality For Back To Top Button
let backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.addEventListener('click', () => {
    window.scrollTo(0,0);
})
