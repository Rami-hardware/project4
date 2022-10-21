const polarity = document.getElementById('polarity');
const polConfidence = document.getElementById('pol-confidence');
const subjectivity = document.getElementById('subjectivity');
const subConfidence = document.getElementById('sub-confidence');
function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log("::: Form Submitted :::")
    fetchData(formText);
}

const fetchData = async (url) =>{
    if(Client.vUrl(url))
    {
        console.log(JSON.stringify({'url':url}));
        await fetch("http://localhost:8081/scan",{
            method:"POST",
            mode:'cors',
            header:{
                'Content-Type': 'application/json',
                'accept':'application/json'
            },
            body: JSON.stringify({'url':url})
        })
        .then(res => res.json())
        .then(function(res){
            console.log(res);
            update(res);
        })
    }else{
        alert("erorr");
    }
}
const update = (data) =>{
    polarity.innerHTML =  data.polarity
    polConfidence.innerHTML = data.polarity_confidence
    subjectivity.innerHTML =  data.subjectivity
    subConfidence.innerHTML =  data.subjectivity_confidence
}
export { handleSubmit }