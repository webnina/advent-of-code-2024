import {html, LitElement} from "lit";
import {basicStyles} from "../styles";

class Part2 extends LitElement {
    static styles = [basicStyles];

    static properties = {
        data: { type: Array }
    };

    render() {
        return html`
            <div class="part">
                <h2>Part 2</h2>
                Similarity score: ${this.getSimilarityScore()}
            </div>
        `;
    }

    getSimilarityScore() {
        const list1 = this.data.map(location => location.split(' ').filter(Boolean)[0]);
        const list2 = this.data.map(location => location.split(' ').filter(Boolean)[1]);
        return list1.reduce((sum, location) => {
            const count = list2.filter(num => num === location).length;
            return sum + location * count;
        }, 0);
    }
}

customElements.define('app-1-part-2', Part2);
