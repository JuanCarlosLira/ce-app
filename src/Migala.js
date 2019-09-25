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
    p123: "unos",
    p124: " ",
    p125: "días",
    p126: " ",
    p127: "más",
    p128: " ",
    p129: "tarde",
    p130: " ",
    p131: "volví",
    p132: " ",
    p133: "para",
    p134: " ",
    p135: "comprar",
    p136: " ",
    p137: "la",
    p138: " ",
    p139: "migala",
    p140: ", ",
    p141: "y",
    p142: " ",
    p143: "el",
    p144: " ",
    p145: "sorprendido",
    p146: " ",
    p147: "saltimbanqui",
    p148: " ",
    p149: "me",
    p150: " ",
    p151: "dio",
    p152: " ",
    p153: "algunos",
    p154: " ",
    p155: "informes",
    p156: " ",
    p157: "acerca",
    p158: " ",
    p159: "de",
    p160: " ",
    p161: "sus",
    p162: " ",
    p163: "costumbres",
    p164: " ",
    p165: "y",
    p166: " ",
    p167: "su",
    p168: " ",
    p169: "alimentación",
    p170: " ",
    p171: "extraña",
    p172: ". ",
    p173: "entonces",
    p174: " ",
    p175: "comprendí",
    p176: " ",
    p177: "que",
    p178: " ",
    p179: "tenía",
    p180: " ",
    p181: "en",
    p182: " ",
    p183: "las",
    p184: " ",
    p185: "manos",
    p186: ", ",
    p187: "de",
    p188: " ",
    p189: "una",
    p190: " ",
    p191: "vez",
    p192: " ",
    p193: "por",
    p194: " ",
    p195: "todas",
    p196: ", ",
    p197: "la",
    p198: " ",
    p199: "amenaza",
    p200: " ",
    p201: "total",
    p202: ", ",
    p203: "la",
    p204: " ",
    p205: "máxima",
    p206: " ",
    p207: "dosis",
    p208: " ",
    p209: "de",
    p210: " ",
    p211: "terror",
    p212: " ",
    p213: "que",
    p214: " ",
    p215: "mi",
    p216: " ",
    p217: "espíritu",
    p218: " ",
    p219: "podía",
    p220: " ",
    p221: "soportar",
    p222: ". ",
    p223: "recuerdo",
    p224: " ",
    p225: "mi",
    p226: " ",
    p227: "paso",
    p228: " ",
    p229: "tembloroso",
    p230: ", ",
    p231: "vacilante",
    p232: ", ",
    p233: "cuando",
    p234: " ",
    p235: "de",
    p236: " ",
    p237: "regreso",
    p238: " ",
    p239: "a",
    p240: " ",
    p241: "la",
    p242: " ",
    p243: "casa",
    p244: " ",
    p245: "sentía",
    p246: " ",
    p247: "el",
    p248: " ",
    p249: "peso",
    p250: " ",
    p251: "leve",
    p252: " ",
    p253: "y",
    p254: " ",
    p255: "denso",
    p256: " ",
    p257: "de",
    p258: " ",
    p259: "la",
    p260: " ",
    p261: "araña",
    p262: ", ",
    p263: "ese",
    p264: " ",
    p265: "peso",
    p266: " ",
    p267: "del",
    p268: " ",
    p269: "cual",
    p270: " ",
    p271: "podía",
    p272: " ",
    p273: "descontar",
    p274: ", ",
    p275: "con",
    p276: " ",
    p277: "seguridad",
    p278: ", ",
    p279: "el",
    p280: " ",
    p281: "de",
    p282: " ",
    p283: "la",
    p284: " ",
    p285: "caja",
    p286: " ",
    p287: "de",
    p288: " ",
    p289: "madera",
    p290: " ",
    p291: "en",
    p292: " ",
    p293: "que",
    p294: " ",
    p295: "la",
    p296: " ",
    p297: "llevaba",
    p298: ", ",
    p299: "como",
    p300: " ",
    p301: "si",
    p302: " ",
    p303: "fueran",
    p304: " ",
    p305: "dos",
    p306: " ",
    p307: "pesos",
    p308: " ",
    p309: "totalmente",
    p310: " ",
    p311: "diferentes",
    p312: ": ",
    p313: "el",
    p314: " ",
    p315: "de",
    p316: " ",
    p317: "la",
    p318: " ",
    p319: "madera",
    p320: " ",
    p321: "inocente",
    p322: " ",
    p323: "y",
    p324: " ",
    p325: "el",
    p326: " ",
    p327: "del",
    p328: " ",
    p329: "impuro",
    p330: " ",
    p331: "y",
    p332: " ",
    p333: "ponzoñoso",
    p334: " ",
    p335: "animal",
    p336: " ",
    p337: "que ",
    p338: " ",
    p339: "tiraba",
    p340: " ",
    p341: "de",
    p342: " ",
    p343: "mí",
    p344: " ",
    p345: "como",
    p346: " ",
    p347: "un",
    p348: " ",
    p349: "lastre",
    p350: " ",
    p351: "definitivo",
    p352: ", ",
    p353: "Dentro",
    p354: " ",
    p355: "de",
    p356: " ",
    p357: "aquella",
    p358: " ",
    p359: "caja",
    p360: " ",
    p361: "iba",
    p362: " ",
    p363: "el",
    p364: " ",
    p365: "infierno",
    p366: " ",
    p367: "personal",
    p368: " ",
    p369: "que",
    p370: " ",
    p371: "instalaría",
    p372: " ",
    p373: "en",
    p374: " ",
    p375: "mi",
    p376: " ",
    p377: "casa",
    p378: " ",
    p379: "para",
    p380: " ",
    p381: "destruir",
    p382: ", ",
    p383: "para",
    p384: " ",
    p385: "anular",
    p386: " ",
    p387: "al",
    p388: " ",
    p389: "otro",
    p390: ", ",
    p391: "el",
    p392: " ",
    p393: "descomunal",
    p394: " ",
    p395: "infierno",
    p396: " ",
    p397: "de",
    p398: " ",
    p399: "los",
    p400: " ",
    p401: "hombres",
    p402: ". ",
    p403: "",
    p404: "",
    p405: "",
    p406: "",
    p407: "",
    p408: "",
    p409: "",
    p410: "",
    p411: "",
    p412: "",
    p413: "",
    p414: "",
    p415: "",
    p416: "",
    p417: "",
    p418: "",
    p419: "",
    p420: "",
    p421: "",
    p422: "",
    p423: "",
    p424: "",
    p425: "",
    p426: "",
    p427: "",
    p428: "",
    p429: "",
    p430: "",
    p431: "",
    p432: "",
    p433: "",
    p434: "",
    p435: "",
    p436: "",
    p437: "",
    p438: "",
    p439: "",
    p440: "",
    p441: "",
    p442: "",
    p443: "",
    p444: "",
    p445: "",
    p446: "",
    p447: "",
    p448: "",
    p449: "",
    p450: "",
    p451: "",
    p452: "",
    p453: "",
    p454: "",
    p455: "",
    p456: "",
    p457: "",
    p458: "",
    p459: "",
    p460: "",
    p461: "",
    p462: "",
    p463: "",
    p464: "",
    p465: "",
    p466: "",
    p467: "",
    p468: "",
    p469: "",
    p470: "",
    p471: "",
    p472: "",
    p473: "",
    p474: "",
    p475: "",
    p476: "",
    p477: "",
    p478: "",
    p479: "",
    p480: "",
    p481: "",
    p482: "",
    p483: "",
    p484: "",
    p485: "",
    p486: "",
    p487: "",
    p488: "",
    p489: "",
    p490: "",
    p491: "",
    p492: "",
    p493: "",
    p494: "",
    p495: "",
    p496: "",
    p497: "",
    p498: "",
    p499: "",
    p500: ""
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
  p61() {
    if (this.state.p61 === "me") {
      this.setState({p61: "Me"});
    } else {
      this.setState({p61: "me"});
    }
  }
  p62() {
    if (this.state.p62 === " ") {this.setState({p62: ", "});}
    if (this.state.p62 === ", ") {this.setState({p62: "; "});}
    if (this.state.p62 === "; ") {this.setState({p62: ": "});}
    if (this.state.p62 === ": ") {this.setState({p62: "( "});}
    if (this.state.p62 === "( ") {this.setState({p62: ") "});}
    if (this.state.p62 === ") ") {this.setState({p62: "¡ "});}
    if (this.state.p62 === "¡ ") {this.setState({p62: "! "});}
    if (this.state.p62 === "! ") {this.setState({p62: "¿ "});}
    if (this.state.p62 === "¿ ") {this.setState({p62: "? "});}
    if (this.state.p62 === "? ") {this.setState({p62: " "});}
  }
  p63() {
    if (this.state.p63 === "di") {
      this.setState({p63: "Di"});
    } else {
      this.setState({p63: "di"});
    }
  }
  p64() {
    if (this.state.p64 === " ") {this.setState({p64: ", "});}
    if (this.state.p64 === ", ") {this.setState({p64: "; "});}
    if (this.state.p64 === "; ") {this.setState({p64: ": "});}
    if (this.state.p64 === ": ") {this.setState({p64: "( "});}
    if (this.state.p64 === "( ") {this.setState({p64: ") "});}
    if (this.state.p64 === ") ") {this.setState({p64: "¡ "});}
    if (this.state.p64 === "¡ ") {this.setState({p64: "! "});}
    if (this.state.p64 === "! ") {this.setState({p64: "¿ "});}
    if (this.state.p64 === "¿ ") {this.setState({p64: "? "});}
    if (this.state.p64 === "? ") {this.setState({p64: " "});}
  }
  p65() {
    if (this.state.p65 === "cuenta") {
      this.setState({p65: "Cuenta"});
    } else {
      this.setState({p65: "cuenta"});
    }
  }
  p66() {
    if (this.state.p66 === " ") {this.setState({p66: ", "});}
    if (this.state.p66 === ", ") {this.setState({p66: "; "});}
    if (this.state.p66 === "; ") {this.setState({p66: ": "});}
    if (this.state.p66 === ": ") {this.setState({p66: "( "});}
    if (this.state.p66 === "( ") {this.setState({p66: ") "});}
    if (this.state.p66 === ") ") {this.setState({p66: "¡ "});}
    if (this.state.p66 === "¡ ") {this.setState({p66: "! "});}
    if (this.state.p66 === "! ") {this.setState({p66: "¿ "});}
    if (this.state.p66 === "¿ ") {this.setState({p66: "? "});}
    if (this.state.p66 === "? ") {this.setState({p66: " "});}
  }
  p67() {
    if (this.state.p67 === "de") {
      this.setState({p67: "De"});
    } else {
      this.setState({p67: "de"});
    }
  }
  p68() {
    if (this.state.p68 === " ") {this.setState({p68: ", "});}
    if (this.state.p68 === ", ") {this.setState({p68: "; "});}
    if (this.state.p68 === "; ") {this.setState({p68: ": "});}
    if (this.state.p68 === ": ") {this.setState({p68: "( "});}
    if (this.state.p68 === "( ") {this.setState({p68: ") "});}
    if (this.state.p68 === ") ") {this.setState({p68: "¡ "});}
    if (this.state.p68 === "¡ ") {this.setState({p68: "! "});}
    if (this.state.p68 === "! ") {this.setState({p68: "¿ "});}
    if (this.state.p68 === "¿ ") {this.setState({p68: "? "});}
    if (this.state.p68 === "? ") {this.setState({p68: " "});}
  }
  p69() {
    if (this.state.p69 === "que") {
      this.setState({p69: "Que"});
    } else {
      this.setState({p69: "que"});
    }
  }
  p70() {
    if (this.state.p70 === " ") {this.setState({p70: ", "});}
    if (this.state.p70 === ", ") {this.setState({p70: "; "});}
    if (this.state.p70 === "; ") {this.setState({p70: ": "});}
    if (this.state.p70 === ": ") {this.setState({p70: "( "});}
    if (this.state.p70 === "( ") {this.setState({p70: ") "});}
    if (this.state.p70 === ") ") {this.setState({p70: "¡ "});}
    if (this.state.p70 === "¡ ") {this.setState({p70: "! "});}
    if (this.state.p70 === "! ") {this.setState({p70: "¿ "});}
    if (this.state.p70 === "¿ ") {this.setState({p70: "? "});}
    if (this.state.p70 === "? ") {this.setState({p70: " "});}
  }
  p71() {
    if (this.state.p71 === "la") {
      this.setState({p71: "La"});
    } else {
      this.setState({p71: "la"});
    }
  }
  p72() {
    if (this.state.p72 === " ") {this.setState({p72: ", "});}
    if (this.state.p72 === ", ") {this.setState({p72: "; "});}
    if (this.state.p72 === "; ") {this.setState({p72: ": "});}
    if (this.state.p72 === ": ") {this.setState({p72: "( "});}
    if (this.state.p72 === "( ") {this.setState({p72: ") "});}
    if (this.state.p72 === ") ") {this.setState({p72: "¡ "});}
    if (this.state.p72 === "¡ ") {this.setState({p72: "! "});}
    if (this.state.p72 === "! ") {this.setState({p72: "¿ "});}
    if (this.state.p72 === "¿ ") {this.setState({p72: "? "});}
    if (this.state.p72 === "? ") {this.setState({p72: " "});}
  }
  p73() {
    if (this.state.p73 === "repulsiva") {
      this.setState({p73: "Repulsiva"});
    } else {
      this.setState({p73: "repulsiva"});
    }
  }
  p74() {
    if (this.state.p74 === " ") {this.setState({p74: ", "});}
    if (this.state.p74 === ", ") {this.setState({p74: "; "});}
    if (this.state.p74 === "; ") {this.setState({p74: ": "});}
    if (this.state.p74 === ": ") {this.setState({p74: "( "});}
    if (this.state.p74 === "( ") {this.setState({p74: ") "});}
    if (this.state.p74 === ") ") {this.setState({p74: "¡ "});}
    if (this.state.p74 === "¡ ") {this.setState({p74: "! "});}
    if (this.state.p74 === "! ") {this.setState({p74: "¿ "});}
    if (this.state.p74 === "¿ ") {this.setState({p74: "? "});}
    if (this.state.p74 === "? ") {this.setState({p74: " "});}
  }
  p75() {
    if (this.state.p75 === "alimaña") {
      this.setState({p75: "Alimaña"});
    } else {
      this.setState({p75: "alimaña"});
    }
  }
  p76() {
    if (this.state.p76 === " ") {this.setState({p76: ", "});}
    if (this.state.p76 === ", ") {this.setState({p76: "; "});}
    if (this.state.p76 === "; ") {this.setState({p76: ": "});}
    if (this.state.p76 === ": ") {this.setState({p76: "( "});}
    if (this.state.p76 === "( ") {this.setState({p76: ") "});}
    if (this.state.p76 === ") ") {this.setState({p76: "¡ "});}
    if (this.state.p76 === "¡ ") {this.setState({p76: "! "});}
    if (this.state.p76 === "! ") {this.setState({p76: "¿ "});}
    if (this.state.p76 === "¿ ") {this.setState({p76: "? "});}
    if (this.state.p76 === "? ") {this.setState({p76: " "});}
  }
  p77() {
    if (this.state.p77 === "era") {
      this.setState({p77: "Era"});
    } else {
      this.setState({p77: "era"});
    }
  }
  p78() {
    if (this.state.p78 === " ") {this.setState({p78: ", "});}
    if (this.state.p78 === ", ") {this.setState({p78: "; "});}
    if (this.state.p78 === "; ") {this.setState({p78: ": "});}
    if (this.state.p78 === ": ") {this.setState({p78: "( "});}
    if (this.state.p78 === "( ") {this.setState({p78: ") "});}
    if (this.state.p78 === ") ") {this.setState({p78: "¡ "});}
    if (this.state.p78 === "¡ ") {this.setState({p78: "! "});}
    if (this.state.p78 === "! ") {this.setState({p78: "¿ "});}
    if (this.state.p78 === "¿ ") {this.setState({p78: "? "});}
    if (this.state.p78 === "? ") {this.setState({p78: " "});}
  }
  p79() {
    if (this.state.p79 === "lo") {
      this.setState({p79: "Lo"});
    } else {
      this.setState({p79: "lo"});
    }
  }
  p80() {
    if (this.state.p80 === " ") {this.setState({p80: ", "});}
    if (this.state.p80 === ", ") {this.setState({p80: "; "});}
    if (this.state.p80 === "; ") {this.setState({p80: ": "});}
    if (this.state.p80 === ": ") {this.setState({p80: "( "});}
    if (this.state.p80 === "( ") {this.setState({p80: ") "});}
    if (this.state.p80 === ") ") {this.setState({p80: "¡ "});}
    if (this.state.p80 === "¡ ") {this.setState({p80: "! "});}
    if (this.state.p80 === "! ") {this.setState({p80: "¿ "});}
    if (this.state.p80 === "¿ ") {this.setState({p80: "? "});}
    if (this.state.p80 === "? ") {this.setState({p80: " "});}
  }
  p81() {
    if (this.state.p81 === "más") {
      this.setState({p81: "Más"});
    } else {
      this.setState({p81: "más"});
    }
  }
  p82() {
    if (this.state.p82 === " ") {this.setState({p82: ", "});}
    if (this.state.p82 === ", ") {this.setState({p82: "; "});}
    if (this.state.p82 === "; ") {this.setState({p82: ": "});}
    if (this.state.p82 === ": ") {this.setState({p82: "( "});}
    if (this.state.p82 === "( ") {this.setState({p82: ") "});}
    if (this.state.p82 === ") ") {this.setState({p82: "¡ "});}
    if (this.state.p82 === "¡ ") {this.setState({p82: "! "});}
    if (this.state.p82 === "! ") {this.setState({p82: "¿ "});}
    if (this.state.p82 === "¿ ") {this.setState({p82: "? "});}
    if (this.state.p82 === "? ") {this.setState({p82: " "});}
  }
  p83() {
    if (this.state.p83 === "atroz") {
      this.setState({p83: "Atroz"});
    } else {
      this.setState({p83: "atroz"});
    }
  }
  p84() {
    if (this.state.p84 === " ") {this.setState({p84: ", "});}
    if (this.state.p84 === ", ") {this.setState({p84: "; "});}
    if (this.state.p84 === "; ") {this.setState({p84: ": "});}
    if (this.state.p84 === ": ") {this.setState({p84: "( "});}
    if (this.state.p84 === "( ") {this.setState({p84: ") "});}
    if (this.state.p84 === ") ") {this.setState({p84: "¡ "});}
    if (this.state.p84 === "¡ ") {this.setState({p84: "! "});}
    if (this.state.p84 === "! ") {this.setState({p84: "¿ "});}
    if (this.state.p84 === "¿ ") {this.setState({p84: "? "});}
    if (this.state.p84 === "? ") {this.setState({p84: " "});}
  }
  p85() {
    if (this.state.p85 === "que") {
      this.setState({p85: "Que"});
    } else {
      this.setState({p85: "que"});
    }
  }
  p86() {
    if (this.state.p86 === " ") {this.setState({p86: ", "});}
    if (this.state.p86 === ", ") {this.setState({p86: "; "});}
    if (this.state.p86 === "; ") {this.setState({p86: ": "});}
    if (this.state.p86 === ": ") {this.setState({p86: "( "});}
    if (this.state.p86 === "( ") {this.setState({p86: ") "});}
    if (this.state.p86 === ") ") {this.setState({p86: "¡ "});}
    if (this.state.p86 === "¡ ") {this.setState({p86: "! "});}
    if (this.state.p86 === "! ") {this.setState({p86: "¿ "});}
    if (this.state.p86 === "¿ ") {this.setState({p86: "? "});}
    if (this.state.p86 === "? ") {this.setState({p86: " "});}
  }
  p87() {
    if (this.state.p87 === "podía") {
      this.setState({p87: "Podía"});
    } else {
      this.setState({p87: "podía"});
    }
  }
  p88() {
    if (this.state.p88 === " ") {this.setState({p88: ", "});}
    if (this.state.p88 === ", ") {this.setState({p88: "; "});}
    if (this.state.p88 === "; ") {this.setState({p88: ": "});}
    if (this.state.p88 === ": ") {this.setState({p88: "( "});}
    if (this.state.p88 === "( ") {this.setState({p88: ") "});}
    if (this.state.p88 === ") ") {this.setState({p88: "¡ "});}
    if (this.state.p88 === "¡ ") {this.setState({p88: "! "});}
    if (this.state.p88 === "! ") {this.setState({p88: "¿ "});}
    if (this.state.p88 === "¿ ") {this.setState({p88: "? "});}
    if (this.state.p88 === "? ") {this.setState({p88: " "});}
  }
  p89() {
    if (this.state.p89 === "depararme") {
      this.setState({p89: "Depararme"});
    } else {
      this.setState({p89: "depararme"});
    }
  }
  p90() {
    if (this.state.p90 === " ") {this.setState({p90: ", "});}
    if (this.state.p90 === ", ") {this.setState({p90: "; "});}
    if (this.state.p90 === "; ") {this.setState({p90: ": "});}
    if (this.state.p90 === ": ") {this.setState({p90: "( "});}
    if (this.state.p90 === "( ") {this.setState({p90: ") "});}
    if (this.state.p90 === ") ") {this.setState({p90: "¡ "});}
    if (this.state.p90 === "¡ ") {this.setState({p90: "! "});}
    if (this.state.p90 === "! ") {this.setState({p90: "¿ "});}
    if (this.state.p90 === "¿ ") {this.setState({p90: "? "});}
    if (this.state.p90 === "? ") {this.setState({p90: " "});}
  }
  p91() {
    if (this.state.p91 === "el") {
      this.setState({p91: "El"});
    } else {
      this.setState({p91: "el"});
    }
  }
  p92() {
    if (this.state.p92 === " ") {this.setState({p92: ", "});}
    if (this.state.p92 === ", ") {this.setState({p92: "; "});}
    if (this.state.p92 === "; ") {this.setState({p92: ": "});}
    if (this.state.p92 === ": ") {this.setState({p92: "( "});}
    if (this.state.p92 === "( ") {this.setState({p92: ") "});}
    if (this.state.p92 === ") ") {this.setState({p92: "¡ "});}
    if (this.state.p92 === "¡ ") {this.setState({p92: "! "});}
    if (this.state.p92 === "! ") {this.setState({p92: "¿ "});}
    if (this.state.p92 === "¿ ") {this.setState({p92: "? "});}
    if (this.state.p92 === "? ") {this.setState({p92: " "});}
  }
  p93() {
    if (this.state.p93 === "destino") {
      this.setState({p93: "Destino"});
    } else {
      this.setState({p93: "destino"});
    }
  }
  p94() {
    if (this.state.p94 === " ") {this.setState({p94: ", "});}
    if (this.state.p94 === ", ") {this.setState({p94: "; "});}
    if (this.state.p94 === "; ") {this.setState({p94: ". "});}
    if (this.state.p94 === ". ") {this.setState({p94: "( "});}
    if (this.state.p94 === "( ") {this.setState({p94: ") "});}
    if (this.state.p94 === ") ") {this.setState({p94: "¡ "});}
    if (this.state.p94 === "¡ ") {this.setState({p94: "! "});}
    if (this.state.p94 === "! ") {this.setState({p94: "¿ "});}
    if (this.state.p94 === "¿ ") {this.setState({p94: "? "});}
    if (this.state.p94 === "? ") {this.setState({p94: " "});}
  }
  p95() {
    if (this.state.p95 === "Peor") {
      this.setState({p95: "peor"});
    } else {
      this.setState({p95: "Peor"});
    }
  }
  p96() {
    if (this.state.p96 === " ") {this.setState({p96: ", "});}
    if (this.state.p96 === ", ") {this.setState({p96: "; "});}
    if (this.state.p96 === "; ") {this.setState({p96: ": "});}
    if (this.state.p96 === ": ") {this.setState({p96: "( "});}
    if (this.state.p96 === "( ") {this.setState({p96: ") "});}
    if (this.state.p96 === ") ") {this.setState({p96: "¡ "});}
    if (this.state.p96 === "¡ ") {this.setState({p96: "! "});}
    if (this.state.p96 === "! ") {this.setState({p96: "¿ "});}
    if (this.state.p96 === "¿ ") {this.setState({p96: "? "});}
    if (this.state.p96 === "? ") {this.setState({p96: " "});}
  }
  p97() {
    if (this.state.p97 === "que") {
      this.setState({p97: "Que"});
    } else {
      this.setState({p97: "que"});
    }
  }
  p98() {
    if (this.state.p98 === " ") {this.setState({p98: ", "});}
    if (this.state.p98 === ", ") {this.setState({p98: "; "});}
    if (this.state.p98 === "; ") {this.setState({p98: ": "});}
    if (this.state.p98 === ": ") {this.setState({p98: "( "});}
    if (this.state.p98 === "( ") {this.setState({p98: ") "});}
    if (this.state.p98 === ") ") {this.setState({p98: "¡ "});}
    if (this.state.p98 === "¡ ") {this.setState({p98: "! "});}
    if (this.state.p98 === "! ") {this.setState({p98: "¿ "});}
    if (this.state.p98 === "¿ ") {this.setState({p98: "? "});}
    if (this.state.p98 === "? ") {this.setState({p98: " "});}
  }
  p99() {
    if (this.state.p99 === "el") {
      this.setState({p99: "El"});
    } else {
      this.setState({p99: "el"});
    }
  }
  p100() {
    if (this.state.p100 === " ") {this.setState({p100: ", "});}
    if (this.state.p100 === ", ") {this.setState({p100: "; "});}
    if (this.state.p100 === "; ") {this.setState({p100: ": "});}
    if (this.state.p100 === ": ") {this.setState({p100: "( "});}
    if (this.state.p100 === "( ") {this.setState({p100: ") "});}
    if (this.state.p100 === ") ") {this.setState({p100: "¡ "});}
    if (this.state.p100 === "¡ ") {this.setState({p100: "! "});}
    if (this.state.p100 === "! ") {this.setState({p100: "¿ "});}
    if (this.state.p100 === "¿ ") {this.setState({p100: "? "});}
    if (this.state.p100 === "? ") {this.setState({p100: " "});}
  }
  p101() {
    if (this.state.p101 === "desprecio") {
      this.setState({p101: "Desprecio"});
    } else {
      this.setState({p101: "desprecio"});
    }
  }
  p102() {
    if (this.state.p102 === " ") {this.setState({p102: ", "});}
    if (this.state.p102 === ", ") {this.setState({p102: "; "});}
    if (this.state.p102 === "; ") {this.setState({p102: ": "});}
    if (this.state.p102 === ": ") {this.setState({p102: "( "});}
    if (this.state.p102 === "( ") {this.setState({p102: ") "});}
    if (this.state.p102 === ") ") {this.setState({p102: "¡ "});}
    if (this.state.p102 === "¡ ") {this.setState({p102: "! "});}
    if (this.state.p102 === "! ") {this.setState({p102: "¿ "});}
    if (this.state.p102 === "¿ ") {this.setState({p102: "? "});}
    if (this.state.p102 === "? ") {this.setState({p102: " "});}
  }
  p103() {
    if (this.state.p103 === "y") {
      this.setState({p103: "Y"});
    } else {
      this.setState({p103: "y"});
    }
  }
  p104() {
    if (this.state.p104 === " ") {this.setState({p104: ", "});}
    if (this.state.p104 === ", ") {this.setState({p104: "; "});}
    if (this.state.p104 === "; ") {this.setState({p104: ": "});}
    if (this.state.p104 === ": ") {this.setState({p104: "( "});}
    if (this.state.p104 === "( ") {this.setState({p104: ") "});}
    if (this.state.p104 === ") ") {this.setState({p104: "¡ "});}
    if (this.state.p104 === "¡ ") {this.setState({p104: "! "});}
    if (this.state.p104 === "! ") {this.setState({p104: "¿ "});}
    if (this.state.p104 === "¿ ") {this.setState({p104: "? "});}
    if (this.state.p104 === "? ") {this.setState({p104: " "});}
  }
  p105() {
    if (this.state.p105 === "la") {
      this.setState({p105: "La"});
    } else {
      this.setState({p105: "la"});
    }
  }
  p106() {
    if (this.state.p106 === " ") {this.setState({p106: ", "});}
    if (this.state.p106 === ", ") {this.setState({p106: "; "});}
    if (this.state.p106 === "; ") {this.setState({p106: ": "});}
    if (this.state.p106 === ": ") {this.setState({p106: "( "});}
    if (this.state.p106 === "( ") {this.setState({p106: ") "});}
    if (this.state.p106 === ") ") {this.setState({p106: "¡ "});}
    if (this.state.p106 === "¡ ") {this.setState({p106: "! "});}
    if (this.state.p106 === "! ") {this.setState({p106: "¿ "});}
    if (this.state.p106 === "¿ ") {this.setState({p106: "? "});}
    if (this.state.p106 === "? ") {this.setState({p106: " "});}
  }
  p107() {
    if (this.state.p107 === "conmiseración") {
      this.setState({p107: "Conmiseración"});
    } else {
      this.setState({p107: "conmiseración"});
    }
  }
  p108() {
    if (this.state.p108 === " ") {this.setState({p108: ", "});}
    if (this.state.p108 === ", ") {this.setState({p108: "; "});}
    if (this.state.p108 === "; ") {this.setState({p108: ": "});}
    if (this.state.p108 === ": ") {this.setState({p108: "( "});}
    if (this.state.p108 === "( ") {this.setState({p108: ") "});}
    if (this.state.p108 === ") ") {this.setState({p108: "¡ "});}
    if (this.state.p108 === "¡ ") {this.setState({p108: "! "});}
    if (this.state.p108 === "! ") {this.setState({p108: "¿ "});}
    if (this.state.p108 === "¿ ") {this.setState({p108: "? "});}
    if (this.state.p108 === "? ") {this.setState({p108: " "});}
  }
  p109() {
    if (this.state.p109 === "brillando") {
      this.setState({p109: "Brillando"});
    } else {
      this.setState({p109: "brillando"});
    }
  }
  p110() {
    if (this.state.p110 === " ") {this.setState({p110: ", "});}
    if (this.state.p110 === ", ") {this.setState({p110: "; "});}
    if (this.state.p110 === "; ") {this.setState({p110: ": "});}
    if (this.state.p110 === ": ") {this.setState({p110: "( "});}
    if (this.state.p110 === "( ") {this.setState({p110: ") "});}
    if (this.state.p110 === ") ") {this.setState({p110: "¡ "});}
    if (this.state.p110 === "¡ ") {this.setState({p110: "! "});}
    if (this.state.p110 === "! ") {this.setState({p110: "¿ "});}
    if (this.state.p110 === "¿ ") {this.setState({p110: "? "});}
    if (this.state.p110 === "? ") {this.setState({p110: " "});}
  }
  p111() {
    if (this.state.p111 === "de") {
      this.setState({p111: "De"});
    } else {
      this.setState({p111: "de"});
    }
  }
  p112() {
    if (this.state.p112 === " ") {this.setState({p112: ", "});}
    if (this.state.p112 === ", ") {this.setState({p112: "; "});}
    if (this.state.p112 === "; ") {this.setState({p112: ": "});}
    if (this.state.p112 === ": ") {this.setState({p112: "( "});}
    if (this.state.p112 === "( ") {this.setState({p112: ") "});}
    if (this.state.p112 === ") ") {this.setState({p112: "¡ "});}
    if (this.state.p112 === "¡ ") {this.setState({p112: "! "});}
    if (this.state.p112 === "! ") {this.setState({p112: "¿ "});}
    if (this.state.p112 === "¿ ") {this.setState({p112: "? "});}
    if (this.state.p112 === "? ") {this.setState({p112: " "});}
  }
  p113() {
    if (this.state.p113 === "pronto") {
      this.setState({p113: "Pronto"});
    } else {
      this.setState({p113: "pronto"});
    }
  }
  p114() {
    if (this.state.p114 === " ") {this.setState({p114: ", "});}
    if (this.state.p114 === ", ") {this.setState({p114: "; "});}
    if (this.state.p114 === "; ") {this.setState({p114: ": "});}
    if (this.state.p114 === ": ") {this.setState({p114: "( "});}
    if (this.state.p114 === "( ") {this.setState({p114: ") "});}
    if (this.state.p114 === ") ") {this.setState({p114: "¡ "});}
    if (this.state.p114 === "¡ ") {this.setState({p114: "! "});}
    if (this.state.p114 === "! ") {this.setState({p114: "¿ "});}
    if (this.state.p114 === "¿ ") {this.setState({p114: "? "});}
    if (this.state.p114 === "? ") {this.setState({p114: " "});}
  }
  p115() {
    if (this.state.p115 === "en") {
      this.setState({p115: "En"});
    } else {
      this.setState({p115: "en"});
    }
  }
  p116() {
    if (this.state.p116 === " ") {this.setState({p116: ", "});}
    if (this.state.p116 === ", ") {this.setState({p116: "; "});}
    if (this.state.p116 === "; ") {this.setState({p116: ": "});}
    if (this.state.p116 === ": ") {this.setState({p116: "( "});}
    if (this.state.p116 === "( ") {this.setState({p116: ") "});}
    if (this.state.p116 === ") ") {this.setState({p116: "¡ "});}
    if (this.state.p116 === "¡ ") {this.setState({p116: "! "});}
    if (this.state.p116 === "! ") {this.setState({p116: "¿ "});}
    if (this.state.p116 === "¿ ") {this.setState({p116: "? "});}
    if (this.state.p116 === "? ") {this.setState({p116: " "});}
  }
  p117() {
    if (this.state.p117 === "una") {
      this.setState({p117: "Una"});
    } else {
      this.setState({p117: "una"});
    }
  }
  p118() {
    if (this.state.p118 === " ") {this.setState({p118: ", "});}
    if (this.state.p118 === ", ") {this.setState({p118: "; "});}
    if (this.state.p118 === "; ") {this.setState({p118: ": "});}
    if (this.state.p118 === ": ") {this.setState({p118: "( "});}
    if (this.state.p118 === "( ") {this.setState({p118: ") "});}
    if (this.state.p118 === ") ") {this.setState({p118: "¡ "});}
    if (this.state.p118 === "¡ ") {this.setState({p118: "! "});}
    if (this.state.p118 === "! ") {this.setState({p118: "¿ "});}
    if (this.state.p118 === "¿ ") {this.setState({p118: "? "});}
    if (this.state.p118 === "? ") {this.setState({p118: " "});}
  }
  p119() {
    if (this.state.p119 === "clara") {
      this.setState({p119: "Clara"});
    } else {
      this.setState({p119: "clara"});
    }
  }
  p120() {
    if (this.state.p120 === " ") {this.setState({p120: ", "});}
    if (this.state.p120 === ", ") {this.setState({p120: "; "});}
    if (this.state.p120 === "; ") {this.setState({p120: ": "});}
    if (this.state.p120 === ": ") {this.setState({p120: "( "});}
    if (this.state.p120 === "( ") {this.setState({p120: ") "});}
    if (this.state.p120 === ") ") {this.setState({p120: "¡ "});}
    if (this.state.p120 === "¡ ") {this.setState({p120: "! "});}
    if (this.state.p120 === "! ") {this.setState({p120: "¿ "});}
    if (this.state.p120 === "¿ ") {this.setState({p120: "? "});}
    if (this.state.p120 === "? ") {this.setState({p120: " "});}
  }
  p121() {
    if (this.state.p121 === "mirada") {
      this.setState({p121: "Mirada"});
    } else {
      this.setState({p121: "mirada"});
    }
  }
  p122() {
    if (this.state.p122 === " ") {this.setState({p122: ", "});}
    if (this.state.p122 === ", ") {this.setState({p122: "; "});}
    if (this.state.p122 === "; ") {this.setState({p122: ". "});}
    if (this.state.p122 === ". ") {this.setState({p122: "( "});}
    if (this.state.p122 === "( ") {this.setState({p122: ") "});}
    if (this.state.p122 === ") ") {this.setState({p122: "¡ "});}
    if (this.state.p122 === "¡ ") {this.setState({p122: "! "});}
    if (this.state.p122 === "! ") {this.setState({p122: "¿ "});}
    if (this.state.p122 === "¿ ") {this.setState({p122: "? "});}
    if (this.state.p122 === "? ") {this.setState({p122: " "});}
  }
  p123() {
    if (this.state.p123 === "unos") {
      this.setState({p123: "Unos"});
    } else {
      this.setState({p123: "unos"});
    }
  }
  p124() {
  	if (this.state.p124 === " ") {this.setState({p124: ", "});}
  	if (this.state.p124 === ", ") {this.setState({p124: "; "});}
  	if (this.state.p124 === "; ") {this.setState({p124: ": "});}
  	if (this.state.p124 === ": ") {this.setState({p124: "( "});}
  	if (this.state.p124 === "( ") {this.setState({p124: ") "});}
  	if (this.state.p124 === ") ") {this.setState({p124: "¡ "});}
  	if (this.state.p124 === "¡ ") {this.setState({p124: "! "});}
  	if (this.state.p124 === "! ") {this.setState({p124: "¿ "});}
  	if (this.state.p124 === "¿ ") {this.setState({p124: "? "});}
  	if (this.state.p124 === "? ") {this.setState({p124: " "});}
  }
  p125() {
  	if (this.state.p125 === "días") {
  		this.setState({p125: "Días"});
  	} else {
  		this.setState({p125: "días"});
  	}
  }
  p126() {
  	if (this.state.p126 === " ") {this.setState({p126: ", "});}
  	if (this.state.p126 === ", ") {this.setState({p126: "; "});}
  	if (this.state.p126 === "; ") {this.setState({p126: ": "});}
  	if (this.state.p126 === ": ") {this.setState({p126: "( "});}
  	if (this.state.p126 === "( ") {this.setState({p126: ") "});}
  	if (this.state.p126 === ") ") {this.setState({p126: "¡ "});}
  	if (this.state.p126 === "¡ ") {this.setState({p126: "! "});}
  	if (this.state.p126 === "! ") {this.setState({p126: "¿ "});}
  	if (this.state.p126 === "¿ ") {this.setState({p126: "? "});}
  	if (this.state.p126 === "? ") {this.setState({p126: " "});}
  }
  p127() {
  	if (this.state.p127 === "más") {
  		this.setState({p127: "Más"});
  	} else {
  		this.setState({p127: "más"});
  	}
  }
  p128() {
  	if (this.state.p128 === " ") {this.setState({p128: ", "});}
  	if (this.state.p128 === ", ") {this.setState({p128: "; "});}
  	if (this.state.p128 === "; ") {this.setState({p128: ": "});}
  	if (this.state.p128 === ": ") {this.setState({p128: "( "});}
  	if (this.state.p128 === "( ") {this.setState({p128: ") "});}
  	if (this.state.p128 === ") ") {this.setState({p128: "¡ "});}
  	if (this.state.p128 === "¡ ") {this.setState({p128: "! "});}
  	if (this.state.p128 === "! ") {this.setState({p128: "¿ "});}
  	if (this.state.p128 === "¿ ") {this.setState({p128: "? "});}
  	if (this.state.p128 === "? ") {this.setState({p128: " "});}
  }
  p129() {
  	if (this.state.p129 === "tarde") {
  		this.setState({p129: "Tarde"});
  	} else {
  		this.setState({p129: "tarde"});
  	}
  }
  p130() {
  	if (this.state.p130 === " ") {this.setState({p130: ", "});}
  	if (this.state.p130 === ", ") {this.setState({p130: "; "});}
  	if (this.state.p130 === "; ") {this.setState({p130: ": "});}
  	if (this.state.p130 === ": ") {this.setState({p130: "( "});}
  	if (this.state.p130 === "( ") {this.setState({p130: ") "});}
  	if (this.state.p130 === ") ") {this.setState({p130: "¡ "});}
  	if (this.state.p130 === "¡ ") {this.setState({p130: "! "});}
  	if (this.state.p130 === "! ") {this.setState({p130: "¿ "});}
  	if (this.state.p130 === "¿ ") {this.setState({p130: "? "});}
  	if (this.state.p130 === "? ") {this.setState({p130: " "});}
  }
  p131() {
  	if (this.state.p131 === "volví") {
  		this.setState({p131: "Volví"});
  	} else {
  		this.setState({p131: "volví"});
  	}
  }
  p132() {
  	if (this.state.p132 === " ") {this.setState({p132: ", "});}
  	if (this.state.p132 === ", ") {this.setState({p132: "; "});}
  	if (this.state.p132 === "; ") {this.setState({p132: ": "});}
  	if (this.state.p132 === ": ") {this.setState({p132: "( "});}
  	if (this.state.p132 === "( ") {this.setState({p132: ") "});}
  	if (this.state.p132 === ") ") {this.setState({p132: "¡ "});}
  	if (this.state.p132 === "¡ ") {this.setState({p132: "! "});}
  	if (this.state.p132 === "! ") {this.setState({p132: "¿ "});}
  	if (this.state.p132 === "¿ ") {this.setState({p132: "? "});}
  	if (this.state.p132 === "? ") {this.setState({p132: " "});}
  }
  p133() {
  	if (this.state.p133 === "para") {
  		this.setState({p133: "Para"});
  	} else {
  		this.setState({p133: "para"});
  	}
  }
  p134() {
  	if (this.state.p134 === " ") {this.setState({p134: ", "});}
  	if (this.state.p134 === ", ") {this.setState({p134: "; "});}
  	if (this.state.p134 === "; ") {this.setState({p134: ": "});}
  	if (this.state.p134 === ": ") {this.setState({p134: "( "});}
  	if (this.state.p134 === "( ") {this.setState({p134: ") "});}
  	if (this.state.p134 === ") ") {this.setState({p134: "¡ "});}
  	if (this.state.p134 === "¡ ") {this.setState({p134: "! "});}
  	if (this.state.p134 === "! ") {this.setState({p134: "¿ "});}
  	if (this.state.p134 === "¿ ") {this.setState({p134: "? "});}
  	if (this.state.p134 === "? ") {this.setState({p134: " "});}
  }
  p135() {
  	if (this.state.p135 === "comprar") {
  		this.setState({p135: "Comprar"});
  	} else {
  		this.setState({p135: "comprar"});
  	}
  }
  p136() {
  	if (this.state.p136 === " ") {this.setState({p136: ", "});}
  	if (this.state.p136 === ", ") {this.setState({p136: "; "});}
  	if (this.state.p136 === "; ") {this.setState({p136: ": "});}
  	if (this.state.p136 === ": ") {this.setState({p136: "( "});}
  	if (this.state.p136 === "( ") {this.setState({p136: ") "});}
  	if (this.state.p136 === ") ") {this.setState({p136: "¡ "});}
  	if (this.state.p136 === "¡ ") {this.setState({p136: "! "});}
  	if (this.state.p136 === "! ") {this.setState({p136: "¿ "});}
  	if (this.state.p136 === "¿ ") {this.setState({p136: "? "});}
  	if (this.state.p136 === "? ") {this.setState({p136: " "});}
  }
  p137() {
  	if (this.state.p137 === "la") {
  		this.setState({p137: "La"});
  	} else {
  		this.setState({p137: "la"});
  	}
  }
  p138() {
  	if (this.state.p138 === " ") {this.setState({p138: ", "});}
  	if (this.state.p138 === ", ") {this.setState({p138: "; "});}
  	if (this.state.p138 === "; ") {this.setState({p138: ": "});}
  	if (this.state.p138 === ": ") {this.setState({p138: "( "});}
  	if (this.state.p138 === "( ") {this.setState({p138: ") "});}
  	if (this.state.p138 === ") ") {this.setState({p138: "¡ "});}
  	if (this.state.p138 === "¡ ") {this.setState({p138: "! "});}
  	if (this.state.p138 === "! ") {this.setState({p138: "¿ "});}
  	if (this.state.p138 === "¿ ") {this.setState({p138: "? "});}
  	if (this.state.p138 === "? ") {this.setState({p138: " "});}
  }
  p139() {
  	if (this.state.p139 === "migala") {
  		this.setState({p139: "Migala"});
  	} else {
  		this.setState({p139: "migala"});
  	}
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

        {this.state.p61 === "me" &&
          <button id="txtBut" onClick={this.p61.bind(this)}>me</button>
        }
        {this.state.p61 === "Me" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p61.bind(this)}>Me</button>
        }
        {this.state.p61 === "Me" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p61.bind(this)}><span style={{color:"red"}}>M</span>e</button>
        }

        {this.state.p62 === " " &&
          <button id="txtBut" onClick={this.p62.bind(this)}>&nbsp;</button>
        }
        {this.state.p62 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p62.bind(this)}>,&nbsp;</button>
        }
        {this.state.p62 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p62.bind(this)}>;&nbsp;</button>
        }
        {this.state.p62 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p62.bind(this)}>:&nbsp;</button>
        }
        {this.state.p62 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p62.bind(this)}>(&nbsp;</button>
        }
        {this.state.p62 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p62.bind(this)}>)&nbsp;</button>
        }
        {this.state.p62 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p62.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p62 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p62.bind(this)}>!&nbsp;</button>
        }
        {this.state.p62 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p62.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p62 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p62.bind(this)}>?&nbsp;</button>
        }
        {this.state.p62 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p62.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p62 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p62.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p62 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p62.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p62 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p62.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p62 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p62.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p62 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p62.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p62 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p62.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p62 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p62.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p62 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p62.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p63 === "di" &&
          <button id="txtBut" onClick={this.p63.bind(this)}>di</button>
        }
        {this.state.p63 === "Di" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p63.bind(this)}>Di</button>
        }
        {this.state.p63 === "Di" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p63.bind(this)}><span style={{color:"red"}}>D</span>i</button>
        }

        {this.state.p64 === " " &&
          <button id="txtBut" onClick={this.p64.bind(this)}>&nbsp;</button>
        }
        {this.state.p64 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p64.bind(this)}>,&nbsp;</button>
        }
        {this.state.p64 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p64.bind(this)}>;&nbsp;</button>
        }
        {this.state.p64 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p64.bind(this)}>:&nbsp;</button>
        }
        {this.state.p64 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p64.bind(this)}>(&nbsp;</button>
        }
        {this.state.p64 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p64.bind(this)}>)&nbsp;</button>
        }
        {this.state.p64 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p64.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p64 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p64.bind(this)}>!&nbsp;</button>
        }
        {this.state.p64 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p64.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p64 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p64.bind(this)}>?&nbsp;</button>
        }
        {this.state.p64 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p64.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p64 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p64.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p64 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p64.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p64 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p64.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p64 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p64.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p64 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p64.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p64 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p64.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p64 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p64.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p64 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p64.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p65 === "cuenta" &&
          <button id="txtBut" onClick={this.p65.bind(this)}>cuenta</button>
        }
        {this.state.p65 === "Cuenta" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p65.bind(this)}>Cuenta</button>
        }
        {this.state.p65 === "Cuenta" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p65.bind(this)}><span style={{color:"red"}}>C</span>uenta</button>
        }

        {this.state.p66 === " " &&
          <button id="txtBut" onClick={this.p66.bind(this)}>&nbsp;</button>
        }
        {this.state.p66 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p66.bind(this)}>,&nbsp;</button>
        }
        {this.state.p66 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p66.bind(this)}>;&nbsp;</button>
        }
        {this.state.p66 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p66.bind(this)}>:&nbsp;</button>
        }
        {this.state.p66 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p66.bind(this)}>(&nbsp;</button>
        }
        {this.state.p66 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p66.bind(this)}>)&nbsp;</button>
        }
        {this.state.p66 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p66.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p66 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p66.bind(this)}>!&nbsp;</button>
        }
        {this.state.p66 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p66.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p66 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p66.bind(this)}>?&nbsp;</button>
        }
        {this.state.p66 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p66.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p66 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p66.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p66 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p66.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p66 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p66.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p66 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p66.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p66 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p66.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p66 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p66.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p66 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p66.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p66 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p66.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p67 === "de" &&
          <button id="txtBut" onClick={this.p67.bind(this)}>de</button>
        }
        {this.state.p67 === "De" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p67.bind(this)}>De</button>
        }
        {this.state.p67 === "De" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p67.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p68 === " " &&
          <button id="txtBut" onClick={this.p68.bind(this)}>&nbsp;</button>
        }
        {this.state.p68 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p68.bind(this)}>,&nbsp;</button>
        }
        {this.state.p68 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p68.bind(this)}>;&nbsp;</button>
        }
        {this.state.p68 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p68.bind(this)}>:&nbsp;</button>
        }
        {this.state.p68 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p68.bind(this)}>(&nbsp;</button>
        }
        {this.state.p68 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p68.bind(this)}>)&nbsp;</button>
        }
        {this.state.p68 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p68.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p68 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p68.bind(this)}>!&nbsp;</button>
        }
        {this.state.p68 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p68.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p68 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p68.bind(this)}>?&nbsp;</button>
        }
        {this.state.p68 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p68.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p68 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p68.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p68 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p68.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p68 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p68.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p68 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p68.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p68 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p68.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p68 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p68.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p68 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p68.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p68 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p68.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p69 === "que" &&
          <button id="txtBut" onClick={this.p69.bind(this)}>que</button>
        }
        {this.state.p69 === "Que" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p69.bind(this)}>Que</button>
        }
        {this.state.p69 === "Que" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p69.bind(this)}><span style={{color:"red"}}>Q</span>ue</button>
        }

        {this.state.p70 === " " &&
          <button id="txtBut" onClick={this.p70.bind(this)}>&nbsp;</button>
        }
        {this.state.p70 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p70.bind(this)}>,&nbsp;</button>
        }
        {this.state.p70 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p70.bind(this)}>;&nbsp;</button>
        }
        {this.state.p70 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p70.bind(this)}>:&nbsp;</button>
        }
        {this.state.p70 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p70.bind(this)}>(&nbsp;</button>
        }
        {this.state.p70 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p70.bind(this)}>)&nbsp;</button>
        }
        {this.state.p70 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p70.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p70 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p70.bind(this)}>!&nbsp;</button>
        }
        {this.state.p70 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p70.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p70 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p70.bind(this)}>?&nbsp;</button>
        }
        {this.state.p70 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p70.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p70 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p70.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p70 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p70.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p70 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p70.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p70 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p70.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p70 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p70.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p70 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p70.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p70 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p70.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p70 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p70.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p71 === "la" &&
          <button id="txtBut" onClick={this.p71.bind(this)}>la</button>
        }
        {this.state.p71 === "La" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p71.bind(this)}>La</button>
        }
        {this.state.p71 === "La" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p71.bind(this)}><span style={{color:"red"}}>L</span>a</button>
        }

        {this.state.p72 === " " &&
          <button id="txtBut" onClick={this.p72.bind(this)}>&nbsp;</button>
        }
        {this.state.p72 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p72.bind(this)}>,&nbsp;</button>
        }
        {this.state.p72 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p72.bind(this)}>;&nbsp;</button>
        }
        {this.state.p72 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p72.bind(this)}>:&nbsp;</button>
        }
        {this.state.p72 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p72.bind(this)}>(&nbsp;</button>
        }
        {this.state.p72 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p72.bind(this)}>)&nbsp;</button>
        }
        {this.state.p72 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p72.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p72 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p72.bind(this)}>!&nbsp;</button>
        }
        {this.state.p72 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p72.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p72 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p72.bind(this)}>?&nbsp;</button>
        }
        {this.state.p72 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p72.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p72 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p72.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p72 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p72.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p72 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p72.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p72 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p72.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p72 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p72.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p72 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p72.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p72 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p72.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p72 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p72.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p73 === "repulsiva" &&
          <button id="txtBut" onClick={this.p73.bind(this)}>repulsiva</button>
        }
        {this.state.p73 === "Repulsiva" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p73.bind(this)}>Repulsiva</button>
        }
        {this.state.p73 === "Repulsiva" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p73.bind(this)}><span style={{color:"red"}}>R</span>epulsiva</button>
        }

        {this.state.p74 === " " &&
          <button id="txtBut" onClick={this.p74.bind(this)}>&nbsp;</button>
        }
        {this.state.p74 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p74.bind(this)}>,&nbsp;</button>
        }
        {this.state.p74 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p74.bind(this)}>;&nbsp;</button>
        }
        {this.state.p74 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p74.bind(this)}>:&nbsp;</button>
        }
        {this.state.p74 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p74.bind(this)}>(&nbsp;</button>
        }
        {this.state.p74 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p74.bind(this)}>)&nbsp;</button>
        }
        {this.state.p74 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p74.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p74 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p74.bind(this)}>!&nbsp;</button>
        }
        {this.state.p74 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p74.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p74 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p74.bind(this)}>?&nbsp;</button>
        }
        {this.state.p74 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p74.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p74 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p74.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p74 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p74.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p74 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p74.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p74 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p74.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p74 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p74.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p74 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p74.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p74 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p74.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p74 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p74.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p75 === "alimaña" &&
          <button id="txtBut" onClick={this.p75.bind(this)}>alimaña</button>
        }
        {this.state.p75 === "Alimaña" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p75.bind(this)}>Alimaña</button>
        }
        {this.state.p75 === "Alimaña" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p75.bind(this)}><span style={{color:"red"}}>A</span>limaña</button>
        }

        {this.state.p76 === " " &&
          <button id="txtBut" onClick={this.p76.bind(this)}>&nbsp;</button>
        }
        {this.state.p76 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p76.bind(this)}>,&nbsp;</button>
        }
        {this.state.p76 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p76.bind(this)}>;&nbsp;</button>
        }
        {this.state.p76 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p76.bind(this)}>:&nbsp;</button>
        }
        {this.state.p76 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p76.bind(this)}>(&nbsp;</button>
        }
        {this.state.p76 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p76.bind(this)}>)&nbsp;</button>
        }
        {this.state.p76 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p76.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p76 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p76.bind(this)}>!&nbsp;</button>
        }
        {this.state.p76 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p76.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p76 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p76.bind(this)}>?&nbsp;</button>
        }
        {this.state.p76 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p76.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p76 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p76.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p76 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p76.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p76 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p76.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p76 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p76.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p76 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p76.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p76 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p76.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p76 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p76.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p76 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p76.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p77 === "era" &&
          <button id="txtBut" onClick={this.p77.bind(this)}>era</button>
        }
        {this.state.p77 === "Era" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p77.bind(this)}>Era</button>
        }
        {this.state.p77 === "Era" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p77.bind(this)}><span style={{color:"red"}}>E</span>ra</button>
        }

        {this.state.p78 === " " &&
          <button id="txtBut" onClick={this.p78.bind(this)}>&nbsp;</button>
        }
        {this.state.p78 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p78.bind(this)}>,&nbsp;</button>
        }
        {this.state.p78 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p78.bind(this)}>;&nbsp;</button>
        }
        {this.state.p78 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p78.bind(this)}>:&nbsp;</button>
        }
        {this.state.p78 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p78.bind(this)}>(&nbsp;</button>
        }
        {this.state.p78 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p78.bind(this)}>)&nbsp;</button>
        }
        {this.state.p78 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p78.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p78 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p78.bind(this)}>!&nbsp;</button>
        }
        {this.state.p78 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p78.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p78 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p78.bind(this)}>?&nbsp;</button>
        }
        {this.state.p78 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p78.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p78 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p78.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p78 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p78.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p78 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p78.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p78 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p78.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p78 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p78.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p78 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p78.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p78 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p78.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p78 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p78.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p79 === "lo" &&
          <button id="txtBut" onClick={this.p79.bind(this)}>lo</button>
        }
        {this.state.p79 === "Lo" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p79.bind(this)}>Lo</button>
        }
        {this.state.p79 === "Lo" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p79.bind(this)}><span style={{color:"red"}}>L</span>o</button>
        }

        {this.state.p80 === " " &&
          <button id="txtBut" onClick={this.p80.bind(this)}>&nbsp;</button>
        }
        {this.state.p80 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p80.bind(this)}>,&nbsp;</button>
        }
        {this.state.p80 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p80.bind(this)}>;&nbsp;</button>
        }
        {this.state.p80 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p80.bind(this)}>:&nbsp;</button>
        }
        {this.state.p80 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p80.bind(this)}>(&nbsp;</button>
        }
        {this.state.p80 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p80.bind(this)}>)&nbsp;</button>
        }
        {this.state.p80 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p80.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p80 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p80.bind(this)}>!&nbsp;</button>
        }
        {this.state.p80 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p80.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p80 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p80.bind(this)}>?&nbsp;</button>
        }
        {this.state.p80 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p80.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p80 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p80.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p80 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p80.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p80 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p80.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p80 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p80.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p80 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p80.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p80 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p80.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p80 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p80.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p80 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p80.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p81 === "más" &&
          <button id="txtBut" onClick={this.p81.bind(this)}>más</button>
        }
        {this.state.p81 === "Más" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p81.bind(this)}>Más</button>
        }
        {this.state.p81 === "Más" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p81.bind(this)}><span style={{color:"red"}}>M</span>ás</button>
        }

        {this.state.p82 === " " &&
          <button id="txtBut" onClick={this.p82.bind(this)}>&nbsp;</button>
        }
        {this.state.p82 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p82.bind(this)}>,&nbsp;</button>
        }
        {this.state.p82 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p82.bind(this)}>;&nbsp;</button>
        }
        {this.state.p82 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p82.bind(this)}>:&nbsp;</button>
        }
        {this.state.p82 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p82.bind(this)}>(&nbsp;</button>
        }
        {this.state.p82 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p82.bind(this)}>)&nbsp;</button>
        }
        {this.state.p82 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p82.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p82 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p82.bind(this)}>!&nbsp;</button>
        }
        {this.state.p82 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p82.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p82 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p82.bind(this)}>?&nbsp;</button>
        }
        {this.state.p82 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p82.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p82 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p82.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p82 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p82.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p82 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p82.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p82 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p82.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p82 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p82.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p82 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p82.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p82 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p82.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p82 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p82.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p83 === "atroz" &&
          <button id="txtBut" onClick={this.p83.bind(this)}>atroz</button>
        }
        {this.state.p83 === "Atroz" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p83.bind(this)}>Atroz</button>
        }
        {this.state.p83 === "Atroz" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p83.bind(this)}><span style={{color:"red"}}>A</span>troz</button>
        }

        {this.state.p84 === " " &&
          <button id="txtBut" onClick={this.p84.bind(this)}>&nbsp;</button>
        }
        {this.state.p84 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p84.bind(this)}>,&nbsp;</button>
        }
        {this.state.p84 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p84.bind(this)}>;&nbsp;</button>
        }
        {this.state.p84 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p84.bind(this)}>:&nbsp;</button>
        }
        {this.state.p84 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p84.bind(this)}>(&nbsp;</button>
        }
        {this.state.p84 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p84.bind(this)}>)&nbsp;</button>
        }
        {this.state.p84 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p84.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p84 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p84.bind(this)}>!&nbsp;</button>
        }
        {this.state.p84 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p84.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p84 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p84.bind(this)}>?&nbsp;</button>
        }
        {this.state.p84 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p84.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p84 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p84.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p84 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p84.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p84 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p84.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p84 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p84.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p84 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p84.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p84 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p84.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p84 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p84.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p84 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p84.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p85 === "que" &&
          <button id="txtBut" onClick={this.p85.bind(this)}>que</button>
        }
        {this.state.p85 === "Que" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p85.bind(this)}>Que</button>
        }
        {this.state.p85 === "Que" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p85.bind(this)}><span style={{color:"red"}}>Q</span>ue</button>
        }

        {this.state.p86 === " " &&
          <button id="txtBut" onClick={this.p86.bind(this)}>&nbsp;</button>
        }
        {this.state.p86 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p86.bind(this)}>,&nbsp;</button>
        }
        {this.state.p86 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p86.bind(this)}>;&nbsp;</button>
        }
        {this.state.p86 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p86.bind(this)}>:&nbsp;</button>
        }
        {this.state.p86 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p86.bind(this)}>(&nbsp;</button>
        }
        {this.state.p86 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p86.bind(this)}>)&nbsp;</button>
        }
        {this.state.p86 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p86.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p86 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p86.bind(this)}>!&nbsp;</button>
        }
        {this.state.p86 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p86.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p86 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p86.bind(this)}>?&nbsp;</button>
        }
        {this.state.p86 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p86.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p86 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p86.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p86 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p86.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p86 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p86.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p86 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p86.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p86 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p86.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p86 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p86.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p86 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p86.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p86 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p86.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p87 === "podía" &&
          <button id="txtBut" onClick={this.p87.bind(this)}>podía</button>
        }
        {this.state.p87 === "Podía" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p87.bind(this)}>Podía</button>
        }
        {this.state.p87 === "Podía" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p87.bind(this)}><span style={{color:"red"}}>P</span>odía</button>
        }

        {this.state.p88 === " " &&
          <button id="txtBut" onClick={this.p88.bind(this)}>&nbsp;</button>
        }
        {this.state.p88 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p88.bind(this)}>,&nbsp;</button>
        }
        {this.state.p88 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p88.bind(this)}>;&nbsp;</button>
        }
        {this.state.p88 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p88.bind(this)}>:&nbsp;</button>
        }
        {this.state.p88 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p88.bind(this)}>(&nbsp;</button>
        }
        {this.state.p88 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p88.bind(this)}>)&nbsp;</button>
        }
        {this.state.p88 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p88.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p88 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p88.bind(this)}>!&nbsp;</button>
        }
        {this.state.p88 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p88.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p88 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p88.bind(this)}>?&nbsp;</button>
        }
        {this.state.p88 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p88.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p88 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p88.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p88 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p88.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p88 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p88.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p88 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p88.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p88 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p88.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p88 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p88.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p88 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p88.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p88 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p88.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p89 === "depararme" &&
          <button id="txtBut" onClick={this.p89.bind(this)}>depararme</button>
        }
        {this.state.p89 === "Depararme" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p89.bind(this)}>Depararme</button>
        }
        {this.state.p89 === "Depararme" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p89.bind(this)}><span style={{color:"red"}}>D</span>epararme</button>
        }

        {this.state.p90 === " " &&
          <button id="txtBut" onClick={this.p90.bind(this)}>&nbsp;</button>
        }
        {this.state.p90 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p90.bind(this)}>,&nbsp;</button>
        }
        {this.state.p90 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p90.bind(this)}>;&nbsp;</button>
        }
        {this.state.p90 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p90.bind(this)}>:&nbsp;</button>
        }
        {this.state.p90 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p90.bind(this)}>(&nbsp;</button>
        }
        {this.state.p90 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p90.bind(this)}>)&nbsp;</button>
        }
        {this.state.p90 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p90.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p90 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p90.bind(this)}>!&nbsp;</button>
        }
        {this.state.p90 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p90.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p90 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p90.bind(this)}>?&nbsp;</button>
        }
        {this.state.p90 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p90.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p90 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p90.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p90 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p90.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p90 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p90.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p90 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p90.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p90 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p90.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p90 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p90.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p90 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p90.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p90 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p90.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p91 === "el" &&
          <button id="txtBut" onClick={this.p91.bind(this)}>el</button>
        }
        {this.state.p91 === "El" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p91.bind(this)}>El</button>
        }
        {this.state.p91 === "El" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p91.bind(this)}><span style={{color:"red"}}>E</span>l</button>
        }

        {this.state.p92 === " " &&
          <button id="txtBut" onClick={this.p92.bind(this)}>&nbsp;</button>
        }
        {this.state.p92 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p92.bind(this)}>,&nbsp;</button>
        }
        {this.state.p92 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p92.bind(this)}>;&nbsp;</button>
        }
        {this.state.p92 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p92.bind(this)}>:&nbsp;</button>
        }
        {this.state.p92 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p92.bind(this)}>(&nbsp;</button>
        }
        {this.state.p92 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p92.bind(this)}>)&nbsp;</button>
        }
        {this.state.p92 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p92.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p92 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p92.bind(this)}>!&nbsp;</button>
        }
        {this.state.p92 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p92.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p92 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p92.bind(this)}>?&nbsp;</button>
        }
        {this.state.p92 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p92.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p92 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p92.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p92 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p92.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p92 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p92.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p92 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p92.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p92 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p92.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p92 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p92.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p92 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p92.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p92 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p92.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p93 === "destino" &&
          <button id="txtBut" onClick={this.p93.bind(this)}>destino</button>
        }
        {this.state.p93 === "Destino" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p93.bind(this)}>Destino</button>
        }
        {this.state.p93 === "Destino" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p93.bind(this)}><span style={{color:"red"}}>D</span>estino</button>
        }

        {this.state.p94 === " " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p94.bind(this)}>&nbsp;</button>
        }
        {this.state.p94 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p94.bind(this)}>,&nbsp;</button>
        }
        {this.state.p94 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p94.bind(this)}>;&nbsp;</button>
        }
        {this.state.p94 === ". " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p94.bind(this)}>.&nbsp;</button>
        }
        {this.state.p94 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p94.bind(this)}>(&nbsp;</button>
        }
        {this.state.p94 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p94.bind(this)}>)&nbsp;</button>
        }
        {this.state.p94 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p94.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p94 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p94.bind(this)}>!&nbsp;</button>
        }
        {this.state.p94 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p94.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p94 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p94.bind(this)}>?&nbsp;</button>
        }
        {this.state.p94 === " " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p94.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p94 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p94.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p94 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p94.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p94 === ". " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p94.bind(this)}><span style={{color:"green"}}>.</span>&nbsp;</button>
        }
        {this.state.p94 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p94.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p94 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p94.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p94 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p94.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p94 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p94.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p94 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p94.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p94 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p94.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p95 === "Peor" &&
          <button id="txtBut" onClick={this.p95.bind(this)}>Peor</button>
        }
        {this.state.p95 === "peor" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p95.bind(this)}>peor</button>
        }
        {this.state.p95 === "peor" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p95.bind(this)}><span style={{color:"red"}}>p</span>eor</button>
        }

        {this.state.p96 === " " &&
          <button id="txtBut" onClick={this.p96.bind(this)}>&nbsp;</button>
        }
        {this.state.p96 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p96.bind(this)}>,&nbsp;</button>
        }
        {this.state.p96 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p96.bind(this)}>;&nbsp;</button>
        }
        {this.state.p96 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p96.bind(this)}>:&nbsp;</button>
        }
        {this.state.p96 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p96.bind(this)}>(&nbsp;</button>
        }
        {this.state.p96 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p96.bind(this)}>)&nbsp;</button>
        }
        {this.state.p96 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p96.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p96 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p96.bind(this)}>!&nbsp;</button>
        }
        {this.state.p96 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p96.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p96 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p96.bind(this)}>?&nbsp;</button>
        }
        {this.state.p96 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p96.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p96 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p96.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p96 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p96.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p96 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p96.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p96 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p96.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p96 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p96.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p96 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p96.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p96 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p96.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p96 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p96.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p97 === "que" &&
          <button id="txtBut" onClick={this.p97.bind(this)}>que</button>
        }
        {this.state.p97 === "Que" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p97.bind(this)}>Que</button>
        }
        {this.state.p97 === "Que" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p97.bind(this)}><span style={{color:"red"}}>Q</span>ue</button>
        }

        {this.state.p98 === " " &&
          <button id="txtBut" onClick={this.p98.bind(this)}>&nbsp;</button>
        }
        {this.state.p98 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p98.bind(this)}>,&nbsp;</button>
        }
        {this.state.p98 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p98.bind(this)}>;&nbsp;</button>
        }
        {this.state.p98 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p98.bind(this)}>:&nbsp;</button>
        }
        {this.state.p98 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p98.bind(this)}>(&nbsp;</button>
        }
        {this.state.p98 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p98.bind(this)}>)&nbsp;</button>
        }
        {this.state.p98 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p98.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p98 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p98.bind(this)}>!&nbsp;</button>
        }
        {this.state.p98 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p98.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p98 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p98.bind(this)}>?&nbsp;</button>
        }
        {this.state.p98 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p98.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p98 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p98.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p98 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p98.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p98 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p98.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p98 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p98.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p98 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p98.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p98 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p98.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p98 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p98.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p98 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p98.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p99 === "el" &&
          <button id="txtBut" onClick={this.p99.bind(this)}>el</button>
        }
        {this.state.p99 === "El" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p99.bind(this)}>El</button>
        }
        {this.state.p99 === "El" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p99.bind(this)}><span style={{color:"red"}}>E</span>l</button>
        }

        {this.state.p100 === " " &&
          <button id="txtBut" onClick={this.p100.bind(this)}>&nbsp;</button>
        }
        {this.state.p100 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p100.bind(this)}>,&nbsp;</button>
        }
        {this.state.p100 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p100.bind(this)}>;&nbsp;</button>
        }
        {this.state.p100 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p100.bind(this)}>:&nbsp;</button>
        }
        {this.state.p100 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p100.bind(this)}>(&nbsp;</button>
        }
        {this.state.p100 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p100.bind(this)}>)&nbsp;</button>
        }
        {this.state.p100 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p100.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p100 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p100.bind(this)}>!&nbsp;</button>
        }
        {this.state.p100 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p100.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p100 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p100.bind(this)}>?&nbsp;</button>
        }
        {this.state.p100 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p100.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p100 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p100.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p100 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p100.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p100 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p100.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p100 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p100.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p100 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p100.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p100 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p100.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p100 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p100.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p100 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p100.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p101 === "desprecio" &&
          <button id="txtBut" onClick={this.p101.bind(this)}>desprecio</button>
        }
        {this.state.p101 === "Desprecio" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p101.bind(this)}>Desprecio</button>
        }
        {this.state.p101 === "Desprecio" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p101.bind(this)}><span style={{color:"red"}}>D</span>esprecio</button>
        }

        {this.state.p102 === " " &&
          <button id="txtBut" onClick={this.p102.bind(this)}>&nbsp;</button>
        }
        {this.state.p102 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p102.bind(this)}>,&nbsp;</button>
        }
        {this.state.p102 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p102.bind(this)}>;&nbsp;</button>
        }
        {this.state.p102 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p102.bind(this)}>:&nbsp;</button>
        }
        {this.state.p102 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p102.bind(this)}>(&nbsp;</button>
        }
        {this.state.p102 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p102.bind(this)}>)&nbsp;</button>
        }
        {this.state.p102 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p102.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p102 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p102.bind(this)}>!&nbsp;</button>
        }
        {this.state.p102 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p102.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p102 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p102.bind(this)}>?&nbsp;</button>
        }
        {this.state.p102 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p102.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p102 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p102.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p102 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p102.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p102 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p102.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p102 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p102.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p102 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p102.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p102 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p102.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p102 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p102.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p102 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p102.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p103 === "y" &&
          <button id="txtBut" onClick={this.p103.bind(this)}>y</button>
        }
        {this.state.p103 === "Y" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p103.bind(this)}>Y</button>
        }
        {this.state.p103 === "Y" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p103.bind(this)}><span style={{color:"red"}}>Y</span></button>
        }

        {this.state.p104 === " " &&
          <button id="txtBut" onClick={this.p104.bind(this)}>&nbsp;</button>
        }
        {this.state.p104 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p104.bind(this)}>,&nbsp;</button>
        }
        {this.state.p104 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p104.bind(this)}>;&nbsp;</button>
        }
        {this.state.p104 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p104.bind(this)}>:&nbsp;</button>
        }
        {this.state.p104 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p104.bind(this)}>(&nbsp;</button>
        }
        {this.state.p104 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p104.bind(this)}>)&nbsp;</button>
        }
        {this.state.p104 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p104.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p104 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p104.bind(this)}>!&nbsp;</button>
        }
        {this.state.p104 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p104.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p104 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p104.bind(this)}>?&nbsp;</button>
        }
        {this.state.p104 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p104.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p104 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p104.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p104 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p104.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p104 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p104.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p104 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p104.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p104 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p104.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p104 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p104.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p104 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p104.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p104 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p104.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p105 === "la" &&
          <button id="txtBut" onClick={this.p105.bind(this)}>la</button>
        }
        {this.state.p105 === "La" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p105.bind(this)}>La</button>
        }
        {this.state.p105 === "La" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p105.bind(this)}><span style={{color:"red"}}>L</span>a</button>
        }

        {this.state.p106 === " " &&
          <button id="txtBut" onClick={this.p106.bind(this)}>&nbsp;</button>
        }
        {this.state.p106 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p106.bind(this)}>,&nbsp;</button>
        }
        {this.state.p106 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p106.bind(this)}>;&nbsp;</button>
        }
        {this.state.p106 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p106.bind(this)}>:&nbsp;</button>
        }
        {this.state.p106 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p106.bind(this)}>(&nbsp;</button>
        }
        {this.state.p106 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p106.bind(this)}>)&nbsp;</button>
        }
        {this.state.p106 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p106.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p106 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p106.bind(this)}>!&nbsp;</button>
        }
        {this.state.p106 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p106.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p106 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p106.bind(this)}>?&nbsp;</button>
        }
        {this.state.p106 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p106.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p106 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p106.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p106 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p106.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p106 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p106.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p106 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p106.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p106 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p106.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p106 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p106.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p106 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p106.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p106 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p106.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p107 === "conmiseración" &&
          <button id="txtBut" onClick={this.p107.bind(this)}>conmiseración</button>
        }
        {this.state.p107 === "Conmiseración" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p107.bind(this)}>Conmiseración</button>
        }
        {this.state.p107 === "Conmiseración" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p107.bind(this)}><span style={{color:"red"}}>C</span>onmiseración</button>
        }

        {this.state.p108 === " " &&
          <button id="txtBut" onClick={this.p108.bind(this)}>&nbsp;</button>
        }
        {this.state.p108 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p108.bind(this)}>,&nbsp;</button>
        }
        {this.state.p108 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p108.bind(this)}>;&nbsp;</button>
        }
        {this.state.p108 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p108.bind(this)}>:&nbsp;</button>
        }
        {this.state.p108 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p108.bind(this)}>(&nbsp;</button>
        }
        {this.state.p108 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p108.bind(this)}>)&nbsp;</button>
        }
        {this.state.p108 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p108.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p108 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p108.bind(this)}>!&nbsp;</button>
        }
        {this.state.p108 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p108.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p108 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p108.bind(this)}>?&nbsp;</button>
        }
        {this.state.p108 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p108.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p108 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p108.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p108 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p108.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p108 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p108.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p108 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p108.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p108 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p108.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p108 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p108.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p108 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p108.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p108 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p108.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p109 === "brillando" &&
          <button id="txtBut" onClick={this.p109.bind(this)}>brillando</button>
        }
        {this.state.p109 === "Brillando" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p109.bind(this)}>Brillando</button>
        }
        {this.state.p109 === "Brillando" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p109.bind(this)}><span style={{color:"red"}}>B</span>rillando</button>
        }

        {this.state.p110 === " " &&
          <button id="txtBut" onClick={this.p110.bind(this)}>&nbsp;</button>
        }
        {this.state.p110 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p110.bind(this)}>,&nbsp;</button>
        }
        {this.state.p110 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p110.bind(this)}>;&nbsp;</button>
        }
        {this.state.p110 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p110.bind(this)}>:&nbsp;</button>
        }
        {this.state.p110 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p110.bind(this)}>(&nbsp;</button>
        }
        {this.state.p110 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p110.bind(this)}>)&nbsp;</button>
        }
        {this.state.p110 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p110.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p110 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p110.bind(this)}>!&nbsp;</button>
        }
        {this.state.p110 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p110.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p110 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p110.bind(this)}>?&nbsp;</button>
        }
        {this.state.p110 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p110.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p110 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p110.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p110 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p110.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p110 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p110.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p110 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p110.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p110 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p110.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p110 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p110.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p110 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p110.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p110 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p110.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p111 === "de" &&
          <button id="txtBut" onClick={this.p111.bind(this)}>de</button>
        }
        {this.state.p111 === "De" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p111.bind(this)}>De</button>
        }
        {this.state.p111 === "De" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p111.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p112 === " " &&
          <button id="txtBut" onClick={this.p112.bind(this)}>&nbsp;</button>
        }
        {this.state.p112 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p112.bind(this)}>,&nbsp;</button>
        }
        {this.state.p112 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p112.bind(this)}>;&nbsp;</button>
        }
        {this.state.p112 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p112.bind(this)}>:&nbsp;</button>
        }
        {this.state.p112 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p112.bind(this)}>(&nbsp;</button>
        }
        {this.state.p112 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p112.bind(this)}>)&nbsp;</button>
        }
        {this.state.p112 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p112.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p112 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p112.bind(this)}>!&nbsp;</button>
        }
        {this.state.p112 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p112.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p112 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p112.bind(this)}>?&nbsp;</button>
        }
        {this.state.p112 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p112.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p112 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p112.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p112 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p112.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p112 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p112.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p112 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p112.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p112 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p112.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p112 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p112.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p112 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p112.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p112 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p112.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p113 === "pronto" &&
          <button id="txtBut" onClick={this.p113.bind(this)}>pronto</button>
        }
        {this.state.p113 === "Pronto" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p113.bind(this)}>Pronto</button>
        }
        {this.state.p113 === "Pronto" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p113.bind(this)}><span style={{color:"red"}}>P</span>ronto</button>
        }

        {this.state.p114 === " " &&
          <button id="txtBut" onClick={this.p114.bind(this)}>&nbsp;</button>
        }
        {this.state.p114 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p114.bind(this)}>,&nbsp;</button>
        }
        {this.state.p114 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p114.bind(this)}>;&nbsp;</button>
        }
        {this.state.p114 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p114.bind(this)}>:&nbsp;</button>
        }
        {this.state.p114 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p114.bind(this)}>(&nbsp;</button>
        }
        {this.state.p114 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p114.bind(this)}>)&nbsp;</button>
        }
        {this.state.p114 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p114.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p114 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p114.bind(this)}>!&nbsp;</button>
        }
        {this.state.p114 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p114.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p114 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p114.bind(this)}>?&nbsp;</button>
        }
        {this.state.p114 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p114.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p114 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p114.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p114 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p114.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p114 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p114.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p114 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p114.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p114 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p114.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p114 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p114.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p114 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p114.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p114 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p114.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p115 === "en" &&
          <button id="txtBut" onClick={this.p115.bind(this)}>en</button>
        }
        {this.state.p115 === "En" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p115.bind(this)}>En</button>
        }
        {this.state.p115 === "En" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p115.bind(this)}><span style={{color:"red"}}>E</span>n</button>
        }

        {this.state.p116 === " " &&
          <button id="txtBut" onClick={this.p116.bind(this)}>&nbsp;</button>
        }
        {this.state.p116 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p116.bind(this)}>,&nbsp;</button>
        }
        {this.state.p116 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p116.bind(this)}>;&nbsp;</button>
        }
        {this.state.p116 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p116.bind(this)}>:&nbsp;</button>
        }
        {this.state.p116 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p116.bind(this)}>(&nbsp;</button>
        }
        {this.state.p116 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p116.bind(this)}>)&nbsp;</button>
        }
        {this.state.p116 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p116.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p116 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p116.bind(this)}>!&nbsp;</button>
        }
        {this.state.p116 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p116.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p116 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p116.bind(this)}>?&nbsp;</button>
        }
        {this.state.p116 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p116.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p116 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p116.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p116 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p116.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p116 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p116.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p116 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p116.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p116 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p116.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p116 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p116.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p116 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p116.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p116 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p116.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p117 === "una" &&
          <button id="txtBut" onClick={this.p117.bind(this)}>una</button>
        }
        {this.state.p117 === "Una" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p117.bind(this)}>Una</button>
        }
        {this.state.p117 === "Una" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p117.bind(this)}><span style={{color:"red"}}>U</span>na</button>
        }

        {this.state.p118 === " " &&
          <button id="txtBut" onClick={this.p118.bind(this)}>&nbsp;</button>
        }
        {this.state.p118 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p118.bind(this)}>,&nbsp;</button>
        }
        {this.state.p118 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p118.bind(this)}>;&nbsp;</button>
        }
        {this.state.p118 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p118.bind(this)}>:&nbsp;</button>
        }
        {this.state.p118 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p118.bind(this)}>(&nbsp;</button>
        }
        {this.state.p118 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p118.bind(this)}>)&nbsp;</button>
        }
        {this.state.p118 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p118.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p118 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p118.bind(this)}>!&nbsp;</button>
        }
        {this.state.p118 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p118.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p118 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p118.bind(this)}>?&nbsp;</button>
        }
        {this.state.p118 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p118.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p118 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p118.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p118 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p118.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p118 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p118.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p118 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p118.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p118 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p118.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p118 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p118.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p118 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p118.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p118 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p118.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p119 === "clara" &&
          <button id="txtBut" onClick={this.p119.bind(this)}>clara</button>
        }
        {this.state.p119 === "Clara" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p119.bind(this)}>Clara</button>
        }
        {this.state.p119 === "Clara" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p119.bind(this)}><span style={{color:"red"}}>C</span>lara</button>
        }

        {this.state.p120 === " " &&
          <button id="txtBut" onClick={this.p120.bind(this)}>&nbsp;</button>
        }
        {this.state.p120 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p120.bind(this)}>,&nbsp;</button>
        }
        {this.state.p120 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p120.bind(this)}>;&nbsp;</button>
        }
        {this.state.p120 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p120.bind(this)}>:&nbsp;</button>
        }
        {this.state.p120 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p120.bind(this)}>(&nbsp;</button>
        }
        {this.state.p120 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p120.bind(this)}>)&nbsp;</button>
        }
        {this.state.p120 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p120.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p120 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p120.bind(this)}>!&nbsp;</button>
        }
        {this.state.p120 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p120.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p120 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p120.bind(this)}>?&nbsp;</button>
        }
        {this.state.p120 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p120.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p120 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p120.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p120 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p120.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p120 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p120.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p120 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p120.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p120 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p120.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p120 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p120.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p120 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p120.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p120 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p120.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p121 === "mirada" &&
          <button id="txtBut" onClick={this.p121.bind(this)}>mirada</button>
        }
        {this.state.p121 === "Mirada" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p121.bind(this)}>Mirada</button>
        }
        {this.state.p121 === "Mirada" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p121.bind(this)}><span style={{color:"red"}}>M</span>irada</button>
        }

        {this.state.p122 === " " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p122.bind(this)}>&nbsp;</button>
        }
        {this.state.p122 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p122.bind(this)}>,&nbsp;</button>
        }
        {this.state.p122 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p122.bind(this)}>;&nbsp;</button>
        }
        {this.state.p122 === ". " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p122.bind(this)}>.&nbsp;</button>
        }
        {this.state.p122 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p122.bind(this)}>(&nbsp;</button>
        }
        {this.state.p122 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p122.bind(this)}>)&nbsp;</button>
        }
        {this.state.p122 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p122.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p122 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p122.bind(this)}>!&nbsp;</button>
        }
        {this.state.p122 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p122.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p122 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p122.bind(this)}>?&nbsp;</button>
        }
        {this.state.p122 === " " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p122.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p122 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p122.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p122 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p122.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p122 === ". " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p122.bind(this)}>.&nbsp;</button>
        }
        {this.state.p122 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p122.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p122 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p122.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p122 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p122.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p122 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p122.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p122 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p122.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p122 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p122.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        <br/><br/>

        {this.state.p123 === "unos" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p123.bind(this)}>unos</button>
        }
        {this.state.p123 === "Unos" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p123.bind(this)}>Unos</button>
        }
        {this.state.p123 === "unos" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p123.bind(this)}><span style={{color:"red"}}>u</span>nos</button>
        }
        {this.state.p123 === "Unos" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p123.bind(this)}><span style={{color:"green"}}>U</span>nos</button>
        }

        {this.state.p124 === " " &&
        	<button id="txtBut" onClick={this.p124.bind(this)}>&nbsp;</button>
        }
        {this.state.p124 === ", " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p124.bind(this)}>,&nbsp;</button>
        }
        {this.state.p124 === "; " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p124.bind(this)}>;&nbsp;</button>
        }
        {this.state.p124 === ": " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p124.bind(this)}>:&nbsp;</button>
        }
        {this.state.p124 === "( " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p124.bind(this)}>(&nbsp;</button>
        }
        {this.state.p124 === ") " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p124.bind(this)}>)&nbsp;</button>
        }
        {this.state.p124 === "¡ " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p124.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p124 === "! " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p124.bind(this)}>!&nbsp;</button>
        }
        {this.state.p124 === "¿ " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p124.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p124 === "? " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p124.bind(this)}>?&nbsp;</button>
        }
        {this.state.p124 === ", " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p124.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p124 === "; " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p124.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p124 === ": " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p124.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p124 === "( " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p124.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p124 === ") " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p124.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p124 === "¡ " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p124.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p124 === "! " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p124.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p124 === "¿ " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p124.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p124 === "? " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p124.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }


        {this.state.p125 === "días" &&
        	<button id="txtBut" onClick={this.p125.bind(this)}>días</button>
        }
        {this.state.p125 === "Días" && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p125.bind(this)}>Días</button>
        }
        {this.state.p125 === "Días" && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p125.bind(this)}><span style={{color:"red"}}>D</span>ías</button>
        }

        {this.state.p126 === " " &&
        	<button id="txtBut" onClick={this.p126.bind(this)}>&nbsp;</button>
        }
        {this.state.p126 === ", " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p126.bind(this)}>,&nbsp;</button>
        }
        {this.state.p126 === "; " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p126.bind(this)}>;&nbsp;</button>
        }
        {this.state.p126 === ": " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p126.bind(this)}>:&nbsp;</button>
        }
        {this.state.p126 === "( " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p126.bind(this)}>(&nbsp;</button>
        }
        {this.state.p126 === ") " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p126.bind(this)}>)&nbsp;</button>
        }
        {this.state.p126 === "¡ " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p126.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p126 === "! " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p126.bind(this)}>!&nbsp;</button>
        }
        {this.state.p126 === "¿ " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p126.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p126 === "? " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p126.bind(this)}>?&nbsp;</button>
        }
        {this.state.p126 === ", " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p126.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p126 === "; " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p126.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p126 === ": " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p126.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p126 === "( " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p126.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p126 === ") " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p126.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p126 === "¡ " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p126.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p126 === "! " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p126.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p126 === "¿ " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p126.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p126 === "? " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p126.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p127 === "más" &&
        	<button id="txtBut" onClick={this.p127.bind(this)}>más</button>
        }
        {this.state.p127 === "Más" && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p127.bind(this)}>Más</button>
        }
        {this.state.p127 === "Más" && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p127.bind(this)}><span style={{color:"red"}}>M</span>ás</button>
        }

        {this.state.p128 === " " &&
        	<button id="txtBut" onClick={this.p128.bind(this)}>&nbsp;</button>
        }
        {this.state.p128 === ", " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p128.bind(this)}>,&nbsp;</button>
        }
        {this.state.p128 === "; " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p128.bind(this)}>;&nbsp;</button>
        }
        {this.state.p128 === ": " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p128.bind(this)}>:&nbsp;</button>
        }
        {this.state.p128 === "( " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p128.bind(this)}>(&nbsp;</button>
        }
        {this.state.p128 === ") " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p128.bind(this)}>)&nbsp;</button>
        }
        {this.state.p128 === "¡ " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p128.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p128 === "! " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p128.bind(this)}>!&nbsp;</button>
        }
        {this.state.p128 === "¿ " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p128.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p128 === "? " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p128.bind(this)}>?&nbsp;</button>
        }
        {this.state.p128 === ", " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p128.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p128 === "; " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p128.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p128 === ": " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p128.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p128 === "( " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p128.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p128 === ") " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p128.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p128 === "¡ " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p128.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p128 === "! " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p128.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p128 === "¿ " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p128.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p128 === "? " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p128.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }


        {this.state.p129 === "tarde" &&
        	<button id="txtBut" onClick={this.p129.bind(this)}>tarde</button>
        }
        {this.state.p129 === "Tarde" && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p129.bind(this)}>Tarde</button>
        }
        {this.state.p129 === "Tarde" && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p129.bind(this)}><span style={{color:"red"}}>T</span>arde</button>
        }


        {this.state.p130 === " " &&
        	<button id="txtBut" onClick={this.p130.bind(this)}>&nbsp;</button>
        }
        {this.state.p130 === ", " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p130.bind(this)}>,&nbsp;</button>
        }
        {this.state.p130 === "; " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p130.bind(this)}>;&nbsp;</button>
        }
        {this.state.p130 === ": " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p130.bind(this)}>:&nbsp;</button>
        }
        {this.state.p130 === "( " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p130.bind(this)}>(&nbsp;</button>
        }
        {this.state.p130 === ") " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p130.bind(this)}>)&nbsp;</button>
        }
        {this.state.p130 === "¡ " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p130.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p130 === "! " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p130.bind(this)}>!&nbsp;</button>
        }
        {this.state.p130 === "¿ " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p130.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p130 === "? " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p130.bind(this)}>?&nbsp;</button>
        }
        {this.state.p130 === ", " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p130.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p130 === "; " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p130.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p130 === ": " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p130.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p130 === "( " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p130.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p130 === ") " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p130.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p130 === "¡ " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p130.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p130 === "! " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p130.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p130 === "¿ " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p130.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p130 === "? " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p130.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }


        {this.state.p131 === "volví" &&
        	<button id="txtBut" onClick={this.p131.bind(this)}>volví</button>
        }
        {this.state.p131 === "Volví" && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p131.bind(this)}>Volví</button>
        }
        {this.state.p131 === "Volví" && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p131.bind(this)}><span style={{color:"red"}}>V</span>olví</button>
        }

        {this.state.p132 === " " &&
        	<button id="txtBut" onClick={this.p132.bind(this)}>&nbsp;</button>
        }
        {this.state.p132 === ", " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p132.bind(this)}>,&nbsp;</button>
        }
        {this.state.p132 === "; " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p132.bind(this)}>;&nbsp;</button>
        }
        {this.state.p132 === ": " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p132.bind(this)}>:&nbsp;</button>
        }
        {this.state.p132 === "( " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p132.bind(this)}>(&nbsp;</button>
        }
        {this.state.p132 === ") " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p132.bind(this)}>)&nbsp;</button>
        }
        {this.state.p132 === "¡ " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p132.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p132 === "! " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p132.bind(this)}>!&nbsp;</button>
        }
        {this.state.p132 === "¿ " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p132.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p132 === "? " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p132.bind(this)}>?&nbsp;</button>
        }
        {this.state.p132 === ", " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p132.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p132 === "; " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p132.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p132 === ": " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p132.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p132 === "( " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p132.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p132 === ") " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p132.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p132 === "¡ " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p132.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p132 === "! " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p132.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p132 === "¿ " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p132.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p132 === "? " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p132.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }


        {this.state.p133 === "para" &&
        	<button id="txtBut" onClick={this.p133.bind(this)}>para</button>
        }
        {this.state.p133 === "Para" && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p133.bind(this)}>Para</button>
        }
        {this.state.p133 === "Para" && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p133.bind(this)}><span style={{color:"red"}}>P</span>ara</button>
        }


        {this.state.p134 === " " &&
        	<button id="txtBut" onClick={this.p134.bind(this)}>&nbsp;</button>
        }
        {this.state.p134 === ", " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p134.bind(this)}>,&nbsp;</button>
        }
        {this.state.p134 === "; " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p134.bind(this)}>;&nbsp;</button>
        }
        {this.state.p134 === ": " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p134.bind(this)}>:&nbsp;</button>
        }
        {this.state.p134 === "( " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p134.bind(this)}>(&nbsp;</button>
        }
        {this.state.p134 === ") " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p134.bind(this)}>)&nbsp;</button>
        }
        {this.state.p134 === "¡ " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p134.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p134 === "! " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p134.bind(this)}>!&nbsp;</button>
        }
        {this.state.p134 === "¿ " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p134.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p134 === "? " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p134.bind(this)}>?&nbsp;</button>
        }
        {this.state.p134 === ", " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p134.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p134 === "; " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p134.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p134 === ": " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p134.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p134 === "( " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p134.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p134 === ") " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p134.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p134 === "¡ " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p134.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p134 === "! " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p134.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p134 === "¿ " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p134.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p134 === "? " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p134.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }


        {this.state.p135 === "comprar" &&
        	<button id="txtBut" onClick={this.p135.bind(this)}>comprar</button>
        }
        {this.state.p135 === "Comprar" && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p135.bind(this)}>Comprar</button>
        }
        {this.state.p135 === "Comprar" && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p135.bind(this)}><span style={{color:"red"}}>C</span>omprar</button>
        }


        {this.state.p136 === " " &&
        	<button id="txtBut" onClick={this.p136.bind(this)}>&nbsp;</button>
        }
        {this.state.p136 === ", " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p136.bind(this)}>,&nbsp;</button>
        }
        {this.state.p136 === "; " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p136.bind(this)}>;&nbsp;</button>
        }
        {this.state.p136 === ": " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p136.bind(this)}>:&nbsp;</button>
        }
        {this.state.p136 === "( " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p136.bind(this)}>(&nbsp;</button>
        }
        {this.state.p136 === ") " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p136.bind(this)}>)&nbsp;</button>
        }
        {this.state.p136 === "¡ " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p136.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p136 === "! " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p136.bind(this)}>!&nbsp;</button>
        }
        {this.state.p136 === "¿ " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p136.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p136 === "? " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p136.bind(this)}>?&nbsp;</button>
        }
        {this.state.p136 === ", " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p136.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p136 === "; " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p136.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p136 === ": " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p136.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p136 === "( " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p136.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p136 === ") " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p136.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p136 === "¡ " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p136.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p136 === "! " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p136.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p136 === "¿ " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p136.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p136 === "? " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p136.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }


        {this.state.p137 === "la" &&
        	<button id="txtBut" onClick={this.p137.bind(this)}>la</button>
        }
        {this.state.p137 === "La" && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p137.bind(this)}>La</button>
        }
        {this.state.p137 === "La" && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p137.bind(this)}><span style={{color:"red"}}>L</span>a</button>
        }


        {this.state.p138 === " " &&
        	<button id="txtBut" onClick={this.p138.bind(this)}>&nbsp;</button>
        }
        {this.state.p138 === ", " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p138.bind(this)}>,&nbsp;</button>
        }
        {this.state.p138 === "; " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p138.bind(this)}>;&nbsp;</button>
        }
        {this.state.p138 === ": " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p138.bind(this)}>:&nbsp;</button>
        }
        {this.state.p138 === "( " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p138.bind(this)}>(&nbsp;</button>
        }
        {this.state.p138 === ") " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p138.bind(this)}>)&nbsp;</button>
        }
        {this.state.p138 === "¡ " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p138.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p138 === "! " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p138.bind(this)}>!&nbsp;</button>
        }
        {this.state.p138 === "¿ " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p138.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p138 === "? " && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p138.bind(this)}>?&nbsp;</button>
        }
        {this.state.p138 === ", " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p138.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p138 === "; " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p138.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p138 === ": " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p138.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p138 === "( " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p138.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p138 === ") " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p138.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p138 === "¡ " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p138.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p138 === "! " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p138.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p138 === "¿ " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p138.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p138 === "? " && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p138.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p139 === "migala" &&
        	<button id="txtBut" onClick={this.p139.bind(this)}>migala</button>
        }
        {this.state.p139 === "Migala" && this.state.compare === false &&
        	<button id="txtBut" onClick={this.p139.bind(this)}>Migala</button>
        }
        {this.state.p139 === "Migala" && this.state.compare === true &&
        	<button id="txtBut" onClick={this.p139.bind(this)}><span style={{color:"red"}}>M</span>igala</button>
        }

        <br/><br/>Next...

        <br/><br/><br/>
        <button  onClick={this.updateComparar.bind(this)}>Comparar</button>
      </div>
    );
  }
}

export default Migala
