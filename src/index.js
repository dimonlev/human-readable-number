module.exports = function toReadable(number) {
  let str = "";
  let dec = "";
  let hund = "";
  if (number < 10) {
    switch (number) {
      case 0: str = str + "zero"; break;
      case 1: str = str + "one"; break;
      case 2: str = str + "two"; break;
      case 3: str = str + "three"; break;
      case 4: str = str + "four"; break;
      case 5: str = str + "five"; break;
      case 6: str = str + "six"; break;
      case 7: str = str + "seven"; break;
      case 8: str = str + "eight"; break;
      case 9: str = str + "nine"; break;
    }
    return str;
  }
  else if ((number < 20) && (number > 9)) {
    switch (number) {
      case 10: str = str + "ten"; break;
      case 11: str = str + "eleven"; break;
      case 12: str = str + "twelve"; break;
      case 13: str = str + "thirteen"; break;
      case 14: str = str + "fourteen"; break;
      case 15: str = str + "fifteen"; break;
      case 16: str = str + "sixteen"; break;
      case 17: str = str + "seventeen"; break;
      case 18: str = str + "eighteen"; break;
      case 19: str = str + "nineteen"; break;
    }
    return str;
  }
  else if ((number > 19) && (number < 100)) {
    switch (number % 10) {
      case 1: str = " one"; break;
      case 2: str = " two"; break;
      case 3: str = " three"; break;
      case 4: str = " four"; break;
      case 5: str = " five"; break;
      case 6: str = " six"; break;
      case 7: str = " seven"; break;
      case 8: str = " eight"; break;
      case 9: str = " nine"; break;
    }
    switch ((Math.floor(number / 10)) % 10) {
      case 2: str = "twenty" + str; break;
      case 3: str = "thirty" + str; break;
      case 4: str = "forty" + str; break;
      case 5: str = "fifty" + str; break;
      case 6: str = "sixty" + str; break;
      case 7: str = "seventy" + str; break;
      case 8: str = "eighty" + str; break;
      case 9: str = "ninety" + str; break;
    }
    return str;
  }
  else if (number < 1000 && number > 99) {
    if (((number % 100) < 20) && ((number % 100) > 10)) {
      switch (number % 100) {
        case 10: str = str + " ten"; break;
        case 11: str = str + " eleven"; break;
        case 12: str = str + " twelve"; break;
        case 13: str = str + " thirteen"; break;
        case 14: str = str + " fourteen"; break;
        case 15: str = str + " fifteen"; break;
        case 16: str = str + " sixteen"; break;
        case 17: str = str + " seventeen"; break;
        case 18: str = str + " eighteen"; break;
        case 19: str = str + " nineteen"; break;
      }

      switch (Math.floor(number / 100)) {
        case 0: str = ""; break;
        case 1: str = "one hundred" + str; break;
        case 2: str = "two hundred" + str; break;
        case 3: str = "three hundred" + str; break;
        case 4: str = "four hundred" + str; break;
        case 5: str = "five hundred" + str; break;
        case 6: str = "six hundred" + str; break;
        case 7: str = "seven hundred" + str; break;
        case 8: str = "eight hundred" + str; break;
        case 9: str = "nine hundred" + str; break;
      }
      return str;
    }
    else {
      switch (number % 10) {
        case 1: str = " one"; break;
        case 2: str = " two"; break;
        case 3: str = " three"; break;
        case 4: str = " four"; break;
        case 5: str = " five"; break;
        case 6: str = " six"; break;
        case 7: str = " seven"; break;
        case 8: str = " eight"; break;
        case 9: str = " nine"; break;
      }

      switch ((Math.floor(number / 10)) % 10) {
        case 1: str = " ten" + str; break;
        case 2: str = " twenty" + str; break;
        case 3: str = " thirty" + str; break;
        case 4: str = " forty" + str; break;
        case 5: str = " fifty" + str; break;
        case 6: str = " sixty" + str; break;
        case 7: str = " seventy" + str; break;
        case 8: str = " eighty" + str; break;
        case 9: str = " ninety" + str; break;
      }

      switch (Math.floor(number / 100)) {
        case 0: str = "";
        case 1: str = "one hundred" + str; break;
        case 2: str = "two hundred" + str; break;
        case 3: str = "three hundred" + str; break;
        case 4: str = "four hundred" + str; break;
        case 5: str = "five hundred" + str; break;
        case 6: str = "six hundred" + str; break;
        case 7: str = "seven hundred" + str; break;
        case 8: str = "eight hundred" + str; break;
        case 9: str = "nine hundred" + str; break;
      }
      return str;
    }

  }
}

