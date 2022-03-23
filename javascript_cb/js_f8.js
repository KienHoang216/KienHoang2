/* lam viec vs string*/ 
var myString = 'Hoc JS tai F8!'

//1.length
    //console.log(myString.length);

//2.Fin index(indexOf()) tìm vị trí
    //console.log(myString.indexOf('JS'));
    //console.log(myString.search('JS'));

//3. cut String
//console.log(myString.slice(4, 6)); left->right
//console.log(myString.slice(-4, -6)); left<-right

//4. Replace: sua
//console.log(myString.replace(/JS/g, 'javascript'))

//5.Convert to upper case chuyen thanh chu hoa
//console.log(myString.toUpperCase());

//6.Convert to lower case chuyen thanh chu thuong
//console.log(myString.toLowerCase());

//7. Trim loai bo khoang trang
//console.log(myString.trim())

//8. split cut string thanh array
//var languages = 'javascript, PHP, Ruby'
//console.log(languages.split(', '))
//var languages = 'javascript'
//console.log(languages.split(''))

//9. Get a character by index
const myString2 = 'Kien Hoang';
//console.log(myString2.charAt(0));
//console.log(myString2[0]);

/* lm vc vs number */
var a = 5;
var PI = 3.14;
//isNaN(a) de kiem tra number co hợp lệ ko

// to tring
//console.log(a.toString());
// toFixed lm tròn và chuyển data thành string 
//console.log(PI.toFixed())

                    /*  mảng(array)  */
var languages = [
    'javascript', 
    'PHP',
    'Ruby'
];
//console.log(languages)
//console.log(Array.isArray(languages)); kiểm tra xem có phải array ko
//      1 tostring
//console.log(languages.toString());
//      2 join
// console.log(languages.join('     '));
//      3 pop
//console.log(languages.pop());
// xóa phần tử cuối mảng và trả về phần tử đã xóa
//console.log(languages);
//      4 push
// thêm 1 hoặc nhiều phần tử vào cuối mảng trả về số phần tu đã thêm
//      5 shift
//xóa phần tử đầu mảng và trả về phần tử đã xóa
//      6 unshift
// thêm 1 hoặc nhiều phần tử vào đầu mảng trả về số phần tu đã thêm
// languages.splice(1, 0)
// console.log(languages)
//concat noi mang
//slice lay ra phan tu cua mang

//              hàm(function)
// function showDialog() {
//     var mString = '';
//     for (const param of arguments) {
//         mString += ` ${param}`
//     }
//     console.log(mString)
// }
// showDialog('log 1', 'log 2', 'log3');
// function cong(a, b) {
//     var c = a+b
//     return c;
// }
// console.log(cong(2, 8));
// function showMessage() {
//     var lastName = 'NAm';
//     function showMessage2(){
//         console.log(lastName);
//     }
//     showMessage2();
// }
// showMessage()
// polyfill
// var bee = 'tao ten la nam'.includes('t', 0);
// console.log(bee)

//          Object
var myInfo = {
    name: 'Kien Hoang',
    age: 18,
    address: 'HN'
};
var memBer = 'name'
myInfo.myString = 't rat vui';
myInfo['email-gg'] = '@gmail.com';
// console.log(myInfo.name)
// console.log(myInfo[memBer])
// delete myInfo.address
// console.log(myInfo)

// function User(firtName, lastName, avatar){
//     this.firtName = firtName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function() {
//         return `${this.firtName} ${this.lastName}`
//     }
// }
// User.prototype.className = '88'
// var author = new User('Kien', 'Hoang', 'avatar');
// var user = new User('Hoang', 'Huy', 'vava');
// author.title = 'Nm';
// user.genne = 'Nam';
// console.log(author)
// console.log(user)

//          Date
// var date = new Date();
// // console.log(date)
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();
// console.log(`${day}/${month}/${year}`)

//              toán tử 3 ngôi
// var course = {
//     name: 'Javascrip cơ bản',
//     coin: -1,
// }

// var result = course.coin > 0 ? `${course.coin} coins` : 'Miễn phí';
// console.log(result)

//                  vong la(loop)
/*
1. for lặp với điều kiện đúng
2. for/in lặp qua key của đối tượng
3. for/of lặp qua value của đối tượng
4. while lặp khi điề kiện đúng
5. do/while lặp ít nhất 1 lần,
 sau đó lặp khi điều kiện đúng
 */

 // for
 var myArray = [
     'javascript',
     'PHP',
     'Ruby'
 ]
//  var arrayLenght = myArray.length
//  for(var i = 0; i < arrayLenght; i++){
//      console.log(myArray[i]);
//  }

//  for/in

var myInfor = {
    name: 'Kien Hoang',
    age: 18,
    address: 'Ha Nam'
};
// for (const key in myInfor) {
//     console.log(myInfor[key]);
// }
//  for (const key in myArray) {
//     console.log(myArray[key]);
//  }

//      for/of
// for (const value of myArray) {
//     console.log(value)
// }



// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i==5) {
//         break;
//     }
// }


/* mảng 2 */

// var numberPhones = [
//     088888,
//     099999,
//     011111,
//     033333
// ]


// var num = numberPhones.find(function(numberPhone){
//     return numberPhone === 011111
// })
// console.log(num)

// find(tim 1), filter(tim nhieu)



//map

var users = [
    {
        name: 'Kien Hoang',
        age: 18,
        add: 'HN'
    },
    {
        name: 'Huy Hoang',
        age: 18,
        add: 'TN'
    },
    {
        name: 'Hoang Le',
        age: 18,
        add: 'ND'
    },
    {
        name: 'Hoang NH',
        age: 18,
        add: 'TH'
    }
]

// var peson = users.map(function(pep){
//     return {
//         name: pep.name,
//         age: pep.age,
//         add: `Que Quan: ${pep.add}`,
//         class: '70'
//     }
// })
// console.log(peson)
// var i =0;
// var person = users.reduce(function(nums,pep){
//    console.log(i++, nums ,pep)
//     return  pep
     
// }, 0)

// console.log(person)

//flat- "lm phẳng" mảng
// var depArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depArray.reduce(function (flatOutput, depitem) {
//     return flatOutput.concat(depitem)
// }, [])

// console.log(flatArray)

// Array.prototype.map2 = function(callback) {
//     var output = []
//     for (var i in this) {
//         if (this.hasOwnProperty(i)) {
//             var result = callback(this[i], i, this);
//             output.push(result);   
//         }
//     }
//     return output;
// }
// var namss = users.map2(function (params, index, array) {
//     return params.age === 18;
//     // console.log(params)
//     // return {
//     //     name: params.name,
//     //     age: params.age,
//     //     calss: '70'
//     // }
// })
// console.log(namss)

// var getBox = document.querySelector('.box')

// var getSelect = document.getElementById('gener').value

// console.log(getBox.innerText = 'new heading')
// let array = ['javascript','PHP', 'Java']

// const test = (...rest) => {
//     for(var i = 0; i < rest.length; i++){
//         console.log(rest[i]);
//     }
// }
// test(...array)

// var courseApi = ' http://localhost:3000/courses'

// fetch(courseApi)
//     .then((response) => response.json())
//     .then((courses) =>{
//         console.log(courses)
        // const divElement = document.querySelector('.box');
        // divElement.innerHTML = `<ul>
        //                             <li>${courses}</li>
        //                         </ul>`
    // })

// reduce
const numbers = [1, 2, 3, 4, 5]
Array.prototype.reduce2 = function (callback, result){
    let i = 0;
    if(arguments.length < 2){
        i = 1;
        result = this[0];
    }
    for( ; i < this.length; i++){
        result = callback(result, this[i], i, this)
    }
    return result
}
const result = numbers.reduce2((total, Number) =>{
    return total + Number
}, 10)
console.log(result)


    // const courseApi = ' http://localhost:3000/courses'
    
    // var start = () => {
    //     getCourses(renderCourses);
    //     haldalCreate();
    // }
    
    // start();
    
    
    // function getCourses(callback)  {
    //     fetch(courseApi)
    //     .then((response) => response.json())
    //     .then(callback);
    // }
    
    // function createCourses(data, callback){
    //     var options = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data) 
    //     }
    //     fetch(courseApi, options )
    //         .then((response) =>{
    //             response.json();
    //         })
    //         .then(callback);
    // }

    // function handleDeleteCourse(id) {
    //     console.log(id)
    //     var options = {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }
    //     fetch(courseApi + '/' + id, options )
    //         .then((response) =>{
    //             response.json();
    //         })
    //         .then(()=>{
    //             // getCourses(renderCourses);
    //             var idCourse = document.querySelector('.course-id-' + id)
    //             if(idCourse){
    //                 idCourse.remove();
    //             }
    //         });
    // }

    
    // function renderCourses (courses) {
    //     const listCourses = document.querySelector('#list-couses')
    //     var html = courses.map((course) => {
    //         return `
    //             <li class="course-id-${course.id}">
    //             <h4>${course.name}</h4>
    //             <p>${course.description}</p>
    //             <button onclick="handleDeleteCourse(${course.id})">xoa</button>
    //             </li>
    //         `
    //     })
    //     listCourses.innerHTML = html.join('');
    // }

    
    // function haldalCreate() {
    //     var createBtn = document.querySelector('#create')
    //     createBtn.onclick = function()  {
    //         var name = document.querySelector('input[name="name"]').value
    //         var description = document.querySelector('input[name="description"]').value
    //         var formData = {
    //             name: name,
    //             description: description
    //         }
    //         if(name && description){
    //             createCourses(formData, () =>{
    //                 getCourses(renderCourses);
    //             });
    //         }
           
    //     }
    // }

    