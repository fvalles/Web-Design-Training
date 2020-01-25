// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(delayTime) {
    const initialTime = Date.now();
    return new Promise((resolve, reject) => {
        if (delayTime < 5000) {
            setTimeout(() => {
                const finalTime = Date.now();
                resolve (finalTime - initialTime);
            }, delayTime);
        } else {
            const error = new Error('This time is too much !');
            reject(error);
        }
    });
}

export async function asyncDelay(delayTime) {
    const delayedTime = await delay(delayTime);
    return delayedTime;
}
