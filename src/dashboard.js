import { LitElement, html } from 'lit';
import {basicStyles} from "./styles";

class Dashboard extends LitElement {
    static styles = [basicStyles];

    static properties = {
        days: { type: Array },
        selectedDay: { type: Number },
    };

    constructor() {
        super();
        this.days = Array.from({ length: 24 }, (_, i) => i + 1);
        this.selectedDay = 1;
    }

    handleChange(event) {
        this.selectedDay = Number(event.target.value);
    }

    render() {
        return html`
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
          ${this.renderSelectedDay()}
        `;
    }

    renderSelectedDay() {
        switch (this.selectedDay) {
            default:
                return html`<p>Nothing to see here for day ${this.selectedDay}</p>`;
        }
    }
}

customElements.define('app-dashboard', Dashboard);