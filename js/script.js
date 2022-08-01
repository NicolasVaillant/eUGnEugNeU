const text_js = document.querySelector('.text-js')
const result_js = document.querySelector('.result-js')
const textarea = document.querySelector('textarea')
const excludedValue = document.querySelector('#excludedValue')
const conversion_result = document.querySelector('.conversion-result')

textarea.addEventListener('keyup', (e) => {
    const value = textarea.value
    if(value === ''){
        conversion_result.innerHTML = "Résultat"
    }
    if(e.key === 'Enter'){
        e.preventDefault()
        convert()
    }
})

window.onload = function (){
    const text = selectTemplate()
    const result = shuffle_js(text, "e")
    text_js.innerHTML = `“${text}”,`
    result_js.innerHTML = `“${result}”`
}

function selectTemplate(){
    const example = [
        "euh il manque un livrable pour le SP",
        "refaits ton diapo merci",
        "super la montée en compétences",
        "bravo tu auras pas ton diplôme",
    ]
    let exampleRandom = Math.floor(Math.random() * example.length)
    return example[exampleRandom]
}

function shuffle_js(text, excludedValue){
    const array = text.split('')
    const max = array.length - (array.length)/2
    for(let i = 0; i < max ; i ++){
        const value = getRndInteger(0, array.length)
        if(array[value] !== "i" && array[value] !== excludedValue){
            array[value] = array[value].toUpperCase()
        }
    }
    for (let i = 0; i < array.length; i++) {
        if(array[i] === "l"){
            array[i] = array[i].toUpperCase()
        }
    }
    return array.join('')
}

function insult_js(text){
    const char = ["%", "#", "!", "_", "$", "£", "?"];
    const array = text.split('')
    const max = array.length - (array.length)/2
    for(let i = 0; i < max ; i ++){
        const value = getRndInteger(0, array.length)
        const random = Math.floor(Math.random() * char.length);
        if(array[value] !== "i"){
            array[value] = char[random]
        }
    }
    return array.join('')
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function convert(){
    const input = excludedValue.value
    let result
    if(input !== ''){
        result = shuffle_js(textarea.value, input)
    }else{
        result = shuffle_js(textarea.value)
    }
    conversion_result.innerHTML = result
}

function copyToClipboard(){

    navigator.clipboard.writeText(conversion_result.innerText);

}