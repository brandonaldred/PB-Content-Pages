const container = document.getElementById('lp-builder');
container.innerHTML = `<div class="lp-builder-div"><h3>Build Landing Style</h3><img src="img/landing.jpg" /></div>
<div class="lp-builder-div"><h3>Build Blog Style</h3><img src="img/blog.jpg" /></div>`;




container.addEventListener('click', (e) => {
    let buildType = '';
    if (e.target.firstElementChild === null) {
        if(e.target.parentNode.firstElementChild.textContent === 'Build Landing Style') {
            landingStyle();
        } else if (e.target.parentNode.firstElementChild.textContent === 'Build Blog Style') {
            buildType = 'blog';
        }
    } else if (e.target.firstElementChild.textContent === 'Build Landing Style') {
        landingStyle();
    } else if (e.target.firstElementChild.textContent === 'Build Blog Style') {
        buildType = 'blog';
    }

    console.log(buildType);
});



function landingStyle() {
    container.innerHTML = '';
    const mainDiv = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'text';
    mainDiv.appendChild(input);
    container.appendChild(mainDiv);
}