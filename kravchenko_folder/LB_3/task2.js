function findLongestName() {
    const input = document.getElementById("six_name").value.trim();
   
const arr=input.split(/\s+/).filter(n=>n!=="");
    if (arr.length !== 6) {
        alert("Enter exactly six names!");
        return;
    }
    let max = Math.max(...arr.map(n => n.length));
    let nameMax = arr.filter(n => n.length === max);
    alert("The longest name(s): " + nameMax.join(", ") + " (length " + max + ")");
}
