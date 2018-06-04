// DISCLAIMER:
// The sortBy functions were developed using the folling guide as reference
// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
export function sortByID(storesList) {
    return storesList.sort(function (a, b) { return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0); });
}

export function sortByName(storesList) {
    return storesList.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
}

export function sortByTakeback(storesList) {
    return storesList.sort(function (a, b) { return (a.takeback < b.takeback) ? 1 : ((b.takeback < a.takeback) ? -1 : 0); });
}