function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function isBorderTouched(coordVal, shapeLen, windowBorder) {
    return (coordVal > windowBorder - shapeLen) || (coordVal < 0);
}

function isParticleDetected(scannerCoordVal, particleCoordVal, scannerWidth, particleWidth) {
    return (scannerCoordVal + scannerWidth >= particleCoordVal) && (scannerCoordVal <= particleCoordVal + particleWidth);
}

module.exports = {
    calcOffset,
    isBorderTouched,
    isParticleDetected,
};