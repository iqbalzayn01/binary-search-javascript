const btnFind = document.getElementById("btn-find");
const btnList = document.getElementById("btn-list");
const nameFound = document.getElementById("name-found");
const listName = document.getElementById("list-name");

const binarySearch = function (arrName, key, low, up) {
    if (low > up) return false;

    let mid = Math.floor((low + up)/2);

    if (key === arrName[mid]) return true;

    if (key > arrName[mid]) {
        return binarySearch(arrName, key, mid+1, up);
    } else {
        return binarySearch(arrName, key, low, mid-1);
    }
}

let arrName = ['Ceko', 'Ega', 'Akbar', 'Bela', 'Dede', 'Fazar', 'Andi'];
arrName.sort();

btnFind.addEventListener("click", () => {
    key = prompt("Find your name!");

    if (binarySearch(arrName, key, 0, arrName.length-1)) {
        nameFound.innerHTML = `${key} found!`;
    } else {
        nameFound.innerHTML = `${key} not found!`;
    }
})

btnList.addEventListener("click", () => {
    listName.innerHTML = arrName;
})





