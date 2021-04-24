class LeadIn {
    constructor(header,subheader) {
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

let head = 'Welcome to SBC.x'
let subHead = 'A look at specialized Bicycles innovation and information about their equipment & technology'


pageLeadIn = new LeadIn(head,subHead);
let page = document.getElementById('lp-container');
pageLeadIn.build();