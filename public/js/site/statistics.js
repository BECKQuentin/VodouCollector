function strToDom(str) {
    return document.createRange().createContextualFragment(str).firstChild;
}
function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    toSvgPath() {
        return `${this.x} ${this.y}`
    }

    static fromAngle(angle) {
        return new Point(Math.cos(angle), Math.sin(angle))
    }
}



/**
 * @property {number[]} data
 * @property {SVGPathElement[]} paths
 */
class PieChart extends HTMLElement {

    constructor() {
        super()
        const shadow = this.attachShadow({mode: 'open'})
        const colors = ['#FAAA32', '#3EFA7D', '#FA6A25', '#0C94FA', '#FA1F19', '#0CFAE2', '#AB6D23', '#FFCD5C', '#9558F5', '#1E4463', '#B0413E', '#ADB04F', '#2C75B0'];
        const donut = this.getAttribute('donut') ?? '0.005'
        const labels = this.getAttribute('labels')?.split(';') ?? []
        const data = this.getAttribute('data').split(';').map(v => parseFloat(v))
        console.log(data);
        const svg = strToDom(`<svg viewBox="-1 -1 2 2">
<g mask="url(#graphMask)">
   
</g>
<mask id="graphMask">
    <rect x="-1" y="-1" width="2" height="2" fill="white" />
   <circle r="${donut}" fill="black" />   
</mask>
                            </svg>`)
        const pathGroup = svg.querySelector('g')
        const maskGroup = svg.querySelector('mask')
        const gap = this.getAttribute('gap') ?? '0.015'


        //On crée les chemins
        this.paths = data.map((_, k) => {
            const color = colors[k % (colors.length - 1)]
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
            path.setAttribute('fill', color)
            pathGroup.appendChild(path)
            path.addEventListener('mouseover', () => this.handlePathHover(k))
            path.addEventListener('mouseout', () => this.handlePathOut(k))
            return path
        })

        //On crée les lines
        this.lines = data.map(() => {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
            line.setAttribute('stroke', '#000')
            line.setAttribute('stroke-width', gap)
            line.setAttribute('x1', 0)
            line.setAttribute('y1', 0)
            maskGroup.appendChild(line)
            return line
        })

        //On crée les labels
        this.labels = labels.map((label, k) => {
            const div = document.createElement('div')
            div.innerText = label
            shadow.appendChild(div)
            return div
        })

        const style = document.createElement('style')
        style.innerHTML = `
            :host {     
                display: block;           
                position: relative;
            }
            path {
                cursor: pointer;
                transition: opacity 0.5;
            }
            path:hover {
                opacity: 0.5;
            }
            div {
                position: absolute;
                color: black;                
                top: 0;
                left: 0;
                font-size: 0.8rem;
                padding: 0.1em .3em;
                transform: translate(-50%, -50%);
                background-color: var(---tooltip-bg, #FFF);
                opacity: 0;
                transition: opacity 0.3s;
            }
            .is-active {
                opacity: 1;
            }
        `
        shadow.appendChild(style)
        shadow.appendChild(svg)
    }

    connectedCallback() {
        const data = this.getAttribute('data').split(';').map(v => parseFloat(v))
        const now = Date.now()
        const duration = 1000
        const draw = () => {
            const t = (Date.now() - now) / duration
            if(t < 1) {
                this.draw(data, easeOutExpo(t))
                window.requestAnimationFrame(draw)
            } else {
                this.draw(data, 1)
            }
        }
        window.requestAnimationFrame(draw)

    }

    draw(data, progress = 1) {

        const total = data.reduce((acc,v) => acc + v, 0)
        let angle = 0
        let start = new Point(1, 0)
        for( let k = 0; k < data.length; k++) {
            const ratio = (data[k] / total) * progress

            this.positionLabel(this.labels[k], angle + ratio * Math.PI)

            angle += ratio * 2 *Math.PI
            const end = Point.fromAngle(angle)
            const largeFlag = ratio > .5 ? '1' : '0'
            this.paths[k].setAttribute('d', `M 0 0L ${start.toSvgPath()} A 1 1 0 ${largeFlag} 1 ${end.toSvgPath()} L 0 0`)
            this.lines[k].setAttribute('x2', end.x)
            this.lines[k].setAttribute('y2', end.y)
            start = end
        }
    }

    /**
     * Gère l'effet au survol de la section du graph
     * @param k
     */
    handlePathHover(k) {
        // this.dispatchEvent(new CustomEvent('sectionhover', {detail: k}))
        this.labels[k]?.classList.add('is-active')
    }

    /**
     * Gère l'effet lors de la sortie du survol de la section du graph
     * @param {number} k
     */
    handlePathOut(k) {
        this.labels[k]?.classList.remove('is-active')
    }

    /**
     * Poistionne le label correctement
     * @param {HTMLDivElement|undefined} label
     * @param {number} angle
     */
    positionLabel(label, angle) {
        if (!label || !angle) {
            return;
        }
        const point = Point.fromAngle(angle)
        label.style.setProperty('top', `${(point.y * 0.9 * 0.5 + 0.5) * 100 }%`)
        label.style.setProperty('left', `${(point.x * 0.9 * 0.5 + 0.5) * 100 }%`)
    }

}

customElements.define('pie-chart', PieChart)


// //Affichage des légendes
// const chartMaterials = document.querySelector('#chartMaterials');
// chartMaterials.addEventListener('sectionhover', e => {
//     console.log('Survolé', e.detail);
// })

