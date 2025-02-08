document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const output = document.getElementById("resume-output") as HTMLElement;
    const generateBtn = document.getElementById("generate-btn") as HTMLButtonElement;

    if (!form || !output || !generateBtn) {
        console.error("Form, output container, or button not found!");
        return;
    }

    generateBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const formData = new FormData(form);  

        const name = formData.get("name")?.toString() || "N/A";
        const email = formData.get("email")?.toString() || "N/A";
        const about = formData.get("about")?.toString() || "N/A";
        const position = formData.get("position")?.toString() || "N/A";
        const experience = formData.get("experience")?.toString() || "N/A";
        const education = formData.get("education")?.toString() || "N/A";
        const skills = formData.get("skills")?.toString() || "N/A";
        const languages = formData.get("languages")?.toString() || "N/A";
        const startDate = formData.get("start-date")?.toString() || "N/A";
        const endDate = formData.get("end-date")?.toString() || "N/A";
        const eduStartDate = formData.get("edu-start-date")?.toString() || "N/A";
        const eduEndDate = formData.get("edu-end-date")?.toString() || "N/A";

        output.innerHTML = `
            <div class="resume">
                <h2>Resume</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>About:</strong> ${about}</p>
                
                <h3>Work Experience</h3>
                <hr>
                <p><strong>Company/Position:</strong> ${position}</p>
                <p><strong>Duration:</strong> ${startDate} to ${endDate}</p>
                <p><strong>Experience:</strong> ${experience}</p>

                <h3>Education</h3>
                <hr>
                <p><strong>Education:</strong> ${education}</p>
                <p><strong>Duration:</strong> ${eduStartDate} to ${eduEndDate}</p>

                <h3>Additional Skills</h3>
                <hr>
                <p><strong>Languages:</strong> ${languages}</p>
                <p><strong>Skills:</strong> ${skills}</p>
            </div>
        `;
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form") as HTMLFormElement;
    const output = document.querySelector("#resumeOutput") as HTMLDivElement;
    const generateBtn = document.querySelector("#generate-btn") as HTMLButtonElement;
  
    if (!form || !output || !generateBtn) {
      console.error("Form, output container, or button not found!");
      return;
    }
  
    generateBtn.addEventListener("click", (event) => {
      event.preventDefault();
  
      // Get form data
      const name = (document.querySelector("#name") as HTMLInputElement).value;
      const email = (document.querySelector("#email") as HTMLInputElement).value;
      const about = (document.querySelector("#about") as HTMLInputElement).value;
      const experience = (document.querySelector("#experience") as HTMLInputElement).value;
  
      // Generate Resume Output
      output.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>About:</strong> ${about}</p>
        <p><strong>Experience:</strong> ${experience}</p>
      `;
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.querySelector("#generate-btn") as HTMLButtonElement;
    const output = document.querySelector("#resumeOutput") as HTMLDivElement;

    if (!generateBtn || !output) {
        console.error("Generate button or output container not found!");
        return;
    }

    generateBtn.addEventListener("click", (event) => {
        event.preventDefault();

        // Get all form values
        const name = (document.querySelector("#name") as HTMLInputElement).value;
        const email = (document.querySelector("#email") as HTMLInputElement).value;
        const about = (document.querySelector("#about") as HTMLTextAreaElement).value;
        const Company = (document.querySelector("#company") as HTMLInputElement).value;
        const joinDate = (document.querySelector("#joinDate") as HTMLInputElement).value;
        const endDate = (document.querySelector("#endDate") as HTMLInputElement).value;
        const experience = (document.querySelector("#experience") as HTMLInputElement).value;
        const education = (document.querySelector("#education") as HTMLInputElement).value;
        const eduJoin= (document.querySelector("#eduJoin") as HTMLInputElement).value;
        const eduEnd = (document.querySelector("#eduEnd") as HTMLInputElement).value;
        const skills = (document.querySelector("#skills") as HTMLInputElement).value;
        const languages = (document.querySelector("#languages") as HTMLInputElement).value;
        


        // Check if all values are being retrieved
        console.log({ name, email, about, experience, skills });

        // Generate Resume Output
        output.innerHTML = `
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>About:</strong> ${about}</p>
                   <p><strong>Company:</strong> ${Company}</p>
                    <p><strong>Join Date:</strong> ${joinDate}</p>
            <p><strong>End Date:</strong> ${endDate}</p>

            <p><strong>Experience:</strong> ${experience}</p>
               <p><strong>Education:</strong> ${education}/p>
                 <p><strong>Education Join Date:</strong> ${eduJoin}</p>
            <p><strong>Education End Date:</strong> ${eduEnd}</p>
           
            <p><strong>Skills:</strong> ${skills}</p>
         
            <p><strong>Languages:</strong>${languages} </p>
     
          
     

        `;
    });
});

  