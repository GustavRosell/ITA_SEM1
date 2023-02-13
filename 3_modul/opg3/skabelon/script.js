/*
 * Koden herunder behøver du ikke gøre noget ved.
 * 
 * Men du er selvfølgelig velkommen til at kigge hvis du er nysgerrig 🙂
 */

const svgns = "http://www.w3.org/2000/svg";

/**
 * Tegner en box i DOM'en på SVG-elementet med id = "grafik".
 * @param {x for boksens øverste venstre hjørne} x 
 * @param {y for boksens øverste venstre hjørne} y 
 * @param {boksens bredde} width 
 * @param {boksens højde} height 
 * @param {boksens farve - sat til "red" som default} color 
 */
function drawBox(x, y, width, height, color = "red") {
  const svgElement = document.getElementById("grafik");
  const rect = document.createElementNS(svgns, "rect");
  rect.setAttributeNS(null, "x", x);
  rect.setAttributeNS(null, "y", y);
  rect.setAttributeNS(null, "height", width);
  rect.setAttributeNS(null, "width", height);
  rect.setAttributeNS(null, "fill", color);
  svgElement.appendChild(rect);
}

/**
 * Tegner en cirkel i DOM'en på SVG-elementet med id = "grafik".
 * @param {x for cirklens centrum} cx 
 * @param {y for cikrlens centrum} cy 
 * @param {cirklens radius} radius 
 * @param {cirklens farve - "red" som default} color 
 */
function drawCircle(cx, cy, radius, color = "red") {
  const svgElement = document.getElementById("grafik");
  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", cx);
  circle.setAttributeNS(null, "cy", cy);
  circle.setAttributeNS(null, "r", radius);
  circle.setAttributeNS(null, "fill", color);
  circle.setAttributeNS(null, "stroke", "black");
  svgElement.appendChild(circle);
}

/**
 * Tegner en linie i DOM'en på SVG-elementet med id = "grafik".
 * @param {x for startpunktet} x1 
 * @param {y for startpunktet} y1 
 * @param {x for slutpunktet} x2 
 * @param {y for slutpunktet} y2 
 * @param {stregens farve - "red" som default} stroke 
 */
function drawLine(x1, y1, x2, y2, stroke = "red") {
  const svgElement = document.getElementById("grafik");
  const line = document.createElementNS(svgns, "line");
  line.setAttributeNS(null, "x1", x1);
  line.setAttributeNS(null, "y1", y1);
  line.setAttributeNS(null, "x2", x2);
  line.setAttributeNS(null, "y2", y2);
  line.setAttributeNS(null, "stroke", stroke);
  line.setAttributeNS(null, "stroke-width", 3);
  svgElement.appendChild(line);
}

/**
 * Tegner en "text" i DOM'en på SVG-elementet med id = "grafik".
 * @param {x for tekstens startposition} x 
 * @param {y for tekstens startposition} y 
 * @param {selve teksten der skal tegnes} inputText 
 */
function drawText(x, y, inputText) {
  const svgElement = document.getElementById("grafik");
  const text = document.createElementNS(svgns, "text");
  text.setAttributeNS(null, "x", x);
  text.setAttributeNS(null, "y", y);
  text.textContent = inputText;
  svgElement.appendChild(text);
}