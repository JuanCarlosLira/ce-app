import React, {Component} from 'react'

class Migala extends Component{
  state = {
    compare: false,
    p1: "la",
    p2: " ",
    p3: "migala",
    p4: " ",
    p5: "discurre",
    p6: " ",
    p7: "libremente",
    p8: " ",
    p9: "por",
    p10: " ",
    p11: "la",
    p12: " ",
    p13: "casa",
    p14: ", ",
    p15: "pero",
    p16: " ",
    p17: "mi",
    p18: " ",
    p19: "capacidad",
    p20: " ",
    p21: "de",
    p22: " ",
    p23: "horror",
    p24: " ",
    p25: "no",
    p26: " ",
    p27: "disminuye",
    p28: ". ",

    p29: "el",
    p30: " ",
    p31: "día",
    p32: " ",
    p33: "en",
    p34: " ",
    p35: "que",
    p36: " ",
    p37: "Beatriz",
    p38: " ",
    p39: "y",
    p40: " ",
    p41: "yo",
    p42: " ",
    p43: "entramos",
    p44: " ",
    p45: "en",
    p46: " ",
    p47: "aquella",
    p48: " ",
    p49: "barranca",
    p50: " ",
    p51: "inmunda",
    p52: " ",
    p53: "de",
    p54: " ",
    p55: "la",
    p56: " ",
    p57: "feria",
    p58: " ",
    p59: "callejera",
    p60: ", ",
    p61: "me",
    p62: " ",
    p63: "di",
    p64: " ",
    p65: "cuenta",
    p66: " ",
    p67: "de",
    p68: " ",
    p69: "que",
    p70: " ",
    p71: "la",
    p72: " ",
    p73: "repulsiva",
    p74: " ",
    p75: "alimaña",
    p76: " ",
    p77: "era",
    p78: " ",
    p79: "lo",
    p80: " ",
    p81: "más",
    p82: " ",
    p83: "atroz",
    p84: " ",
    p85: "que",
    p86: " ",
    p87: "podía",
    p88: " ",
    p89: "depararme",
    p90: " ",
    p91: "el",
    p92: " ",
    p93: "destino",
    p94: ", ",
    p95: "Peor",
    p96: " ",
    p97: "que",
    p98: " ",
    p99: "el",
    p100: " ",
    p101: "desprecio",
    p102: " ",
    p103: "y",
    p104: " ",
    p105: "la",
    p106: " ",
    p107: "conmiseración",
    p108: " ",
    p109: "brillando",
    p110: " ",
    p111: "de",
    p112: " ",
    p113: "pronto",
    p114: " ",
    p115: "en",
    p116: " ",
    p117: "una",
    p118: " ",
    p119: "clara",
    p120: " ",
    p121: "mirada",
    p122: ". ",
    p123: "",
    p124: "",
    p125: "",
    p126: "",
    p127: "",
    p128: "",
    p129: "",
    p130: "",

  }

  updateComparar() {
    this.setState({compare: !this.state.compare});
    //console.log(this.state.compare);
  }
  p1() {
    if (this.state.p1 === "la") {
      this.setState({p1: "La"});
    } else {
      this.setState({p1: "la"});
    }
  }
  p2() {
    if (this.state.p2 === " ") {this.setState({p2: ", "});}
    if (this.state.p2 === ", ") {this.setState({p2: "; "});}
    if (this.state.p2 === "; ") {this.setState({p2: ": "});}
    if (this.state.p2 === ": ") {this.setState({p2: "( "});}
    if (this.state.p2 === "( ") {this.setState({p2: ") "});}
    if (this.state.p2 === ") ") {this.setState({p2: "¡ "});}
    if (this.state.p2 === "¡ ") {this.setState({p2: "! "});}
    if (this.state.p2 === "! ") {this.setState({p2: "¿ "});}
    if (this.state.p2 === "¿ ") {this.setState({p2: "? "});}
    if (this.state.p2 === "? ") {this.setState({p2: " "});}
  }
  p3() {
    if (this.state.p3 === "migala") {
      this.setState({p3: "Migala"});
    } else {
      this.setState({p3: "migala"});
    }
  }
  p4() {
    if (this.state.p4 === " ") {this.setState({p4: ", "});}
    if (this.state.p4 === ", ") {this.setState({p4: "; "});}
    if (this.state.p4 === "; ") {this.setState({p4: ": "});}
    if (this.state.p4 === ": ") {this.setState({p4: "( "});}
    if (this.state.p4 === "( ") {this.setState({p4: ") "});}
    if (this.state.p4 === ") ") {this.setState({p4: "¡ "});}
    if (this.state.p4 === "¡ ") {this.setState({p4: "! "});}
    if (this.state.p4 === "! ") {this.setState({p4: "¿ "});}
    if (this.state.p4 === "¿ ") {this.setState({p4: "? "});}
    if (this.state.p4 === "? ") {this.setState({p4: " "});}
  }
  p5() {
    if (this.state.p5 === "discurre") {
      this.setState({p5: "Discurre"});
    } else {
      this.setState({p5: "discurre"});
    }
  }
  p6() {
    if (this.state.p6 === " ") {this.setState({p6: ", "});}
    if (this.state.p6 === ", ") {this.setState({p6: "; "});}
    if (this.state.p6 === "; ") {this.setState({p6: ": "});}
    if (this.state.p6 === ": ") {this.setState({p6: "( "});}
    if (this.state.p6 === "( ") {this.setState({p6: ") "});}
    if (this.state.p6 === ") ") {this.setState({p6: "¡ "});}
    if (this.state.p6 === "¡ ") {this.setState({p6: "! "});}
    if (this.state.p6 === "! ") {this.setState({p6: "¿ "});}
    if (this.state.p6 === "¿ ") {this.setState({p6: "? "});}
    if (this.state.p6 === "? ") {this.setState({p6: " "});}
  }
  p7() {
    if (this.state.p7 === "libremente") {
      this.setState({p7: "Libremente"});
    } else {
      this.setState({p7: "libremente"});
    }
  }
  p8() {
    if (this.state.p8 === " ") {this.setState({p8: ", "});}
    if (this.state.p8 === ", ") {this.setState({p8: "; "});}
    if (this.state.p8 === "; ") {this.setState({p8: ": "});}
    if (this.state.p8 === ": ") {this.setState({p8: "( "});}
    if (this.state.p8 === "( ") {this.setState({p8: ") "});}
    if (this.state.p8 === ") ") {this.setState({p8: "¡ "});}
    if (this.state.p8 === "¡ ") {this.setState({p8: "! "});}
    if (this.state.p8 === "! ") {this.setState({p8: "¿ "});}
    if (this.state.p8 === "¿ ") {this.setState({p8: "? "});}
    if (this.state.p8 === "? ") {this.setState({p8: " "});}
  }
  p9() {
    if (this.state.p9 === "por") {
      this.setState({p9: "Por"});
    } else {
      this.setState({p9: "por"});
    }
  }
  p10() {
    if (this.state.p10 === " ") {this.setState({p10: ", "});}
    if (this.state.p10 === ", ") {this.setState({p10: "; "});}
    if (this.state.p10 === "; ") {this.setState({p10: ": "});}
    if (this.state.p10 === ": ") {this.setState({p10: "( "});}
    if (this.state.p10 === "( ") {this.setState({p10: ") "});}
    if (this.state.p10 === ") ") {this.setState({p10: "¡ "});}
    if (this.state.p10 === "¡ ") {this.setState({p10: "! "});}
    if (this.state.p10 === "! ") {this.setState({p10: "¿ "});}
    if (this.state.p10 === "¿ ") {this.setState({p10: "? "});}
    if (this.state.p10 === "? ") {this.setState({p10: " "});}
  }
  p11() {
    if (this.state.p11 === "la") {
      this.setState({p11: "La"});
    } else {
      this.setState({p11: "la"});
    }
  }
  p12() {
    if (this.state.p12 === " ") {this.setState({p12: ", "});}
    if (this.state.p12 === ", ") {this.setState({p12: "; "});}
    if (this.state.p12 === "; ") {this.setState({p12: ": "});}
    if (this.state.p12 === ": ") {this.setState({p12: "( "});}
    if (this.state.p12 === "( ") {this.setState({p12: ") "});}
    if (this.state.p12 === ") ") {this.setState({p12: "¡ "});}
    if (this.state.p12 === "¡ ") {this.setState({p12: "! "});}
    if (this.state.p12 === "! ") {this.setState({p12: "¿ "});}
    if (this.state.p12 === "¿ ") {this.setState({p12: "? "});}
    if (this.state.p12 === "? ") {this.setState({p12: " "});}
  }
  p13() {
    if (this.state.p13 === "casa") {
      this.setState({p13: "Casa"});
    } else {
      this.setState({p13: "casa"});
    }
  }
  p14() {
    if (this.state.p14 === " ") {this.setState({p14: ", "});}
    if (this.state.p14 === ", ") {this.setState({p14: "; "});}
    if (this.state.p14 === "; ") {this.setState({p14: ": "});}
    if (this.state.p14 === ": ") {this.setState({p14: "( "});}
    if (this.state.p14 === "( ") {this.setState({p14: ") "});}
    if (this.state.p14 === ") ") {this.setState({p14: "¡ "});}
    if (this.state.p14 === "¡ ") {this.setState({p14: "! "});}
    if (this.state.p14 === "! ") {this.setState({p14: "¿ "});}
    if (this.state.p14 === "¿ ") {this.setState({p14: "? "});}
    if (this.state.p14 === "? ") {this.setState({p14: " "});}
  }
  p15() {
    if (this.state.p15 === "pero") {
      this.setState({p15: "Pero"});
    } else {
      this.setState({p15: "pero"});
    }
  }
  p16() {
    if (this.state.p16 === " ") {this.setState({p16: ", "});}
    if (this.state.p16 === ", ") {this.setState({p16: "; "});}
    if (this.state.p16 === "; ") {this.setState({p16: ": "});}
    if (this.state.p16 === ": ") {this.setState({p16: "( "});}
    if (this.state.p16 === "( ") {this.setState({p16: ") "});}
    if (this.state.p16 === ") ") {this.setState({p16: "¡ "});}
    if (this.state.p16 === "¡ ") {this.setState({p16: "! "});}
    if (this.state.p16 === "! ") {this.setState({p16: "¿ "});}
    if (this.state.p16 === "¿ ") {this.setState({p16: "? "});}
    if (this.state.p16 === "? ") {this.setState({p16: " "});}
  }
  p17() {
    if (this.state.p17 === "mi") {
      this.setState({p17: "Mi"});
    } else {
      this.setState({p17: "mi"});
    }
  }
  p18() {
    if (this.state.p18 === " ") {this.setState({p18: ", "});}
    if (this.state.p18 === ", ") {this.setState({p18: "; "});}
    if (this.state.p18 === "; ") {this.setState({p18: ": "});}
    if (this.state.p18 === ": ") {this.setState({p18: "( "});}
    if (this.state.p18 === "( ") {this.setState({p18: ") "});}
    if (this.state.p18 === ") ") {this.setState({p18: "¡ "});}
    if (this.state.p18 === "¡ ") {this.setState({p18: "! "});}
    if (this.state.p18 === "! ") {this.setState({p18: "¿ "});}
    if (this.state.p18 === "¿ ") {this.setState({p18: "? "});}
    if (this.state.p18 === "? ") {this.setState({p18: " "});}
  }
  p19() {
    if (this.state.p19 === "capacidad") {
      this.setState({p19: "Capacidad"});
    } else {
      this.setState({p19: "capacidad"});
    }
  }
  p20() {
    if (this.state.p20 === " ") {this.setState({p20: ", "});}
    if (this.state.p20 === ", ") {this.setState({p20: "; "});}
    if (this.state.p20 === "; ") {this.setState({p20: ": "});}
    if (this.state.p20 === ": ") {this.setState({p20: "( "});}
    if (this.state.p20 === "( ") {this.setState({p20: ") "});}
    if (this.state.p20 === ") ") {this.setState({p20: "¡ "});}
    if (this.state.p20 === "¡ ") {this.setState({p20: "! "});}
    if (this.state.p20 === "! ") {this.setState({p20: "¿ "});}
    if (this.state.p20 === "¿ ") {this.setState({p20: "? "});}
    if (this.state.p20 === "? ") {this.setState({p20: " "});}
  }
  p21() {
    if (this.state.p21 === "de") {
      this.setState({p21: "De"});
    } else {
      this.setState({p21: "de"});
    }
  }
  p22() {
    if (this.state.p22 === " ") {this.setState({p22: ", "});}
    if (this.state.p22 === ", ") {this.setState({p22: "; "});}
    if (this.state.p22 === "; ") {this.setState({p22: ": "});}
    if (this.state.p22 === ": ") {this.setState({p22: "( "});}
    if (this.state.p22 === "( ") {this.setState({p22: ") "});}
    if (this.state.p22 === ") ") {this.setState({p22: "¡ "});}
    if (this.state.p22 === "¡ ") {this.setState({p22: "! "});}
    if (this.state.p22 === "! ") {this.setState({p22: "¿ "});}
    if (this.state.p22 === "¿ ") {this.setState({p22: "? "});}
    if (this.state.p22 === "? ") {this.setState({p22: " "});}
  }
  p23() {
    if (this.state.p23 === "horror") {
      this.setState({p23: "Horror"});
    } else {
      this.setState({p23: "horror"});
    }
  }
  p24() {
    if (this.state.p24 === " ") {this.setState({p24: ", "});}
    if (this.state.p24 === ", ") {this.setState({p24: "; "});}
    if (this.state.p24 === "; ") {this.setState({p24: ": "});}
    if (this.state.p24 === ": ") {this.setState({p24: "( "});}
    if (this.state.p24 === "( ") {this.setState({p24: ") "});}
    if (this.state.p24 === ") ") {this.setState({p24: "¡ "});}
    if (this.state.p24 === "¡ ") {this.setState({p24: "! "});}
    if (this.state.p24 === "! ") {this.setState({p24: "¿ "});}
    if (this.state.p24 === "¿ ") {this.setState({p24: "? "});}
    if (this.state.p24 === "? ") {this.setState({p24: " "});}
  }
  p25() {
    if (this.state.p25 === "no") {
      this.setState({p25: "No"});
    } else {
      this.setState({p25: "no"});
    }
  }
  p26() {
    if (this.state.p26 === " ") {this.setState({p26: ", "});}
    if (this.state.p26 === ", ") {this.setState({p26: "; "});}
    if (this.state.p26 === "; ") {this.setState({p26: ": "});}
    if (this.state.p26 === ": ") {this.setState({p26: "( "});}
    if (this.state.p26 === "( ") {this.setState({p26: ") "});}
    if (this.state.p26 === ") ") {this.setState({p26: "¡ "});}
    if (this.state.p26 === "¡ ") {this.setState({p26: "! "});}
    if (this.state.p26 === "! ") {this.setState({p26: "¿ "});}
    if (this.state.p26 === "¿ ") {this.setState({p26: "? "});}
    if (this.state.p26 === "? ") {this.setState({p26: " "});}
  }
  p27() {
    if (this.state.p27 === "disminuye") {
      this.setState({p27: "Disminuye"});
    } else {
      this.setState({p27: "disminuye"});
    }
  }
  p28() {
    if (this.state.p28 === " ") {this.setState({p28: ", "});}
    if (this.state.p28 === ", ") {this.setState({p28: "; "});}
    if (this.state.p28 === "; ") {this.setState({p28: ". "});}
    if (this.state.p28 === ". ") {this.setState({p28: "( "});}
    if (this.state.p28 === "( ") {this.setState({p28: ") "});}
    if (this.state.p28 === ") ") {this.setState({p28: "¡ "});}
    if (this.state.p28 === "¡ ") {this.setState({p28: "! "});}
    if (this.state.p28 === "! ") {this.setState({p28: "¿ "});}
    if (this.state.p28 === "¿ ") {this.setState({p28: "? "});}
    if (this.state.p28 === "? ") {this.setState({p28: " "});}
  }
  p29() {
    if (this.state.p29 === "el") {
      this.setState({p29: "El"});
    } else {
      this.setState({p29: "el"});
    }
  }
  p30() {
    if (this.state.p30 === " ") {this.setState({p30: ", "});}
    if (this.state.p30 === ", ") {this.setState({p30: "; "});}
    if (this.state.p30 === "; ") {this.setState({p30: ": "});}
    if (this.state.p30 === ": ") {this.setState({p30: "( "});}
    if (this.state.p30 === "( ") {this.setState({p30: ") "});}
    if (this.state.p30 === ") ") {this.setState({p30: "¡ "});}
    if (this.state.p30 === "¡ ") {this.setState({p30: "! "});}
    if (this.state.p30 === "! ") {this.setState({p30: "¿ "});}
    if (this.state.p30 === "¿ ") {this.setState({p30: "? "});}
    if (this.state.p30 === "? ") {this.setState({p30: " "});}
  }
  p31() {
    if (this.state.p31 === "día") {
      this.setState({p31: "Día"});
    } else {
      this.setState({p31: "día"});
    }
  }
  p32() {
    if (this.state.p32 === " ") {this.setState({p32: ", "});}
    if (this.state.p32 === ", ") {this.setState({p32: "; "});}
    if (this.state.p32 === "; ") {this.setState({p32: ": "});}
    if (this.state.p32 === ": ") {this.setState({p32: "( "});}
    if (this.state.p32 === "( ") {this.setState({p32: ") "});}
    if (this.state.p32 === ") ") {this.setState({p32: "¡ "});}
    if (this.state.p32 === "¡ ") {this.setState({p32: "! "});}
    if (this.state.p32 === "! ") {this.setState({p32: "¿ "});}
    if (this.state.p32 === "¿ ") {this.setState({p32: "? "});}
    if (this.state.p32 === "? ") {this.setState({p32: " "});}
  }
  p33() {
    if (this.state.p33 === "en") {
      this.setState({p33: "En"});
    } else {
      this.setState({p33: "en"});
    }
  }
  p34() {
    if (this.state.p34 === " ") {this.setState({p34: ", "});}
    if (this.state.p34 === ", ") {this.setState({p34: "; "});}
    if (this.state.p34 === "; ") {this.setState({p34: ": "});}
    if (this.state.p34 === ": ") {this.setState({p34: "( "});}
    if (this.state.p34 === "( ") {this.setState({p34: ") "});}
    if (this.state.p34 === ") ") {this.setState({p34: "¡ "});}
    if (this.state.p34 === "¡ ") {this.setState({p34: "! "});}
    if (this.state.p34 === "! ") {this.setState({p34: "¿ "});}
    if (this.state.p34 === "¿ ") {this.setState({p34: "? "});}
    if (this.state.p34 === "? ") {this.setState({p34: " "});}
  }
  p35() {
    if (this.state.p35 === "que") {
      this.setState({p35: "Que"});
    } else {
      this.setState({p35: "que"});
    }
  }
  p36() {
    if (this.state.p36 === " ") {this.setState({p36: ", "});}
    if (this.state.p36 === ", ") {this.setState({p36: "; "});}
    if (this.state.p36 === "; ") {this.setState({p36: ": "});}
    if (this.state.p36 === ": ") {this.setState({p36: "( "});}
    if (this.state.p36 === "( ") {this.setState({p36: ") "});}
    if (this.state.p36 === ") ") {this.setState({p36: "¡ "});}
    if (this.state.p36 === "¡ ") {this.setState({p36: "! "});}
    if (this.state.p36 === "! ") {this.setState({p36: "¿ "});}
    if (this.state.p36 === "¿ ") {this.setState({p36: "? "});}
    if (this.state.p36 === "? ") {this.setState({p36: " "});}
  }
  p37() {
    if (this.state.p37 === "Beatriz") {
      this.setState({p37: "beatriz"});
    } else {
      this.setState({p37: "Beatriz"});
    }
  }
  p38() {
    if (this.state.p38 === " ") {this.setState({p38: ", "});}
    if (this.state.p38 === ", ") {this.setState({p38: "; "});}
    if (this.state.p38 === "; ") {this.setState({p38: ": "});}
    if (this.state.p38 === ": ") {this.setState({p38: "( "});}
    if (this.state.p38 === "( ") {this.setState({p38: ") "});}
    if (this.state.p38 === ") ") {this.setState({p38: "¡ "});}
    if (this.state.p38 === "¡ ") {this.setState({p38: "! "});}
    if (this.state.p38 === "! ") {this.setState({p38: "¿ "});}
    if (this.state.p38 === "¿ ") {this.setState({p38: "? "});}
    if (this.state.p38 === "? ") {this.setState({p38: " "});}
  }
  p39() {
    if (this.state.p39 === "y") {
      this.setState({p39: "Y"});
    } else {
      this.setState({p39: "y"});
    }
  }
  p40() {
    if (this.state.p40 === " ") {this.setState({p40: ", "});}
    if (this.state.p40 === ", ") {this.setState({p40: "; "});}
    if (this.state.p40 === "; ") {this.setState({p40: ": "});}
    if (this.state.p40 === ": ") {this.setState({p40: "( "});}
    if (this.state.p40 === "( ") {this.setState({p40: ") "});}
    if (this.state.p40 === ") ") {this.setState({p40: "¡ "});}
    if (this.state.p40 === "¡ ") {this.setState({p40: "! "});}
    if (this.state.p40 === "! ") {this.setState({p40: "¿ "});}
    if (this.state.p40 === "¿ ") {this.setState({p40: "? "});}
    if (this.state.p40 === "? ") {this.setState({p40: " "});}
  }
  p41() {
    if (this.state.p41 === "yo") {
      this.setState({p41: "Yo"});
    } else {
      this.setState({p41: "yo"});
    }
  }
  p42() {
    if (this.state.p42 === " ") {this.setState({p42: ", "});}
    if (this.state.p42 === ", ") {this.setState({p42: "; "});}
    if (this.state.p42 === "; ") {this.setState({p42: ": "});}
    if (this.state.p42 === ": ") {this.setState({p42: "( "});}
    if (this.state.p42 === "( ") {this.setState({p42: ") "});}
    if (this.state.p42 === ") ") {this.setState({p42: "¡ "});}
    if (this.state.p42 === "¡ ") {this.setState({p42: "! "});}
    if (this.state.p42 === "! ") {this.setState({p42: "¿ "});}
    if (this.state.p42 === "¿ ") {this.setState({p42: "? "});}
    if (this.state.p42 === "? ") {this.setState({p42: " "});}
  }
  p43() {
    if (this.state.p43 === "entramos") {
      this.setState({p43: "Entramos"});
    } else {
      this.setState({p43: "entramos"});
    }
  }
  p44() {
    if (this.state.p44 === " ") {this.setState({p44: ", "});}
    if (this.state.p44 === ", ") {this.setState({p44: "; "});}
    if (this.state.p44 === "; ") {this.setState({p44: ": "});}
    if (this.state.p44 === ": ") {this.setState({p44: "( "});}
    if (this.state.p44 === "( ") {this.setState({p44: ") "});}
    if (this.state.p44 === ") ") {this.setState({p44: "¡ "});}
    if (this.state.p44 === "¡ ") {this.setState({p44: "! "});}
    if (this.state.p44 === "! ") {this.setState({p44: "¿ "});}
    if (this.state.p44 === "¿ ") {this.setState({p44: "? "});}
    if (this.state.p44 === "? ") {this.setState({p44: " "});}
  }
  p45() {
    if (this.state.p45 === "en") {
      this.setState({p45: "En"});
    } else {
      this.setState({p45: "en"});
    }
  }
  p46() {
    if (this.state.p46 === " ") {this.setState({p46: ", "});}
    if (this.state.p46 === ", ") {this.setState({p46: "; "});}
    if (this.state.p46 === "; ") {this.setState({p46: ": "});}
    if (this.state.p46 === ": ") {this.setState({p46: "( "});}
    if (this.state.p46 === "( ") {this.setState({p46: ") "});}
    if (this.state.p46 === ") ") {this.setState({p46: "¡ "});}
    if (this.state.p46 === "¡ ") {this.setState({p46: "! "});}
    if (this.state.p46 === "! ") {this.setState({p46: "¿ "});}
    if (this.state.p46 === "¿ ") {this.setState({p46: "? "});}
    if (this.state.p46 === "? ") {this.setState({p46: " "});}
  }
  p47() {
    if (this.state.p47 === "aquella") {
      this.setState({p47: "Aquella"});
    } else {
      this.setState({p47: "aquella"});
    }
  }
  p48() {
    if (this.state.p48 === " ") {this.setState({p48: ", "});}
    if (this.state.p48 === ", ") {this.setState({p48: "; "});}
    if (this.state.p48 === "; ") {this.setState({p48: ": "});}
    if (this.state.p48 === ": ") {this.setState({p48: "( "});}
    if (this.state.p48 === "( ") {this.setState({p48: ") "});}
    if (this.state.p48 === ") ") {this.setState({p48: "¡ "});}
    if (this.state.p48 === "¡ ") {this.setState({p48: "! "});}
    if (this.state.p48 === "! ") {this.setState({p48: "¿ "});}
    if (this.state.p48 === "¿ ") {this.setState({p48: "? "});}
    if (this.state.p48 === "? ") {this.setState({p48: " "});}
  }
  p49() {
    if (this.state.p49 === "barranca") {
      this.setState({p49: "Barranca"});
    } else {
      this.setState({p49: "barranca"});
    }
  }
  p50() {
    if (this.state.p50 === " ") {this.setState({p50: ", "});}
    if (this.state.p50 === ", ") {this.setState({p50: "; "});}
    if (this.state.p50 === "; ") {this.setState({p50: ": "});}
    if (this.state.p50 === ": ") {this.setState({p50: "( "});}
    if (this.state.p50 === "( ") {this.setState({p50: ") "});}
    if (this.state.p50 === ") ") {this.setState({p50: "¡ "});}
    if (this.state.p50 === "¡ ") {this.setState({p50: "! "});}
    if (this.state.p50 === "! ") {this.setState({p50: "¿ "});}
    if (this.state.p50 === "¿ ") {this.setState({p50: "? "});}
    if (this.state.p50 === "? ") {this.setState({p50: " "});}
  }
  p51() {
    if (this.state.p51 === "inmunda") {
      this.setState({p51: "Inmunda"});
    } else {
      this.setState({p51: "inmunda"});
    }
  }
  p52() {
    if (this.state.p52 === " ") {this.setState({p52: ", "});}
    if (this.state.p52 === ", ") {this.setState({p52: "; "});}
    if (this.state.p52 === "; ") {this.setState({p52: ": "});}
    if (this.state.p52 === ": ") {this.setState({p52: "( "});}
    if (this.state.p52 === "( ") {this.setState({p52: ") "});}
    if (this.state.p52 === ") ") {this.setState({p52: "¡ "});}
    if (this.state.p52 === "¡ ") {this.setState({p52: "! "});}
    if (this.state.p52 === "! ") {this.setState({p52: "¿ "});}
    if (this.state.p52 === "¿ ") {this.setState({p52: "? "});}
    if (this.state.p52 === "? ") {this.setState({p52: " "});}
  }
  p53() {
    if (this.state.p53 === "de") {
      this.setState({p53: "De"});
    } else {
      this.setState({p53: "de"});
    }
  }
  p54() {
    if (this.state.p54 === " ") {this.setState({p54: ", "});}
    if (this.state.p54 === ", ") {this.setState({p54: "; "});}
    if (this.state.p54 === "; ") {this.setState({p54: ": "});}
    if (this.state.p54 === ": ") {this.setState({p54: "( "});}
    if (this.state.p54 === "( ") {this.setState({p54: ") "});}
    if (this.state.p54 === ") ") {this.setState({p54: "¡ "});}
    if (this.state.p54 === "¡ ") {this.setState({p54: "! "});}
    if (this.state.p54 === "! ") {this.setState({p54: "¿ "});}
    if (this.state.p54 === "¿ ") {this.setState({p54: "? "});}
    if (this.state.p54 === "? ") {this.setState({p54: " "});}
  }
  p55() {
    if (this.state.p55 === "la") {
      this.setState({p55: "La"});
    } else {
      this.setState({p55: "la"});
    }
  }
  p56() {
    if (this.state.p56 === " ") {this.setState({p56: ", "});}
    if (this.state.p56 === ", ") {this.setState({p56: "; "});}
    if (this.state.p56 === "; ") {this.setState({p56: ": "});}
    if (this.state.p56 === ": ") {this.setState({p56: "( "});}
    if (this.state.p56 === "( ") {this.setState({p56: ") "});}
    if (this.state.p56 === ") ") {this.setState({p56: "¡ "});}
    if (this.state.p56 === "¡ ") {this.setState({p56: "! "});}
    if (this.state.p56 === "! ") {this.setState({p56: "¿ "});}
    if (this.state.p56 === "¿ ") {this.setState({p56: "? "});}
    if (this.state.p56 === "? ") {this.setState({p56: " "});}
  }
  p57() {
    if (this.state.p57 === "feria") {
      this.setState({p57: "Feria"});
    } else {
      this.setState({p57: "feria"});
    }
  }
  p58() {
    if (this.state.p58 === " ") {this.setState({p58: ", "});}
    if (this.state.p58 === ", ") {this.setState({p58: "; "});}
    if (this.state.p58 === "; ") {this.setState({p58: ": "});}
    if (this.state.p58 === ": ") {this.setState({p58: "( "});}
    if (this.state.p58 === "( ") {this.setState({p58: ") "});}
    if (this.state.p58 === ") ") {this.setState({p58: "¡ "});}
    if (this.state.p58 === "¡ ") {this.setState({p58: "! "});}
    if (this.state.p58 === "! ") {this.setState({p58: "¿ "});}
    if (this.state.p58 === "¿ ") {this.setState({p58: "? "});}
    if (this.state.p58 === "? ") {this.setState({p58: " "});}
  }
  p59() {
    if (this.state.p59 === "callejera") {
      this.setState({p59: "Callejera"});
    } else {
      this.setState({p59: "callejera"});
    }
  }
  p60() {
    if (this.state.p60 === " ") {this.setState({p60: ", "});}
    if (this.state.p60 === ", ") {this.setState({p60: "; "});}
    if (this.state.p60 === "; ") {this.setState({p60: ": "});}
    if (this.state.p60 === ": ") {this.setState({p60: "( "});}
    if (this.state.p60 === "( ") {this.setState({p60: ") "});}
    if (this.state.p60 === ") ") {this.setState({p60: "¡ "});}
    if (this.state.p60 === "¡ ") {this.setState({p60: "! "});}
    if (this.state.p60 === "! ") {this.setState({p60: "¿ "});}
    if (this.state.p60 === "¿ ") {this.setState({p60: "? "});}
    if (this.state.p60 === "? ") {this.setState({p60: " "});}
  }

  render() {
    return(
      <div id="crucigramaWrap">
        <p>Escribe en el siguiente texto los signos de puntuación y las mayúsculas correspondientes.</p>
        <h1 align="center">LA MIGALA</h1>
        <h2 align="center">Juan José Arreola</h2>
        {this.state.p1 === "la" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p1.bind(this)}>la</button>
        }
        {this.state.p1 === "La" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p1.bind(this)}>La</button>
        }
        {this.state.p1 === "la" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p1.bind(this)}><span style={{color:"red"}}>l</span>a</button>
        }
        {this.state.p1 === "La" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p1.bind(this)}><span style={{color:"green"}}>L</span>a</button>
        }

        {this.state.p2 === " " &&
          <button id="txtBut" onClick={this.p2.bind(this)}>&nbsp;</button>
        }
        {this.state.p2 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p2.bind(this)}>,&nbsp;</button>
        }
        {this.state.p2 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p2.bind(this)}>;&nbsp;</button>
        }
        {this.state.p2 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p2.bind(this)}>:&nbsp;</button>
        }
        {this.state.p2 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p2.bind(this)}>(&nbsp;</button>
        }
        {this.state.p2 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p2.bind(this)}>)&nbsp;</button>
        }
        {this.state.p2 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p2.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p2 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p2.bind(this)}>!&nbsp;</button>
        }
        {this.state.p2 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p2.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p2 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p2.bind(this)}>?&nbsp;</button>
        }
        {this.state.p2 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p2.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p2 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p2.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p2 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p2.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p2 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p2.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p2 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p2.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p2 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p2.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p2 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p2.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p2 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p2.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p2 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p2.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p3 === "migala" &&
          <button id="txtBut" onClick={this.p3.bind(this)}>migala</button>
        }
        {this.state.p3 === "Migala" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p3.bind(this)}>Migala</button>
        }
        {this.state.p3 === "Migala" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p3.bind(this)}><span style={{color:"red"}}>M</span>igala</button>
        }

        {this.state.p4 === " " &&
          <button id="txtBut" onClick={this.p4.bind(this)}>&nbsp;</button>
        }
        {this.state.p4 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p4.bind(this)}>,&nbsp;</button>
        }
        {this.state.p4 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p4.bind(this)}>;&nbsp;</button>
        }
        {this.state.p4 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p4.bind(this)}>:&nbsp;</button>
        }
        {this.state.p4 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p4.bind(this)}>(&nbsp;</button>
        }
        {this.state.p4 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p4.bind(this)}>)&nbsp;</button>
        }
        {this.state.p4 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p4.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p4 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p4.bind(this)}>!&nbsp;</button>
        }
        {this.state.p4 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p4.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p4 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p4.bind(this)}>?&nbsp;</button>
        }
        {this.state.p4 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p4.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p4 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p4.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p4 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p4.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p4 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p4.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p4 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p4.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p4 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p4.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p4 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p4.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p4 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p4.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p4 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p4.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p5 === "discurre" &&
          <button id="txtBut" onClick={this.p5.bind(this)}>discurre</button>
        }
        {this.state.p5 === "Discurre" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p5.bind(this)}>Discurre</button>
        }
        {this.state.p5 === "Discurre" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p5.bind(this)}><span style={{color:"red"}}>D</span>iscurre</button>
        }

        {this.state.p6 === " " &&
          <button id="txtBut" onClick={this.p6.bind(this)}>&nbsp;</button>
        }
        {this.state.p6 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p6.bind(this)}>,&nbsp;</button>
        }
        {this.state.p6 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p6.bind(this)}>;&nbsp;</button>
        }
        {this.state.p6 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p6.bind(this)}>:&nbsp;</button>
        }
        {this.state.p6 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p6.bind(this)}>(&nbsp;</button>
        }
        {this.state.p6 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p6.bind(this)}>)&nbsp;</button>
        }
        {this.state.p6 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p6.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p6 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p6.bind(this)}>!&nbsp;</button>
        }
        {this.state.p6 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p6.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p6 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p6.bind(this)}>?&nbsp;</button>
        }
        {this.state.p6 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p6.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p6 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p6.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p6 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p6.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p6 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p6.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p6 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p6.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p6 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p6.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p6 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p6.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p6 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p6.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p6 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p6.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p7 === "libremente" &&
          <button id="txtBut" onClick={this.p7.bind(this)}>libremente</button>
        }
        {this.state.p7 === "Libremente" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p7.bind(this)}>Libremente</button>
        }
        {this.state.p7 === "Libremente" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p7.bind(this)}><span style={{color:"red"}}>L</span>ibremente</button>
        }

        {this.state.p8 === " " &&
          <button id="txtBut" onClick={this.p8.bind(this)}>&nbsp;</button>
        }
        {this.state.p8 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p8.bind(this)}>,&nbsp;</button>
        }
        {this.state.p8 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p8.bind(this)}>;&nbsp;</button>
        }
        {this.state.p8 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p8.bind(this)}>:&nbsp;</button>
        }
        {this.state.p8 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p8.bind(this)}>(&nbsp;</button>
        }
        {this.state.p8 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p8.bind(this)}>)&nbsp;</button>
        }
        {this.state.p8 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p8.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p8 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p8.bind(this)}>!&nbsp;</button>
        }
        {this.state.p8 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p8.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p8 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p8.bind(this)}>?&nbsp;</button>
        }
        {this.state.p8 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p8.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p8 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p8.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p8 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p8.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p8 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p8.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p8 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p8.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p8 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p8.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p8 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p8.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p8 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p8.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p8 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p8.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p9 === "por" &&
          <button id="txtBut" onClick={this.p9.bind(this)}>por</button>
        }
        {this.state.p9 === "Por" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p9.bind(this)}>Por</button>
        }
        {this.state.p9 === "Por" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p9.bind(this)}><span style={{color:"red"}}>P</span>or</button>
        }

        {this.state.p10 === " " &&
          <button id="txtBut" onClick={this.p10.bind(this)}>&nbsp;</button>
        }
        {this.state.p10 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p10.bind(this)}>,&nbsp;</button>
        }
        {this.state.p10 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p10.bind(this)}>;&nbsp;</button>
        }
        {this.state.p10 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p10.bind(this)}>:&nbsp;</button>
        }
        {this.state.p10 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p10.bind(this)}>(&nbsp;</button>
        }
        {this.state.p10 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p10.bind(this)}>)&nbsp;</button>
        }
        {this.state.p10 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p10.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p10 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p10.bind(this)}>!&nbsp;</button>
        }
        {this.state.p10 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p10.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p10 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p10.bind(this)}>?&nbsp;</button>
        }
        {this.state.p10 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p10.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p10 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p10.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p10 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p10.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p10 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p10.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p10 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p10.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p10 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p10.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p10 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p10.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p10 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p10.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p10 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p10.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p11 === "la" &&
          <button id="txtBut" onClick={this.p11.bind(this)}>la</button>
        }
        {this.state.p11 === "La" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p11.bind(this)}>La</button>
        }
        {this.state.p11 === "La" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p11.bind(this)}><span style={{color:"red"}}>L</span>a</button>
        }

        {this.state.p12 === " " &&
          <button id="txtBut" onClick={this.p12.bind(this)}>&nbsp;</button>
        }
        {this.state.p12 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p12.bind(this)}>,&nbsp;</button>
        }
        {this.state.p12 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p12.bind(this)}>;&nbsp;</button>
        }
        {this.state.p12 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p12.bind(this)}>:&nbsp;</button>
        }
        {this.state.p12 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p12.bind(this)}>(&nbsp;</button>
        }
        {this.state.p12 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p12.bind(this)}>)&nbsp;</button>
        }
        {this.state.p12 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p12.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p12 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p12.bind(this)}>!&nbsp;</button>
        }
        {this.state.p12 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p12.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p12 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p12.bind(this)}>?&nbsp;</button>
        }
        {this.state.p12 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p12.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p12 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p12.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p12 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p12.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p12 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p12.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p12 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p12.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p12 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p12.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p12 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p12.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p12 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p12.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p12 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p12.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p13 === "casa" &&
          <button id="txtBut" onClick={this.p13.bind(this)}>casa</button>
        }
        {this.state.p13 === "Casa" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p13.bind(this)}>Casa</button>
        }
        {this.state.p13 === "Casa" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p13.bind(this)}><span style={{color:"red"}}>C</span>asa</button>
        }

        {this.state.p14 === " " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p14.bind(this)}>&nbsp;</button>
        }
        {this.state.p14 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p14.bind(this)}>,&nbsp;</button>
        }
        {this.state.p14 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p14.bind(this)}>;&nbsp;</button>
        }
        {this.state.p14 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p14.bind(this)}>:&nbsp;</button>
        }
        {this.state.p14 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p14.bind(this)}>(&nbsp;</button>
        }
        {this.state.p14 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p14.bind(this)}>)&nbsp;</button>
        }
        {this.state.p14 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p14.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p14 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p14.bind(this)}>!&nbsp;</button>
        }
        {this.state.p14 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p14.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p14 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p14.bind(this)}>?&nbsp;</button>
        }
        {this.state.p14 === " " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p14.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p14 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p14.bind(this)}>,&nbsp;</button>
        }
        {this.state.p14 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p14.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p14 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p14.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p14 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p14.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p14 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p14.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p14 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p14.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p14 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p14.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p14 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p14.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p14 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p14.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p15 === "pero" &&
          <button id="txtBut" onClick={this.p15.bind(this)}>pero</button>
        }
        {this.state.p15 === "Pero" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p15.bind(this)}>Pero</button>
        }
        {this.state.p15 === "Pero" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p15.bind(this)}><span style={{color:"red"}}>P</span>ero</button>
        }

        {this.state.p16 === " " &&
          <button id="txtBut" onClick={this.p16.bind(this)}>&nbsp;</button>
        }
        {this.state.p16 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p16.bind(this)}>,&nbsp;</button>
        }
        {this.state.p16 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p16.bind(this)}>;&nbsp;</button>
        }
        {this.state.p16 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p16.bind(this)}>:&nbsp;</button>
        }
        {this.state.p16 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p16.bind(this)}>(&nbsp;</button>
        }
        {this.state.p16 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p16.bind(this)}>)&nbsp;</button>
        }
        {this.state.p16 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p16.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p16 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p16.bind(this)}>!&nbsp;</button>
        }
        {this.state.p16 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p16.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p16 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p16.bind(this)}>?&nbsp;</button>
        }
        {this.state.p16 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p16.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p16 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p16.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p16 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p16.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p16 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p16.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p16 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p16.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p16 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p16.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p16 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p16.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p16 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p16.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p16 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p16.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p17 === "mi" &&
          <button id="txtBut" onClick={this.p17.bind(this)}>mi</button>
        }
        {this.state.p17 === "Mi" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p17.bind(this)}>Mi</button>
        }
        {this.state.p17 === "Mi" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p17.bind(this)}><span style={{color:"red"}}>M</span>i</button>
        }

        {this.state.p18 === " " &&
          <button id="txtBut" onClick={this.p18.bind(this)}>&nbsp;</button>
        }
        {this.state.p18 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p18.bind(this)}>,&nbsp;</button>
        }
        {this.state.p18 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p18.bind(this)}>;&nbsp;</button>
        }
        {this.state.p18 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p18.bind(this)}>:&nbsp;</button>
        }
        {this.state.p18 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p18.bind(this)}>(&nbsp;</button>
        }
        {this.state.p18 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p18.bind(this)}>)&nbsp;</button>
        }
        {this.state.p18 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p18.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p18 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p18.bind(this)}>!&nbsp;</button>
        }
        {this.state.p18 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p18.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p18 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p18.bind(this)}>?&nbsp;</button>
        }
        {this.state.p18 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p18.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p18 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p18.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p18 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p18.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p18 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p18.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p18 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p18.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p18 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p18.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p18 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p18.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p18 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p18.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p18 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p18.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p19 === "capacidad" &&
          <button id="txtBut" onClick={this.p19.bind(this)}>capacidad</button>
        }
        {this.state.p19 === "Capacidad" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p19.bind(this)}>Capacidad</button>
        }
        {this.state.p19 === "Capacidad" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p19.bind(this)}><span style={{color:"red"}}>C</span>apacidad</button>
        }

        {this.state.p20 === " " &&
          <button id="txtBut" onClick={this.p20.bind(this)}>&nbsp;</button>
        }
        {this.state.p20 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p20.bind(this)}>,&nbsp;</button>
        }
        {this.state.p20 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p20.bind(this)}>;&nbsp;</button>
        }
        {this.state.p20 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p20.bind(this)}>:&nbsp;</button>
        }
        {this.state.p20 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p20.bind(this)}>(&nbsp;</button>
        }
        {this.state.p20 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p20.bind(this)}>)&nbsp;</button>
        }
        {this.state.p20 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p20.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p20 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p20.bind(this)}>!&nbsp;</button>
        }
        {this.state.p20 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p20.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p20 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p20.bind(this)}>?&nbsp;</button>
        }
        {this.state.p20 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p20.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p20 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p20.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p20 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p20.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p20 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p20.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p20 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p20.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p20 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p20.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p20 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p20.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p20 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p20.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p20 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p20.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p21 === "de" &&
          <button id="txtBut" onClick={this.p21.bind(this)}>de</button>
        }
        {this.state.p21 === "De" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p21.bind(this)}>De</button>
        }
        {this.state.p21 === "De" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p21.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p22 === " " &&
          <button id="txtBut" onClick={this.p22.bind(this)}>&nbsp;</button>
        }
        {this.state.p22 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p22.bind(this)}>,&nbsp;</button>
        }
        {this.state.p22 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p22.bind(this)}>;&nbsp;</button>
        }
        {this.state.p22 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p22.bind(this)}>:&nbsp;</button>
        }
        {this.state.p22 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p22.bind(this)}>(&nbsp;</button>
        }
        {this.state.p22 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p22.bind(this)}>)&nbsp;</button>
        }
        {this.state.p22 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p22.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p22 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p22.bind(this)}>!&nbsp;</button>
        }
        {this.state.p22 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p22.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p22 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p22.bind(this)}>?&nbsp;</button>
        }
        {this.state.p22 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p22.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p22 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p22.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p22 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p22.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p22 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p22.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p22 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p22.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p22 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p22.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p22 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p22.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p22 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p22.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p22 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p22.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p23 === "horror" &&
          <button id="txtBut" onClick={this.p23.bind(this)}>horror</button>
        }
        {this.state.p23 === "Horror" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p23.bind(this)}>Horror</button>
        }
        {this.state.p23 === "Horror" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p23.bind(this)}><span style={{color:"red"}}>H</span>orror</button>
        }

        {this.state.p24 === " " &&
          <button id="txtBut" onClick={this.p24.bind(this)}>&nbsp;</button>
        }
        {this.state.p24 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p24.bind(this)}>,&nbsp;</button>
        }
        {this.state.p24 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p24.bind(this)}>;&nbsp;</button>
        }
        {this.state.p24 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p24.bind(this)}>:&nbsp;</button>
        }
        {this.state.p24 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p24.bind(this)}>(&nbsp;</button>
        }
        {this.state.p24 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p24.bind(this)}>)&nbsp;</button>
        }
        {this.state.p24 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p24.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p24 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p24.bind(this)}>!&nbsp;</button>
        }
        {this.state.p24 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p24.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p24 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p24.bind(this)}>?&nbsp;</button>
        }
        {this.state.p24 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p24.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p24 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p24.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p24 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p24.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p24 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p24.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p24 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p24.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p24 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p24.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p24 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p24.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p24 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p24.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p24 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p24.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p25 === "no" &&
          <button id="txtBut" onClick={this.p25.bind(this)}>no</button>
        }
        {this.state.p25 === "No" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p25.bind(this)}>No</button>
        }
        {this.state.p25 === "No" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p25.bind(this)}><span style={{color:"red"}}>N</span>o</button>
        }

        {this.state.p26 === " " &&
          <button id="txtBut" onClick={this.p26.bind(this)}>&nbsp;</button>
        }
        {this.state.p26 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p26.bind(this)}>,&nbsp;</button>
        }
        {this.state.p26 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p26.bind(this)}>;&nbsp;</button>
        }
        {this.state.p26 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p26.bind(this)}>:&nbsp;</button>
        }
        {this.state.p26 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p26.bind(this)}>(&nbsp;</button>
        }
        {this.state.p26 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p26.bind(this)}>)&nbsp;</button>
        }
        {this.state.p26 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p26.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p26 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p26.bind(this)}>!&nbsp;</button>
        }
        {this.state.p26 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p26.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p26 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p26.bind(this)}>?&nbsp;</button>
        }
        {this.state.p26 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p26.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p26 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p26.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p26 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p26.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p26 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p26.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p26 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p26.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p26 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p26.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p26 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p26.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p26 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p26.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p26 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p26.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p27 === "disminuye" &&
          <button id="txtBut" onClick={this.p27.bind(this)}>disminuye</button>
        }
        {this.state.p27 === "Disminuye" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p27.bind(this)}>Disminuye</button>
        }
        {this.state.p27 === "Disminuye" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p27.bind(this)}><span style={{color:"red"}}>D</span>isminuye</button>
        }

        {this.state.p28 === " " && this.state.compare === false  &&
          <button id="txtBut" onClick={this.p28.bind(this)}>&nbsp;</button>
        }
        {this.state.p28 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p28.bind(this)}>,&nbsp;</button>
        }
        {this.state.p28 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p28.bind(this)}>;&nbsp;</button>
        }
        {this.state.p28 === ". " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p28.bind(this)}>.&nbsp;</button>
        }
        {this.state.p28 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p28.bind(this)}>(&nbsp;</button>
        }
        {this.state.p28 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p28.bind(this)}>)&nbsp;</button>
        }
        {this.state.p28 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p28.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p28 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p28.bind(this)}>!&nbsp;</button>
        }
        {this.state.p28 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p28.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p28 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p28.bind(this)}>?&nbsp;</button>
        }
        {this.state.p28 === " " && this.state.compare === true  &&
          <button id="txtBut" onClick={this.p28.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p28 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p28.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p28 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p28.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p28 === ". " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p28.bind(this)}>.&nbsp;</button>
        }
        {this.state.p28 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p28.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p28 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p28.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p28 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p28.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p28 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p28.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p28 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p28.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p28 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p28.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        <br/><br/>

        {this.state.p29 === "el" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p29.bind(this)}>el</button>
        }
        {this.state.p29 === "El" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p29.bind(this)}>El</button>
        }
        {this.state.p29 === "el" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p29.bind(this)}><span style={{color:"red"}}>e</span>l</button>
        }
        {this.state.p29 === "El" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p29.bind(this)}><span style={{color:"green"}}>E</span>l</button>
        }

        {this.state.p30 === " " &&
          <button id="txtBut" onClick={this.p30.bind(this)}>&nbsp;</button>
        }
        {this.state.p30 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p30.bind(this)}>,&nbsp;</button>
        }
        {this.state.p30 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p30.bind(this)}>;&nbsp;</button>
        }
        {this.state.p30 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p30.bind(this)}>:&nbsp;</button>
        }
        {this.state.p30 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p30.bind(this)}>(&nbsp;</button>
        }
        {this.state.p30 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p30.bind(this)}>)&nbsp;</button>
        }
        {this.state.p30 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p30.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p30 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p30.bind(this)}>!&nbsp;</button>
        }
        {this.state.p30 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p30.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p30 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p30.bind(this)}>?&nbsp;</button>
        }
        {this.state.p30 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p30.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p30 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p30.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p30 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p30.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p30 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p30.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p30 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p30.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p30 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p30.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p30 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p30.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p30 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p30.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p30 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p30.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p31 === "día" &&
          <button id="txtBut" onClick={this.p31.bind(this)}>día</button>
        }
        {this.state.p31 === "Día" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p31.bind(this)}>Día</button>
        }
        {this.state.p31 === "Día" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p31.bind(this)}><span style={{color:"red"}}>D</span>ía</button>
        }

        {this.state.p32 === " " &&
          <button id="txtBut" onClick={this.p32.bind(this)}>&nbsp;</button>
        }
        {this.state.p32 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p32.bind(this)}>,&nbsp;</button>
        }
        {this.state.p32 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p32.bind(this)}>;&nbsp;</button>
        }
        {this.state.p32 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p32.bind(this)}>:&nbsp;</button>
        }
        {this.state.p32 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p32.bind(this)}>(&nbsp;</button>
        }
        {this.state.p32 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p32.bind(this)}>)&nbsp;</button>
        }
        {this.state.p32 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p32.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p32 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p32.bind(this)}>!&nbsp;</button>
        }
        {this.state.p32 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p32.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p32 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p32.bind(this)}>?&nbsp;</button>
        }
        {this.state.p32 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p32.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p32 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p32.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p32 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p32.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p32 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p32.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p32 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p32.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p32 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p32.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p32 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p32.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p32 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p32.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p32 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p32.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p33 === "en" &&
          <button id="txtBut" onClick={this.p33.bind(this)}>en</button>
        }
        {this.state.p33 === "En" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p33.bind(this)}>En</button>
        }
        {this.state.p33 === "En" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p33.bind(this)}><span style={{color:"red"}}>E</span>n</button>
        }

        {this.state.p34 === " " &&
          <button id="txtBut" onClick={this.p34.bind(this)}>&nbsp;</button>
        }
        {this.state.p34 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p34.bind(this)}>,&nbsp;</button>
        }
        {this.state.p34 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p34.bind(this)}>;&nbsp;</button>
        }
        {this.state.p34 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p34.bind(this)}>:&nbsp;</button>
        }
        {this.state.p34 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p34.bind(this)}>(&nbsp;</button>
        }
        {this.state.p34 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p34.bind(this)}>)&nbsp;</button>
        }
        {this.state.p34 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p34.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p34 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p34.bind(this)}>!&nbsp;</button>
        }
        {this.state.p34 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p34.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p34 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p34.bind(this)}>?&nbsp;</button>
        }
        {this.state.p34 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p34.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p34 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p34.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p34 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p34.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p34 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p34.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p34 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p34.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p34 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p34.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p34 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p34.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p34 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p34.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p34 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p34.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p35 === "que" &&
          <button id="txtBut" onClick={this.p35.bind(this)}>que</button>
        }
        {this.state.p35 === "Que" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p35.bind(this)}>Que</button>
        }
        {this.state.p35 === "Que" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p35.bind(this)}><span style={{color:"red"}}>Q</span>ue</button>
        }

        {this.state.p36 === " " &&
          <button id="txtBut" onClick={this.p36.bind(this)}>&nbsp;</button>
        }
        {this.state.p36 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p36.bind(this)}>,&nbsp;</button>
        }
        {this.state.p36 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p36.bind(this)}>;&nbsp;</button>
        }
        {this.state.p36 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p36.bind(this)}>:&nbsp;</button>
        }
        {this.state.p36 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p36.bind(this)}>(&nbsp;</button>
        }
        {this.state.p36 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p36.bind(this)}>)&nbsp;</button>
        }
        {this.state.p36 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p36.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p36 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p36.bind(this)}>!&nbsp;</button>
        }
        {this.state.p36 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p36.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p36 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p36.bind(this)}>?&nbsp;</button>
        }
        {this.state.p36 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p36.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p36 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p36.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p36 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p36.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p36 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p36.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p36 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p36.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p36 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p36.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p36 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p36.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p36 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p36.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p36 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p36.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p37 === "beatriz" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p37.bind(this)}>beatriz</button>
        }
        {this.state.p37 === "Beatriz" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p37.bind(this)}>Beatriz</button>
        }
        {this.state.p37 === "beatriz" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p37.bind(this)}><span style={{color:"red"}}>b</span>eatriz</button>
        }
        {this.state.p37 === "Beatriz" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p37.bind(this)}>Beatriz</button>
        }

        {this.state.p38 === " " &&
          <button id="txtBut" onClick={this.p38.bind(this)}>&nbsp;</button>
        }
        {this.state.p38 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p38.bind(this)}>,&nbsp;</button>
        }
        {this.state.p38 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p38.bind(this)}>;&nbsp;</button>
        }
        {this.state.p38 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p38.bind(this)}>:&nbsp;</button>
        }
        {this.state.p38 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p38.bind(this)}>(&nbsp;</button>
        }
        {this.state.p38 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p38.bind(this)}>)&nbsp;</button>
        }
        {this.state.p38 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p38.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p38 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p38.bind(this)}>!&nbsp;</button>
        }
        {this.state.p38 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p38.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p38 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p38.bind(this)}>?&nbsp;</button>
        }
        {this.state.p38 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p38.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p38 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p38.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p38 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p38.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p38 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p38.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p38 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p38.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p38 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p38.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p38 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p38.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p38 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p38.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p38 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p38.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p39 === "y" &&
          <button id="txtBut" onClick={this.p39.bind(this)}>y</button>
        }
        {this.state.p39 === "Y" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p39.bind(this)}>Y</button>
        }
        {this.state.p39 === "Y" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p39.bind(this)}><span style={{color:"red"}}>Y</span></button>
        }

        {this.state.p40 === " " &&
          <button id="txtBut" onClick={this.p40.bind(this)}>&nbsp;</button>
        }
        {this.state.p40 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p40.bind(this)}>,&nbsp;</button>
        }
        {this.state.p40 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p40.bind(this)}>;&nbsp;</button>
        }
        {this.state.p40 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p40.bind(this)}>:&nbsp;</button>
        }
        {this.state.p40 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p40.bind(this)}>(&nbsp;</button>
        }
        {this.state.p40 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p40.bind(this)}>)&nbsp;</button>
        }
        {this.state.p40 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p40.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p40 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p40.bind(this)}>!&nbsp;</button>
        }
        {this.state.p40 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p40.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p40 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p40.bind(this)}>?&nbsp;</button>
        }
        {this.state.p40 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p40.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p40 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p40.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p40 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p40.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p40 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p40.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p40 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p40.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p40 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p40.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p40 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p40.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p40 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p40.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p40 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p40.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p41 === "yo" &&
          <button id="txtBut" onClick={this.p41.bind(this)}>yo</button>
        }
        {this.state.p41 === "Yo" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p41.bind(this)}>Yo</button>
        }
        {this.state.p41 === "Yo" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p41.bind(this)}><span style={{color:"red"}}>Y</span>o</button>
        }

        {this.state.p42 === " " &&
          <button id="txtBut" onClick={this.p42.bind(this)}>&nbsp;</button>
        }
        {this.state.p42 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p42.bind(this)}>,&nbsp;</button>
        }
        {this.state.p42 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p42.bind(this)}>;&nbsp;</button>
        }
        {this.state.p42 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p42.bind(this)}>:&nbsp;</button>
        }
        {this.state.p42 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p42.bind(this)}>(&nbsp;</button>
        }
        {this.state.p42 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p42.bind(this)}>)&nbsp;</button>
        }
        {this.state.p42 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p42.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p42 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p42.bind(this)}>!&nbsp;</button>
        }
        {this.state.p42 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p42.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p42 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p42.bind(this)}>?&nbsp;</button>
        }
        {this.state.p42 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p42.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p42 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p42.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p42 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p42.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p42 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p42.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p42 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p42.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p42 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p42.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p42 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p42.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p42 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p42.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p42 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p42.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p43 === "entramos" &&
          <button id="txtBut" onClick={this.p43.bind(this)}>entramos</button>
        }
        {this.state.p43 === "Entramos" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p43.bind(this)}>Entramos</button>
        }
        {this.state.p43 === "Entramos" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p43.bind(this)}><span style={{color:"red"}}>E</span>ntramos</button>
        }

        {this.state.p44 === " " &&
          <button id="txtBut" onClick={this.p44.bind(this)}>&nbsp;</button>
        }
        {this.state.p44 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p44.bind(this)}>,&nbsp;</button>
        }
        {this.state.p44 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p44.bind(this)}>;&nbsp;</button>
        }
        {this.state.p44 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p44.bind(this)}>:&nbsp;</button>
        }
        {this.state.p44 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p44.bind(this)}>(&nbsp;</button>
        }
        {this.state.p44 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p44.bind(this)}>)&nbsp;</button>
        }
        {this.state.p44 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p44.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p44 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p44.bind(this)}>!&nbsp;</button>
        }
        {this.state.p44 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p44.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p44 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p44.bind(this)}>?&nbsp;</button>
        }
        {this.state.p44 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p44.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p44 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p44.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p44 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p44.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p44 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p44.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p44 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p44.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p44 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p44.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p44 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p44.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p44 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p44.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p44 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p44.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p45 === "en" &&
          <button id="txtBut" onClick={this.p45.bind(this)}>en</button>
        }
        {this.state.p45 === "En" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p45.bind(this)}>En</button>
        }
        {this.state.p45 === "En" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p45.bind(this)}><span style={{color:"red"}}>E</span>n</button>
        }

        {this.state.p46 === " " &&
          <button id="txtBut" onClick={this.p46.bind(this)}>&nbsp;</button>
        }
        {this.state.p46 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p46.bind(this)}>,&nbsp;</button>
        }
        {this.state.p46 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p46.bind(this)}>;&nbsp;</button>
        }
        {this.state.p46 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p46.bind(this)}>:&nbsp;</button>
        }
        {this.state.p46 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p46.bind(this)}>(&nbsp;</button>
        }
        {this.state.p46 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p46.bind(this)}>)&nbsp;</button>
        }
        {this.state.p46 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p46.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p46 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p46.bind(this)}>!&nbsp;</button>
        }
        {this.state.p46 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p46.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p46 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p46.bind(this)}>?&nbsp;</button>
        }
        {this.state.p46 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p46.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p46 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p46.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p46 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p46.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p46 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p46.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p46 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p46.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p46 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p46.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p46 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p46.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p46 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p46.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p46 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p46.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p47 === "aquella" &&
          <button id="txtBut" onClick={this.p47.bind(this)}>aquella</button>
        }
        {this.state.p47 === "Aquella" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p47.bind(this)}>Aquella</button>
        }
        {this.state.p47 === "Aquella" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p47.bind(this)}><span style={{color:"red"}}>A</span>quella</button>
        }

        {this.state.p48 === " " &&
          <button id="txtBut" onClick={this.p48.bind(this)}>&nbsp;</button>
        }
        {this.state.p48 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p48.bind(this)}>,&nbsp;</button>
        }
        {this.state.p48 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p48.bind(this)}>;&nbsp;</button>
        }
        {this.state.p48 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p48.bind(this)}>:&nbsp;</button>
        }
        {this.state.p48 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p48.bind(this)}>(&nbsp;</button>
        }
        {this.state.p48 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p48.bind(this)}>)&nbsp;</button>
        }
        {this.state.p48 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p48.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p48 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p48.bind(this)}>!&nbsp;</button>
        }
        {this.state.p48 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p48.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p48 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p48.bind(this)}>?&nbsp;</button>
        }
        {this.state.p48 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p48.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p48 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p48.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p48 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p48.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p48 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p48.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p48 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p48.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p48 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p48.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p48 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p48.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p48 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p48.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p48 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p48.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p49 === "barranca" &&
          <button id="txtBut" onClick={this.p49.bind(this)}>barranca</button>
        }
        {this.state.p49 === "Barranca" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p49.bind(this)}>Barranca</button>
        }
        {this.state.p49 === "Barranca" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p49.bind(this)}><span style={{color:"red"}}>B</span>arranca</button>
        }

        {this.state.p50 === " " &&
          <button id="txtBut" onClick={this.p50.bind(this)}>&nbsp;</button>
        }
        {this.state.p50 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p50.bind(this)}>,&nbsp;</button>
        }
        {this.state.p50 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p50.bind(this)}>;&nbsp;</button>
        }
        {this.state.p50 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p50.bind(this)}>:&nbsp;</button>
        }
        {this.state.p50 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p50.bind(this)}>(&nbsp;</button>
        }
        {this.state.p50 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p50.bind(this)}>)&nbsp;</button>
        }
        {this.state.p50 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p50.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p50 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p50.bind(this)}>!&nbsp;</button>
        }
        {this.state.p50 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p50.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p50 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p50.bind(this)}>?&nbsp;</button>
        }
        {this.state.p50 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p50.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p50 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p50.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p50 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p50.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p50 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p50.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p50 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p50.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p50 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p50.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p50 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p50.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p50 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p50.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p50 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p50.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p51 === "inmunda" &&
          <button id="txtBut" onClick={this.p51.bind(this)}>inmunda</button>
        }
        {this.state.p51 === "Inmunda" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p51.bind(this)}>Inmunda</button>
        }
        {this.state.p51 === "Inmunda" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p51.bind(this)}><span style={{color:"red"}}>I</span>nmunda</button>
        }

        {this.state.p52 === " " &&
          <button id="txtBut" onClick={this.p52.bind(this)}>&nbsp;</button>
        }
        {this.state.p52 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p52.bind(this)}>,&nbsp;</button>
        }
        {this.state.p52 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p52.bind(this)}>;&nbsp;</button>
        }
        {this.state.p52 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p52.bind(this)}>:&nbsp;</button>
        }
        {this.state.p52 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p52.bind(this)}>(&nbsp;</button>
        }
        {this.state.p52 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p52.bind(this)}>)&nbsp;</button>
        }
        {this.state.p52 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p52.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p52 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p52.bind(this)}>!&nbsp;</button>
        }
        {this.state.p52 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p52.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p52 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p52.bind(this)}>?&nbsp;</button>
        }
        {this.state.p52 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p52.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p52 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p52.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p52 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p52.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p52 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p52.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p52 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p52.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p52 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p52.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p52 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p52.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p52 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p52.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p52 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p52.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p53 === "de" &&
          <button id="txtBut" onClick={this.p53.bind(this)}>de</button>
        }
        {this.state.p53 === "De" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p53.bind(this)}>De</button>
        }
        {this.state.p53 === "De" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p53.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p54 === " " &&
          <button id="txtBut" onClick={this.p54.bind(this)}>&nbsp;</button>
        }
        {this.state.p54 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p54.bind(this)}>,&nbsp;</button>
        }
        {this.state.p54 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p54.bind(this)}>;&nbsp;</button>
        }
        {this.state.p54 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p54.bind(this)}>:&nbsp;</button>
        }
        {this.state.p54 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p54.bind(this)}>(&nbsp;</button>
        }
        {this.state.p54 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p54.bind(this)}>)&nbsp;</button>
        }
        {this.state.p54 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p54.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p54 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p54.bind(this)}>!&nbsp;</button>
        }
        {this.state.p54 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p54.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p54 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p54.bind(this)}>?&nbsp;</button>
        }
        {this.state.p54 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p54.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p54 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p54.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p54 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p54.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p54 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p54.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p54 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p54.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p54 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p54.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p54 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p54.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p54 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p54.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p54 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p54.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p55 === "la" &&
          <button id="txtBut" onClick={this.p55.bind(this)}>la</button>
        }
        {this.state.p55 === "La" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p55.bind(this)}>La</button>
        }
        {this.state.p55 === "La" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p55.bind(this)}><span style={{color:"red"}}>L</span>a</button>
        }

        {this.state.p56 === " " &&
          <button id="txtBut" onClick={this.p56.bind(this)}>&nbsp;</button>
        }
        {this.state.p56 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p56.bind(this)}>,&nbsp;</button>
        }
        {this.state.p56 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p56.bind(this)}>;&nbsp;</button>
        }
        {this.state.p56 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p56.bind(this)}>:&nbsp;</button>
        }
        {this.state.p56 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p56.bind(this)}>(&nbsp;</button>
        }
        {this.state.p56 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p56.bind(this)}>)&nbsp;</button>
        }
        {this.state.p56 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p56.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p56 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p56.bind(this)}>!&nbsp;</button>
        }
        {this.state.p56 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p56.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p56 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p56.bind(this)}>?&nbsp;</button>
        }
        {this.state.p56 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p56.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p56 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p56.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p56 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p56.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p56 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p56.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p56 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p56.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p56 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p56.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p56 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p56.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p56 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p56.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p56 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p56.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p57 === "feria" &&
          <button id="txtBut" onClick={this.p57.bind(this)}>feria</button>
        }
        {this.state.p57 === "Feria" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p57.bind(this)}>Feria</button>
        }
        {this.state.p57 === "Feria" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p57.bind(this)}><span style={{color:"red"}}>F</span>eria</button>
        }

        {this.state.p58 === " " &&
          <button id="txtBut" onClick={this.p58.bind(this)}>&nbsp;</button>
        }
        {this.state.p58 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p58.bind(this)}>,&nbsp;</button>
        }
        {this.state.p58 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p58.bind(this)}>;&nbsp;</button>
        }
        {this.state.p58 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p58.bind(this)}>:&nbsp;</button>
        }
        {this.state.p58 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p58.bind(this)}>(&nbsp;</button>
        }
        {this.state.p58 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p58.bind(this)}>)&nbsp;</button>
        }
        {this.state.p58 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p58.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p58 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p58.bind(this)}>!&nbsp;</button>
        }
        {this.state.p58 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p58.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p58 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p58.bind(this)}>?&nbsp;</button>
        }
        {this.state.p58 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p58.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p58 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p58.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p58 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p58.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p58 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p58.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p58 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p58.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p58 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p58.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p58 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p58.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p58 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p58.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p58 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p58.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p59 === "callejera" &&
          <button id="txtBut" onClick={this.p59.bind(this)}>callejera</button>
        }
        {this.state.p59 === "Callejera" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p59.bind(this)}>Callejera</button>
        }
        {this.state.p59 === "Callejera" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p59.bind(this)}><span style={{color:"red"}}>C</span>allejera</button>
        }

        {this.state.p60 === " " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p60.bind(this)}>&nbsp;</button>
        }
        {this.state.p60 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p60.bind(this)}>,&nbsp;</button>
        }
        {this.state.p60 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p60.bind(this)}>;&nbsp;</button>
        }
        {this.state.p60 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p60.bind(this)}>:&nbsp;</button>
        }
        {this.state.p60 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p60.bind(this)}>(&nbsp;</button>
        }
        {this.state.p60 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p60.bind(this)}>)&nbsp;</button>
        }
        {this.state.p60 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p60.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p60 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p60.bind(this)}>!&nbsp;</button>
        }
        {this.state.p60 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p60.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p60 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p60.bind(this)}>?&nbsp;</button>
        }
        {this.state.p60 === " " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p60.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p60 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p60.bind(this)}>,&nbsp;</button>
        }
        {this.state.p60 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p60.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p60 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p60.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p60 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p60.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p60 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p60.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p60 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p60.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p60 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p60.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p60 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p60.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p60 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p60.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        <br/><br/><br/>
        <button  onClick={this.updateComparar.bind(this)}>Comparar</button>
      </div>
    );
  }
}

export default Migala
