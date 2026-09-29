//for vertical movement borderTop will be borderLeft and borderBottom will be borderRight
function isBorderTouched(coordVal, scannerLen, borderLeft, borderRight) {
    return coordVal > borderRight - scannerLen || coordVal < borderLeft;
}

function isParticleDetected(
    scannerCoordVal,
    particleCoordVal,
    scannerWidth,
    particleWidth,
) {
    return (
        scannerCoordVal + scannerWidth >= particleCoordVal &&
        scannerCoordVal <= particleCoordVal + particleWidth
    );
}

module.exports = {
    isBorderTouched,
    isParticleDetected,
};
