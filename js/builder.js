
//for use within the objects and methods to create elements
function builder(item, atr) {
    item = document.createElement(item);
    for (let i = 0; i < atr.length; i++) {
        let attribute = atr[i];
        item[attribute.atr] = attribute.val;
    }
    return item;
}


const build = {
    leadIn: (object) => {
        const leadIn = builder('DIV', [{ atr: 'className', val: 'lp-lead-in' }]);
        const leadInCopy = builder('DIV', [{ atr: 'className', val: 'lp-lead-in-copy' }]);
        const h3 = builder('H3', [{ atr: 'innerHTML', val: object.h3 }]);
        const p = builder('P', [{ atr: 'innerHTML', val: object.p }]);
        leadInCopy.appendChild(h3);
        leadInCopy.appendChild(p);
        leadIn.appendChild(leadInCopy);
        if (object.img) {
            const img = builder('IMG', [{ atr: 'src', val: object.img }]);
            leadIn.appendChild(img);
        }
        object.html = leadIn;
    },
    fullWidthHero: (object) => {
        const mainDiv = builder('DIV', [{ atr: 'className', val: 'lp-full-width' }]);
        //Create image container & image
        const imgDiv = builder('DIV', [{ atr: 'className', val: 'lp-full-width-image' }]);
        if (object.overlay) {
            const dkOverlay = builder('DIV', [{ atr: 'className', val: 'lp-hero-overlay' }]);
            imgDiv.appendChild(dkOverlay);
        }
        const image = builder('IMG', [{ atr: 'src', val: object.img }]);
        image.style.all = 'unset';
        imgDiv.appendChild(image);

        //Create copy container
        const copyDiv = builder('DIV', [{ atr: 'className', val: 'lp-full-width-copy' }]);
        const h3 = builder('H3', [{ atr: 'innerHTML', val: object.h3 }]);
        const p = builder('P', [{ atr: 'innerHTML', val: object.p }]);
        const a = builder('A', [{ atr: 'innerText', val: object.aText }, { atr: 'src', val: object.link }, { atr: 'className', val: 'lp-full-width-info-white-outline-button' }]);
        copyDiv.appendChild(h3);
        copyDiv.appendChild(p);
        copyDiv.appendChild(a);
        //Putting it all together.
        mainDiv.appendChild(imgDiv);
        mainDiv.appendChild(copyDiv);
        object.html = mainDiv;
    },
    fullWidthInfo: (object) => {
        const mainDiv = builder('DIV', [{ atr: 'className', val: 'lp-full-width-info' }]);
        const imgDiv = builder('DIV', [{ atr: 'className', val: 'lp-full-width-info-image' }]);
        const img = builder('IMG', [{ atr: 'src', val: object.img }]);
        const copyDiv = builder('DIV',[{ atr: 'className', val: 'lp-full-width-info-copy' }]);
        const h3 = builder('H3', [{ atr: 'innerHTML', val: object.h3 }]);
        const p = builder('p', [{ atr: 'innerHTML', val: object.p }]);
        const a = builder('A', [{ atr: 'innerText', val: object.aText }, { atr: 'href', val: object.aLink } ]);
        const learn = /^(learn)/i.test(object.aText);
        let learnButton = 'lp-full-width-info-gray-outline-button';
        let copyDivClass;
        if (object.opt) {
            if (object.opt === 'dk') {
                copyDivClass = 'lp-full-width-info-dk-bg';
                learnButton = 'lp-full-width-info-white-outline-button';
            }
            if (object.opt === 'lt') {
                copyDivClass = 'lp-full-width-info-lt-bg';
            }

            copyDiv.classList.add(copyDivClass);
        }

        if (learn) {
            a.classList.add(learnButton);
        }

        imgDiv.appendChild(img);
        mainDiv.appendChild(imgDiv);
        copyDiv.appendChild(h3);
        copyDiv.appendChild(p);
        copyDiv.appendChild(a);
        mainDiv.appendChild(copyDiv);
        object.html = mainDiv;
    },
    paragraph: (object) => {
        const mainDiv = document.createElement('DIV');
        console.log(object);
        if (object.img) {
            const img = builder('IMG', [{ atr: 'className', val: 'lp-body-copy-image' }, { atr: 'src', val: object.img }]);
            console.log('This ran');
            mainDiv.appendChild(img);
        }
        if (object.h3) {
            const h3 = builder('H3', [{ atr: 'className', val: 'lp-body-copy-title' }, { atr: 'innerHTML', val: object.h3 }]);
            mainDiv.appendChild(h3);
        }
        const p = builder('P', [{ atr: 'className', val: 'lp-body-copy' }, { atr: 'innerHTML', val: object.p }]);
        mainDiv.appendChild(p);
        object.html = mainDiv;
    },
    video: (object) => {
        const mainDiv = builder('DIV',[{ atr: 'className', val: 'lp-video' }]);
        const iframe = builder('IFRAME', [{ atr: 'src', val: `https://www.youtube.com/embed/${object.videoId}` }, { atr: 'frameBorder', val: '0' }, { atr: 'allow', val: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' }]);
        mainDiv.appendChild(iframe);
        object.html = mainDiv;
    },
    threeCol: (object) => {
        const mainDiv = document.createElement('DIV');
        mainDiv.className = 'lp-three-col';
        if (object.h3) {
            const headerDiv = builder('DIV', [{ atr: 'className', val: 'lp-product-head' }]);
            const h3 = builder('H3', [{ atr: 'innerHTML', val: object.h3 }]);
            headerDiv.appendChild(h3);
            if (object.aLink) {
                const a = builder('A', [{ atr: 'href', val: object.aLink }, { atr: 'innerText', val: object.aText}]);
                headerDiv.appendChild(a);
            }
            mainDiv.appendChild(headerDiv);
        }
        const columnContainer = builder('DIV', [{ atr: 'className', val: 'lp-three-col' }]);
        for (let i = 0; i < object.subItems.length; i++) {
            const column = builder('DIV', [{ atr: 'className', val: 'lp-column' }]);
            const img = builder('IMG', [{ atr: 'src', val: object.subItems[i].img}]);
            const title = builder('P', [{ atr: 'className', val: 'lp-column-title' }, { atr: 'src', val: object.subItems[i].h3}]);
            const p = builder('P', [{ atr: 'innerHTML', val: object.subItems[i].p}]);
            column.appendChild(img);
            column.appendChild(title);
            column.appendChild(p);
            columnContainer.appendChild(column);
        }
        mainDiv.appendChild(columnContainer);
        object.html = mainDiv;
    },
    productGrid: (object) => {
        const mainDiv = builder('DIV', [{ atr: 'className', val: 'lp-product' }]);
        if (object.h3) {
            const headerDiv = builder('DIV', [{ atr: 'className', val: 'lp-product-head' }]);
            const h3 = builder('H3', [{ atr: 'innerHTML', val: object.h3 }]);
            headerDiv.appendChild(h3);
            if (object.aLink) {
                const a = builder('A', [{ atr: 'href', val: object.aLink }, { atr: 'innerText', val: object.aText}]);
                headerDiv.appendChild(a);
            }
            mainDiv.appendChild(headerDiv);
        }
        const productGrid = builder('DIV', [{ atr: 'className', val: 'lp-product-grid' }]);
        for (let i = 0; i < object.subItems.length; i++) {
            console.log(object.subItems);
            let divClass = '';
            let lastItem = object.subItems.length - 1
            i === lastItem && lastItem % 2 === 0 ? divClass = 'lp-full-width-product' : divClass = 'lp-half-width-product';
            const productContainer = builder('DIV', [{ atr: 'className', val: divClass }]);
            const imgContainer = document.createElement('DIV');
            const img = builder('IMG', [{ atr: 'src', val: object.subItems[i].img }]);
            if (object.subItems[i].type === 'product') {
                imgContainer.className = 'lp-half-width-product-image';
            }
            if (object.subItems[i].type === 'lifestyle') {
                imgContainer.className = 'lp-half-width-image';
            }
            imgContainer.appendChild(img);
            const copyDiv = builder('DIV', [{ atr: 'className', val: 'lp-half-width-product-copy' }]);
            const p = builder('P', [{ atr: 'innerHTML', val: object.subItems[i].p }]);
            const a = builder('A', [{ atr: 'href', val: object.subItems[i].link }, { atr: 'innerText', val: object.subItems[i].aText }]);
            copyDiv.appendChild(p);
            copyDiv.appendChild(a);
            productContainer.appendChild(imgContainer);
            productContainer.appendChild(copyDiv);
            productGrid.appendChild(productContainer);
        }
        mainDiv.appendChild(productGrid);
        if (object.footLink) {
            const footDiv = builder('DIV', [{ atr: 'className', val: 'lp-product-foot' }]);
            const a = builder('A', [{ atr: 'href', val: object.footLink }, { atr: 'innerText', val: object.footText}]);
            footDiv.appendChild(a);
            mainDiv.appendChild(footDiv);
        }
        object.html = mainDiv;
    }

}

//Defining page array of objects
let page = [];

//Video Builder Form Elements
const vidBuilder = document.getElementById('video-builder');
vidBuilder.querySelector('a').addEventListener('click', (e) => {
    const videoId = document.getElementById('video-id');
    const element = new Video('video', videoId.value);
    page.push(element);
    videoId.value = '';
    pageConstruct(page);
});

//Paragraph Builder Form Elements
const paragraphBuilder = document.getElementById('paragraph-builder');
paragraphBuilder.querySelector('a').addEventListener('click', (e) => {
    const img = document.getElementById('paragraph-img');
    const h3 = document.getElementById('paragraph-h3');
    const p = document.getElementById('paragraph-p');
    const element = new Paragraph('paragraph', h3.value, p.value, img.value);
    page.push(element);
    img.value = '';
    h3.value = '';
    p.value = '';
    pageConstruct(page);

});

const addParagraphImg = document.getElementById('add-paragraph-img');
addParagraphImg.addEventListener('change', (e) => {
    const imgForm = document.getElementById('paragraph-img');
    e.target.checked ? imgForm.style.display = '' : imgForm.style.display = 'none';
});

const addParagraphH3 = document.getElementById('add-paragraph-h3');
addParagraphH3.addEventListener('change', (e) => {
    const h3Form = document.getElementById('paragraph-h3');
    e.target.checked ? h3Form.style.display = '' : h3Form.style.display = 'none';
});

//Lead-In Builder Form Elements
const leadInBuilder = document.getElementById('leadin-builder');
leadInBuilder.querySelector('a').addEventListener('click', (e) => {
    const img = document.getElementById('leadin-img');
    const h3 = document.getElementById('leadin-h3');
    const p = document.getElementById('leadin-p');
    const element = new Paragraph('leadIn', h3.value, p.value, img.value);
    page.push(element);
    img.value = '';
    h3.value = '';
    p.value = '';
    pageConstruct(page);

});

//Full-Width Info Builder Form Elements
const fullWidthInfoBuilder = document.getElementById('full-width-info-builder');
fullWidthInfoBuilder.querySelector('a').addEventListener('click', (e) => {
    const img = document.getElementById('full-width-info-img');
    const h3 = document.getElementById('full-width-info-h3');
    const p = document.getElementById('full-width-info-p');
    const aText = document.getElementById('full-width-info-a-text');
    const aLink = document.getElementById('full-width-info-a-link');
    const opt = document.getElementById('full-width-info-opt');
    //const align = document.getElementById('full-width-info-align');
    const element = new FullWidthInfo('fullWidthInfo', h3.value, p.value, aText.value, aLink.value, img.value, opt.value, 'left');
    page.push(element);
    img.value = '';
    h3.value = '';
    p.value = '';
    aText.value = '';
    aLink.value = '';
    //align.value = '';
    pageConstruct(page);

});

//Full-Width Hero Builder Form Elements
const fullWidthHeroBuilder = document.getElementById('full-width-hero-builder');
fullWidthHeroBuilder.querySelector('a').addEventListener('click', (e) => {
    const img = document.getElementById('full-width-hero-img');
    const h3 = document.getElementById('full-width-hero-h3');
    const p = document.getElementById('full-width-hero-p');
    const aText = document.getElementById('full-width-hero-a-text');
    const aLink = document.getElementById('full-width-hero-a-link');
    const opt = document.getElementById('full-width-hero-opt');
    //const align = document.getElementById('full-width-info-align');
    const element = new FullWidthHero('fullWidthHero', h3.value, p.value, aText.value, aLink.value, img.value, 'left', opt.checked, );
    page.push(element);
    img.value = '';
    h3.value = '';
    p.value = '';
    aText.value = '';
    aLink.value = '';
    //align.value = '';
    pageConstruct(page);
});


//Three Column Builder Form Elements D:/Programming/Work Tools/PB-Content-Pages/img/angi1.jpg
const threeColumnBuilder = document.getElementById('three-column-builder');
threeColumnBuilder.querySelector('a').addEventListener('click', (e) => {
    const h3 = document.getElementById('three-column-h3').value;
    const aText = document.getElementById('three-column-aText').value;
    const aLink = document.getElementById('three-column-aLink').value;
    const columns = document.querySelectorAll('.column');
    const colArr = [];
    columns.forEach(function(item) {
        const colH3 = item.querySelector('.column-h3').value;
        const colP = item.querySelector('.column-p').value;
        const colImg = item.querySelector('.column-img').value;
        column = new Column(colH3, colP, colImg);
        colArr.push(column);
        colH3.value = '';
        colP.value = '';
        colImg.value = '';
    });
    const footerText = document.getElementById('three-column-footer-aText').value;
    const footerLink = document.getElementById('three-column-footer-aLink').value;
    const element = new ThreeCol('threeCol', h3,aText,aLink,colArr,footerText,footerLink);
    page.push(element);
    h3.value = '';
    aText.value = '';
    aLink.value = '';
    footerText.value = '';
    footerLink.value ='';
    pageConstruct(page);
});

//Product Grid Builder Form Elements D:/Programming/Work Tools/PB-Content-Pages/img/angi1.jpg
const productGridBuilder = document.getElementById('product-grid-builder');
productGridBuilder.querySelector('.btn-dark').addEventListener('click', (e) => {
    const h3 = document.getElementById('product-grid-h3').value;
    const aText = document.getElementById('product-grid-aText').value;
    const aLink = document.getElementById('product-grid-aLink').value;
    const products = document.querySelectorAll('.product');
    const prodArr = [];
    products.forEach(function(item) {
        const prodH3 = item.querySelector('.product-h3').value;
        const prodP = item.querySelector('.product-p').value;
        const prodImg = item.querySelector('.product-img').value;
        const prodLink = item.querySelector('.product-aLink').value;
        const prodLinkText = item.querySelector('.product-aText').value;
        const whiteBG = item.querySelector('.white-bg');
        let type = '';
        whiteBG ? type = 'product' : type = 'lifestyle';
        product = new Product(type,prodH3,prodP,prodLinkText,prodLink,prodImg);
        prodArr.push(product);
        prodH3.value = '';
        prodP.value = '';
        prodImg.value = '';
        prodLink.value = '';
        prodLinkText.value = '';
    });
    const footerText = document.getElementById('product-grid-footer-aText').value;
    const footerLink = document.getElementById('product-grid-footer-aLink').value;
    const element = new ProductGrid('productGrid', h3,aText,aLink,prodArr,footerLink,footerText);
    page.push(element);
    h3.value = '';
    aText.value = '';
    aLink.value = '';
    footerText.value = '';
    footerLink.value ='';
    pageConstruct(page);
});

const addProductButton = document.getElementById('add-product').querySelector('a');
addProductButton.addEventListener('click', (e) => { productFormBuilder() })


const exportHTMLButton = document.querySelector('.html-export');
exportHTMLButton.addEventListener('click', () => {
    
})

function clearPage() {
    const container = document.getElementById('lp-container');
    container.innerHTML = '';
}

function pageConstruct(page) {
    clearPage();
    for (let i = 0; i < page.length; i++) {
        build[page[i].type](page[i]);
        document.getElementById('lp-container').appendChild(page[i].html);
    }
}

function wrapperDiv (append) {
    const wrapper = builder('DIV', [{ atr: 'className', val: 'build-wrap' }]);
    wrapper.appendChild(append);
}

function productFormBuilder() {
    const productBlock = document.getElementById('product-block');
    const count = productBlock.querySelectorAll('DIV');
    const container = builder('DIV', [{atr: 'className', val: 'product'}]);
    const h3 = builder('H3', [{atr: 'innerText', val: `Product ${count.length + 1}`}]);
    const imgInput = builder('INPUT', [
        {atr: 'type', val: 'text'},
        {atr: 'className', val: 'form-label form-control-sm product-img'},
        {atr: 'id', val: `product-${count.length + 1}-img`},
        {atr: 'placeholder', val: 'Insert img URL'}
    ]);
    const imgLabel = builder('LABEL', [
        {atr: 'for', val: `product-${count.length + 1}-img`},
        {atr: 'className', val: 'form-label'},
        {atr: 'style', val: `display:none;`},
        {atr: 'innerText', val: 'Insert img URL'}
    ]);
    const noBgInput = builder('INPUT', [
        {atr: 'className', val: 'form-check-input white-bg'},
        {atr: 'type', val: 'checkbox'},
        {atr: 'value', val:''},
        {atr: 'id', val: `product-${count.length + 1}-nobg-img`},
        {atr: 'checked', val: false}
    ]);
    const noBgLabel = builder('LABEL', [
        {atr: 'className', val: 'form-label  form-check-label'},
        {atr: 'for', val: `product-${count.length + 1}-nobg-img`},
        {atr: 'innerText', val: 'Image is on white BG'}
    ]);
    const headerInput = builder('INPUT', [
        {atr: 'type', val: 'text'},
        {atr: 'className', val: 'form-label form-control-sm product-h3'},
        {atr: 'id', val: `product-${count.length + 1}-h3`},
        {atr: 'placeholder', val: 'Insert Product Header'}
    ]);
    const headerLabel = builder('Label', [
        {atr: 'className', val: 'form-label'},
        {atr: 'for', val: `product-${count.length + 1}-h3`},
        {atr: 'style', val: 'display: none;'},
        {atr: 'innerText', val: 'Add a Header'}
    ]);
    const copyBox = builder('TEXTAREA', [
        {atr: 'className', val: 'form-control product-p'},
        {atr: 'placeholder', val: 'Insert Product Copy'},
        {atr: 'style', val: 'height: 100px; width: 100%;'},
        {atr: 'id', val: `product-${count.length + 1}-p`},
    ]);
    const copyLabel = builder('LABEL', [
        {atr: 'for', val: `product-${count.length + 1}-p`},
        {atr: 'style', val: 'display: none;'},
        {atr: 'innerText', val: 'Product Text'}
    ]);
    const footerLink = builder('INPUT', [
        {atr: 'className', val: 'form-label form-control-sm product-aLink'},
        {atr: 'placeholder', val: 'Insert Button URL'},
        {atr: 'type', val: 'text'},
        {atr: 'id', val: `product-${count.length + 1}-aLink"`}
    ]);
    const footerLinkLabel = builder('LABEL', [
        {atr: 'for', val: `product-${count.length + 1}-aLink`},
        {atr: 'className', val: 'form-label'},
        {atr: 'style', val: 'display: none;'},
        {atr: 'innerText', val: 'Insert Button URL'}
    ]);
    const footerText = builder('INPUT', [
        {atr: 'className', val: 'form-label form-control-sm product-aText'},
        {atr: 'placeholder', val: 'Insert Button Text'},
        {atr: 'type', val: 'text'},
        {atr: 'id', val: `product-${count.length + 1}-aText"`}
    ]);
    const footerTextLabel = builder('LABEL', [
        {atr: 'for', val: `product-${count.length + 1}-aText`},
        {atr: 'className', val: 'form-label'},
        {atr: 'style', val: 'display: none;'},
        {atr: 'innerText', val: 'Insert Button Text'}
    ]);


    container.appendChild(h3);
    container.appendChild(imgInput);
    container.appendChild(document.createElement('BR'));
    container.appendChild(imgLabel);
    container.appendChild(document.createElement('BR'));
    container.appendChild(noBgInput);
    container.appendChild(noBgLabel);
    container.appendChild(document.createElement('BR'));
    container.appendChild(headerInput);
    container.appendChild(headerLabel);
    container.appendChild(document.createElement('BR'));
    container.appendChild(copyBox);
    container.appendChild(copyLabel);
    container.appendChild(document.createElement('BR'));
    container.appendChild(footerLink);
    container.appendChild(footerLinkLabel);
    container.appendChild(document.createElement('BR'));
    container.appendChild(footerText);
    container.appendChild(footerTextLabel);
    container.appendChild(document.createElement('BR'));
    productBlock.appendChild(container);
}

pageConstruct(page);