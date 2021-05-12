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