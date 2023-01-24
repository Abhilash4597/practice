// let obj = {
//   name: "abhilash",
  
// }

// let obj2 = {
//   surname: 'singh'
// };


// let arr = [1, 2, 3, 4, 5];
// arr.filter((ele) => {
//   return ele > 2;
// })
// for (let i = 0; i < arr.length; i++){
  
// }

// Given the Api and some users data are availabe, fetch the data and show the users data on the view. Api [https://jsonplaceholder.typicode.com/users/]



// const boxes = document.querySelectorAll(".square");
// // const parent =
// console.log(boxes);


// function clicked() {
//   console.log("boxes");
// };
// boxes.forEach(element => {
//   element.addEventListener("click", clicked);
  
// });

// concepts of all in depth
// positive attitude


// boxes.map(() => {
//   console
// })


// #-------------------------------------STAR RATING

const fa_star = document.querySelectorAll('.fa-star');
// const container = document.querySelector(".container");

// container.addEventListener("click", (e)=>{
//     if (e.target.classList.contains("fa-star")) {
//         e.target.classList.toggle("color");

//     }
// })

fa_star.forEach((star, i) => {
  star.addEventListener('click', e => {
    // console.log(i)
    fa_star.forEach((star, ind) => {
      // console.log(ind)
      if (i >= ind) {
        star.classList.add('color');
      } else {
        star.classList.remove('color');
      }
    });
  });
});
fa_star.forEach((star, i) => {
  star.addEventListener('mouseover', e => {
    // console.log(i)
    fa_star.forEach((star, ind) => {
      // console.log(ind)
      if (i > ind) {
        star.classList.add('color');
      } else {
        star.classList.remove('color');
      }
    });
  });
});

