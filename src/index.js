function displayJobs(response){
    console.log("jobs generated")
        new Typewriter("#jobs", {
            strings:response.data.answer,
            autoStart:true,
            delay:1,
            cursor:"",
        });
}
    
function generateJobs(event){
        event.preventDefault();

        let instructionsInput = document.querySelector("#instructions")
        let apiKey = "7f9d9cf0474030cet59a45f7coc640b0";
        let context="You are a career coach for young people struggling with unemployment. Your mission is to generate a short list of jobs that someone could have based on the skills in the user instructions";
        let prompt=`Instructions: Generate a list of 4 jobs that a person could have based on these skills : ${instructionsInput.value}. Just put the jobs in a list as <h1> elements and the description as <ul><li>. `;
        let apiURL=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
       
        let jobsElement = document.querySelector("#jobs")
        jobsElement.classList.remove("hidden");
        jobsElement.innerHTML = `<div class="generating"> Generating a list of jobs that need the skill ${instructionsInput.value} </div>`;
        console.log("generating jobs");
        console.log(`prompt: ${prompt}`);
        console.log(`context: ${context}`);
        axios.get(apiURL).then(displayJobs);
    }
     



let jobsFormElement = document.querySelector("#job-generator");
jobsFormElement.addEventListener("submit", generateJobs);