
const waitForNumber = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hristiana");
        }, 2000)
    });
}

(async () => {
    let number: string = 0;
    number = await waitForNumber();
    let sum = number + 1;
    console.log({sum})
})()

