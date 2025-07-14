function extractDistrict(address) {
    const districtMatch = address.match(/([^市]+區)/);
    return districtMatch ? districtMatch[1] : '';
}

module.exports = { extractDistrict };