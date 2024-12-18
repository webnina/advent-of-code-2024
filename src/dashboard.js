import {LitElement, html} from 'lit';
import {basicStyles} from "./styles";

class Dashboard extends LitElement {
    static styles = [basicStyles];

    static properties = {
        days: { type: Array },
        selectedDay: { type: Number },
        currentFileContent: { type: Array }
    };

    constructor() {
        super();
        this.days = Array.from({ length: 24 }, (_, i) => i + 1);
        this.selectedDay = 1;
        this.currentFileContent = [];
    }

    render() {
        return html`
            <div class="dashboard">
                <h1>Advent of Code 2024</h1>
                <label for="day-select">Choose a day:</label>
                <select id="day-select" @change=${this.handleChange}>
                    ${this.days.map(
                            (day) =>
                                    html`<option value=${day} ?selected=${day === this.selectedDay}>
                  ${day}
                </option>`
                    )}
                </select>
                <input type="file" @change="${this.readFile}">
                ${this.renderSelectedDay()}
            </div>
        `;
    }

    handleChange(event) {
        this.selectedDay = Number(event.target.value);
    }

    renderSelectedDay() {
        switch (this.selectedDay) {
            case 1:
                return html`
                    <app-1-part-1 .data="${this.currentFileContent}"></app-1-part-1>
                    <app-1-part-2 .data="${this.currentFileContent}"></app-1-part-2>
                `;
            default:
                return html`<p>Nothing to see here for day ${this.selectedDay}</p>`;
        }
    }

    readFile(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const content = e.target.result;
                this.currentFileContent = content.split('\n').filter(Boolean);
            };

            reader.readAsText(file);
        }
    }
}

customElements.define('app-dashboard', Dashboard);
