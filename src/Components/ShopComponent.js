import React from "react";
import Grid from "./Grid";
import { withTheme } from "styled-components";

function ShopComponent() {
  return (
    <div>
      <section class="section is-small">
        <div class="columns">
          <div class="column is-one-third">
            <aside class="menu">
              <p class="menu-label"></p>
              <ul class="menu-list">
                <li>
                  <a style={{ backgroundColor: "#6495ed", color: "white" }}>
                    All Parts
                  </a>
                </li>
              </ul>
              <p class="menu-label">Classes</p>
              <ul class="menu-list">
                <li>
                  <a>EE001AL</a>
                </li>
                <li>
                  <a>EE001B</a>
                </li>
                <li>
                  <a> EE100A</a>
                </li>
                <li>
                  <a> CS120A</a>
                </li>
                <li>
                  <a> CS120B</a>
                </li>
                <li>
                  <a> CS122A</a>
                </li>
                <li>
                  <a> EE128</a>
                </li>
              </ul>
              <p class="menu-label">Administration</p>
              <ul class="menu-list">
                <li>
                  <a>Wires</a>
                </li>
                <li>
                  <a>LEDs/LCDs</a>
                </li>
                <li>
                  <a>Breadboards</a>
                </li>
                <li>
                  <a>Microcontrollers</a>
                </li>
                <li>
                  <a>Resistors</a>
                </li>
                <li>
                  <a>Potentiometers</a>
                </li>
                <li>
                  <a>Capacitors</a>
                </li>
                <li>
                  <a>Inductors</a>
                </li>
                <li>
                  <a>Semiconductors</a>
                </li>
                <li>
                  <a>Diodes</a>
                </li>
                <li>
                  <a>ICs</a>
                </li>
                <li>
                  <a>Transistors</a>
                </li>
                <li>
                  <a>Cables</a>
                </li>
                <li>
                  <a>Other</a>
                </li>
              </ul>
            </aside>
          </div>
          <div class="column">
            <Grid />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShopComponent;
