import { newRenderer } from "./renderer.js";
import { square } from "./shapes/square.js";
const rectangle = square(4);
const renderer = newRenderer(rectangle);
renderer.draw();
//# sourceMappingURL=index.js.map