// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(delayedTime) {
    const initialTime = Date.now();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const finalTime = Date.now();
            resolve (finalTime - initialTime);
        }, delayedTime);
    });
}

export function asyncDelay() {

}
