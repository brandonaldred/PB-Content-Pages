class LeadIn {
    constructor(header, subheader) {
        this.header = header;
        this.subheader = subheader;
    }
    build() {
        const leadIn = document.createElement('DIV');
        leadIn.className = 'lp-lead-in';
        const leadInCopy = document.createElement('DIV');
        leadInCopy.className = 'lp-lead-in-copy';
        const h3 = document.createElement('H3');
        h3.innerText = this.header;
        const p = document.createElement('p');
        p.innerText = this.subheader;

        leadInCopy.appendChild(h3);
        leadInCopy.appendChild(p);
        leadIn.appendChild(leadInCopy);
        document.getElementById('lp-container').appendChild(leadIn);
    }
}

class JumpOff {
    constructor(h3, p, aSrc, aText, img, overlay) {
        this.h3 = h3;
        this.p = p;
        this.aSrc = aSrc;
        this.aText = aText;
        this.img = img;
        this.overlay = overlay;
    }
    fullWidthBuild() {
        const mainDiv = document.createElement('DIV');
        mainDiv.className = 'lp-full-width';
        //Create image container & image
        const imgDiv = document.createElement('DIV');
        imgDiv.className = 'lp-full-width-image';

        if (this.overlay) {
            const dkOverlay = document.createElement('DIV');
            dkOverlay.className = 'lp-hero-overlay';
            imgDiv.appendChild(dkOverlay);
        }

        const image = document.createElement('IMG');
        image.src = this.img
        image.style.all = 'unset';
        imgDiv.appendChild(image);

        //Create copy container
        const copyDiv = document.createElement('DIV');
        copyDiv.className = 'lp-full-width-copy';
        const h3 = document.createElement('H3');
        h3.innerText = this.h3;
        const p = document.createElement('P');
        p.innerText = this.p;
        const a = document.createElement('A');
        a.className = 'lp-full-width-info-white-outline-button';
        a.src = this.aSrc;
        a.innerText = this.aText;
        copyDiv.appendChild(h3);
        copyDiv.appendChild(p);
        copyDiv.appendChild(a);

        //Putting it all together.
        mainDiv.appendChild(imgDiv);
        mainDiv.appendChild(copyDiv);
        document.getElementById('lp-container').appendChild(mainDiv);
    }
    halfWidthBuild(imageType) {
        const productGrid = document.createElement('DIV');
        productGrid.className = 'lp-product-grid';
        const halfWidthItem= document.createElement('DIV');
        halfWidthItem.className = 'lp-half-width-product';
        const halfWidthImage = document.createElement('DIV');
        if (imageType === 'product') {
            halfWidthImage.className = 'lp-half-width-product-image';
        } else {
            halfWidthImage.className = 'lp-half-width-image';
        }

        const image = document.createElement('IMG');
        image.src = this.img;
        halfWidthImage.appendChild(image);

        const halfWidthCopy = document.createElement('DIV');
        halfWidthCopy.className = 'lp-half-width-product-copy';
        const h3 = document.createElement('H3');
        h3.innerText = this.h3;
        const p = document.createElement('P');
        p.innerText = this.p;
        const a = document.createElement('A');
        a.src = this.aSrc;
        a.innerText = this.aText;

        halfWidthCopy.appendChild(h3);
        halfWidthCopy.appendChild(p);
        halfWidthCopy.appendChild(a);

        halfWidthItem.appendChild(halfWidthImage);
        halfWidthItem.appendChild(halfWidthCopy);
        productGrid.appendChild(halfWidthItem);
        productGrid.appendChild(halfWidthItem);
        return productGrid;
    }
}


let head = 'Welcome to SBC.x';
let subHead = 'A look at specialized Bicycles innovation and information about their equipment & technology';


let h3 = `Body Geometry by Specialized`;
let p = `Innovative designs, personalized to your unique body and riding style.`;
let aSrc = `/specialized-body-geometry/i712`;
let aText = `Shop Now`;
let img = `https://scontent.fsac1-1.fna.fbcdn.net/v/t1.6435-9/178569867_10157845709521604_7212701839133540701_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_ohc=StNkj7uhANwAX9hDZIW&_nc_ht=scontent.fsac1-1.fna&oh=e449ccad5481297731e4883b6d1395ed&oe=60AAD0C5`;
let overlay = true;


const halfJump = [];
const itemOne = new JumpOff(h3, p, aSrc, aText, img, overlay);
const itemTwo = new JumpOff(h3, p, aSrc, aText, img, overlay);
halfJump.push(itemOne);
halfJump.push(itemTwo);
halfJump[1].fullWidthBuild('product');