const SO_KW_TU_1_50 = 500
const SO_KW_TU_51_100 = 650
const SO_KW_TU_101_200 = 850
const SO_KW_TU_201_350 = 1100
const SO_KW_351 = 1300

const submitEl = document.getElementById("submit");

document.getElementById("submit").onclick = function() {
    const kw = document.getElementById("kw").value;

    let result = 0
    if (kw <= 50) {
        result = SO_KW_TU_1_50 * kw;
    } else if (kw <= 100) {
        result = (SO_KW_TU_1_50 * 50) + ((kw - 50) * SO_KW_TU_51_100);
    } else if (kw <= 200) {
        result = (SO_KW_TU_1_50 * 50) + (SO_KW_TU_51_100 * 50) + ((kw - 100) * SO_KW_TU_101_200);
    } else if (kw <= 350) {
        result = (SO_KW_TU_1_50 * 50) + (SO_KW_TU_51_100 * 50) + (SO_KW_TU_101_200 * 100) + ((kw - 200) * SO_KW_TU_201_350);
    } else {
        result = (SO_KW_TU_1_50 * 50) + (SO_KW_TU_51_100 * 50) + (SO_KW_TU_101_200 * 100) + (SO_KW_TU_201_350 * 150) + ((kw - 350) * SO_KW_351);
    }
    const resultEl = document.getElementById("result");
    document.getElementById('result').value = result
}