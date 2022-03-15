let timer = 0
const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
for (let i = 0; i < spinner.length; i++){
setTimeout(() => { process.stdout.write(`\r${spinner[i]}   `)}, timer += 200);
}
