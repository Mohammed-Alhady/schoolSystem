// header
document.querySelector(".links-shower i").onclick = () => {
  document.querySelector(".links-holder").style.right = "0";
};

document.querySelector(".links-holder i").onclick = () => {
  document.querySelector(".links-holder").style.right = "-110%";
};

// footer
const currentYear = new Date().getFullYear();
const yearSpan = document.querySelector(".year");
if (yearSpan) yearSpan.textContent = currentYear;

// filter

document
  .querySelector(".dropdown dt a")
  ?.addEventListener("click", function () {
    var ul = document.querySelector(".dropdown dd ul");
    if (ul.style.display === "none" || ul.style.display === "") {
      ul.style.display = "block";
    } else {
      ul.style.display = "none";
    }
  });

document.querySelectorAll(".dropdown dd ul li a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelector(".dropdown dd ul").style.display = "none";
  });
});

function getSelectedValue(id) {
  return $("#" + id)
    .find("dt a span.value")
    .html();
}

document.addEventListener("click", function (e) {
  var clicked = e.target;
  if (!clicked.closest(".dropdown")) {
    document.querySelectorAll(".dropdown dd ul").forEach(function (ul) {
      ul.style.display = "none";
    });
  }
});

document
  .querySelectorAll('.mutliSelect input[type="checkbox"]')
  .forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
      var title = this.value + ",";
      if (this.checked) {
        var html = '<span title="' + title + '">' + title + "</span>";
        document
          .querySelector(".multiSel")
          .insertAdjacentHTML("beforeend", html);
        document.querySelector(".hida").style.display = "none";
      } else {
        document
          .querySelectorAll('span[title="' + title + '"]')
          .forEach(function (span) {
            span.remove();
          });
        var ret = document.querySelector(".hida");
        document.querySelector(".dropdown dt a").appendChild(ret);
      }
    });
  });

// create task
const taskholder = document.querySelector(".create-task");
const taskBtn = document.querySelector(".create-task-btn");

if (taskholder && taskBtn) {
  const layout = document.querySelector(".layout");
  taskBtn.onclick = () => {
    taskholder.style.top = "50%";
    layout.style.top = "50%";
  };
  document.querySelector(".cancel-task").onclick = () => {
    taskholder.style.top = "-150%";
    layout.style.top = "-150%";
  };
}

// create service
const serviceholder = document.querySelector(".create-service");
const serviceBtn = document.querySelector(".create-service-btn");

if (serviceholder && serviceBtn) {
  const layout = document.querySelector(".layout");
  serviceBtn.onclick = () => {
    serviceholder.style.top = "50%";
    layout.style.top = "50%";
  };
  document.querySelector(".cancel-servic").onclick = () => {
    serviceholder.style.top = "-150%";
    layout.style.top = "-150%";
  };
}

// edit profile
const editholder = document.querySelector(".edit-header");
const editBtn = document.querySelector(".edit-btn");

if (editholder && editBtn) {
  const layout = document.querySelector(".layout");
  editBtn.onclick = () => {
    editholder.style.top = "50%";
    layout.style.top = "50%";
  };
  document.querySelector(".cancel-edit").onclick = () => {
    editholder.style.top = "-150%";
    layout.style.top = "-150%";
  };
}

// edit card
const editCardholder = document.querySelector(".edit-card");
const editCardBtn = document.querySelectorAll(".edit-card-btn");

if (editCardholder && editCardBtn) {
  const layout = document.querySelector(".layout");
  editCardBtn.forEach((btn) => {
    btn.onclick = () => {
      editCardholder.style.top = "50%";
      layout.style.top = "50%";
    };
  });
  document.querySelector(".cancel-edit-card").onclick = () => {
    editCardholder.style.top = "-150%";
    layout.style.top = "-150%";
  };
}
// delete card
const deleteHolder = document.querySelector(".delete-card");
const deleteBtn = document.querySelectorAll(".delete-btn");
if (deleteHolder && deleteBtn) {
  const layout = document.querySelector(".layout");
  deleteBtn.forEach((btn) => {
    btn.onclick = () => {
      deleteHolder.style.top = "50%";
      layout.style.top = "50%";
    };
  });
  document.querySelector(".cancel-delete-card").onclick = () => {
    deleteHolder.style.top = "-150%";
    layout.style.top = "-150%";
  };
}

// add card
const addHolder = document.querySelector(".add-card");
const addBtn = document.querySelectorAll(".add-btn");
if (addHolder && addBtn) {
  const layout = document.querySelector(".layout");
  addBtn.forEach((btn) => {
    btn.onclick = () => {
      addHolder.style.top = "50%";
      layout.style.top = "50%";
    };
  });
  document.querySelector(".cancel-add-card").onclick = () => {
    addHolder.style.top = "-150%";
    layout.style.top = "-150%";
  };
}

// status-card
const statusHolder = document.querySelector(".status-card");
const statusBtn = document.querySelectorAll(".status-btn");
if (statusHolder && statusBtn) {
  const layout = document.querySelector(".layout");
  statusBtn.forEach((btn) => {
    btn.onclick = () => {
      statusHolder.style.top = "50%";
      layout.style.top = "50%";
    };
  });
  document.querySelector(".cancel-status-card").onclick = () => {
    statusHolder.style.top = "-150%";
    layout.style.top = "-150%";
  };
}

// create quesion hanler
const clearQuestion = () => {
  // clear the question
  document.querySelector(".q-name").value = "";
  document.querySelector(".q-mark").value = "";
  document.getElementById("question-type").value = "";

  // show the create new answer
  document.querySelector(".create-new-answer").style.display = "block";

  document
    .querySelectorAll(".create-quesion .answers > input")
    .forEach((input) => {
      input.remove(); // Correct usage of remove
    });

  // Create a new input field for the first answer
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "الاجابة 1");
  input.classList.add("field");
  document.querySelector(".create-quesion .answers").appendChild(input);
};

// Function to update the number of questions
const updateQuestionsCount = () => {
  const questionCount = getQuestionNumber();
  const questionsNumberSpan = document.querySelector(".questions-number");
  if (questionsNumberSpan) {
    questionsNumberSpan.textContent = questionCount;
  }
};

// Function to update the total number of grades
const updateGradesCount = () => {
  const questions = document.querySelectorAll(".questions-holder .question");
  let totalGrades = 0;
  questions.forEach((question) => {
    const gradeSpan = question.querySelector(".grade");
    if (gradeSpan) {
      const gradeValue = parseInt(gradeSpan.textContent);
      totalGrades += isNaN(gradeValue) ? 0 : gradeValue;
    }
  });
  const gradesNumberSpan = document.querySelector(".grades-number");
  if (gradesNumberSpan) {
    gradesNumberSpan.textContent = totalGrades;
  }
};

// Modify createQuestion function to update counts after creating a new question
const createQuestion = () => {
  const qName = document.querySelector(".create-quesion .q-name");
  const qAnswers = document.querySelectorAll(
    ".create-quesion .answers > input"
  );
  const qMark = document.querySelector(".question-body .q-mark");
  const qType = document.getElementById("question-type");

  // create question container
  const questionHolder = document.createElement("div");
  questionHolder.classList.add("question");

  // create question mark
  const questionMark = document.createElement("span");
  questionMark.classList.add("grade");
  questionMark.innerHTML = `${qMark.value} marks`; // Corrected template literal syntax

  // create question title
  const questionTitle = document.createElement("h2");
  questionTitle.classList.add("question-title");
  questionTitle.innerHTML = `q - ${qName.value}`; // Corrected template literal syntax
  questionTitle.appendChild(questionMark);

  // create question type
  const questionType = document.createElement("h3");
  questionType.classList.add("question-type");
  questionType.innerHTML = `type - ${qType.value}`; // Corrected template literal syntax

  // create question number
  const questionNumber = document.createElement("span");
  questionNumber.classList.add("question-number");
  questionNumber.innerHTML = getQuestionNumber() + 1;

  // create question body with answers
  const questionBody = document.createElement("div");
  questionBody.classList.add("answers");
  qAnswers.forEach((el, index) => {
    const answer = document.createElement("span");
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("id", `q${getQuestionNumber() + 1}-a${index + 1}`); // Corrected template literal syntax
    input.setAttribute("name", `q${getQuestionNumber() + 1}`); // Corrected template literal syntax
    answer.classList.add("answer");
    answer.innerHTML = el.value;
    answer.appendChild(input);
    questionBody.appendChild(answer);
  });

  // Append elements to question holder
  questionHolder.appendChild(questionTitle);
  questionHolder.appendChild(questionType);
  questionHolder.appendChild(questionNumber);
  questionHolder.appendChild(questionBody);

  // Add the question to the questions holder in the DOM
  document.querySelector(".questions-holder").appendChild(questionHolder);

  // Close the modal or form
  const qholder = document.querySelector(".create-quesion");
  const layout = document.querySelector(".layout");
  qholder.style.top = "-150%";
  layout.style.top = "-150%";

  // Clear old answers and reset the form
  const answersHolder = document.querySelector(".create-quesion .answers");
  while (getAnswersNumber() > 1) {
    answersHolder.removeChild(answersHolder.lastElementChild);
  }
  answersHolder.lastChild.value = "";

  // Reset the answer creation button visibility
  const createNewAnswer = document.querySelector(".create-new-answer");
  createNewAnswer.style.display = "block";

  // Update question and grade counts
  updateQuestionsCount();
  updateGradesCount();
};

// Functions to get the number of answers
const getAnswersNumber = () => {
  return document.querySelectorAll(".answers > input").length || 0;
};

// Function to get the number of questions
const getQuestionNumber = () => {
  return document.querySelectorAll(".questions-holder > .question").length || 0;
};

const pageMoving = () => {
  const layout = document.querySelector(".layout");
  const qholder = document.querySelector(".create-quesion");
  const qBtn = document.querySelector(".create-new-quesion");
  qBtn.onclick = () => {
    qholder.style.top = "50%";
    layout.style.top = "50%";
  };
  document.querySelector(".cancel-create-question").onclick = () => {
    clearQuestion();
    qholder.style.top = "-150%";
    layout.style.top = "-150%";
  };
};

// check the correct number of answers depending on question type
const getNumberOfAnswers = () => {
  const questionType = document.getElementById("question-type").value;
  if (questionType === "chose-the-correct") {
    return 4;
  } else if (questionType === "fill-in-the-blank") {
    return 1;
  } else if (questionType === "true-of-false") {
    return 2;
  } else {
    return 1;
  }
};

const createNewAnswerHolder = () => {
  const createNewAnswer = document.querySelector(".create-new-answer");
  const answersHolder = document.querySelector(".create-quesion .answers");

  createNewAnswer.onclick = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", `الاجابة ${getAnswersNumber() + 1}`);
    input.classList.add("field");
    answersHolder.appendChild(input);
    if (getAnswersNumber() === getNumberOfAnswers()) {
      createNewAnswer.style.display = "none";
    } else {
    }
  };
};

const handleQuestionType = () => {
  console.log(getAnswersNumber(), getNumberOfAnswers());
  if (getAnswersNumber() > getNumberOfAnswers()) {
    const answers = Array.from(
      document.querySelectorAll(".answers > input")
    ).reverse();

    answers.forEach((element) => {
      if (getAnswersNumber() > getNumberOfAnswers()) {
        element.remove();
      }
    });
  } else if (getAnswersNumber() < getNumberOfAnswers()) {
    document.querySelector(".create-new-answer").style.display = "block";
  } else if (getAnswersNumber() === getNumberOfAnswers()) {
    document.querySelector(".create-new-answer").style.display = "none";
  }
};

const createNewAnswer = document.querySelector(".create-new-answer");
const answersHolder = document.querySelector(".create-quesion .answers");

if (createNewAnswer) {
  createNewAnswer.onclick = () => {
    // check type of answer
    if (getAnswersNumber() > getNumberOfAnswers()) {
      handleQuestionType();
    } else if (getAnswersNumber() < getNumberOfAnswers()) {
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", `الاجابة ${getAnswersNumber() + 1}`);
      input.classList.add("field");
      answersHolder.appendChild(input);
    }
    // check if all answers are created
    if (getAnswersNumber() === getNumberOfAnswers()) {
      createNewAnswer.style.display = "none";
    }
  };
}

// Hook to create question button
const createQuesionBtn = document.querySelector(".create-quesion-btn");
if (createQuesionBtn) {
  createQuesionBtn.onclick = () => {
    const qName = document.querySelector(".create-quesion .q-name");
    const qMark = document.querySelector(".question-body .q-mark");

    if (
      qName.value &&
      qMark.value &&
      getAnswersNumber() === getNumberOfAnswers()
    ) {
      createQuestion();
      clearQuestion();
    }
  };
}

// drop page shower
const qholder = document.querySelector(".create-quesion");
const qBtn = document.querySelector(".create-new-quesion");
if (qholder && qBtn) pageMoving();

// delete answers

const seletor = document.querySelector("#question-type");
if (seletor)
  document.querySelector("#question-type").onchange = () => {
    handleQuestionType();
  };
