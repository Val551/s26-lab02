function newRenderer(shape) {
    return {
        draw() {
            const area = shape.computeArea();
            console.log("Shape drawn\n" + "Its area is " + area);
        }
    };
}
export { newRenderer };
//# sourceMappingURL=renderer.js.map