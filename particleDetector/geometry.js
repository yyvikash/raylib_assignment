//for vertical movement borderTop will be borderLeft and borderBottom will be borderRight
function isBorderTouched(coordVal, scannerSize, borderLeft, borderRight) {
    return coordVal > borderRight - scannerSize || coordVal < borderLeft;
}

function isParticleDetected(
    scannerCoordVal,
    particleCoordVal,
    scannerSize,
    particleSize,
) {
    return (
        scannerCoordVal + scannerSize >= particleCoordVal &&
        scannerCoordVal <= particleCoordVal + particleSize
    );
}

module.exports = {
    isBorderTouched,
    isParticleDetected,
};
