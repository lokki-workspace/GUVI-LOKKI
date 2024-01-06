//DAY 6
//TASK 03 - Write a “person” class to hold all the details.

    class Person {
        constructor(firstName, lastName, age, degree, email, mobile, location){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.degree=degree;
            this.email=email;
            this.mobile=mobile;
            this.location = location;
        }
        getPersonDetails(){
            return `Name: ${this.firstName} ${this.lastName}
            age: ${this.age}
            degree: ${this.degree}
            email: ${this.email}
            mobile: ${this.mobile}
            location: ${this.location}`;
        }
    }
    let person1 = new Person("Lokesh", "waran",24, "computer science", "lkvuibes@gmail.com", 9298347650, "chennai");
    
    console.log(person1.getPersonDetails());

    // OUTPUT :
    // Name: Logeshwaran Lalysan
    // age: 24
    // degree: computer science
    // email: lkvuibes@gmail.com
    // mobile: 9298347650
    // location: chennai
    