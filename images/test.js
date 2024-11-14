// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the Start Quiz button
    document.getElementById('startQuizBtn').addEventListener('click', function() {
        // Remove the hidden class to display the categories section
        document.getElementById('categories').classList.remove('hidden');

        // Select all category elements
        const categories = document.querySelectorAll('.category');

        // Loop through each category and apply staggered animation
        categories.forEach((category, index) => {
            setTimeout(() => {
                category.style.opacity = '1'; // Fade in
                category.style.transform = 'translateY(0)'; // Slide in
            }, index * 200); // Stagger the animation for each category
        });
    });

    // Select all buttons in the categories
    const selectButtons = document.querySelectorAll('.selectCategory');

    // Add event listener to each category selection button
    selectButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the category associated with the selected button
            const category = this.parentElement.getAttribute('data-category');

            // Alert the user with their selected category
            alert(`You selected the category: ${category}`);

            // Here you can redirect to the quiz questions based on the selected category
            // For example, you could use:
            // window.location.href = `quiz.html?category=${category}`;
        });
    });
});