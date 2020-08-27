// PASSING THE INFORMATIONS INSIDE AN ARRAY OF OBJECTS

const review = [
  {
    id: 1,
    name: "Ayodeji Oladimeji",
    job: "FRONTEND DEVELOPER",
    img: "https://ca.slack-edge.com/TUCKAB1GU-UV1SN6U1E-cb3341d5f640-512",
    info:
      "Innovative FrontEnd Developer with Eight (8) Months experience building and maintaining responsive websites in the recruiting industry.  My greatest strength is business awareness which enables me to permanently streamline infrastructure and applications. "
  },
  {
    id: 2,
    name: "Emeka Chukwuemeka",
    job: "MOBILE/FLUTTER",
    img: "https://ca.slack-edge.com/TUCKAB1GU-UV43J9XTQ-f0b92d94093a-512",
    info:
      "Innovative Mobile Developer with Two (2) years experience building and maintaining responsive mobile Apps in the recruiting industry.  My greatest strength is business awareness which enables me to permanently streamline infrastructure and applications. "
  },
  {
    id: 3,
    name: "Dada Shalom",
    job: "WEBSITE DESIGNER",
    img: "https://ca.slack-edge.com/TUCKAB1GU-UUQD4TXFV-4c78e0f0299f-512",
    info:
      "Innovative Web Designer with three (3) years experience Designinig and maintaining responsive websites in the recruiting industry.  My greatest strength is business awareness which enables me to permanently streamline infrastructure and applications. "
  },
  {
    id: 4,
    name: "Stephen Kolawole",
    job: "DATA SCIENTIST",
    img: "https://ca.slack-edge.com/TUCKAB1GU-UV1U7PQ93-0e3799261105-512",
    info:
      "A Software Engineer with a strong bias towards building Machine Learning applications. Possesses a tough mentality and natural leadership skills. Strives to consistently exceed expectations and enthusiastic about new challenges to increase knowledge and efficiency."
  }
];

const image = document.querySelector(".image");
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const info = document.querySelector(".info");

const btns = document.querySelectorAll(".btn");

// DECLARE THE CURRENT ITEM
let currentItem = 1;

window.addEventListener("DOMContentLoaded", function() {
  const item = review[currentItem];
  image.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.info;
});

function showPerson(person) {
  const item = review[person];
  image.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.info;
}

btns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("prev")) {
      currentItem--;
      if (currentItem < 0) {
        currentItem = review.length - 1;
      }
      showPerson(currentItem);
    } else if (styles.contains("next")) {
      currentItem++;
      if (currentItem === review.length) {
        currentItem = 0;
      }
      showPerson(currentItem);
    } else if (styles.contains("random")) {
      currentItem = Math.floor(Math.random() * review.length);
      showPerson(currentItem);
      console.log(currentItem);
    }
  });
});
