function scrollPhotos(direction) {
    const container = document.getElementById('slideshowContainer');
    // Match image width
    const scrollAmount = 400; 

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollBy
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
