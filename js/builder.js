class ProductGrid {
    constructor(type,h3,aText,aLink,subItems,footLink,footText) {
        this.type = type;
        this.h3 = h3;
        this.aText = aText;
        this.aLink = aLink;
        this.subItems = subItems;
        this.footLink = footLink;
        this.footText = footText;
    }
}

class Product {
    constructor(type,p,aText,aLink,img) {
        this.type = type;
        this.p = p;
        this.aText = aText;
        this.aLink = aLink;
        this.img = img;
    }
}

class ThreeCol {
    constructor(type,h3,aText,aLink,subItems) {
        this.type = type;
        this.h3 = h3;
        this.aText = aText;
        this.aLink = aLink;
        this.subItems = subItems;
    }
}

class Column {
    constructor(h3,p,img) {
        this.h3 = h3;
        this.p = p;
        this.img = img;
    }
}

class Paragraph {
    constructor(type,h3,p,img) {
        this.type = type;
        this.h3 = h3;
        this.p = p;
        this.img = img;
    }
}

class FullWidthInfo {
    constructor(type,h3,p,aText,aLink,img,opt,align) {
        this.type = type;
        this.h3 = h3;
        this.p = p;
        this.aText = aText;
        this.aLink = aLink;
        this.img = img;
        this.opt = opt;
        this.align = align;
    }
}

class FullWidthHero {
    constructor(type,h3,p,aText,aLink,img,align,overlay) {
        this.type = type;
        this.h3 = h3;
        this.p = p;
        this.aText = aText;
        this.aLink = aLink;
        this.img = img;
        this.align = align;
        this.overlay = overlay;
    }
}

class LeadIn {
    constructor(type,h3,p,img) {
        this.type = type;
        this.h3 = h3;
        this.p = p;
        this.img = img;
    }
}

class Video {
    constructor(type,videoId) {
        this.type = type;
        this.videoId = videoId;
    }
}

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
        const img = builder('IMG', [{ atr: 'src', val: object.img }]);
        leadInCopy.appendChild(h3);
        leadInCopy.appendChild(p);
        leadIn.appendChild(leadInCopy);
        leadIn.appendChild(img);
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
        if (object.opt === 'dk') {
            copyDiv.classList.add('lp-full-width-info-dk-bg');
            console.log('dark');
        }
        if (object.opt === 'lt') {
            copyDiv.classList.add('lp-full-width-info-lt-bg');
        }
        const h3 = builder('H3', [{ atr: 'innerHTML', val: object.h3 }]);
        const p = builder('p', [{ atr: 'innerHTML', val: object.p }]);
        const a = builder('A', [{ atr: 'innerText', val: object.aText }, { atr: 'href', val: object.link } ]);
        const learn = /^(learn)/i.test(object.aText)
        if (learn) {
            a.classList.add('lp-full-width-info-gray-outline-button');
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
        if (object.img) {
            const img = builder('IMG', [{ atr: 'className', val: 'lp-body-copy-image' }, { atr: 'src', val: 'img/angihelmets.jpg'}]);
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
        if (object.h3) {
            const headerDiv = builder('DIV', [{ atr: 'className', val: 'lp-product-head' }]);
            const h3 = builder('H3', [{ atr: 'innerHTML', val: object.h3 }]);
            headerDiv.appendChild(h3);
            if (object.link) {
                const a = builder('A', [{ atr: 'href', val: object.link }, { atr: 'innerText', val: object.aText}]);
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
        const productGrid = builder('DIV', [{ atr: 'className', val: 'lp-product-grid' }])
        for (let i = 0; i < object.subItems.length; i++) {
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

const vidBuilder = document.getElementById('video-builder');
vidBuilder.querySelector('a').addEventListener('click', (e) => {
    const videoId = document.getElementById('video').value;
    const element = new Video('video', videoId);
    console.log(element);
    page.push(element);
    clearPage();
    pageConstruct(page);
})

function clearPage() {
    const container = document.getElementById('lp-container');
    container.innerHTML = '';
}

function pageConstruct(page) {
    for (let i = 0; i < page.length; i++) {
        build[page[i].type](page[i]);
        document.getElementById('lp-container').appendChild(page[i].html);
    }
}