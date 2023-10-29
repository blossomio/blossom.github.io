// Get all the checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Add event listeners to each checkbox
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        const listItem = this.parentElement; // Get the parent <li> element
        if (this.checked) {
            listItem.classList.add('checked'); // Apply a 'checked' class for styling
        } else {
            listItem.classList.remove('checked'); // Remove the 'checked' class
        }
    });
});