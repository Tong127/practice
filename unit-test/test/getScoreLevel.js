function getScoreLevel(score) {
    if (score >= 4.5) return 'high';
    if (score >= 3.5) return 'medium';
    return 'low';
}


module.exports = { getScoreLevel };