function calcLen(shapeLen, maxLen) {
    let len = shapeLen * maxLen;
    return len <= maxLen ? len : maxLen / 2;
}

function isBorderTouched(coordVal, shapeLen, borderLeft, borderRight) {
    return (coordVal > borderRight - shapeLen) || (coordVal < borderLeft);
}

function isParticleDetected(scannerCoordVal, particleCoordVal, scannerWidth, particleWidth) {
    return (scannerCoordVal + scannerWidth >= particleCoordVal) && (scannerCoordVal <= particleCoordVal + particleWidth);
}

module.exports = {
    calcLen,
    isBorderTouched,
    isParticleDetected,
};