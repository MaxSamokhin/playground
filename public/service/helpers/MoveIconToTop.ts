export function moveIconToTop(arr, label) {
    const index = arr.findIndex((elem) => elem.label === label);
    if (index === -1) {
        return;
    }
    [arr[0], arr[index]] = [arr[index], arr[0]];
}
