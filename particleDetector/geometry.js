function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function isBorderTouched(coordVal, shapeLen, windowBorder) {
    return (coordVal > windowBorder - shapeLen) || (coordVal < 0);
}

module.exports = {
    calcOffset,
    isBorderTouched,
};