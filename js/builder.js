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
        object.built = leadIn;
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
        object.built = mainDiv;
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
        object.built = mainDiv;
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
        object.built = mainDiv;
    },
    video: (object) => {
        const mainDiv = builder('DIV',[{ atr: 'className', val: 'lp-video' }]);
        const iframe = builder('IFRAME', [{ atr: 'src', val: object.link }, { atr: 'frameBorder', val: '0' }, { atr: 'allow', val: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' }]);
        mainDiv.appendChild(iframe);
        object.built = mainDiv;
    },
    threeCol: (object) => {
        const mainDiv = document.createElement('DIV');
        if (object.header) {
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
        object.built = mainDiv;
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
        object.built = mainDiv;
    }
    
}

//Defining page array of objects
let page = [];
let element = {
    type: 'productGrid',
    h3: 'This is a header',
    aText: 'This is a link',
    aLink: '/linklocation',
    subItems: [ {
        img: 'https://images.amain.com/cdn-cgi/image/width=475/images/large/bikes/specialized/60121-0234.jpg',
        type: 'product',
        p: 'This is product 1',
        aText: '/product1link',
        aLink: 'Product 1 Link'
    },{
        img: 'https://images.amain.com/images/contentpages/performancebike/specialized/img/ROAD-2475-Hero1.jpg',
        type: 'lifestyle',
        p: 'This is product 2',
        aText: '/product2link',
        aLink: 'Product 2 Link'
    }, {
        img: 'https://images.amain.com/cdn-cgi/image/width=475/images/large/bikes/specialized/60121-0234.jpg',
        type: 'product',
        p: 'This is product 1',
        aText: '/product1link',
        aLink: 'Product 1 Link'
    }, {
        img: 'https://images.amain.com/cdn-cgi/image/width=475/images/large/bikes/specialized/60121-0234.jpg',
        type: 'product',
        p: 'This is product 1',
        aText: '/product1link',
        aLink: 'Product 1 Link'
    },{
        img: 'https://images.amain.com/images/contentpages/performancebike/specialized/img/ROAD-2475-Hero1.jpg',
        type: 'lifestyle',
        p: 'This is product 2',
        aText: '/product2link',
        aLink: 'Product 2 Link'
    }],
    footLink: 'footlinklocation',
    footText: 'this is a footer link',
    built: ''
}
page.push(element);


for (let i = 0; i < page.length; i++) {
    build[page[i].type](page[i]);
    document.getElementById('lp-container').appendChild(page[i].built);
}

function builder(item, atr) {
    item = document.createElement(item);
    for (let i = 0; i < atr.length; i++) {
        let attribute = atr[i];
        item[attribute.atr] = attribute.val;
    }
    return item;
}