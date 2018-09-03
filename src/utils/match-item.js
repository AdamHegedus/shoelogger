export default function matchItem(itemA, itemB) {
    return typeof itemA === 'object' && itemA !== null &&
        typeof itemB === 'object' && itemB !== null &&
        Object.prototype.hasOwnProperty.call(itemA, 'id') &&
        Object.prototype.hasOwnProperty.call(itemB, 'id') &&
        itemA.id === itemB.id;
}
