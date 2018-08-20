var res = "";
var fin = false;
function press_number(e) {
  console.log(e.target.innerHTML);
  if (e.target.innerHTML.match(/[0-9]/)){
    res += e.target.innerHTML;
    fin = true;
  }
  else {
    res += " " + e.target.innerHTML +" ";
  }

  $('.resultat').text(res);
}

function clear() {
  res = "";
  $('.resultat').text("");
}

function equal() {
  var tab = res.split(" ");
  var result =0;
  while (tab.length > 1){

    while (tab.includes("*")) {
      tab[tab.indexOf("*")-1] = (tab[tab.indexOf("*")-1] * tab[tab.indexOf("*")+1]).toString();
      tab.splice(tab.indexOf("*"),tab.indexOf("*")+1);
    }

    while (tab.includes("/")) {
      tab[tab.indexOf("/")-1] = (tab[tab.indexOf("/")-1] / tab[tab.indexOf("/")+1]).toString();
      tab.splice(tab.indexOf("/"),tab.indexOf("/")+1);
    }

    if (tab[1] == "+") {
      result = parseFloat(tab[0]) + parseFloat(tab[2]);
    }
    else if (tab[1] == "-") {
      result = parseFloat(tab[0]) - parseFloat(tab[2]);
    }
    else if (tab[1] == "*") {
      result = parseFloat(tab[0]) * parseFloat(tab[2]);
    }
    else if (tab[1] == "/") {
      result = parseFloat(tab[0]) / parseFloat(tab[2]);
    }
    if (tab.length > 1){
      tab.splice(0,2);
      tab[0] = result;
    }
    else {
      result = tab[0];
    }

  }
  res = result;
  $('.resultat').text(result);

}

$('.equal').click(equal);
$('.clear').click(clear);
$('.chiffre').click(press_number);
$('.operateur').click(press_number);
