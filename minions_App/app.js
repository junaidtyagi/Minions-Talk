var input=document.querySelector("#btn-translate");
var outputDiv=document.querySelector("#output");
var txtInput=document.querySelector("#txt-input");

var serverURl="https://api.funtranslations.com/translate/minion.json"

function errorHandler(error){
    alert("something went wrong with serve ! try after some time");
}

function getTranslationUrl(text){
    return serverURl + "?" + "text="+ text;
}

function fun(){
    var inputText=txtInput.value;

    fetch(getTranslationUrl(inputText))
        .then(respon => respon.json())
        .then(jso => {
           var translatedText= json.contents.translated;
            outputDiv.innerText= translatedText;
        })
        .catch(errorHandler);

};

input.addEventListener("click",fun);