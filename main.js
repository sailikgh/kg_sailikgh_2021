let arguments = process.argv;
let phonetics = [];
let dict = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
};
let ph;
for (let e of arguments.slice(2)) {
    let digMap = Array.from(e.toString()).map(Number);
    ph = "";
    for (let n of digMap) {
        ph += dict[n];
    }
    phonetics.push(ph);
}
console.log(phonetics);

