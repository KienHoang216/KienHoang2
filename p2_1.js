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
//console.log(languages.join(','));
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
// var bee = 'tao ten la nam'.includes('m', 0);
// console.log(bee)

//          Object
var myInfo = {
    name: 'Kien Hoang',
    age: 18,
    address: 'HN'
};
var memBer = 'name'
// myInfo.myString = 't rat vui';
// myInfo['email-gg'] = '@gmail.com';
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
