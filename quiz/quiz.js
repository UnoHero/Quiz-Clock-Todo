const correctAnswers = ["B", "B", "A", "A", "A", "B", "C", "A", "B", "C"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result")

form.addEventListener("submit", e => {
    e.preventDefault();
    let score = 0;
    const rightAnswers = [form.q1.right, form.q2.right, form.q3.right, form.q4.right, form.q5.right, form.q6.right, form.q7.right, form.q8.right, form.q9.right, form.q10.right,]
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value,]
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 10;
        }

    });


    for(let i = 0; i<1; i++){
        const right = document.querySelectorAll(".right")
        right[i].style.accentColor = "#00ff00"
        const wrong = document.querySelectorAll(".wrong")
        wrong[i].style.accentColor = "#ff0000"
    };
   
    
    scrollTo(0,0);

    result.classList.remove("d-none");

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector("span").textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);

});




const tabs = document.querySelector("#tabsP");
const tabsbox = document.querySelector(".tabsbox")
tabs.addEventListener("click", () => {
    document.getElementById('clickaudio').play();
    if (tabsbox.style.display === "block") {
        tabsbox.style.display = "none";
      } else {
        tabsbox.style.display = "block";
    }
});
