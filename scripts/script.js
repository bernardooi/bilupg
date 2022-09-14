const Main = document.createElement("div");
const id11 = document.createAttribute("id");
id11.value= "main";

Main.setAttributeNode(id11);

Main.style.width="100vw";
Main.style.height="100vh";
Main.style.background="linear-gradient( 180deg, hsl(0, 0%, 40%),  hsl(0, 0%, 90%) , hsl(0, 0%, 40%))";
document.body.appendChild(Main);

function cars(image, name, model,year,price){
    this.image=image;
    this.name=name;
    this.model=model;
    this.year=year;
    this.price=price;
}

var car1 = new cars('/Users/bernard.ooi/Documents/GitHub/bilupg/images/bil.jpeg','bil','ny',2010,100);
var car2 = new cars('/Users/bernard.ooi/Documents/GitHub/bilupg/images/bil.jpeg','bil','ny',2011,2000);
var car3 = new cars('/Users/bernard.ooi/Documents/GitHub/bilupg/images/bil.jpeg','bil','ny',2010,20);
var car4 = new cars('/Users/bernard.ooi/Documents/GitHub/bilupg/images/bil.jpeg','mcqueen','ny',2002,1000);
var car5 = new cars('/Users/bernard.ooi/Documents/GitHub/bilupg/images/bil.jpeg','bil','ny',2021,2200);
var car6 = new cars('/Users/bernard.ooi/Documents/GitHub/bilupg/images/bil.jpeg','bil','ny',2020,500);
var car7 = new cars('/Users/bernard.ooi/Documents/GitHub/bilupg/images/bil.jpeg','bil','ny',2018,460);
var car8 = new cars('/Users/bernard.ooi/Documents/GitHub/bilupg/images/bil.jpeg','bil','ny',2018,900);
var car9 = new cars('/Users/bernard.ooi/Documents/GitHub/bilupg/images/bil.jpeg','bil','ny',2020,700);
var car10 = new cars('/Users/bernard.ooi/Documents/GitHub/bilupg/images/bil.jpeg','bil','ny',2018,300);



var bilar= [ car1, car2, car3, car4, car5, car6, car7, car8, car9, car10,];

bilar.forEach(Car);
function Car(bil)
{
    const newDiv =  document.createElement("div");
    const table = document.createElement("table");
    const tableRow1 = document.createElement("tr");
    const tableRow2 = document.createElement("tr");
    const tableRow3 = document.createElement("tr");
    const tableRow4 = document.createElement("tr");

    const tableData1 = document.createElement("td");
    const tableData2 = document.createElement("td");
    const tableData3 = document.createElement("td");
    const tableData4 = document.createElement("td");

    const newImage = document.createElement("img");
    const id = document.createAttribute("id");
    const klass =document.createAttribute("class");

klass.value="images";
newImage.src=bil.image;
console.log(newImage);
tableData1.textContent=bil.model;
tableData2.textContent=bil.name;
tableData3.textContent=bil.year;
tableData4.textContent=bil.price;

tableRow1.textContent="model:";
tableRow2.textContent="name:";
tableRow3.textContent="year:";
tableRow4.textContent="price:";

tableRow1.appendChild(tableData1);
tableRow2.appendChild(tableData2);
tableRow3.appendChild(tableData3);
tableRow4.appendChild(tableData4);
table.appendChild(tableRow1);
table.appendChild(tableRow2);
table.appendChild(tableRow3);
table.appendChild(tableRow4);

newDiv.appendChild(newImage);
newDiv.appendChild(table);

newDiv.style.border="1px solid black";
newDiv.style.width="10vw";
newDiv.style.height="25vh";
newDiv.style.margin="70px";
newImage.style.width="100%";
newImage.style.height="60%";
newDiv.style.display="inline-block";

Main.appendChild(newDiv);

}