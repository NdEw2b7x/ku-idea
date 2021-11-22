function take_sex(x) {
  switch (x) {
    case "male":
    var sex = "male";
    for (var i = 0; i < document.getElementsByClassName('bg-sex').length; i++) {
      document.getElementsByClassName('bg-sex')[i].style.backgroundColor = "lightblue";
    }
    for (var i = 0; i < document.getElementsByClassName('border-sex').length; i++) {
      document.getElementsByClassName('border-sex')[i].style.borderColor = "lightblue";
    }
    break;
    case "female":
    var sex = "female";
    for (var i = 0; i < document.getElementsByClassName('bg-sex').length; i++) {
      document.getElementsByClassName('bg-sex')[i].style.backgroundColor = "lightpink";
    }
    for (var i = 0; i < document.getElementsByClassName('border-sex').length; i++) {
      document.getElementsByClassName('border-sex')[i].style.borderColor = "lightpink";
    }
    break;
    default:
  }
}
