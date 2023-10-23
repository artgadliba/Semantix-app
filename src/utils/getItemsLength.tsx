export const getItemsLength = (num: number): number => {
    const result = num - 3;
    if (result < 0) {
        return 0;
    } else {
        return result;
    }
};