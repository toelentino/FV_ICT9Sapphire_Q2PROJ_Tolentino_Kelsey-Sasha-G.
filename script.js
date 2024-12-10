
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const recipeCards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        recipeCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const reviewText = document.getElementById('reviewText').value;
    const reviewList = document.getElementById('reviewList');

    const newReview = document.createElement('div');
    newReview.classList.add('alert', 'alert-info');
    newReview.textContent = reviewText;
    reviewList.appendChild(newReview);

    document.getElementById('reviewText').value = ''; 
});