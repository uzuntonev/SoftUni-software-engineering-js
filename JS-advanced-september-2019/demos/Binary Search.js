const arrayInt = [ 5, 6, 9, 10, 12, 14, 16, 20, 30, 52, 56, 90, 93, 94 ];

function binarySearch(list, item, left, right) {
    const middle = (left + (right - left) / 2);

    if (left > right) {
        return -1;
    }

    if (list[middle] === item) {
        return middle;
    }

    if (item < list[middle]) {
        return binarySearch(list, item, left, middle - 1);
    } else if (item > list[middle]) {
        return binarySearch(list, item, middle + 1, right);
    }

    return 0;
}

const output = binarySearch(arrayInt, 94, 0, arrayInt.length - 1);
console.log(output);



