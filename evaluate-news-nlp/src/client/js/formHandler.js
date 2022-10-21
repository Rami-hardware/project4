const polarity = document.getElementById('polarity');
const polConfidence = document.getElementById('pol-confidence');
const subjectivity = document.getElementById('subjectivity');
const subConfidence = document.getElementById('sub-confidence');
function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value
    console.log("::: Form Submitted :::")
    fetchData(formText);
}

const fetchData = async (url = '') =>{
    if(Client.vUrl(url))
    {
            const res = await fetch("http://localhost:8081/scan", {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({url})
            });
            try {
                const nData = await res.json();
                return nData;
            } catch (error) {
                console.log(error);
            }
    }else{
        alert("erorr");
    }
}
const update = (data) =>{
    //polarity.innerHTML =  data.polarity
    polConfidence.innerHTML = data.polarity_confidence
    subjectivity.innerHTML =  data.subjectivity
    subConfidence.innerHTML =  data.subjectivity_confidence
}
export { handleSubmit }