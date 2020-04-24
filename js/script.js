var no_items = 0;
var list = Array();

function displayDate() {
  var d = new Date();
  var n = d.getDate();
  arr = d.toString().split(' ');
  curdate = arr[2] + " - " + arr[1] + " - " + arr[3] + " : " + arr[0];
  document.getElementById("date").innerHTML = curdate;
}

function addItem() {
  var currentItem = document.getElementById("text").value;
  if (currentItem != "") {
    list[no_items] = currentItem;
    no_items++;
    document.getElementById("text").value = "";
    document.getElementById('showlist').style.display = "block";
    document.getElementById('showlist').innerHTML = display_list();
  } else {
    alert("Can't add empty work into To-Do list !!");
  }
}

function deleteitem() {
  var element = event.srcElement.id;
  for (var y = 0; y < list.length; y++) {
    if (element == list[y].toString().split(' ')[0]) {
      list.splice(y, 1);
      no_items -= 1;
    }
  }
  document.getElementById('showlist').innerHTML = display_list();
}

function completed() {
  document.getElementById(event.srcElement.id).style.backgroundColor = "#00e676";
}

function display_list() {
  var e = "<ul>";
  for (var y = 0; y < list.length; y++) {
    ele = list[y]
    e += "<li id=" + list[y] + " onclick=\"completed()\" class=\"form-control\" >" + ele +
      "<button  id=" + ele + " onclick=\"deleteitem()\" class=\"btn btn-xs btn-danger\" style=\"float:right\">X</button>";
    e = e + "</li>";
  }
  e += "</ul>"
  return e;
}
