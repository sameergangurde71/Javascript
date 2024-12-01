//const tinderUser = new Object() // singelton

const tinderUser = {} // non-singelton

tinderUser.id = "123abc"
tinderUser.name = "Yash"
tinderUser.isloggedIn = true

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Yash",
            lastname: "Yeshi"
        }
    }
}

// console.log(regularUser.fullname) //{ userFullname: { firstname: 'Yash', lastname: 'Yeshi' } }
// console.log(regularUser.fullname.lastname); //undefined
// console.log(regularUser.fullname.userFullname.lastname);//Yeshi

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

//const obj4 = console.log(obj1,obj2); //{ '1': 'a', '2': 'b' } { '3': 'c', '4': 'd' }
const obj4 = Object.assign(obj1,obj2); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//console.log(obj4);
//const obj5 = Object.assign({},obj1,obj2,obj3)// {} empty braces means all values are store or targeted in that
const obj5 = {...obj1,...obj2,...obj3}
//console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


const users = [
    {
        name:"abc",
        email:"saeer@google.com"
    },
    {
        name:"hre",
        email:"racer@google.com"
    },
    {
        name:"abc",
        email:"saeer@google.com"
    }
]

// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));


const course = {
    courseName: "JS in hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

//course.courseInstructor

const {courseInstructor: Instructor} = course // destructuring for easyness
//console.log(courseInstructor);
console.log(Instructor);



//JSON 
//{
//     "course": "JS in hindi"
//     "instructor": "Hitesh"
//     "price": 999
// }

