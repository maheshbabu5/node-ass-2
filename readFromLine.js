const readline =require("readline");

const readl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

readl.question("please tell your name ",(ans)=>{
    console.log("Hello" + " " + ans);
    readl.close();
})