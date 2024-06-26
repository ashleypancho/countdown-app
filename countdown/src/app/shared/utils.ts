export default class Utils {
    static shuffle(array: any[]) {
        // implemented from
        // https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/
        for (let i = array.length - 1; i > 0; i--) {
            // Generate random number 
            const j = Math.floor(Math.random() * (i + 1));

            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
}