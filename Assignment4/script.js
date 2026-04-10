function loadCategories() {
  var xhr = new XMLHttpRequest();
  var url = "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json";

  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      displayCategories(data);
    }
  };

  xhr.send();
}

function displayCategories(categories) {
  var html = "<ul>";

  for (var i = 0; i < categories.length; i++) {
    html += "<li>" + categories[i].name + " (" + categories[i].short_name + ")</li>";
  }

  html += "</ul>";

  document.getElementById("content").innerHTML = html;
}