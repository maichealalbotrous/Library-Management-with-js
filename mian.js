let the_title = document.querySelector(".inputs .The_Title .Title");
let The_Auther = document.querySelector(".inputs .The_Auther .Auther");
let The_Genre = document.querySelector(".inputs .The_Genre .Genre");
let The_Year = document.querySelector(".inputs .The_Year .Year");
let The_Quantity = document.querySelector(".inputs .The_Quantity .Quantity");

//btn::
let Add_Book = document.querySelector(".btns .Add_Book");
let Clear_All = document.querySelector(".btns .Clear_All");

//table
let table = document.querySelector("table .tbody");

//creat
let data = [];
if (localStorage.books !== null) {
data = JSON.parse(localStorage.books)
  Read_data();
}

Add_Book.addEventListener("click", () => {
  let newbook = {
    the_title: the_title.value,
    The_Auther: The_Auther.value,
    The_Genre: The_Genre.value,
    The_Year: The_Year.value,
    The_Quantity: The_Quantity.value,
  };

  data.push(newbook);
  localStorage.setItem("books", JSON.stringify(data));
  Read_data();
  new_inputs();
});

//clear all

Clear_All.addEventListener("click", () => {
  let newdata = [];
  data = newdata;
  localStorage.books = JSON.stringify(newdata);
  Read_data();
});

//read_Data

function Read_data() {
  table.innerHTML = "";

  data.forEach(function (element, index) {
    let newtbody = `
<tr>
  <th>${element.the_title}</th>
  <th>${element.The_Auther}</th>
  <th>${element.The_Genre}</th>
  <th>${element.The_Year}</th>
  <th>${element.The_Quantity}</th>
  <th><button onclick="Delet_book(${index})" class="Exite">Exite</button><button  onclick=" Upadate(${index})" class="update">Update</button></th>
</tr>
    `;
    table.innerHTML += newtbody;
  });
}
//clear_inputs

function new_inputs() {
  the_title.value = "";
  The_Auther.value = "";
  The_Year.value = "";
  The_Genre.value = "";
  The_Quantity.value = "";
}

//DeletBook

function Delet_book(e) {
  data.splice(e, 1);
  localStorage.books = JSON.stringify(data);
  Read_data();
}

//Update
let footer = document.querySelector(".footer");
let newTitile = document.querySelector(
  ".footer .The_New_Edit .new_inputs .newTitle"
);
let newAuther = document.querySelector(
  ".footer .The_New_Edit .new_inputs .newAuther"
);
let newGenre = document.querySelector(
  ".footer .The_New_Edit .new_inputs .newGenre"
);
let NewYear = document.querySelector(
  ".footer .The_New_Edit .new_inputs .NewYear"
);
let NewQuality = document.querySelector(
  ".footer .The_New_Edit .new_inputs .NewQuality"
);
let new_btn_Close = document.querySelector(
  ".footer .The_New_Edit .newbtns .new_btn_Close"
);
let new_btn_save_challeng = document.querySelector(
  ".footer .The_New_Edit .newbtns .new_btn_save_challeng"
);
let tmp;
function Upadate(e) {
  footer.style.display = "block";
  newTitile.value = data[e].the_title;
  newAuther.value = data[e].The_Auther;
  newGenre.value = data[e].The_Genre;
  NewYear.value = data[e].The_Year;
  NewQuality.value = data[e].The_Quantity;
  tmp=e;
  
}

new_btn_save_challeng.addEventListener("click", function () {
  
  data[tmp].the_title = newTitile.value;
  data[tmp].The_Auther = newAuther.value;
  data[tmp].The_Genre = newGenre.value;
  data[tmp].The_Year = NewYear.value;
  data[tmp].The_Quantit = NewQuality.value;
  
  Read_data();

  footer.style.display = 'none';
});

new_btn_Close.addEventListener('click',function(){
  footer.style.display = "none";
})