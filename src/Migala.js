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
  p140() {
    if (this.state.p140 === " ") {this.setState({p140: ", "});}
    if (this.state.p140 === ", ") {this.setState({p140: "; "});}
    if (this.state.p140 === "; ") {this.setState({p140: ": "});}
    if (this.state.p140 === ": ") {this.setState({p140: "( "});}
    if (this.state.p140 === "( ") {this.setState({p140: ") "});}
    if (this.state.p140 === ") ") {this.setState({p140: "¡ "});}
    if (this.state.p140 === "¡ ") {this.setState({p140: "! "});}
    if (this.state.p140 === "! ") {this.setState({p140: "¿ "});}
    if (this.state.p140 === "¿ ") {this.setState({p140: "? "});}
    if (this.state.p140 === "? ") {this.setState({p140: " "});}
  }
  p141() {
    if (this.state.p141 === "y") {
      this.setState({p141: "Y"});
    } else {
      this.setState({p141: "y"});
    }
  }
  p142() {
    if (this.state.p142 === " ") {this.setState({p142: ", "});}
    if (this.state.p142 === ", ") {this.setState({p142: "; "});}
    if (this.state.p142 === "; ") {this.setState({p142: ": "});}
    if (this.state.p142 === ": ") {this.setState({p142: "( "});}
    if (this.state.p142 === "( ") {this.setState({p142: ") "});}
    if (this.state.p142 === ") ") {this.setState({p142: "¡ "});}
    if (this.state.p142 === "¡ ") {this.setState({p142: "! "});}
    if (this.state.p142 === "! ") {this.setState({p142: "¿ "});}
    if (this.state.p142 === "¿ ") {this.setState({p142: "? "});}
    if (this.state.p142 === "? ") {this.setState({p142: " "});}
  }
  p143() {
    if (this.state.p143 === "el") {
      this.setState({p143: "El"});
    } else {
      this.setState({p143: "el"});
    }
  }
  p144() {
    if (this.state.p144 === " ") {this.setState({p144: ", "});}
    if (this.state.p144 === ", ") {this.setState({p144: "; "});}
    if (this.state.p144 === "; ") {this.setState({p144: ": "});}
    if (this.state.p144 === ": ") {this.setState({p144: "( "});}
    if (this.state.p144 === "( ") {this.setState({p144: ") "});}
    if (this.state.p144 === ") ") {this.setState({p144: "¡ "});}
    if (this.state.p144 === "¡ ") {this.setState({p144: "! "});}
    if (this.state.p144 === "! ") {this.setState({p144: "¿ "});}
    if (this.state.p144 === "¿ ") {this.setState({p144: "? "});}
    if (this.state.p144 === "? ") {this.setState({p144: " "});}
  }
  p145() {
    if (this.state.p145 === "sorprendido") {
      this.setState({p145: "Sorprendido"});
    } else {
      this.setState({p145: "sorprendido"});
    }
  }
  p146() {
    if (this.state.p146 === " ") {this.setState({p146: ", "});}
    if (this.state.p146 === ", ") {this.setState({p146: "; "});}
    if (this.state.p146 === "; ") {this.setState({p146: ": "});}
    if (this.state.p146 === ": ") {this.setState({p146: "( "});}
    if (this.state.p146 === "( ") {this.setState({p146: ") "});}
    if (this.state.p146 === ") ") {this.setState({p146: "¡ "});}
    if (this.state.p146 === "¡ ") {this.setState({p146: "! "});}
    if (this.state.p146 === "! ") {this.setState({p146: "¿ "});}
    if (this.state.p146 === "¿ ") {this.setState({p146: "? "});}
    if (this.state.p146 === "? ") {this.setState({p146: " "});}
  }
  p147() {
    if (this.state.p147 === "saltimbanqui") {
      this.setState({p147: "Saltimbanqui"});
    } else {
      this.setState({p147: "saltimbanqui"});
    }
  }
  p148() {
    if (this.state.p148 === " ") {this.setState({p148: ", "});}
    if (this.state.p148 === ", ") {this.setState({p148: "; "});}
    if (this.state.p148 === "; ") {this.setState({p148: ": "});}
    if (this.state.p148 === ": ") {this.setState({p148: "( "});}
    if (this.state.p148 === "( ") {this.setState({p148: ") "});}
    if (this.state.p148 === ") ") {this.setState({p148: "¡ "});}
    if (this.state.p148 === "¡ ") {this.setState({p148: "! "});}
    if (this.state.p148 === "! ") {this.setState({p148: "¿ "});}
    if (this.state.p148 === "¿ ") {this.setState({p148: "? "});}
    if (this.state.p148 === "? ") {this.setState({p148: " "});}
  }
  p149() {
    if (this.state.p149 === "me") {
      this.setState({p149: "Me"});
    } else {
      this.setState({p149: "me"});
    }
  }
  p150() {
    if (this.state.p150 === " ") {this.setState({p150: ", "});}
    if (this.state.p150 === ", ") {this.setState({p150: "; "});}
    if (this.state.p150 === "; ") {this.setState({p150: ": "});}
    if (this.state.p150 === ": ") {this.setState({p150: "( "});}
    if (this.state.p150 === "( ") {this.setState({p150: ") "});}
    if (this.state.p150 === ") ") {this.setState({p150: "¡ "});}
    if (this.state.p150 === "¡ ") {this.setState({p150: "! "});}
    if (this.state.p150 === "! ") {this.setState({p150: "¿ "});}
    if (this.state.p150 === "¿ ") {this.setState({p150: "? "});}
    if (this.state.p150 === "? ") {this.setState({p150: " "});}
  }
  p151() {
    if (this.state.p151 === "dio") {
      this.setState({p151: "Dio"});
    } else {
      this.setState({p151: "dio"});
    }
  }
  p152() {
    if (this.state.p152 === " ") {this.setState({p152: ", "});}
    if (this.state.p152 === ", ") {this.setState({p152: "; "});}
    if (this.state.p152 === "; ") {this.setState({p152: ": "});}
    if (this.state.p152 === ": ") {this.setState({p152: "( "});}
    if (this.state.p152 === "( ") {this.setState({p152: ") "});}
    if (this.state.p152 === ") ") {this.setState({p152: "¡ "});}
    if (this.state.p152 === "¡ ") {this.setState({p152: "! "});}
    if (this.state.p152 === "! ") {this.setState({p152: "¿ "});}
    if (this.state.p152 === "¿ ") {this.setState({p152: "? "});}
    if (this.state.p152 === "? ") {this.setState({p152: " "});}
  }
  p153() {
    if (this.state.p153 === "algunos") {
      this.setState({p153: "Algunos"});
    } else {
      this.setState({p153: "algunos"});
    }
  }
  p154() {
    if (this.state.p154 === " ") {this.setState({p154: ", "});}
    if (this.state.p154 === ", ") {this.setState({p154: "; "});}
    if (this.state.p154 === "; ") {this.setState({p154: ": "});}
    if (this.state.p154 === ": ") {this.setState({p154: "( "});}
    if (this.state.p154 === "( ") {this.setState({p154: ") "});}
    if (this.state.p154 === ") ") {this.setState({p154: "¡ "});}
    if (this.state.p154 === "¡ ") {this.setState({p154: "! "});}
    if (this.state.p154 === "! ") {this.setState({p154: "¿ "});}
    if (this.state.p154 === "¿ ") {this.setState({p154: "? "});}
    if (this.state.p154 === "? ") {this.setState({p154: " "});}
  }
  p155() {
    if (this.state.p155 === "informes") {
      this.setState({p155: "Informes"});
    } else {
      this.setState({p155: "informes"});
    }
  }
  p156() {
    if (this.state.p156 === " ") {this.setState({p156: ", "});}
    if (this.state.p156 === ", ") {this.setState({p156: "; "});}
    if (this.state.p156 === "; ") {this.setState({p156: ": "});}
    if (this.state.p156 === ": ") {this.setState({p156: "( "});}
    if (this.state.p156 === "( ") {this.setState({p156: ") "});}
    if (this.state.p156 === ") ") {this.setState({p156: "¡ "});}
    if (this.state.p156 === "¡ ") {this.setState({p156: "! "});}
    if (this.state.p156 === "! ") {this.setState({p156: "¿ "});}
    if (this.state.p156 === "¿ ") {this.setState({p156: "? "});}
    if (this.state.p156 === "? ") {this.setState({p156: " "});}
  }
  p157() {
    if (this.state.p157 === "acerca") {
      this.setState({p157: "Acerca"});
    } else {
      this.setState({p157: "acerca"});
    }
  }
  p158() {
    if (this.state.p158 === " ") {this.setState({p158: ", "});}
    if (this.state.p158 === ", ") {this.setState({p158: "; "});}
    if (this.state.p158 === "; ") {this.setState({p158: ": "});}
    if (this.state.p158 === ": ") {this.setState({p158: "( "});}
    if (this.state.p158 === "( ") {this.setState({p158: ") "});}
    if (this.state.p158 === ") ") {this.setState({p158: "¡ "});}
    if (this.state.p158 === "¡ ") {this.setState({p158: "! "});}
    if (this.state.p158 === "! ") {this.setState({p158: "¿ "});}
    if (this.state.p158 === "¿ ") {this.setState({p158: "? "});}
    if (this.state.p158 === "? ") {this.setState({p158: " "});}
  }
  p159() {
    if (this.state.p159 === "de") {
      this.setState({p159: "De"});
    } else {
      this.setState({p159: "de"});
    }
  }
  p160() {
    if (this.state.p160 === " ") {this.setState({p160: ", "});}
    if (this.state.p160 === ", ") {this.setState({p160: "; "});}
    if (this.state.p160 === "; ") {this.setState({p160: ": "});}
    if (this.state.p160 === ": ") {this.setState({p160: "( "});}
    if (this.state.p160 === "( ") {this.setState({p160: ") "});}
    if (this.state.p160 === ") ") {this.setState({p160: "¡ "});}
    if (this.state.p160 === "¡ ") {this.setState({p160: "! "});}
    if (this.state.p160 === "! ") {this.setState({p160: "¿ "});}
    if (this.state.p160 === "¿ ") {this.setState({p160: "? "});}
    if (this.state.p160 === "? ") {this.setState({p160: " "});}
  }
  p161() {
    if (this.state.p161 === "sus") {
      this.setState({p161: "Sus"});
    } else {
      this.setState({p161: "sus"});
    }
  }
  p162() {
    if (this.state.p162 === " ") {this.setState({p162: ", "});}
    if (this.state.p162 === ", ") {this.setState({p162: "; "});}
    if (this.state.p162 === "; ") {this.setState({p162: ": "});}
    if (this.state.p162 === ": ") {this.setState({p162: "( "});}
    if (this.state.p162 === "( ") {this.setState({p162: ") "});}
    if (this.state.p162 === ") ") {this.setState({p162: "¡ "});}
    if (this.state.p162 === "¡ ") {this.setState({p162: "! "});}
    if (this.state.p162 === "! ") {this.setState({p162: "¿ "});}
    if (this.state.p162 === "¿ ") {this.setState({p162: "? "});}
    if (this.state.p162 === "? ") {this.setState({p162: " "});}
  }
  p163() {
    if (this.state.p163 === "costumbres") {
      this.setState({p163: "Costumbres"});
    } else {
      this.setState({p163: "costumbres"});
    }
  }
  p164() {
    if (this.state.p164 === " ") {this.setState({p164: ", "});}
    if (this.state.p164 === ", ") {this.setState({p164: "; "});}
    if (this.state.p164 === "; ") {this.setState({p164: ": "});}
    if (this.state.p164 === ": ") {this.setState({p164: "( "});}
    if (this.state.p164 === "( ") {this.setState({p164: ") "});}
    if (this.state.p164 === ") ") {this.setState({p164: "¡ "});}
    if (this.state.p164 === "¡ ") {this.setState({p164: "! "});}
    if (this.state.p164 === "! ") {this.setState({p164: "¿ "});}
    if (this.state.p164 === "¿ ") {this.setState({p164: "? "});}
    if (this.state.p164 === "? ") {this.setState({p164: " "});}
  }
  p165() {
    if (this.state.p165 === "y") {
      this.setState({p165: "Y"});
    } else {
      this.setState({p165: "y"});
    }
  }
  p166() {
    if (this.state.p166 === " ") {this.setState({p166: ", "});}
    if (this.state.p166 === ", ") {this.setState({p166: "; "});}
    if (this.state.p166 === "; ") {this.setState({p166: ": "});}
    if (this.state.p166 === ": ") {this.setState({p166: "( "});}
    if (this.state.p166 === "( ") {this.setState({p166: ") "});}
    if (this.state.p166 === ") ") {this.setState({p166: "¡ "});}
    if (this.state.p166 === "¡ ") {this.setState({p166: "! "});}
    if (this.state.p166 === "! ") {this.setState({p166: "¿ "});}
    if (this.state.p166 === "¿ ") {this.setState({p166: "? "});}
    if (this.state.p166 === "? ") {this.setState({p166: " "});}
  }
  p167() {
    if (this.state.p167 === "su") {
      this.setState({p167: "Su"});
    } else {
      this.setState({p167: "su"});
    }
  }
  p168() {
    if (this.state.p168 === " ") {this.setState({p168: ", "});}
    if (this.state.p168 === ", ") {this.setState({p168: "; "});}
    if (this.state.p168 === "; ") {this.setState({p168: ": "});}
    if (this.state.p168 === ": ") {this.setState({p168: "( "});}
    if (this.state.p168 === "( ") {this.setState({p168: ") "});}
    if (this.state.p168 === ") ") {this.setState({p168: "¡ "});}
    if (this.state.p168 === "¡ ") {this.setState({p168: "! "});}
    if (this.state.p168 === "! ") {this.setState({p168: "¿ "});}
    if (this.state.p168 === "¿ ") {this.setState({p168: "? "});}
    if (this.state.p168 === "? ") {this.setState({p168: " "});}
  }
  p169() {
    if (this.state.p169 === "alimentación") {
      this.setState({p169: "Alimentación"});
    } else {
      this.setState({p169: "alimentación"});
    }
  }
  p170() {
    if (this.state.p170 === " ") {this.setState({p170: ", "});}
    if (this.state.p170 === ", ") {this.setState({p170: "; "});}
    if (this.state.p170 === "; ") {this.setState({p170: ": "});}
    if (this.state.p170 === ": ") {this.setState({p170: "( "});}
    if (this.state.p170 === "( ") {this.setState({p170: ") "});}
    if (this.state.p170 === ") ") {this.setState({p170: "¡ "});}
    if (this.state.p170 === "¡ ") {this.setState({p170: "! "});}
    if (this.state.p170 === "! ") {this.setState({p170: "¿ "});}
    if (this.state.p170 === "¿ ") {this.setState({p170: "? "});}
    if (this.state.p170 === "? ") {this.setState({p170: " "});}
  }
  p171() {
    if (this.state.p171 === "extraña") {
      this.setState({p171: "Extraña"});
    } else {
      this.setState({p171: "extraña"});
    }
  }
  p172() {
    if (this.state.p172 === " ") {this.setState({p172: ", "});}
    if (this.state.p172 === ", ") {this.setState({p172: "; "});}
    if (this.state.p172 === "; ") {this.setState({p172: ". "});}
    if (this.state.p172 === ". ") {this.setState({p172: "( "});}
    if (this.state.p172 === "( ") {this.setState({p172: ") "});}
    if (this.state.p172 === ") ") {this.setState({p172: "¡ "});}
    if (this.state.p172 === "¡ ") {this.setState({p172: "! "});}
    if (this.state.p172 === "! ") {this.setState({p172: "¿ "});}
    if (this.state.p172 === "¿ ") {this.setState({p172: "? "});}
    if (this.state.p172 === "? ") {this.setState({p172: " "});}
  }
  p173() {
    if (this.state.p173 === "entonces") {
      this.setState({p173: "Entonces"});
    } else {
      this.setState({p173: "entonces"});
    }
  }
  p174() {
        if (this.state.p174 === " ") {this.setState({p174: ", "});}
        if (this.state.p174 === ", ") {this.setState({p174: "; "});}
        if (this.state.p174 === "; ") {this.setState({p174: ": "});}
        if (this.state.p174 === ": ") {this.setState({p174: "( "});}
        if (this.state.p174 === "( ") {this.setState({p174: ") "});}
        if (this.state.p174 === ") ") {this.setState({p174: "¡ "});}
        if (this.state.p174 === "¡ ") {this.setState({p174: "! "});}
        if (this.state.p174 === "! ") {this.setState({p174: "¿ "});}
        if (this.state.p174 === "¿ ") {this.setState({p174: "? "});}
        if (this.state.p174 === "? ") {this.setState({p174: " "});}
  }
  p175() {
        if (this.state.p175 === "comprendí") {
          this.setState({p175: "Comprendí"});
        } else {
          this.setState({p175: "comprendí"});
        }
  }
  p176() {
        if (this.state.p176 === " ") {this.setState({p176: ", "});}
        if (this.state.p176 === ", ") {this.setState({p176: "; "});}
        if (this.state.p176 === "; ") {this.setState({p176: ": "});}
        if (this.state.p176 === ": ") {this.setState({p176: "( "});}
        if (this.state.p176 === "( ") {this.setState({p176: ") "});}
        if (this.state.p176 === ") ") {this.setState({p176: "¡ "});}
        if (this.state.p176 === "¡ ") {this.setState({p176: "! "});}
        if (this.state.p176 === "! ") {this.setState({p176: "¿ "});}
        if (this.state.p176 === "¿ ") {this.setState({p176: "? "});}
        if (this.state.p176 === "? ") {this.setState({p176: " "});}
  }
  p177() {
        if (this.state.p177 === "que") {
                this.setState({p177: "Que"});
        } else {
                this.setState({p177: "que"});
        }
  }
  p178() {
        if (this.state.p178 === " ") {this.setState({p178: ", "});}
        if (this.state.p178 === ", ") {this.setState({p178: "; "});}
        if (this.state.p178 === "; ") {this.setState({p178: ": "});}
        if (this.state.p178 === ": ") {this.setState({p178: "( "});}
        if (this.state.p178 === "( ") {this.setState({p178: ") "});}
        if (this.state.p178 === ") ") {this.setState({p178: "¡ "});}
        if (this.state.p178 === "¡ ") {this.setState({p178: "! "});}
        if (this.state.p178 === "! ") {this.setState({p178: "¿ "});}
        if (this.state.p178 === "¿ ") {this.setState({p178: "? "});}
        if (this.state.p178 === "? ") {this.setState({p178: " "});}
  }
  p179() {
        if (this.state.p179 === "tenía") {
                this.setState({p179: "Tenía"});
        } else {
                this.setState({p179: "tenía"});
        }
  }
  p180() {
        if (this.state.p180 === " ") {this.setState({p180: ", "});}
        if (this.state.p180 === ", ") {this.setState({p180: "; "});}
        if (this.state.p180 === "; ") {this.setState({p180: ": "});}
        if (this.state.p180 === ": ") {this.setState({p180: "( "});}
        if (this.state.p180 === "( ") {this.setState({p180: ") "});}
        if (this.state.p180 === ") ") {this.setState({p180: "¡ "});}
        if (this.state.p180 === "¡ ") {this.setState({p180: "! "});}
        if (this.state.p180 === "! ") {this.setState({p180: "¿ "});}
        if (this.state.p180 === "¿ ") {this.setState({p180: "? "});}
        if (this.state.p180 === "? ") {this.setState({p180: " "});}
  }
  p181() {
        if (this.state.p181 === "en") {
                this.setState({p181: "En"});
        } else {
                this.setState({p181: "en"});
        }
  }
  p182() {
        if (this.state.p182 === " ") {this.setState({p182: ", "});}
        if (this.state.p182 === ", ") {this.setState({p182: "; "});}
        if (this.state.p182 === "; ") {this.setState({p182: ": "});}
        if (this.state.p182 === ": ") {this.setState({p182: "( "});}
        if (this.state.p182 === "( ") {this.setState({p182: ") "});}
        if (this.state.p182 === ") ") {this.setState({p182: "¡ "});}
        if (this.state.p182 === "¡ ") {this.setState({p182: "! "});}
        if (this.state.p182 === "! ") {this.setState({p182: "¿ "});}
        if (this.state.p182 === "¿ ") {this.setState({p182: "? "});}
        if (this.state.p182 === "? ") {this.setState({p182: " "});}
  }
  p183() {
        if (this.state.p183 === "las") {
                this.setState({p183: "Las"});
        } else {
                this.setState({p183: "las"});
        }
  }
  p184() {
        if (this.state.p184 === " ") {this.setState({p184: ", "});}
        if (this.state.p184 === ", ") {this.setState({p184: "; "});}
        if (this.state.p184 === "; ") {this.setState({p184: ": "});}
        if (this.state.p184 === ": ") {this.setState({p184: "( "});}
        if (this.state.p184 === "( ") {this.setState({p184: ") "});}
        if (this.state.p184 === ") ") {this.setState({p184: "¡ "});}
        if (this.state.p184 === "¡ ") {this.setState({p184: "! "});}
        if (this.state.p184 === "! ") {this.setState({p184: "¿ "});}
        if (this.state.p184 === "¿ ") {this.setState({p184: "? "});}
        if (this.state.p184 === "? ") {this.setState({p184: " "});}
  }
  p185() {
        if (this.state.p185 === "manos") {
                this.setState({p185: "Manos"});
        } else {
                this.setState({p185: "manos"});
        }
  }
  p186() {
        if (this.state.p186 === " ") {this.setState({p186: ", "});}
        if (this.state.p186 === ", ") {this.setState({p186: "; "});}
        if (this.state.p186 === "; ") {this.setState({p186: ": "});}
        if (this.state.p186 === ": ") {this.setState({p186: "( "});}
        if (this.state.p186 === "( ") {this.setState({p186: ") "});}
        if (this.state.p186 === ") ") {this.setState({p186: "¡ "});}
        if (this.state.p186 === "¡ ") {this.setState({p186: "! "});}
        if (this.state.p186 === "! ") {this.setState({p186: "¿ "});}
        if (this.state.p186 === "¿ ") {this.setState({p186: "? "});}
        if (this.state.p186 === "? ") {this.setState({p186: " "});}
  }
  p187() {
        if (this.state.p187 === "de") {
                this.setState({p187: "De"});
        } else {
                this.setState({p187: "de"});
        }
  }
  p188() {
        if (this.state.p188 === " ") {this.setState({p188: ", "});}
        if (this.state.p188 === ", ") {this.setState({p188: "; "});}
        if (this.state.p188 === "; ") {this.setState({p188: ": "});}
        if (this.state.p188 === ": ") {this.setState({p188: "( "});}
        if (this.state.p188 === "( ") {this.setState({p188: ") "});}
        if (this.state.p188 === ") ") {this.setState({p188: "¡ "});}
        if (this.state.p188 === "¡ ") {this.setState({p188: "! "});}
        if (this.state.p188 === "! ") {this.setState({p188: "¿ "});}
        if (this.state.p188 === "¿ ") {this.setState({p188: "? "});}
        if (this.state.p188 === "? ") {this.setState({p188: " "});}
  }
  p189() {
        if (this.state.p189 === "una") {
                this.setState({p189: "Una"});
        } else {
                this.setState({p189: "una"});
        }
  }
  p190() {
        if (this.state.p190 === " ") {this.setState({p190: ", "});}
        if (this.state.p190 === ", ") {this.setState({p190: "; "});}
        if (this.state.p190 === "; ") {this.setState({p190: ": "});}
        if (this.state.p190 === ": ") {this.setState({p190: "( "});}
        if (this.state.p190 === "( ") {this.setState({p190: ") "});}
        if (this.state.p190 === ") ") {this.setState({p190: "¡ "});}
        if (this.state.p190 === "¡ ") {this.setState({p190: "! "});}
        if (this.state.p190 === "! ") {this.setState({p190: "¿ "});}
        if (this.state.p190 === "¿ ") {this.setState({p190: "? "});}
        if (this.state.p190 === "? ") {this.setState({p190: " "});}
  }
  p191() {
        if (this.state.p191 === "vez") {
                this.setState({p191: "Vez"});
        } else {
                this.setState({p191: "vez"});
        }
  }
  p192() {
        if (this.state.p192 === " ") {this.setState({p192: ", "});}
        if (this.state.p192 === ", ") {this.setState({p192: "; "});}
        if (this.state.p192 === "; ") {this.setState({p192: ": "});}
        if (this.state.p192 === ": ") {this.setState({p192: "( "});}
        if (this.state.p192 === "( ") {this.setState({p192: ") "});}
        if (this.state.p192 === ") ") {this.setState({p192: "¡ "});}
        if (this.state.p192 === "¡ ") {this.setState({p192: "! "});}
        if (this.state.p192 === "! ") {this.setState({p192: "¿ "});}
        if (this.state.p192 === "¿ ") {this.setState({p192: "? "});}
        if (this.state.p192 === "? ") {this.setState({p192: " "});}
  }
  p193() {
        if (this.state.p193 === "por") {
                this.setState({p193: "Por"});
        } else {
                this.setState({p193: "por"});
        }
  }
  p194() {
        if (this.state.p194 === " ") {this.setState({p194: ", "});}
        if (this.state.p194 === ", ") {this.setState({p194: "; "});}
        if (this.state.p194 === "; ") {this.setState({p194: ": "});}
        if (this.state.p194 === ": ") {this.setState({p194: "( "});}
        if (this.state.p194 === "( ") {this.setState({p194: ") "});}
        if (this.state.p194 === ") ") {this.setState({p194: "¡ "});}
        if (this.state.p194 === "¡ ") {this.setState({p194: "! "});}
        if (this.state.p194 === "! ") {this.setState({p194: "¿ "});}
        if (this.state.p194 === "¿ ") {this.setState({p194: "? "});}
        if (this.state.p194 === "? ") {this.setState({p194: " "});}
  }
  p195() {
        if (this.state.p195 === "todas") {
                this.setState({p195: "Todas"});
        } else {
                this.setState({p195: "todas"});
        }
  }
  p196() {
        if (this.state.p196 === " ") {this.setState({p196: ", "});}
        if (this.state.p196 === ", ") {this.setState({p196: "; "});}
        if (this.state.p196 === "; ") {this.setState({p196: ": "});}
        if (this.state.p196 === ": ") {this.setState({p196: "( "});}
        if (this.state.p196 === "( ") {this.setState({p196: ") "});}
        if (this.state.p196 === ") ") {this.setState({p196: "¡ "});}
        if (this.state.p196 === "¡ ") {this.setState({p196: "! "});}
        if (this.state.p196 === "! ") {this.setState({p196: "¿ "});}
        if (this.state.p196 === "¿ ") {this.setState({p196: "? "});}
        if (this.state.p196 === "? ") {this.setState({p196: " "});}
  }
  p197() {
        if (this.state.p197 === "la") {
                this.setState({p197: "La"});
        } else {
                this.setState({p197: "la"});
        }
  }
  p198() {
        if (this.state.p198 === " ") {this.setState({p198: ", "});}
        if (this.state.p198 === ", ") {this.setState({p198: "; "});}
        if (this.state.p198 === "; ") {this.setState({p198: ": "});}
        if (this.state.p198 === ": ") {this.setState({p198: "( "});}
        if (this.state.p198 === "( ") {this.setState({p198: ") "});}
        if (this.state.p198 === ") ") {this.setState({p198: "¡ "});}
        if (this.state.p198 === "¡ ") {this.setState({p198: "! "});}
        if (this.state.p198 === "! ") {this.setState({p198: "¿ "});}
        if (this.state.p198 === "¿ ") {this.setState({p198: "? "});}
        if (this.state.p198 === "? ") {this.setState({p198: " "});}
  }
  p199() {
        if (this.state.p199 === "amenaza") {
                this.setState({p199: "Amenaza"});
        } else {
                this.setState({p199: "amenaza"});
        }
  }
  p200() {
        if (this.state.p200 === " ") {this.setState({p200: ", "});}
        if (this.state.p200 === ", ") {this.setState({p200: "; "});}
        if (this.state.p200 === "; ") {this.setState({p200: ": "});}
        if (this.state.p200 === ": ") {this.setState({p200: "( "});}
        if (this.state.p200 === "( ") {this.setState({p200: ") "});}
        if (this.state.p200 === ") ") {this.setState({p200: "¡ "});}
        if (this.state.p200 === "¡ ") {this.setState({p200: "! "});}
        if (this.state.p200 === "! ") {this.setState({p200: "¿ "});}
        if (this.state.p200 === "¿ ") {this.setState({p200: "? "});}
        if (this.state.p200 === "? ") {this.setState({p200: " "});}
  }
  p201() {
        if (this.state.p201 === "total") {
                this.setState({p201: "Total"});
        } else {
                this.setState({p201: "total"});
        }
  }
  p202() {
        if (this.state.p202 === " ") {this.setState({p202: ", "});}
        if (this.state.p202 === ", ") {this.setState({p202: "; "});}
        if (this.state.p202 === "; ") {this.setState({p202: ": "});}
        if (this.state.p202 === ": ") {this.setState({p202: "( "});}
        if (this.state.p202 === "( ") {this.setState({p202: ") "});}
        if (this.state.p202 === ") ") {this.setState({p202: "¡ "});}
        if (this.state.p202 === "¡ ") {this.setState({p202: "! "});}
        if (this.state.p202 === "! ") {this.setState({p202: "¿ "});}
        if (this.state.p202 === "¿ ") {this.setState({p202: "? "});}
        if (this.state.p202 === "? ") {this.setState({p202: " "});}
  }
  p203() {
        if (this.state.p203 === "la") {
                this.setState({p203: "La"});
        } else {
                this.setState({p203: "la"});
        }
  }
  p204() {
        if (this.state.p204 === " ") {this.setState({p204: ", "});}
        if (this.state.p204 === ", ") {this.setState({p204: "; "});}
        if (this.state.p204 === "; ") {this.setState({p204: ": "});}
        if (this.state.p204 === ": ") {this.setState({p204: "( "});}
        if (this.state.p204 === "( ") {this.setState({p204: ") "});}
        if (this.state.p204 === ") ") {this.setState({p204: "¡ "});}
        if (this.state.p204 === "¡ ") {this.setState({p204: "! "});}
        if (this.state.p204 === "! ") {this.setState({p204: "¿ "});}
        if (this.state.p204 === "¿ ") {this.setState({p204: "? "});}
        if (this.state.p204 === "? ") {this.setState({p204: " "});}
  }
  p205() {
        if (this.state.p205 === "máxima") {
                this.setState({p205: "Máxima"});
        } else {
                this.setState({p205: "máxima"});
        }
  }
  p206() {
        if (this.state.p206 === " ") {this.setState({p206: ", "});}
        if (this.state.p206 === ", ") {this.setState({p206: "; "});}
        if (this.state.p206 === "; ") {this.setState({p206: ": "});}
        if (this.state.p206 === ": ") {this.setState({p206: "( "});}
        if (this.state.p206 === "( ") {this.setState({p206: ") "});}
        if (this.state.p206 === ") ") {this.setState({p206: "¡ "});}
        if (this.state.p206 === "¡ ") {this.setState({p206: "! "});}
        if (this.state.p206 === "! ") {this.setState({p206: "¿ "});}
        if (this.state.p206 === "¿ ") {this.setState({p206: "? "});}
        if (this.state.p206 === "? ") {this.setState({p206: " "});}
  }
  p207() {
        if (this.state.p207 === "dosis") {
                this.setState({p207: "Dosis"});
        } else {
                this.setState({p207: "dosis"});
        }
  }
  p208() {
        if (this.state.p208 === " ") {this.setState({p208: ", "});}
        if (this.state.p208 === ", ") {this.setState({p208: "; "});}
        if (this.state.p208 === "; ") {this.setState({p208: ": "});}
        if (this.state.p208 === ": ") {this.setState({p208: "( "});}
        if (this.state.p208 === "( ") {this.setState({p208: ") "});}
        if (this.state.p208 === ") ") {this.setState({p208: "¡ "});}
        if (this.state.p208 === "¡ ") {this.setState({p208: "! "});}
        if (this.state.p208 === "! ") {this.setState({p208: "¿ "});}
        if (this.state.p208 === "¿ ") {this.setState({p208: "? "});}
        if (this.state.p208 === "? ") {this.setState({p208: " "});}
  }
  p209() {
        if (this.state.p209 === "de") {
                this.setState({p209: "De"});
        } else {
                this.setState({p209: "de"});
        }
  }
  p210() {
        if (this.state.p210 === " ") {this.setState({p210: ", "});}
        if (this.state.p210 === ", ") {this.setState({p210: "; "});}
        if (this.state.p210 === "; ") {this.setState({p210: ": "});}
        if (this.state.p210 === ": ") {this.setState({p210: "( "});}
        if (this.state.p210 === "( ") {this.setState({p210: ") "});}
        if (this.state.p210 === ") ") {this.setState({p210: "¡ "});}
        if (this.state.p210 === "¡ ") {this.setState({p210: "! "});}
        if (this.state.p210 === "! ") {this.setState({p210: "¿ "});}
        if (this.state.p210 === "¿ ") {this.setState({p210: "? "});}
        if (this.state.p210 === "? ") {this.setState({p210: " "});}
  }
  p211() {
        if (this.state.p211 === "terror") {
                this.setState({p211: "Terror"});
        } else {
                this.setState({p211: "terror"});
        }
  }
  p212() {
        if (this.state.p212 === " ") {this.setState({p212: ", "});}
        if (this.state.p212 === ", ") {this.setState({p212: "; "});}
        if (this.state.p212 === "; ") {this.setState({p212: ": "});}
        if (this.state.p212 === ": ") {this.setState({p212: "( "});}
        if (this.state.p212 === "( ") {this.setState({p212: ") "});}
        if (this.state.p212 === ") ") {this.setState({p212: "¡ "});}
        if (this.state.p212 === "¡ ") {this.setState({p212: "! "});}
        if (this.state.p212 === "! ") {this.setState({p212: "¿ "});}
        if (this.state.p212 === "¿ ") {this.setState({p212: "? "});}
        if (this.state.p212 === "? ") {this.setState({p212: " "});}
  }
  p213() {
        if (this.state.p213 === "que") {
                this.setState({p213: "Que"});
        } else {
                this.setState({p213: "que"});
        }
  }
  p214() {
        if (this.state.p214 === " ") {this.setState({p214: ", "});}
        if (this.state.p214 === ", ") {this.setState({p214: "; "});}
        if (this.state.p214 === "; ") {this.setState({p214: ": "});}
        if (this.state.p214 === ": ") {this.setState({p214: "( "});}
        if (this.state.p214 === "( ") {this.setState({p214: ") "});}
        if (this.state.p214 === ") ") {this.setState({p214: "¡ "});}
        if (this.state.p214 === "¡ ") {this.setState({p214: "! "});}
        if (this.state.p214 === "! ") {this.setState({p214: "¿ "});}
        if (this.state.p214 === "¿ ") {this.setState({p214: "? "});}
        if (this.state.p214 === "? ") {this.setState({p214: " "});}
  }
  p215() {
        if (this.state.p215 === "mi") {
                this.setState({p215: "Mi"});
        } else {
                this.setState({p215: "mi"});
        }
  }
  p216() {
        if (this.state.p216 === " ") {this.setState({p216: ", "});}
        if (this.state.p216 === ", ") {this.setState({p216: "; "});}
        if (this.state.p216 === "; ") {this.setState({p216: ": "});}
        if (this.state.p216 === ": ") {this.setState({p216: "( "});}
        if (this.state.p216 === "( ") {this.setState({p216: ") "});}
        if (this.state.p216 === ") ") {this.setState({p216: "¡ "});}
        if (this.state.p216 === "¡ ") {this.setState({p216: "! "});}
        if (this.state.p216 === "! ") {this.setState({p216: "¿ "});}
        if (this.state.p216 === "¿ ") {this.setState({p216: "? "});}
        if (this.state.p216 === "? ") {this.setState({p216: " "});}
  }
  p217() {
        if (this.state.p217 === "espíritu") {
                this.setState({p217: "Espíritu"});
        } else {
                this.setState({p217: "espíritu"});
        }
  }
  p218() {
        if (this.state.p218 === " ") {this.setState({p218: ", "});}
        if (this.state.p218 === ", ") {this.setState({p218: "; "});}
        if (this.state.p218 === "; ") {this.setState({p218: ": "});}
        if (this.state.p218 === ": ") {this.setState({p218: "( "});}
        if (this.state.p218 === "( ") {this.setState({p218: ") "});}
        if (this.state.p218 === ") ") {this.setState({p218: "¡ "});}
        if (this.state.p218 === "¡ ") {this.setState({p218: "! "});}
        if (this.state.p218 === "! ") {this.setState({p218: "¿ "});}
        if (this.state.p218 === "¿ ") {this.setState({p218: "? "});}
        if (this.state.p218 === "? ") {this.setState({p218: " "});}
  }
  p219() {
        if (this.state.p219 === "podía") {
                this.setState({p219: "Podía"});
        } else {
                this.setState({p219: "podía"});
        }
  }
  p220() {
        if (this.state.p220 === " ") {this.setState({p220: ", "});}
        if (this.state.p220 === ", ") {this.setState({p220: "; "});}
        if (this.state.p220 === "; ") {this.setState({p220: ": "});}
        if (this.state.p220 === ": ") {this.setState({p220: "( "});}
        if (this.state.p220 === "( ") {this.setState({p220: ") "});}
        if (this.state.p220 === ") ") {this.setState({p220: "¡ "});}
        if (this.state.p220 === "¡ ") {this.setState({p220: "! "});}
        if (this.state.p220 === "! ") {this.setState({p220: "¿ "});}
        if (this.state.p220 === "¿ ") {this.setState({p220: "? "});}
        if (this.state.p220 === "? ") {this.setState({p220: " "});}
  }
  p221() {
        if (this.state.p221 === "soportar") {
                this.setState({p221: "Soportar"});
        } else {
                this.setState({p221: "soportar"});
        }
  }
  p222() {
        if (this.state.p222 === " ") {this.setState({p222: ", "});}
        if (this.state.p222 === ", ") {this.setState({p222: "; "});}
        if (this.state.p222 === "; ") {this.setState({p222: ". "});}
        if (this.state.p222 === ". ") {this.setState({p222: "( "});}
        if (this.state.p222 === "( ") {this.setState({p222: ") "});}
        if (this.state.p222 === ") ") {this.setState({p222: "¡ "});}
        if (this.state.p222 === "¡ ") {this.setState({p222: "! "});}
        if (this.state.p222 === "! ") {this.setState({p222: "¿ "});}
        if (this.state.p222 === "¿ ") {this.setState({p222: "? "});}
        if (this.state.p222 === "? ") {this.setState({p222: " "});}
  }
  p223() {
        if (this.state.p223 === "recuerdo") {
                this.setState({p223: "Recuerdo"});
        } else {
                this.setState({p223: "recuerdo"});
        }
  }
  p224() {
        if (this.state.p224 === " ") {this.setState({p224: ", "});}
        if (this.state.p224 === ", ") {this.setState({p224: "; "});}
        if (this.state.p224 === "; ") {this.setState({p224: ": "});}
        if (this.state.p224 === ": ") {this.setState({p224: "( "});}
        if (this.state.p224 === "( ") {this.setState({p224: ") "});}
        if (this.state.p224 === ") ") {this.setState({p224: "¡ "});}
        if (this.state.p224 === "¡ ") {this.setState({p224: "! "});}
        if (this.state.p224 === "! ") {this.setState({p224: "¿ "});}
        if (this.state.p224 === "¿ ") {this.setState({p224: "? "});}
        if (this.state.p224 === "? ") {this.setState({p224: " "});}
  }
  p225() {
        if (this.state.p225 === "mi") {
                this.setState({p225: "Mi"});
        } else {
                this.setState({p225: "mi"});
        }
  }
  p226() {
        if (this.state.p226 === " ") {this.setState({p226: ", "});}
        if (this.state.p226 === ", ") {this.setState({p226: "; "});}
        if (this.state.p226 === "; ") {this.setState({p226: ": "});}
        if (this.state.p226 === ": ") {this.setState({p226: "( "});}
        if (this.state.p226 === "( ") {this.setState({p226: ") "});}
        if (this.state.p226 === ") ") {this.setState({p226: "¡ "});}
        if (this.state.p226 === "¡ ") {this.setState({p226: "! "});}
        if (this.state.p226 === "! ") {this.setState({p226: "¿ "});}
        if (this.state.p226 === "¿ ") {this.setState({p226: "? "});}
        if (this.state.p226 === "? ") {this.setState({p226: " "});}
  }
  p227() {
        if (this.state.p227 === "paso") {
                this.setState({p227: "Paso"});
        } else {
                this.setState({p227: "paso"});
        }
  }
  p228() {
        if (this.state.p228 === " ") {this.setState({p228: ", "});}
        if (this.state.p228 === ", ") {this.setState({p228: "; "});}
        if (this.state.p228 === "; ") {this.setState({p228: ": "});}
        if (this.state.p228 === ": ") {this.setState({p228: "( "});}
        if (this.state.p228 === "( ") {this.setState({p228: ") "});}
        if (this.state.p228 === ") ") {this.setState({p228: "¡ "});}
        if (this.state.p228 === "¡ ") {this.setState({p228: "! "});}
        if (this.state.p228 === "! ") {this.setState({p228: "¿ "});}
        if (this.state.p228 === "¿ ") {this.setState({p228: "? "});}
        if (this.state.p228 === "? ") {this.setState({p228: " "});}
  }
  p229() {
        if (this.state.p229 === "tembloroso") {
                this.setState({p229: "Tembloroso"});
        } else {
                this.setState({p229: "tembloroso"});
        }
  }
  p230() {
        if (this.state.p230 === " ") {this.setState({p230: ", "});}
        if (this.state.p230 === ", ") {this.setState({p230: "; "});}
        if (this.state.p230 === "; ") {this.setState({p230: ": "});}
        if (this.state.p230 === ": ") {this.setState({p230: "( "});}
        if (this.state.p230 === "( ") {this.setState({p230: ") "});}
        if (this.state.p230 === ") ") {this.setState({p230: "¡ "});}
        if (this.state.p230 === "¡ ") {this.setState({p230: "! "});}
        if (this.state.p230 === "! ") {this.setState({p230: "¿ "});}
        if (this.state.p230 === "¿ ") {this.setState({p230: "? "});}
        if (this.state.p230 === "? ") {this.setState({p230: " "});}
  }
  p231() {
        if (this.state.p231 === "vacilante") {
                this.setState({p231: "Vacilante"});
        } else {
                this.setState({p231: "vacilante"});
        }
  }
  p232() {
        if (this.state.p232 === " ") {this.setState({p232: ", "});}
        if (this.state.p232 === ", ") {this.setState({p232: "; "});}
        if (this.state.p232 === "; ") {this.setState({p232: ": "});}
        if (this.state.p232 === ": ") {this.setState({p232: "( "});}
        if (this.state.p232 === "( ") {this.setState({p232: ") "});}
        if (this.state.p232 === ") ") {this.setState({p232: "¡ "});}
        if (this.state.p232 === "¡ ") {this.setState({p232: "! "});}
        if (this.state.p232 === "! ") {this.setState({p232: "¿ "});}
        if (this.state.p232 === "¿ ") {this.setState({p232: "? "});}
        if (this.state.p232 === "? ") {this.setState({p232: " "});}
  }
  p233() {
        if (this.state.p233 === "cuando") {
                this.setState({p233: "Cuando"});
        } else {
                this.setState({p233: "cuando"});
        }
  }
  p234() {
        if (this.state.p234 === " ") {this.setState({p234: ", "});}
        if (this.state.p234 === ", ") {this.setState({p234: "; "});}
        if (this.state.p234 === "; ") {this.setState({p234: ": "});}
        if (this.state.p234 === ": ") {this.setState({p234: "( "});}
        if (this.state.p234 === "( ") {this.setState({p234: ") "});}
        if (this.state.p234 === ") ") {this.setState({p234: "¡ "});}
        if (this.state.p234 === "¡ ") {this.setState({p234: "! "});}
        if (this.state.p234 === "! ") {this.setState({p234: "¿ "});}
        if (this.state.p234 === "¿ ") {this.setState({p234: "? "});}
        if (this.state.p234 === "? ") {this.setState({p234: " "});}
  }
  p235() {
        if (this.state.p235 === "de") {
                this.setState({p235: "De"});
        } else {
                this.setState({p235: "de"});
        }
  }
  p236() {
          if (this.state.p236 === " ") {this.setState({p236: ", "});}
          if (this.state.p236 === ", ") {this.setState({p236: "; "});}
          if (this.state.p236 === "; ") {this.setState({p236: ": "});}
          if (this.state.p236 === ": ") {this.setState({p236: "( "});}
          if (this.state.p236 === "( ") {this.setState({p236: ") "});}
          if (this.state.p236 === ") ") {this.setState({p236: "¡ "});}
          if (this.state.p236 === "¡ ") {this.setState({p236: "! "});}
          if (this.state.p236 === "! ") {this.setState({p236: "¿ "});}
          if (this.state.p236 === "¿ ") {this.setState({p236: "? "});}
          if (this.state.p236 === "? ") {this.setState({p236: " "});}
  }
  p237() {
          if (this.state.p237 === "regreso") {
                  this.setState({p237: "Regreso"});
          } else {
                  this.setState({p237: "regreso"});
          }
  }
  p238() {
          if (this.state.p238 === " ") {this.setState({p238: ", "});}
          if (this.state.p238 === ", ") {this.setState({p238: "; "});}
          if (this.state.p238 === "; ") {this.setState({p238: ": "});}
          if (this.state.p238 === ": ") {this.setState({p238: "( "});}
          if (this.state.p238 === "( ") {this.setState({p238: ") "});}
          if (this.state.p238 === ") ") {this.setState({p238: "¡ "});}
          if (this.state.p238 === "¡ ") {this.setState({p238: "! "});}
          if (this.state.p238 === "! ") {this.setState({p238: "¿ "});}
          if (this.state.p238 === "¿ ") {this.setState({p238: "? "});}
          if (this.state.p238 === "? ") {this.setState({p238: " "});}
  }
  p239() {
          if (this.state.p239 === "a") {
                  this.setState({p239: "A"});
          } else {
                  this.setState({p239: "a"});
          }
  }
  p240() {
          if (this.state.p240 === " ") {this.setState({p240: ", "});}
          if (this.state.p240 === ", ") {this.setState({p240: "; "});}
          if (this.state.p240 === "; ") {this.setState({p240: ": "});}
          if (this.state.p240 === ": ") {this.setState({p240: "( "});}
          if (this.state.p240 === "( ") {this.setState({p240: ") "});}
          if (this.state.p240 === ") ") {this.setState({p240: "¡ "});}
          if (this.state.p240 === "¡ ") {this.setState({p240: "! "});}
          if (this.state.p240 === "! ") {this.setState({p240: "¿ "});}
          if (this.state.p240 === "¿ ") {this.setState({p240: "? "});}
          if (this.state.p240 === "? ") {this.setState({p240: " "});}
  }
  p241() {
          if (this.state.p241 === "la") {
                  this.setState({p241: "La"});
          } else {
                  this.setState({p241: "la"});
          }
  }
  p242() {
          if (this.state.p242 === " ") {this.setState({p242: ", "});}
          if (this.state.p242 === ", ") {this.setState({p242: "; "});}
          if (this.state.p242 === "; ") {this.setState({p242: ": "});}
          if (this.state.p242 === ": ") {this.setState({p242: "( "});}
          if (this.state.p242 === "( ") {this.setState({p242: ") "});}
          if (this.state.p242 === ") ") {this.setState({p242: "¡ "});}
          if (this.state.p242 === "¡ ") {this.setState({p242: "! "});}
          if (this.state.p242 === "! ") {this.setState({p242: "¿ "});}
          if (this.state.p242 === "¿ ") {this.setState({p242: "? "});}
          if (this.state.p242 === "? ") {this.setState({p242: " "});}
  }
  p243() {
          if (this.state.p243 === "casa") {
                  this.setState({p243: "Casa"});
          } else {
                  this.setState({p243: "casa"});
          }
  }
  p244() {
          if (this.state.p244 === " ") {this.setState({p244: ", "});}
          if (this.state.p244 === ", ") {this.setState({p244: "; "});}
          if (this.state.p244 === "; ") {this.setState({p244: ": "});}
          if (this.state.p244 === ": ") {this.setState({p244: "( "});}
          if (this.state.p244 === "( ") {this.setState({p244: ") "});}
          if (this.state.p244 === ") ") {this.setState({p244: "¡ "});}
          if (this.state.p244 === "¡ ") {this.setState({p244: "! "});}
          if (this.state.p244 === "! ") {this.setState({p244: "¿ "});}
          if (this.state.p244 === "¿ ") {this.setState({p244: "? "});}
          if (this.state.p244 === "? ") {this.setState({p244: " "});}
  }
  p245() {
          if (this.state.p245 === "sentía") {
                  this.setState({p245: "Sentía"});
          } else {
                  this.setState({p245: "sentía"});
          }
  }
  p246() {
          if (this.state.p246 === " ") {this.setState({p246: ", "});}
          if (this.state.p246 === ", ") {this.setState({p246: "; "});}
          if (this.state.p246 === "; ") {this.setState({p246: ": "});}
          if (this.state.p246 === ": ") {this.setState({p246: "( "});}
          if (this.state.p246 === "( ") {this.setState({p246: ") "});}
          if (this.state.p246 === ") ") {this.setState({p246: "¡ "});}
          if (this.state.p246 === "¡ ") {this.setState({p246: "! "});}
          if (this.state.p246 === "! ") {this.setState({p246: "¿ "});}
          if (this.state.p246 === "¿ ") {this.setState({p246: "? "});}
          if (this.state.p246 === "? ") {this.setState({p246: " "});}
  }
  p247() {
          if (this.state.p247 === "el") {
                  this.setState({p247: "El"});
          } else {
                  this.setState({p247: "el"});
          }
  }
  p248() {
          if (this.state.p248 === " ") {this.setState({p248: ", "});}
          if (this.state.p248 === ", ") {this.setState({p248: "; "});}
          if (this.state.p248 === "; ") {this.setState({p248: ": "});}
          if (this.state.p248 === ": ") {this.setState({p248: "( "});}
          if (this.state.p248 === "( ") {this.setState({p248: ") "});}
          if (this.state.p248 === ") ") {this.setState({p248: "¡ "});}
          if (this.state.p248 === "¡ ") {this.setState({p248: "! "});}
          if (this.state.p248 === "! ") {this.setState({p248: "¿ "});}
          if (this.state.p248 === "¿ ") {this.setState({p248: "? "});}
          if (this.state.p248 === "? ") {this.setState({p248: " "});}
  }
  p249() {
          if (this.state.p249 === "peso") {
                  this.setState({p249: "Peso"});
          } else {
                  this.setState({p249: "peso"});
          }
  }
  p250() {
          if (this.state.p250 === " ") {this.setState({p250: ", "});}
          if (this.state.p250 === ", ") {this.setState({p250: "; "});}
          if (this.state.p250 === "; ") {this.setState({p250: ": "});}
          if (this.state.p250 === ": ") {this.setState({p250: "( "});}
          if (this.state.p250 === "( ") {this.setState({p250: ") "});}
          if (this.state.p250 === ") ") {this.setState({p250: "¡ "});}
          if (this.state.p250 === "¡ ") {this.setState({p250: "! "});}
          if (this.state.p250 === "! ") {this.setState({p250: "¿ "});}
          if (this.state.p250 === "¿ ") {this.setState({p250: "? "});}
          if (this.state.p250 === "? ") {this.setState({p250: " "});}
  }
  p251() {
          if (this.state.p251 === "leve") {
                  this.setState({p251: "Leve"});
          } else {
                  this.setState({p251: "leve"});
          }
  }
  p252() {
          if (this.state.p252 === " ") {this.setState({p252: ", "});}
          if (this.state.p252 === ", ") {this.setState({p252: "; "});}
          if (this.state.p252 === "; ") {this.setState({p252: ": "});}
          if (this.state.p252 === ": ") {this.setState({p252: "( "});}
          if (this.state.p252 === "( ") {this.setState({p252: ") "});}
          if (this.state.p252 === ") ") {this.setState({p252: "¡ "});}
          if (this.state.p252 === "¡ ") {this.setState({p252: "! "});}
          if (this.state.p252 === "! ") {this.setState({p252: "¿ "});}
          if (this.state.p252 === "¿ ") {this.setState({p252: "? "});}
          if (this.state.p252 === "? ") {this.setState({p252: " "});}
  }
  p253() {
          if (this.state.p253 === "y") {
                  this.setState({p253: "Y"});
          } else {
                  this.setState({p253: "y"});
          }
  }
  p254() {
          if (this.state.p254 === " ") {this.setState({p254: ", "});}
          if (this.state.p254 === ", ") {this.setState({p254: "; "});}
          if (this.state.p254 === "; ") {this.setState({p254: ": "});}
          if (this.state.p254 === ": ") {this.setState({p254: "( "});}
          if (this.state.p254 === "( ") {this.setState({p254: ") "});}
          if (this.state.p254 === ") ") {this.setState({p254: "¡ "});}
          if (this.state.p254 === "¡ ") {this.setState({p254: "! "});}
          if (this.state.p254 === "! ") {this.setState({p254: "¿ "});}
          if (this.state.p254 === "¿ ") {this.setState({p254: "? "});}
          if (this.state.p254 === "? ") {this.setState({p254: " "});}
  }
  p255() {
          if (this.state.p255 === "denso") {
                  this.setState({p255: "Denso"});
          } else {
                  this.setState({p255: "denso"});
          }
  }
  p256() {
          if (this.state.p256 === " ") {this.setState({p256: ", "});}
          if (this.state.p256 === ", ") {this.setState({p256: "; "});}
          if (this.state.p256 === "; ") {this.setState({p256: ": "});}
          if (this.state.p256 === ": ") {this.setState({p256: "( "});}
          if (this.state.p256 === "( ") {this.setState({p256: ") "});}
          if (this.state.p256 === ") ") {this.setState({p256: "¡ "});}
          if (this.state.p256 === "¡ ") {this.setState({p256: "! "});}
          if (this.state.p256 === "! ") {this.setState({p256: "¿ "});}
          if (this.state.p256 === "¿ ") {this.setState({p256: "? "});}
          if (this.state.p256 === "? ") {this.setState({p256: " "});}
  }
  p257() {
          if (this.state.p257 === "de") {
                  this.setState({p257: "De"});
          } else {
                  this.setState({p257: "de"});
          }
  }
  p258() {
          if (this.state.p258 === " ") {this.setState({p258: ", "});}
          if (this.state.p258 === ", ") {this.setState({p258: "; "});}
          if (this.state.p258 === "; ") {this.setState({p258: ": "});}
          if (this.state.p258 === ": ") {this.setState({p258: "( "});}
          if (this.state.p258 === "( ") {this.setState({p258: ") "});}
          if (this.state.p258 === ") ") {this.setState({p258: "¡ "});}
          if (this.state.p258 === "¡ ") {this.setState({p258: "! "});}
          if (this.state.p258 === "! ") {this.setState({p258: "¿ "});}
          if (this.state.p258 === "¿ ") {this.setState({p258: "? "});}
          if (this.state.p258 === "? ") {this.setState({p258: " "});}
  }
  p259() {
          if (this.state.p259 === "la") {
                  this.setState({p259: "La"});
          } else {
                  this.setState({p259: "la"});
          }
  }
  p260() {
          if (this.state.p260 === " ") {this.setState({p260: ", "});}
          if (this.state.p260 === ", ") {this.setState({p260: "; "});}
          if (this.state.p260 === "; ") {this.setState({p260: ": "});}
          if (this.state.p260 === ": ") {this.setState({p260: "( "});}
          if (this.state.p260 === "( ") {this.setState({p260: ") "});}
          if (this.state.p260 === ") ") {this.setState({p260: "¡ "});}
          if (this.state.p260 === "¡ ") {this.setState({p260: "! "});}
          if (this.state.p260 === "! ") {this.setState({p260: "¿ "});}
          if (this.state.p260 === "¿ ") {this.setState({p260: "? "});}
          if (this.state.p260 === "? ") {this.setState({p260: " "});}
  }
  p261() {
          if (this.state.p261 === "araña") {
                  this.setState({p261: "Araña"});
          } else {
                  this.setState({p261: "araña"});
          }
  }
  p262() {
        if (this.state.p262 === " ") {this.setState({p262: ", "});}
        if (this.state.p262 === ", ") {this.setState({p262: "; "});}
        if (this.state.p262 === "; ") {this.setState({p262: ": "});}
        if (this.state.p262 === ": ") {this.setState({p262: "( "});}
        if (this.state.p262 === "( ") {this.setState({p262: ") "});}
        if (this.state.p262 === ") ") {this.setState({p262: "¡ "});}
        if (this.state.p262 === "¡ ") {this.setState({p262: "! "});}
        if (this.state.p262 === "! ") {this.setState({p262: "¿ "});}
        if (this.state.p262 === "¿ ") {this.setState({p262: "? "});}
        if (this.state.p262 === "? ") {this.setState({p262: " "});}
  }
  p263() {
        if (this.state.p263 === "ese") {
                this.setState({p263: "Ese"});
        } else {
                this.setState({p263: "ese"});
        }
  }
  p264() {
        if (this.state.p264 === " ") {this.setState({p264: ", "});}
        if (this.state.p264 === ", ") {this.setState({p264: "; "});}
        if (this.state.p264 === "; ") {this.setState({p264: ": "});}
        if (this.state.p264 === ": ") {this.setState({p264: "( "});}
        if (this.state.p264 === "( ") {this.setState({p264: ") "});}
        if (this.state.p264 === ") ") {this.setState({p264: "¡ "});}
        if (this.state.p264 === "¡ ") {this.setState({p264: "! "});}
        if (this.state.p264 === "! ") {this.setState({p264: "¿ "});}
        if (this.state.p264 === "¿ ") {this.setState({p264: "? "});}
        if (this.state.p264 === "? ") {this.setState({p264: " "});}
  }
  p265() {
        if (this.state.p265 === "peso") {
                this.setState({p265: "Peso"});
        } else {
                this.setState({p265: "peso"});
        }
  }
  p266() {
        if (this.state.p266 === " ") {this.setState({p266: ", "});}
        if (this.state.p266 === ", ") {this.setState({p266: "; "});}
        if (this.state.p266 === "; ") {this.setState({p266: ": "});}
        if (this.state.p266 === ": ") {this.setState({p266: "( "});}
        if (this.state.p266 === "( ") {this.setState({p266: ") "});}
        if (this.state.p266 === ") ") {this.setState({p266: "¡ "});}
        if (this.state.p266 === "¡ ") {this.setState({p266: "! "});}
        if (this.state.p266 === "! ") {this.setState({p266: "¿ "});}
        if (this.state.p266 === "¿ ") {this.setState({p266: "? "});}
        if (this.state.p266 === "? ") {this.setState({p266: " "});}
  }
  p267() {
        if (this.state.p267 === "del") {
                this.setState({p267: "Del"});
        } else {
                this.setState({p267: "del"});
        }
  }
  p268() {
        if (this.state.p268 === " ") {this.setState({p268: ", "});}
        if (this.state.p268 === ", ") {this.setState({p268: "; "});}
        if (this.state.p268 === "; ") {this.setState({p268: ": "});}
        if (this.state.p268 === ": ") {this.setState({p268: "( "});}
        if (this.state.p268 === "( ") {this.setState({p268: ") "});}
        if (this.state.p268 === ") ") {this.setState({p268: "¡ "});}
        if (this.state.p268 === "¡ ") {this.setState({p268: "! "});}
        if (this.state.p268 === "! ") {this.setState({p268: "¿ "});}
        if (this.state.p268 === "¿ ") {this.setState({p268: "? "});}
        if (this.state.p268 === "? ") {this.setState({p268: " "});}
  }
  p269() {
        if (this.state.p269 === "cual") {
                this.setState({p269: "Cual"});
        } else {
                this.setState({p269: "cual"});
        }
  }
  p270() {
        if (this.state.p270 === " ") {this.setState({p270: ", "});}
        if (this.state.p270 === ", ") {this.setState({p270: "; "});}
        if (this.state.p270 === "; ") {this.setState({p270: ": "});}
        if (this.state.p270 === ": ") {this.setState({p270: "( "});}
        if (this.state.p270 === "( ") {this.setState({p270: ") "});}
        if (this.state.p270 === ") ") {this.setState({p270: "¡ "});}
        if (this.state.p270 === "¡ ") {this.setState({p270: "! "});}
        if (this.state.p270 === "! ") {this.setState({p270: "¿ "});}
        if (this.state.p270 === "¿ ") {this.setState({p270: "? "});}
        if (this.state.p270 === "? ") {this.setState({p270: " "});}
  }
  p271() {
        if (this.state.p271 === "podí­a") {
                this.setState({p271: "Podí­­a"});
        } else {
                this.setState({p271: "podí­a"});
        }
  }
  p272() {
        if (this.state.p272 === " ") {this.setState({p272: ", "});}
        if (this.state.p272 === ", ") {this.setState({p272: "; "});}
        if (this.state.p272 === "; ") {this.setState({p272: ": "});}
        if (this.state.p272 === ": ") {this.setState({p272: "( "});}
        if (this.state.p272 === "( ") {this.setState({p272: ") "});}
        if (this.state.p272 === ") ") {this.setState({p272: "¡ "});}
        if (this.state.p272 === "¡ ") {this.setState({p272: "! "});}
        if (this.state.p272 === "! ") {this.setState({p272: "¿ "});}
        if (this.state.p272 === "¿ ") {this.setState({p272: "? "});}
        if (this.state.p272 === "? ") {this.setState({p272: " "});}
  }
  p273() {
        if (this.state.p273 === "descontar") {
                this.setState({p273: "Descontar"});
        } else {
                this.setState({p273: "descontar"});
        }
  }
  p274() {
        if (this.state.p274 === " ") {this.setState({p274: ", "});}
        if (this.state.p274 === ", ") {this.setState({p274: "; "});}
        if (this.state.p274 === "; ") {this.setState({p274: ": "});}
        if (this.state.p274 === ": ") {this.setState({p274: "( "});}
        if (this.state.p274 === "( ") {this.setState({p274: ") "});}
        if (this.state.p274 === ") ") {this.setState({p274: "¡ "});}
        if (this.state.p274 === "¡ ") {this.setState({p274: "! "});}
        if (this.state.p274 === "! ") {this.setState({p274: "¿ "});}
        if (this.state.p274 === "¿ ") {this.setState({p274: "? "});}
        if (this.state.p274 === "? ") {this.setState({p274: " "});}
  }
  p275() {
        if (this.state.p275 === "con") {
                this.setState({p275: "Con"});
        } else {
                this.setState({p275: "con"});
        }
  }
  p276() {
        if (this.state.p276 === " ") {this.setState({p276: ", "});}
        if (this.state.p276 === ", ") {this.setState({p276: "; "});}
        if (this.state.p276 === "; ") {this.setState({p276: ": "});}
        if (this.state.p276 === ": ") {this.setState({p276: "( "});}
        if (this.state.p276 === "( ") {this.setState({p276: ") "});}
        if (this.state.p276 === ") ") {this.setState({p276: "¡ "});}
        if (this.state.p276 === "¡ ") {this.setState({p276: "! "});}
        if (this.state.p276 === "! ") {this.setState({p276: "¿ "});}
        if (this.state.p276 === "¿ ") {this.setState({p276: "? "});}
        if (this.state.p276 === "? ") {this.setState({p276: " "});}
  }
  p277() {
        if (this.state.p277 === "seguridad") {
                this.setState({p277: "Seguridad"});
        } else {
                this.setState({p277: "seguridad"});
        }
  }
  p278() {
        if (this.state.p278 === " ") {this.setState({p278: ", "});}
        if (this.state.p278 === ", ") {this.setState({p278: "; "});}
        if (this.state.p278 === "; ") {this.setState({p278: ": "});}
        if (this.state.p278 === ": ") {this.setState({p278: "( "});}
        if (this.state.p278 === "( ") {this.setState({p278: ") "});}
        if (this.state.p278 === ") ") {this.setState({p278: "¡ "});}
        if (this.state.p278 === "¡ ") {this.setState({p278: "! "});}
        if (this.state.p278 === "! ") {this.setState({p278: "¿ "});}
        if (this.state.p278 === "¿ ") {this.setState({p278: "? "});}
        if (this.state.p278 === "? ") {this.setState({p278: " "});}
  }
  p279() {
        if (this.state.p279 === "el") {
                this.setState({p279: "El"});
        } else {
                this.setState({p279: "el"});
        }
  }
  p280() {
        if (this.state.p280 === " ") {this.setState({p280: ", "});}
        if (this.state.p280 === ", ") {this.setState({p280: "; "});}
        if (this.state.p280 === "; ") {this.setState({p280: ": "});}
        if (this.state.p280 === ": ") {this.setState({p280: "( "});}
        if (this.state.p280 === "( ") {this.setState({p280: ") "});}
        if (this.state.p280 === ") ") {this.setState({p280: "¡ "});}
        if (this.state.p280 === "¡ ") {this.setState({p280: "! "});}
        if (this.state.p280 === "! ") {this.setState({p280: "¿ "});}
        if (this.state.p280 === "¿ ") {this.setState({p280: "? "});}
        if (this.state.p280 === "? ") {this.setState({p280: " "});}
  }
  p281() {
        if (this.state.p281 === "de") {
                this.setState({p281: "De"});
        } else {
                this.setState({p281: "de"});
        }
  }
  p282() {
        if (this.state.p282 === " ") {this.setState({p282: ", "});}
        if (this.state.p282 === ", ") {this.setState({p282: "; "});}
        if (this.state.p282 === "; ") {this.setState({p282: ": "});}
        if (this.state.p282 === ": ") {this.setState({p282: "( "});}
        if (this.state.p282 === "( ") {this.setState({p282: ") "});}
        if (this.state.p282 === ") ") {this.setState({p282: "¡ "});}
        if (this.state.p282 === "¡ ") {this.setState({p282: "! "});}
        if (this.state.p282 === "! ") {this.setState({p282: "¿ "});}
        if (this.state.p282 === "¿ ") {this.setState({p282: "? "});}
        if (this.state.p282 === "? ") {this.setState({p282: " "});}
  }
  p283() {
        if (this.state.p283 === "la") {
                this.setState({p283: "La"});
        } else {
                this.setState({p283: "la"});
        }
  }
  p284() {
        if (this.state.p284 === " ") {this.setState({p284: ", "});}
        if (this.state.p284 === ", ") {this.setState({p284: "; "});}
        if (this.state.p284 === "; ") {this.setState({p284: ": "});}
        if (this.state.p284 === ": ") {this.setState({p284: "( "});}
        if (this.state.p284 === "( ") {this.setState({p284: ") "});}
        if (this.state.p284 === ") ") {this.setState({p284: "¡ "});}
        if (this.state.p284 === "¡ ") {this.setState({p284: "! "});}
        if (this.state.p284 === "! ") {this.setState({p284: "¿ "});}
        if (this.state.p284 === "¿ ") {this.setState({p284: "? "});}
        if (this.state.p284 === "? ") {this.setState({p284: " "});}
  }
  p285() {
        if (this.state.p285 === "caja") {
                this.setState({p285: "Caja"});
        } else {
                this.setState({p285: "caja"});
        }
  }
  p286() {
        if (this.state.p286 === " ") {this.setState({p286: ", "});}
        if (this.state.p286 === ", ") {this.setState({p286: "; "});}
        if (this.state.p286 === "; ") {this.setState({p286: ": "});}
        if (this.state.p286 === ": ") {this.setState({p286: "( "});}
        if (this.state.p286 === "( ") {this.setState({p286: ") "});}
        if (this.state.p286 === ") ") {this.setState({p286: "¡ "});}
        if (this.state.p286 === "¡ ") {this.setState({p286: "! "});}
        if (this.state.p286 === "! ") {this.setState({p286: "¿ "});}
        if (this.state.p286 === "¿ ") {this.setState({p286: "? "});}
        if (this.state.p286 === "? ") {this.setState({p286: " "});}
  }
  p287() {
        if (this.state.p287 === "de") {
                this.setState({p287: "De"});
        } else {
                this.setState({p287: "de"});
        }
  }
  p288() {
        if (this.state.p288 === " ") {this.setState({p288: ", "});}
        if (this.state.p288 === ", ") {this.setState({p288: "; "});}
        if (this.state.p288 === "; ") {this.setState({p288: ": "});}
        if (this.state.p288 === ": ") {this.setState({p288: "( "});}
        if (this.state.p288 === "( ") {this.setState({p288: ") "});}
        if (this.state.p288 === ") ") {this.setState({p288: "¡ "});}
        if (this.state.p288 === "¡ ") {this.setState({p288: "! "});}
        if (this.state.p288 === "! ") {this.setState({p288: "¿ "});}
        if (this.state.p288 === "¿ ") {this.setState({p288: "? "});}
        if (this.state.p288 === "? ") {this.setState({p288: " "});}
  }
  p289() {
        if (this.state.p289 === "madera") {
                this.setState({p289: "Madera"});
        } else {
                this.setState({p289: "madera"});
        }
  }
  p290() {
        if (this.state.p290 === " ") {this.setState({p290: ", "});}
        if (this.state.p290 === ", ") {this.setState({p290: "; "});}
        if (this.state.p290 === "; ") {this.setState({p290: ": "});}
        if (this.state.p290 === ": ") {this.setState({p290: "( "});}
        if (this.state.p290 === "( ") {this.setState({p290: ") "});}
        if (this.state.p290 === ") ") {this.setState({p290: "¡ "});}
        if (this.state.p290 === "¡ ") {this.setState({p290: "! "});}
        if (this.state.p290 === "! ") {this.setState({p290: "¿ "});}
        if (this.state.p290 === "¿ ") {this.setState({p290: "? "});}
        if (this.state.p290 === "? ") {this.setState({p290: " "});}
  }
  p291() {
        if (this.state.p291 === "en") {
                this.setState({p291: "En"});
        } else {
                this.setState({p291: "en"});
        }
  }
  p292() {
        if (this.state.p292 === " ") {this.setState({p292: ", "});}
        if (this.state.p292 === ", ") {this.setState({p292: "; "});}
        if (this.state.p292 === "; ") {this.setState({p292: ": "});}
        if (this.state.p292 === ": ") {this.setState({p292: "( "});}
        if (this.state.p292 === "( ") {this.setState({p292: ") "});}
        if (this.state.p292 === ") ") {this.setState({p292: "¡ "});}
        if (this.state.p292 === "¡ ") {this.setState({p292: "! "});}
        if (this.state.p292 === "! ") {this.setState({p292: "¿ "});}
        if (this.state.p292 === "¿ ") {this.setState({p292: "? "});}
        if (this.state.p292 === "? ") {this.setState({p292: " "});}
  }
  p293() {
        if (this.state.p293 === "que") {
                this.setState({p293: "Que"});
        } else {
                this.setState({p293: "que"});
        }
  }
  p294() {
        if (this.state.p294 === " ") {this.setState({p294: ", "});}
        if (this.state.p294 === ", ") {this.setState({p294: "; "});}
        if (this.state.p294 === "; ") {this.setState({p294: ": "});}
        if (this.state.p294 === ": ") {this.setState({p294: "( "});}
        if (this.state.p294 === "( ") {this.setState({p294: ") "});}
        if (this.state.p294 === ") ") {this.setState({p294: "¡ "});}
        if (this.state.p294 === "¡ ") {this.setState({p294: "! "});}
        if (this.state.p294 === "! ") {this.setState({p294: "¿ "});}
        if (this.state.p294 === "¿ ") {this.setState({p294: "? "});}
        if (this.state.p294 === "? ") {this.setState({p294: " "});}
  }
  p295() {
        if (this.state.p295 === "la") {
                this.setState({p295: "La"});
        } else {
                this.setState({p295: "la"});
        }
  }
  p296() {
        if (this.state.p296 === " ") {this.setState({p296: ", "});}
        if (this.state.p296 === ", ") {this.setState({p296: "; "});}
        if (this.state.p296 === "; ") {this.setState({p296: ": "});}
        if (this.state.p296 === ": ") {this.setState({p296: "( "});}
        if (this.state.p296 === "( ") {this.setState({p296: ") "});}
        if (this.state.p296 === ") ") {this.setState({p296: "¡ "});}
        if (this.state.p296 === "¡ ") {this.setState({p296: "! "});}
        if (this.state.p296 === "! ") {this.setState({p296: "¿ "});}
        if (this.state.p296 === "¿ ") {this.setState({p296: "? "});}
        if (this.state.p296 === "? ") {this.setState({p296: " "});}
  }
  p297() {
        if (this.state.p297 === "llevaba") {
                this.setState({p297: "Llevaba"});
        } else {
                this.setState({p297: "llevaba"});
        }
  }
  p298() {
        if (this.state.p298 === " ") {this.setState({p298: ", "});}
        if (this.state.p298 === ", ") {this.setState({p298: "; "});}
        if (this.state.p298 === "; ") {this.setState({p298: ": "});}
        if (this.state.p298 === ": ") {this.setState({p298: "( "});}
        if (this.state.p298 === "( ") {this.setState({p298: ") "});}
        if (this.state.p298 === ") ") {this.setState({p298: "¡ "});}
        if (this.state.p298 === "¡ ") {this.setState({p298: "! "});}
        if (this.state.p298 === "! ") {this.setState({p298: "¿ "});}
        if (this.state.p298 === "¿ ") {this.setState({p298: "? "});}
        if (this.state.p298 === "? ") {this.setState({p298: " "});}
  }
  p299() {
        if (this.state.p299 === "como") {
                this.setState({p299: "Como"});
        } else {
                this.setState({p299: "como"});
        }
  }
  p300() {
        if (this.state.p300 === " ") {this.setState({p300: ", "});}
        if (this.state.p300 === ", ") {this.setState({p300: "; "});}
        if (this.state.p300 === "; ") {this.setState({p300: ": "});}
        if (this.state.p300 === ": ") {this.setState({p300: "( "});}
        if (this.state.p300 === "( ") {this.setState({p300: ") "});}
        if (this.state.p300 === ") ") {this.setState({p300: "¡ "});}
        if (this.state.p300 === "¡ ") {this.setState({p300: "! "});}
        if (this.state.p300 === "! ") {this.setState({p300: "¿ "});}
        if (this.state.p300 === "¿ ") {this.setState({p300: "? "});}
        if (this.state.p300 === "? ") {this.setState({p300: " "});}
  }
  p301() {
        if (this.state.p301 === "si") {
                this.setState({p301: "Si"});
        } else {
                this.setState({p301: "si"});
        }
  }
  p302() {
        if (this.state.p302 === " ") {this.setState({p302: ", "});}
        if (this.state.p302 === ", ") {this.setState({p302: "; "});}
        if (this.state.p302 === "; ") {this.setState({p302: ": "});}
        if (this.state.p302 === ": ") {this.setState({p302: "( "});}
        if (this.state.p302 === "( ") {this.setState({p302: ") "});}
        if (this.state.p302 === ") ") {this.setState({p302: "¡ "});}
        if (this.state.p302 === "¡ ") {this.setState({p302: "! "});}
        if (this.state.p302 === "! ") {this.setState({p302: "¿ "});}
        if (this.state.p302 === "¿ ") {this.setState({p302: "? "});}
        if (this.state.p302 === "? ") {this.setState({p302: " "});}
  }
  p303() {
        if (this.state.p303 === "fueran") {
                this.setState({p303: "Fueran"});
        } else {
                this.setState({p303: "fueran"});
        }
  }
  p304() {
        if (this.state.p304 === " ") {this.setState({p304: ", "});}
        if (this.state.p304 === ", ") {this.setState({p304: "; "});}
        if (this.state.p304 === "; ") {this.setState({p304: ": "});}
        if (this.state.p304 === ": ") {this.setState({p304: "( "});}
        if (this.state.p304 === "( ") {this.setState({p304: ") "});}
        if (this.state.p304 === ") ") {this.setState({p304: "¡ "});}
        if (this.state.p304 === "¡ ") {this.setState({p304: "! "});}
        if (this.state.p304 === "! ") {this.setState({p304: "¿ "});}
        if (this.state.p304 === "¿ ") {this.setState({p304: "? "});}
        if (this.state.p304 === "? ") {this.setState({p304: " "});}
  }
  p305() {
        if (this.state.p305 === "dos") {
                this.setState({p305: "Dos"});
        } else {
                this.setState({p305: "dos"});
        }
  }
  p306() {
        if (this.state.p306 === " ") {this.setState({p306: ", "});}
        if (this.state.p306 === ", ") {this.setState({p306: "; "});}
        if (this.state.p306 === "; ") {this.setState({p306: ": "});}
        if (this.state.p306 === ": ") {this.setState({p306: "( "});}
        if (this.state.p306 === "( ") {this.setState({p306: ") "});}
        if (this.state.p306 === ") ") {this.setState({p306: "¡ "});}
        if (this.state.p306 === "¡ ") {this.setState({p306: "! "});}
        if (this.state.p306 === "! ") {this.setState({p306: "¿ "});}
        if (this.state.p306 === "¿ ") {this.setState({p306: "? "});}
        if (this.state.p306 === "? ") {this.setState({p306: " "});}
  }
  p307() {
        if (this.state.p307 === "pesos") {
                this.setState({p307: "Pesos"});
        } else {
                this.setState({p307: "pesos"});
        }
  }
  p308() {
        if (this.state.p308 === " ") {this.setState({p308: ", "});}
        if (this.state.p308 === ", ") {this.setState({p308: "; "});}
        if (this.state.p308 === "; ") {this.setState({p308: ": "});}
        if (this.state.p308 === ": ") {this.setState({p308: "( "});}
        if (this.state.p308 === "( ") {this.setState({p308: ") "});}
        if (this.state.p308 === ") ") {this.setState({p308: "¡ "});}
        if (this.state.p308 === "¡ ") {this.setState({p308: "! "});}
        if (this.state.p308 === "! ") {this.setState({p308: "¿ "});}
        if (this.state.p308 === "¿ ") {this.setState({p308: "? "});}
        if (this.state.p308 === "? ") {this.setState({p308: " "});}
  }
  p309() {
        if (this.state.p309 === "totalmente") {
                this.setState({p309: "Totalmente"});
        } else {
                this.setState({p309: "totalmente"});
        }
  }
  p310() {
        if (this.state.p310 === " ") {this.setState({p310: ", "});}
        if (this.state.p310 === ", ") {this.setState({p310: "; "});}
        if (this.state.p310 === "; ") {this.setState({p310: ": "});}
        if (this.state.p310 === ": ") {this.setState({p310: "( "});}
        if (this.state.p310 === "( ") {this.setState({p310: ") "});}
        if (this.state.p310 === ") ") {this.setState({p310: "¡ "});}
        if (this.state.p310 === "¡ ") {this.setState({p310: "! "});}
        if (this.state.p310 === "! ") {this.setState({p310: "¿ "});}
        if (this.state.p310 === "¿ ") {this.setState({p310: "? "});}
        if (this.state.p310 === "? ") {this.setState({p310: " "});}
  }
  p311() {
        if (this.state.p311 === "diferentes") {
                this.setState({p311: "Diferentes"});
        } else {
                this.setState({p311: "diferentes"});
        }
  }
  p312() {
        if (this.state.p312 === " ") {this.setState({p312: ", "});}
        if (this.state.p312 === ", ") {this.setState({p312: "; "});}
        if (this.state.p312 === "; ") {this.setState({p312: ": "});}
        if (this.state.p312 === ": ") {this.setState({p312: "( "});}
        if (this.state.p312 === "( ") {this.setState({p312: ") "});}
        if (this.state.p312 === ") ") {this.setState({p312: "¡ "});}
        if (this.state.p312 === "¡ ") {this.setState({p312: "! "});}
        if (this.state.p312 === "! ") {this.setState({p312: "¿ "});}
        if (this.state.p312 === "¿ ") {this.setState({p312: "? "});}
        if (this.state.p312 === "? ") {this.setState({p312: " "});}
  }
  p313() {
        if (this.state.p313 === "el") {
                this.setState({p313: "El"});
        } else {
                this.setState({p313: "el"});
        }
  }
  p314() {
        if (this.state.p314 === " ") {this.setState({p314: ", "});}
        if (this.state.p314 === ", ") {this.setState({p314: "; "});}
        if (this.state.p314 === "; ") {this.setState({p314: ": "});}
        if (this.state.p314 === ": ") {this.setState({p314: "( "});}
        if (this.state.p314 === "( ") {this.setState({p314: ") "});}
        if (this.state.p314 === ") ") {this.setState({p314: "¡ "});}
        if (this.state.p314 === "¡ ") {this.setState({p314: "! "});}
        if (this.state.p314 === "! ") {this.setState({p314: "¿ "});}
        if (this.state.p314 === "¿ ") {this.setState({p314: "? "});}
        if (this.state.p314 === "? ") {this.setState({p314: " "});}
  }
  p315() {
        if (this.state.p315 === "de") {
                this.setState({p315: "De"});
        } else {
                this.setState({p315: "de"});
        }
  }
  p316() {
        if (this.state.p316 === " ") {this.setState({p316: ", "});}
        if (this.state.p316 === ", ") {this.setState({p316: "; "});}
        if (this.state.p316 === "; ") {this.setState({p316: ": "});}
        if (this.state.p316 === ": ") {this.setState({p316: "( "});}
        if (this.state.p316 === "( ") {this.setState({p316: ") "});}
        if (this.state.p316 === ") ") {this.setState({p316: "¡ "});}
        if (this.state.p316 === "¡ ") {this.setState({p316: "! "});}
        if (this.state.p316 === "! ") {this.setState({p316: "¿ "});}
        if (this.state.p316 === "¿ ") {this.setState({p316: "? "});}
        if (this.state.p316 === "? ") {this.setState({p316: " "});}
  }
  p317() {
        if (this.state.p317 === "la") {
                this.setState({p317: "La"});
        } else {
                this.setState({p317: "la"});
        }
  }
  p318() {
        if (this.state.p318 === " ") {this.setState({p318: ", "});}
        if (this.state.p318 === ", ") {this.setState({p318: "; "});}
        if (this.state.p318 === "; ") {this.setState({p318: ": "});}
        if (this.state.p318 === ": ") {this.setState({p318: "( "});}
        if (this.state.p318 === "( ") {this.setState({p318: ") "});}
        if (this.state.p318 === ") ") {this.setState({p318: "¡ "});}
        if (this.state.p318 === "¡ ") {this.setState({p318: "! "});}
        if (this.state.p318 === "! ") {this.setState({p318: "¿ "});}
        if (this.state.p318 === "¿ ") {this.setState({p318: "? "});}
        if (this.state.p318 === "? ") {this.setState({p318: " "});}
  }
  p319() {
        if (this.state.p319 === "madera") {
                this.setState({p319: "Madera"});
        } else {
                this.setState({p319: "madera"});
        }
  }
  p320() {
        if (this.state.p320 === " ") {this.setState({p320: ", "});}
        if (this.state.p320 === ", ") {this.setState({p320: "; "});}
        if (this.state.p320 === "; ") {this.setState({p320: ": "});}
        if (this.state.p320 === ": ") {this.setState({p320: "( "});}
        if (this.state.p320 === "( ") {this.setState({p320: ") "});}
        if (this.state.p320 === ") ") {this.setState({p320: "¡ "});}
        if (this.state.p320 === "¡ ") {this.setState({p320: "! "});}
        if (this.state.p320 === "! ") {this.setState({p320: "¿ "});}
        if (this.state.p320 === "¿ ") {this.setState({p320: "? "});}
        if (this.state.p320 === "? ") {this.setState({p320: " "});}
  }
  p321() {
        if (this.state.p321 === "inocente") {
                this.setState({p321: "Inocente"});
        } else {
                this.setState({p321: "inocente"});
        }
  }
  p322() {
        if (this.state.p322 === " ") {this.setState({p322: ", "});}
        if (this.state.p322 === ", ") {this.setState({p322: "; "});}
        if (this.state.p322 === "; ") {this.setState({p322: ": "});}
        if (this.state.p322 === ": ") {this.setState({p322: "( "});}
        if (this.state.p322 === "( ") {this.setState({p322: ") "});}
        if (this.state.p322 === ") ") {this.setState({p322: "¡ "});}
        if (this.state.p322 === "¡ ") {this.setState({p322: "! "});}
        if (this.state.p322 === "! ") {this.setState({p322: "¿ "});}
        if (this.state.p322 === "¿ ") {this.setState({p322: "? "});}
        if (this.state.p322 === "? ") {this.setState({p322: " "});}
  }
  p323() {
        if (this.state.p323 === "y") {
                this.setState({p323: "Y"});
        } else {
                this.setState({p323: "y"});
        }
  }
  p324() {
        if (this.state.p324 === " ") {this.setState({p324: ", "});}
        if (this.state.p324 === ", ") {this.setState({p324: "; "});}
        if (this.state.p324 === "; ") {this.setState({p324: ": "});}
        if (this.state.p324 === ": ") {this.setState({p324: "( "});}
        if (this.state.p324 === "( ") {this.setState({p324: ") "});}
        if (this.state.p324 === ") ") {this.setState({p324: "¡ "});}
        if (this.state.p324 === "¡ ") {this.setState({p324: "! "});}
        if (this.state.p324 === "! ") {this.setState({p324: "¿ "});}
        if (this.state.p324 === "¿ ") {this.setState({p324: "? "});}
        if (this.state.p324 === "? ") {this.setState({p324: " "});}
  }
  p325() {
        if (this.state.p325 === "el") {
                this.setState({p325: "El"});
        } else {
                this.setState({p325: "el"});
        }
  }
  p326() {
        if (this.state.p326 === " ") {this.setState({p326: ", "});}
        if (this.state.p326 === ", ") {this.setState({p326: "; "});}
        if (this.state.p326 === "; ") {this.setState({p326: ": "});}
        if (this.state.p326 === ": ") {this.setState({p326: "( "});}
        if (this.state.p326 === "( ") {this.setState({p326: ") "});}
        if (this.state.p326 === ") ") {this.setState({p326: "¡ "});}
        if (this.state.p326 === "¡ ") {this.setState({p326: "! "});}
        if (this.state.p326 === "! ") {this.setState({p326: "¿ "});}
        if (this.state.p326 === "¿ ") {this.setState({p326: "? "});}
        if (this.state.p326 === "? ") {this.setState({p326: " "});}
  }
  p327() {
        if (this.state.p327 === "del") {
                this.setState({p327: "Del"});
        } else {
                this.setState({p327: "del"});
        }
  }
  p328() {
        if (this.state.p328 === " ") {this.setState({p328: ", "});}
        if (this.state.p328 === ", ") {this.setState({p328: "; "});}
        if (this.state.p328 === "; ") {this.setState({p328: ": "});}
        if (this.state.p328 === ": ") {this.setState({p328: "( "});}
        if (this.state.p328 === "( ") {this.setState({p328: ") "});}
        if (this.state.p328 === ") ") {this.setState({p328: "¡ "});}
        if (this.state.p328 === "¡ ") {this.setState({p328: "! "});}
        if (this.state.p328 === "! ") {this.setState({p328: "¿ "});}
        if (this.state.p328 === "¿ ") {this.setState({p328: "? "});}
        if (this.state.p328 === "? ") {this.setState({p328: " "});}
  }
  p329() {
        if (this.state.p329 === "impuro") {
                this.setState({p329: "Impuro"});
        } else {
                this.setState({p329: "impuro"});
        }
  }
  p330() {
        if (this.state.p330 === " ") {this.setState({p330: ", "});}
        if (this.state.p330 === ", ") {this.setState({p330: "; "});}
        if (this.state.p330 === "; ") {this.setState({p330: ": "});}
        if (this.state.p330 === ": ") {this.setState({p330: "( "});}
        if (this.state.p330 === "( ") {this.setState({p330: ") "});}
        if (this.state.p330 === ") ") {this.setState({p330: "¡ "});}
        if (this.state.p330 === "¡ ") {this.setState({p330: "! "});}
        if (this.state.p330 === "! ") {this.setState({p330: "¿ "});}
        if (this.state.p330 === "¿ ") {this.setState({p330: "? "});}
        if (this.state.p330 === "? ") {this.setState({p330: " "});}
  }
  p331() {
        if (this.state.p331 === "y") {
                this.setState({p331: "Y"});
        } else {
                this.setState({p331: "y"});
        }
  }
  p332() {
        if (this.state.p332 === " ") {this.setState({p332: ", "});}
        if (this.state.p332 === ", ") {this.setState({p332: "; "});}
        if (this.state.p332 === "; ") {this.setState({p332: ": "});}
        if (this.state.p332 === ": ") {this.setState({p332: "( "});}
        if (this.state.p332 === "( ") {this.setState({p332: ") "});}
        if (this.state.p332 === ") ") {this.setState({p332: "¡ "});}
        if (this.state.p332 === "¡ ") {this.setState({p332: "! "});}
        if (this.state.p332 === "! ") {this.setState({p332: "¿ "});}
        if (this.state.p332 === "¿ ") {this.setState({p332: "? "});}
        if (this.state.p332 === "? ") {this.setState({p332: " "});}
  }
  p333() {
        if (this.state.p333 === "ponzoñoso") {
                this.setState({p333: "Ponzoñoso"});
        } else {
                this.setState({p333: "ponzoñoso"});
        }
  }
  p334() {
        if (this.state.p334 === " ") {this.setState({p334: ", "});}
        if (this.state.p334 === ", ") {this.setState({p334: "; "});}
        if (this.state.p334 === "; ") {this.setState({p334: ": "});}
        if (this.state.p334 === ": ") {this.setState({p334: "( "});}
        if (this.state.p334 === "( ") {this.setState({p334: ") "});}
        if (this.state.p334 === ") ") {this.setState({p334: "¡ "});}
        if (this.state.p334 === "¡ ") {this.setState({p334: "! "});}
        if (this.state.p334 === "! ") {this.setState({p334: "¿ "});}
        if (this.state.p334 === "¿ ") {this.setState({p334: "? "});}
        if (this.state.p334 === "? ") {this.setState({p334: " "});}
  }
  p335() {
        if (this.state.p335 === "animal") {
                this.setState({p335: "Animal"});
        } else {
                this.setState({p335: "animal"});
        }
  }
  p336() {
        if (this.state.p336 === " ") {this.setState({p336: ", "});}
        if (this.state.p336 === ", ") {this.setState({p336: "; "});}
        if (this.state.p336 === "; ") {this.setState({p336: ": "});}
        if (this.state.p336 === ": ") {this.setState({p336: "( "});}
        if (this.state.p336 === "( ") {this.setState({p336: ") "});}
        if (this.state.p336 === ") ") {this.setState({p336: "¡ "});}
        if (this.state.p336 === "¡ ") {this.setState({p336: "! "});}
        if (this.state.p336 === "! ") {this.setState({p336: "¿ "});}
        if (this.state.p336 === "¿ ") {this.setState({p336: "? "});}
        if (this.state.p336 === "? ") {this.setState({p336: " "});}
  }
  p337() {
        if (this.state.p337 === "que") {
                this.setState({p337: "Que"});
        } else {
                this.setState({p337: "que"});
        }
  }
  p338() {
        if (this.state.p338 === " ") {this.setState({p338: ", "});}
        if (this.state.p338 === ", ") {this.setState({p338: "; "});}
        if (this.state.p338 === "; ") {this.setState({p338: ": "});}
        if (this.state.p338 === ": ") {this.setState({p338: "( "});}
        if (this.state.p338 === "( ") {this.setState({p338: ") "});}
        if (this.state.p338 === ") ") {this.setState({p338: "¡ "});}
        if (this.state.p338 === "¡ ") {this.setState({p338: "! "});}
        if (this.state.p338 === "! ") {this.setState({p338: "¿ "});}
        if (this.state.p338 === "¿ ") {this.setState({p338: "? "});}
        if (this.state.p338 === "? ") {this.setState({p338: " "});}
  }
  p339() {
        if (this.state.p339 === "tiraba") {
                this.setState({p339: "Tiraba"});
        } else {
                this.setState({p339: "tiraba"});
        }
  }
  p340() {
        if (this.state.p340 === " ") {this.setState({p340: ", "});}
        if (this.state.p340 === ", ") {this.setState({p340: "; "});}
        if (this.state.p340 === "; ") {this.setState({p340: ": "});}
        if (this.state.p340 === ": ") {this.setState({p340: "( "});}
        if (this.state.p340 === "( ") {this.setState({p340: ") "});}
        if (this.state.p340 === ") ") {this.setState({p340: "¡ "});}
        if (this.state.p340 === "¡ ") {this.setState({p340: "! "});}
        if (this.state.p340 === "! ") {this.setState({p340: "¿ "});}
        if (this.state.p340 === "¿ ") {this.setState({p340: "? "});}
        if (this.state.p340 === "? ") {this.setState({p340: " "});}
  }
  p341() {
        if (this.state.p341 === "de") {
                this.setState({p341: "De"});
        } else {
                this.setState({p341: "de"});
        }
  }
  p342() {
        if (this.state.p342 === " ") {this.setState({p342: ", "});}
        if (this.state.p342 === ", ") {this.setState({p342: "; "});}
        if (this.state.p342 === "; ") {this.setState({p342: ": "});}
        if (this.state.p342 === ": ") {this.setState({p342: "( "});}
        if (this.state.p342 === "( ") {this.setState({p342: ") "});}
        if (this.state.p342 === ") ") {this.setState({p342: "¡ "});}
        if (this.state.p342 === "¡ ") {this.setState({p342: "! "});}
        if (this.state.p342 === "! ") {this.setState({p342: "¿ "});}
        if (this.state.p342 === "¿ ") {this.setState({p342: "? "});}
        if (this.state.p342 === "? ") {this.setState({p342: " "});}
  }
  p343() {
        if (this.state.p343 === "mí") {
                this.setState({p343: "Mí"});
        } else {
                this.setState({p343: "mí"});
        }
  }
  p344() {
        if (this.state.p344 === " ") {this.setState({p344: ", "});}
        if (this.state.p344 === ", ") {this.setState({p344: "; "});}
        if (this.state.p344 === "; ") {this.setState({p344: ": "});}
        if (this.state.p344 === ": ") {this.setState({p344: "( "});}
        if (this.state.p344 === "( ") {this.setState({p344: ") "});}
        if (this.state.p344 === ") ") {this.setState({p344: "¡ "});}
        if (this.state.p344 === "¡ ") {this.setState({p344: "! "});}
        if (this.state.p344 === "! ") {this.setState({p344: "¿ "});}
        if (this.state.p344 === "¿ ") {this.setState({p344: "? "});}
        if (this.state.p344 === "? ") {this.setState({p344: " "});}
  }
  p345() {
        if (this.state.p345 === "como") {
                this.setState({p345: "Como"});
        } else {
                this.setState({p345: "como"});
        }
  }
  p346() {
        if (this.state.p346 === " ") {this.setState({p346: ", "});}
        if (this.state.p346 === ", ") {this.setState({p346: "; "});}
        if (this.state.p346 === "; ") {this.setState({p346: ": "});}
        if (this.state.p346 === ": ") {this.setState({p346: "( "});}
        if (this.state.p346 === "( ") {this.setState({p346: ") "});}
        if (this.state.p346 === ") ") {this.setState({p346: "¡ "});}
        if (this.state.p346 === "¡ ") {this.setState({p346: "! "});}
        if (this.state.p346 === "! ") {this.setState({p346: "¿ "});}
        if (this.state.p346 === "¿ ") {this.setState({p346: "? "});}
        if (this.state.p346 === "? ") {this.setState({p346: " "});}
  }
  p347() {
        if (this.state.p347 === "un") {
                this.setState({p347: "Un"});
        } else {
                this.setState({p347: "un"});
        }
  }
  p348() {
        if (this.state.p348 === " ") {this.setState({p348: ", "});}
        if (this.state.p348 === ", ") {this.setState({p348: "; "});}
        if (this.state.p348 === "; ") {this.setState({p348: ": "});}
        if (this.state.p348 === ": ") {this.setState({p348: "( "});}
        if (this.state.p348 === "( ") {this.setState({p348: ") "});}
        if (this.state.p348 === ") ") {this.setState({p348: "¡ "});}
        if (this.state.p348 === "¡ ") {this.setState({p348: "! "});}
        if (this.state.p348 === "! ") {this.setState({p348: "¿ "});}
        if (this.state.p348 === "¿ ") {this.setState({p348: "? "});}
        if (this.state.p348 === "? ") {this.setState({p348: " "});}
  }
  p349() {
        if (this.state.p349 === "lastre") {
                this.setState({p349: "Lastre"});
        } else {
                this.setState({p349: "lastre"});
        }
  }
  p350() {
        if (this.state.p350 === " ") {this.setState({p350: ", "});}
        if (this.state.p350 === ", ") {this.setState({p350: "; "});}
        if (this.state.p350 === "; ") {this.setState({p350: ": "});}
        if (this.state.p350 === ": ") {this.setState({p350: "( "});}
        if (this.state.p350 === "( ") {this.setState({p350: ") "});}
        if (this.state.p350 === ") ") {this.setState({p350: "¡ "});}
        if (this.state.p350 === "¡ ") {this.setState({p350: "! "});}
        if (this.state.p350 === "! ") {this.setState({p350: "¿ "});}
        if (this.state.p350 === "¿ ") {this.setState({p350: "? "});}
        if (this.state.p350 === "? ") {this.setState({p350: " "});}
  }
  p351() {
        if (this.state.p351 === "definitivo") {
                this.setState({p351: "Definitivo"});
        } else {
                this.setState({p351: "definitivo"});
        }
  }
  p352() {
        if (this.state.p352 === " ") {this.setState({p352: ", "});}
        if (this.state.p352 === ", ") {this.setState({p352: "; "});}
        if (this.state.p352 === "; ") {this.setState({p352: ": "});}
        if (this.state.p352 === ": ") {this.setState({p352: "( "});}
        if (this.state.p352 === "( ") {this.setState({p352: ") "});}
        if (this.state.p352 === ") ") {this.setState({p352: "¡ "});}
        if (this.state.p352 === "¡ ") {this.setState({p352: "! "});}
        if (this.state.p352 === "! ") {this.setState({p352: "¿ "});}
        if (this.state.p352 === "¿ ") {this.setState({p352: "? "});}
        if (this.state.p352 === "? ") {this.setState({p352: " "});}
  }
  p353() {
        if (this.state.p353 === "dentro") {
                this.setState({p353: "Dentro"});
        } else {
                this.setState({p353: "dentro"});
        }
  }
  p354() {
        if (this.state.p354 === " ") {this.setState({p354: ", "});}
        if (this.state.p354 === ", ") {this.setState({p354: "; "});}
        if (this.state.p354 === "; ") {this.setState({p354: ": "});}
        if (this.state.p354 === ": ") {this.setState({p354: "( "});}
        if (this.state.p354 === "( ") {this.setState({p354: ") "});}
        if (this.state.p354 === ") ") {this.setState({p354: "¡ "});}
        if (this.state.p354 === "¡ ") {this.setState({p354: "! "});}
        if (this.state.p354 === "! ") {this.setState({p354: "¿ "});}
        if (this.state.p354 === "¿ ") {this.setState({p354: "? "});}
        if (this.state.p354 === "? ") {this.setState({p354: " "});}
  }
  p355() {
        if (this.state.p355 === "de") {
                this.setState({p355: "De"});
        } else {
                this.setState({p355: "de"});
        }
  }
  p356() {
        if (this.state.p356 === " ") {this.setState({p356: ", "});}
        if (this.state.p356 === ", ") {this.setState({p356: "; "});}
        if (this.state.p356 === "; ") {this.setState({p356: ": "});}
        if (this.state.p356 === ": ") {this.setState({p356: "( "});}
        if (this.state.p356 === "( ") {this.setState({p356: ") "});}
        if (this.state.p356 === ") ") {this.setState({p356: "¡ "});}
        if (this.state.p356 === "¡ ") {this.setState({p356: "! "});}
        if (this.state.p356 === "! ") {this.setState({p356: "¿ "});}
        if (this.state.p356 === "¿ ") {this.setState({p356: "? "});}
        if (this.state.p356 === "? ") {this.setState({p356: " "});}
  }
  p357() {
        if (this.state.p357 === "aquella") {
                this.setState({p357: "Aquella"});
        } else {
                this.setState({p357: "aquella"});
        }
  }
  p358() {
        if (this.state.p358 === " ") {this.setState({p358: ", "});}
        if (this.state.p358 === ", ") {this.setState({p358: "; "});}
        if (this.state.p358 === "; ") {this.setState({p358: ": "});}
        if (this.state.p358 === ": ") {this.setState({p358: "( "});}
        if (this.state.p358 === "( ") {this.setState({p358: ") "});}
        if (this.state.p358 === ") ") {this.setState({p358: "¡ "});}
        if (this.state.p358 === "¡ ") {this.setState({p358: "! "});}
        if (this.state.p358 === "! ") {this.setState({p358: "¿ "});}
        if (this.state.p358 === "¿ ") {this.setState({p358: "? "});}
        if (this.state.p358 === "? ") {this.setState({p358: " "});}
  }
  p359() {
        if (this.state.p359 === "caja") {
                this.setState({p359: "Caja"});
        } else {
                this.setState({p359: "caja"});
        }
  }
  p360() {
        if (this.state.p360 === " ") {this.setState({p360: ", "});}
        if (this.state.p360 === ", ") {this.setState({p360: "; "});}
        if (this.state.p360 === "; ") {this.setState({p360: ": "});}
        if (this.state.p360 === ": ") {this.setState({p360: "( "});}
        if (this.state.p360 === "( ") {this.setState({p360: ") "});}
        if (this.state.p360 === ") ") {this.setState({p360: "¡ "});}
        if (this.state.p360 === "¡ ") {this.setState({p360: "! "});}
        if (this.state.p360 === "! ") {this.setState({p360: "¿ "});}
        if (this.state.p360 === "¿ ") {this.setState({p360: "? "});}
        if (this.state.p360 === "? ") {this.setState({p360: " "});}
  }
  p361() {
        if (this.state.p361 === "iba") {
                this.setState({p361: "Iba"});
        } else {
                this.setState({p361: "iba"});
        }
  }
  p362() {
        if (this.state.p362 === " ") {this.setState({p362: ", "});}
        if (this.state.p362 === ", ") {this.setState({p362: "; "});}
        if (this.state.p362 === "; ") {this.setState({p362: ": "});}
        if (this.state.p362 === ": ") {this.setState({p362: "( "});}
        if (this.state.p362 === "( ") {this.setState({p362: ") "});}
        if (this.state.p362 === ") ") {this.setState({p362: "¡ "});}
        if (this.state.p362 === "¡ ") {this.setState({p362: "! "});}
        if (this.state.p362 === "! ") {this.setState({p362: "¿ "});}
        if (this.state.p362 === "¿ ") {this.setState({p362: "? "});}
        if (this.state.p362 === "? ") {this.setState({p362: " "});}
  }
  p363() {
        if (this.state.p363 === "el") {
                this.setState({p363: "El"});
        } else {
                this.setState({p363: "el"});
        }
  }
  p364() {
        if (this.state.p364 === " ") {this.setState({p364: ", "});}
        if (this.state.p364 === ", ") {this.setState({p364: "; "});}
        if (this.state.p364 === "; ") {this.setState({p364: ": "});}
        if (this.state.p364 === ": ") {this.setState({p364: "( "});}
        if (this.state.p364 === "( ") {this.setState({p364: ") "});}
        if (this.state.p364 === ") ") {this.setState({p364: "¡ "});}
        if (this.state.p364 === "¡ ") {this.setState({p364: "! "});}
        if (this.state.p364 === "! ") {this.setState({p364: "¿ "});}
        if (this.state.p364 === "¿ ") {this.setState({p364: "? "});}
        if (this.state.p364 === "? ") {this.setState({p364: " "});}
  }
  p365() {
        if (this.state.p365 === "infierno") {
                this.setState({p365: "Infierno"});
        } else {
                this.setState({p365: "infierno"});
        }
  }
  p366() {
        if (this.state.p366 === " ") {this.setState({p366: ", "});}
        if (this.state.p366 === ", ") {this.setState({p366: "; "});}
        if (this.state.p366 === "; ") {this.setState({p366: ": "});}
        if (this.state.p366 === ": ") {this.setState({p366: "( "});}
        if (this.state.p366 === "( ") {this.setState({p366: ") "});}
        if (this.state.p366 === ") ") {this.setState({p366: "¡ "});}
        if (this.state.p366 === "¡ ") {this.setState({p366: "! "});}
        if (this.state.p366 === "! ") {this.setState({p366: "¿ "});}
        if (this.state.p366 === "¿ ") {this.setState({p366: "? "});}
        if (this.state.p366 === "? ") {this.setState({p366: " "});}
  }
  p367() {
        if (this.state.p367 === "personal") {
                this.setState({p367: "Personal"});
        } else {
                this.setState({p367: "personal"});
        }
  }
  p368() {
        if (this.state.p368 === " ") {this.setState({p368: ", "});}
        if (this.state.p368 === ", ") {this.setState({p368: "; "});}
        if (this.state.p368 === "; ") {this.setState({p368: ": "});}
        if (this.state.p368 === ": ") {this.setState({p368: "( "});}
        if (this.state.p368 === "( ") {this.setState({p368: ") "});}
        if (this.state.p368 === ") ") {this.setState({p368: "¡ "});}
        if (this.state.p368 === "¡ ") {this.setState({p368: "! "});}
        if (this.state.p368 === "! ") {this.setState({p368: "¿ "});}
        if (this.state.p368 === "¿ ") {this.setState({p368: "? "});}
        if (this.state.p368 === "? ") {this.setState({p368: " "});}
  }
  p369() {
        if (this.state.p369 === "que") {
                this.setState({p369: "Que"});
        } else {
                this.setState({p369: "que"});
        }
  }
  p370() {
        if (this.state.p370 === " ") {this.setState({p370: ", "});}
        if (this.state.p370 === ", ") {this.setState({p370: "; "});}
        if (this.state.p370 === "; ") {this.setState({p370: ": "});}
        if (this.state.p370 === ": ") {this.setState({p370: "( "});}
        if (this.state.p370 === "( ") {this.setState({p370: ") "});}
        if (this.state.p370 === ") ") {this.setState({p370: "¡ "});}
        if (this.state.p370 === "¡ ") {this.setState({p370: "! "});}
        if (this.state.p370 === "! ") {this.setState({p370: "¿ "});}
        if (this.state.p370 === "¿ ") {this.setState({p370: "? "});}
        if (this.state.p370 === "? ") {this.setState({p370: " "});}
  }
  p371() {
        if (this.state.p371 === "instalaría") {
                this.setState({p371: "Instalaría"});
        } else {
                this.setState({p371: "instalaría"});
        }
  }
  p372() {
        if (this.state.p372 === " ") {this.setState({p372: ", "});}
        if (this.state.p372 === ", ") {this.setState({p372: "; "});}
        if (this.state.p372 === "; ") {this.setState({p372: ": "});}
        if (this.state.p372 === ": ") {this.setState({p372: "( "});}
        if (this.state.p372 === "( ") {this.setState({p372: ") "});}
        if (this.state.p372 === ") ") {this.setState({p372: "¡ "});}
        if (this.state.p372 === "¡ ") {this.setState({p372: "! "});}
        if (this.state.p372 === "! ") {this.setState({p372: "¿ "});}
        if (this.state.p372 === "¿ ") {this.setState({p372: "? "});}
        if (this.state.p372 === "? ") {this.setState({p372: " "});}
  }
  p373() {
        if (this.state.p373 === "en") {
                this.setState({p373: "En"});
        } else {
                this.setState({p373: "en"});
        }
  }
  p374() {
        if (this.state.p374 === " ") {this.setState({p374: ", "});}
        if (this.state.p374 === ", ") {this.setState({p374: "; "});}
        if (this.state.p374 === "; ") {this.setState({p374: ": "});}
        if (this.state.p374 === ": ") {this.setState({p374: "( "});}
        if (this.state.p374 === "( ") {this.setState({p374: ") "});}
        if (this.state.p374 === ") ") {this.setState({p374: "¡ "});}
        if (this.state.p374 === "¡ ") {this.setState({p374: "! "});}
        if (this.state.p374 === "! ") {this.setState({p374: "¿ "});}
        if (this.state.p374 === "¿ ") {this.setState({p374: "? "});}
        if (this.state.p374 === "? ") {this.setState({p374: " "});}
  }
  p375() {
        if (this.state.p375 === "mi") {
                this.setState({p375: "Mi"});
        } else {
                this.setState({p375: "mi"});
        }
  }
  p376() {
        if (this.state.p376 === " ") {this.setState({p376: ", "});}
        if (this.state.p376 === ", ") {this.setState({p376: "; "});}
        if (this.state.p376 === "; ") {this.setState({p376: ": "});}
        if (this.state.p376 === ": ") {this.setState({p376: "( "});}
        if (this.state.p376 === "( ") {this.setState({p376: ") "});}
        if (this.state.p376 === ") ") {this.setState({p376: "¡ "});}
        if (this.state.p376 === "¡ ") {this.setState({p376: "! "});}
        if (this.state.p376 === "! ") {this.setState({p376: "¿ "});}
        if (this.state.p376 === "¿ ") {this.setState({p376: "? "});}
        if (this.state.p376 === "? ") {this.setState({p376: " "});}
  }
  p377() {
        if (this.state.p377 === "casa") {
                this.setState({p377: "Casa"});
        } else {
                this.setState({p377: "casa"});
        }
  }
  p378() {
        if (this.state.p378 === " ") {this.setState({p378: ", "});}
        if (this.state.p378 === ", ") {this.setState({p378: "; "});}
        if (this.state.p378 === "; ") {this.setState({p378: ": "});}
        if (this.state.p378 === ": ") {this.setState({p378: "( "});}
        if (this.state.p378 === "( ") {this.setState({p378: ") "});}
        if (this.state.p378 === ") ") {this.setState({p378: "¡ "});}
        if (this.state.p378 === "¡ ") {this.setState({p378: "! "});}
        if (this.state.p378 === "! ") {this.setState({p378: "¿ "});}
        if (this.state.p378 === "¿ ") {this.setState({p378: "? "});}
        if (this.state.p378 === "? ") {this.setState({p378: " "});}
  }
  p379() {
        if (this.state.p379 === "para") {
                this.setState({p379: "Para"});
        } else {
                this.setState({p379: "para"});
        }
  }
  p380() {
        if (this.state.p380 === " ") {this.setState({p380: ", "});}
        if (this.state.p380 === ", ") {this.setState({p380: "; "});}
        if (this.state.p380 === "; ") {this.setState({p380: ": "});}
        if (this.state.p380 === ": ") {this.setState({p380: "( "});}
        if (this.state.p380 === "( ") {this.setState({p380: ") "});}
        if (this.state.p380 === ") ") {this.setState({p380: "¡ "});}
        if (this.state.p380 === "¡ ") {this.setState({p380: "! "});}
        if (this.state.p380 === "! ") {this.setState({p380: "¿ "});}
        if (this.state.p380 === "¿ ") {this.setState({p380: "? "});}
        if (this.state.p380 === "? ") {this.setState({p380: " "});}
  }
  p381() {
        if (this.state.p381 === "destruir") {
                this.setState({p381: "Destruir"});
        } else {
                this.setState({p381: "destruir"});
        }
  }
  p382() {
        if (this.state.p382 === " ") {this.setState({p382: ", "});}
        if (this.state.p382 === ", ") {this.setState({p382: "; "});}
        if (this.state.p382 === "; ") {this.setState({p382: ": "});}
        if (this.state.p382 === ": ") {this.setState({p382: "( "});}
        if (this.state.p382 === "( ") {this.setState({p382: ") "});}
        if (this.state.p382 === ") ") {this.setState({p382: "¡ "});}
        if (this.state.p382 === "¡ ") {this.setState({p382: "! "});}
        if (this.state.p382 === "! ") {this.setState({p382: "¿ "});}
        if (this.state.p382 === "¿ ") {this.setState({p382: "? "});}
        if (this.state.p382 === "? ") {this.setState({p382: " "});}
  }
  p383() {
        if (this.state.p383 === "para") {
                this.setState({p383: "Para"});
        } else {
                this.setState({p383: "para"});
        }
  }
  p384() {
        if (this.state.p384 === " ") {this.setState({p384: ", "});}
        if (this.state.p384 === ", ") {this.setState({p384: "; "});}
        if (this.state.p384 === "; ") {this.setState({p384: ": "});}
        if (this.state.p384 === ": ") {this.setState({p384: "( "});}
        if (this.state.p384 === "( ") {this.setState({p384: ") "});}
        if (this.state.p384 === ") ") {this.setState({p384: "¡ "});}
        if (this.state.p384 === "¡ ") {this.setState({p384: "! "});}
        if (this.state.p384 === "! ") {this.setState({p384: "¿ "});}
        if (this.state.p384 === "¿ ") {this.setState({p384: "? "});}
        if (this.state.p384 === "? ") {this.setState({p384: " "});}
  }
  p385() {
        if (this.state.p385 === "anular") {
                this.setState({p385: "Anular"});
        } else {
                this.setState({p385: "anular"});
        }
  }
  p386() {
        if (this.state.p386 === " ") {this.setState({p386: ", "});}
        if (this.state.p386 === ", ") {this.setState({p386: "; "});}
        if (this.state.p386 === "; ") {this.setState({p386: ": "});}
        if (this.state.p386 === ": ") {this.setState({p386: "( "});}
        if (this.state.p386 === "( ") {this.setState({p386: ") "});}
        if (this.state.p386 === ") ") {this.setState({p386: "¡ "});}
        if (this.state.p386 === "¡ ") {this.setState({p386: "! "});}
        if (this.state.p386 === "! ") {this.setState({p386: "¿ "});}
        if (this.state.p386 === "¿ ") {this.setState({p386: "? "});}
        if (this.state.p386 === "? ") {this.setState({p386: " "});}
  }
  p387() {
        if (this.state.p387 === "al") {
                this.setState({p387: "Al"});
        } else {
                this.setState({p387: "al"});
        }
  }
  p388() {
        if (this.state.p388 === " ") {this.setState({p388: ", "});}
        if (this.state.p388 === ", ") {this.setState({p388: "; "});}
        if (this.state.p388 === "; ") {this.setState({p388: ": "});}
        if (this.state.p388 === ": ") {this.setState({p388: "( "});}
        if (this.state.p388 === "( ") {this.setState({p388: ") "});}
        if (this.state.p388 === ") ") {this.setState({p388: "¡ "});}
        if (this.state.p388 === "¡ ") {this.setState({p388: "! "});}
        if (this.state.p388 === "! ") {this.setState({p388: "¿ "});}
        if (this.state.p388 === "¿ ") {this.setState({p388: "? "});}
        if (this.state.p388 === "? ") {this.setState({p388: " "});}
  }
  p389() {
        if (this.state.p389 === "otro") {
                this.setState({p389: "Otro"});
        } else {
                this.setState({p389: "otro"});
        }
  }
  p390() {
        if (this.state.p390 === " ") {this.setState({p390: ", "});}
        if (this.state.p390 === ", ") {this.setState({p390: "; "});}
        if (this.state.p390 === "; ") {this.setState({p390: ": "});}
        if (this.state.p390 === ": ") {this.setState({p390: "( "});}
        if (this.state.p390 === "( ") {this.setState({p390: ") "});}
        if (this.state.p390 === ") ") {this.setState({p390: "¡ "});}
        if (this.state.p390 === "¡ ") {this.setState({p390: "! "});}
        if (this.state.p390 === "! ") {this.setState({p390: "¿ "});}
        if (this.state.p390 === "¿ ") {this.setState({p390: "? "});}
        if (this.state.p390 === "? ") {this.setState({p390: " "});}
  }
  p391() {
        if (this.state.p391 === "el") {
                this.setState({p391: "El"});
        } else {
                this.setState({p391: "el"});
        }
  }
  p392() {
        if (this.state.p392 === " ") {this.setState({p392: ", "});}
        if (this.state.p392 === ", ") {this.setState({p392: "; "});}
        if (this.state.p392 === "; ") {this.setState({p392: ": "});}
        if (this.state.p392 === ": ") {this.setState({p392: "( "});}
        if (this.state.p392 === "( ") {this.setState({p392: ") "});}
        if (this.state.p392 === ") ") {this.setState({p392: "¡ "});}
        if (this.state.p392 === "¡ ") {this.setState({p392: "! "});}
        if (this.state.p392 === "! ") {this.setState({p392: "¿ "});}
        if (this.state.p392 === "¿ ") {this.setState({p392: "? "});}
        if (this.state.p392 === "? ") {this.setState({p392: " "});}
  }
  p393() {
        if (this.state.p393 === "descomunal") {
                this.setState({p393: "Descomunal"});
        } else {
                this.setState({p393: "descomunal"});
        }
  }
  p394() {
        if (this.state.p394 === " ") {this.setState({p394: ", "});}
        if (this.state.p394 === ", ") {this.setState({p394: "; "});}
        if (this.state.p394 === "; ") {this.setState({p394: ": "});}
        if (this.state.p394 === ": ") {this.setState({p394: "( "});}
        if (this.state.p394 === "( ") {this.setState({p394: ") "});}
        if (this.state.p394 === ") ") {this.setState({p394: "¡ "});}
        if (this.state.p394 === "¡ ") {this.setState({p394: "! "});}
        if (this.state.p394 === "! ") {this.setState({p394: "¿ "});}
        if (this.state.p394 === "¿ ") {this.setState({p394: "? "});}
        if (this.state.p394 === "? ") {this.setState({p394: " "});}
  }
  p395() {
        if (this.state.p395 === "infierno") {
                this.setState({p395: "Infierno"});
        } else {
                this.setState({p395: "infierno"});
        }
  }
  p396() {
        if (this.state.p396 === " ") {this.setState({p396: ", "});}
        if (this.state.p396 === ", ") {this.setState({p396: "; "});}
        if (this.state.p396 === "; ") {this.setState({p396: ": "});}
        if (this.state.p396 === ": ") {this.setState({p396: "( "});}
        if (this.state.p396 === "( ") {this.setState({p396: ") "});}
        if (this.state.p396 === ") ") {this.setState({p396: "¡ "});}
        if (this.state.p396 === "¡ ") {this.setState({p396: "! "});}
        if (this.state.p396 === "! ") {this.setState({p396: "¿ "});}
        if (this.state.p396 === "¿ ") {this.setState({p396: "? "});}
        if (this.state.p396 === "? ") {this.setState({p396: " "});}
  }
  p397() {
        if (this.state.p397 === "de") {
                this.setState({p397: "De"});
        } else {
                this.setState({p397: "de"});
        }
  }
  p398() {
        if (this.state.p398 === " ") {this.setState({p398: ", "});}
        if (this.state.p398 === ", ") {this.setState({p398: "; "});}
        if (this.state.p398 === "; ") {this.setState({p398: ": "});}
        if (this.state.p398 === ": ") {this.setState({p398: "( "});}
        if (this.state.p398 === "( ") {this.setState({p398: ") "});}
        if (this.state.p398 === ") ") {this.setState({p398: "¡ "});}
        if (this.state.p398 === "¡ ") {this.setState({p398: "! "});}
        if (this.state.p398 === "! ") {this.setState({p398: "¿ "});}
        if (this.state.p398 === "¿ ") {this.setState({p398: "? "});}
        if (this.state.p398 === "? ") {this.setState({p398: " "});}
  }
  p399() {
        if (this.state.p399 === "los") {
                this.setState({p399: "Los"});
        } else {
                this.setState({p399: "los"});
        }
  }
  p400() {
        if (this.state.p400 === " ") {this.setState({p400: ", "});}
        if (this.state.p400 === ", ") {this.setState({p400: "; "});}
        if (this.state.p400 === "; ") {this.setState({p400: ": "});}
        if (this.state.p400 === ": ") {this.setState({p400: "( "});}
        if (this.state.p400 === "( ") {this.setState({p400: ") "});}
        if (this.state.p400 === ") ") {this.setState({p400: "¡ "});}
        if (this.state.p400 === "¡ ") {this.setState({p400: "! "});}
        if (this.state.p400 === "! ") {this.setState({p400: "¿ "});}
        if (this.state.p400 === "¿ ") {this.setState({p400: "? "});}
        if (this.state.p400 === "? ") {this.setState({p400: " "});}
  }
  p401() {
        if (this.state.p401 === "hombres") {
                this.setState({p401: "Hombres"});
        } else {
                this.setState({p401: "hombres"});
        }
  }
  p402() {
        if (this.state.p402 === " ") {this.setState({p402: ", "});}
        if (this.state.p402 === ", ") {this.setState({p402: "; "});}
        if (this.state.p402 === "; ") {this.setState({p402: ". "});}
        if (this.state.p402 === ". ") {this.setState({p402: "( "});}
        if (this.state.p402 === "( ") {this.setState({p402: ") "});}
        if (this.state.p402 === ") ") {this.setState({p402: "¡ "});}
        if (this.state.p402 === "¡ ") {this.setState({p402: "! "});}
        if (this.state.p402 === "! ") {this.setState({p402: "¿ "});}
        if (this.state.p402 === "¿ ") {this.setState({p402: "? "});}
        if (this.state.p402 === "? ") {this.setState({p402: " "});}
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

        {this.state.p140 === " " &&
          <button id="txtBut" onClick={this.p140.bind(this)}>&nbsp;</button>
        }
        {this.state.p140 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p140.bind(this)}>,&nbsp;</button>
        }
        {this.state.p140 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p140.bind(this)}>;&nbsp;</button>
        }
        {this.state.p140 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p140.bind(this)}>:&nbsp;</button>
        }
        {this.state.p140 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p140.bind(this)}>(&nbsp;</button>
        }
        {this.state.p140 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p140.bind(this)}>)&nbsp;</button>
        }
        {this.state.p140 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p140.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p140 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p140.bind(this)}>!&nbsp;</button>
        }
        {this.state.p140 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p140.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p140 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p140.bind(this)}>?&nbsp;</button>
        }
        {this.state.p140 === " " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p140.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p140 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p140.bind(this)}><span style={{color:"green"}}>,</span>&nbsp;</button>
        }
        {this.state.p140 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p140.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p140 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p140.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p140 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p140.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p140 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p140.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p140 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p140.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p140 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p140.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p140 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p140.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p140 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p140.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p141 === "y" &&
          <button id="txtBut" onClick={this.p141.bind(this)}>y</button>
        }
        {this.state.p141 === "Y" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p141.bind(this)}>Y</button>
        }
        {this.state.p141 === "Y" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p141.bind(this)}><span style={{color:"red"}}>Y</span></button>
        }

        {this.state.p142 === " " &&
          <button id="txtBut" onClick={this.p142.bind(this)}>&nbsp;</button>
        }
        {this.state.p142 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p142.bind(this)}>,&nbsp;</button>
        }
        {this.state.p142 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p142.bind(this)}>;&nbsp;</button>
        }
        {this.state.p142 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p142.bind(this)}>:&nbsp;</button>
        }
        {this.state.p142 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p142.bind(this)}>(&nbsp;</button>
        }
        {this.state.p142 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p142.bind(this)}>)&nbsp;</button>
        }
        {this.state.p142 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p142.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p142 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p142.bind(this)}>!&nbsp;</button>
        }
        {this.state.p142 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p142.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p142 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p142.bind(this)}>?&nbsp;</button>
        }
        {this.state.p142 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p142.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p142 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p142.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p142 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p142.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p142 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p142.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p142 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p142.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p142 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p142.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p142 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p142.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p142 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p142.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p142 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p142.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p143 === "el" &&
          <button id="txtBut" onClick={this.p143.bind(this)}>el</button>
        }
        {this.state.p143 === "El" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p143.bind(this)}>El</button>
        }
        {this.state.p143 === "El" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p143.bind(this)}><span style={{color:"red"}}>E</span>l</button>
        }

        {this.state.p144 === " " &&
          <button id="txtBut" onClick={this.p144.bind(this)}>&nbsp;</button>
        }
        {this.state.p144 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p144.bind(this)}>,&nbsp;</button>
        }
        {this.state.p144 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p144.bind(this)}>;&nbsp;</button>
        }
        {this.state.p144 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p144.bind(this)}>:&nbsp;</button>
        }
        {this.state.p144 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p144.bind(this)}>(&nbsp;</button>
        }
        {this.state.p144 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p144.bind(this)}>)&nbsp;</button>
        }
        {this.state.p144 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p144.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p144 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p144.bind(this)}>!&nbsp;</button>
        }
        {this.state.p144 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p144.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p144 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p144.bind(this)}>?&nbsp;</button>
        }
        {this.state.p144 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p144.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p144 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p144.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p144 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p144.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p144 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p144.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p144 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p144.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p144 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p144.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p144 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p144.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p144 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p144.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p144 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p144.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p145 === "sorprendido" &&
          <button id="txtBut" onClick={this.p145.bind(this)}>sorprendido</button>
        }
        {this.state.p145 === "Sorprendido" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p145.bind(this)}>Sorprendido</button>
        }
        {this.state.p145 === "Sorprendido" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p145.bind(this)}><span style={{color:"red"}}>S</span>orprendido</button>
        }

        {this.state.p146 === " " &&
          <button id="txtBut" onClick={this.p146.bind(this)}>&nbsp;</button>
        }
        {this.state.p146 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p146.bind(this)}>,&nbsp;</button>
        }
        {this.state.p146 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p146.bind(this)}>;&nbsp;</button>
        }
        {this.state.p146 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p146.bind(this)}>:&nbsp;</button>
        }
        {this.state.p146 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p146.bind(this)}>(&nbsp;</button>
        }
        {this.state.p146 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p146.bind(this)}>)&nbsp;</button>
        }
        {this.state.p146 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p146.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p146 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p146.bind(this)}>!&nbsp;</button>
        }
        {this.state.p146 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p146.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p146 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p146.bind(this)}>?&nbsp;</button>
        }
        {this.state.p146 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p146.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p146 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p146.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p146 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p146.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p146 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p146.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p146 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p146.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p146 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p146.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p146 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p146.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p146 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p146.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p146 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p146.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p147 === "saltimbanqui" &&
          <button id="txtBut" onClick={this.p147.bind(this)}>saltimbanqui</button>
        }
        {this.state.p147 === "Saltimbanqui" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p147.bind(this)}>Saltimbanqui</button>
        }
        {this.state.p147 === "Saltimbanqui" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p147.bind(this)}><span style={{color:"red"}}>S</span>altimbanqui</button>
        }

        {this.state.p148 === " " &&
          <button id="txtBut" onClick={this.p148.bind(this)}>&nbsp;</button>
        }
        {this.state.p148 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p148.bind(this)}>,&nbsp;</button>
        }
        {this.state.p148 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p148.bind(this)}>;&nbsp;</button>
        }
        {this.state.p148 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p148.bind(this)}>:&nbsp;</button>
        }
        {this.state.p148 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p148.bind(this)}>(&nbsp;</button>
        }
        {this.state.p148 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p148.bind(this)}>)&nbsp;</button>
        }
        {this.state.p148 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p148.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p148 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p148.bind(this)}>!&nbsp;</button>
        }
        {this.state.p148 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p148.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p148 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p148.bind(this)}>?&nbsp;</button>
        }
        {this.state.p148 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p148.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p148 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p148.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p148 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p148.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p148 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p148.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p148 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p148.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p148 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p148.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p148 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p148.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p148 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p148.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p148 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p148.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p149 === "me" &&
          <button id="txtBut" onClick={this.p149.bind(this)}>me</button>
        }
        {this.state.p149 === "Me" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p149.bind(this)}>Me</button>
        }
        {this.state.p149 === "Me" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p149.bind(this)}><span style={{color:"red"}}>M</span>e</button>
        }

        {this.state.p150 === " " &&
          <button id="txtBut" onClick={this.p150.bind(this)}>&nbsp;</button>
        }
        {this.state.p150 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p150.bind(this)}>,&nbsp;</button>
        }
        {this.state.p150 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p150.bind(this)}>;&nbsp;</button>
        }
        {this.state.p150 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p150.bind(this)}>:&nbsp;</button>
        }
        {this.state.p150 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p150.bind(this)}>(&nbsp;</button>
        }
        {this.state.p150 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p150.bind(this)}>)&nbsp;</button>
        }
        {this.state.p150 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p150.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p150 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p150.bind(this)}>!&nbsp;</button>
        }
        {this.state.p150 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p150.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p150 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p150.bind(this)}>?&nbsp;</button>
        }
        {this.state.p150 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p150.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p150 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p150.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p150 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p150.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p150 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p150.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p150 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p150.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p150 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p150.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p150 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p150.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p150 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p150.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p150 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p150.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p151 === "dio" &&
          <button id="txtBut" onClick={this.p151.bind(this)}>dio</button>
        }
        {this.state.p151 === "Dio" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p151.bind(this)}>Dio</button>
        }
        {this.state.p151 === "Dio" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p151.bind(this)}><span style={{color:"red"}}>D</span>io</button>
        }

        {this.state.p152 === " " &&
          <button id="txtBut" onClick={this.p152.bind(this)}>&nbsp;</button>
        }
        {this.state.p152 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p152.bind(this)}>,&nbsp;</button>
        }
        {this.state.p152 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p152.bind(this)}>;&nbsp;</button>
        }
        {this.state.p152 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p152.bind(this)}>:&nbsp;</button>
        }
        {this.state.p152 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p152.bind(this)}>(&nbsp;</button>
        }
        {this.state.p152 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p152.bind(this)}>)&nbsp;</button>
        }
        {this.state.p152 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p152.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p152 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p152.bind(this)}>!&nbsp;</button>
        }
        {this.state.p152 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p152.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p152 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p152.bind(this)}>?&nbsp;</button>
        }
        {this.state.p152 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p152.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p152 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p152.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p152 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p152.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p152 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p152.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p152 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p152.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p152 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p152.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p152 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p152.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p152 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p152.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p152 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p152.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p153 === "algunos" &&
          <button id="txtBut" onClick={this.p153.bind(this)}>algunos</button>
        }
        {this.state.p153 === "Algunos" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p153.bind(this)}>Algunos</button>
        }
        {this.state.p153 === "Algunos" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p153.bind(this)}><span style={{color:"red"}}>A</span>lgunos</button>
        }

        {this.state.p154 === " " &&
          <button id="txtBut" onClick={this.p154.bind(this)}>&nbsp;</button>
        }
        {this.state.p154 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p154.bind(this)}>,&nbsp;</button>
        }
        {this.state.p154 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p154.bind(this)}>;&nbsp;</button>
        }
        {this.state.p154 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p154.bind(this)}>:&nbsp;</button>
        }
        {this.state.p154 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p154.bind(this)}>(&nbsp;</button>
        }
        {this.state.p154 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p154.bind(this)}>)&nbsp;</button>
        }
        {this.state.p154 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p154.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p154 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p154.bind(this)}>!&nbsp;</button>
        }
        {this.state.p154 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p154.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p154 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p154.bind(this)}>?&nbsp;</button>
        }
        {this.state.p154 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p154.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p154 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p154.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p154 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p154.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p154 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p154.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p154 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p154.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p154 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p154.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p154 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p154.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p154 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p154.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p154 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p154.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p155 === "informes" &&
          <button id="txtBut" onClick={this.p155.bind(this)}>informes</button>
        }
        {this.state.p155 === "Informes" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p155.bind(this)}>Informes</button>
        }
        {this.state.p155 === "Informes" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p155.bind(this)}><span style={{color:"red"}}>I</span>nformes</button>
        }

        {this.state.p156 === " " &&
          <button id="txtBut" onClick={this.p156.bind(this)}>&nbsp;</button>
        }
        {this.state.p156 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p156.bind(this)}>,&nbsp;</button>
        }
        {this.state.p156 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p156.bind(this)}>;&nbsp;</button>
        }
        {this.state.p156 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p156.bind(this)}>:&nbsp;</button>
        }
        {this.state.p156 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p156.bind(this)}>(&nbsp;</button>
        }
        {this.state.p156 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p156.bind(this)}>)&nbsp;</button>
        }
        {this.state.p156 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p156.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p156 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p156.bind(this)}>!&nbsp;</button>
        }
        {this.state.p156 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p156.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p156 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p156.bind(this)}>?&nbsp;</button>
        }
        {this.state.p156 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p156.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p156 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p156.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p156 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p156.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p156 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p156.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p156 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p156.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p156 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p156.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p156 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p156.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p156 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p156.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p156 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p156.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p157 === "acerca" &&
          <button id="txtBut" onClick={this.p157.bind(this)}>acerca</button>
        }
        {this.state.p157 === "Acerca" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p157.bind(this)}>Acerca</button>
        }
        {this.state.p157 === "Acerca" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p157.bind(this)}><span style={{color:"red"}}>A</span>cerca</button>
        }

        {this.state.p158 === " " &&
          <button id="txtBut" onClick={this.p158.bind(this)}>&nbsp;</button>
        }
        {this.state.p158 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p158.bind(this)}>,&nbsp;</button>
        }
        {this.state.p158 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p158.bind(this)}>;&nbsp;</button>
        }
        {this.state.p158 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p158.bind(this)}>:&nbsp;</button>
        }
        {this.state.p158 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p158.bind(this)}>(&nbsp;</button>
        }
        {this.state.p158 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p158.bind(this)}>)&nbsp;</button>
        }
        {this.state.p158 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p158.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p158 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p158.bind(this)}>!&nbsp;</button>
        }
        {this.state.p158 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p158.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p158 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p158.bind(this)}>?&nbsp;</button>
        }
        {this.state.p158 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p158.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p158 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p158.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p158 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p158.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p158 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p158.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p158 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p158.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p158 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p158.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p158 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p158.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p158 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p158.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p158 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p158.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p159 === "de" &&
          <button id="txtBut" onClick={this.p159.bind(this)}>de</button>
        }
        {this.state.p159 === "De" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p159.bind(this)}>De</button>
        }
        {this.state.p159 === "De" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p159.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p160 === " " &&
          <button id="txtBut" onClick={this.p160.bind(this)}>&nbsp;</button>
        }
        {this.state.p160 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p160.bind(this)}>,&nbsp;</button>
        }
        {this.state.p160 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p160.bind(this)}>;&nbsp;</button>
        }
        {this.state.p160 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p160.bind(this)}>:&nbsp;</button>
        }
        {this.state.p160 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p160.bind(this)}>(&nbsp;</button>
        }
        {this.state.p160 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p160.bind(this)}>)&nbsp;</button>
        }
        {this.state.p160 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p160.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p160 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p160.bind(this)}>!&nbsp;</button>
        }
        {this.state.p160 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p160.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p160 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p160.bind(this)}>?&nbsp;</button>
        }
        {this.state.p160 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p160.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p160 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p160.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p160 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p160.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p160 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p160.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p160 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p160.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p160 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p160.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p160 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p160.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p160 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p160.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p160 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p160.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p161 === "sus" &&
          <button id="txtBut" onClick={this.p161.bind(this)}>sus</button>
        }
        {this.state.p161 === "Sus" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p161.bind(this)}>Sus</button>
        }
        {this.state.p161 === "Sus" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p161.bind(this)}><span style={{color:"red"}}>S</span>us</button>
        }

        {this.state.p162 === " " &&
          <button id="txtBut" onClick={this.p162.bind(this)}>&nbsp;</button>
        }
        {this.state.p162 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p162.bind(this)}>,&nbsp;</button>
        }
        {this.state.p162 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p162.bind(this)}>;&nbsp;</button>
        }
        {this.state.p162 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p162.bind(this)}>:&nbsp;</button>
        }
        {this.state.p162 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p162.bind(this)}>(&nbsp;</button>
        }
        {this.state.p162 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p162.bind(this)}>)&nbsp;</button>
        }
        {this.state.p162 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p162.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p162 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p162.bind(this)}>!&nbsp;</button>
        }
        {this.state.p162 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p162.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p162 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p162.bind(this)}>?&nbsp;</button>
        }
        {this.state.p162 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p162.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p162 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p162.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p162 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p162.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p162 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p162.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p162 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p162.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p162 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p162.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p162 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p162.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p162 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p162.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p162 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p162.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p163 === "costumbres" &&
          <button id="txtBut" onClick={this.p163.bind(this)}>costumbres</button>
        }
        {this.state.p163 === "Costumbres" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p163.bind(this)}>Costumbres</button>
        }
        {this.state.p163 === "Costumbres" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p163.bind(this)}><span style={{color:"red"}}>C</span>ostumbres</button>
        }

        {this.state.p164 === " " &&
          <button id="txtBut" onClick={this.p164.bind(this)}>&nbsp;</button>
        }
        {this.state.p164 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p164.bind(this)}>,&nbsp;</button>
        }
        {this.state.p164 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p164.bind(this)}>;&nbsp;</button>
        }
        {this.state.p164 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p164.bind(this)}>:&nbsp;</button>
        }
        {this.state.p164 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p164.bind(this)}>(&nbsp;</button>
        }
        {this.state.p164 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p164.bind(this)}>)&nbsp;</button>
        }
        {this.state.p164 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p164.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p164 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p164.bind(this)}>!&nbsp;</button>
        }
        {this.state.p164 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p164.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p164 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p164.bind(this)}>?&nbsp;</button>
        }
        {this.state.p164 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p164.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p164 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p164.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p164 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p164.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p164 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p164.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p164 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p164.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p164 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p164.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p164 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p164.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p164 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p164.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p164 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p164.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p165 === "y" &&
          <button id="txtBut" onClick={this.p165.bind(this)}>y</button>
        }
        {this.state.p165 === "Y" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p165.bind(this)}>Y</button>
        }
        {this.state.p165 === "Y" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p165.bind(this)}><span style={{color:"red"}}>Y</span></button>
        }

        {this.state.p166 === " " &&
          <button id="txtBut" onClick={this.p166.bind(this)}>&nbsp;</button>
        }
        {this.state.p166 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p166.bind(this)}>,&nbsp;</button>
        }
        {this.state.p166 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p166.bind(this)}>;&nbsp;</button>
        }
        {this.state.p166 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p166.bind(this)}>:&nbsp;</button>
        }
        {this.state.p166 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p166.bind(this)}>(&nbsp;</button>
        }
        {this.state.p166 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p166.bind(this)}>)&nbsp;</button>
        }
        {this.state.p166 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p166.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p166 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p166.bind(this)}>!&nbsp;</button>
        }
        {this.state.p166 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p166.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p166 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p166.bind(this)}>?&nbsp;</button>
        }
        {this.state.p166 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p166.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p166 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p166.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p166 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p166.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p166 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p166.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p166 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p166.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p166 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p166.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p166 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p166.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p166 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p166.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p166 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p166.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p167 === "su" &&
          <button id="txtBut" onClick={this.p167.bind(this)}>su</button>
        }
        {this.state.p167 === "Su" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p167.bind(this)}>Su</button>
        }
        {this.state.p167 === "Su" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p167.bind(this)}><span style={{color:"red"}}>S</span>u</button>
        }

        {this.state.p168 === " " &&
          <button id="txtBut" onClick={this.p168.bind(this)}>&nbsp;</button>
        }
        {this.state.p168 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p168.bind(this)}>,&nbsp;</button>
        }
        {this.state.p168 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p168.bind(this)}>;&nbsp;</button>
        }
        {this.state.p168 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p168.bind(this)}>:&nbsp;</button>
        }
        {this.state.p168 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p168.bind(this)}>(&nbsp;</button>
        }
        {this.state.p168 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p168.bind(this)}>)&nbsp;</button>
        }
        {this.state.p168 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p168.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p168 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p168.bind(this)}>!&nbsp;</button>
        }
        {this.state.p168 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p168.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p168 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p168.bind(this)}>?&nbsp;</button>
        }
        {this.state.p168 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p168.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p168 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p168.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p168 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p168.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p168 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p168.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p168 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p168.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p168 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p168.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p168 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p168.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p168 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p168.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p168 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p168.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p169 === "alimentación" &&
          <button id="txtBut" onClick={this.p169.bind(this)}>alimentación</button>
        }
        {this.state.p169 === "Alimentación" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p169.bind(this)}>Alimentación</button>
        }
        {this.state.p169 === "Alimentación" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p169.bind(this)}><span style={{color:"red"}}>A</span>limentación</button>
        }

        {this.state.p170 === " " &&
          <button id="txtBut" onClick={this.p170.bind(this)}>&nbsp;</button>
        }
        {this.state.p170 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p170.bind(this)}>,&nbsp;</button>
        }
        {this.state.p170 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p170.bind(this)}>;&nbsp;</button>
        }
        {this.state.p170 === ": " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p170.bind(this)}>:&nbsp;</button>
        }
        {this.state.p170 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p170.bind(this)}>(&nbsp;</button>
        }
        {this.state.p170 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p170.bind(this)}>)&nbsp;</button>
        }
        {this.state.p170 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p170.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p170 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p170.bind(this)}>!&nbsp;</button>
        }
        {this.state.p170 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p170.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p170 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p170.bind(this)}>?&nbsp;</button>
        }
        {this.state.p170 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p170.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p170 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p170.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p170 === ": " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p170.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p170 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p170.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p170 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p170.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p170 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p170.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p170 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p170.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p170 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p170.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p170 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p170.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p171 === "extraña" &&
          <button id="txtBut" onClick={this.p171.bind(this)}>extraña</button>
        }
        {this.state.p171 === "Extraña" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p171.bind(this)}>Extraña</button>
        }
        {this.state.p171 === "Extraña" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p171.bind(this)}><span style={{color:"red"}}>E</span>xtraña</button>
        }

        {this.state.p172 === " " &&
          <button id="txtBut" onClick={this.p172.bind(this)}>&nbsp;</button>
        }
        {this.state.p172 === ", " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p172.bind(this)}>,&nbsp;</button>
        }
        {this.state.p172 === "; " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p172.bind(this)}>;&nbsp;</button>
        }
        {this.state.p172 === ". " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p172.bind(this)}>.&nbsp;</button>
        }
        {this.state.p172 === "( " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p172.bind(this)}>(&nbsp;</button>
        }
        {this.state.p172 === ") " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p172.bind(this)}>)&nbsp;</button>
        }
        {this.state.p172 === "¡ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p172.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p172 === "! " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p172.bind(this)}>!&nbsp;</button>
        }
        {this.state.p172 === "¿ " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p172.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p172 === "? " && this.state.compare === false &&
          <button id="txtBut" onClick={this.p172.bind(this)}>?&nbsp;</button>
        }
        {this.state.p172 === " " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p172.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p172 === ", " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p172.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p172 === "; " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p172.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p172 === ". " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p172.bind(this)}><span>.</span>&nbsp;</button>
        }
        {this.state.p172 === "( " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p172.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p172 === ") " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p172.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p172 === "¡ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p172.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p172 === "! " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p172.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p172 === "¿ " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p172.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p172 === "? " && this.state.compare === true &&
          <button id="txtBut" onClick={this.p172.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p173 === "entonces" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p173.bind(this)}>entonces</button>
        }
        {this.state.p173 === "Entonces" && this.state.compare === false &&
          <button id="txtBut" onClick={this.p173.bind(this)}>Entonces</button>
        }
        {this.state.p173 === "entonces" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p173.bind(this)}><span style={{color:"red"}}>e</span>ntonces</button>
        }
        {this.state.p173 === "Entonces" && this.state.compare === true &&
          <button id="txtBut" onClick={this.p173.bind(this)}><span style={{color:"green"}}>E</span>ntonces</button>
        }

        {this.state.p174 === " " &&
                <button id="txtBut" onClick={this.p174.bind(this)}>&nbsp;</button>
        }
        {this.state.p174 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p174.bind(this)}>,&nbsp;</button>
        }
        {this.state.p174 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p174.bind(this)}>;&nbsp;</button>
        }
        {this.state.p174 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p174.bind(this)}>:&nbsp;</button>
        }
        {this.state.p174 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p174.bind(this)}>(&nbsp;</button>
        }
        {this.state.p174 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p174.bind(this)}>)&nbsp;</button>
        }
        {this.state.p174 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p174.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p174 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p174.bind(this)}>!&nbsp;</button>
        }
        {this.state.p174 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p174.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p174 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p174.bind(this)}>?&nbsp;</button>
        }
        {this.state.p174 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p174.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p174 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p174.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p174 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p174.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p174 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p174.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p174 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p174.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p174 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p174.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p174 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p174.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p174 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p174.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p174 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p174.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p175 === "comprendí" &&
                <button id="txtBut" onClick={this.p175.bind(this)}>comprendí</button>
        }
        {this.state.p175 === "Comprendí" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p175.bind(this)}>Comprendí</button>
        }
        {this.state.p175 === "Comprendí" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p175.bind(this)}><span style={{color:"red"}}>C</span>omprendí</button>
        }

        {this.state.p176 === " " &&
                <button id="txtBut" onClick={this.p176.bind(this)}>&nbsp;</button>
        }
        {this.state.p176 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p176.bind(this)}>,&nbsp;</button>
        }
        {this.state.p176 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p176.bind(this)}>;&nbsp;</button>
        }
        {this.state.p176 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p176.bind(this)}>:&nbsp;</button>
        }
        {this.state.p176 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p176.bind(this)}>(&nbsp;</button>
        }
        {this.state.p176 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p176.bind(this)}>)&nbsp;</button>
        }
        {this.state.p176 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p176.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p176 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p176.bind(this)}>!&nbsp;</button>
        }
        {this.state.p176 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p176.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p176 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p176.bind(this)}>?&nbsp;</button>
        }
        {this.state.p176 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p176.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p176 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p176.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p176 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p176.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p176 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p176.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p176 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p176.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p176 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p176.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p176 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p176.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p176 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p176.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p176 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p176.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p177 === "que" &&
                <button id="txtBut" onClick={this.p177.bind(this)}>que</button>
        }
        {this.state.p177 === "Que" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p177.bind(this)}>Que</button>
        }
        {this.state.p177 === "Que" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p177.bind(this)}><span style={{color:"red"}}>Q</span>ue</button>
        }

        {this.state.p178 === " " &&
                <button id="txtBut" onClick={this.p178.bind(this)}>&nbsp;</button>
        }
        {this.state.p178 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p178.bind(this)}>,&nbsp;</button>
        }
        {this.state.p178 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p178.bind(this)}>;&nbsp;</button>
        }
        {this.state.p178 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p178.bind(this)}>:&nbsp;</button>
        }
        {this.state.p178 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p178.bind(this)}>(&nbsp;</button>
        }
        {this.state.p178 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p178.bind(this)}>)&nbsp;</button>
        }
        {this.state.p178 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p178.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p178 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p178.bind(this)}>!&nbsp;</button>
        }
        {this.state.p178 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p178.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p178 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p178.bind(this)}>?&nbsp;</button>
        }
        {this.state.p178 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p178.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p178 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p178.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p178 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p178.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p178 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p178.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p178 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p178.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p178 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p178.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p178 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p178.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p178 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p178.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p178 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p178.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p179 === "tenía" &&
                <button id="txtBut" onClick={this.p179.bind(this)}>tenía</button>
        }
        {this.state.p179 === "Tenía" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p179.bind(this)}>Tenía</button>
        }
        {this.state.p179 === "Tenía" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p179.bind(this)}><span style={{color:"red"}}>T</span>enía</button>
        }

        {this.state.p180 === " " &&
                <button id="txtBut" onClick={this.p180.bind(this)}>&nbsp;</button>
        }
        {this.state.p180 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p180.bind(this)}>,&nbsp;</button>
        }
        {this.state.p180 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p180.bind(this)}>;&nbsp;</button>
        }
        {this.state.p180 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p180.bind(this)}>:&nbsp;</button>
        }
        {this.state.p180 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p180.bind(this)}>(&nbsp;</button>
        }
        {this.state.p180 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p180.bind(this)}>)&nbsp;</button>
        }
        {this.state.p180 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p180.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p180 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p180.bind(this)}>!&nbsp;</button>
        }
        {this.state.p180 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p180.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p180 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p180.bind(this)}>?&nbsp;</button>
        }
        {this.state.p180 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p180.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p180 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p180.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p180 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p180.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p180 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p180.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p180 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p180.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p180 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p180.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p180 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p180.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p180 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p180.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p180 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p180.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p181 === "en" &&
                <button id="txtBut" onClick={this.p181.bind(this)}>en</button>
        }
        {this.state.p181 === "En" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p181.bind(this)}>En</button>
        }
        {this.state.p181 === "En" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p181.bind(this)}><span style={{color:"red"}}>E</span>n</button>
        }

        {this.state.p182 === " " &&
                <button id="txtBut" onClick={this.p182.bind(this)}>&nbsp;</button>
        }
        {this.state.p182 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p182.bind(this)}>,&nbsp;</button>
        }
        {this.state.p182 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p182.bind(this)}>;&nbsp;</button>
        }
        {this.state.p182 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p182.bind(this)}>:&nbsp;</button>
        }
        {this.state.p182 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p182.bind(this)}>(&nbsp;</button>
        }
        {this.state.p182 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p182.bind(this)}>)&nbsp;</button>
        }
        {this.state.p182 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p182.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p182 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p182.bind(this)}>!&nbsp;</button>
        }
        {this.state.p182 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p182.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p182 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p182.bind(this)}>?&nbsp;</button>
        }
        {this.state.p182 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p182.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p182 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p182.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p182 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p182.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p182 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p182.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p182 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p182.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p182 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p182.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p182 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p182.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p182 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p182.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p182 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p182.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p183 === "las" &&
                <button id="txtBut" onClick={this.p183.bind(this)}>las</button>
        }
        {this.state.p183 === "Las" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p183.bind(this)}>Las</button>
        }
        {this.state.p183 === "Las" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p183.bind(this)}><span style={{color:"red"}}>L</span>as</button>
        }

        {this.state.p184 === " " &&
                <button id="txtBut" onClick={this.p184.bind(this)}>&nbsp;</button>
        }
        {this.state.p184 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p184.bind(this)}>,&nbsp;</button>
        }
        {this.state.p184 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p184.bind(this)}>;&nbsp;</button>
        }
        {this.state.p184 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p184.bind(this)}>:&nbsp;</button>
        }
        {this.state.p184 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p184.bind(this)}>(&nbsp;</button>
        }
        {this.state.p184 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p184.bind(this)}>)&nbsp;</button>
        }
        {this.state.p184 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p184.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p184 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p184.bind(this)}>!&nbsp;</button>
        }
        {this.state.p184 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p184.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p184 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p184.bind(this)}>?&nbsp;</button>
        }
        {this.state.p184 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p184.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p184 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p184.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p184 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p184.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p184 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p184.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p184 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p184.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p184 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p184.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p184 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p184.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p184 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p184.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p184 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p184.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p185 === "manos" &&
                <button id="txtBut" onClick={this.p185.bind(this)}>manos</button>
        }
        {this.state.p185 === "Manos" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p185.bind(this)}>Manos</button>
        }
        {this.state.p185 === "Manos" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p185.bind(this)}><span style={{color:"red"}}>M</span>anos</button>
        }

        {this.state.p186 === " " &&
                <button id="txtBut" onClick={this.p186.bind(this)}>&nbsp;</button>
        }
        {this.state.p186 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p186.bind(this)}>,&nbsp;</button>
        }
        {this.state.p186 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p186.bind(this)}>;&nbsp;</button>
        }
        {this.state.p186 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p186.bind(this)}>:&nbsp;</button>
        }
        {this.state.p186 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p186.bind(this)}>(&nbsp;</button>
        }
        {this.state.p186 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p186.bind(this)}>)&nbsp;</button>
        }
        {this.state.p186 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p186.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p186 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p186.bind(this)}>!&nbsp;</button>
        }
        {this.state.p186 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p186.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p186 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p186.bind(this)}>?&nbsp;</button>
        }
        {this.state.p186 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p186.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p186 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p186.bind(this)}>,&nbsp;</button>
        }
        {this.state.p186 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p186.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p186 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p186.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p186 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p186.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p186 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p186.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p186 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p186.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p186 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p186.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p186 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p186.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p186 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p186.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p187 === "de" &&
                <button id="txtBut" onClick={this.p187.bind(this)}>de</button>
        }
        {this.state.p187 === "De" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p187.bind(this)}>De</button>
        }
        {this.state.p187 === "De" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p187.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p188 === " " &&
                <button id="txtBut" onClick={this.p188.bind(this)}>&nbsp;</button>
        }
        {this.state.p188 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p188.bind(this)}>,&nbsp;</button>
        }
        {this.state.p188 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p188.bind(this)}>;&nbsp;</button>
        }
        {this.state.p188 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p188.bind(this)}>:&nbsp;</button>
        }
        {this.state.p188 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p188.bind(this)}>(&nbsp;</button>
        }
        {this.state.p188 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p188.bind(this)}>)&nbsp;</button>
        }
        {this.state.p188 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p188.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p188 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p188.bind(this)}>!&nbsp;</button>
        }
        {this.state.p188 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p188.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p188 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p188.bind(this)}>?&nbsp;</button>
        }
        {this.state.p188 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p188.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p188 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p188.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p188 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p188.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p188 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p188.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p188 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p188.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p188 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p188.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p188 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p188.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p188 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p188.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p188 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p188.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p189 === "una" &&
                <button id="txtBut" onClick={this.p189.bind(this)}>una</button>
        }
        {this.state.p189 === "Una" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p189.bind(this)}>Una</button>
        }
        {this.state.p189 === "Una" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p189.bind(this)}><span style={{color:"red"}}>U</span>na</button>
        }

        {this.state.p190 === " " &&
                <button id="txtBut" onClick={this.p190.bind(this)}>&nbsp;</button>
        }
        {this.state.p190 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p190.bind(this)}>,&nbsp;</button>
        }
        {this.state.p190 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p190.bind(this)}>;&nbsp;</button>
        }
        {this.state.p190 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p190.bind(this)}>:&nbsp;</button>
        }
        {this.state.p190 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p190.bind(this)}>(&nbsp;</button>
        }
        {this.state.p190 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p190.bind(this)}>)&nbsp;</button>
        }
        {this.state.p190 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p190.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p190 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p190.bind(this)}>!&nbsp;</button>
        }
        {this.state.p190 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p190.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p190 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p190.bind(this)}>?&nbsp;</button>
        }
        {this.state.p190 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p190.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p190 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p190.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p190 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p190.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p190 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p190.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p190 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p190.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p190 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p190.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p190 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p190.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p190 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p190.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p190 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p190.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p191 === "vez" &&
                <button id="txtBut" onClick={this.p191.bind(this)}>vez</button>
        }
        {this.state.p191 === "Vez" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p191.bind(this)}>Vez</button>
        }
        {this.state.p191 === "Vez" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p191.bind(this)}><span style={{color:"red"}}>V</span>ez</button>
        }

        {this.state.p192 === " " &&
                <button id="txtBut" onClick={this.p192.bind(this)}>&nbsp;</button>
        }
        {this.state.p192 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p192.bind(this)}>,&nbsp;</button>
        }
        {this.state.p192 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p192.bind(this)}>;&nbsp;</button>
        }
        {this.state.p192 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p192.bind(this)}>:&nbsp;</button>
        }
        {this.state.p192 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p192.bind(this)}>(&nbsp;</button>
        }
        {this.state.p192 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p192.bind(this)}>)&nbsp;</button>
        }
        {this.state.p192 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p192.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p192 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p192.bind(this)}>!&nbsp;</button>
        }
        {this.state.p192 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p192.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p192 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p192.bind(this)}>?&nbsp;</button>
        }
        {this.state.p192 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p192.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p192 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p192.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p192 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p192.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p192 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p192.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p192 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p192.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p192 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p192.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p192 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p192.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p192 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p192.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p192 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p192.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p193 === "por" &&
                <button id="txtBut" onClick={this.p193.bind(this)}>por</button>
        }
        {this.state.p193 === "Por" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p193.bind(this)}>Por</button>
        }
        {this.state.p193 === "Por" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p193.bind(this)}><span style={{color:"red"}}>P</span>or</button>
        }

        {this.state.p194 === " " &&
                <button id="txtBut" onClick={this.p194.bind(this)}>&nbsp;</button>
        }
        {this.state.p194 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p194.bind(this)}>,&nbsp;</button>
        }
        {this.state.p194 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p194.bind(this)}>;&nbsp;</button>
        }
        {this.state.p194 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p194.bind(this)}>:&nbsp;</button>
        }
        {this.state.p194 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p194.bind(this)}>(&nbsp;</button>
        }
        {this.state.p194 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p194.bind(this)}>)&nbsp;</button>
        }
        {this.state.p194 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p194.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p194 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p194.bind(this)}>!&nbsp;</button>
        }
        {this.state.p194 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p194.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p194 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p194.bind(this)}>?&nbsp;</button>
        }
        {this.state.p194 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p194.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p194 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p194.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p194 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p194.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p194 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p194.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p194 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p194.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p194 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p194.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p194 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p194.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p194 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p194.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p194 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p194.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p195 === "todas" &&
                <button id="txtBut" onClick={this.p195.bind(this)}>todas</button>
        }
        {this.state.p195 === "Todas" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p195.bind(this)}>Todas</button>
        }
        {this.state.p195 === "Todas" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p195.bind(this)}><span style={{color:"red"}}>T</span>odas</button>
        }

        {this.state.p196 === " " &&
                <button id="txtBut" onClick={this.p196.bind(this)}>&nbsp;</button>
        }
        {this.state.p196 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p196.bind(this)}>,&nbsp;</button>
        }
        {this.state.p196 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p196.bind(this)}>;&nbsp;</button>
        }
        {this.state.p196 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p196.bind(this)}>:&nbsp;</button>
        }
        {this.state.p196 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p196.bind(this)}>(&nbsp;</button>
        }
        {this.state.p196 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p196.bind(this)}>)&nbsp;</button>
        }
        {this.state.p196 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p196.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p196 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p196.bind(this)}>!&nbsp;</button>
        }
        {this.state.p196 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p196.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p196 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p196.bind(this)}>?&nbsp;</button>
        }
        {this.state.p196 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p196.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p196 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p196.bind(this)}>,&nbsp;</button>
        }
        {this.state.p196 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p196.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p196 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p196.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p196 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p196.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p196 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p196.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p196 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p196.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p196 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p196.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p196 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p196.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p196 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p196.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p197 === "la" &&
                <button id="txtBut" onClick={this.p197.bind(this)}>la</button>
        }
        {this.state.p197 === "La" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p197.bind(this)}>La</button>
        }
        {this.state.p197 === "La" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p197.bind(this)}><span style={{color:"red"}}>L</span>a</button>
        }

        {this.state.p198 === " " &&
                <button id="txtBut" onClick={this.p198.bind(this)}>&nbsp;</button>
        }
        {this.state.p198 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p198.bind(this)}>,&nbsp;</button>
        }
        {this.state.p198 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p198.bind(this)}>;&nbsp;</button>
        }
        {this.state.p198 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p198.bind(this)}>:&nbsp;</button>
        }
        {this.state.p198 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p198.bind(this)}>(&nbsp;</button>
        }
        {this.state.p198 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p198.bind(this)}>)&nbsp;</button>
        }
        {this.state.p198 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p198.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p198 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p198.bind(this)}>!&nbsp;</button>
        }
        {this.state.p198 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p198.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p198 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p198.bind(this)}>?&nbsp;</button>
        }
        {this.state.p198 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p198.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p198 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p198.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p198 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p198.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p198 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p198.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p198 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p198.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p198 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p198.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p198 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p198.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p198 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p198.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p198 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p198.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p199 === "amenaza" &&
                <button id="txtBut" onClick={this.p199.bind(this)}>amenaza</button>
        }
        {this.state.p199 === "Amenaza" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p199.bind(this)}>Amenaza</button>
        }
        {this.state.p199 === "Amenaza" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p199.bind(this)}><span style={{color:"red"}}>A</span>menaza</button>
        }

        {this.state.p200 === " " &&
                <button id="txtBut" onClick={this.p200.bind(this)}>&nbsp;</button>
        }
        {this.state.p200 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p200.bind(this)}>,&nbsp;</button>
        }
        {this.state.p200 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p200.bind(this)}>;&nbsp;</button>
        }
        {this.state.p200 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p200.bind(this)}>:&nbsp;</button>
        }
        {this.state.p200 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p200.bind(this)}>(&nbsp;</button>
        }
        {this.state.p200 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p200.bind(this)}>)&nbsp;</button>
        }
        {this.state.p200 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p200.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p200 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p200.bind(this)}>!&nbsp;</button>
        }
        {this.state.p200 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p200.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p200 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p200.bind(this)}>?&nbsp;</button>
        }
        {this.state.p200 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p200.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p200 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p200.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p200 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p200.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p200 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p200.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p200 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p200.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p200 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p200.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p200 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p200.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p200 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p200.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p200 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p200.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p201 === "total" &&
                <button id="txtBut" onClick={this.p201.bind(this)}>total</button>
        }
        {this.state.p201 === "Total" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p201.bind(this)}>Total</button>
        }
        {this.state.p201 === "Total" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p201.bind(this)}><span style={{color:"red"}}>T</span>otal</button>
        }

        {this.state.p202 === " " &&
                <button id="txtBut" onClick={this.p202.bind(this)}>&nbsp;</button>
        }
        {this.state.p202 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p202.bind(this)}>,&nbsp;</button>
        }
        {this.state.p202 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p202.bind(this)}>;&nbsp;</button>
        }
        {this.state.p202 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p202.bind(this)}>:&nbsp;</button>
        }
        {this.state.p202 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p202.bind(this)}>(&nbsp;</button>
        }
        {this.state.p202 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p202.bind(this)}>)&nbsp;</button>
        }
        {this.state.p202 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p202.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p202 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p202.bind(this)}>!&nbsp;</button>
        }
        {this.state.p202 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p202.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p202 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p202.bind(this)}>?&nbsp;</button>
        }
        {this.state.p202 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p202.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p202 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p202.bind(this)}>,&nbsp;</button>
        }
        {this.state.p202 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p202.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p202 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p202.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p202 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p202.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p202 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p202.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p202 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p202.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p202 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p202.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p202 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p202.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p202 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p202.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p203 === "la" &&
                <button id="txtBut" onClick={this.p203.bind(this)}>la</button>
        }
        {this.state.p203 === "La" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p203.bind(this)}>La</button>
        }
        {this.state.p203 === "La" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p203.bind(this)}><span style={{color:"red"}}>L</span>a</button>
        }

        {this.state.p204 === " " &&
                <button id="txtBut" onClick={this.p204.bind(this)}>&nbsp;</button>
        }
        {this.state.p204 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p204.bind(this)}>,&nbsp;</button>
        }
        {this.state.p204 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p204.bind(this)}>;&nbsp;</button>
        }
        {this.state.p204 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p204.bind(this)}>:&nbsp;</button>
        }
        {this.state.p204 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p204.bind(this)}>(&nbsp;</button>
        }
        {this.state.p204 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p204.bind(this)}>)&nbsp;</button>
        }
        {this.state.p204 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p204.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p204 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p204.bind(this)}>!&nbsp;</button>
        }
        {this.state.p204 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p204.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p204 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p204.bind(this)}>?&nbsp;</button>
        }
        {this.state.p204 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p204.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p204 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p204.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p204 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p204.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p204 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p204.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p204 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p204.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p204 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p204.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p204 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p204.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p204 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p204.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p204 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p204.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p205 === "máxima" &&
                <button id="txtBut" onClick={this.p205.bind(this)}>máxima</button>
        }
        {this.state.p205 === "Máxima" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p205.bind(this)}>Máxima</button>
        }
        {this.state.p205 === "Máxima" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p205.bind(this)}><span style={{color:"red"}}>M</span>áxima</button>
        }

        {this.state.p206 === " " &&
                <button id="txtBut" onClick={this.p206.bind(this)}>&nbsp;</button>
        }
        {this.state.p206 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p206.bind(this)}>,&nbsp;</button>
        }
        {this.state.p206 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p206.bind(this)}>;&nbsp;</button>
        }
        {this.state.p206 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p206.bind(this)}>:&nbsp;</button>
        }
        {this.state.p206 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p206.bind(this)}>(&nbsp;</button>
        }
        {this.state.p206 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p206.bind(this)}>)&nbsp;</button>
        }
        {this.state.p206 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p206.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p206 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p206.bind(this)}>!&nbsp;</button>
        }
        {this.state.p206 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p206.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p206 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p206.bind(this)}>?&nbsp;</button>
        }
        {this.state.p206 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p206.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p206 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p206.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p206 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p206.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p206 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p206.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p206 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p206.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p206 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p206.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p206 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p206.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p206 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p206.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p206 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p206.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p207 === "dosis" &&
                <button id="txtBut" onClick={this.p207.bind(this)}>dosis</button>
        }
        {this.state.p207 === "Dosis" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p207.bind(this)}>Dosis</button>
        }
        {this.state.p207 === "Dosis" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p207.bind(this)}><span style={{color:"red"}}>D</span>osis</button>
        }

        {this.state.p208 === " " &&
                <button id="txtBut" onClick={this.p208.bind(this)}>&nbsp;</button>
        }
        {this.state.p208 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p208.bind(this)}>,&nbsp;</button>
        }
        {this.state.p208 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p208.bind(this)}>;&nbsp;</button>
        }
        {this.state.p208 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p208.bind(this)}>:&nbsp;</button>
        }
        {this.state.p208 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p208.bind(this)}>(&nbsp;</button>
        }
        {this.state.p208 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p208.bind(this)}>)&nbsp;</button>
        }
        {this.state.p208 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p208.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p208 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p208.bind(this)}>!&nbsp;</button>
        }
        {this.state.p208 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p208.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p208 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p208.bind(this)}>?&nbsp;</button>
        }
        {this.state.p208 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p208.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p208 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p208.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p208 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p208.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p208 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p208.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p208 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p208.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p208 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p208.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p208 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p208.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p208 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p208.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p208 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p208.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p209 === "de" &&
                <button id="txtBut" onClick={this.p209.bind(this)}>de</button>
        }
        {this.state.p209 === "De" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p209.bind(this)}>De</button>
        }
        {this.state.p209 === "De" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p209.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p210 === " " &&
                <button id="txtBut" onClick={this.p210.bind(this)}>&nbsp;</button>
        }
        {this.state.p210 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p210.bind(this)}>,&nbsp;</button>
        }
        {this.state.p210 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p210.bind(this)}>;&nbsp;</button>
        }
        {this.state.p210 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p210.bind(this)}>:&nbsp;</button>
        }
        {this.state.p210 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p210.bind(this)}>(&nbsp;</button>
        }
        {this.state.p210 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p210.bind(this)}>)&nbsp;</button>
        }
        {this.state.p210 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p210.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p210 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p210.bind(this)}>!&nbsp;</button>
        }
        {this.state.p210 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p210.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p210 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p210.bind(this)}>?&nbsp;</button>
        }
        {this.state.p210 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p210.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p210 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p210.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p210 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p210.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p210 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p210.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p210 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p210.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p210 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p210.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p210 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p210.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p210 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p210.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p210 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p210.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p211 === "terror" &&
                <button id="txtBut" onClick={this.p211.bind(this)}>terror</button>
        }
        {this.state.p211 === "Terror" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p211.bind(this)}>Terror</button>
        }
        {this.state.p211 === "Terror" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p211.bind(this)}><span style={{color:"red"}}>T</span>error</button>
        }

        {this.state.p212 === " " &&
                <button id="txtBut" onClick={this.p212.bind(this)}>&nbsp;</button>
        }
        {this.state.p212 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p212.bind(this)}>,&nbsp;</button>
        }
        {this.state.p212 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p212.bind(this)}>;&nbsp;</button>
        }
        {this.state.p212 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p212.bind(this)}>:&nbsp;</button>
        }
        {this.state.p212 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p212.bind(this)}>(&nbsp;</button>
        }
        {this.state.p212 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p212.bind(this)}>)&nbsp;</button>
        }
        {this.state.p212 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p212.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p212 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p212.bind(this)}>!&nbsp;</button>
        }
        {this.state.p212 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p212.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p212 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p212.bind(this)}>?&nbsp;</button>
        }
        {this.state.p212 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p212.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p212 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p212.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p212 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p212.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p212 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p212.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p212 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p212.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p212 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p212.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p212 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p212.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p212 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p212.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p212 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p212.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p213 === "que" &&
                <button id="txtBut" onClick={this.p213.bind(this)}>que</button>
        }
        {this.state.p213 === "Que" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p213.bind(this)}>Que</button>
        }
        {this.state.p213 === "Que" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p213.bind(this)}><span style={{color:"red"}}>Q</span>ue</button>
        }

        {this.state.p214 === " " &&
                <button id="txtBut" onClick={this.p214.bind(this)}>&nbsp;</button>
        }
        {this.state.p214 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p214.bind(this)}>,&nbsp;</button>
        }
        {this.state.p214 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p214.bind(this)}>;&nbsp;</button>
        }
        {this.state.p214 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p214.bind(this)}>:&nbsp;</button>
        }
        {this.state.p214 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p214.bind(this)}>(&nbsp;</button>
        }
        {this.state.p214 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p214.bind(this)}>)&nbsp;</button>
        }
        {this.state.p214 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p214.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p214 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p214.bind(this)}>!&nbsp;</button>
        }
        {this.state.p214 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p214.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p214 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p214.bind(this)}>?&nbsp;</button>
        }
        {this.state.p214 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p214.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p214 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p214.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p214 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p214.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p214 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p214.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p214 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p214.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p214 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p214.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p214 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p214.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p214 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p214.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p214 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p214.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p215 === "mi" &&
                <button id="txtBut" onClick={this.p215.bind(this)}>mi</button>
        }
        {this.state.p215 === "Mi" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p215.bind(this)}>Mi</button>
        }
        {this.state.p215 === "Mi" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p215.bind(this)}><span style={{color:"red"}}>M</span>i</button>
        }

        {this.state.p216 === " " &&
                <button id="txtBut" onClick={this.p216.bind(this)}>&nbsp;</button>
        }
        {this.state.p216 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p216.bind(this)}>,&nbsp;</button>
        }
        {this.state.p216 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p216.bind(this)}>;&nbsp;</button>
        }
        {this.state.p216 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p216.bind(this)}>:&nbsp;</button>
        }
        {this.state.p216 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p216.bind(this)}>(&nbsp;</button>
        }
        {this.state.p216 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p216.bind(this)}>)&nbsp;</button>
        }
        {this.state.p216 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p216.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p216 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p216.bind(this)}>!&nbsp;</button>
        }
        {this.state.p216 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p216.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p216 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p216.bind(this)}>?&nbsp;</button>
        }
        {this.state.p216 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p216.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p216 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p216.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p216 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p216.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p216 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p216.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p216 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p216.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p216 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p216.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p216 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p216.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p216 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p216.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p216 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p216.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p217 === "espíritu" &&
                <button id="txtBut" onClick={this.p217.bind(this)}>espíritu</button>
        }
        {this.state.p217 === "Espíritu" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p217.bind(this)}>Espíritu</button>
        }
        {this.state.p217 === "Espíritu" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p217.bind(this)}><span style={{color:"red"}}>E</span>spíritu</button>
        }

        {this.state.p218 === " " &&
                <button id="txtBut" onClick={this.p218.bind(this)}>&nbsp;</button>
        }
        {this.state.p218 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p218.bind(this)}>,&nbsp;</button>
        }
        {this.state.p218 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p218.bind(this)}>;&nbsp;</button>
        }
        {this.state.p218 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p218.bind(this)}>:&nbsp;</button>
        }
        {this.state.p218 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p218.bind(this)}>(&nbsp;</button>
        }
        {this.state.p218 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p218.bind(this)}>)&nbsp;</button>
        }
        {this.state.p218 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p218.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p218 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p218.bind(this)}>!&nbsp;</button>
        }
        {this.state.p218 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p218.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p218 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p218.bind(this)}>?&nbsp;</button>
        }
        {this.state.p218 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p218.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p218 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p218.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p218 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p218.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p218 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p218.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p218 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p218.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p218 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p218.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p218 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p218.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p218 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p218.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p218 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p218.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p219 === "podía" &&
                <button id="txtBut" onClick={this.p219.bind(this)}>podía</button>
        }
        {this.state.p219 === "Podía" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p219.bind(this)}>Podía</button>
        }
        {this.state.p219 === "Podía" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p219.bind(this)}><span style={{color:"red"}}>P</span>odía</button>
        }

        {this.state.p220 === " " &&
                <button id="txtBut" onClick={this.p220.bind(this)}>&nbsp;</button>
        }
        {this.state.p220 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p220.bind(this)}>,&nbsp;</button>
        }
        {this.state.p220 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p220.bind(this)}>;&nbsp;</button>
        }
        {this.state.p220 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p220.bind(this)}>:&nbsp;</button>
        }
        {this.state.p220 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p220.bind(this)}>(&nbsp;</button>
        }
        {this.state.p220 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p220.bind(this)}>)&nbsp;</button>
        }
        {this.state.p220 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p220.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p220 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p220.bind(this)}>!&nbsp;</button>
        }
        {this.state.p220 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p220.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p220 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p220.bind(this)}>?&nbsp;</button>
        }
        {this.state.p220 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p220.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p220 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p220.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p220 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p220.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p220 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p220.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p220 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p220.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p220 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p220.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p220 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p220.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p220 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p220.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p220 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p220.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p221 === "soportar" &&
                <button id="txtBut" onClick={this.p221.bind(this)}>soportar</button>
        }
        {this.state.p221 === "Soportar" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p221.bind(this)}>Soportar</button>
        }
        {this.state.p221 === "Soportar" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p221.bind(this)}><span style={{color:"red"}}>S</span>oportar</button>
        }

        {this.state.p222 === " " &&
                <button id="txtBut" onClick={this.p222.bind(this)}>&nbsp;</button>
        }
        {this.state.p222 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p222.bind(this)}>,&nbsp;</button>
        }
        {this.state.p222 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p222.bind(this)}>;&nbsp;</button>
        }
        {this.state.p222 === ". " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p222.bind(this)}>.&nbsp;</button>
        }
        {this.state.p222 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p222.bind(this)}>(&nbsp;</button>
        }
        {this.state.p222 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p222.bind(this)}>)&nbsp;</button>
        }
        {this.state.p222 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p222.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p222 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p222.bind(this)}>!&nbsp;</button>
        }
        {this.state.p222 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p222.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p222 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p222.bind(this)}>?&nbsp;</button>
        }
        {this.state.p222 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p222.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p222 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p222.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p222 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p222.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p222 === ". " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p222.bind(this)}>.&nbsp;</button>
        }
        {this.state.p222 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p222.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p222 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p222.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p222 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p222.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p222 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p222.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p222 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p222.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p222 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p222.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p223 === "recuerdo" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p223.bind(this)}>recuerdo</button>
        }
        {this.state.p223 === "Recuerdo" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p223.bind(this)}>Recuerdo</button>
        }
        {this.state.p223 === "recuerdo" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p223.bind(this)}><span style={{color:"red"}}>r</span>ecuerdo</button>
        }
        {this.state.p223 === "Recuerdo" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p223.bind(this)}><span style={{color:"green"}}>R</span>ecuerdo</button>
        }

        {this.state.p224 === " " &&
                <button id="txtBut" onClick={this.p224.bind(this)}>&nbsp;</button>
        }
        {this.state.p224 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p224.bind(this)}>,&nbsp;</button>
        }
        {this.state.p224 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p224.bind(this)}>;&nbsp;</button>
        }
        {this.state.p224 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p224.bind(this)}>:&nbsp;</button>
        }
        {this.state.p224 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p224.bind(this)}>(&nbsp;</button>
        }
        {this.state.p224 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p224.bind(this)}>)&nbsp;</button>
        }
        {this.state.p224 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p224.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p224 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p224.bind(this)}>!&nbsp;</button>
        }
        {this.state.p224 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p224.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p224 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p224.bind(this)}>?&nbsp;</button>
        }
        {this.state.p224 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p224.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p224 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p224.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p224 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p224.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p224 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p224.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p224 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p224.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p224 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p224.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p224 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p224.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p224 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p224.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p224 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p224.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p225 === "mi" &&
                <button id="txtBut" onClick={this.p225.bind(this)}>mi</button>
        }
        {this.state.p225 === "Mi" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p225.bind(this)}>Mi</button>
        }
        {this.state.p225 === "Mi" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p225.bind(this)}><span style={{color:"red"}}>M</span>i</button>
        }

        {this.state.p226 === " " &&
                <button id="txtBut" onClick={this.p226.bind(this)}>&nbsp;</button>
        }
        {this.state.p226 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p226.bind(this)}>,&nbsp;</button>
        }
        {this.state.p226 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p226.bind(this)}>;&nbsp;</button>
        }
        {this.state.p226 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p226.bind(this)}>:&nbsp;</button>
        }
        {this.state.p226 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p226.bind(this)}>(&nbsp;</button>
        }
        {this.state.p226 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p226.bind(this)}>)&nbsp;</button>
        }
        {this.state.p226 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p226.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p226 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p226.bind(this)}>!&nbsp;</button>
        }
        {this.state.p226 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p226.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p226 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p226.bind(this)}>?&nbsp;</button>
        }
        {this.state.p226 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p226.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p226 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p226.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p226 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p226.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p226 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p226.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p226 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p226.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p226 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p226.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p226 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p226.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p226 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p226.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p226 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p226.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p227 === "paso" &&
                <button id="txtBut" onClick={this.p227.bind(this)}>paso</button>
        }
        {this.state.p227 === "Paso" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p227.bind(this)}>Paso</button>
        }
        {this.state.p227 === "Paso" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p227.bind(this)}><span style={{color:"red"}}>P</span>aso</button>
        }

        {this.state.p228 === " " &&
                <button id="txtBut" onClick={this.p228.bind(this)}>&nbsp;</button>
        }
        {this.state.p228 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p228.bind(this)}>,&nbsp;</button>
        }
        {this.state.p228 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p228.bind(this)}>;&nbsp;</button>
        }
        {this.state.p228 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p228.bind(this)}>:&nbsp;</button>
        }
        {this.state.p228 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p228.bind(this)}>(&nbsp;</button>
        }
        {this.state.p228 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p228.bind(this)}>)&nbsp;</button>
        }
        {this.state.p228 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p228.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p228 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p228.bind(this)}>!&nbsp;</button>
        }
        {this.state.p228 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p228.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p228 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p228.bind(this)}>?&nbsp;</button>
        }
        {this.state.p228 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p228.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p228 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p228.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p228 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p228.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p228 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p228.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p228 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p228.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p228 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p228.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p228 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p228.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p228 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p228.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p228 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p228.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p229 === "tembloroso" &&
                <button id="txtBut" onClick={this.p229.bind(this)}>tembloroso</button>
        }
        {this.state.p229 === "Tembloroso" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p229.bind(this)}>Tembloroso</button>
        }
        {this.state.p229 === "Tembloroso" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p229.bind(this)}><span style={{color:"red"}}>T</span>embloroso</button>
        }

        {this.state.p230 === " " &&
                <button id="txtBut" onClick={this.p230.bind(this)}>&nbsp;</button>
        }
        {this.state.p230 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p230.bind(this)}>,&nbsp;</button>
        }
        {this.state.p230 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p230.bind(this)}>;&nbsp;</button>
        }
        {this.state.p230 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p230.bind(this)}>:&nbsp;</button>
        }
        {this.state.p230 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p230.bind(this)}>(&nbsp;</button>
        }
        {this.state.p230 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p230.bind(this)}>)&nbsp;</button>
        }
        {this.state.p230 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p230.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p230 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p230.bind(this)}>!&nbsp;</button>
        }
        {this.state.p230 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p230.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p230 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p230.bind(this)}>?&nbsp;</button>
        }
        {this.state.p230 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p230.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p230 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p230.bind(this)}>,&nbsp;</button>
        }
        {this.state.p230 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p230.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p230 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p230.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p230 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p230.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p230 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p230.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p230 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p230.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p230 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p230.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p230 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p230.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p230 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p230.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p231 === "vacilante" &&
                <button id="txtBut" onClick={this.p231.bind(this)}>vacilante</button>
        }
        {this.state.p231 === "Vacilante" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p231.bind(this)}>Vacilante</button>
        }
        {this.state.p231 === "Vacilante" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p231.bind(this)}><span style={{color:"red"}}>V</span>acilante</button>
        }

        {this.state.p232 === " " &&
                <button id="txtBut" onClick={this.p232.bind(this)}>&nbsp;</button>
        }
        {this.state.p232 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p232.bind(this)}>,&nbsp;</button>
        }
        {this.state.p232 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p232.bind(this)}>;&nbsp;</button>
        }
        {this.state.p232 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p232.bind(this)}>:&nbsp;</button>
        }
        {this.state.p232 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p232.bind(this)}>(&nbsp;</button>
        }
        {this.state.p232 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p232.bind(this)}>)&nbsp;</button>
        }
        {this.state.p232 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p232.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p232 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p232.bind(this)}>!&nbsp;</button>
        }
        {this.state.p232 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p232.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p232 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p232.bind(this)}>?&nbsp;</button>
        }
        {this.state.p232 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p232.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p232 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p232.bind(this)}><span style={{color:"green"}}>,</span>&nbsp;</button>
        }
        {this.state.p232 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p232.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p232 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p232.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p232 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p232.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p232 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p232.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p232 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p232.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p232 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p232.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p232 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p232.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p232 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p232.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p233 === "cuando" &&
                <button id="txtBut" onClick={this.p233.bind(this)}>cuando</button>
        }
        {this.state.p233 === "Cuando" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p233.bind(this)}>Cuando</button>
        }
        {this.state.p233 === "Cuando" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p233.bind(this)}><span style={{color:"red"}}>C</span>uando</button>
        }

        {this.state.p234 === " " &&
                <button id="txtBut" onClick={this.p234.bind(this)}>&nbsp;</button>
        }
        {this.state.p234 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p234.bind(this)}>,&nbsp;</button>
        }
        {this.state.p234 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p234.bind(this)}>;&nbsp;</button>
        }
        {this.state.p234 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p234.bind(this)}>:&nbsp;</button>
        }
        {this.state.p234 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p234.bind(this)}>(&nbsp;</button>
        }
        {this.state.p234 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p234.bind(this)}>)&nbsp;</button>
        }
        {this.state.p234 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p234.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p234 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p234.bind(this)}>!&nbsp;</button>
        }
        {this.state.p234 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p234.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p234 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p234.bind(this)}>?&nbsp;</button>
        }
        {this.state.p234 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p234.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p234 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p234.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p234 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p234.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p234 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p234.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p234 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p234.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p234 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p234.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p234 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p234.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p234 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p234.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p234 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p234.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p235 === "de" &&
                <button id="txtBut" onClick={this.p235.bind(this)}>de</button>
        }
        {this.state.p235 === "De" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p235.bind(this)}>De</button>
        }
        {this.state.p235 === "De" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p235.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p236 === " " &&
                <button id="txtBut" onClick={this.p236.bind(this)}>&nbsp;</button>
        }
        {this.state.p236 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p236.bind(this)}>,&nbsp;</button>
        }
        {this.state.p236 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p236.bind(this)}>;&nbsp;</button>
        }
        {this.state.p236 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p236.bind(this)}>:&nbsp;</button>
        }
        {this.state.p236 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p236.bind(this)}>(&nbsp;</button>
        }
        {this.state.p236 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p236.bind(this)}>)&nbsp;</button>
        }
        {this.state.p236 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p236.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p236 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p236.bind(this)}>!&nbsp;</button>
        }
        {this.state.p236 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p236.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p236 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p236.bind(this)}>?&nbsp;</button>
        }
        {this.state.p236 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p236.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p236 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p236.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p236 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p236.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p236 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p236.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p236 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p236.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p236 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p236.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p236 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p236.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p236 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p236.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p236 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p236.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p237 === "regreso" &&
                <button id="txtBut" onClick={this.p237.bind(this)}>regreso</button>
        }
        {this.state.p237 === "Regreso" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p237.bind(this)}>Regreso</button>
        }
        {this.state.p237 === "Regreso" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p237.bind(this)}><span style={{color:"red"}}>R</span>egreso</button>
        }

        {this.state.p238 === " " &&
                <button id="txtBut" onClick={this.p238.bind(this)}>&nbsp;</button>
        }
        {this.state.p238 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p238.bind(this)}>,&nbsp;</button>
        }
        {this.state.p238 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p238.bind(this)}>;&nbsp;</button>
        }
        {this.state.p238 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p238.bind(this)}>:&nbsp;</button>
        }
        {this.state.p238 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p238.bind(this)}>(&nbsp;</button>
        }
        {this.state.p238 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p238.bind(this)}>)&nbsp;</button>
        }
        {this.state.p238 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p238.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p238 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p238.bind(this)}>!&nbsp;</button>
        }
        {this.state.p238 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p238.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p238 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p238.bind(this)}>?&nbsp;</button>
        }
        {this.state.p238 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p238.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p238 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p238.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p238 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p238.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p238 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p238.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p238 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p238.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p238 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p238.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p238 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p238.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p238 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p238.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p238 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p238.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p239 === "a" &&
                <button id="txtBut" onClick={this.p239.bind(this)}>a</button>
        }
        {this.state.p239 === "A" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p239.bind(this)}>A</button>
        }
        {this.state.p239 === "A" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p239.bind(this)}><span style={{color:"red"}}>A</span></button>
        }

        {this.state.p240 === " " &&
                <button id="txtBut" onClick={this.p240.bind(this)}>&nbsp;</button>
        }
        {this.state.p240 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p240.bind(this)}>,&nbsp;</button>
        }
        {this.state.p240 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p240.bind(this)}>;&nbsp;</button>
        }
        {this.state.p240 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p240.bind(this)}>:&nbsp;</button>
        }
        {this.state.p240 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p240.bind(this)}>(&nbsp;</button>
        }
        {this.state.p240 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p240.bind(this)}>)&nbsp;</button>
        }
        {this.state.p240 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p240.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p240 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p240.bind(this)}>!&nbsp;</button>
        }
        {this.state.p240 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p240.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p240 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p240.bind(this)}>?&nbsp;</button>
        }
        {this.state.p240 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p240.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p240 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p240.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p240 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p240.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p240 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p240.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p240 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p240.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p240 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p240.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p240 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p240.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p240 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p240.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p240 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p240.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p241 === "la" &&
                <button id="txtBut" onClick={this.p241.bind(this)}>la</button>
        }
        {this.state.p241 === "La" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p241.bind(this)}>La</button>
        }
        {this.state.p241 === "La" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p241.bind(this)}><span style={{color:"red"}}>L</span>a</button>
        }

        {this.state.p242 === " " &&
                <button id="txtBut" onClick={this.p242.bind(this)}>&nbsp;</button>
        }
        {this.state.p242 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p242.bind(this)}>,&nbsp;</button>
        }
        {this.state.p242 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p242.bind(this)}>;&nbsp;</button>
        }
        {this.state.p242 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p242.bind(this)}>:&nbsp;</button>
        }
        {this.state.p242 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p242.bind(this)}>(&nbsp;</button>
        }
        {this.state.p242 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p242.bind(this)}>)&nbsp;</button>
        }
        {this.state.p242 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p242.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p242 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p242.bind(this)}>!&nbsp;</button>
        }
        {this.state.p242 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p242.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p242 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p242.bind(this)}>?&nbsp;</button>
        }
        {this.state.p242 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p242.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p242 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p242.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p242 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p242.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p242 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p242.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p242 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p242.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p242 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p242.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p242 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p242.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p242 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p242.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p242 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p242.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p243 === "casa" &&
                <button id="txtBut" onClick={this.p243.bind(this)}>casa</button>
        }
        {this.state.p243 === "Casa" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p243.bind(this)}>Casa</button>
        }
        {this.state.p243 === "Casa" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p243.bind(this)}><span style={{color:"red"}}>C</span>asa</button>
        }

        {this.state.p244 === " " &&
                <button id="txtBut" onClick={this.p244.bind(this)}>&nbsp;</button>
        }
        {this.state.p244 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p244.bind(this)}>,&nbsp;</button>
        }
        {this.state.p244 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p244.bind(this)}>;&nbsp;</button>
        }
        {this.state.p244 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p244.bind(this)}>:&nbsp;</button>
        }
        {this.state.p244 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p244.bind(this)}>(&nbsp;</button>
        }
        {this.state.p244 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p244.bind(this)}>)&nbsp;</button>
        }
        {this.state.p244 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p244.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p244 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p244.bind(this)}>!&nbsp;</button>
        }
        {this.state.p244 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p244.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p244 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p244.bind(this)}>?&nbsp;</button>
        }
        {this.state.p244 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p244.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p244 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p244.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p244 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p244.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p244 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p244.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p244 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p244.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p244 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p244.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p244 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p244.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p244 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p244.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p244 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p244.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p245 === "sentía" &&
                <button id="txtBut" onClick={this.p245.bind(this)}>sentía</button>
        }
        {this.state.p245 === "Sentía" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p245.bind(this)}>Sentía</button>
        }
        {this.state.p245 === "Sentía" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p245.bind(this)}><span style={{color:"red"}}>S</span>entía</button>
        }

        {this.state.p246 === " " &&
                <button id="txtBut" onClick={this.p246.bind(this)}>&nbsp;</button>
        }
        {this.state.p246 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p246.bind(this)}>,&nbsp;</button>
        }
        {this.state.p246 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p246.bind(this)}>;&nbsp;</button>
        }
        {this.state.p246 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p246.bind(this)}>:&nbsp;</button>
        }
        {this.state.p246 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p246.bind(this)}>(&nbsp;</button>
        }
        {this.state.p246 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p246.bind(this)}>)&nbsp;</button>
        }
        {this.state.p246 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p246.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p246 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p246.bind(this)}>!&nbsp;</button>
        }
        {this.state.p246 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p246.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p246 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p246.bind(this)}>?&nbsp;</button>
        }
        {this.state.p246 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p246.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p246 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p246.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p246 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p246.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p246 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p246.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p246 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p246.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p246 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p246.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p246 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p246.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p246 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p246.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p246 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p246.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p247 === "el" &&
                <button id="txtBut" onClick={this.p247.bind(this)}>el</button>
        }
        {this.state.p247 === "El" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p247.bind(this)}>El</button>
        }
        {this.state.p247 === "El" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p247.bind(this)}><span style={{color:"red"}}>E</span>l</button>
        }

        {this.state.p248 === " " &&
                <button id="txtBut" onClick={this.p248.bind(this)}>&nbsp;</button>
        }
        {this.state.p248 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p248.bind(this)}>,&nbsp;</button>
        }
        {this.state.p248 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p248.bind(this)}>;&nbsp;</button>
        }
        {this.state.p248 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p248.bind(this)}>:&nbsp;</button>
        }
        {this.state.p248 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p248.bind(this)}>(&nbsp;</button>
        }
        {this.state.p248 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p248.bind(this)}>)&nbsp;</button>
        }
        {this.state.p248 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p248.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p248 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p248.bind(this)}>!&nbsp;</button>
        }
        {this.state.p248 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p248.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p248 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p248.bind(this)}>?&nbsp;</button>
        }
        {this.state.p248 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p248.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p248 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p248.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p248 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p248.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p248 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p248.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p248 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p248.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p248 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p248.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p248 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p248.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p248 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p248.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p248 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p248.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p249 === "peso" &&
                <button id="txtBut" onClick={this.p249.bind(this)}>peso</button>
        }
        {this.state.p249 === "Peso" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p249.bind(this)}>Peso</button>
        }
        {this.state.p249 === "Peso" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p249.bind(this)}><span style={{color:"red"}}>P</span>eso</button>
        }

        {this.state.p250 === " " &&
                <button id="txtBut" onClick={this.p250.bind(this)}>&nbsp;</button>
        }
        {this.state.p250 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p250.bind(this)}>,&nbsp;</button>
        }
        {this.state.p250 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p250.bind(this)}>;&nbsp;</button>
        }
        {this.state.p250 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p250.bind(this)}>:&nbsp;</button>
        }
        {this.state.p250 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p250.bind(this)}>(&nbsp;</button>
        }
        {this.state.p250 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p250.bind(this)}>)&nbsp;</button>
        }
        {this.state.p250 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p250.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p250 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p250.bind(this)}>!&nbsp;</button>
        }
        {this.state.p250 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p250.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p250 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p250.bind(this)}>?&nbsp;</button>
        }
        {this.state.p250 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p250.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p250 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p250.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p250 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p250.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p250 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p250.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p250 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p250.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p250 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p250.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p250 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p250.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p250 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p250.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p250 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p250.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p251 === "leve" &&
                <button id="txtBut" onClick={this.p251.bind(this)}>leve</button>
        }
        {this.state.p251 === "Leve" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p251.bind(this)}>Leve</button>
        }
        {this.state.p251 === "Leve" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p251.bind(this)}><span style={{color:"red"}}>L</span>eve</button>
        }

        {this.state.p252 === " " &&
                <button id="txtBut" onClick={this.p252.bind(this)}>&nbsp;</button>
        }
        {this.state.p252 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p252.bind(this)}>,&nbsp;</button>
        }
        {this.state.p252 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p252.bind(this)}>;&nbsp;</button>
        }
        {this.state.p252 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p252.bind(this)}>:&nbsp;</button>
        }
        {this.state.p252 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p252.bind(this)}>(&nbsp;</button>
        }
        {this.state.p252 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p252.bind(this)}>)&nbsp;</button>
        }
        {this.state.p252 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p252.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p252 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p252.bind(this)}>!&nbsp;</button>
        }
        {this.state.p252 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p252.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p252 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p252.bind(this)}>?&nbsp;</button>
        }
        {this.state.p252 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p252.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p252 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p252.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p252 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p252.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p252 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p252.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p252 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p252.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p252 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p252.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p252 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p252.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p252 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p252.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p252 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p252.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p253 === "y" &&
                <button id="txtBut" onClick={this.p253.bind(this)}>y</button>
        }
        {this.state.p253 === "Y" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p253.bind(this)}>Y</button>
        }
        {this.state.p253 === "Y" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p253.bind(this)}><span style={{color:"red"}}>Y</span></button>
        }

        {this.state.p254 === " " &&
                <button id="txtBut" onClick={this.p254.bind(this)}>&nbsp;</button>
        }
        {this.state.p254 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p254.bind(this)}>,&nbsp;</button>
        }
        {this.state.p254 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p254.bind(this)}>;&nbsp;</button>
        }
        {this.state.p254 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p254.bind(this)}>:&nbsp;</button>
        }
        {this.state.p254 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p254.bind(this)}>(&nbsp;</button>
        }
        {this.state.p254 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p254.bind(this)}>)&nbsp;</button>
        }
        {this.state.p254 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p254.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p254 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p254.bind(this)}>!&nbsp;</button>
        }
        {this.state.p254 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p254.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p254 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p254.bind(this)}>?&nbsp;</button>
        }
        {this.state.p254 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p254.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p254 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p254.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p254 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p254.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p254 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p254.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p254 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p254.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p254 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p254.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p254 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p254.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p254 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p254.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p254 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p254.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p255 === "denso" &&
                <button id="txtBut" onClick={this.p255.bind(this)}>denso</button>
        }
        {this.state.p255 === "Denso" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p255.bind(this)}>Denso</button>
        }
        {this.state.p255 === "Denso" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p255.bind(this)}><span style={{color:"red"}}>D</span>enso</button>
        }

        {this.state.p256 === " " &&
                <button id="txtBut" onClick={this.p256.bind(this)}>&nbsp;</button>
        }
        {this.state.p256 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p256.bind(this)}>,&nbsp;</button>
        }
        {this.state.p256 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p256.bind(this)}>;&nbsp;</button>
        }
        {this.state.p256 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p256.bind(this)}>:&nbsp;</button>
        }
        {this.state.p256 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p256.bind(this)}>(&nbsp;</button>
        }
        {this.state.p256 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p256.bind(this)}>)&nbsp;</button>
        }
        {this.state.p256 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p256.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p256 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p256.bind(this)}>!&nbsp;</button>
        }
        {this.state.p256 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p256.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p256 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p256.bind(this)}>?&nbsp;</button>
        }
        {this.state.p256 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p256.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p256 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p256.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p256 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p256.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p256 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p256.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p256 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p256.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p256 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p256.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p256 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p256.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p256 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p256.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p256 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p256.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p257 === "de" &&
                <button id="txtBut" onClick={this.p257.bind(this)}>de</button>
        }
        {this.state.p257 === "De" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p257.bind(this)}>De</button>
        }
        {this.state.p257 === "De" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p257.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p258 === " " &&
                <button id="txtBut" onClick={this.p258.bind(this)}>&nbsp;</button>
        }
        {this.state.p258 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p258.bind(this)}>,&nbsp;</button>
        }
        {this.state.p258 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p258.bind(this)}>;&nbsp;</button>
        }
        {this.state.p258 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p258.bind(this)}>:&nbsp;</button>
        }
        {this.state.p258 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p258.bind(this)}>(&nbsp;</button>
        }
        {this.state.p258 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p258.bind(this)}>)&nbsp;</button>
        }
        {this.state.p258 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p258.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p258 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p258.bind(this)}>!&nbsp;</button>
        }
        {this.state.p258 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p258.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p258 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p258.bind(this)}>?&nbsp;</button>
        }
        {this.state.p258 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p258.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p258 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p258.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p258 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p258.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p258 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p258.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p258 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p258.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p258 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p258.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p258 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p258.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p258 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p258.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p258 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p258.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p259 === "la" &&
                <button id="txtBut" onClick={this.p259.bind(this)}>la</button>
        }
        {this.state.p259 === "La" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p259.bind(this)}>La</button>
        }
        {this.state.p259 === "La" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p259.bind(this)}><span style={{color:"red"}}>L</span>a</button>
        }

        {this.state.p260 === " " &&
                <button id="txtBut" onClick={this.p260.bind(this)}>&nbsp;</button>
        }
        {this.state.p260 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p260.bind(this)}>,&nbsp;</button>
        }
        {this.state.p260 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p260.bind(this)}>;&nbsp;</button>
        }
        {this.state.p260 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p260.bind(this)}>:&nbsp;</button>
        }
        {this.state.p260 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p260.bind(this)}>(&nbsp;</button>
        }
        {this.state.p260 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p260.bind(this)}>)&nbsp;</button>
        }
        {this.state.p260 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p260.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p260 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p260.bind(this)}>!&nbsp;</button>
        }
        {this.state.p260 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p260.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p260 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p260.bind(this)}>?&nbsp;</button>
        }
        {this.state.p260 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p260.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p260 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p260.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p260 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p260.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p260 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p260.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p260 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p260.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p260 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p260.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p260 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p260.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p260 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p260.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p260 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p260.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p261 === "araña" &&
                <button id="txtBut" onClick={this.p261.bind(this)}>araña</button>
        }
        {this.state.p261 === "Araña" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p261.bind(this)}>Araña</button>
        }
        {this.state.p261 === "Araña" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p261.bind(this)}><span style={{color:"red"}}>A</span>raña</button>
        }

        {this.state.p262 === " " &&
                <button id="txtBut" onClick={this.p262.bind(this)}>&nbsp;</button>
        }
        {this.state.p262 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p262.bind(this)}>,&nbsp;</button>
        }
        {this.state.p262 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p262.bind(this)}>;&nbsp;</button>
        }
        {this.state.p262 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p262.bind(this)}>:&nbsp;</button>
        }
        {this.state.p262 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p262.bind(this)}>(&nbsp;</button>
        }
        {this.state.p262 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p262.bind(this)}>)&nbsp;</button>
        }
        {this.state.p262 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p262.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p262 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p262.bind(this)}>!&nbsp;</button>
        }
        {this.state.p262 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p262.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p262 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p262.bind(this)}>?&nbsp;</button>
        }
        {this.state.p262 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p262.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p262 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p262.bind(this)}>,&nbsp;</button>
        }
        {this.state.p262 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p262.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p262 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p262.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p262 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p262.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p262 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p262.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p262 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p262.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p262 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p262.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p262 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p262.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p262 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p262.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p263 === "ese" &&
                <button id="txtBut" onClick={this.p263.bind(this)}>ese</button>
        }
        {this.state.p263 === "Ese" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p263.bind(this)}>Ese</button>
        }
        {this.state.p263 === "Ese" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p263.bind(this)}><span style={{color:"red"}}>E</span>se</button>
        }

        {this.state.p264 === " " &&
                <button id="txtBut" onClick={this.p264.bind(this)}>&nbsp;</button>
        }
        {this.state.p264 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p264.bind(this)}>,&nbsp;</button>
        }
        {this.state.p264 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p264.bind(this)}>;&nbsp;</button>
        }
        {this.state.p264 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p264.bind(this)}>:&nbsp;</button>
        }
        {this.state.p264 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p264.bind(this)}>(&nbsp;</button>
        }
        {this.state.p264 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p264.bind(this)}>)&nbsp;</button>
        }
        {this.state.p264 === "262¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p264.bind(this)}>262¡&nbsp;</button>
        }
        {this.state.p264 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p264.bind(this)}>!&nbsp;</button>
        }
        {this.state.p264 === "262¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p264.bind(this)}>262¿&nbsp;</button>
        }
        {this.state.p264 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p264.bind(this)}>?&nbsp;</button>
        }
        {this.state.p264 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p264.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p264 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p264.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p264 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p264.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p264 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p264.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p264 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p264.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p264 === "262¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p264.bind(this)}><span style={{color:"red"}}>262¡</span>&nbsp;</button>
        }
        {this.state.p264 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p264.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p264 === "262¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p264.bind(this)}><span style={{color:"red"}}>262¿</span>&nbsp;</button>
        }
        {this.state.p264 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p264.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p265 === "peso" &&
                <button id="txtBut" onClick={this.p265.bind(this)}>peso</button>
        }
        {this.state.p265 === "Peso" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p265.bind(this)}>Peso</button>
        }
        {this.state.p265 === "Peso" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p265.bind(this)}><span style={{color:"red"}}>P</span>eso</button>
        }

        {this.state.p266 === " " &&
                <button id="txtBut" onClick={this.p266.bind(this)}>&nbsp;</button>
        }
        {this.state.p266 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p266.bind(this)}>,&nbsp;</button>
        }
        {this.state.p266 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p266.bind(this)}>;&nbsp;</button>
        }
        {this.state.p266 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p266.bind(this)}>:&nbsp;</button>
        }
        {this.state.p266 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p266.bind(this)}>(&nbsp;</button>
        }
        {this.state.p266 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p266.bind(this)}>)&nbsp;</button>
        }
        {this.state.p266 === "262¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p266.bind(this)}>262¡&nbsp;</button>
        }
        {this.state.p266 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p266.bind(this)}>!&nbsp;</button>
        }
        {this.state.p266 === "262¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p266.bind(this)}>262¿&nbsp;</button>
        }
        {this.state.p266 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p266.bind(this)}>?&nbsp;</button>
        }
        {this.state.p266 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p266.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p266 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p266.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p266 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p266.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p266 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p266.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p266 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p266.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p266 === "262¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p266.bind(this)}><span style={{color:"red"}}>262¡</span>&nbsp;</button>
        }
        {this.state.p266 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p266.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p266 === "262¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p266.bind(this)}><span style={{color:"red"}}>262¿</span>&nbsp;</button>
        }
        {this.state.p266 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p266.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p267 === "del" &&
                <button id="txtBut" onClick={this.p267.bind(this)}>del</button>
        }
        {this.state.p267 === "Del" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p267.bind(this)}>Del</button>
        }
        {this.state.p267 === "Del" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p267.bind(this)}><span style={{color:"red"}}>D</span>el</button>
        }

        {this.state.p268 === " " &&
                <button id="txtBut" onClick={this.p268.bind(this)}>&nbsp;</button>
        }
        {this.state.p268 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p268.bind(this)}>,&nbsp;</button>
        }
        {this.state.p268 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p268.bind(this)}>;&nbsp;</button>
        }
        {this.state.p268 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p268.bind(this)}>:&nbsp;</button>
        }
        {this.state.p268 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p268.bind(this)}>(&nbsp;</button>
        }
        {this.state.p268 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p268.bind(this)}>)&nbsp;</button>
        }
        {this.state.p268 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p268.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p268 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p268.bind(this)}>!&nbsp;</button>
        }
        {this.state.p268 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p268.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p268 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p268.bind(this)}>?&nbsp;</button>
        }
        {this.state.p268 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p268.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p268 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p268.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p268 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p268.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p268 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p268.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p268 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p268.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p268 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p268.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p268 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p268.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p268 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p268.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p268 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p268.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p269 === "cual" &&
                <button id="txtBut" onClick={this.p269.bind(this)}>cual</button>
        }
        {this.state.p269 === "Cual" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p269.bind(this)}>Cual</button>
        }
        {this.state.p269 === "Cual" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p269.bind(this)}><span style={{color:"red"}}>C</span>ual</button>
        }

        {this.state.p270 === " " &&
                <button id="txtBut" onClick={this.p270.bind(this)}>&nbsp;</button>
        }
        {this.state.p270 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p270.bind(this)}>,&nbsp;</button>
        }
        {this.state.p270 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p270.bind(this)}>;&nbsp;</button>
        }
        {this.state.p270 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p270.bind(this)}>:&nbsp;</button>
        }
        {this.state.p270 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p270.bind(this)}>(&nbsp;</button>
        }
        {this.state.p270 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p270.bind(this)}>)&nbsp;</button>
        }
        {this.state.p270 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p270.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p270 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p270.bind(this)}>!&nbsp;</button>
        }
        {this.state.p270 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p270.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p270 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p270.bind(this)}>?&nbsp;</button>
        }
        {this.state.p270 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p270.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p270 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p270.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p270 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p270.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p270 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p270.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p270 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p270.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p270 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p270.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p270 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p270.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p270 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p270.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p270 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p270.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p271 === "podía" &&
                <button id="txtBut" onClick={this.p271.bind(this)}>podí­a</button>
        }
        {this.state.p271 === "Podí­a" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p271.bind(this)}>Podí­a</button>
        }
        {this.state.p271 === "Podía" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p271.bind(this)}><span style={{color:"red"}}>P</span>odía</button>
        }

        {this.state.p272 === " " &&
                <button id="txtBut" onClick={this.p272.bind(this)}>&nbsp;</button>
        }
        {this.state.p272 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p272.bind(this)}>,&nbsp;</button>
        }
        {this.state.p272 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p272.bind(this)}>;&nbsp;</button>
        }
        {this.state.p272 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p272.bind(this)}>:&nbsp;</button>
        }
        {this.state.p272 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p272.bind(this)}>(&nbsp;</button>
        }
        {this.state.p272 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p272.bind(this)}>)&nbsp;</button>
        }
        {this.state.p272 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p272.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p272 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p272.bind(this)}>!&nbsp;</button>
        }
        {this.state.p272 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p272.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p272 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p272.bind(this)}>?&nbsp;</button>
        }
        {this.state.p272 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p272.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p272 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p272.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p272 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p272.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p272 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p272.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p272 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p272.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p272 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p272.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p272 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p272.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p272 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p272.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p272 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p272.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p273 === "descontar" &&
                <button id="txtBut" onClick={this.p273.bind(this)}>descontar</button>
        }
        {this.state.p273 === "Descontar" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p273.bind(this)}>Descontar</button>
        }
        {this.state.p273 === "Descontar" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p273.bind(this)}><span style={{color:"red"}}>D</span>escontar</button>
        }

        {this.state.p274 === " " &&
                <button id="txtBut" onClick={this.p274.bind(this)}>&nbsp;</button>
        }
        {this.state.p274 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p274.bind(this)}>,&nbsp;</button>
        }
        {this.state.p274 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p274.bind(this)}>;&nbsp;</button>
        }
        {this.state.p274 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p274.bind(this)}>:&nbsp;</button>
        }
        {this.state.p274 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p274.bind(this)}>(&nbsp;</button>
        }
        {this.state.p274 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p274.bind(this)}>)&nbsp;</button>
        }
        {this.state.p274 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p274.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p274 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p274.bind(this)}>!&nbsp;</button>
        }
        {this.state.p274 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p274.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p274 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p274.bind(this)}>?&nbsp;</button>
        }
        {this.state.p274 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p274.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p274 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p274.bind(this)}>,&nbsp;</button>
        }
        {this.state.p274 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p274.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p274 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p274.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p274 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p274.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p274 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p274.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p274 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p274.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p274 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p274.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p274 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p274.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p274 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p274.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p275 === "con" &&
                <button id="txtBut" onClick={this.p275.bind(this)}>con</button>
        }
        {this.state.p275 === "Con" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p275.bind(this)}>Con</button>
        }
        {this.state.p275 === "Con" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p275.bind(this)}><span style={{color:"red"}}>C</span>on</button>
        }

        {this.state.p276 === " " &&
                <button id="txtBut" onClick={this.p276.bind(this)}>&nbsp;</button>
        }
        {this.state.p276 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p276.bind(this)}>,&nbsp;</button>
        }
        {this.state.p276 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p276.bind(this)}>;&nbsp;</button>
        }
        {this.state.p276 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p276.bind(this)}>:&nbsp;</button>
        }
        {this.state.p276 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p276.bind(this)}>(&nbsp;</button>
        }
        {this.state.p276 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p276.bind(this)}>)&nbsp;</button>
        }
        {this.state.p276 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p276.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p276 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p276.bind(this)}>!&nbsp;</button>
        }
        {this.state.p276 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p276.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p276 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p276.bind(this)}>?&nbsp;</button>
        }
        {this.state.p276 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p276.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p276 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p276.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p276 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p276.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p276 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p276.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p276 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p276.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p276 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p276.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p276 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p276.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p276 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p276.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p276 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p276.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p277 === "seguridad" &&
                <button id="txtBut" onClick={this.p277.bind(this)}>seguridad</button>
        }
        {this.state.p277 === "Seguridad" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p277.bind(this)}>Seguridad</button>
        }
        {this.state.p277 === "Seguridad" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p277.bind(this)}><span style={{color:"red"}}>S</span>eguridad</button>
        }

        {this.state.p278 === " " &&
                <button id="txtBut" onClick={this.p278.bind(this)}>&nbsp;</button>
        }
        {this.state.p278 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p278.bind(this)}>,&nbsp;</button>
        }
        {this.state.p278 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p278.bind(this)}>;&nbsp;</button>
        }
        {this.state.p278 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p278.bind(this)}>:&nbsp;</button>
        }
        {this.state.p278 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p278.bind(this)}>(&nbsp;</button>
        }
        {this.state.p278 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p278.bind(this)}>)&nbsp;</button>
        }
        {this.state.p278 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p278.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p278 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p278.bind(this)}>!&nbsp;</button>
        }
        {this.state.p278 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p278.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p278 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p278.bind(this)}>?&nbsp;</button>
        }
        {this.state.p278 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p278.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p278 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p278.bind(this)}><span style={{color:"green"}}>,</span>&nbsp;</button>
        }
        {this.state.p278 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p278.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p278 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p278.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p278 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p278.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p278 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p278.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p278 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p278.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p278 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p278.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p278 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p278.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p278 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p278.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p279 === "el" &&
                <button id="txtBut" onClick={this.p279.bind(this)}>el</button>
        }
        {this.state.p279 === "El" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p279.bind(this)}>El</button>
        }
        {this.state.p279 === "El" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p279.bind(this)}><span style={{color:"red"}}>E</span>l</button>
        }

        {this.state.p280 === " " &&
                <button id="txtBut" onClick={this.p280.bind(this)}>&nbsp;</button>
        }
        {this.state.p280 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p280.bind(this)}>,&nbsp;</button>
        }
        {this.state.p280 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p280.bind(this)}>;&nbsp;</button>
        }
        {this.state.p280 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p280.bind(this)}>:&nbsp;</button>
        }
        {this.state.p280 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p280.bind(this)}>(&nbsp;</button>
        }
        {this.state.p280 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p280.bind(this)}>)&nbsp;</button>
        }
        {this.state.p280 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p280.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p280 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p280.bind(this)}>!&nbsp;</button>
        }
        {this.state.p280 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p280.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p280 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p280.bind(this)}>?&nbsp;</button>
        }
        {this.state.p280 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p280.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p280 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p280.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p280 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p280.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p280 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p280.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p280 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p280.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p280 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p280.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p280 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p280.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p280 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p280.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p280 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p280.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p281 === "de" &&
                <button id="txtBut" onClick={this.p281.bind(this)}>de</button>
        }
        {this.state.p281 === "De" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p281.bind(this)}>De</button>
        }
        {this.state.p281 === "De" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p281.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p282 === " " &&
                <button id="txtBut" onClick={this.p282.bind(this)}>&nbsp;</button>
        }
        {this.state.p282 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p282.bind(this)}>,&nbsp;</button>
        }
        {this.state.p282 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p282.bind(this)}>;&nbsp;</button>
        }
        {this.state.p282 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p282.bind(this)}>:&nbsp;</button>
        }
        {this.state.p282 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p282.bind(this)}>(&nbsp;</button>
        }
        {this.state.p282 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p282.bind(this)}>)&nbsp;</button>
        }
        {this.state.p282 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p282.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p282 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p282.bind(this)}>!&nbsp;</button>
        }
        {this.state.p282 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p282.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p282 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p282.bind(this)}>?&nbsp;</button>
        }
        {this.state.p282 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p282.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p282 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p282.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p282 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p282.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p282 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p282.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p282 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p282.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p282 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p282.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p282 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p282.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p282 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p282.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p282 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p282.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p283 === "la" &&
                <button id="txtBut" onClick={this.p283.bind(this)}>la</button>
        }
        {this.state.p283 === "La" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p283.bind(this)}>La</button>
        }
        {this.state.p283 === "La" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p283.bind(this)}><span style={{color:"red"}}>L</span>a</button>
        }

        {this.state.p284 === " " &&
                <button id="txtBut" onClick={this.p284.bind(this)}>&nbsp;</button>
        }
        {this.state.p284 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p284.bind(this)}>,&nbsp;</button>
        }
        {this.state.p284 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p284.bind(this)}>;&nbsp;</button>
        }
        {this.state.p284 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p284.bind(this)}>:&nbsp;</button>
        }
        {this.state.p284 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p284.bind(this)}>(&nbsp;</button>
        }
        {this.state.p284 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p284.bind(this)}>)&nbsp;</button>
        }
        {this.state.p284 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p284.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p284 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p284.bind(this)}>!&nbsp;</button>
        }
        {this.state.p284 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p284.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p284 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p284.bind(this)}>?&nbsp;</button>
        }
        {this.state.p284 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p284.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p284 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p284.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p284 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p284.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p284 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p284.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p284 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p284.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p284 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p284.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p284 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p284.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p284 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p284.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p284 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p284.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p285 === "caja" &&
                <button id="txtBut" onClick={this.p285.bind(this)}>caja</button>
        }
        {this.state.p285 === "Caja" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p285.bind(this)}>Caja</button>
        }
        {this.state.p285 === "Caja" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p285.bind(this)}><span style={{color:"red"}}>C</span>aja</button>
        }

        {this.state.p286 === " " &&
                <button id="txtBut" onClick={this.p286.bind(this)}>&nbsp;</button>
        }
        {this.state.p286 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p286.bind(this)}>,&nbsp;</button>
        }
        {this.state.p286 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p286.bind(this)}>;&nbsp;</button>
        }
        {this.state.p286 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p286.bind(this)}>:&nbsp;</button>
        }
        {this.state.p286 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p286.bind(this)}>(&nbsp;</button>
        }
        {this.state.p286 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p286.bind(this)}>)&nbsp;</button>
        }
        {this.state.p286 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p286.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p286 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p286.bind(this)}>!&nbsp;</button>
        }
        {this.state.p286 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p286.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p286 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p286.bind(this)}>?&nbsp;</button>
        }
        {this.state.p286 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p286.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p286 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p286.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p286 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p286.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p286 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p286.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p286 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p286.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p286 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p286.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p286 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p286.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p286 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p286.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p286 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p286.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p287 === "de" &&
                <button id="txtBut" onClick={this.p287.bind(this)}>de</button>
        }
        {this.state.p287 === "De" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p287.bind(this)}>De</button>
        }
        {this.state.p287 === "De" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p287.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p288 === " " &&
                <button id="txtBut" onClick={this.p288.bind(this)}>&nbsp;</button>
        }
        {this.state.p288 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p288.bind(this)}>,&nbsp;</button>
        }
        {this.state.p288 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p288.bind(this)}>;&nbsp;</button>
        }
        {this.state.p288 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p288.bind(this)}>:&nbsp;</button>
        }
        {this.state.p288 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p288.bind(this)}>(&nbsp;</button>
        }
        {this.state.p288 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p288.bind(this)}>)&nbsp;</button>
        }
        {this.state.p288 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p288.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p288 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p288.bind(this)}>!&nbsp;</button>
        }
        {this.state.p288 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p288.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p288 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p288.bind(this)}>?&nbsp;</button>
        }
        {this.state.p288 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p288.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p288 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p288.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p288 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p288.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p288 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p288.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p288 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p288.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p288 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p288.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p288 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p288.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p288 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p288.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p288 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p288.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p289 === "madera" &&
                <button id="txtBut" onClick={this.p289.bind(this)}>madera</button>
        }
        {this.state.p289 === "Madera" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p289.bind(this)}>Madera</button>
        }
        {this.state.p289 === "Madera" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p289.bind(this)}><span style={{color:"red"}}>M</span>adera</button>
        }

        {this.state.p290 === " " &&
                <button id="txtBut" onClick={this.p290.bind(this)}>&nbsp;</button>
        }
        {this.state.p290 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p290.bind(this)}>,&nbsp;</button>
        }
        {this.state.p290 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p290.bind(this)}>;&nbsp;</button>
        }
        {this.state.p290 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p290.bind(this)}>:&nbsp;</button>
        }
        {this.state.p290 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p290.bind(this)}>(&nbsp;</button>
        }
        {this.state.p290 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p290.bind(this)}>)&nbsp;</button>
        }
        {this.state.p290 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p290.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p290 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p290.bind(this)}>!&nbsp;</button>
        }
        {this.state.p290 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p290.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p290 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p290.bind(this)}>?&nbsp;</button>
        }
        {this.state.p290 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p290.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p290 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p290.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p290 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p290.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p290 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p290.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p290 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p290.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p290 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p290.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p290 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p290.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p290 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p290.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p290 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p290.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p291 === "en" &&
                <button id="txtBut" onClick={this.p291.bind(this)}>en</button>
        }
        {this.state.p291 === "En" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p291.bind(this)}>En</button>
        }
        {this.state.p291 === "En" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p291.bind(this)}><span style={{color:"red"}}>E</span>n</button>
        }

        {this.state.p292 === " " &&
                <button id="txtBut" onClick={this.p292.bind(this)}>&nbsp;</button>
        }
        {this.state.p292 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p292.bind(this)}>,&nbsp;</button>
        }
        {this.state.p292 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p292.bind(this)}>;&nbsp;</button>
        }
        {this.state.p292 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p292.bind(this)}>:&nbsp;</button>
        }
        {this.state.p292 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p292.bind(this)}>(&nbsp;</button>
        }
        {this.state.p292 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p292.bind(this)}>)&nbsp;</button>
        }
        {this.state.p292 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p292.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p292 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p292.bind(this)}>!&nbsp;</button>
        }
        {this.state.p292 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p292.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p292 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p292.bind(this)}>?&nbsp;</button>
        }
        {this.state.p292 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p292.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p292 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p292.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p292 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p292.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p292 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p292.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p292 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p292.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p292 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p292.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p292 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p292.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p292 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p292.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p292 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p292.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p293 === "que" &&
                <button id="txtBut" onClick={this.p293.bind(this)}>que</button>
        }
        {this.state.p293 === "Que" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p293.bind(this)}>Que</button>
        }
        {this.state.p293 === "Que" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p293.bind(this)}><span style={{color:"red"}}>Q</span>ue</button>
        }

        {this.state.p294 === " " &&
                <button id="txtBut" onClick={this.p294.bind(this)}>&nbsp;</button>
        }
        {this.state.p294 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p294.bind(this)}>,&nbsp;</button>
        }
        {this.state.p294 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p294.bind(this)}>;&nbsp;</button>
        }
        {this.state.p294 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p294.bind(this)}>:&nbsp;</button>
        }
        {this.state.p294 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p294.bind(this)}>(&nbsp;</button>
        }
        {this.state.p294 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p294.bind(this)}>)&nbsp;</button>
        }
        {this.state.p294 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p294.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p294 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p294.bind(this)}>!&nbsp;</button>
        }
        {this.state.p294 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p294.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p294 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p294.bind(this)}>?&nbsp;</button>
        }
        {this.state.p294 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p294.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p294 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p294.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p294 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p294.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p294 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p294.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p294 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p294.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p294 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p294.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p294 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p294.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p294 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p294.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p294 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p294.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p295 === "la" &&
                <button id="txtBut" onClick={this.p295.bind(this)}>la</button>
        }
        {this.state.p295 === "La" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p295.bind(this)}>La</button>
        }
        {this.state.p295 === "La" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p295.bind(this)}><span style={{color:"red"}}>L</span>a</button>
        }

        {this.state.p296 === " " &&
                <button id="txtBut" onClick={this.p296.bind(this)}>&nbsp;</button>
        }
        {this.state.p296 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p296.bind(this)}>,&nbsp;</button>
        }
        {this.state.p296 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p296.bind(this)}>;&nbsp;</button>
        }
        {this.state.p296 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p296.bind(this)}>:&nbsp;</button>
        }
        {this.state.p296 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p296.bind(this)}>(&nbsp;</button>
        }
        {this.state.p296 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p296.bind(this)}>)&nbsp;</button>
        }
        {this.state.p296 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p296.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p296 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p296.bind(this)}>!&nbsp;</button>
        }
        {this.state.p296 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p296.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p296 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p296.bind(this)}>?&nbsp;</button>
        }
        {this.state.p296 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p296.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p296 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p296.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p296 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p296.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p296 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p296.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p296 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p296.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p296 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p296.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p296 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p296.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p296 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p296.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p296 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p296.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p297 === "llevaba" &&
                <button id="txtBut" onClick={this.p297.bind(this)}>llevaba</button>
        }
        {this.state.p297 === "Llevaba" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p297.bind(this)}>Llevaba</button>
        }
        {this.state.p297 === "Llevaba" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p297.bind(this)}><span style={{color:"red"}}>L</span>levaba</button>
        }

        {this.state.p298 === " " &&
                <button id="txtBut" onClick={this.p298.bind(this)}>&nbsp;</button>
        }
        {this.state.p298 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p298.bind(this)}>,&nbsp;</button>
        }
        {this.state.p298 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p298.bind(this)}>;&nbsp;</button>
        }
        {this.state.p298 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p298.bind(this)}>:&nbsp;</button>
        }
        {this.state.p298 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p298.bind(this)}>(&nbsp;</button>
        }
        {this.state.p298 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p298.bind(this)}>)&nbsp;</button>
        }
        {this.state.p298 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p298.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p298 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p298.bind(this)}>!&nbsp;</button>
        }
        {this.state.p298 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p298.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p298 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p298.bind(this)}>?&nbsp;</button>
        }
        {this.state.p298 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p298.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p298 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p298.bind(this)}>,&nbsp;</button>
        }
        {this.state.p298 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p298.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p298 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p298.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p298 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p298.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p298 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p298.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p298 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p298.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p298 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p298.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p298 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p298.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p298 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p298.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p299 === "como" &&
                <button id="txtBut" onClick={this.p299.bind(this)}>como</button>
        }
        {this.state.p299 === "Como" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p299.bind(this)}>Como</button>
        }
        {this.state.p299 === "Como" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p299.bind(this)}><span style={{color:"red"}}>C</span>omo</button>
        }

        {this.state.p300 === " " &&
                <button id="txtBut" onClick={this.p300.bind(this)}>&nbsp;</button>
        }
        {this.state.p300 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p300.bind(this)}>,&nbsp;</button>
        }
        {this.state.p300 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p300.bind(this)}>;&nbsp;</button>
        }
        {this.state.p300 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p300.bind(this)}>:&nbsp;</button>
        }
        {this.state.p300 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p300.bind(this)}>(&nbsp;</button>
        }
        {this.state.p300 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p300.bind(this)}>)&nbsp;</button>
        }
        {this.state.p300 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p300.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p300 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p300.bind(this)}>!&nbsp;</button>
        }
        {this.state.p300 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p300.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p300 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p300.bind(this)}>?&nbsp;</button>
        }
        {this.state.p300 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p300.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p300 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p300.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p300 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p300.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p300 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p300.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p300 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p300.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p300 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p300.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p300 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p300.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p300 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p300.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p300 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p300.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p301 === "si" &&
                <button id="txtBut" onClick={this.p301.bind(this)}>si</button>
        }
        {this.state.p301 === "Si" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p301.bind(this)}>Si</button>
        }
        {this.state.p301 === "Si" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p301.bind(this)}><span style={{color:"red"}}>S</span>i</button>
        }

        {this.state.p302 === " " &&
                <button id="txtBut" onClick={this.p302.bind(this)}>&nbsp;</button>
        }
        {this.state.p302 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p302.bind(this)}>,&nbsp;</button>
        }
        {this.state.p302 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p302.bind(this)}>;&nbsp;</button>
        }
        {this.state.p302 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p302.bind(this)}>:&nbsp;</button>
        }
        {this.state.p302 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p302.bind(this)}>(&nbsp;</button>
        }
        {this.state.p302 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p302.bind(this)}>)&nbsp;</button>
        }
        {this.state.p302 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p302.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p302 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p302.bind(this)}>!&nbsp;</button>
        }
        {this.state.p302 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p302.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p302 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p302.bind(this)}>?&nbsp;</button>
        }
        {this.state.p302 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p302.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p302 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p302.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p302 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p302.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p302 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p302.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p302 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p302.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p302 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p302.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p302 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p302.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p302 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p302.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p302 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p302.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p303 === "fueran" &&
                <button id="txtBut" onClick={this.p303.bind(this)}>fueran</button>
        }
        {this.state.p303 === "Fueran" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p303.bind(this)}>Fueran</button>
        }
        {this.state.p303 === "Fueran" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p303.bind(this)}><span style={{color:"red"}}>F</span>ueran</button>
        }

        {this.state.p304 === " " &&
                <button id="txtBut" onClick={this.p304.bind(this)}>&nbsp;</button>
        }
        {this.state.p304 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p304.bind(this)}>,&nbsp;</button>
        }
        {this.state.p304 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p304.bind(this)}>;&nbsp;</button>
        }
        {this.state.p304 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p304.bind(this)}>:&nbsp;</button>
        }
        {this.state.p304 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p304.bind(this)}>(&nbsp;</button>
        }
        {this.state.p304 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p304.bind(this)}>)&nbsp;</button>
        }
        {this.state.p304 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p304.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p304 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p304.bind(this)}>!&nbsp;</button>
        }
        {this.state.p304 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p304.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p304 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p304.bind(this)}>?&nbsp;</button>
        }
        {this.state.p304 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p304.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p304 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p304.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p304 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p304.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p304 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p304.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p304 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p304.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p304 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p304.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p304 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p304.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p304 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p304.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p304 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p304.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p305 === "dos" &&
                <button id="txtBut" onClick={this.p305.bind(this)}>dos</button>
        }
        {this.state.p305 === "Dos" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p305.bind(this)}>Dos</button>
        }
        {this.state.p305 === "Dos" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p305.bind(this)}><span style={{color:"red"}}>D</span>os</button>
        }

        {this.state.p306 === " " &&
                <button id="txtBut" onClick={this.p306.bind(this)}>&nbsp;</button>
        }
        {this.state.p306 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p306.bind(this)}>,&nbsp;</button>
        }
        {this.state.p306 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p306.bind(this)}>;&nbsp;</button>
        }
        {this.state.p306 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p306.bind(this)}>:&nbsp;</button>
        }
        {this.state.p306 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p306.bind(this)}>(&nbsp;</button>
        }
        {this.state.p306 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p306.bind(this)}>)&nbsp;</button>
        }
        {this.state.p306 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p306.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p306 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p306.bind(this)}>!&nbsp;</button>
        }
        {this.state.p306 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p306.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p306 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p306.bind(this)}>?&nbsp;</button>
        }
        {this.state.p306 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p306.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p306 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p306.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p306 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p306.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p306 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p306.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p306 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p306.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p306 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p306.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p306 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p306.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p306 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p306.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p306 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p306.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p307 === "pesos" &&
                <button id="txtBut" onClick={this.p307.bind(this)}>pesos</button>
        }
        {this.state.p307 === "Pesos" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p307.bind(this)}>Pesos</button>
        }
        {this.state.p307 === "Pesos" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p307.bind(this)}><span style={{color:"red"}}>P</span>esos</button>
        }

        {this.state.p308 === " " &&
                <button id="txtBut" onClick={this.p308.bind(this)}>&nbsp;</button>
        }
        {this.state.p308 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p308.bind(this)}>,&nbsp;</button>
        }
        {this.state.p308 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p308.bind(this)}>;&nbsp;</button>
        }
        {this.state.p308 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p308.bind(this)}>:&nbsp;</button>
        }
        {this.state.p308 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p308.bind(this)}>(&nbsp;</button>
        }
        {this.state.p308 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p308.bind(this)}>)&nbsp;</button>
        }
        {this.state.p308 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p308.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p308 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p308.bind(this)}>!&nbsp;</button>
        }
        {this.state.p308 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p308.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p308 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p308.bind(this)}>?&nbsp;</button>
        }
        {this.state.p308 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p308.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p308 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p308.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p308 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p308.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p308 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p308.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p308 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p308.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p308 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p308.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p308 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p308.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p308 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p308.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p308 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p308.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p309 === "totalmente" &&
                <button id="txtBut" onClick={this.p309.bind(this)}>totalmente</button>
        }
        {this.state.p309 === "Totalmente" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p309.bind(this)}>Totalmente</button>
        }
        {this.state.p309 === "Totalmente" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p309.bind(this)}><span style={{color:"red"}}>T</span>otalmente</button>
        }

        {this.state.p310 === " " &&
                <button id="txtBut" onClick={this.p310.bind(this)}>&nbsp;</button>
        }
        {this.state.p310 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p310.bind(this)}>,&nbsp;</button>
        }
        {this.state.p310 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p310.bind(this)}>;&nbsp;</button>
        }
        {this.state.p310 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p310.bind(this)}>:&nbsp;</button>
        }
        {this.state.p310 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p310.bind(this)}>(&nbsp;</button>
        }
        {this.state.p310 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p310.bind(this)}>)&nbsp;</button>
        }
        {this.state.p310 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p310.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p310 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p310.bind(this)}>!&nbsp;</button>
        }
        {this.state.p310 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p310.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p310 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p310.bind(this)}>?&nbsp;</button>
        }
        {this.state.p310 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p310.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p310 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p310.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p310 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p310.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p310 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p310.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p310 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p310.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p310 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p310.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p310 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p310.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p310 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p310.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p310 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p310.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p311 === "diferentes" &&
                <button id="txtBut" onClick={this.p311.bind(this)}>diferentes</button>
        }
        {this.state.p311 === "Diferentes" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p311.bind(this)}>Diferentes</button>
        }
        {this.state.p311 === "Diferentes" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p311.bind(this)}><span style={{color:"red"}}>D</span>iferentes</button>
        }

        {this.state.p312 === " " &&
                <button id="txtBut" onClick={this.p312.bind(this)}>&nbsp;</button>
        }
        {this.state.p312 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p312.bind(this)}>,&nbsp;</button>
        }
        {this.state.p312 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p312.bind(this)}>;&nbsp;</button>
        }
        {this.state.p312 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p312.bind(this)}>:&nbsp;</button>
        }
        {this.state.p312 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p312.bind(this)}>(&nbsp;</button>
        }
        {this.state.p312 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p312.bind(this)}>)&nbsp;</button>
        }
        {this.state.p312 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p312.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p312 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p312.bind(this)}>!&nbsp;</button>
        }
        {this.state.p312 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p312.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p312 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p312.bind(this)}>?&nbsp;</button>
        }
        {this.state.p312 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p312.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p312 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p312.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p312 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p312.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p312 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p312.bind(this)}>:&nbsp;</button>
        }
        {this.state.p312 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p312.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p312 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p312.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p312 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p312.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p312 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p312.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p312 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p312.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p312 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p312.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p313 === "el" &&
                <button id="txtBut" onClick={this.p313.bind(this)}>el</button>
        }
        {this.state.p313 === "El" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p313.bind(this)}>El</button>
        }
        {this.state.p313 === "El" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p313.bind(this)}><span style={{color:"red"}}>E</span>l</button>
        }

        {this.state.p314 === " " &&
                <button id="txtBut" onClick={this.p314.bind(this)}>&nbsp;</button>
        }
        {this.state.p314 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p314.bind(this)}>,&nbsp;</button>
        }
        {this.state.p314 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p314.bind(this)}>;&nbsp;</button>
        }
        {this.state.p314 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p314.bind(this)}>:&nbsp;</button>
        }
        {this.state.p314 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p314.bind(this)}>(&nbsp;</button>
        }
        {this.state.p314 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p314.bind(this)}>)&nbsp;</button>
        }
        {this.state.p314 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p314.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p314 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p314.bind(this)}>!&nbsp;</button>
        }
        {this.state.p314 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p314.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p314 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p314.bind(this)}>?&nbsp;</button>
        }
        {this.state.p314 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p314.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p314 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p314.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p314 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p314.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p314 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p314.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p314 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p314.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p314 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p314.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p314 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p314.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p314 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p314.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p314 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p314.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p315 === "de" &&
                <button id="txtBut" onClick={this.p315.bind(this)}>de</button>
        }
        {this.state.p315 === "De" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p315.bind(this)}>De</button>
        }
        {this.state.p315 === "De" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p315.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p316 === " " &&
                <button id="txtBut" onClick={this.p316.bind(this)}>&nbsp;</button>
        }
        {this.state.p316 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p316.bind(this)}>,&nbsp;</button>
        }
        {this.state.p316 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p316.bind(this)}>;&nbsp;</button>
        }
        {this.state.p316 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p316.bind(this)}>:&nbsp;</button>
        }
        {this.state.p316 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p316.bind(this)}>(&nbsp;</button>
        }
        {this.state.p316 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p316.bind(this)}>)&nbsp;</button>
        }
        {this.state.p316 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p316.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p316 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p316.bind(this)}>!&nbsp;</button>
        }
        {this.state.p316 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p316.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p316 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p316.bind(this)}>?&nbsp;</button>
        }
        {this.state.p316 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p316.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p316 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p316.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p316 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p316.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p316 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p316.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p316 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p316.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p316 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p316.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p316 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p316.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p316 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p316.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p316 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p316.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p317 === "la" &&
                <button id="txtBut" onClick={this.p317.bind(this)}>la</button>
        }
        {this.state.p317 === "La" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p317.bind(this)}>La</button>
        }
        {this.state.p317 === "La" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p317.bind(this)}><span style={{color:"red"}}>L</span>a</button>
        }

        {this.state.p318 === " " &&
                <button id="txtBut" onClick={this.p318.bind(this)}>&nbsp;</button>
        }
        {this.state.p318 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p318.bind(this)}>,&nbsp;</button>
        }
        {this.state.p318 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p318.bind(this)}>;&nbsp;</button>
        }
        {this.state.p318 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p318.bind(this)}>:&nbsp;</button>
        }
        {this.state.p318 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p318.bind(this)}>(&nbsp;</button>
        }
        {this.state.p318 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p318.bind(this)}>)&nbsp;</button>
        }
        {this.state.p318 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p318.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p318 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p318.bind(this)}>!&nbsp;</button>
        }
        {this.state.p318 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p318.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p318 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p318.bind(this)}>?&nbsp;</button>
        }
        {this.state.p318 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p318.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p318 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p318.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p318 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p318.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p318 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p318.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p318 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p318.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p318 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p318.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p318 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p318.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p318 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p318.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p318 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p318.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p319 === "madera" &&
                <button id="txtBut" onClick={this.p319.bind(this)}>madera</button>
        }
        {this.state.p319 === "Madera" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p319.bind(this)}>Madera</button>
        }
        {this.state.p319 === "Madera" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p319.bind(this)}><span style={{color:"red"}}>M</span>adera</button>
        }

        {this.state.p320 === " " &&
                <button id="txtBut" onClick={this.p320.bind(this)}>&nbsp;</button>
        }
        {this.state.p320 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p320.bind(this)}>,&nbsp;</button>
        }
        {this.state.p320 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p320.bind(this)}>;&nbsp;</button>
        }
        {this.state.p320 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p320.bind(this)}>:&nbsp;</button>
        }
        {this.state.p320 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p320.bind(this)}>(&nbsp;</button>
        }
        {this.state.p320 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p320.bind(this)}>)&nbsp;</button>
        }
        {this.state.p320 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p320.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p320 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p320.bind(this)}>!&nbsp;</button>
        }
        {this.state.p320 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p320.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p320 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p320.bind(this)}>?&nbsp;</button>
        }
        {this.state.p320 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p320.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p320 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p320.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p320 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p320.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p320 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p320.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p320 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p320.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p320 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p320.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p320 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p320.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p320 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p320.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p320 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p320.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p321 === "inocente" &&
                <button id="txtBut" onClick={this.p321.bind(this)}>inocente</button>
        }
        {this.state.p321 === "Inocente" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p321.bind(this)}>Inocente</button>
        }
        {this.state.p321 === "Inocente" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p321.bind(this)}><span style={{color:"red"}}>I</span>nocente</button>
        }

        {this.state.p322 === " " &&
                <button id="txtBut" onClick={this.p322.bind(this)}>&nbsp;</button>
        }
        {this.state.p322 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p322.bind(this)}>,&nbsp;</button>
        }
        {this.state.p322 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p322.bind(this)}>;&nbsp;</button>
        }
        {this.state.p322 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p322.bind(this)}>:&nbsp;</button>
        }
        {this.state.p322 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p322.bind(this)}>(&nbsp;</button>
        }
        {this.state.p322 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p322.bind(this)}>)&nbsp;</button>
        }
        {this.state.p322 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p322.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p322 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p322.bind(this)}>!&nbsp;</button>
        }
        {this.state.p322 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p322.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p322 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p322.bind(this)}>?&nbsp;</button>
        }
        {this.state.p322 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p322.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p322 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p322.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p322 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p322.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p322 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p322.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p322 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p322.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p322 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p322.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p322 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p322.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p322 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p322.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p322 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p322.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p323 === "y" &&
                <button id="txtBut" onClick={this.p323.bind(this)}>y</button>
        }
        {this.state.p323 === "Y" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p323.bind(this)}>Y</button>
        }
        {this.state.p323 === "Y" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p323.bind(this)}><span style={{color:"red"}}>Y</span></button>
        }

        {this.state.p324 === " " &&
                <button id="txtBut" onClick={this.p324.bind(this)}>&nbsp;</button>
        }
        {this.state.p324 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p324.bind(this)}>,&nbsp;</button>
        }
        {this.state.p324 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p324.bind(this)}>;&nbsp;</button>
        }
        {this.state.p324 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p324.bind(this)}>:&nbsp;</button>
        }
        {this.state.p324 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p324.bind(this)}>(&nbsp;</button>
        }
        {this.state.p324 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p324.bind(this)}>)&nbsp;</button>
        }
        {this.state.p324 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p324.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p324 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p324.bind(this)}>!&nbsp;</button>
        }
        {this.state.p324 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p324.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p324 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p324.bind(this)}>?&nbsp;</button>
        }
        {this.state.p324 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p324.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p324 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p324.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p324 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p324.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p324 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p324.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p324 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p324.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p324 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p324.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p324 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p324.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p324 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p324.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p324 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p324.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p325 === "el" &&
                <button id="txtBut" onClick={this.p325.bind(this)}>el</button>
        }
        {this.state.p325 === "El" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p325.bind(this)}>El</button>
        }
        {this.state.p325 === "El" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p325.bind(this)}><span style={{color:"red"}}>E</span>l</button>
        }

        {this.state.p326 === " " &&
                <button id="txtBut" onClick={this.p326.bind(this)}>&nbsp;</button>
        }
        {this.state.p326 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p326.bind(this)}>,&nbsp;</button>
        }
        {this.state.p326 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p326.bind(this)}>;&nbsp;</button>
        }
        {this.state.p326 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p326.bind(this)}>:&nbsp;</button>
        }
        {this.state.p326 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p326.bind(this)}>(&nbsp;</button>
        }
        {this.state.p326 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p326.bind(this)}>)&nbsp;</button>
        }
        {this.state.p326 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p326.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p326 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p326.bind(this)}>!&nbsp;</button>
        }
        {this.state.p326 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p326.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p326 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p326.bind(this)}>?&nbsp;</button>
        }
        {this.state.p326 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p326.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p326 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p326.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p326 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p326.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p326 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p326.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p326 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p326.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p326 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p326.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p326 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p326.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p326 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p326.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p326 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p326.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p327 === "del" &&
                <button id="txtBut" onClick={this.p327.bind(this)}>del</button>
        }
        {this.state.p327 === "Del" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p327.bind(this)}>Del</button>
        }
        {this.state.p327 === "Del" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p327.bind(this)}><span style={{color:"red"}}>D</span>el</button>
        }

        {this.state.p328 === " " &&
                <button id="txtBut" onClick={this.p328.bind(this)}>&nbsp;</button>
        }
        {this.state.p328 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p328.bind(this)}>,&nbsp;</button>
        }
        {this.state.p328 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p328.bind(this)}>;&nbsp;</button>
        }
        {this.state.p328 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p328.bind(this)}>:&nbsp;</button>
        }
        {this.state.p328 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p328.bind(this)}>(&nbsp;</button>
        }
        {this.state.p328 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p328.bind(this)}>)&nbsp;</button>
        }
        {this.state.p328 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p328.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p328 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p328.bind(this)}>!&nbsp;</button>
        }
        {this.state.p328 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p328.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p328 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p328.bind(this)}>?&nbsp;</button>
        }
        {this.state.p328 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p328.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p328 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p328.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p328 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p328.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p328 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p328.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p328 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p328.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p328 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p328.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p328 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p328.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p328 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p328.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p328 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p328.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p329 === "impuro" &&
                <button id="txtBut" onClick={this.p329.bind(this)}>impuro</button>
        }
        {this.state.p329 === "Impuro" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p329.bind(this)}>Impuro</button>
        }
        {this.state.p329 === "Impuro" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p329.bind(this)}><span style={{color:"red"}}>I</span>mpuro</button>
        }

        {this.state.p330 === " " &&
                <button id="txtBut" onClick={this.p330.bind(this)}>&nbsp;</button>
        }
        {this.state.p330 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p330.bind(this)}>,&nbsp;</button>
        }
        {this.state.p330 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p330.bind(this)}>;&nbsp;</button>
        }
        {this.state.p330 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p330.bind(this)}>:&nbsp;</button>
        }
        {this.state.p330 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p330.bind(this)}>(&nbsp;</button>
        }
        {this.state.p330 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p330.bind(this)}>)&nbsp;</button>
        }
        {this.state.p330 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p330.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p330 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p330.bind(this)}>!&nbsp;</button>
        }
        {this.state.p330 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p330.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p330 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p330.bind(this)}>?&nbsp;</button>
        }
        {this.state.p330 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p330.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p330 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p330.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p330 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p330.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p330 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p330.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p330 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p330.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p330 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p330.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p330 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p330.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p330 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p330.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p330 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p330.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p331 === "y" &&
                <button id="txtBut" onClick={this.p331.bind(this)}>y</button>
        }
        {this.state.p331 === "Y" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p331.bind(this)}>Y</button>
        }
        {this.state.p331 === "Y" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p331.bind(this)}><span style={{color:"red"}}>Y</span></button>
        }

        {this.state.p332 === " " &&
                <button id="txtBut" onClick={this.p332.bind(this)}>&nbsp;</button>
        }
        {this.state.p332 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p332.bind(this)}>,&nbsp;</button>
        }
        {this.state.p332 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p332.bind(this)}>;&nbsp;</button>
        }
        {this.state.p332 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p332.bind(this)}>:&nbsp;</button>
        }
        {this.state.p332 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p332.bind(this)}>(&nbsp;</button>
        }
        {this.state.p332 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p332.bind(this)}>)&nbsp;</button>
        }
        {this.state.p332 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p332.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p332 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p332.bind(this)}>!&nbsp;</button>
        }
        {this.state.p332 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p332.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p332 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p332.bind(this)}>?&nbsp;</button>
        }
        {this.state.p332 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p332.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p332 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p332.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p332 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p332.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p332 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p332.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p332 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p332.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p332 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p332.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p332 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p332.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p332 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p332.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p332 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p332.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p333 === "ponzoñoso" &&
                <button id="txtBut" onClick={this.p333.bind(this)}>ponzoñoso</button>
        }
        {this.state.p333 === "Ponzoñoso" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p333.bind(this)}>Ponzoñoso</button>
        }
        {this.state.p333 === "Ponzoñoso" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p333.bind(this)}><span style={{color:"red"}}>P</span>onzoñoso</button>
        }

        {this.state.p334 === " " &&
                <button id="txtBut" onClick={this.p334.bind(this)}>&nbsp;</button>
        }
        {this.state.p334 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p334.bind(this)}>,&nbsp;</button>
        }
        {this.state.p334 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p334.bind(this)}>;&nbsp;</button>
        }
        {this.state.p334 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p334.bind(this)}>:&nbsp;</button>
        }
        {this.state.p334 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p334.bind(this)}>(&nbsp;</button>
        }
        {this.state.p334 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p334.bind(this)}>)&nbsp;</button>
        }
        {this.state.p334 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p334.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p334 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p334.bind(this)}>!&nbsp;</button>
        }
        {this.state.p334 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p334.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p334 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p334.bind(this)}>?&nbsp;</button>
        }
        {this.state.p334 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p334.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p334 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p334.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p334 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p334.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p334 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p334.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p334 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p334.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p334 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p334.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p334 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p334.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p334 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p334.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p334 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p334.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p335 === "animal" &&
                <button id="txtBut" onClick={this.p335.bind(this)}>animal</button>
        }
        {this.state.p335 === "Animal" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p335.bind(this)}>Animal</button>
        }
        {this.state.p335 === "Animal" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p335.bind(this)}><span style={{color:"red"}}>A</span>nimal</button>
        }

        {this.state.p336 === " " &&
                <button id="txtBut" onClick={this.p336.bind(this)}>&nbsp;</button>
        }
        {this.state.p336 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p336.bind(this)}>,&nbsp;</button>
        }
        {this.state.p336 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p336.bind(this)}>;&nbsp;</button>
        }
        {this.state.p336 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p336.bind(this)}>:&nbsp;</button>
        }
        {this.state.p336 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p336.bind(this)}>(&nbsp;</button>
        }
        {this.state.p336 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p336.bind(this)}>)&nbsp;</button>
        }
        {this.state.p336 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p336.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p336 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p336.bind(this)}>!&nbsp;</button>
        }
        {this.state.p336 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p336.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p336 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p336.bind(this)}>?&nbsp;</button>
        }
        {this.state.p336 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p336.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p336 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p336.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p336 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p336.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p336 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p336.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p336 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p336.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p336 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p336.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p336 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p336.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p336 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p336.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p336 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p336.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p337 === "que" &&
                <button id="txtBut" onClick={this.p337.bind(this)}>que</button>
        }
        {this.state.p337 === "Que" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p337.bind(this)}>Que</button>
        }
        {this.state.p337 === "Que" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p337.bind(this)}><span style={{color:"red"}}>Q</span>ue</button>
        }

        {this.state.p338 === " " &&
                <button id="txtBut" onClick={this.p338.bind(this)}>&nbsp;</button>
        }
        {this.state.p338 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p338.bind(this)}>,&nbsp;</button>
        }
        {this.state.p338 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p338.bind(this)}>;&nbsp;</button>
        }
        {this.state.p338 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p338.bind(this)}>:&nbsp;</button>
        }
        {this.state.p338 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p338.bind(this)}>(&nbsp;</button>
        }
        {this.state.p338 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p338.bind(this)}>)&nbsp;</button>
        }
        {this.state.p338 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p338.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p338 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p338.bind(this)}>!&nbsp;</button>
        }
        {this.state.p338 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p338.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p338 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p338.bind(this)}>?&nbsp;</button>
        }
        {this.state.p338 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p338.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p338 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p338.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p338 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p338.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p338 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p338.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p338 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p338.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p338 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p338.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p338 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p338.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p338 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p338.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p338 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p338.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p339 === "tiraba" &&
                <button id="txtBut" onClick={this.p339.bind(this)}>tiraba</button>
        }
        {this.state.p339 === "Tiraba" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p339.bind(this)}>Tiraba</button>
        }
        {this.state.p339 === "Tiraba" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p339.bind(this)}><span style={{color:"red"}}>T</span>iraba</button>
        }

        {this.state.p340 === " " &&
                <button id="txtBut" onClick={this.p340.bind(this)}>&nbsp;</button>
        }
        {this.state.p340 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p340.bind(this)}>,&nbsp;</button>
        }
        {this.state.p340 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p340.bind(this)}>;&nbsp;</button>
        }
        {this.state.p340 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p340.bind(this)}>:&nbsp;</button>
        }
        {this.state.p340 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p340.bind(this)}>(&nbsp;</button>
        }
        {this.state.p340 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p340.bind(this)}>)&nbsp;</button>
        }
        {this.state.p340 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p340.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p340 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p340.bind(this)}>!&nbsp;</button>
        }
        {this.state.p340 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p340.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p340 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p340.bind(this)}>?&nbsp;</button>
        }
        {this.state.p340 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p340.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p340 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p340.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p340 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p340.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p340 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p340.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p340 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p340.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p340 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p340.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p340 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p340.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p340 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p340.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p340 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p340.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p341 === "de" &&
                <button id="txtBut" onClick={this.p341.bind(this)}>de</button>
        }
        {this.state.p341 === "De" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p341.bind(this)}>De</button>
        }
        {this.state.p341 === "De" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p341.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p342 === " " &&
                <button id="txtBut" onClick={this.p342.bind(this)}>&nbsp;</button>
        }
        {this.state.p342 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p342.bind(this)}>,&nbsp;</button>
        }
        {this.state.p342 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p342.bind(this)}>;&nbsp;</button>
        }
        {this.state.p342 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p342.bind(this)}>:&nbsp;</button>
        }
        {this.state.p342 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p342.bind(this)}>(&nbsp;</button>
        }
        {this.state.p342 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p342.bind(this)}>)&nbsp;</button>
        }
        {this.state.p342 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p342.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p342 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p342.bind(this)}>!&nbsp;</button>
        }
        {this.state.p342 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p342.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p342 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p342.bind(this)}>?&nbsp;</button>
        }
        {this.state.p342 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p342.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p342 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p342.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p342 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p342.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p342 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p342.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p342 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p342.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p342 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p342.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p342 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p342.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p342 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p342.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p342 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p342.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p343 === "mí" &&
                <button id="txtBut" onClick={this.p343.bind(this)}>mí</button>
        }
        {this.state.p343 === "Mí" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p343.bind(this)}>Mí</button>
        }
        {this.state.p343 === "Mí" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p343.bind(this)}><span style={{color:"red"}}>M</span>í</button>
        }

        {this.state.p344 === " " &&
                <button id="txtBut" onClick={this.p344.bind(this)}>&nbsp;</button>
        }
        {this.state.p344 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p344.bind(this)}>,&nbsp;</button>
        }
        {this.state.p344 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p344.bind(this)}>;&nbsp;</button>
        }
        {this.state.p344 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p344.bind(this)}>:&nbsp;</button>
        }
        {this.state.p344 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p344.bind(this)}>(&nbsp;</button>
        }
        {this.state.p344 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p344.bind(this)}>)&nbsp;</button>
        }
        {this.state.p344 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p344.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p344 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p344.bind(this)}>!&nbsp;</button>
        }
        {this.state.p344 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p344.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p344 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p344.bind(this)}>?&nbsp;</button>
        }
        {this.state.p344 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p344.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p344 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p344.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p344 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p344.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p344 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p344.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p344 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p344.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p344 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p344.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p344 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p344.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p344 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p344.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p344 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p344.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p345 === "como" &&
                <button id="txtBut" onClick={this.p345.bind(this)}>como</button>
        }
        {this.state.p345 === "Como" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p345.bind(this)}>Como</button>
        }
        {this.state.p345 === "Como" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p345.bind(this)}><span style={{color:"red"}}>C</span>omo</button>
        }

        {this.state.p346 === " " &&
                <button id="txtBut" onClick={this.p346.bind(this)}>&nbsp;</button>
        }
        {this.state.p346 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p346.bind(this)}>,&nbsp;</button>
        }
        {this.state.p346 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p346.bind(this)}>;&nbsp;</button>
        }
        {this.state.p346 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p346.bind(this)}>:&nbsp;</button>
        }
        {this.state.p346 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p346.bind(this)}>(&nbsp;</button>
        }
        {this.state.p346 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p346.bind(this)}>)&nbsp;</button>
        }
        {this.state.p346 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p346.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p346 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p346.bind(this)}>!&nbsp;</button>
        }
        {this.state.p346 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p346.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p346 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p346.bind(this)}>?&nbsp;</button>
        }
        {this.state.p346 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p346.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p346 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p346.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p346 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p346.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p346 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p346.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p346 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p346.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p346 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p346.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p346 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p346.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p346 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p346.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p346 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p346.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p347 === "un" &&
                <button id="txtBut" onClick={this.p347.bind(this)}>un</button>
        }
        {this.state.p347 === "Un" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p347.bind(this)}>Un</button>
        }
        {this.state.p347 === "Un" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p347.bind(this)}><span style={{color:"red"}}>U</span>n</button>
        }

        {this.state.p348 === " " &&
                <button id="txtBut" onClick={this.p348.bind(this)}>&nbsp;</button>
        }
        {this.state.p348 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p348.bind(this)}>,&nbsp;</button>
        }
        {this.state.p348 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p348.bind(this)}>;&nbsp;</button>
        }
        {this.state.p348 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p348.bind(this)}>:&nbsp;</button>
        }
        {this.state.p348 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p348.bind(this)}>(&nbsp;</button>
        }
        {this.state.p348 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p348.bind(this)}>)&nbsp;</button>
        }
        {this.state.p348 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p348.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p348 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p348.bind(this)}>!&nbsp;</button>
        }
        {this.state.p348 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p348.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p348 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p348.bind(this)}>?&nbsp;</button>
        }
        {this.state.p348 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p348.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p348 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p348.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p348 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p348.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p348 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p348.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p348 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p348.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p348 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p348.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p348 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p348.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p348 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p348.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p348 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p348.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p349 === "lastre" &&
                <button id="txtBut" onClick={this.p349.bind(this)}>lastre</button>
        }
        {this.state.p349 === "Lastre" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p349.bind(this)}>Lastre</button>
        }
        {this.state.p349 === "Lastre" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p349.bind(this)}><span style={{color:"red"}}>L</span>astre</button>
        }

        {this.state.p350 === " " &&
                <button id="txtBut" onClick={this.p350.bind(this)}>&nbsp;</button>
        }
        {this.state.p350 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p350.bind(this)}>,&nbsp;</button>
        }
        {this.state.p350 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p350.bind(this)}>;&nbsp;</button>
        }
        {this.state.p350 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p350.bind(this)}>:&nbsp;</button>
        }
        {this.state.p350 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p350.bind(this)}>(&nbsp;</button>
        }
        {this.state.p350 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p350.bind(this)}>)&nbsp;</button>
        }
        {this.state.p350 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p350.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p350 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p350.bind(this)}>!&nbsp;</button>
        }
        {this.state.p350 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p350.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p350 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p350.bind(this)}>?&nbsp;</button>
        }
        {this.state.p350 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p350.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p350 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p350.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p350 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p350.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p350 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p350.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p350 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p350.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p350 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p350.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p350 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p350.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p350 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p350.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p350 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p350.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p351 === "definitivo" &&
                <button id="txtBut" onClick={this.p351.bind(this)}>definitivo</button>
        }
        {this.state.p351 === "Definitivo" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p351.bind(this)}>Definitivo</button>
        }
        {this.state.p351 === "Definitivo" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p351.bind(this)}><span style={{color:"red"}}>D</span>efinitivo</button>
        }

        {this.state.p352 === " " &&
                <button id="txtBut" onClick={this.p352.bind(this)}>&nbsp;</button>
        }
        {this.state.p352 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p352.bind(this)}>,&nbsp;</button>
        }
        {this.state.p352 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p352.bind(this)}>;&nbsp;</button>
        }
        {this.state.p352 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p352.bind(this)}>:&nbsp;</button>
        }
        {this.state.p352 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p352.bind(this)}>(&nbsp;</button>
        }
        {this.state.p352 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p352.bind(this)}>)&nbsp;</button>
        }
        {this.state.p352 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p352.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p352 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p352.bind(this)}>!&nbsp;</button>
        }
        {this.state.p352 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p352.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p352 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p352.bind(this)}>?&nbsp;</button>
        }
        {this.state.p352 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p352.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p352 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p352.bind(this)}>,&nbsp;</button>
        }
        {this.state.p352 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p352.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p352 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p352.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p352 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p352.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p352 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p352.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p352 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p352.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p352 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p352.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p352 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p352.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p352 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p352.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p353 === "dentro" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p353.bind(this)}>dentro</button>
        }
        {this.state.p353 === "Dentro" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p353.bind(this)}>Dentro</button>
        }
        {this.state.p353 === "dentro" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p353.bind(this)}><span style={{color:"red"}}>d</span>entro</button>
        }
        {this.state.p353 === "Dentro" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p353.bind(this)}>Dentro</button>
        }

        {this.state.p354 === " " &&
                <button id="txtBut" onClick={this.p354.bind(this)}>&nbsp;</button>
        }
        {this.state.p354 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p354.bind(this)}>,&nbsp;</button>
        }
        {this.state.p354 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p354.bind(this)}>;&nbsp;</button>
        }
        {this.state.p354 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p354.bind(this)}>:&nbsp;</button>
        }
        {this.state.p354 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p354.bind(this)}>(&nbsp;</button>
        }
        {this.state.p354 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p354.bind(this)}>)&nbsp;</button>
        }
        {this.state.p354 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p354.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p354 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p354.bind(this)}>!&nbsp;</button>
        }
        {this.state.p354 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p354.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p354 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p354.bind(this)}>?&nbsp;</button>
        }
        {this.state.p354 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p354.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p354 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p354.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p354 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p354.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p354 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p354.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p354 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p354.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p354 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p354.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p354 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p354.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p354 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p354.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p354 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p354.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p355 === "de" &&
                <button id="txtBut" onClick={this.p355.bind(this)}>de</button>
        }
        {this.state.p355 === "De" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p355.bind(this)}>De</button>
        }
        {this.state.p355 === "De" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p355.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p356 === " " &&
                <button id="txtBut" onClick={this.p356.bind(this)}>&nbsp;</button>
        }
        {this.state.p356 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p356.bind(this)}>,&nbsp;</button>
        }
        {this.state.p356 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p356.bind(this)}>;&nbsp;</button>
        }
        {this.state.p356 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p356.bind(this)}>:&nbsp;</button>
        }
        {this.state.p356 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p356.bind(this)}>(&nbsp;</button>
        }
        {this.state.p356 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p356.bind(this)}>)&nbsp;</button>
        }
        {this.state.p356 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p356.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p356 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p356.bind(this)}>!&nbsp;</button>
        }
        {this.state.p356 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p356.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p356 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p356.bind(this)}>?&nbsp;</button>
        }
        {this.state.p356 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p356.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p356 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p356.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p356 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p356.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p356 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p356.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p356 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p356.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p356 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p356.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p356 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p356.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p356 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p356.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p356 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p356.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p357 === "aquella" &&
                <button id="txtBut" onClick={this.p357.bind(this)}>aquella</button>
        }
        {this.state.p357 === "Aquella" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p357.bind(this)}>Aquella</button>
        }
        {this.state.p357 === "Aquella" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p357.bind(this)}><span style={{color:"red"}}>A</span>quella</button>
        }

        {this.state.p358 === " " &&
                <button id="txtBut" onClick={this.p358.bind(this)}>&nbsp;</button>
        }
        {this.state.p358 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p358.bind(this)}>,&nbsp;</button>
        }
        {this.state.p358 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p358.bind(this)}>;&nbsp;</button>
        }
        {this.state.p358 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p358.bind(this)}>:&nbsp;</button>
        }
        {this.state.p358 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p358.bind(this)}>(&nbsp;</button>
        }
        {this.state.p358 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p358.bind(this)}>)&nbsp;</button>
        }
        {this.state.p358 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p358.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p358 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p358.bind(this)}>!&nbsp;</button>
        }
        {this.state.p358 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p358.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p358 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p358.bind(this)}>?&nbsp;</button>
        }
        {this.state.p358 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p358.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p358 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p358.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p358 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p358.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p358 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p358.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p358 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p358.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p358 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p358.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p358 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p358.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p358 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p358.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p358 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p358.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p359 === "caja" &&
                <button id="txtBut" onClick={this.p359.bind(this)}>caja</button>
        }
        {this.state.p359 === "Caja" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p359.bind(this)}>Caja</button>
        }
        {this.state.p359 === "Caja" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p359.bind(this)}><span style={{color:"red"}}>C</span>aja</button>
        }

        {this.state.p360 === " " &&
                <button id="txtBut" onClick={this.p360.bind(this)}>&nbsp;</button>
        }
        {this.state.p360 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p360.bind(this)}>,&nbsp;</button>
        }
        {this.state.p360 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p360.bind(this)}>;&nbsp;</button>
        }
        {this.state.p360 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p360.bind(this)}>:&nbsp;</button>
        }
        {this.state.p360 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p360.bind(this)}>(&nbsp;</button>
        }
        {this.state.p360 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p360.bind(this)}>)&nbsp;</button>
        }
        {this.state.p360 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p360.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p360 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p360.bind(this)}>!&nbsp;</button>
        }
        {this.state.p360 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p360.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p360 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p360.bind(this)}>?&nbsp;</button>
        }
        {this.state.p360 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p360.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p360 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p360.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p360 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p360.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p360 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p360.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p360 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p360.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p360 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p360.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p360 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p360.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p360 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p360.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p360 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p360.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p361 === "iba" &&
                <button id="txtBut" onClick={this.p361.bind(this)}>iba</button>
        }
        {this.state.p361 === "Iba" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p361.bind(this)}>Iba</button>
        }
        {this.state.p361 === "Iba" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p361.bind(this)}><span style={{color:"red"}}>I</span>ba</button>
        }

        {this.state.p362 === " " &&
                <button id="txtBut" onClick={this.p362.bind(this)}>&nbsp;</button>
        }
        {this.state.p362 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p362.bind(this)}>,&nbsp;</button>
        }
        {this.state.p362 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p362.bind(this)}>;&nbsp;</button>
        }
        {this.state.p362 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p362.bind(this)}>:&nbsp;</button>
        }
        {this.state.p362 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p362.bind(this)}>(&nbsp;</button>
        }
        {this.state.p362 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p362.bind(this)}>)&nbsp;</button>
        }
        {this.state.p362 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p362.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p362 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p362.bind(this)}>!&nbsp;</button>
        }
        {this.state.p362 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p362.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p362 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p362.bind(this)}>?&nbsp;</button>
        }
        {this.state.p362 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p362.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p362 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p362.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p362 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p362.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p362 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p362.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p362 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p362.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p362 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p362.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p362 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p362.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p362 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p362.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p362 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p362.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p363 === "el" &&
                <button id="txtBut" onClick={this.p363.bind(this)}>el</button>
        }
        {this.state.p363 === "El" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p363.bind(this)}>El</button>
        }
        {this.state.p363 === "El" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p363.bind(this)}><span style={{color:"red"}}>E</span>l</button>
        }

        {this.state.p364 === " " &&
                <button id="txtBut" onClick={this.p364.bind(this)}>&nbsp;</button>
        }
        {this.state.p364 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p364.bind(this)}>,&nbsp;</button>
        }
        {this.state.p364 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p364.bind(this)}>;&nbsp;</button>
        }
        {this.state.p364 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p364.bind(this)}>:&nbsp;</button>
        }
        {this.state.p364 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p364.bind(this)}>(&nbsp;</button>
        }
        {this.state.p364 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p364.bind(this)}>)&nbsp;</button>
        }
        {this.state.p364 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p364.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p364 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p364.bind(this)}>!&nbsp;</button>
        }
        {this.state.p364 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p364.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p364 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p364.bind(this)}>?&nbsp;</button>
        }
        {this.state.p364 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p364.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p364 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p364.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p364 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p364.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p364 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p364.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p364 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p364.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p364 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p364.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p364 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p364.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p364 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p364.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p364 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p364.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p365 === "infierno" &&
                <button id="txtBut" onClick={this.p365.bind(this)}>infierno</button>
        }
        {this.state.p365 === "Infierno" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p365.bind(this)}>Infierno</button>
        }
        {this.state.p365 === "Infierno" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p365.bind(this)}><span style={{color:"red"}}>I</span>nfierno</button>
        }

        {this.state.p366 === " " &&
                <button id="txtBut" onClick={this.p366.bind(this)}>&nbsp;</button>
        }
        {this.state.p366 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p366.bind(this)}>,&nbsp;</button>
        }
        {this.state.p366 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p366.bind(this)}>;&nbsp;</button>
        }
        {this.state.p366 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p366.bind(this)}>:&nbsp;</button>
        }
        {this.state.p366 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p366.bind(this)}>(&nbsp;</button>
        }
        {this.state.p366 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p366.bind(this)}>)&nbsp;</button>
        }
        {this.state.p366 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p366.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p366 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p366.bind(this)}>!&nbsp;</button>
        }
        {this.state.p366 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p366.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p366 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p366.bind(this)}>?&nbsp;</button>
        }
        {this.state.p366 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p366.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p366 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p366.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p366 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p366.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p366 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p366.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p366 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p366.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p366 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p366.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p366 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p366.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p366 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p366.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p366 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p366.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p367 === "personal" &&
                <button id="txtBut" onClick={this.p367.bind(this)}>personal</button>
        }
        {this.state.p367 === "Personal" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p367.bind(this)}>Personal</button>
        }
        {this.state.p367 === "Personal" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p367.bind(this)}><span style={{color:"red"}}>P</span>ersonal</button>
        }

        {this.state.p368 === " " &&
                <button id="txtBut" onClick={this.p368.bind(this)}>&nbsp;</button>
        }
        {this.state.p368 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p368.bind(this)}>,&nbsp;</button>
        }
        {this.state.p368 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p368.bind(this)}>;&nbsp;</button>
        }
        {this.state.p368 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p368.bind(this)}>:&nbsp;</button>
        }
        {this.state.p368 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p368.bind(this)}>(&nbsp;</button>
        }
        {this.state.p368 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p368.bind(this)}>)&nbsp;</button>
        }
        {this.state.p368 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p368.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p368 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p368.bind(this)}>!&nbsp;</button>
        }
        {this.state.p368 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p368.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p368 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p368.bind(this)}>?&nbsp;</button>
        }
        {this.state.p368 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p368.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p368 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p368.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p368 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p368.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p368 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p368.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p368 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p368.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p368 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p368.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p368 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p368.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p368 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p368.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p368 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p368.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p369 === "que" &&
                <button id="txtBut" onClick={this.p369.bind(this)}>que</button>
        }
        {this.state.p369 === "Que" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p369.bind(this)}>Que</button>
        }
        {this.state.p369 === "Que" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p369.bind(this)}><span style={{color:"red"}}>Q</span>ue</button>
        }

        {this.state.p370 === " " &&
                <button id="txtBut" onClick={this.p370.bind(this)}>&nbsp;</button>
        }
        {this.state.p370 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p370.bind(this)}>,&nbsp;</button>
        }
        {this.state.p370 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p370.bind(this)}>;&nbsp;</button>
        }
        {this.state.p370 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p370.bind(this)}>:&nbsp;</button>
        }
        {this.state.p370 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p370.bind(this)}>(&nbsp;</button>
        }
        {this.state.p370 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p370.bind(this)}>)&nbsp;</button>
        }
        {this.state.p370 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p370.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p370 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p370.bind(this)}>!&nbsp;</button>
        }
        {this.state.p370 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p370.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p370 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p370.bind(this)}>?&nbsp;</button>
        }
        {this.state.p370 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p370.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p370 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p370.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p370 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p370.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p370 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p370.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p370 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p370.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p370 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p370.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p370 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p370.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p370 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p370.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p370 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p370.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p371 === "instalaría" &&
                <button id="txtBut" onClick={this.p371.bind(this)}>instalaría</button>
        }
        {this.state.p371 === "Instalaría" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p371.bind(this)}>Instalaría</button>
        }
        {this.state.p371 === "Instalaría" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p371.bind(this)}><span style={{color:"red"}}>I</span>nstalaría</button>
        }

        {this.state.p372 === " " &&
                <button id="txtBut" onClick={this.p372.bind(this)}>&nbsp;</button>
        }
        {this.state.p372 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p372.bind(this)}>,&nbsp;</button>
        }
        {this.state.p372 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p372.bind(this)}>;&nbsp;</button>
        }
        {this.state.p372 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p372.bind(this)}>:&nbsp;</button>
        }
        {this.state.p372 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p372.bind(this)}>(&nbsp;</button>
        }
        {this.state.p372 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p372.bind(this)}>)&nbsp;</button>
        }
        {this.state.p372 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p372.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p372 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p372.bind(this)}>!&nbsp;</button>
        }
        {this.state.p372 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p372.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p372 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p372.bind(this)}>?&nbsp;</button>
        }
        {this.state.p372 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p372.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p372 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p372.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p372 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p372.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p372 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p372.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p372 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p372.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p372 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p372.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p372 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p372.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p372 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p372.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p372 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p372.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p373 === "en" &&
                <button id="txtBut" onClick={this.p373.bind(this)}>en</button>
        }
        {this.state.p373 === "En" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p373.bind(this)}>En</button>
        }
        {this.state.p373 === "En" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p373.bind(this)}><span style={{color:"red"}}>E</span>n</button>
        }

        {this.state.p374 === " " &&
                <button id="txtBut" onClick={this.p374.bind(this)}>&nbsp;</button>
        }
        {this.state.p374 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p374.bind(this)}>,&nbsp;</button>
        }
        {this.state.p374 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p374.bind(this)}>;&nbsp;</button>
        }
        {this.state.p374 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p374.bind(this)}>:&nbsp;</button>
        }
        {this.state.p374 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p374.bind(this)}>(&nbsp;</button>
        }
        {this.state.p374 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p374.bind(this)}>)&nbsp;</button>
        }
        {this.state.p374 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p374.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p374 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p374.bind(this)}>!&nbsp;</button>
        }
        {this.state.p374 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p374.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p374 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p374.bind(this)}>?&nbsp;</button>
        }
        {this.state.p374 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p374.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p374 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p374.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p374 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p374.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p374 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p374.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p374 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p374.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p374 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p374.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p374 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p374.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p374 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p374.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p374 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p374.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p375 === "mi" &&
                <button id="txtBut" onClick={this.p375.bind(this)}>mi</button>
        }
        {this.state.p375 === "Mi" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p375.bind(this)}>Mi</button>
        }
        {this.state.p375 === "Mi" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p375.bind(this)}><span style={{color:"red"}}>M</span>i</button>
        }

        {this.state.p376 === " " &&
                <button id="txtBut" onClick={this.p376.bind(this)}>&nbsp;</button>
        }
        {this.state.p376 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p376.bind(this)}>,&nbsp;</button>
        }
        {this.state.p376 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p376.bind(this)}>;&nbsp;</button>
        }
        {this.state.p376 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p376.bind(this)}>:&nbsp;</button>
        }
        {this.state.p376 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p376.bind(this)}>(&nbsp;</button>
        }
        {this.state.p376 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p376.bind(this)}>)&nbsp;</button>
        }
        {this.state.p376 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p376.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p376 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p376.bind(this)}>!&nbsp;</button>
        }
        {this.state.p376 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p376.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p376 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p376.bind(this)}>?&nbsp;</button>
        }
        {this.state.p376 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p376.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p376 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p376.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p376 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p376.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p376 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p376.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p376 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p376.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p376 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p376.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p376 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p376.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p376 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p376.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p376 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p376.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p377 === "casa" &&
                <button id="txtBut" onClick={this.p377.bind(this)}>casa</button>
        }
        {this.state.p377 === "Casa" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p377.bind(this)}>Casa</button>
        }
        {this.state.p377 === "Casa" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p377.bind(this)}><span style={{color:"red"}}>C</span>asa</button>
        }

        {this.state.p378 === " " &&
                <button id="txtBut" onClick={this.p378.bind(this)}>&nbsp;</button>
        }
        {this.state.p378 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p378.bind(this)}>,&nbsp;</button>
        }
        {this.state.p378 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p378.bind(this)}>;&nbsp;</button>
        }
        {this.state.p378 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p378.bind(this)}>:&nbsp;</button>
        }
        {this.state.p378 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p378.bind(this)}>(&nbsp;</button>
        }
        {this.state.p378 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p378.bind(this)}>)&nbsp;</button>
        }
        {this.state.p378 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p378.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p378 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p378.bind(this)}>!&nbsp;</button>
        }
        {this.state.p378 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p378.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p378 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p378.bind(this)}>?&nbsp;</button>
        }
        {this.state.p378 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p378.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p378 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p378.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p378 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p378.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p378 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p378.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p378 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p378.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p378 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p378.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p378 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p378.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p378 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p378.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p378 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p378.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p379 === "para" &&
                <button id="txtBut" onClick={this.p379.bind(this)}>para</button>
        }
        {this.state.p379 === "Para" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p379.bind(this)}>Para</button>
        }
        {this.state.p379 === "Para" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p379.bind(this)}><span style={{color:"red"}}>P</span>ara</button>
        }

        {this.state.p380 === " " &&
                <button id="txtBut" onClick={this.p380.bind(this)}>&nbsp;</button>
        }
        {this.state.p380 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p380.bind(this)}>,&nbsp;</button>
        }
        {this.state.p380 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p380.bind(this)}>;&nbsp;</button>
        }
        {this.state.p380 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p380.bind(this)}>:&nbsp;</button>
        }
        {this.state.p380 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p380.bind(this)}>(&nbsp;</button>
        }
        {this.state.p380 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p380.bind(this)}>)&nbsp;</button>
        }
        {this.state.p380 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p380.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p380 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p380.bind(this)}>!&nbsp;</button>
        }
        {this.state.p380 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p380.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p380 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p380.bind(this)}>?&nbsp;</button>
        }
        {this.state.p380 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p380.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p380 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p380.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p380 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p380.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p380 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p380.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p380 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p380.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p380 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p380.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p380 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p380.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p380 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p380.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p380 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p380.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p381 === "destruir" &&
                <button id="txtBut" onClick={this.p381.bind(this)}>destruir</button>
        }
        {this.state.p381 === "Destruir" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p381.bind(this)}>Destruir</button>
        }
        {this.state.p381 === "Destruir" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p381.bind(this)}><span style={{color:"red"}}>D</span>estruir</button>
        }

        {this.state.p382 === " " &&
                <button id="txtBut" onClick={this.p382.bind(this)}>&nbsp;</button>
        }
        {this.state.p382 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p382.bind(this)}>,&nbsp;</button>
        }
        {this.state.p382 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p382.bind(this)}>;&nbsp;</button>
        }
        {this.state.p382 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p382.bind(this)}>:&nbsp;</button>
        }
        {this.state.p382 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p382.bind(this)}>(&nbsp;</button>
        }
        {this.state.p382 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p382.bind(this)}>)&nbsp;</button>
        }
        {this.state.p382 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p382.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p382 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p382.bind(this)}>!&nbsp;</button>
        }
        {this.state.p382 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p382.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p382 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p382.bind(this)}>?&nbsp;</button>
        }
        {this.state.p382 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p382.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p382 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p382.bind(this)}>,&nbsp;</button>
        }
        {this.state.p382 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p382.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p382 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p382.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p382 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p382.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p382 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p382.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p382 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p382.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p382 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p382.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p382 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p382.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p382 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p382.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p383 === "para" &&
                <button id="txtBut" onClick={this.p383.bind(this)}>para</button>
        }
        {this.state.p383 === "Para" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p383.bind(this)}>Para</button>
        }
        {this.state.p383 === "Para" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p383.bind(this)}><span style={{color:"red"}}>P</span>ara</button>
        }

        {this.state.p384 === " " &&
                <button id="txtBut" onClick={this.p384.bind(this)}>&nbsp;</button>
        }
        {this.state.p384 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p384.bind(this)}>,&nbsp;</button>
        }
        {this.state.p384 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p384.bind(this)}>;&nbsp;</button>
        }
        {this.state.p384 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p384.bind(this)}>:&nbsp;</button>
        }
        {this.state.p384 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p384.bind(this)}>(&nbsp;</button>
        }
        {this.state.p384 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p384.bind(this)}>)&nbsp;</button>
        }
        {this.state.p384 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p384.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p384 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p384.bind(this)}>!&nbsp;</button>
        }
        {this.state.p384 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p384.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p384 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p384.bind(this)}>?&nbsp;</button>
        }
        {this.state.p384 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p384.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p384 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p384.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p384 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p384.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p384 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p384.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p384 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p384.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p384 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p384.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p384 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p384.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p384 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p384.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p384 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p384.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p385 === "anular" &&
                <button id="txtBut" onClick={this.p385.bind(this)}>anular</button>
        }
        {this.state.p385 === "Anular" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p385.bind(this)}>Anular</button>
        }
        {this.state.p385 === "Anular" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p385.bind(this)}><span style={{color:"red"}}>A</span>nular</button>
        }

        {this.state.p386 === " " &&
                <button id="txtBut" onClick={this.p386.bind(this)}>&nbsp;</button>
        }
        {this.state.p386 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p386.bind(this)}>,&nbsp;</button>
        }
        {this.state.p386 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p386.bind(this)}>;&nbsp;</button>
        }
        {this.state.p386 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p386.bind(this)}>:&nbsp;</button>
        }
        {this.state.p386 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p386.bind(this)}>(&nbsp;</button>
        }
        {this.state.p386 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p386.bind(this)}>)&nbsp;</button>
        }
        {this.state.p386 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p386.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p386 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p386.bind(this)}>!&nbsp;</button>
        }
        {this.state.p386 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p386.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p386 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p386.bind(this)}>?&nbsp;</button>
        }
        {this.state.p386 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p386.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p386 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p386.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p386 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p386.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p386 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p386.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p386 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p386.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p386 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p386.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p386 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p386.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p386 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p386.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p386 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p386.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p387 === "al" &&
                <button id="txtBut" onClick={this.p387.bind(this)}>al</button>
        }
        {this.state.p387 === "Al" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p387.bind(this)}>Al</button>
        }
        {this.state.p387 === "Al" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p387.bind(this)}><span style={{color:"red"}}>A</span>l</button>
        }

        {this.state.p388 === " " &&
                <button id="txtBut" onClick={this.p388.bind(this)}>&nbsp;</button>
        }
        {this.state.p388 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p388.bind(this)}>,&nbsp;</button>
        }
        {this.state.p388 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p388.bind(this)}>;&nbsp;</button>
        }
        {this.state.p388 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p388.bind(this)}>:&nbsp;</button>
        }
        {this.state.p388 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p388.bind(this)}>(&nbsp;</button>
        }
        {this.state.p388 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p388.bind(this)}>)&nbsp;</button>
        }
        {this.state.p388 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p388.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p388 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p388.bind(this)}>!&nbsp;</button>
        }
        {this.state.p388 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p388.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p388 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p388.bind(this)}>?&nbsp;</button>
        }
        {this.state.p388 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p388.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p388 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p388.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p388 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p388.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p388 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p388.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p388 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p388.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p388 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p388.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p388 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p388.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p388 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p388.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p388 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p388.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p389 === "otro" &&
                <button id="txtBut" onClick={this.p389.bind(this)}>otro</button>
        }
        {this.state.p389 === "Otro" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p389.bind(this)}>Otro</button>
        }
        {this.state.p389 === "Otro" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p389.bind(this)}><span style={{color:"red"}}>O</span>tro</button>
        }

        {this.state.p390 === " " &&
                <button id="txtBut" onClick={this.p390.bind(this)}>&nbsp;</button>
        }
        {this.state.p390 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p390.bind(this)}>,&nbsp;</button>
        }
        {this.state.p390 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p390.bind(this)}>;&nbsp;</button>
        }
        {this.state.p390 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p390.bind(this)}>:&nbsp;</button>
        }
        {this.state.p390 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p390.bind(this)}>(&nbsp;</button>
        }
        {this.state.p390 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p390.bind(this)}>)&nbsp;</button>
        }
        {this.state.p390 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p390.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p390 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p390.bind(this)}>!&nbsp;</button>
        }
        {this.state.p390 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p390.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p390 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p390.bind(this)}>?&nbsp;</button>
        }
        {this.state.p390 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p390.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p390 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p390.bind(this)}>,&nbsp;</button>
        }
        {this.state.p390 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p390.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p390 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p390.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p390 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p390.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p390 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p390.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p390 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p390.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p390 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p390.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p390 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p390.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p390 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p390.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p391 === "el" &&
                <button id="txtBut" onClick={this.p391.bind(this)}>el</button>
        }
        {this.state.p391 === "El" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p391.bind(this)}>El</button>
        }
        {this.state.p391 === "El" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p391.bind(this)}><span style={{color:"red"}}>E</span>l</button>
        }

        {this.state.p392 === " " &&
                <button id="txtBut" onClick={this.p392.bind(this)}>&nbsp;</button>
        }
        {this.state.p392 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p392.bind(this)}>,&nbsp;</button>
        }
        {this.state.p392 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p392.bind(this)}>;&nbsp;</button>
        }
        {this.state.p392 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p392.bind(this)}>:&nbsp;</button>
        }
        {this.state.p392 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p392.bind(this)}>(&nbsp;</button>
        }
        {this.state.p392 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p392.bind(this)}>)&nbsp;</button>
        }
        {this.state.p392 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p392.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p392 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p392.bind(this)}>!&nbsp;</button>
        }
        {this.state.p392 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p392.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p392 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p392.bind(this)}>?&nbsp;</button>
        }
        {this.state.p392 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p392.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p392 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p392.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p392 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p392.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p392 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p392.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p392 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p392.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p392 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p392.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p392 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p392.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p392 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p392.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p392 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p392.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p393 === "descomunal" &&
                <button id="txtBut" onClick={this.p393.bind(this)}>descomunal</button>
        }
        {this.state.p393 === "Descomunal" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p393.bind(this)}>Descomunal</button>
        }
        {this.state.p393 === "Descomunal" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p393.bind(this)}><span style={{color:"red"}}>D</span>escomunal</button>
        }

        {this.state.p394 === " " &&
                <button id="txtBut" onClick={this.p394.bind(this)}>&nbsp;</button>
        }
        {this.state.p394 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p394.bind(this)}>,&nbsp;</button>
        }
        {this.state.p394 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p394.bind(this)}>;&nbsp;</button>
        }
        {this.state.p394 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p394.bind(this)}>:&nbsp;</button>
        }
        {this.state.p394 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p394.bind(this)}>(&nbsp;</button>
        }
        {this.state.p394 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p394.bind(this)}>)&nbsp;</button>
        }
        {this.state.p394 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p394.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p394 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p394.bind(this)}>!&nbsp;</button>
        }
        {this.state.p394 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p394.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p394 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p394.bind(this)}>?&nbsp;</button>
        }
        {this.state.p394 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p394.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p394 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p394.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p394 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p394.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p394 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p394.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p394 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p394.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p394 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p394.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p394 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p394.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p394 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p394.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p394 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p394.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p395 === "infierno" &&
                <button id="txtBut" onClick={this.p395.bind(this)}>infierno</button>
        }
        {this.state.p395 === "Infierno" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p395.bind(this)}>Infierno</button>
        }
        {this.state.p395 === "Infierno" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p395.bind(this)}><span style={{color:"red"}}>I</span>nfierno</button>
        }

        {this.state.p396 === " " &&
                <button id="txtBut" onClick={this.p396.bind(this)}>&nbsp;</button>
        }
        {this.state.p396 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p396.bind(this)}>,&nbsp;</button>
        }
        {this.state.p396 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p396.bind(this)}>;&nbsp;</button>
        }
        {this.state.p396 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p396.bind(this)}>:&nbsp;</button>
        }
        {this.state.p396 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p396.bind(this)}>(&nbsp;</button>
        }
        {this.state.p396 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p396.bind(this)}>)&nbsp;</button>
        }
        {this.state.p396 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p396.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p396 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p396.bind(this)}>!&nbsp;</button>
        }
        {this.state.p396 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p396.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p396 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p396.bind(this)}>?&nbsp;</button>
        }
        {this.state.p396 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p396.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p396 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p396.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p396 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p396.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p396 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p396.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p396 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p396.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p396 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p396.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p396 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p396.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p396 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p396.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p396 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p396.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p397 === "de" &&
                <button id="txtBut" onClick={this.p397.bind(this)}>de</button>
        }
        {this.state.p397 === "De" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p397.bind(this)}>De</button>
        }
        {this.state.p397 === "De" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p397.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p398 === " " &&
                <button id="txtBut" onClick={this.p398.bind(this)}>&nbsp;</button>
        }
        {this.state.p398 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p398.bind(this)}>,&nbsp;</button>
        }
        {this.state.p398 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p398.bind(this)}>;&nbsp;</button>
        }
        {this.state.p398 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p398.bind(this)}>:&nbsp;</button>
        }
        {this.state.p398 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p398.bind(this)}>(&nbsp;</button>
        }
        {this.state.p398 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p398.bind(this)}>)&nbsp;</button>
        }
        {this.state.p398 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p398.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p398 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p398.bind(this)}>!&nbsp;</button>
        }
        {this.state.p398 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p398.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p398 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p398.bind(this)}>?&nbsp;</button>
        }
        {this.state.p398 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p398.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p398 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p398.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p398 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p398.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p398 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p398.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p398 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p398.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p398 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p398.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p398 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p398.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p398 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p398.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p398 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p398.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p399 === "los" &&
                <button id="txtBut" onClick={this.p399.bind(this)}>los</button>
        }
        {this.state.p399 === "Los" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p399.bind(this)}>Los</button>
        }
        {this.state.p399 === "Los" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p399.bind(this)}><span style={{color:"red"}}>L</span>os</button>
        }

        {this.state.p400 === " " &&
                <button id="txtBut" onClick={this.p400.bind(this)}>&nbsp;</button>
        }
        {this.state.p400 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p400.bind(this)}>,&nbsp;</button>
        }
        {this.state.p400 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p400.bind(this)}>;&nbsp;</button>
        }
        {this.state.p400 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p400.bind(this)}>:&nbsp;</button>
        }
        {this.state.p400 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p400.bind(this)}>(&nbsp;</button>
        }
        {this.state.p400 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p400.bind(this)}>)&nbsp;</button>
        }
        {this.state.p400 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p400.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p400 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p400.bind(this)}>!&nbsp;</button>
        }
        {this.state.p400 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p400.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p400 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p400.bind(this)}>?&nbsp;</button>
        }
        {this.state.p400 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p400.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p400 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p400.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p400 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p400.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p400 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p400.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p400 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p400.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p400 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p400.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p400 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p400.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p400 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p400.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p400 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p400.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p401 === "hombres" &&
                <button id="txtBut" onClick={this.p401.bind(this)}>hombres</button>
        }
        {this.state.p401 === "Hombres" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p401.bind(this)}>Hombres</button>
        }
        {this.state.p401 === "Hombres" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p401.bind(this)}><span style={{color:"red"}}>H</span>ombres</button>
        }

        {this.state.p402 === " " &&
                <button id="txtBut" onClick={this.p402.bind(this)}>&nbsp;</button>
        }
        {this.state.p402 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p402.bind(this)}>,&nbsp;</button>
        }
        {this.state.p402 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p402.bind(this)}>;&nbsp;</button>
        }
        {this.state.p402 === ". " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p402.bind(this)}>.&nbsp;</button>
        }
        {this.state.p402 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p402.bind(this)}>(&nbsp;</button>
        }
        {this.state.p402 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p402.bind(this)}>)&nbsp;</button>
        }
        {this.state.p402 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p402.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p402 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p402.bind(this)}>!&nbsp;</button>
        }
        {this.state.p402 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p402.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p402 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p402.bind(this)}>?&nbsp;</button>
        }
        {this.state.p402 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p402.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p402 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p402.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p402 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p402.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p402 === ". " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p402.bind(this)}>.&nbsp;</button>
        }
        {this.state.p402 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p402.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p402 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p402.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p402 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p402.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p402 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p402.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p402 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p402.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p402 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p402.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        <br/><br/>Next...

        <br/><br/><br/>
        <button onClick={this.updateComparar.bind(this)}>Comparar</button>
      </div>
    );
  }
}

export default Migala
