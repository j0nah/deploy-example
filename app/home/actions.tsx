'use server'
 
export async function getGreeting() {
    return Promise.resolve(process.env.GREETING);
}