const builder = document.getElementById('lp-builder');
const builderModal = document.getElementById('lp-builder-modal');
builder.addEventListener('click', (e) => {
    console.log(e.target.id);
    if(e.target.id === 'lp-builder-modal') {
        builderModal.style.display = 'none';
    }
    if(e.target.tagName === 'P') {
        console.log('P Tag');
    }
    if(e.target.tagName === 'H3') {
        console.log('H3 Tag');
    }
    if(e.target.tagName === 'A') {
        e.preventDefault();
        console.log('A Tag');
    }
    if(e.target.tagName === 'IMG') {
        console.log('IMG Tag');
    }
    if(e.target.className === 'lp-hero-overlay') {
        console.log(e.target.nextElementSibling.src)
    }
});