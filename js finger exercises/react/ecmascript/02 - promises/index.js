// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(delayedTime) {
    const initialTime = Date.now();
    return new Promise((resolve, reject) => {
        if (delayedTime < 5000) {
            setTimeout(() => {
                const finalTime = Date.now();
                resolve (finalTime - initialTime);
            }, delayedTime);
        } else {
            const error = new Error('This time is too much !');
            reject(error);
        }
        
    });
}

export function asyncDelay() {

}
