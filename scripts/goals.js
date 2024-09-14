const noOfModals = 17; // temp value for no of implemented modals

const createElmnt = function (type, classes) {
  const newElement = document.createElement(type);
  newElement.classList.add(...classes);
  return newElement;
};
const createAppend = function (type, classes, parent) {
  const newElement = createElmnt(type, classes);
  parent.appendChild(newElement);
};

const goalDiv = {
  goalContainer: document.querySelector(".goals"),
  createGoal: function (number) {
    const newElement = createElmnt("div", [
      "goal",
      `goal-${number}`,
      "overlay-container",
      "show-modal",
      `btn-open-${number}`,
    ]);
    this.addImg(number, "newpark");
    this.addImg(number, "goal");
    this.goalContainer.appendChild(newElement);
  },
  addImg: function (number, type) {
    const img = createElmnt("img", [`${type}-image`]);
    img.src = `images/${type}-images/goal-${number + 1}-image`;
  },
};
for (let i = 0; i < noOfModals; i++) {
  goalDiv.createGoal(i);
}
// <-- Opening and closing modals -->
const modals = [];
const overlay = document.querySelector(".overlay");
const btnsOpen = [];
const btnsClose = [];
let activeModal;

for (let i = 0; i < noOfModals; i++) {
  modals[i] = document.querySelector(`.modal-${i}`);
  btnsOpen[i] = document.querySelector(`.btn-open-${i}`);
  btnsClose[i] = document.querySelector(`.btn-close-${i}`);
}
const openModal = function (modal) {
  // Setting the active modal
  activeModal = modal;

  // <-- Centering modal on screen -->
  modals[activeModal].style.top = `${scrollY + 300}px`;
  // Opening modal
  modals[activeModal].classList.remove("hidden");
  overlay.classList.remove("hidden");

  // Adding closing event listeners
  btnsClose[activeModal].addEventListener("click", function () {
    closeModal();
  });
};
const closeModal = function () {
  modals[activeModal].classList.add("hidden");
  overlay.classList.add("hidden");
};

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modals[activeModal].classList.contains("hidden")) {
    closeModal();
  }
});

for (let i = 0; i < noOfModals; i++) {
  btnsOpen[i].addEventListener("click", function () {
    openModal(i);
  });
}

// <-- assigning modal colours -->
const backgroundColours = [
  "#ea1d2d",
  "#d19f2a",
  "#2d9a47",
  "#c22033",
  "#ef412a",
  "#00aed9",
  "#fdb714",
  "#8f1838",
  "#f36e24",
  "#e01a83",
  "#f99d25",
  "#cd8b2a",
  "#48773c",
  "#007dbb",
  "#40ae49",
  "#00558a",
  "#00558a",
];
for (let i = 0; i < noOfModals; i++) {
  const modalHeader = document.querySelector(`.modal-${i} h1`);
  modals[i].style.backgroundColor = backgroundColours[i];
  modalHeader.style.backgroundColor = backgroundColours[i];
}
// <-- Setting modal header text -->
const goalHeaders = document.querySelectorAll(".goal-modal-header");
const goals = [
  "No Poverty",
  "Zero Hunger",
  "Good Health and Well-being",
  "Quality Education",
  "Gender Equality",
  "Clean Water and Sanitation",
  "Affordable and Clean Energy",
  "Decent Work and Economic Growth",
  "Industry, Innovation and Infrastructure",
  "Reduced Inequalities",
  "Sustainable Cities and Communities",
  "Responsible Consumption and Production",
  "Climate Action",
  "Life Below Water",
  "Life on Land",
  "Peace, Justice and Strong Institutions",
  "Partnership for the Goals",
];

const goalDefs = [
  "End poverty in all its forms everywhere.",
  "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
  "Ensure healthy lives and promote well-being for all at all ages.",
  "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
  "Achieve gender equality and empower all women and girls.",
  "Ensure availability and sustainable management of water and sanitation for all.",
  "Ensure access to affordable, reliable, sustainable and modern energy for all.",
  "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.",
  "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.",
  "Reduce inequality within and among countries.",
  "Make cities and human settlements inclusive, safe, resilient and sustainable.",
  "Ensure sustainable consumption and production patterns.",
  "Take urgent action to combat climate change and its impacts.",
  "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
  "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.",
  "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.",
  "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.",
];
const modalTextContent = [
  "We're still working on this goal",
  "We're still working on this goal",
  "We're still working on this goal",
  "We're still working on this goal",
  "We're still working on this goal",
  "We're still working on this goal",
  "As Newpark eventually hope to fully run on renewable energy, we linked with the Enterprise and Innovation Committee to see if solar panels are a possibility. We have investigated government grants and possible contractors to complete this job.  Another issue we’ve tackled is how much energy is being wasted, whether it’s through appliances or maintenance. We have looked at the possibility of sustainable LED motion-activated lights. As well as researching the energy consumption of unused computers.",
  "We're still working on this goal",
  "Green policies are a core part of life here at Newpark and it is for that reason that we have successfully implemented six bike racks for students who wish to bike or scoot to school. In addition to this, we are also currently in the process of advocating for the implementation of an electrical car charger on the school campus, which would encourage staff and older students to opt for emission free transportation. As always, Newpark has also continued its dedication to conservation of biodiversity by nurturing its surrounding wildlife and continuing to expand its green spaces where possible. ",
  "We're still working on this goal",
  "Since we want to be sustainable for both the environment and the bank, WWGS have investigated alternative, cheaper methods of running the school. For example, reducing the amount of paper we use, the amount of energy we consume, and the amount of waste we produce. We have also researched grants we can apply for. For example, getting free posters from Irish Aid, and applying for the AIB sustainable outreach program.",
  "We're still working on this goal",
  "We're still working on this goal",
  "We're still working on this goal",
  "We're still working on this goal",
  "Protecting all our students from any form of harm, exploitation and abuse is of the utmost importance to the staff and management here at Newpark and for WWGS, this is no different. To achieve this, we intend to mirror this commitment by advocating for students to have a more active voice in school matters, which we believe is essential to create a more inclusive and diverse atmosphere throughout the school. ",
];
const modalImages = document.querySelectorAll(".modal-image");
const modalText = document.querySelectorAll(".goal-modal-text");
const modalDefs = document.querySelectorAll(".def-text");
const toSlug = function (string) {
  const lowercaseString = string.toLowerCase();
  const slug = lowercaseString.replace(/\s+/g, "-");
  return slug;
};
let yIncrement = 100;
for (let i = 0; i < noOfModals; i++) {
  //  <-- Setting header text -->
  goalHeaders[i].textContent = `Goal ${i + 1} - ${goals[i]}`;

  // <--Setting goal definition -->
  modalDefs[i].textContent = `"${goalDefs[i]}"`;
  // <-- Setting goal text content -->
  modalText[i].textContent = `"${modalTextContent[i]}"`;

  // <-- Adjusting modal header size -->
  const headerStyle = goalHeaders[i].style;
  const text = goalHeaders[i].textContent;

  if (isMobileDevice()) {
    headerStyle.fontFamily = "sans-serif";
    if (text.length > 22) {
      headerStyle.transform = "scale(0.7)";
      headerStyle.top = "105px";
      if (text.length > 40) {
        headerStyle.top = "85px";
      }
    }
  } else {
    let headerWidth = 10;
    // <-- Goals that are wider than modal -->
    if (text.length > 34) {
      for (let j = 0; j < text.length; j++) {
        headerWidth += 10;
        headerStyle.top = "100px";
      }
    } else {
      for (let j = 0; j < text.length; j++) {
        headerWidth += 15;
      }
    }
    headerStyle.width = `${headerWidth}px`;
  }

  // <-- Setting image source -->
  modalImages[i].src = `/images/modal-images/${toSlug(goals[i])}.jpeg`;
}
// <-- Optimising for mobile
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
