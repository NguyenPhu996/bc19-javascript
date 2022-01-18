const AB = prompt("Hãy nhập chiều dài cạnh AB");
const AC = prompt("Hãy nhập chiều dài cạnh AC");
const BC = prompt("Hãy nhập chiều dài cạnh BC");


if (AB == AC && AB !== BC) {
    console.log("Tam giác cân")
} else if (AB == AC && AB == BC) {
    console.log("Tam giác đều")
} else if (BC = Math.sqrt(Math.pow(AB, 2) + Math.pow(AC, 2))) {
    console.log("Tam giác vuông")
}