

//programing game code

function nightMood() {
    let darkTheme = document.querySelector(".section-light").innerHTML;

    if (darkTheme == true) {

    }
}

let tries = 0;

//easy level
let para = document.querySelector(".result").innerHTML;

function checkEasy() {
    let randomEasy = Math.floor(Math.random() * 50);
    let resultEasy = document.querySelector('.easyInput').value;
    tries++;


    if (resultEasy < randomEasy) {
        para = ' opps!! This Number is Too Small';
        // alert('This Number is Too Small!');
    } else {
        if (resultEasy > randomEasy) {
            para = ' opps!! This Number is Too Big';
            // alert('This Number is Too Big');
        } else if (resultEasy == randomEasy) {
            alert('Congratulation, You Won!!');
        }
    }

    if (tries > 5) {
        alert('Game Over!!');
    }

}

//medium level

function checkMedium() {
    let randomMedium = Math.floor(Math.random() * 100);
    let resultMedium = document.querySelector('.mediumInput').value;

    if (resultMedium < randomMedium) {
        alert('This Number is Too Small!');
    } else {
        if (resultMedium > randomMedium) {
            alert('This Number is Too Big');
        } else if (resultMedium == randomMedium) {
            alert('Congratulation, You Won!!');
        }
    }

    if (tries > 15) {
        alert('Game Over!!');
    }
}

//hard level

function checkHard() {
    let randomHard = Math.floor(Math.random() * 1000);
    let resultHard = document.querySelector('.hardInput').value;

    if (resultHard < randomHard) {
        alert('This Number is Too Small!');
    } else {
        if (resultHard > randomHard) {
            alert('This Number is Too Big');
        } else if (resultHard == randomHard) {
            alert('Congratulation, You Won!!');
        }
    }

    if (tries > 20) {
        alert('Game Over!!');
    }
}






//styling js code

// function homeBtn() {
//     let hideSection = document.querySelector('.showMain');
//     hideSection.classList.remove('hide');
//     hideSection.classList.add('show');
// }
// function easyBtn() {
//     let hidEasy = document.querySelector('.easy');
//     hidEasy.style.display = 'block';
// }

// function mediumBtn() {
//     let hidMedium = document.querySelector('.medium');
//     hidMedium.style.display = 'block';
// }

// function hardBtn() {
//     let hidHard = document.querySelector('.hard');
//     hidHard.style.display = 'block';
// }




// let school = {
//     name: "The Future",
//     shortDescription: "An English Medium School",
//     longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore assumenda et accusamus doloribus minima rerum quibusdam distinctio ipsam error ratione autem culpa possimus dolores harum, voluptates dignissimos voluptatem dicta sed.",
//     studentsData: [{
//             name: "Ali",
//             age: 10,
//             group: "A",
//             gender: "Male",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         },
//         {
//             name: "Aliaa",
//             age: 12,
//             group: "A",
//             gender: "Female",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         },
//         {
//             name: "Alizay",
//             age: 16,
//             group: "A",
//             gender: "Female",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         },
//         {
//             name: "Binash",
//             age: 16,
//             group: "A",
//             gender: "Female",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         },
//         {
//             name: "Fariha",
//             age: 10,
//             group: "A",
//             gender: "Female",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         },
//         {
//             name: "Gulshon",
//             age: 18,
//             group: "A",
//             gender: "Female",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         },
//         {
//             name: "Hatim",
//             age: 10,
//             group: "A",
//             gender: "Male",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         },
//         {
//             name: "Ikram",
//             age: 15,
//             group: "A",
//             gender: "Male",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         },
//         {
//             name: "Junaid",
//             age: 12,
//             group: "A",
//             gender: "Male",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         },
//         {
//             name: "Khalid",
//             age: 14,
//             group: "A",
//             gender: "Male",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         },
//         {
//             name: "Lubnaa",
//             age: 14,
//             group: "A",
//             gender: "Female",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         },
//         {
//             name: "Zahida",
//             age: 17,
//             group: "A",
//             gender: "Female",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         }
//     ],
//     fees: 1500,
//     duration: 6,
//     TeachingStaff: [{
//             name: "Abdullah",
//             age: 35,
//             position: "principle",
//             gender: "Male",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         },
//         {
//             name: "Alaina",
//             age: 20,
//             position: "English Teacher",
//             gender: "Female",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         },
//         {
//             name: "Bushra",
//             age: 22,
//             position: "Math Teacher",
//             gender: "Female",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         },
//         {
//             name: "Samina",
//             age: 21,
//             position: "Techer",
//             gender: "Female",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         },
//         {
//             name: "Hiraa",
//             age: 23,
//             position: "Science Teacher",
//             gender: "Female",
//             phoneNumbers: ["03334567896", "+92-457899043"],
//             address: "asdffgfhgjkllllllllhjhgghfd"
//         },
//     ]
// };