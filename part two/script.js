function addJob() {
    const input = document.getElementById("jobInputs");
    const jobName = input.value.trim();
    if (jobName === "") {
        alert("Pleas input your job");
        return;

    }
    const li = document.createElement("li");
    li.textContent = jobName;
    const delBtn = document.createElement("button");
    delBtn.textContent = "Del"
    delBtn.addEventListener("click", () => {
        li.remove();
    })
    li.appendChild(delBtn);
    document.getElementById("jobList").appendChild(li);
    input.value = "";
    const del = document.getElementById("del");
    del.addEventListener("click",()=>{
        const ul = document.getElementById("jobList");
        ul.remove();
    })
};
const input = document.getElementById("jobInputs");
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addJob();
    }
});
