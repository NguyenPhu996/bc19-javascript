const submitEl = document.getElementById("submit");

document.getElementById("submit").onclick = function() {
    const point = +document.getElementById("point").value;

    const math = +document.getElementById("math").value;
    const literature = +document.getElementById("literature").value;
    const english = +document.getElementById("english").value;

    const zone = +document.getElementById("zone").value;

    const object = +document.getElementById("object").value;

    const result = math + literature + english + zone + object;

    const resultEl = document.getElementById("result");
    document.getElementById('result').value = result

    if (math > 0 && literature > 0 && english > 0 && result >= point) {
        const all = ("Đậu")

        const allEl = document.getElementById("all");
        document.getElementById('all').value = all
    } else if (math == 0 || literature == 0 || english == 0 || result < point) {
        const all = ("Trượt")

        const allEl = document.getElementById("all");
        document.getElementById('all').value = all
    }
}