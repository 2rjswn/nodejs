async function myName() {
    return "kdh";
}

async function showName() {
    const name = await myName();
    console.log(name)
}

console.log(showName());