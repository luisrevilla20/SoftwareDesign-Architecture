function selectValueChange() {
  id = document.getElementById("classroom_select").value;

  var paragraphs = document.getElementsByTagName("p");
  for (var i = 0; i < paragraphs.length; i++) {
    // arrOfPtags[i].setAttribute("desired_attribute", "value");
    paragraphs[i].style.display = "none"
  }

  document.getElementById('clase_' + id).style.display = "block";

}
