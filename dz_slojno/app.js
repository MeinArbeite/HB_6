// 1 задание
function maskCard(cardNumber, maskChar = "X") {
    const firstSix = cardNumber.slice(0, 6);
    const lastFour = cardNumber.slice(-4);
    const masked = cardNumber.slice(6, -4).replace(/./g, maskChar);
    return `${firstSix}${masked}${lastFour}`;
}

console.log(maskCard("4815154823541789")); 
console.log(maskCard("4815154823541789", "*"));

// 2 задание

function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalizeString("ЕВГЕНИЙ")); // "Евгений"
console.log(capitalizeString("иВАНОВ")); // "Иванов"

// 3 задание

function depersonalize(fullName){
    const nameParts = fullName.split(" ")

    if(nameParts.length === 1){
        return nameParts[0]
    }

    const lastName = nameParts[nameParts.length - 1]
    const processedLast = `${lastName[0]} ${"_".repeat(lastName.length - 2)} ${lastName[lastName.length - 1]}`

    const otherName = nameParts.slice(0, nameParts.length - 1)
    const proccesedOther = otherName.map((name) => `${name[0]} ${'_'.repeat(name.length - 2)} ${name[name.length - 1]}`)

    return [proccesedOther, processedLast].join(" ")
}

console.log(depersonalize("Киселев Евгений Иванович"))
console.log(depersonalize("Сидоров Ваня"))