class Component {
    constructor(type, h3, p, link, aText, img, overlay,opt) {
        this.type = type;
        this.h3 = h3;
        this.p = p;
        this.link = link;
        this.aText = aText;
        this.img = img;
        this.overlay = overlay;
        this.opt = opt;
        this.built = '';
    }
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
    }
}

//Defining page array of objects
let page = [];
let threeColumn = {
    type: 'threeCol',
    header: true,
    h3: 'Popular Angi-Integrated Helmets',
    link: 'link',
    aText: 'Shop This LInk',
    subItems: [
        {
            img: 'img/angi2.jpg',
            h3: 'Protection Before',
            p: `ANGi is a ride tracker. ANGi lets your emergency contacts know you’re heading out for a ride and, if you choose, to follow your ride in real time.`
        },
        {
            img: 'img/angi2.jpg',
            h3: 'Protection Before',
            p: `asdfasdfaANGi is a ride tracker. ANGi lets your emergency contacts<br /> know you’re heading out for a ride and, if you choose, to follow your ride in real time.`
        },
        {
            img: 'img/angi2.jpg',
            h3: 'Protection Before',
            p: `ANGi is a ride tracker. ANGi lets your emergency contacts know you’re heading out for a ride and, if you choose, to follow your ride in real time.`
        },
    ],
    built: ''
}

page.push(threeColumn);


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