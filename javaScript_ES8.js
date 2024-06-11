//ES8 i JavaScript, ändringarna
.padStart()
.padEnd()

//Det pad--- funktionerna gör att reglera hur många mellanrum förre
//och efter du får i en text

//Ger 10 mellanrum framför ordet Turtle
'Turtle'.padStart(10);

//Ger 10 mellanrum bakom ordet Turtle
'Turtle'.padEnd(10);


//Trembling commas, parameter list and call
//Varför det är en bra förändring är för att när man har 
//Göra med stor kod och massa funktioner så vill man städa till det lite
//Då är det lätt hänt att ett extra "," längs med t.ex. Nu kommer det ändå fungera
const fun = (a,
             b,
             c, 
             d,) => {
	console.log(a); 
}

fun(1,2,3,4,)

//Dem nedan ersätter något som tidigare kallas för Object.keys

Object.values
Object.entries

//Eftersom det här inte är en array nedan utan en objekt så fungerar
//Inte metoder som filter, map, reduce
let obj = {
	username0: "Fred", 
	username1: "Andreas",
	username2: "Anna",
}

Object.keys(obj).forEach((key, index) =>{
	console.log(key, obj[key]);
} )

//Då får man 
[Log] username0 – "Fred"
[Log] username1 – "Andreas"
[Log] username2 – "Anna"

//Det nya sättet

Object.values(obj).forEach(value => {
	console.log(value);
})

//Då får man
[Log] Fred
[Log] Andreas
[Log] Anna

Object.entries(obj).forEach(value => {
	console.log(value);
})

//Då får man
[Log] ["username0", "Fred"] (2)
[Log] ["username1", "Andreas"] (2)
[Log] ["username2", "Anna"] (2)


//++ med en låda [x] efter vaje användarnamn
Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
})







































