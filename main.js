document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var output = document.getElementById("resume-output");
    var generateBtn = document.getElementById("generate-btn");
    if (!form || !output || !generateBtn) {
        console.error("Form, output container, or button not found!");
        return;
    }
    generateBtn.addEventListener("click", function (event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        event.preventDefault();
        var formData = new FormData(form);
        var name = ((_a = formData.get("name")) === null || _a === void 0 ? void 0 : _a.toString()) || "N/A";
        var email = ((_b = formData.get("email")) === null || _b === void 0 ? void 0 : _b.toString()) || "N/A";
        var about = ((_c = formData.get("about")) === null || _c === void 0 ? void 0 : _c.toString()) || "N/A";
        var position = ((_d = formData.get("position")) === null || _d === void 0 ? void 0 : _d.toString()) || "N/A";
        var experience = ((_e = formData.get("experience")) === null || _e === void 0 ? void 0 : _e.toString()) || "N/A";
        var education = ((_f = formData.get("education")) === null || _f === void 0 ? void 0 : _f.toString()) || "N/A";
        var skills = ((_g = formData.get("skills")) === null || _g === void 0 ? void 0 : _g.toString()) || "N/A";
        var languages = ((_h = formData.get("languages")) === null || _h === void 0 ? void 0 : _h.toString()) || "N/A";
        var startDate = ((_j = formData.get("start-date")) === null || _j === void 0 ? void 0 : _j.toString()) || "N/A";
        var endDate = ((_k = formData.get("end-date")) === null || _k === void 0 ? void 0 : _k.toString()) || "N/A";
        var eduStartDate = ((_l = formData.get("edu-start-date")) === null || _l === void 0 ? void 0 : _l.toString()) || "N/A";
        var eduEndDate = ((_m = formData.get("edu-end-date")) === null || _m === void 0 ? void 0 : _m.toString()) || "N/A";
        output.innerHTML = "\n            <div class=\"resume\">\n                <h2>Resume</h2>\n                <p><strong>Name:</strong> ".concat(name, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>About:</strong> ").concat(about, "</p>\n                \n                <h3>Work Experience</h3>\n                <hr>\n                <p><strong>Company/Position:</strong> ").concat(position, "</p>\n                <p><strong>Duration:</strong> ").concat(startDate, " to ").concat(endDate, "</p>\n                <p><strong>Experience:</strong> ").concat(experience, "</p>\n\n                <h3>Education</h3>\n                <hr>\n                <p><strong>Education:</strong> ").concat(education, "</p>\n                <p><strong>Duration:</strong> ").concat(eduStartDate, " to ").concat(eduEndDate, "</p>\n\n                <h3>Additional Skills</h3>\n                <hr>\n                <p><strong>Languages:</strong> ").concat(languages, "</p>\n                <p><strong>Skills:</strong> ").concat(skills, "</p>\n            </div>\n        ");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".form");
    var output = document.querySelector("#resumeOutput");
    var generateBtn = document.querySelector("#generate-btn");
    if (!form || !output || !generateBtn) {
        console.error("Form, output container, or button not found!");
        return;
    }
    generateBtn.addEventListener("click", function (event) {
        event.preventDefault();
        // Get form data
        var name = document.querySelector("#name").value;
        var email = document.querySelector("#email").value;
        var about = document.querySelector("#about").value;
        var experience = document.querySelector("#experience").value;
        // Generate Resume Output
        output.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>About:</strong> ").concat(about, "</p>\n        <p><strong>Experience:</strong> ").concat(experience, "</p>\n      ");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var generateBtn = document.querySelector("#generate-btn");
    var output = document.querySelector("#resumeOutput");
    if (!generateBtn || !output) {
        console.error("Generate button or output container not found!");
        return;
    }
    generateBtn.addEventListener("click", function (event) {
        event.preventDefault();
        // Get all form values
        var name = document.querySelector("#name").value;
        var email = document.querySelector("#email").value;
        var about = document.querySelector("#about")
            .value;
        var Company = document.querySelector("#company")
            .value;
        var joinDate = document.querySelector("#joinDate")
            .value;
        var endDate = document.querySelector("#endDate")
            .value;
        var experience = document.querySelector("#experience").value;
        var education = document.querySelector("#education")
            .value;
        var eduJoin = document.querySelector("#eduJoin")
            .value;
        var eduEnd = document.querySelector("#eduEnd")
            .value;
        var skills = document.querySelector("#skills")
            .value;
        var languages = document.querySelector("#languages")
            .value;
        // Check if all values are being retrieved
        console.log({ name: name, email: email, about: about, experience: experience, skills: skills });
        // Generate Resume Output
        output.innerHTML = "\n            <h2>".concat(name, "</h2>\n            <p><strong>Email:</strong>          <br/> ").concat(email, "</p>\n  \n            <p><strong>About:</strong> ").concat(about, "</p>\n                 <h3>Work</h3>\n                  <hr>\n            <p><strong>Company:</strong> ").concat(Company, "</p>\n            <p><strong>Join Date:</strong> ").concat(joinDate, "</p>\n            <p><strong>End Date:</strong> ").concat(endDate, "</p>\n             <h3>Work Experience</h3>\n                  <hr>\n            <p><strong>Experience:</strong> ").concat(experience, "</p>\n             <h3>Education</h3>\n                  <hr>\n            <p><strong>Education:</strong> ").concat(education, "</p>\n            <p><strong>Education Join Date:</strong> ").concat(eduJoin, "</p>\n            <p><strong>Education End Date:</strong> ").concat(eduEnd, "</p>\n             <h3>Skills</h3>\n              <hr>\n            <p><strong>Skills:</strong> ").concat(skills, "</p>\n             <h3>Languages</h3>\n             <hr>\n            <p><strong>Languages:</strong>").concat(languages, " </p>\n     \n          \n     \n\n        ");
    });
});
