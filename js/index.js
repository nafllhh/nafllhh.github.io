function openNav() {
  document.getElementById("mySidenav").style.width = "365px";
}
 function closeul() { 
  document.getElementById('myUL').style.display = "none";

}
function closeNav() { document.getElementById("mySidenav").style.width = "0"; }
function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('formm');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
