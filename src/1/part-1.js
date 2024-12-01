import {html, LitElement} from "lit";
import {basicStyles} from "../styles";

class Part1 extends LitElement {
    static styles = [basicStyles];

    static properties = {
        data: { type: Array }
    };

    render() {
        return html`
            <div class="part">
                <h2>Part 1</h2>
                Total distance between lists: ${this.getTotalDistanceBetweenLists()}
            </div>
        `;
    }

    getTotalDistanceBetweenLists() {
        const list1 = this.data.map(location => location.split(' ').filter(Boolean)[0]).sort();
        const list2 = this.data.map(location => location.split(' ').filter(Boolean)[1]).sort();
        return list1.reduce((sum, location, index) => sum + Math.abs(location - list2[index]), 0);
    }
}

customElements.define('app-1-part-1', Part1);
