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

  render() {
    return(
      <div id="crucigramaWrap">
        <p>Escribe en el siguiente texto los signos de puntuación y las mayúsculas correspondientes.</p>
        <h1 align="center">LA MIGALA</h1>
        <h2 align="center">Juan José Arreola</h2>

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

        <br/><br/>Next...

        <br/><br/><br/>
        <button  onClick={this.updateComparar.bind(this)}>Comparar</button>
      </div>
    );
  }
}

export default Migala
