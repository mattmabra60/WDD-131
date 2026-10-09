const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    // Only react to clicks on the thumbnail images
    if (e.target.tagName !== 'IMG') return;

    // Swap "-sm" for "-full" to get the high resolution version
    const fullSrc = e.target.src.replace('-sm', '-full');

    modalImage.src = fullSrc;
    modalImage.alt = e.target.alt;

    // showModal() gives you the backdrop and Esc-to-close for free
    modal.showModal();
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
     
function openModal(e) {
    // Only react to clicks on the thumbnail images
    if (e.target.tagName !== 'IMG') return;

    // Swap "-sm" for "-full" to get the high resolution version
    const fullSrc = e.target.src.replace('-sm', '-full');

    modalImage.src = fullSrc;
    modalImage.alt = e.target.alt;

    // showModal() gives you the backdrop and Esc-to-close for free
    modal.showModal();
}