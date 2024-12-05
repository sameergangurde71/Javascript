// const Yourcoding = ["js","ruby","cpp","python","java"]

// const values = Yourcoding.forEach( (item) => {
//     console.log(item);
//     return item
    
// })
// console.log(values); //undefined ForEach can not return any value


//for ecah problem solved by filter

const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num) => num > 5 ) //implicit arrow function

const newNums = myNums.filter( (num) => { //explicit arrow function
   return num > 5 } )
//console.log(newNums);

const books = [
    { title: 'Book One' , genre : 'Fiction' , publish : 1986 ,
        edition: 2008
    },
    { title: 'Book Two' , genre : 'Fiction' , publish : 2011 ,
        edition: 2014
    },
    { title: 'Book Three' , genre : 'Non-Fiction' , publish : 1981 ,
        edition: 2002
    },
    { title: 'Book Four' , genre : 'History' , publish : 1992 ,
        edition: 2014
    },
    { title: 'Book Five' , genre : 'Non-Fiction' , publish : 1999 ,
        edition: 2010
    },
    { title: 'Book Six' , genre : 'Science' , publish : 1989 ,
        edition: 2003
    },
    { title: 'Book Seven' , genre : 'History' , publish : 2009 ,
        edition: 2007
    },
    { title: 'Book Eight' , genre : 'Science' , publish : 1987 ,
        edition: 2019
    }
]

let userBooks = books.filter( (bk) => bk.genre === "History" && bk.edition >= 2005)
 //userBooks = books.filter( (bk) => bk.publish >= 2000)

console.log(userBooks);
