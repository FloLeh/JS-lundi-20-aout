function my_max(tab) {
  var max = 0;
  for (var i = 0; i < tab.length; i++) {
    if (tab[i] > max) {
      max = tab[i];
    }
  }
  return max;
}

function vowel_count(str) {
  var res = 0;
  for (var i = 0; i < str.length; i++) {
    if ("aeiouy".includes(str[i])) {
      res++;
    }
  }
  return res;
}

function reverse(str) {
  return str.split("").reverse().join("");
}
