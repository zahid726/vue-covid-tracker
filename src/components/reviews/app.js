const reviews=[

    {
        
    id: 1,
    name: "zahid",
    job: "web developer",
    img:'person-1.jpeg',
    text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
        
    id: 2,
    name: "zahid",
    job: "web developer",
    img:'person-1.jpeg',
    text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
        
    id: 3,
    name: "hussain",
    job: "designer",
    img:'person-1.jpeg',
    text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
        
    id: 4,
    name: "ali",
    job: "designer",
    img:'person-1.jpeg',
    text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  }

]
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// current item 
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });


 nextBtn.addEventListener('click',function(){
   currentItem++;
   if(currentItem >reviews.length-1){
     currentItem = 0;
   }
   showItem(currentItem);
 });
 prevBtn.addEventListener('click',function(){
  currentItem--;
  if(currentItem <0){
    currentItem = reviews.length-1;
  }
  showItem(currentItem);
});
randomBtn.addEventListener('click',function(){
  currentItem= Math.floor(Math.random()*reviews.length);
 
  showItem(currentItem);
});


 function showItem(currentItem){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
  console.log(author.textContent = item.name);
 }