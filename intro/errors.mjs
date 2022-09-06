import { readFile } from "fs/promises";

process.on('uncaughtException',(e)=>{
    console.log(e);
})

const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')

console.log('hello');

// try {
//     const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')
// } catch (error) {
    //     throw error;
    //     console.log('hello');
    // }
    
    // const result = readFile(new URL('app.mj', import.meta.url), 'utf-8')
    
    //     .catch(e => {
        //         console.log('hello');
        //     })

