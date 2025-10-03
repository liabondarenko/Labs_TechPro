function compareSentences() {
    const sen1 = document.getElementById("sen1").value.trim();
    const sen2 = document.getElementById("sen2").value.trim();

    if (!sen1 || !sen2) {
        alert("Enter both sentence");
        return;
    }

    const len_sen_one = sen1.length;
    const len_sen_sec = sen2.length;

    if (len_sen_one > len_sen_sec) {
        document.getElementById("result1").innerText = "First sentence longer!";
        document.getElementById("result2").innerText = "";
    } else if (len_sen_sec > len_sen_one) {
        document.getElementById("result2").innerText = "Second sentence longer!";
        document.getElementById("result1").innerText = "";
    } else {
        alert("Sentences are equal in length!");
    }
}
