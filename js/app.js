let lpContainer = document.getElementById('lp-container');
lpContainer.addEventListener('click', (e) => {
    e.target.innerHTML = `<input type="textarea" value="${e.target.innerText}"></input>`;
    let input = document.querySelector('INPUT');
    input.addEventListener('keyup', (e) => {
       if(e.keyCode === 13) {
        console.log(input.value);
        input.parentNode.innerHTML = input.value;
        input.parentNode.removeChild(input);
       };
    })
});

//when item is clicked, turn it into a text area and when enter is clicked, change it back to the original element