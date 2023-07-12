let questions = document.getElementById("questions");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

let api =
   "https://opentdb.com/api.php?amount=50&category=9&difficulty=medium&type=multiple";

fetch(api)
   .then((Response) => Response.json())
   .then((data) => {
      console.log(data.results);
      let quiz = data.results;
      let arr = [];
      quiz.map((item) => {
         let quizObj = {
            question: item.question,
            options: [...item.incorrect_answers, item.correct_answer],
            answer: item.correct_answers,
         };
         quizObj.options.sort((a) => Math.random() - 0.5);
         arr.push(quizObj);
      });
      arr.sort((a) => Math.random() - 0.5);
      questions.innerHTML = arr[0].question;
      option1.innerHTML = arr[0].options[0];
      option2.innerHTML = arr[0].options[1];
      option3.innerHTML = arr[0].options[2];
      option4.innerHTML = arr[0].options[3];
      console.log(arr);
   });
// });
