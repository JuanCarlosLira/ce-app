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
    p403: "la",
    p404: " ",
    p405: "noche",
    p406: " ",
    p407: "memorable",
    p408: " ",
    p409: "en",
    p410: " ",
    p411: "que",
    p412: " ",
    p413: "solté",
    p414: " ",
    p415: "a",
    p416: " ",
    p417: "la",
    p418: " ",
    p419: "migala",
    p420: " ",
    p421: "en",
    p422: " ",
    p423: "mi",
    p424: " ",
    p425: "departamento",
    p426: " ",
    p427: "y",
    p428: " ",
    p429: "la",
    p430: " ",
    p431: "vi",
    p432: " ",
    p433: "correr",
    p434: " ",
    p435: "como",
    p436: " ",
    p437: "un",
    p438: " ",
    p439: "cangrejo",
    p440: " ",
    p441: "y",
    p442: " ",
    p443: "ocultarse",
    p444: " ",
    p445: "bajo",
    p446: " ",
    p447: "un",
    p448: " ",
    p449: "mueble",
    p450: ", ",
    p451: "ha",
    p452: " ",
    p453: "sido",
    p454: " ",
    p455: "el",
    p456: " ",
    p457: "principio",
    p458: " ",
    p459: "de",
    p460: " ",
    p461: "una",
    p462: " ",
    p463: "vida",
    p464: " ",
    p465: "indescriptible",
    p466: ". ",
    p467: "desde",
    p468: " ",
    p469: "entonces",
    p470: ", ",
    p471: "cada",
    p472: " ",
    p473: "uno",
    p474: " ",
    p475: "de",
    p476: " ",
    p477: "los",
    p478: " ",
    p479: "instantes",
    p480: " ",
    p481: "de",
    p482: " ",
    p483: "que",
    p484: " ",
    p485: "dispongo",
    p486: " ",
    p487: "ha",
    p488: " ",
    p489: "sido",
    p490: " ",
    p491: "recorrido",
    p492: " ",
    p493: "por",
    p494: " ",
    p495: "los",
    p496: " ",
    p497: "pasos",
    p498: " ",
    p499: "de",
    p500: " ",
    p501: "la",
    p502: " ",
    p503: "araña",
    p504: ", ",
    p505: "que",
    p506: " ",
    p507: "llena",
    p508: " ",
    p509: "la",
    p510: " ",
    p511: "casa",
    p512: " ",
    p513: "con",
    p514: " ",
    p515: "su",
    p516: " ",
    p517: "presencia",
    p518: " ",
    p519: "invisible",
    p520: ". ",
    p521: "todas",
    p522: " ",
    p523: "las",
    p524: " ",
    p525: "noches",
    p526: " ",
    p527: "tiemblo",
    p528: " ",
    p529: "en",
    p530: " ",
    p531: "espera",
    p532: " ",
    p533: "de",
    p534: " ",
    p535: "la",
    p536: " ",
    p537: "picadura",
    p538: " ",
    p539: "mortal",
    p540: ". ",
    p541: "muchas",
    p542: " ",
    p543: "veces",
    p544: " ",
    p545: "despierto",
    p546: " ",
    p547: "con",
    p548: " ",
    p549: "el",
    p550: " ",
    p551: "cuerpo",
    p552: " ",
    p553: "helado",
    p554: ", ",
    p555: "tenso",
    p556: ", ",
    p557: "inmóvil",
    p558: ", ",
    p559: "porque",
    p560: " ",
    p561: "el",
    p562: " ",
    p563: "sueño",
    p564: " ",
    p565: "ha",
    p566: " ",
    p567: "creado",
    p568: " ",
    p569: "para",
    p570: " ",
    p571: "mí",
    p572: ", ",
    p573: "con",
    p574: " ",
    p575: "precisión",
    p576: ", ",
    p577: "el",
    p578: " ",
    p579: "paso",
    p580: " ",
    p581: "cosquilleante",
    p582: " ",
    p583: "de",
    p584: " ",
    p585: "la",
    p586: " ",
    p587: "aralia",
    p588: " ",
    p589: "sobre",
    p590: " ",
    p591: "mi",
    p592: " ",
    p593: "piel",
    p594: ", ",
    p595: "su",
    p596: " ",
    p597: "peso",
    p598: " ",
    p599: "indefinible",
    p600: ", ",
    p601: "su",
    p602: " ",
    p603: "consistencia",
    p604: " ",
    p605: "de",
    p606: " ",
    p607: "entraña",
    p608: ". ",
    p609: "Sin",
    p610: " ",
    p611: "embargo",
    p612: ", ",
    p613: "siempre",
    p614: " ",
    p615: "amanece",
    p616: ". ",
    p617: "estoy",
    p618: " ",
    p619: "vivo",
    p620: " ",
    p621: "y",
    p622: " ",
    p623: "mi",
    p624: " ",
    p625: "alma",
    p626: " ",
    p627: "inútilmente",
    p628: " ",
    p629: "se",
    p630: " ",
    p631: "apresta",
    p632: " ",
    p633: "y",
    p634: " ",
    p635: "se",
    p636: " ",
    p637: "perfecciona",
    p638: ". ",
    p639: "hay",
    p640: " ",
    p641: "días",
    p642: " ",
    p643: "en",
    p644: " ",
    p645: "que",
    p646: " ",
    p647: "pienso",
    p648: " ",
    p649: "que",
    p650: " ",
    p651: "la",
    p652: " ",
    p653: "migala",
    p654: " ",
    p655: "ha",
    p656: " ",
    p657: "desaparecido",
    p658: ", ",
    p659: "question",
    p660: "",
    p661: "se",
    p662: "",
    p663: "ha",
    p664: "",
    p665: "extraviado",
    p666: " ",
    p667: "o",
    p668: " ",
    p669: "que",
    p670: " ",
    p671: "ha",
    p672: " ",
    p673: "muerto",
    p674: ". ",
    p675: "Pero",
    p676: " ",
    p677: "no",
    p678: " ",
    p679: "hago",
    p680: " ",
    p681: "nada",
    p682: " ",
    p683: "para",
    p684: " ",
    p685: "comprobarlo",
    p686: ". ",
    p687: "Dejo",
    p688: " ",
    p689: "siempre",
    p690: " ",
    p691: "que",
    p692: " ",
    p693: "el",
    p694: " ",
    p695: "azar",
    p696: " ",
    p697: "me",
    p698: " ",
    p699: "vuelva",
    p700: " ",
    p701: "a",
    p702: " ",
    p703: "poner",
    p704: " ",
    p705: "frente",
    p706: " ",
    p707: "a",
    p708: " ",
    p709: "ella",
    p710: ", ",
    p711: "al",
    p712: " ",
    p713: "salir",
    p714: " ",
    p715: "del",
    p716: " ",
    p717: "baño",
    p718: ", ",
    p719: "o",
    p720: " ",
    p721: "mientras",
    p722: " ",
    p723: "me",
    p724: " ",
    p725: "desvisto",
    p726: " ",
    p727: "para",
    p728: " ",
    p729: "echarme",
    p730: " ",
    ///// WARN
    ///// WARN
    ///// WARN
    ///// WARN
    p732: "en",
    p733: " ",
    p734: "la",
    p735: " ",
    p736: "cama",
    p737: ". ",
    p738: "a",
    p739: " ",
    p740: "veces",
    p741: " ",
    p742: "el",
    p743: " ",
    p744: "silencio",
    p745: " ",
    p746: "de",
    p747: " ",
    p748: "la",
    p749: " ",
    p750: "noche",
    p751: " ",
    p752: "me",
    p753: " ",
    p754: "trae",
    p755: " ",
    p756: "el",
    p757: " ",
    p758: "eco",
    p759: " ",
    p760: "de",
    p761: " ",
    p762: "sus",
    p763: " ",
    p764: "pasos",
    p765: ", ",
    p766: "que",
    p767: " ",
    p768: "he",
    p769: " ",
    p770: "aprendido",
    p771: " ",
    p772: "a",
    p773: " ",
    p774: "oír",
    p775: ", ",
    p776: "aunque",
    p777: " ",
    p778: "sé",
    p779: " ",
    p780: "que",
    p781: " ",
    p782: "son",
    p783: " ",
    p784: "imperceptibles",
    p785: ". ",
    p786: "",
    p787: "",
    p788: "",
    p789: "",
    p790: "",
    p791: "",
    p792: "",
    p793: "",
    p794: "",
    p795: "",
    p796: "",
    p797: "",
    p798: "",
    p799: "",
    p800: ""
  }

  updateComparar() {
    this.setState({compare: !this.state.compare});
    //console.log(this.state.compare);
  }
  p521() {
          if (this.state.p521 === "todas") {
                  this.setState({p521: "Todas"});
          } else {
                  this.setState({p521: "todas"});
          }
  }
  p522() {
          if (this.state.p522 === " ") {this.setState({p522: ", "});}
          if (this.state.p522 === ", ") {this.setState({p522: "; "});}
          if (this.state.p522 === "; ") {this.setState({p522: ": "});}
          if (this.state.p522 === ": ") {this.setState({p522: "( "});}
          if (this.state.p522 === "( ") {this.setState({p522: ") "});}
          if (this.state.p522 === ") ") {this.setState({p522: "¡ "});}
          if (this.state.p522 === "¡ ") {this.setState({p522: "! "});}
          if (this.state.p522 === "! ") {this.setState({p522: "¿ "});}
          if (this.state.p522 === "¿ ") {this.setState({p522: "? "});}
          if (this.state.p522 === "? ") {this.setState({p522: " "});}
  }
  p523() {
          if (this.state.p523 === "las") {
                  this.setState({p523: "Las"});
          } else {
                  this.setState({p523: "las"});
          }
  }
  p524() {
          if (this.state.p524 === " ") {this.setState({p524: ", "});}
          if (this.state.p524 === ", ") {this.setState({p524: "; "});}
          if (this.state.p524 === "; ") {this.setState({p524: ": "});}
          if (this.state.p524 === ": ") {this.setState({p524: "( "});}
          if (this.state.p524 === "( ") {this.setState({p524: ") "});}
          if (this.state.p524 === ") ") {this.setState({p524: "¡ "});}
          if (this.state.p524 === "¡ ") {this.setState({p524: "! "});}
          if (this.state.p524 === "! ") {this.setState({p524: "¿ "});}
          if (this.state.p524 === "¿ ") {this.setState({p524: "? "});}
          if (this.state.p524 === "? ") {this.setState({p524: " "});}
  }
  p525() {
          if (this.state.p525 === "noches") {
                  this.setState({p525: "Noches"});
          } else {
                  this.setState({p525: "noches"});
          }
  }
  p526() {
          if (this.state.p526 === " ") {this.setState({p526: ", "});}
          if (this.state.p526 === ", ") {this.setState({p526: "; "});}
          if (this.state.p526 === "; ") {this.setState({p526: ": "});}
          if (this.state.p526 === ": ") {this.setState({p526: "( "});}
          if (this.state.p526 === "( ") {this.setState({p526: ") "});}
          if (this.state.p526 === ") ") {this.setState({p526: "¡ "});}
          if (this.state.p526 === "¡ ") {this.setState({p526: "! "});}
          if (this.state.p526 === "! ") {this.setState({p526: "¿ "});}
          if (this.state.p526 === "¿ ") {this.setState({p526: "? "});}
          if (this.state.p526 === "? ") {this.setState({p526: " "});}
  }
  p527() {
          if (this.state.p527 === "tiemblo") {
                  this.setState({p527: "Tiemblo"});
          } else {
                  this.setState({p527: "tiemblo"});
          }
  }
  p528() {
          if (this.state.p528 === " ") {this.setState({p528: ", "});}
          if (this.state.p528 === ", ") {this.setState({p528: "; "});}
          if (this.state.p528 === "; ") {this.setState({p528: ": "});}
          if (this.state.p528 === ": ") {this.setState({p528: "( "});}
          if (this.state.p528 === "( ") {this.setState({p528: ") "});}
          if (this.state.p528 === ") ") {this.setState({p528: "¡ "});}
          if (this.state.p528 === "¡ ") {this.setState({p528: "! "});}
          if (this.state.p528 === "! ") {this.setState({p528: "¿ "});}
          if (this.state.p528 === "¿ ") {this.setState({p528: "? "});}
          if (this.state.p528 === "? ") {this.setState({p528: " "});}
  }
  p529() {
          if (this.state.p529 === "en") {
                  this.setState({p529: "En"});
          } else {
                  this.setState({p529: "en"});
          }
  }
  p530() {
          if (this.state.p530 === " ") {this.setState({p530: ", "});}
          if (this.state.p530 === ", ") {this.setState({p530: "; "});}
          if (this.state.p530 === "; ") {this.setState({p530: ": "});}
          if (this.state.p530 === ": ") {this.setState({p530: "( "});}
          if (this.state.p530 === "( ") {this.setState({p530: ") "});}
          if (this.state.p530 === ") ") {this.setState({p530: "¡ "});}
          if (this.state.p530 === "¡ ") {this.setState({p530: "! "});}
          if (this.state.p530 === "! ") {this.setState({p530: "¿ "});}
          if (this.state.p530 === "¿ ") {this.setState({p530: "? "});}
          if (this.state.p530 === "? ") {this.setState({p530: " "});}
  }
  p531() {
          if (this.state.p531 === "espera") {
                  this.setState({p531: "Espera"});
          } else {
                  this.setState({p531: "espera"});
          }
  }
  p532() {
          if (this.state.p532 === " ") {this.setState({p532: ", "});}
          if (this.state.p532 === ", ") {this.setState({p532: "; "});}
          if (this.state.p532 === "; ") {this.setState({p532: ": "});}
          if (this.state.p532 === ": ") {this.setState({p532: "( "});}
          if (this.state.p532 === "( ") {this.setState({p532: ") "});}
          if (this.state.p532 === ") ") {this.setState({p532: "¡ "});}
          if (this.state.p532 === "¡ ") {this.setState({p532: "! "});}
          if (this.state.p532 === "! ") {this.setState({p532: "¿ "});}
          if (this.state.p532 === "¿ ") {this.setState({p532: "? "});}
          if (this.state.p532 === "? ") {this.setState({p532: " "});}
  }
  p533() {
          if (this.state.p533 === "de") {
                  this.setState({p533: "De"});
          } else {
                  this.setState({p533: "de"});
          }
  }
  p534() {
          if (this.state.p534 === " ") {this.setState({p534: ", "});}
          if (this.state.p534 === ", ") {this.setState({p534: "; "});}
          if (this.state.p534 === "; ") {this.setState({p534: ": "});}
          if (this.state.p534 === ": ") {this.setState({p534: "( "});}
          if (this.state.p534 === "( ") {this.setState({p534: ") "});}
          if (this.state.p534 === ") ") {this.setState({p534: "¡ "});}
          if (this.state.p534 === "¡ ") {this.setState({p534: "! "});}
          if (this.state.p534 === "! ") {this.setState({p534: "¿ "});}
          if (this.state.p534 === "¿ ") {this.setState({p534: "? "});}
          if (this.state.p534 === "? ") {this.setState({p534: " "});}
  }
  p535() {
          if (this.state.p535 === "la") {
                  this.setState({p535: "La"});
          } else {
                  this.setState({p535: "la"});
          }
  }
  p536() {
          if (this.state.p536 === " ") {this.setState({p536: ", "});}
          if (this.state.p536 === ", ") {this.setState({p536: "; "});}
          if (this.state.p536 === "; ") {this.setState({p536: ": "});}
          if (this.state.p536 === ": ") {this.setState({p536: "( "});}
          if (this.state.p536 === "( ") {this.setState({p536: ") "});}
          if (this.state.p536 === ") ") {this.setState({p536: "¡ "});}
          if (this.state.p536 === "¡ ") {this.setState({p536: "! "});}
          if (this.state.p536 === "! ") {this.setState({p536: "¿ "});}
          if (this.state.p536 === "¿ ") {this.setState({p536: "? "});}
          if (this.state.p536 === "? ") {this.setState({p536: " "});}
  }
  p537() {
          if (this.state.p537 === "picadura") {
                  this.setState({p537: "Picadura"});
          } else {
                  this.setState({p537: "picadura"});
          }
  }
  p538() {
          if (this.state.p538 === " ") {this.setState({p538: ", "});}
          if (this.state.p538 === ", ") {this.setState({p538: "; "});}
          if (this.state.p538 === "; ") {this.setState({p538: ": "});}
          if (this.state.p538 === ": ") {this.setState({p538: "( "});}
          if (this.state.p538 === "( ") {this.setState({p538: ") "});}
          if (this.state.p538 === ") ") {this.setState({p538: "¡ "});}
          if (this.state.p538 === "¡ ") {this.setState({p538: "! "});}
          if (this.state.p538 === "! ") {this.setState({p538: "¿ "});}
          if (this.state.p538 === "¿ ") {this.setState({p538: "? "});}
          if (this.state.p538 === "? ") {this.setState({p538: " "});}
  }
  p539() {
          if (this.state.p539 === "mortal") {
                  this.setState({p539: "Mortal"});
          } else {
                  this.setState({p539: "mortal"});
          }
  }
  p540() {
          if (this.state.p540 === " ") {this.setState({p540: ", "});}
          if (this.state.p540 === ", ") {this.setState({p540: "; "});}
          if (this.state.p540 === "; ") {this.setState({p540: ". "});}
          if (this.state.p540 === ". ") {this.setState({p540: "( "});}
          if (this.state.p540 === "( ") {this.setState({p540: ") "});}
          if (this.state.p540 === ") ") {this.setState({p540: "¡ "});}
          if (this.state.p540 === "¡ ") {this.setState({p540: "! "});}
          if (this.state.p540 === "! ") {this.setState({p540: "¿ "});}
          if (this.state.p540 === "¿ ") {this.setState({p540: "? "});}
          if (this.state.p540 === "? ") {this.setState({p540: " "});}
  }
  p541() {
          if (this.state.p541 === "muchas") {
                  this.setState({p541: "Muchas"});
          } else {
                  this.setState({p541: "muchas"});
          }
  }
  p542() {
          if (this.state.p542 === " ") {this.setState({p542: ", "});}
          if (this.state.p542 === ", ") {this.setState({p542: "; "});}
          if (this.state.p542 === "; ") {this.setState({p542: ": "});}
          if (this.state.p542 === ": ") {this.setState({p542: "( "});}
          if (this.state.p542 === "( ") {this.setState({p542: ") "});}
          if (this.state.p542 === ") ") {this.setState({p542: "¡ "});}
          if (this.state.p542 === "¡ ") {this.setState({p542: "! "});}
          if (this.state.p542 === "! ") {this.setState({p542: "¿ "});}
          if (this.state.p542 === "¿ ") {this.setState({p542: "? "});}
          if (this.state.p542 === "? ") {this.setState({p542: " "});}
  }
  p543() {
          if (this.state.p543 === "veces") {
                  this.setState({p543: "Veces"});
          } else {
                  this.setState({p543: "veces"});
          }
  }
  p544() {
          if (this.state.p544 === " ") {this.setState({p544: ", "});}
          if (this.state.p544 === ", ") {this.setState({p544: "; "});}
          if (this.state.p544 === "; ") {this.setState({p544: ": "});}
          if (this.state.p544 === ": ") {this.setState({p544: "( "});}
          if (this.state.p544 === "( ") {this.setState({p544: ") "});}
          if (this.state.p544 === ") ") {this.setState({p544: "¡ "});}
          if (this.state.p544 === "¡ ") {this.setState({p544: "! "});}
          if (this.state.p544 === "! ") {this.setState({p544: "¿ "});}
          if (this.state.p544 === "¿ ") {this.setState({p544: "? "});}
          if (this.state.p544 === "? ") {this.setState({p544: " "});}
  }
  p545() {
          if (this.state.p545 === "despierto") {
                  this.setState({p545: "Despierto"});
          } else {
                  this.setState({p545: "despierto"});
          }
  }
  p546() {
          if (this.state.p546 === " ") {this.setState({p546: ", "});}
          if (this.state.p546 === ", ") {this.setState({p546: "; "});}
          if (this.state.p546 === "; ") {this.setState({p546: ": "});}
          if (this.state.p546 === ": ") {this.setState({p546: "( "});}
          if (this.state.p546 === "( ") {this.setState({p546: ") "});}
          if (this.state.p546 === ") ") {this.setState({p546: "¡ "});}
          if (this.state.p546 === "¡ ") {this.setState({p546: "! "});}
          if (this.state.p546 === "! ") {this.setState({p546: "¿ "});}
          if (this.state.p546 === "¿ ") {this.setState({p546: "? "});}
          if (this.state.p546 === "? ") {this.setState({p546: " "});}
  }
  p547() {
          if (this.state.p547 === "con") {
                  this.setState({p547: "Con"});
          } else {
                  this.setState({p547: "con"});
          }
  }
  p548() {
          if (this.state.p548 === " ") {this.setState({p548: ", "});}
          if (this.state.p548 === ", ") {this.setState({p548: "; "});}
          if (this.state.p548 === "; ") {this.setState({p548: ": "});}
          if (this.state.p548 === ": ") {this.setState({p548: "( "});}
          if (this.state.p548 === "( ") {this.setState({p548: ") "});}
          if (this.state.p548 === ") ") {this.setState({p548: "¡ "});}
          if (this.state.p548 === "¡ ") {this.setState({p548: "! "});}
          if (this.state.p548 === "! ") {this.setState({p548: "¿ "});}
          if (this.state.p548 === "¿ ") {this.setState({p548: "? "});}
          if (this.state.p548 === "? ") {this.setState({p548: " "});}
  }
  p549() {
          if (this.state.p549 === "el") {
                  this.setState({p549: "El"});
          } else {
                  this.setState({p549: "el"});
          }
  }
  p550() {
          if (this.state.p550 === " ") {this.setState({p550: ", "});}
          if (this.state.p550 === ", ") {this.setState({p550: "; "});}
          if (this.state.p550 === "; ") {this.setState({p550: ": "});}
          if (this.state.p550 === ": ") {this.setState({p550: "( "});}
          if (this.state.p550 === "( ") {this.setState({p550: ") "});}
          if (this.state.p550 === ") ") {this.setState({p550: "¡ "});}
          if (this.state.p550 === "¡ ") {this.setState({p550: "! "});}
          if (this.state.p550 === "! ") {this.setState({p550: "¿ "});}
          if (this.state.p550 === "¿ ") {this.setState({p550: "? "});}
          if (this.state.p550 === "? ") {this.setState({p550: " "});}
  }
  p551() {
          if (this.state.p551 === "cuerpo") {
                  this.setState({p551: "Cuerpo"});
          } else {
                  this.setState({p551: "cuerpo"});
          }
  }
  p552() {
          if (this.state.p552 === " ") {this.setState({p552: ", "});}
          if (this.state.p552 === ", ") {this.setState({p552: "; "});}
          if (this.state.p552 === "; ") {this.setState({p552: ": "});}
          if (this.state.p552 === ": ") {this.setState({p552: "( "});}
          if (this.state.p552 === "( ") {this.setState({p552: ") "});}
          if (this.state.p552 === ") ") {this.setState({p552: "¡ "});}
          if (this.state.p552 === "¡ ") {this.setState({p552: "! "});}
          if (this.state.p552 === "! ") {this.setState({p552: "¿ "});}
          if (this.state.p552 === "¿ ") {this.setState({p552: "? "});}
          if (this.state.p552 === "? ") {this.setState({p552: " "});}
  }
  p553() {
          if (this.state.p553 === "helado") {
                  this.setState({p553: "Helado"});
          } else {
                  this.setState({p553: "helado"});
          }
  }
  p554() {
          if (this.state.p554 === " ") {this.setState({p554: ", "});}
          if (this.state.p554 === ", ") {this.setState({p554: "; "});}
          if (this.state.p554 === "; ") {this.setState({p554: ": "});}
          if (this.state.p554 === ": ") {this.setState({p554: "( "});}
          if (this.state.p554 === "( ") {this.setState({p554: ") "});}
          if (this.state.p554 === ") ") {this.setState({p554: "¡ "});}
          if (this.state.p554 === "¡ ") {this.setState({p554: "! "});}
          if (this.state.p554 === "! ") {this.setState({p554: "¿ "});}
          if (this.state.p554 === "¿ ") {this.setState({p554: "? "});}
          if (this.state.p554 === "? ") {this.setState({p554: " "});}
  }
  p555() {
          if (this.state.p555 === "tenso") {
                  this.setState({p555: "Tenso"});
          } else {
                  this.setState({p555: "tenso"});
          }
  }
  p556() {
          if (this.state.p556 === " ") {this.setState({p556: ", "});}
          if (this.state.p556 === ", ") {this.setState({p556: "; "});}
          if (this.state.p556 === "; ") {this.setState({p556: ": "});}
          if (this.state.p556 === ": ") {this.setState({p556: "( "});}
          if (this.state.p556 === "( ") {this.setState({p556: ") "});}
          if (this.state.p556 === ") ") {this.setState({p556: "¡ "});}
          if (this.state.p556 === "¡ ") {this.setState({p556: "! "});}
          if (this.state.p556 === "! ") {this.setState({p556: "¿ "});}
          if (this.state.p556 === "¿ ") {this.setState({p556: "? "});}
          if (this.state.p556 === "? ") {this.setState({p556: " "});}
  }
  p557() {
          if (this.state.p557 === "inmóvil") {
                  this.setState({p557: "Inmóvil"});
          } else {
                  this.setState({p557: "inmóvil"});
          }
  }
  p558() {
          if (this.state.p558 === " ") {this.setState({p558: ", "});}
          if (this.state.p558 === ", ") {this.setState({p558: "; "});}
          if (this.state.p558 === "; ") {this.setState({p558: ": "});}
          if (this.state.p558 === ": ") {this.setState({p558: "( "});}
          if (this.state.p558 === "( ") {this.setState({p558: ") "});}
          if (this.state.p558 === ") ") {this.setState({p558: "¡ "});}
          if (this.state.p558 === "¡ ") {this.setState({p558: "! "});}
          if (this.state.p558 === "! ") {this.setState({p558: "¿ "});}
          if (this.state.p558 === "¿ ") {this.setState({p558: "? "});}
          if (this.state.p558 === "? ") {this.setState({p558: " "});}
  }
  p559() {
          if (this.state.p559 === "porque") {
                  this.setState({p559: "Porque"});
          } else {
                  this.setState({p559: "porque"});
          }
  }
  p560() {
          if (this.state.p560 === " ") {this.setState({p560: ", "});}
          if (this.state.p560 === ", ") {this.setState({p560: "; "});}
          if (this.state.p560 === "; ") {this.setState({p560: ": "});}
          if (this.state.p560 === ": ") {this.setState({p560: "( "});}
          if (this.state.p560 === "( ") {this.setState({p560: ") "});}
          if (this.state.p560 === ") ") {this.setState({p560: "¡ "});}
          if (this.state.p560 === "¡ ") {this.setState({p560: "! "});}
          if (this.state.p560 === "! ") {this.setState({p560: "¿ "});}
          if (this.state.p560 === "¿ ") {this.setState({p560: "? "});}
          if (this.state.p560 === "? ") {this.setState({p560: " "});}
  }
  p561() {
          if (this.state.p561 === "el") {
                  this.setState({p561: "El"});
          } else {
                  this.setState({p561: "el"});
          }
  }
  p562() {
          if (this.state.p562 === " ") {this.setState({p562: ", "});}
          if (this.state.p562 === ", ") {this.setState({p562: "; "});}
          if (this.state.p562 === "; ") {this.setState({p562: ": "});}
          if (this.state.p562 === ": ") {this.setState({p562: "( "});}
          if (this.state.p562 === "( ") {this.setState({p562: ") "});}
          if (this.state.p562 === ") ") {this.setState({p562: "¡ "});}
          if (this.state.p562 === "¡ ") {this.setState({p562: "! "});}
          if (this.state.p562 === "! ") {this.setState({p562: "¿ "});}
          if (this.state.p562 === "¿ ") {this.setState({p562: "? "});}
          if (this.state.p562 === "? ") {this.setState({p562: " "});}
  }
  p563() {
          if (this.state.p563 === "sueño") {
                  this.setState({p563: "Sueño"});
          } else {
                  this.setState({p563: "sueño"});
          }
  }
  p564() {
          if (this.state.p564 === " ") {this.setState({p564: ", "});}
          if (this.state.p564 === ", ") {this.setState({p564: "; "});}
          if (this.state.p564 === "; ") {this.setState({p564: ": "});}
          if (this.state.p564 === ": ") {this.setState({p564: "( "});}
          if (this.state.p564 === "( ") {this.setState({p564: ") "});}
          if (this.state.p564 === ") ") {this.setState({p564: "¡ "});}
          if (this.state.p564 === "¡ ") {this.setState({p564: "! "});}
          if (this.state.p564 === "! ") {this.setState({p564: "¿ "});}
          if (this.state.p564 === "¿ ") {this.setState({p564: "? "});}
          if (this.state.p564 === "? ") {this.setState({p564: " "});}
  }
  p565() {
          if (this.state.p565 === "ha") {
                  this.setState({p565: "Ha"});
          } else {
                  this.setState({p565: "ha"});
          }
  }
  p566() {
          if (this.state.p566 === " ") {this.setState({p566: ", "});}
          if (this.state.p566 === ", ") {this.setState({p566: "; "});}
          if (this.state.p566 === "; ") {this.setState({p566: ": "});}
          if (this.state.p566 === ": ") {this.setState({p566: "( "});}
          if (this.state.p566 === "( ") {this.setState({p566: ") "});}
          if (this.state.p566 === ") ") {this.setState({p566: "¡ "});}
          if (this.state.p566 === "¡ ") {this.setState({p566: "! "});}
          if (this.state.p566 === "! ") {this.setState({p566: "¿ "});}
          if (this.state.p566 === "¿ ") {this.setState({p566: "? "});}
          if (this.state.p566 === "? ") {this.setState({p566: " "});}
  }
  p567() {
          if (this.state.p567 === "creado") {
                  this.setState({p567: "Creado"});
          } else {
                  this.setState({p567: "creado"});
          }
  }
  p568() {
          if (this.state.p568 === " ") {this.setState({p568: ", "});}
          if (this.state.p568 === ", ") {this.setState({p568: "; "});}
          if (this.state.p568 === "; ") {this.setState({p568: ": "});}
          if (this.state.p568 === ": ") {this.setState({p568: "( "});}
          if (this.state.p568 === "( ") {this.setState({p568: ") "});}
          if (this.state.p568 === ") ") {this.setState({p568: "¡ "});}
          if (this.state.p568 === "¡ ") {this.setState({p568: "! "});}
          if (this.state.p568 === "! ") {this.setState({p568: "¿ "});}
          if (this.state.p568 === "¿ ") {this.setState({p568: "? "});}
          if (this.state.p568 === "? ") {this.setState({p568: " "});}
  }
  p569() {
          if (this.state.p569 === "para") {
                  this.setState({p569: "Para"});
          } else {
                  this.setState({p569: "para"});
          }
  }
  p570() {
          if (this.state.p570 === " ") {this.setState({p570: ", "});}
          if (this.state.p570 === ", ") {this.setState({p570: "; "});}
          if (this.state.p570 === "; ") {this.setState({p570: ": "});}
          if (this.state.p570 === ": ") {this.setState({p570: "( "});}
          if (this.state.p570 === "( ") {this.setState({p570: ") "});}
          if (this.state.p570 === ") ") {this.setState({p570: "¡ "});}
          if (this.state.p570 === "¡ ") {this.setState({p570: "! "});}
          if (this.state.p570 === "! ") {this.setState({p570: "¿ "});}
          if (this.state.p570 === "¿ ") {this.setState({p570: "? "});}
          if (this.state.p570 === "? ") {this.setState({p570: " "});}
  }
  p571() {
          if (this.state.p571 === "mí") {
                  this.setState({p571: "Mí"});
          } else {
                  this.setState({p571: "mí"});
          }
  }
  p572() {
          if (this.state.p572 === " ") {this.setState({p572: ", "});}
          if (this.state.p572 === ", ") {this.setState({p572: "; "});}
          if (this.state.p572 === "; ") {this.setState({p572: ": "});}
          if (this.state.p572 === ": ") {this.setState({p572: "( "});}
          if (this.state.p572 === "( ") {this.setState({p572: ") "});}
          if (this.state.p572 === ") ") {this.setState({p572: "¡ "});}
          if (this.state.p572 === "¡ ") {this.setState({p572: "! "});}
          if (this.state.p572 === "! ") {this.setState({p572: "¿ "});}
          if (this.state.p572 === "¿ ") {this.setState({p572: "? "});}
          if (this.state.p572 === "? ") {this.setState({p572: " "});}
  }
  p573() {
          if (this.state.p573 === "con") {
                  this.setState({p573: "Con"});
          } else {
                  this.setState({p573: "con"});
          }
  }
  p574() {
          if (this.state.p574 === " ") {this.setState({p574: ", "});}
          if (this.state.p574 === ", ") {this.setState({p574: "; "});}
          if (this.state.p574 === "; ") {this.setState({p574: ": "});}
          if (this.state.p574 === ": ") {this.setState({p574: "( "});}
          if (this.state.p574 === "( ") {this.setState({p574: ") "});}
          if (this.state.p574 === ") ") {this.setState({p574: "¡ "});}
          if (this.state.p574 === "¡ ") {this.setState({p574: "! "});}
          if (this.state.p574 === "! ") {this.setState({p574: "¿ "});}
          if (this.state.p574 === "¿ ") {this.setState({p574: "? "});}
          if (this.state.p574 === "? ") {this.setState({p574: " "});}
  }
  p575() {
          if (this.state.p575 === "precisión") {
                  this.setState({p575: "Precisión"});
          } else {
                  this.setState({p575: "precisión"});
          }
  }
  p576() {
          if (this.state.p576 === " ") {this.setState({p576: ", "});}
          if (this.state.p576 === ", ") {this.setState({p576: "; "});}
          if (this.state.p576 === "; ") {this.setState({p576: ": "});}
          if (this.state.p576 === ": ") {this.setState({p576: "( "});}
          if (this.state.p576 === "( ") {this.setState({p576: ") "});}
          if (this.state.p576 === ") ") {this.setState({p576: "¡ "});}
          if (this.state.p576 === "¡ ") {this.setState({p576: "! "});}
          if (this.state.p576 === "! ") {this.setState({p576: "¿ "});}
          if (this.state.p576 === "¿ ") {this.setState({p576: "? "});}
          if (this.state.p576 === "? ") {this.setState({p576: " "});}
  }
  p577() {
          if (this.state.p577 === "el") {
                  this.setState({p577: "El"});
          } else {
                  this.setState({p577: "el"});
          }
  }
  p578() {
          if (this.state.p578 === " ") {this.setState({p578: ", "});}
          if (this.state.p578 === ", ") {this.setState({p578: "; "});}
          if (this.state.p578 === "; ") {this.setState({p578: ": "});}
          if (this.state.p578 === ": ") {this.setState({p578: "( "});}
          if (this.state.p578 === "( ") {this.setState({p578: ") "});}
          if (this.state.p578 === ") ") {this.setState({p578: "¡ "});}
          if (this.state.p578 === "¡ ") {this.setState({p578: "! "});}
          if (this.state.p578 === "! ") {this.setState({p578: "¿ "});}
          if (this.state.p578 === "¿ ") {this.setState({p578: "? "});}
          if (this.state.p578 === "? ") {this.setState({p578: " "});}
  }
  p579() {
          if (this.state.p579 === "paso") {
                  this.setState({p579: "Paso"});
          } else {
                  this.setState({p579: "paso"});
          }
  }
  p580() {
          if (this.state.p580 === " ") {this.setState({p580: ", "});}
          if (this.state.p580 === ", ") {this.setState({p580: "; "});}
          if (this.state.p580 === "; ") {this.setState({p580: ": "});}
          if (this.state.p580 === ": ") {this.setState({p580: "( "});}
          if (this.state.p580 === "( ") {this.setState({p580: ") "});}
          if (this.state.p580 === ") ") {this.setState({p580: "¡ "});}
          if (this.state.p580 === "¡ ") {this.setState({p580: "! "});}
          if (this.state.p580 === "! ") {this.setState({p580: "¿ "});}
          if (this.state.p580 === "¿ ") {this.setState({p580: "? "});}
          if (this.state.p580 === "? ") {this.setState({p580: " "});}
  }
  p581() {
          if (this.state.p581 === "cosquilleante") {
                  this.setState({p581: "Cosquilleante"});
          } else {
                  this.setState({p581: "cosquilleante"});
          }
  }
  p582() {
          if (this.state.p582 === " ") {this.setState({p582: ", "});}
          if (this.state.p582 === ", ") {this.setState({p582: "; "});}
          if (this.state.p582 === "; ") {this.setState({p582: ": "});}
          if (this.state.p582 === ": ") {this.setState({p582: "( "});}
          if (this.state.p582 === "( ") {this.setState({p582: ") "});}
          if (this.state.p582 === ") ") {this.setState({p582: "¡ "});}
          if (this.state.p582 === "¡ ") {this.setState({p582: "! "});}
          if (this.state.p582 === "! ") {this.setState({p582: "¿ "});}
          if (this.state.p582 === "¿ ") {this.setState({p582: "? "});}
          if (this.state.p582 === "? ") {this.setState({p582: " "});}
  }
  p583() {
          if (this.state.p583 === "de") {
                  this.setState({p583: "De"});
          } else {
                  this.setState({p583: "de"});
          }
  }
  p584() {
          if (this.state.p584 === " ") {this.setState({p584: ", "});}
          if (this.state.p584 === ", ") {this.setState({p584: "; "});}
          if (this.state.p584 === "; ") {this.setState({p584: ": "});}
          if (this.state.p584 === ": ") {this.setState({p584: "( "});}
          if (this.state.p584 === "( ") {this.setState({p584: ") "});}
          if (this.state.p584 === ") ") {this.setState({p584: "¡ "});}
          if (this.state.p584 === "¡ ") {this.setState({p584: "! "});}
          if (this.state.p584 === "! ") {this.setState({p584: "¿ "});}
          if (this.state.p584 === "¿ ") {this.setState({p584: "? "});}
          if (this.state.p584 === "? ") {this.setState({p584: " "});}
  }
  p585() {
          if (this.state.p585 === "la") {
                  this.setState({p585: "La"});
          } else {
                  this.setState({p585: "la"});
          }
  }
  p586() {
          if (this.state.p586 === " ") {this.setState({p586: ", "});}
          if (this.state.p586 === ", ") {this.setState({p586: "; "});}
          if (this.state.p586 === "; ") {this.setState({p586: ": "});}
          if (this.state.p586 === ": ") {this.setState({p586: "( "});}
          if (this.state.p586 === "( ") {this.setState({p586: ") "});}
          if (this.state.p586 === ") ") {this.setState({p586: "¡ "});}
          if (this.state.p586 === "¡ ") {this.setState({p586: "! "});}
          if (this.state.p586 === "! ") {this.setState({p586: "¿ "});}
          if (this.state.p586 === "¿ ") {this.setState({p586: "? "});}
          if (this.state.p586 === "? ") {this.setState({p586: " "});}
  }
  p587() {
          if (this.state.p587 === "aralia") {
                  this.setState({p587: "Aralia"});
          } else {
                  this.setState({p587: "aralia"});
          }
  }
  p588() {
          if (this.state.p588 === " ") {this.setState({p588: ", "});}
          if (this.state.p588 === ", ") {this.setState({p588: "; "});}
          if (this.state.p588 === "; ") {this.setState({p588: ": "});}
          if (this.state.p588 === ": ") {this.setState({p588: "( "});}
          if (this.state.p588 === "( ") {this.setState({p588: ") "});}
          if (this.state.p588 === ") ") {this.setState({p588: "¡ "});}
          if (this.state.p588 === "¡ ") {this.setState({p588: "! "});}
          if (this.state.p588 === "! ") {this.setState({p588: "¿ "});}
          if (this.state.p588 === "¿ ") {this.setState({p588: "? "});}
          if (this.state.p588 === "? ") {this.setState({p588: " "});}
  }
  p589() {
          if (this.state.p589 === "sobre") {
                  this.setState({p589: "Sobre"});
          } else {
                  this.setState({p589: "sobre"});
          }
  }
  p590() {
          if (this.state.p590 === " ") {this.setState({p590: ", "});}
          if (this.state.p590 === ", ") {this.setState({p590: "; "});}
          if (this.state.p590 === "; ") {this.setState({p590: ": "});}
          if (this.state.p590 === ": ") {this.setState({p590: "( "});}
          if (this.state.p590 === "( ") {this.setState({p590: ") "});}
          if (this.state.p590 === ") ") {this.setState({p590: "¡ "});}
          if (this.state.p590 === "¡ ") {this.setState({p590: "! "});}
          if (this.state.p590 === "! ") {this.setState({p590: "¿ "});}
          if (this.state.p590 === "¿ ") {this.setState({p590: "? "});}
          if (this.state.p590 === "? ") {this.setState({p590: " "});}
  }
  p591() {
          if (this.state.p591 === "mi") {
                  this.setState({p591: "Mi"});
          } else {
                  this.setState({p591: "mi"});
          }
  }
  p592() {
          if (this.state.p592 === " ") {this.setState({p592: ", "});}
          if (this.state.p592 === ", ") {this.setState({p592: "; "});}
          if (this.state.p592 === "; ") {this.setState({p592: ": "});}
          if (this.state.p592 === ": ") {this.setState({p592: "( "});}
          if (this.state.p592 === "( ") {this.setState({p592: ") "});}
          if (this.state.p592 === ") ") {this.setState({p592: "¡ "});}
          if (this.state.p592 === "¡ ") {this.setState({p592: "! "});}
          if (this.state.p592 === "! ") {this.setState({p592: "¿ "});}
          if (this.state.p592 === "¿ ") {this.setState({p592: "? "});}
          if (this.state.p592 === "? ") {this.setState({p592: " "});}
  }
  p593() {
          if (this.state.p593 === "piel") {
                  this.setState({p593: "Piel"});
          } else {
                  this.setState({p593: "piel"});
          }
  }
  p594() {
          if (this.state.p594 === " ") {this.setState({p594: ", "});}
          if (this.state.p594 === ", ") {this.setState({p594: "; "});}
          if (this.state.p594 === "; ") {this.setState({p594: ": "});}
          if (this.state.p594 === ": ") {this.setState({p594: "( "});}
          if (this.state.p594 === "( ") {this.setState({p594: ") "});}
          if (this.state.p594 === ") ") {this.setState({p594: "¡ "});}
          if (this.state.p594 === "¡ ") {this.setState({p594: "! "});}
          if (this.state.p594 === "! ") {this.setState({p594: "¿ "});}
          if (this.state.p594 === "¿ ") {this.setState({p594: "? "});}
          if (this.state.p594 === "? ") {this.setState({p594: " "});}
  }
  p595() {
          if (this.state.p595 === "su") {
                  this.setState({p595: "Su"});
          } else {
                  this.setState({p595: "su"});
          }
  }
  p596() {
          if (this.state.p596 === " ") {this.setState({p596: ", "});}
          if (this.state.p596 === ", ") {this.setState({p596: "; "});}
          if (this.state.p596 === "; ") {this.setState({p596: ": "});}
          if (this.state.p596 === ": ") {this.setState({p596: "( "});}
          if (this.state.p596 === "( ") {this.setState({p596: ") "});}
          if (this.state.p596 === ") ") {this.setState({p596: "¡ "});}
          if (this.state.p596 === "¡ ") {this.setState({p596: "! "});}
          if (this.state.p596 === "! ") {this.setState({p596: "¿ "});}
          if (this.state.p596 === "¿ ") {this.setState({p596: "? "});}
          if (this.state.p596 === "? ") {this.setState({p596: " "});}
  }
  p597() {
          if (this.state.p597 === "peso") {
                  this.setState({p597: "Peso"});
          } else {
                  this.setState({p597: "peso"});
          }
  }
  p598() {
          if (this.state.p598 === " ") {this.setState({p598: ", "});}
          if (this.state.p598 === ", ") {this.setState({p598: "; "});}
          if (this.state.p598 === "; ") {this.setState({p598: ": "});}
          if (this.state.p598 === ": ") {this.setState({p598: "( "});}
          if (this.state.p598 === "( ") {this.setState({p598: ") "});}
          if (this.state.p598 === ") ") {this.setState({p598: "¡ "});}
          if (this.state.p598 === "¡ ") {this.setState({p598: "! "});}
          if (this.state.p598 === "! ") {this.setState({p598: "¿ "});}
          if (this.state.p598 === "¿ ") {this.setState({p598: "? "});}
          if (this.state.p598 === "? ") {this.setState({p598: " "});}
  }
  p599() {
          if (this.state.p599 === "indefinible") {
                  this.setState({p599: "Indefinible"});
          } else {
                  this.setState({p599: "indefinible"});
          }
  }
  p600() {
          if (this.state.p600 === " ") {this.setState({p600: ", "});}
          if (this.state.p600 === ", ") {this.setState({p600: "; "});}
          if (this.state.p600 === "; ") {this.setState({p600: ": "});}
          if (this.state.p600 === ": ") {this.setState({p600: "( "});}
          if (this.state.p600 === "( ") {this.setState({p600: ") "});}
          if (this.state.p600 === ") ") {this.setState({p600: "¡ "});}
          if (this.state.p600 === "¡ ") {this.setState({p600: "! "});}
          if (this.state.p600 === "! ") {this.setState({p600: "¿ "});}
          if (this.state.p600 === "¿ ") {this.setState({p600: "? "});}
          if (this.state.p600 === "? ") {this.setState({p600: " "});}
  }
  p601() {
          if (this.state.p601 === "su") {
                  this.setState({p601: "Su"});
          } else {
                  this.setState({p601: "su"});
          }
  }
  p602() {
          if (this.state.p602 === " ") {this.setState({p602: ", "});}
          if (this.state.p602 === ", ") {this.setState({p602: "; "});}
          if (this.state.p602 === "; ") {this.setState({p602: ": "});}
          if (this.state.p602 === ": ") {this.setState({p602: "( "});}
          if (this.state.p602 === "( ") {this.setState({p602: ") "});}
          if (this.state.p602 === ") ") {this.setState({p602: "¡ "});}
          if (this.state.p602 === "¡ ") {this.setState({p602: "! "});}
          if (this.state.p602 === "! ") {this.setState({p602: "¿ "});}
          if (this.state.p602 === "¿ ") {this.setState({p602: "? "});}
          if (this.state.p602 === "? ") {this.setState({p602: " "});}
  }
  p603() {
          if (this.state.p603 === "consistencia") {
                  this.setState({p603: "Consistencia"});
          } else {
                  this.setState({p603: "consistencia"});
          }
  }
  p604() {
          if (this.state.p604 === " ") {this.setState({p604: ", "});}
          if (this.state.p604 === ", ") {this.setState({p604: "; "});}
          if (this.state.p604 === "; ") {this.setState({p604: ": "});}
          if (this.state.p604 === ": ") {this.setState({p604: "( "});}
          if (this.state.p604 === "( ") {this.setState({p604: ") "});}
          if (this.state.p604 === ") ") {this.setState({p604: "¡ "});}
          if (this.state.p604 === "¡ ") {this.setState({p604: "! "});}
          if (this.state.p604 === "! ") {this.setState({p604: "¿ "});}
          if (this.state.p604 === "¿ ") {this.setState({p604: "? "});}
          if (this.state.p604 === "? ") {this.setState({p604: " "});}
  }
  p605() {
          if (this.state.p605 === "de") {
                  this.setState({p605: "De"});
          } else {
                  this.setState({p605: "de"});
          }
  }
  p606() {
          if (this.state.p606 === " ") {this.setState({p606: ", "});}
          if (this.state.p606 === ", ") {this.setState({p606: "; "});}
          if (this.state.p606 === "; ") {this.setState({p606: ": "});}
          if (this.state.p606 === ": ") {this.setState({p606: "( "});}
          if (this.state.p606 === "( ") {this.setState({p606: ") "});}
          if (this.state.p606 === ") ") {this.setState({p606: "¡ "});}
          if (this.state.p606 === "¡ ") {this.setState({p606: "! "});}
          if (this.state.p606 === "! ") {this.setState({p606: "¿ "});}
          if (this.state.p606 === "¿ ") {this.setState({p606: "? "});}
          if (this.state.p606 === "? ") {this.setState({p606: " "});}
  }
  p607() {
          if (this.state.p607 === "entraña") {
                  this.setState({p607: "Entraña"});
          } else {
                  this.setState({p607: "entraña"});
          }
  }
  p608() {
          if (this.state.p608 === " ") {this.setState({p608: ", "});}
          if (this.state.p608 === ", ") {this.setState({p608: "; "});}
          if (this.state.p608 === "; ") {this.setState({p608: ". "});}
          if (this.state.p608 === ". ") {this.setState({p608: "( "});}
          if (this.state.p608 === "( ") {this.setState({p608: ") "});}
          if (this.state.p608 === ") ") {this.setState({p608: "¡ "});}
          if (this.state.p608 === "¡ ") {this.setState({p608: "! "});}
          if (this.state.p608 === "! ") {this.setState({p608: "¿ "});}
          if (this.state.p608 === "¿ ") {this.setState({p608: "? "});}
          if (this.state.p608 === "? ") {this.setState({p608: " "});}
  }
  p609() {
          if (this.state.p609 === "sin") {
                  this.setState({p609: "Sin"});
          } else {
                  this.setState({p609: "sin"});
          }
  }
  p610() {
          if (this.state.p610 === " ") {this.setState({p610: ", "});}
          if (this.state.p610 === ", ") {this.setState({p610: "; "});}
          if (this.state.p610 === "; ") {this.setState({p610: ": "});}
          if (this.state.p610 === ": ") {this.setState({p610: "( "});}
          if (this.state.p610 === "( ") {this.setState({p610: ") "});}
          if (this.state.p610 === ") ") {this.setState({p610: "¡ "});}
          if (this.state.p610 === "¡ ") {this.setState({p610: "! "});}
          if (this.state.p610 === "! ") {this.setState({p610: "¿ "});}
          if (this.state.p610 === "¿ ") {this.setState({p610: "? "});}
          if (this.state.p610 === "? ") {this.setState({p610: " "});}
  }
  p611() {
          if (this.state.p611 === "embargo") {
                  this.setState({p611: "Embargo"});
          } else {
                  this.setState({p611: "embargo"});
          }
  }
  p612() {
          if (this.state.p612 === " ") {this.setState({p612: ", "});}
          if (this.state.p612 === ", ") {this.setState({p612: "; "});}
          if (this.state.p612 === "; ") {this.setState({p612: ": "});}
          if (this.state.p612 === ": ") {this.setState({p612: "( "});}
          if (this.state.p612 === "( ") {this.setState({p612: ") "});}
          if (this.state.p612 === ") ") {this.setState({p612: "¡ "});}
          if (this.state.p612 === "¡ ") {this.setState({p612: "! "});}
          if (this.state.p612 === "! ") {this.setState({p612: "¿ "});}
          if (this.state.p612 === "¿ ") {this.setState({p612: "? "});}
          if (this.state.p612 === "? ") {this.setState({p612: " "});}
  }
  p613() {
          if (this.state.p613 === "siempre") {
                  this.setState({p613: "Siempre"});
          } else {
                  this.setState({p613: "siempre"});
          }
  }
  p614() {
          if (this.state.p614 === " ") {this.setState({p614: ", "});}
          if (this.state.p614 === ", ") {this.setState({p614: "; "});}
          if (this.state.p614 === "; ") {this.setState({p614: ": "});}
          if (this.state.p614 === ": ") {this.setState({p614: "( "});}
          if (this.state.p614 === "( ") {this.setState({p614: ") "});}
          if (this.state.p614 === ") ") {this.setState({p614: "¡ "});}
          if (this.state.p614 === "¡ ") {this.setState({p614: "! "});}
          if (this.state.p614 === "! ") {this.setState({p614: "¿ "});}
          if (this.state.p614 === "¿ ") {this.setState({p614: "? "});}
          if (this.state.p614 === "? ") {this.setState({p614: " "});}
  }
  p615() {
          if (this.state.p615 === "amanece") {
                  this.setState({p615: "Amanece"});
          } else {
                  this.setState({p615: "amanece"});
          }
  }
  p616() {
          if (this.state.p616 === " ") {this.setState({p616: ", "});}
          if (this.state.p616 === ", ") {this.setState({p616: "; "});}
          if (this.state.p616 === "; ") {this.setState({p616: ". "});}
          if (this.state.p616 === ". ") {this.setState({p616: "( "});}
          if (this.state.p616 === "( ") {this.setState({p616: ") "});}
          if (this.state.p616 === ") ") {this.setState({p616: "¡ "});}
          if (this.state.p616 === "¡ ") {this.setState({p616: "! "});}
          if (this.state.p616 === "! ") {this.setState({p616: "¿ "});}
          if (this.state.p616 === "¿ ") {this.setState({p616: "? "});}
          if (this.state.p616 === "? ") {this.setState({p616: " "});}
  }
  p617() {
          if (this.state.p617 === "estoy") {
                  this.setState({p617: "Estoy"});
          } else {
                  this.setState({p617: "estoy"});
          }
  }
  p618() {
          if (this.state.p618 === " ") {this.setState({p618: ", "});}
          if (this.state.p618 === ", ") {this.setState({p618: "; "});}
          if (this.state.p618 === "; ") {this.setState({p618: ": "});}
          if (this.state.p618 === ": ") {this.setState({p618: "( "});}
          if (this.state.p618 === "( ") {this.setState({p618: ") "});}
          if (this.state.p618 === ") ") {this.setState({p618: "¡ "});}
          if (this.state.p618 === "¡ ") {this.setState({p618: "! "});}
          if (this.state.p618 === "! ") {this.setState({p618: "¿ "});}
          if (this.state.p618 === "¿ ") {this.setState({p618: "? "});}
          if (this.state.p618 === "? ") {this.setState({p618: " "});}
  }
  p619() {
          if (this.state.p619 === "vivo") {
                  this.setState({p619: "Vivo"});
          } else {
                  this.setState({p619: "vivo"});
          }
  }
  p620() {
          if (this.state.p620 === " ") {this.setState({p620: ", "});}
          if (this.state.p620 === ", ") {this.setState({p620: "; "});}
          if (this.state.p620 === "; ") {this.setState({p620: ": "});}
          if (this.state.p620 === ": ") {this.setState({p620: "( "});}
          if (this.state.p620 === "( ") {this.setState({p620: ") "});}
          if (this.state.p620 === ") ") {this.setState({p620: "¡ "});}
          if (this.state.p620 === "¡ ") {this.setState({p620: "! "});}
          if (this.state.p620 === "! ") {this.setState({p620: "¿ "});}
          if (this.state.p620 === "¿ ") {this.setState({p620: "? "});}
          if (this.state.p620 === "? ") {this.setState({p620: " "});}
  }
  p621() {
          if (this.state.p621 === "y") {
                  this.setState({p621: "Y"});
          } else {
                  this.setState({p621: "y"});
          }
  }
  p622() {
          if (this.state.p622 === " ") {this.setState({p622: ", "});}
          if (this.state.p622 === ", ") {this.setState({p622: "; "});}
          if (this.state.p622 === "; ") {this.setState({p622: ": "});}
          if (this.state.p622 === ": ") {this.setState({p622: "( "});}
          if (this.state.p622 === "( ") {this.setState({p622: ") "});}
          if (this.state.p622 === ") ") {this.setState({p622: "¡ "});}
          if (this.state.p622 === "¡ ") {this.setState({p622: "! "});}
          if (this.state.p622 === "! ") {this.setState({p622: "¿ "});}
          if (this.state.p622 === "¿ ") {this.setState({p622: "? "});}
          if (this.state.p622 === "? ") {this.setState({p622: " "});}
  }
  p623() {
          if (this.state.p623 === "mi") {
                  this.setState({p623: "Mi"});
          } else {
                  this.setState({p623: "mi"});
          }
  }
  p624() {
          if (this.state.p624 === " ") {this.setState({p624: ", "});}
          if (this.state.p624 === ", ") {this.setState({p624: "; "});}
          if (this.state.p624 === "; ") {this.setState({p624: ": "});}
          if (this.state.p624 === ": ") {this.setState({p624: "( "});}
          if (this.state.p624 === "( ") {this.setState({p624: ") "});}
          if (this.state.p624 === ") ") {this.setState({p624: "¡ "});}
          if (this.state.p624 === "¡ ") {this.setState({p624: "! "});}
          if (this.state.p624 === "! ") {this.setState({p624: "¿ "});}
          if (this.state.p624 === "¿ ") {this.setState({p624: "? "});}
          if (this.state.p624 === "? ") {this.setState({p624: " "});}
  }
  p625() {
          if (this.state.p625 === "alma") {
                  this.setState({p625: "Alma"});
          } else {
                  this.setState({p625: "alma"});
          }
  }
  p626() {
          if (this.state.p626 === " ") {this.setState({p626: ", "});}
          if (this.state.p626 === ", ") {this.setState({p626: "; "});}
          if (this.state.p626 === "; ") {this.setState({p626: ": "});}
          if (this.state.p626 === ": ") {this.setState({p626: "( "});}
          if (this.state.p626 === "( ") {this.setState({p626: ") "});}
          if (this.state.p626 === ") ") {this.setState({p626: "¡ "});}
          if (this.state.p626 === "¡ ") {this.setState({p626: "! "});}
          if (this.state.p626 === "! ") {this.setState({p626: "¿ "});}
          if (this.state.p626 === "¿ ") {this.setState({p626: "? "});}
          if (this.state.p626 === "? ") {this.setState({p626: " "});}
  }
  p627() {
          if (this.state.p627 === "inútilmente") {
                  this.setState({p627: "Inútilmente"});
          } else {
                  this.setState({p627: "inútilmente"});
          }
  }
  p628() {
          if (this.state.p628 === " ") {this.setState({p628: ", "});}
          if (this.state.p628 === ", ") {this.setState({p628: "; "});}
          if (this.state.p628 === "; ") {this.setState({p628: ": "});}
          if (this.state.p628 === ": ") {this.setState({p628: "( "});}
          if (this.state.p628 === "( ") {this.setState({p628: ") "});}
          if (this.state.p628 === ") ") {this.setState({p628: "¡ "});}
          if (this.state.p628 === "¡ ") {this.setState({p628: "! "});}
          if (this.state.p628 === "! ") {this.setState({p628: "¿ "});}
          if (this.state.p628 === "¿ ") {this.setState({p628: "? "});}
          if (this.state.p628 === "? ") {this.setState({p628: " "});}
  }
  p629() {
          if (this.state.p629 === "se") {
                  this.setState({p629: "Se"});
          } else {
                  this.setState({p629: "se"});
          }
  }
  p630() {
          if (this.state.p630 === " ") {this.setState({p630: ", "});}
          if (this.state.p630 === ", ") {this.setState({p630: "; "});}
          if (this.state.p630 === "; ") {this.setState({p630: ": "});}
          if (this.state.p630 === ": ") {this.setState({p630: "( "});}
          if (this.state.p630 === "( ") {this.setState({p630: ") "});}
          if (this.state.p630 === ") ") {this.setState({p630: "¡ "});}
          if (this.state.p630 === "¡ ") {this.setState({p630: "! "});}
          if (this.state.p630 === "! ") {this.setState({p630: "¿ "});}
          if (this.state.p630 === "¿ ") {this.setState({p630: "? "});}
          if (this.state.p630 === "? ") {this.setState({p630: " "});}
  }
  p631() {
          if (this.state.p631 === "apresta") {
                  this.setState({p631: "Apresta"});
          } else {
                  this.setState({p631: "apresta"});
          }
  }
  p632() {
          if (this.state.p632 === " ") {this.setState({p632: ", "});}
          if (this.state.p632 === ", ") {this.setState({p632: "; "});}
          if (this.state.p632 === "; ") {this.setState({p632: ": "});}
          if (this.state.p632 === ": ") {this.setState({p632: "( "});}
          if (this.state.p632 === "( ") {this.setState({p632: ") "});}
          if (this.state.p632 === ") ") {this.setState({p632: "¡ "});}
          if (this.state.p632 === "¡ ") {this.setState({p632: "! "});}
          if (this.state.p632 === "! ") {this.setState({p632: "¿ "});}
          if (this.state.p632 === "¿ ") {this.setState({p632: "? "});}
          if (this.state.p632 === "? ") {this.setState({p632: " "});}
  }
  p633() {
          if (this.state.p633 === "y") {
                  this.setState({p633: "Y"});
          } else {
                  this.setState({p633: "y"});
          }
  }
  p634() {
          if (this.state.p634 === " ") {this.setState({p634: ", "});}
          if (this.state.p634 === ", ") {this.setState({p634: "; "});}
          if (this.state.p634 === "; ") {this.setState({p634: ": "});}
          if (this.state.p634 === ": ") {this.setState({p634: "( "});}
          if (this.state.p634 === "( ") {this.setState({p634: ") "});}
          if (this.state.p634 === ") ") {this.setState({p634: "¡ "});}
          if (this.state.p634 === "¡ ") {this.setState({p634: "! "});}
          if (this.state.p634 === "! ") {this.setState({p634: "¿ "});}
          if (this.state.p634 === "¿ ") {this.setState({p634: "? "});}
          if (this.state.p634 === "? ") {this.setState({p634: " "});}
  }
  p635() {
          if (this.state.p635 === "se") {
                  this.setState({p635: "Se"});
          } else {
                  this.setState({p635: "se"});
          }
  }
  p636() {
          if (this.state.p636 === " ") {this.setState({p636: ", "});}
          if (this.state.p636 === ", ") {this.setState({p636: "; "});}
          if (this.state.p636 === "; ") {this.setState({p636: ": "});}
          if (this.state.p636 === ": ") {this.setState({p636: "( "});}
          if (this.state.p636 === "( ") {this.setState({p636: ") "});}
          if (this.state.p636 === ") ") {this.setState({p636: "¡ "});}
          if (this.state.p636 === "¡ ") {this.setState({p636: "! "});}
          if (this.state.p636 === "! ") {this.setState({p636: "¿ "});}
          if (this.state.p636 === "¿ ") {this.setState({p636: "? "});}
          if (this.state.p636 === "? ") {this.setState({p636: " "});}
  }
  p637() {
          if (this.state.p637 === "perfecciona") {
                  this.setState({p637: "Perfecciona"});
          } else {
                  this.setState({p637: "perfecciona"});
          }
  }
  p638() {
          if (this.state.p638 === " ") {this.setState({p638: ", "});}
          if (this.state.p638 === ", ") {this.setState({p638: "; "});}
          if (this.state.p638 === "; ") {this.setState({p638: ". "});}
          if (this.state.p638 === ". ") {this.setState({p638: "( "});}
          if (this.state.p638 === "( ") {this.setState({p638: ") "});}
          if (this.state.p638 === ") ") {this.setState({p638: "¡ "});}
          if (this.state.p638 === "¡ ") {this.setState({p638: "! "});}
          if (this.state.p638 === "! ") {this.setState({p638: "¿ "});}
          if (this.state.p638 === "¿ ") {this.setState({p638: "? "});}
          if (this.state.p638 === "? ") {this.setState({p638: " "});}
  }

  render() {
    return(
      <div id="crucigramaWrap">
        <p>Escribe en el siguiente texto los signos de puntuación y las mayúsculas correspondientes.</p>
        <h1 align="center">LA MIGALA</h1>
        <h2 align="center">Juan José Arreola</h2>

        {this.state.p521 === "todas" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p521.bind(this)}>todas</button>
        }
        {this.state.p521 === "todas" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p521.bind(this)}><span style={{color:"red"}}>t</span>odas</button>
        }
        {this.state.p521 === "Todas" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p521.bind(this)}>Todas</button>
        }
        {this.state.p521 === "Todas" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p521.bind(this)}><span style={{color:"green"}}>T</span>odas</button>
        }

        {this.state.p522 === " " &&
                <button id="txtBut" onClick={this.p522.bind(this)}>&nbsp;</button>
        }
        {this.state.p522 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p522.bind(this)}>,&nbsp;</button>
        }
        {this.state.p522 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p522.bind(this)}>;&nbsp;</button>
        }
        {this.state.p522 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p522.bind(this)}>:&nbsp;</button>
        }
        {this.state.p522 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p522.bind(this)}>(&nbsp;</button>
        }
        {this.state.p522 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p522.bind(this)}>)&nbsp;</button>
        }
        {this.state.p522 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p522.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p522 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p522.bind(this)}>!&nbsp;</button>
        }
        {this.state.p522 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p522.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p522 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p522.bind(this)}>?&nbsp;</button>
        }
        {this.state.p522 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p522.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p522 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p522.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p522 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p522.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p522 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p522.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p522 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p522.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p522 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p522.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p522 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p522.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p522 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p522.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p522 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p522.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p523 === "las" &&
                <button id="txtBut" onClick={this.p523.bind(this)}>las</button>
        }
        {this.state.p523 === "Las" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p523.bind(this)}>Las</button>
        }
        {this.state.p523 === "Las" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p523.bind(this)}><span style={{color:"red"}}>L</span>as</button>
        }

        {this.state.p524 === " " &&
                <button id="txtBut" onClick={this.p524.bind(this)}>&nbsp;</button>
        }
        {this.state.p524 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p524.bind(this)}>,&nbsp;</button>
        }
        {this.state.p524 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p524.bind(this)}>;&nbsp;</button>
        }
        {this.state.p524 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p524.bind(this)}>:&nbsp;</button>
        }
        {this.state.p524 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p524.bind(this)}>(&nbsp;</button>
        }
        {this.state.p524 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p524.bind(this)}>)&nbsp;</button>
        }
        {this.state.p524 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p524.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p524 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p524.bind(this)}>!&nbsp;</button>
        }
        {this.state.p524 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p524.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p524 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p524.bind(this)}>?&nbsp;</button>
        }
        {this.state.p524 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p524.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p524 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p524.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p524 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p524.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p524 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p524.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p524 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p524.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p524 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p524.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p524 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p524.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p524 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p524.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p524 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p524.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p525 === "noches" &&
                <button id="txtBut" onClick={this.p525.bind(this)}>noches</button>
        }
        {this.state.p525 === "Noches" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p525.bind(this)}>Noches</button>
        }
        {this.state.p525 === "Noches" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p525.bind(this)}><span style={{color:"red"}}>N</span>oches</button>
        }

        {this.state.p526 === " " &&
                <button id="txtBut" onClick={this.p526.bind(this)}>&nbsp;</button>
        }
        {this.state.p526 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p526.bind(this)}>,&nbsp;</button>
        }
        {this.state.p526 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p526.bind(this)}>;&nbsp;</button>
        }
        {this.state.p526 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p526.bind(this)}>:&nbsp;</button>
        }
        {this.state.p526 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p526.bind(this)}>(&nbsp;</button>
        }
        {this.state.p526 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p526.bind(this)}>)&nbsp;</button>
        }
        {this.state.p526 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p526.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p526 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p526.bind(this)}>!&nbsp;</button>
        }
        {this.state.p526 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p526.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p526 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p526.bind(this)}>?&nbsp;</button>
        }
        {this.state.p526 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p526.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p526 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p526.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p526 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p526.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p526 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p526.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p526 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p526.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p526 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p526.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p526 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p526.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p526 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p526.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p526 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p526.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p527 === "tiemblo" &&
                <button id="txtBut" onClick={this.p527.bind(this)}>tiemblo</button>
        }
        {this.state.p527 === "Tiemblo" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p527.bind(this)}>Tiemblo</button>
        }
        {this.state.p527 === "Tiemblo" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p527.bind(this)}><span style={{color:"red"}}>T</span>iemblo</button>
        }

        {this.state.p528 === " " &&
                <button id="txtBut" onClick={this.p528.bind(this)}>&nbsp;</button>
        }
        {this.state.p528 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p528.bind(this)}>,&nbsp;</button>
        }
        {this.state.p528 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p528.bind(this)}>;&nbsp;</button>
        }
        {this.state.p528 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p528.bind(this)}>:&nbsp;</button>
        }
        {this.state.p528 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p528.bind(this)}>(&nbsp;</button>
        }
        {this.state.p528 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p528.bind(this)}>)&nbsp;</button>
        }
        {this.state.p528 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p528.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p528 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p528.bind(this)}>!&nbsp;</button>
        }
        {this.state.p528 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p528.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p528 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p528.bind(this)}>?&nbsp;</button>
        }
        {this.state.p528 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p528.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p528 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p528.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p528 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p528.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p528 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p528.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p528 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p528.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p528 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p528.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p528 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p528.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p528 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p528.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p528 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p528.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p529 === "en" &&
                <button id="txtBut" onClick={this.p529.bind(this)}>en</button>
        }
        {this.state.p529 === "En" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p529.bind(this)}>En</button>
        }
        {this.state.p529 === "En" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p529.bind(this)}><span style={{color:"red"}}>E</span>n</button>
        }

        {this.state.p530 === " " &&
                <button id="txtBut" onClick={this.p530.bind(this)}>&nbsp;</button>
        }
        {this.state.p530 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p530.bind(this)}>,&nbsp;</button>
        }
        {this.state.p530 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p530.bind(this)}>;&nbsp;</button>
        }
        {this.state.p530 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p530.bind(this)}>:&nbsp;</button>
        }
        {this.state.p530 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p530.bind(this)}>(&nbsp;</button>
        }
        {this.state.p530 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p530.bind(this)}>)&nbsp;</button>
        }
        {this.state.p530 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p530.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p530 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p530.bind(this)}>!&nbsp;</button>
        }
        {this.state.p530 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p530.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p530 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p530.bind(this)}>?&nbsp;</button>
        }
        {this.state.p530 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p530.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p530 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p530.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p530 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p530.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p530 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p530.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p530 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p530.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p530 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p530.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p530 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p530.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p530 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p530.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p530 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p530.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p531 === "espera" &&
                <button id="txtBut" onClick={this.p531.bind(this)}>espera</button>
        }
        {this.state.p531 === "Espera" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p531.bind(this)}>Espera</button>
        }
        {this.state.p531 === "Espera" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p531.bind(this)}><span style={{color:"red"}}>E</span>spera</button>
        }

        {this.state.p532 === " " &&
                <button id="txtBut" onClick={this.p532.bind(this)}>&nbsp;</button>
        }
        {this.state.p532 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p532.bind(this)}>,&nbsp;</button>
        }
        {this.state.p532 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p532.bind(this)}>;&nbsp;</button>
        }
        {this.state.p532 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p532.bind(this)}>:&nbsp;</button>
        }
        {this.state.p532 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p532.bind(this)}>(&nbsp;</button>
        }
        {this.state.p532 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p532.bind(this)}>)&nbsp;</button>
        }
        {this.state.p532 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p532.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p532 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p532.bind(this)}>!&nbsp;</button>
        }
        {this.state.p532 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p532.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p532 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p532.bind(this)}>?&nbsp;</button>
        }
        {this.state.p532 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p532.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p532 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p532.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p532 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p532.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p532 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p532.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p532 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p532.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p532 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p532.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p532 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p532.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p532 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p532.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p532 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p532.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p533 === "de" &&
                <button id="txtBut" onClick={this.p533.bind(this)}>de</button>
        }
        {this.state.p533 === "De" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p533.bind(this)}>De</button>
        }
        {this.state.p533 === "De" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p533.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p534 === " " &&
                <button id="txtBut" onClick={this.p534.bind(this)}>&nbsp;</button>
        }
        {this.state.p534 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p534.bind(this)}>,&nbsp;</button>
        }
        {this.state.p534 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p534.bind(this)}>;&nbsp;</button>
        }
        {this.state.p534 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p534.bind(this)}>:&nbsp;</button>
        }
        {this.state.p534 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p534.bind(this)}>(&nbsp;</button>
        }
        {this.state.p534 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p534.bind(this)}>)&nbsp;</button>
        }
        {this.state.p534 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p534.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p534 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p534.bind(this)}>!&nbsp;</button>
        }
        {this.state.p534 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p534.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p534 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p534.bind(this)}>?&nbsp;</button>
        }
        {this.state.p534 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p534.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p534 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p534.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p534 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p534.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p534 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p534.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p534 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p534.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p534 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p534.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p534 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p534.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p534 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p534.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p534 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p534.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p535 === "la" &&
                <button id="txtBut" onClick={this.p535.bind(this)}>la</button>
        }
        {this.state.p535 === "La" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p535.bind(this)}>La</button>
        }
        {this.state.p535 === "La" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p535.bind(this)}><span style={{color:"red"}}>L</span>a</button>
        }

        {this.state.p536 === " " &&
                <button id="txtBut" onClick={this.p536.bind(this)}>&nbsp;</button>
        }
        {this.state.p536 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p536.bind(this)}>,&nbsp;</button>
        }
        {this.state.p536 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p536.bind(this)}>;&nbsp;</button>
        }
        {this.state.p536 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p536.bind(this)}>:&nbsp;</button>
        }
        {this.state.p536 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p536.bind(this)}>(&nbsp;</button>
        }
        {this.state.p536 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p536.bind(this)}>)&nbsp;</button>
        }
        {this.state.p536 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p536.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p536 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p536.bind(this)}>!&nbsp;</button>
        }
        {this.state.p536 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p536.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p536 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p536.bind(this)}>?&nbsp;</button>
        }
        {this.state.p536 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p536.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p536 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p536.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p536 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p536.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p536 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p536.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p536 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p536.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p536 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p536.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p536 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p536.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p536 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p536.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p536 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p536.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p537 === "picadura" &&
                <button id="txtBut" onClick={this.p537.bind(this)}>picadura</button>
        }
        {this.state.p537 === "Picadura" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p537.bind(this)}>Picadura</button>
        }
        {this.state.p537 === "Picadura" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p537.bind(this)}><span style={{color:"red"}}>P</span>icadura</button>
        }

        {this.state.p538 === " " &&
                <button id="txtBut" onClick={this.p538.bind(this)}>&nbsp;</button>
        }
        {this.state.p538 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p538.bind(this)}>,&nbsp;</button>
        }
        {this.state.p538 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p538.bind(this)}>;&nbsp;</button>
        }
        {this.state.p538 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p538.bind(this)}>:&nbsp;</button>
        }
        {this.state.p538 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p538.bind(this)}>(&nbsp;</button>
        }
        {this.state.p538 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p538.bind(this)}>)&nbsp;</button>
        }
        {this.state.p538 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p538.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p538 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p538.bind(this)}>!&nbsp;</button>
        }
        {this.state.p538 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p538.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p538 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p538.bind(this)}>?&nbsp;</button>
        }
        {this.state.p538 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p538.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p538 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p538.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p538 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p538.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p538 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p538.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p538 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p538.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p538 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p538.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p538 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p538.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p538 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p538.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p538 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p538.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p539 === "mortal" &&
                <button id="txtBut" onClick={this.p539.bind(this)}>mortal</button>
        }
        {this.state.p539 === "Mortal" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p539.bind(this)}>Mortal</button>
        }
        {this.state.p539 === "Mortal" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p539.bind(this)}><span style={{color:"red"}}>M</span>ortal</button>
        }

        {this.state.p540 === " " &&
                <button id="txtBut" onClick={this.p540.bind(this)}>&nbsp;</button>
        }
        {this.state.p540 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p540.bind(this)}>,&nbsp;</button>
        }
        {this.state.p540 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p540.bind(this)}>;&nbsp;</button>
        }
        {this.state.p540 === ". " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p540.bind(this)}>.&nbsp;</button>
        }
        {this.state.p540 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p540.bind(this)}>(&nbsp;</button>
        }
        {this.state.p540 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p540.bind(this)}>)&nbsp;</button>
        }
        {this.state.p540 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p540.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p540 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p540.bind(this)}>!&nbsp;</button>
        }
        {this.state.p540 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p540.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p540 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p540.bind(this)}>?&nbsp;</button>
        }
        {this.state.p540 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p540.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p540 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p540.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p540 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p540.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p540 === ". " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p540.bind(this)}>.&nbsp;</button>
        }
        {this.state.p540 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p540.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p540 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p540.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p540 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p540.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p540 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p540.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p540 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p540.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p540 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p540.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p541 === "muchas" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p541.bind(this)}>muchas</button>
        }
        {this.state.p541 === "muchas" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p541.bind(this)}><span style={{color:"red"}}>m</span>uchas</button>
        }
        {this.state.p541 === "Muchas" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p541.bind(this)}>Muchas</button>
        }
        {this.state.p541 === "Muchas" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p541.bind(this)}><span style={{color:"green"}}>M</span>uchas</button>
        }

        {this.state.p542 === " " &&
                <button id="txtBut" onClick={this.p542.bind(this)}>&nbsp;</button>
        }
        {this.state.p542 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p542.bind(this)}>,&nbsp;</button>
        }
        {this.state.p542 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p542.bind(this)}>;&nbsp;</button>
        }
        {this.state.p542 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p542.bind(this)}>:&nbsp;</button>
        }
        {this.state.p542 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p542.bind(this)}>(&nbsp;</button>
        }
        {this.state.p542 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p542.bind(this)}>)&nbsp;</button>
        }
        {this.state.p542 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p542.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p542 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p542.bind(this)}>!&nbsp;</button>
        }
        {this.state.p542 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p542.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p542 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p542.bind(this)}>?&nbsp;</button>
        }
        {this.state.p542 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p542.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p542 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p542.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p542 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p542.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p542 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p542.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p542 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p542.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p542 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p542.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p542 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p542.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p542 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p542.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p542 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p542.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p543 === "veces" &&
                <button id="txtBut" onClick={this.p543.bind(this)}>veces</button>
        }
        {this.state.p543 === "Veces" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p543.bind(this)}>Veces</button>
        }
        {this.state.p543 === "Veces" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p543.bind(this)}><span style={{color:"red"}}>V</span>eces</button>
        }

        {this.state.p544 === " " &&
                <button id="txtBut" onClick={this.p544.bind(this)}>&nbsp;</button>
        }
        {this.state.p544 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p544.bind(this)}>,&nbsp;</button>
        }
        {this.state.p544 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p544.bind(this)}>;&nbsp;</button>
        }
        {this.state.p544 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p544.bind(this)}>:&nbsp;</button>
        }
        {this.state.p544 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p544.bind(this)}>(&nbsp;</button>
        }
        {this.state.p544 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p544.bind(this)}>)&nbsp;</button>
        }
        {this.state.p544 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p544.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p544 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p544.bind(this)}>!&nbsp;</button>
        }
        {this.state.p544 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p544.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p544 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p544.bind(this)}>?&nbsp;</button>
        }
        {this.state.p544 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p544.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p544 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p544.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p544 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p544.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p544 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p544.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p544 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p544.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p544 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p544.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p544 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p544.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p544 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p544.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p544 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p544.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p545 === "despierto" &&
                <button id="txtBut" onClick={this.p545.bind(this)}>despierto</button>
        }
        {this.state.p545 === "Despierto" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p545.bind(this)}>Despierto</button>
        }
        {this.state.p545 === "Despierto" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p545.bind(this)}><span style={{color:"red"}}>D</span>espierto</button>
        }

        {this.state.p546 === " " &&
                <button id="txtBut" onClick={this.p546.bind(this)}>&nbsp;</button>
        }
        {this.state.p546 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p546.bind(this)}>,&nbsp;</button>
        }
        {this.state.p546 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p546.bind(this)}>;&nbsp;</button>
        }
        {this.state.p546 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p546.bind(this)}>:&nbsp;</button>
        }
        {this.state.p546 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p546.bind(this)}>(&nbsp;</button>
        }
        {this.state.p546 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p546.bind(this)}>)&nbsp;</button>
        }
        {this.state.p546 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p546.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p546 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p546.bind(this)}>!&nbsp;</button>
        }
        {this.state.p546 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p546.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p546 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p546.bind(this)}>?&nbsp;</button>
        }
        {this.state.p546 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p546.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p546 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p546.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p546 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p546.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p546 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p546.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p546 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p546.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p546 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p546.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p546 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p546.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p546 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p546.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p546 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p546.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p547 === "con" &&
                <button id="txtBut" onClick={this.p547.bind(this)}>con</button>
        }
        {this.state.p547 === "Con" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p547.bind(this)}>Con</button>
        }
        {this.state.p547 === "Con" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p547.bind(this)}><span style={{color:"red"}}>C</span>on</button>
        }

        {this.state.p548 === " " &&
                <button id="txtBut" onClick={this.p548.bind(this)}>&nbsp;</button>
        }
        {this.state.p548 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p548.bind(this)}>,&nbsp;</button>
        }
        {this.state.p548 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p548.bind(this)}>;&nbsp;</button>
        }
        {this.state.p548 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p548.bind(this)}>:&nbsp;</button>
        }
        {this.state.p548 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p548.bind(this)}>(&nbsp;</button>
        }
        {this.state.p548 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p548.bind(this)}>)&nbsp;</button>
        }
        {this.state.p548 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p548.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p548 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p548.bind(this)}>!&nbsp;</button>
        }
        {this.state.p548 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p548.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p548 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p548.bind(this)}>?&nbsp;</button>
        }
        {this.state.p548 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p548.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p548 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p548.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p548 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p548.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p548 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p548.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p548 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p548.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p548 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p548.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p548 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p548.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p548 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p548.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p548 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p548.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p549 === "el" &&
                <button id="txtBut" onClick={this.p549.bind(this)}>el</button>
        }
        {this.state.p549 === "El" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p549.bind(this)}>El</button>
        }
        {this.state.p549 === "El" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p549.bind(this)}><span style={{color:"red"}}>E</span>l</button>
        }

        {this.state.p550 === " " &&
                <button id="txtBut" onClick={this.p550.bind(this)}>&nbsp;</button>
        }
        {this.state.p550 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p550.bind(this)}>,&nbsp;</button>
        }
        {this.state.p550 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p550.bind(this)}>;&nbsp;</button>
        }
        {this.state.p550 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p550.bind(this)}>:&nbsp;</button>
        }
        {this.state.p550 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p550.bind(this)}>(&nbsp;</button>
        }
        {this.state.p550 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p550.bind(this)}>)&nbsp;</button>
        }
        {this.state.p550 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p550.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p550 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p550.bind(this)}>!&nbsp;</button>
        }
        {this.state.p550 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p550.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p550 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p550.bind(this)}>?&nbsp;</button>
        }
        {this.state.p550 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p550.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p550 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p550.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p550 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p550.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p550 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p550.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p550 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p550.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p550 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p550.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p550 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p550.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p550 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p550.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p550 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p550.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p551 === "cuerpo" &&
                <button id="txtBut" onClick={this.p551.bind(this)}>cuerpo</button>
        }
        {this.state.p551 === "Cuerpo" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p551.bind(this)}>Cuerpo</button>
        }
        {this.state.p551 === "Cuerpo" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p551.bind(this)}><span style={{color:"red"}}>C</span>uerpo</button>
        }

        {this.state.p552 === " " &&
                <button id="txtBut" onClick={this.p552.bind(this)}>&nbsp;</button>
        }
        {this.state.p552 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p552.bind(this)}>,&nbsp;</button>
        }
        {this.state.p552 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p552.bind(this)}>;&nbsp;</button>
        }
        {this.state.p552 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p552.bind(this)}>:&nbsp;</button>
        }
        {this.state.p552 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p552.bind(this)}>(&nbsp;</button>
        }
        {this.state.p552 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p552.bind(this)}>)&nbsp;</button>
        }
        {this.state.p552 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p552.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p552 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p552.bind(this)}>!&nbsp;</button>
        }
        {this.state.p552 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p552.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p552 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p552.bind(this)}>?&nbsp;</button>
        }
        {this.state.p552 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p552.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p552 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p552.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p552 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p552.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p552 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p552.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p552 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p552.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p552 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p552.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p552 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p552.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p552 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p552.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p552 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p552.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p553 === "helado" &&
                <button id="txtBut" onClick={this.p553.bind(this)}>helado</button>
        }
        {this.state.p553 === "Helado" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p553.bind(this)}>Helado</button>
        }
        {this.state.p553 === "Helado" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p553.bind(this)}><span style={{color:"red"}}>H</span>elado</button>
        }

        {this.state.p554 === " " &&
                <button id="txtBut" onClick={this.p554.bind(this)}>&nbsp;</button>
        }
        {this.state.p554 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p554.bind(this)}>,&nbsp;</button>
        }
        {this.state.p554 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p554.bind(this)}>;&nbsp;</button>
        }
        {this.state.p554 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p554.bind(this)}>:&nbsp;</button>
        }
        {this.state.p554 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p554.bind(this)}>(&nbsp;</button>
        }
        {this.state.p554 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p554.bind(this)}>)&nbsp;</button>
        }
        {this.state.p554 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p554.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p554 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p554.bind(this)}>!&nbsp;</button>
        }
        {this.state.p554 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p554.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p554 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p554.bind(this)}>?&nbsp;</button>
        }
        {this.state.p554 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p554.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p554 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p554.bind(this)}>,&nbsp;</button>
        }
        {this.state.p554 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p554.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p554 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p554.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p554 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p554.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p554 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p554.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p554 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p554.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p554 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p554.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p554 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p554.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p554 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p554.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p555 === "tenso" &&
                <button id="txtBut" onClick={this.p555.bind(this)}>tenso</button>
        }
        {this.state.p555 === "Tenso" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p555.bind(this)}>Tenso</button>
        }
        {this.state.p555 === "Tenso" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p555.bind(this)}><span style={{color:"red"}}>T</span>enso</button>
        }

        {this.state.p556 === " " &&
                <button id="txtBut" onClick={this.p556.bind(this)}>&nbsp;</button>
        }
        {this.state.p556 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p556.bind(this)}>,&nbsp;</button>
        }
        {this.state.p556 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p556.bind(this)}>;&nbsp;</button>
        }
        {this.state.p556 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p556.bind(this)}>:&nbsp;</button>
        }
        {this.state.p556 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p556.bind(this)}>(&nbsp;</button>
        }
        {this.state.p556 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p556.bind(this)}>)&nbsp;</button>
        }
        {this.state.p556 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p556.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p556 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p556.bind(this)}>!&nbsp;</button>
        }
        {this.state.p556 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p556.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p556 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p556.bind(this)}>?&nbsp;</button>
        }
        {this.state.p556 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p556.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p556 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p556.bind(this)}>,&nbsp;</button>
        }
        {this.state.p556 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p556.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p556 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p556.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p556 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p556.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p556 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p556.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p556 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p556.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p556 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p556.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p556 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p556.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p556 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p556.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p557 === "inmóvil" &&
                <button id="txtBut" onClick={this.p557.bind(this)}>inmóvil</button>
        }
        {this.state.p557 === "Inmóvil" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p557.bind(this)}>Inmóvil</button>
        }
        {this.state.p557 === "Inmóvil" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p557.bind(this)}><span style={{color:"red"}}>I</span>nmóvil</button>
        }

        {this.state.p558 === " " &&
                <button id="txtBut" onClick={this.p558.bind(this)}>&nbsp;</button>
        }
        {this.state.p558 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p558.bind(this)}>,&nbsp;</button>
        }
        {this.state.p558 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p558.bind(this)}>;&nbsp;</button>
        }
        {this.state.p558 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p558.bind(this)}>:&nbsp;</button>
        }
        {this.state.p558 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p558.bind(this)}>(&nbsp;</button>
        }
        {this.state.p558 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p558.bind(this)}>)&nbsp;</button>
        }
        {this.state.p558 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p558.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p558 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p558.bind(this)}>!&nbsp;</button>
        }
        {this.state.p558 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p558.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p558 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p558.bind(this)}>?&nbsp;</button>
        }
        {this.state.p558 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p558.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p558 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p558.bind(this)}>,&nbsp;</button>
        }
        {this.state.p558 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p558.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p558 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p558.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p558 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p558.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p558 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p558.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p558 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p558.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p558 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p558.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p558 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p558.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p558 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p558.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p559 === "porque" &&
                <button id="txtBut" onClick={this.p559.bind(this)}>porque</button>
        }
        {this.state.p559 === "Porque" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p559.bind(this)}>Porque</button>
        }
        {this.state.p559 === "Porque" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p559.bind(this)}><span style={{color:"red"}}>P</span>orque</button>
        }

        {this.state.p560 === " " &&
                <button id="txtBut" onClick={this.p560.bind(this)}>&nbsp;</button>
        }
        {this.state.p560 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p560.bind(this)}>,&nbsp;</button>
        }
        {this.state.p560 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p560.bind(this)}>;&nbsp;</button>
        }
        {this.state.p560 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p560.bind(this)}>:&nbsp;</button>
        }
        {this.state.p560 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p560.bind(this)}>(&nbsp;</button>
        }
        {this.state.p560 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p560.bind(this)}>)&nbsp;</button>
        }
        {this.state.p560 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p560.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p560 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p560.bind(this)}>!&nbsp;</button>
        }
        {this.state.p560 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p560.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p560 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p560.bind(this)}>?&nbsp;</button>
        }
        {this.state.p560 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p560.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p560 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p560.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p560 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p560.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p560 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p560.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p560 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p560.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p560 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p560.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p560 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p560.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p560 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p560.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p560 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p560.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p561 === "el" &&
                <button id="txtBut" onClick={this.p561.bind(this)}>el</button>
        }
        {this.state.p561 === "El" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p561.bind(this)}>El</button>
        }
        {this.state.p561 === "El" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p561.bind(this)}><span style={{color:"red"}}>E</span>l</button>
        }

        {this.state.p562 === " " &&
                <button id="txtBut" onClick={this.p562.bind(this)}>&nbsp;</button>
        }
        {this.state.p562 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p562.bind(this)}>,&nbsp;</button>
        }
        {this.state.p562 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p562.bind(this)}>;&nbsp;</button>
        }
        {this.state.p562 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p562.bind(this)}>:&nbsp;</button>
        }
        {this.state.p562 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p562.bind(this)}>(&nbsp;</button>
        }
        {this.state.p562 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p562.bind(this)}>)&nbsp;</button>
        }
        {this.state.p562 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p562.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p562 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p562.bind(this)}>!&nbsp;</button>
        }
        {this.state.p562 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p562.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p562 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p562.bind(this)}>?&nbsp;</button>
        }
        {this.state.p562 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p562.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p562 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p562.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p562 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p562.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p562 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p562.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p562 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p562.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p562 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p562.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p562 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p562.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p562 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p562.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p562 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p562.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p563 === "sueño" &&
                <button id="txtBut" onClick={this.p563.bind(this)}>sueño</button>
        }
        {this.state.p563 === "Sueño" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p563.bind(this)}>Sueño</button>
        }
        {this.state.p563 === "Sueño" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p563.bind(this)}><span style={{color:"red"}}>S</span>ueño</button>
        }

        {this.state.p564 === " " &&
                <button id="txtBut" onClick={this.p564.bind(this)}>&nbsp;</button>
        }
        {this.state.p564 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p564.bind(this)}>,&nbsp;</button>
        }
        {this.state.p564 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p564.bind(this)}>;&nbsp;</button>
        }
        {this.state.p564 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p564.bind(this)}>:&nbsp;</button>
        }
        {this.state.p564 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p564.bind(this)}>(&nbsp;</button>
        }
        {this.state.p564 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p564.bind(this)}>)&nbsp;</button>
        }
        {this.state.p564 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p564.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p564 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p564.bind(this)}>!&nbsp;</button>
        }
        {this.state.p564 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p564.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p564 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p564.bind(this)}>?&nbsp;</button>
        }
        {this.state.p564 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p564.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p564 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p564.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p564 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p564.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p564 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p564.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p564 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p564.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p564 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p564.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p564 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p564.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p564 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p564.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p564 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p564.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p565 === "ha" &&
                <button id="txtBut" onClick={this.p565.bind(this)}>ha</button>
        }
        {this.state.p565 === "Ha" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p565.bind(this)}>Ha</button>
        }
        {this.state.p565 === "Ha" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p565.bind(this)}><span style={{color:"red"}}>H</span>a</button>
        }

        {this.state.p566 === " " &&
                <button id="txtBut" onClick={this.p566.bind(this)}>&nbsp;</button>
        }
        {this.state.p566 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p566.bind(this)}>,&nbsp;</button>
        }
        {this.state.p566 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p566.bind(this)}>;&nbsp;</button>
        }
        {this.state.p566 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p566.bind(this)}>:&nbsp;</button>
        }
        {this.state.p566 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p566.bind(this)}>(&nbsp;</button>
        }
        {this.state.p566 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p566.bind(this)}>)&nbsp;</button>
        }
        {this.state.p566 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p566.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p566 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p566.bind(this)}>!&nbsp;</button>
        }
        {this.state.p566 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p566.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p566 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p566.bind(this)}>?&nbsp;</button>
        }
        {this.state.p566 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p566.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p566 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p566.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p566 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p566.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p566 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p566.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p566 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p566.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p566 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p566.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p566 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p566.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p566 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p566.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p566 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p566.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p567 === "creado" &&
                <button id="txtBut" onClick={this.p567.bind(this)}>creado</button>
        }
        {this.state.p567 === "Creado" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p567.bind(this)}>Creado</button>
        }
        {this.state.p567 === "Creado" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p567.bind(this)}><span style={{color:"red"}}>C</span>reado</button>
        }

        {this.state.p568 === " " &&
                <button id="txtBut" onClick={this.p568.bind(this)}>&nbsp;</button>
        }
        {this.state.p568 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p568.bind(this)}>,&nbsp;</button>
        }
        {this.state.p568 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p568.bind(this)}>;&nbsp;</button>
        }
        {this.state.p568 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p568.bind(this)}>:&nbsp;</button>
        }
        {this.state.p568 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p568.bind(this)}>(&nbsp;</button>
        }
        {this.state.p568 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p568.bind(this)}>)&nbsp;</button>
        }
        {this.state.p568 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p568.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p568 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p568.bind(this)}>!&nbsp;</button>
        }
        {this.state.p568 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p568.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p568 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p568.bind(this)}>?&nbsp;</button>
        }
        {this.state.p568 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p568.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p568 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p568.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p568 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p568.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p568 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p568.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p568 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p568.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p568 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p568.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p568 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p568.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p568 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p568.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p568 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p568.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p569 === "para" &&
                <button id="txtBut" onClick={this.p569.bind(this)}>para</button>
        }
        {this.state.p569 === "Para" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p569.bind(this)}>Para</button>
        }
        {this.state.p569 === "Para" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p569.bind(this)}><span style={{color:"red"}}>P</span>ara</button>
        }

        {this.state.p570 === " " &&
                <button id="txtBut" onClick={this.p570.bind(this)}>&nbsp;</button>
        }
        {this.state.p570 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p570.bind(this)}>,&nbsp;</button>
        }
        {this.state.p570 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p570.bind(this)}>;&nbsp;</button>
        }
        {this.state.p570 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p570.bind(this)}>:&nbsp;</button>
        }
        {this.state.p570 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p570.bind(this)}>(&nbsp;</button>
        }
        {this.state.p570 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p570.bind(this)}>)&nbsp;</button>
        }
        {this.state.p570 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p570.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p570 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p570.bind(this)}>!&nbsp;</button>
        }
        {this.state.p570 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p570.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p570 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p570.bind(this)}>?&nbsp;</button>
        }
        {this.state.p570 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p570.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p570 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p570.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p570 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p570.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p570 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p570.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p570 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p570.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p570 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p570.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p570 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p570.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p570 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p570.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p570 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p570.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p571 === "mí" &&
                <button id="txtBut" onClick={this.p571.bind(this)}>mí</button>
        }
        {this.state.p571 === "Mí" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p571.bind(this)}>Mí</button>
        }
        {this.state.p571 === "Mí" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p571.bind(this)}><span style={{color:"red"}}>M</span>í</button>
        }

        {this.state.p572 === " " &&
                <button id="txtBut" onClick={this.p572.bind(this)}>&nbsp;</button>
        }
        {this.state.p572 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p572.bind(this)}>,&nbsp;</button>
        }
        {this.state.p572 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p572.bind(this)}>;&nbsp;</button>
        }
        {this.state.p572 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p572.bind(this)}>:&nbsp;</button>
        }
        {this.state.p572 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p572.bind(this)}>(&nbsp;</button>
        }
        {this.state.p572 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p572.bind(this)}>)&nbsp;</button>
        }
        {this.state.p572 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p572.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p572 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p572.bind(this)}>!&nbsp;</button>
        }
        {this.state.p572 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p572.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p572 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p572.bind(this)}>?&nbsp;</button>
        }
        {this.state.p572 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p572.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p572 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p572.bind(this)}>,&nbsp;</button>
        }
        {this.state.p572 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p572.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p572 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p572.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p572 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p572.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p572 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p572.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p572 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p572.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p572 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p572.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p572 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p572.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p572 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p572.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p573 === "con" &&
                <button id="txtBut" onClick={this.p573.bind(this)}>con</button>
        }
        {this.state.p573 === "Con" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p573.bind(this)}>Con</button>
        }
        {this.state.p573 === "Con" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p573.bind(this)}><span style={{color:"red"}}>C</span>on</button>
        }

        {this.state.p574 === " " &&
                <button id="txtBut" onClick={this.p574.bind(this)}>&nbsp;</button>
        }
        {this.state.p574 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p574.bind(this)}>,&nbsp;</button>
        }
        {this.state.p574 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p574.bind(this)}>;&nbsp;</button>
        }
        {this.state.p574 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p574.bind(this)}>:&nbsp;</button>
        }
        {this.state.p574 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p574.bind(this)}>(&nbsp;</button>
        }
        {this.state.p574 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p574.bind(this)}>)&nbsp;</button>
        }
        {this.state.p574 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p574.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p574 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p574.bind(this)}>!&nbsp;</button>
        }
        {this.state.p574 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p574.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p574 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p574.bind(this)}>?&nbsp;</button>
        }
        {this.state.p574 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p574.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p574 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p574.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p574 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p574.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p574 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p574.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p574 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p574.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p574 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p574.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p574 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p574.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p574 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p574.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p574 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p574.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p575 === "precisión" &&
                <button id="txtBut" onClick={this.p575.bind(this)}>precisión</button>
        }
        {this.state.p575 === "Precisión" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p575.bind(this)}>Precisión</button>
        }
        {this.state.p575 === "Precisión" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p575.bind(this)}><span style={{color:"red"}}>P</span>recisión</button>
        }

        {this.state.p576 === " " &&
                <button id="txtBut" onClick={this.p576.bind(this)}>&nbsp;</button>
        }
        {this.state.p576 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p576.bind(this)}>,&nbsp;</button>
        }
        {this.state.p576 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p576.bind(this)}>;&nbsp;</button>
        }
        {this.state.p576 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p576.bind(this)}>:&nbsp;</button>
        }
        {this.state.p576 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p576.bind(this)}>(&nbsp;</button>
        }
        {this.state.p576 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p576.bind(this)}>)&nbsp;</button>
        }
        {this.state.p576 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p576.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p576 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p576.bind(this)}>!&nbsp;</button>
        }
        {this.state.p576 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p576.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p576 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p576.bind(this)}>?&nbsp;</button>
        }
        {this.state.p576 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p576.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p576 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p576.bind(this)}>,&nbsp;</button>
        }
        {this.state.p576 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p576.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p576 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p576.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p576 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p576.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p576 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p576.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p576 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p576.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p576 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p576.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p576 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p576.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p576 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p576.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p577 === "el" &&
                <button id="txtBut" onClick={this.p577.bind(this)}>el</button>
        }
        {this.state.p577 === "El" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p577.bind(this)}>El</button>
        }
        {this.state.p577 === "El" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p577.bind(this)}><span style={{color:"red"}}>E</span>l</button>
        }

        {this.state.p578 === " " &&
                <button id="txtBut" onClick={this.p578.bind(this)}>&nbsp;</button>
        }
        {this.state.p578 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p578.bind(this)}>,&nbsp;</button>
        }
        {this.state.p578 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p578.bind(this)}>;&nbsp;</button>
        }
        {this.state.p578 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p578.bind(this)}>:&nbsp;</button>
        }
        {this.state.p578 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p578.bind(this)}>(&nbsp;</button>
        }
        {this.state.p578 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p578.bind(this)}>)&nbsp;</button>
        }
        {this.state.p578 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p578.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p578 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p578.bind(this)}>!&nbsp;</button>
        }
        {this.state.p578 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p578.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p578 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p578.bind(this)}>?&nbsp;</button>
        }
        {this.state.p578 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p578.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p578 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p578.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p578 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p578.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p578 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p578.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p578 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p578.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p578 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p578.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p578 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p578.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p578 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p578.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p578 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p578.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p579 === "paso" &&
                <button id="txtBut" onClick={this.p579.bind(this)}>paso</button>
        }
        {this.state.p579 === "Paso" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p579.bind(this)}>Paso</button>
        }
        {this.state.p579 === "Paso" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p579.bind(this)}><span style={{color:"red"}}>P</span>aso</button>
        }

        {this.state.p580 === " " &&
                <button id="txtBut" onClick={this.p580.bind(this)}>&nbsp;</button>
        }
        {this.state.p580 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p580.bind(this)}>,&nbsp;</button>
        }
        {this.state.p580 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p580.bind(this)}>;&nbsp;</button>
        }
        {this.state.p580 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p580.bind(this)}>:&nbsp;</button>
        }
        {this.state.p580 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p580.bind(this)}>(&nbsp;</button>
        }
        {this.state.p580 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p580.bind(this)}>)&nbsp;</button>
        }
        {this.state.p580 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p580.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p580 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p580.bind(this)}>!&nbsp;</button>
        }
        {this.state.p580 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p580.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p580 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p580.bind(this)}>?&nbsp;</button>
        }
        {this.state.p580 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p580.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p580 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p580.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p580 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p580.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p580 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p580.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p580 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p580.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p580 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p580.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p580 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p580.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p580 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p580.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p580 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p580.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p581 === "cosquilleante" &&
                <button id="txtBut" onClick={this.p581.bind(this)}>cosquilleante</button>
        }
        {this.state.p581 === "Cosquilleante" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p581.bind(this)}>Cosquilleante</button>
        }
        {this.state.p581 === "Cosquilleante" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p581.bind(this)}><span style={{color:"red"}}>C</span>osquilleante</button>
        }

        {this.state.p582 === " " &&
                <button id="txtBut" onClick={this.p582.bind(this)}>&nbsp;</button>
        }
        {this.state.p582 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p582.bind(this)}>,&nbsp;</button>
        }
        {this.state.p582 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p582.bind(this)}>;&nbsp;</button>
        }
        {this.state.p582 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p582.bind(this)}>:&nbsp;</button>
        }
        {this.state.p582 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p582.bind(this)}>(&nbsp;</button>
        }
        {this.state.p582 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p582.bind(this)}>)&nbsp;</button>
        }
        {this.state.p582 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p582.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p582 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p582.bind(this)}>!&nbsp;</button>
        }
        {this.state.p582 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p582.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p582 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p582.bind(this)}>?&nbsp;</button>
        }
        {this.state.p582 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p582.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p582 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p582.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p582 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p582.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p582 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p582.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p582 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p582.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p582 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p582.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p582 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p582.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p582 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p582.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p582 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p582.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p583 === "de" &&
                <button id="txtBut" onClick={this.p583.bind(this)}>de</button>
        }
        {this.state.p583 === "De" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p583.bind(this)}>De</button>
        }
        {this.state.p583 === "De" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p583.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p584 === " " &&
                <button id="txtBut" onClick={this.p584.bind(this)}>&nbsp;</button>
        }
        {this.state.p584 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p584.bind(this)}>,&nbsp;</button>
        }
        {this.state.p584 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p584.bind(this)}>;&nbsp;</button>
        }
        {this.state.p584 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p584.bind(this)}>:&nbsp;</button>
        }
        {this.state.p584 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p584.bind(this)}>(&nbsp;</button>
        }
        {this.state.p584 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p584.bind(this)}>)&nbsp;</button>
        }
        {this.state.p584 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p584.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p584 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p584.bind(this)}>!&nbsp;</button>
        }
        {this.state.p584 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p584.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p584 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p584.bind(this)}>?&nbsp;</button>
        }
        {this.state.p584 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p584.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p584 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p584.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p584 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p584.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p584 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p584.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p584 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p584.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p584 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p584.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p584 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p584.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p584 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p584.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p584 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p584.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p585 === "la" &&
                <button id="txtBut" onClick={this.p585.bind(this)}>la</button>
        }
        {this.state.p585 === "La" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p585.bind(this)}>La</button>
        }
        {this.state.p585 === "La" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p585.bind(this)}><span style={{color:"red"}}>L</span>a</button>
        }

        {this.state.p586 === " " &&
                <button id="txtBut" onClick={this.p586.bind(this)}>&nbsp;</button>
        }
        {this.state.p586 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p586.bind(this)}>,&nbsp;</button>
        }
        {this.state.p586 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p586.bind(this)}>;&nbsp;</button>
        }
        {this.state.p586 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p586.bind(this)}>:&nbsp;</button>
        }
        {this.state.p586 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p586.bind(this)}>(&nbsp;</button>
        }
        {this.state.p586 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p586.bind(this)}>)&nbsp;</button>
        }
        {this.state.p586 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p586.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p586 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p586.bind(this)}>!&nbsp;</button>
        }
        {this.state.p586 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p586.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p586 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p586.bind(this)}>?&nbsp;</button>
        }
        {this.state.p586 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p586.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p586 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p586.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p586 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p586.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p586 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p586.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p586 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p586.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p586 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p586.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p586 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p586.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p586 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p586.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p586 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p586.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p587 === "aralia" &&
                <button id="txtBut" onClick={this.p587.bind(this)}>aralia</button>
        }
        {this.state.p587 === "Aralia" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p587.bind(this)}>Aralia</button>
        }
        {this.state.p587 === "Aralia" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p587.bind(this)}><span style={{color:"red"}}>A</span>ralia</button>
        }

        {this.state.p588 === " " &&
                <button id="txtBut" onClick={this.p588.bind(this)}>&nbsp;</button>
        }
        {this.state.p588 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p588.bind(this)}>,&nbsp;</button>
        }
        {this.state.p588 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p588.bind(this)}>;&nbsp;</button>
        }
        {this.state.p588 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p588.bind(this)}>:&nbsp;</button>
        }
        {this.state.p588 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p588.bind(this)}>(&nbsp;</button>
        }
        {this.state.p588 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p588.bind(this)}>)&nbsp;</button>
        }
        {this.state.p588 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p588.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p588 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p588.bind(this)}>!&nbsp;</button>
        }
        {this.state.p588 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p588.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p588 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p588.bind(this)}>?&nbsp;</button>
        }
        {this.state.p588 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p588.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p588 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p588.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p588 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p588.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p588 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p588.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p588 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p588.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p588 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p588.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p588 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p588.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p588 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p588.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p588 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p588.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p589 === "sobre" &&
                <button id="txtBut" onClick={this.p589.bind(this)}>sobre</button>
        }
        {this.state.p589 === "Sobre" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p589.bind(this)}>Sobre</button>
        }
        {this.state.p589 === "Sobre" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p589.bind(this)}><span style={{color:"red"}}>S</span>obre</button>
        }

        {this.state.p590 === " " &&
                <button id="txtBut" onClick={this.p590.bind(this)}>&nbsp;</button>
        }
        {this.state.p590 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p590.bind(this)}>,&nbsp;</button>
        }
        {this.state.p590 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p590.bind(this)}>;&nbsp;</button>
        }
        {this.state.p590 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p590.bind(this)}>:&nbsp;</button>
        }
        {this.state.p590 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p590.bind(this)}>(&nbsp;</button>
        }
        {this.state.p590 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p590.bind(this)}>)&nbsp;</button>
        }
        {this.state.p590 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p590.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p590 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p590.bind(this)}>!&nbsp;</button>
        }
        {this.state.p590 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p590.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p590 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p590.bind(this)}>?&nbsp;</button>
        }
        {this.state.p590 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p590.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p590 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p590.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p590 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p590.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p590 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p590.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p590 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p590.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p590 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p590.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p590 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p590.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p590 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p590.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p590 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p590.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p591 === "mi" &&
                <button id="txtBut" onClick={this.p591.bind(this)}>mi</button>
        }
        {this.state.p591 === "Mi" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p591.bind(this)}>Mi</button>
        }
        {this.state.p591 === "Mi" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p591.bind(this)}><span style={{color:"red"}}>M</span>i</button>
        }

        {this.state.p592 === " " &&
                <button id="txtBut" onClick={this.p592.bind(this)}>&nbsp;</button>
        }
        {this.state.p592 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p592.bind(this)}>,&nbsp;</button>
        }
        {this.state.p592 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p592.bind(this)}>;&nbsp;</button>
        }
        {this.state.p592 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p592.bind(this)}>:&nbsp;</button>
        }
        {this.state.p592 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p592.bind(this)}>(&nbsp;</button>
        }
        {this.state.p592 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p592.bind(this)}>)&nbsp;</button>
        }
        {this.state.p592 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p592.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p592 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p592.bind(this)}>!&nbsp;</button>
        }
        {this.state.p592 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p592.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p592 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p592.bind(this)}>?&nbsp;</button>
        }
        {this.state.p592 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p592.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p592 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p592.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p592 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p592.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p592 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p592.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p592 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p592.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p592 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p592.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p592 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p592.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p592 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p592.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p592 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p592.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p593 === "piel" &&
                <button id="txtBut" onClick={this.p593.bind(this)}>piel</button>
        }
        {this.state.p593 === "Piel" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p593.bind(this)}>Piel</button>
        }
        {this.state.p593 === "Piel" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p593.bind(this)}><span style={{color:"red"}}>P</span>iel</button>
        }

        {this.state.p594 === " " &&
                <button id="txtBut" onClick={this.p594.bind(this)}>&nbsp;</button>
        }
        {this.state.p594 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p594.bind(this)}>,&nbsp;</button>
        }
        {this.state.p594 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p594.bind(this)}>;&nbsp;</button>
        }
        {this.state.p594 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p594.bind(this)}>:&nbsp;</button>
        }
        {this.state.p594 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p594.bind(this)}>(&nbsp;</button>
        }
        {this.state.p594 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p594.bind(this)}>)&nbsp;</button>
        }
        {this.state.p594 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p594.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p594 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p594.bind(this)}>!&nbsp;</button>
        }
        {this.state.p594 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p594.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p594 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p594.bind(this)}>?&nbsp;</button>
        }
        {this.state.p594 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p594.bind(this)}><span style={{background:"red"}}>&nbsp;</span>&nbsp;</button>
        }
        {this.state.p594 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p594.bind(this)}>,&nbsp;</button>
        }
        {this.state.p594 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p594.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p594 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p594.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p594 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p594.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p594 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p594.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p594 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p594.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p594 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p594.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p594 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p594.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p594 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p594.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p595 === "su" &&
                <button id="txtBut" onClick={this.p595.bind(this)}>su</button>
        }
        {this.state.p595 === "Su" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p595.bind(this)}>Su</button>
        }
        {this.state.p595 === "Su" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p595.bind(this)}><span style={{color:"red"}}>S</span>u</button>
        }

        {this.state.p596 === " " &&
                <button id="txtBut" onClick={this.p596.bind(this)}>&nbsp;</button>
        }
        {this.state.p596 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p596.bind(this)}>,&nbsp;</button>
        }
        {this.state.p596 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p596.bind(this)}>;&nbsp;</button>
        }
        {this.state.p596 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p596.bind(this)}>:&nbsp;</button>
        }
        {this.state.p596 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p596.bind(this)}>(&nbsp;</button>
        }
        {this.state.p596 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p596.bind(this)}>)&nbsp;</button>
        }
        {this.state.p596 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p596.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p596 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p596.bind(this)}>!&nbsp;</button>
        }
        {this.state.p596 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p596.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p596 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p596.bind(this)}>?&nbsp;</button>
        }
        {this.state.p596 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p596.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p596 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p596.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p596 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p596.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p596 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p596.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p596 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p596.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p596 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p596.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p596 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p596.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p596 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p596.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p596 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p596.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p597 === "peso" &&
                <button id="txtBut" onClick={this.p597.bind(this)}>peso</button>
        }
        {this.state.p597 === "Peso" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p597.bind(this)}>Peso</button>
        }
        {this.state.p597 === "Peso" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p597.bind(this)}><span style={{color:"red"}}>P</span>eso</button>
        }

        {this.state.p598 === " " &&
                <button id="txtBut" onClick={this.p598.bind(this)}>&nbsp;</button>
        }
        {this.state.p598 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p598.bind(this)}>,&nbsp;</button>
        }
        {this.state.p598 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p598.bind(this)}>;&nbsp;</button>
        }
        {this.state.p598 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p598.bind(this)}>:&nbsp;</button>
        }
        {this.state.p598 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p598.bind(this)}>(&nbsp;</button>
        }
        {this.state.p598 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p598.bind(this)}>)&nbsp;</button>
        }
        {this.state.p598 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p598.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p598 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p598.bind(this)}>!&nbsp;</button>
        }
        {this.state.p598 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p598.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p598 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p598.bind(this)}>?&nbsp;</button>
        }
        {this.state.p598 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p598.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p598 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p598.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p598 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p598.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p598 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p598.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p598 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p598.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p598 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p598.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p598 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p598.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p598 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p598.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p598 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p598.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p599 === "indefinible" &&
                <button id="txtBut" onClick={this.p599.bind(this)}>indefinible</button>
        }
        {this.state.p599 === "Indefinible" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p599.bind(this)}>Indefinible</button>
        }
        {this.state.p599 === "Indefinible" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p599.bind(this)}><span style={{color:"red"}}>I</span>ndefinible</button>
        }

        {this.state.p600 === " " &&
                <button id="txtBut" onClick={this.p600.bind(this)}>&nbsp;</button>
        }
        {this.state.p600 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p600.bind(this)}>,&nbsp;</button>
        }
        {this.state.p600 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p600.bind(this)}>;&nbsp;</button>
        }
        {this.state.p600 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p600.bind(this)}>:&nbsp;</button>
        }
        {this.state.p600 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p600.bind(this)}>(&nbsp;</button>
        }
        {this.state.p600 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p600.bind(this)}>)&nbsp;</button>
        }
        {this.state.p600 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p600.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p600 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p600.bind(this)}>!&nbsp;</button>
        }
        {this.state.p600 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p600.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p600 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p600.bind(this)}>?&nbsp;</button>
        }
        {this.state.p600 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p600.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p600 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p600.bind(this)}>,&nbsp;</button>
        }
        {this.state.p600 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p600.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p600 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p600.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p600 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p600.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p600 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p600.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p600 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p600.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p600 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p600.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p600 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p600.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p600 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p600.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p601 === "su" &&
                <button id="txtBut" onClick={this.p601.bind(this)}>su</button>
        }
        {this.state.p601 === "Su" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p601.bind(this)}>Su</button>
        }
        {this.state.p601 === "Su" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p601.bind(this)}><span style={{color:"red"}}>S</span>u</button>
        }

        {this.state.p602 === " " &&
                <button id="txtBut" onClick={this.p602.bind(this)}>&nbsp;</button>
        }
        {this.state.p602 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p602.bind(this)}>,&nbsp;</button>
        }
        {this.state.p602 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p602.bind(this)}>;&nbsp;</button>
        }
        {this.state.p602 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p602.bind(this)}>:&nbsp;</button>
        }
        {this.state.p602 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p602.bind(this)}>(&nbsp;</button>
        }
        {this.state.p602 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p602.bind(this)}>)&nbsp;</button>
        }
        {this.state.p602 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p602.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p602 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p602.bind(this)}>!&nbsp;</button>
        }
        {this.state.p602 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p602.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p602 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p602.bind(this)}>?&nbsp;</button>
        }
        {this.state.p602 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p602.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p602 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p602.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p602 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p602.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p602 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p602.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p602 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p602.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p602 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p602.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p602 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p602.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p602 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p602.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p602 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p602.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p603 === "consistencia" &&
                <button id="txtBut" onClick={this.p603.bind(this)}>consistencia</button>
        }
        {this.state.p603 === "Consistencia" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p603.bind(this)}>Consistencia</button>
        }
        {this.state.p603 === "Consistencia" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p603.bind(this)}><span style={{color:"red"}}>C</span>onsistencia</button>
        }

        {this.state.p604 === " " &&
                <button id="txtBut" onClick={this.p604.bind(this)}>&nbsp;</button>
        }
        {this.state.p604 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p604.bind(this)}>,&nbsp;</button>
        }
        {this.state.p604 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p604.bind(this)}>;&nbsp;</button>
        }
        {this.state.p604 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p604.bind(this)}>:&nbsp;</button>
        }
        {this.state.p604 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p604.bind(this)}>(&nbsp;</button>
        }
        {this.state.p604 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p604.bind(this)}>)&nbsp;</button>
        }
        {this.state.p604 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p604.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p604 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p604.bind(this)}>!&nbsp;</button>
        }
        {this.state.p604 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p604.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p604 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p604.bind(this)}>?&nbsp;</button>
        }
        {this.state.p604 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p604.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p604 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p604.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p604 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p604.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p604 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p604.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p604 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p604.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p604 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p604.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p604 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p604.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p604 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p604.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p604 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p604.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p605 === "de" &&
                <button id="txtBut" onClick={this.p605.bind(this)}>de</button>
        }
        {this.state.p605 === "De" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p605.bind(this)}>De</button>
        }
        {this.state.p605 === "De" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p605.bind(this)}><span style={{color:"red"}}>D</span>e</button>
        }

        {this.state.p606 === " " &&
                <button id="txtBut" onClick={this.p606.bind(this)}>&nbsp;</button>
        }
        {this.state.p606 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p606.bind(this)}>,&nbsp;</button>
        }
        {this.state.p606 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p606.bind(this)}>;&nbsp;</button>
        }
        {this.state.p606 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p606.bind(this)}>:&nbsp;</button>
        }
        {this.state.p606 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p606.bind(this)}>(&nbsp;</button>
        }
        {this.state.p606 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p606.bind(this)}>)&nbsp;</button>
        }
        {this.state.p606 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p606.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p606 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p606.bind(this)}>!&nbsp;</button>
        }
        {this.state.p606 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p606.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p606 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p606.bind(this)}>?&nbsp;</button>
        }
        {this.state.p606 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p606.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p606 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p606.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p606 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p606.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p606 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p606.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p606 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p606.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p606 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p606.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p606 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p606.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p606 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p606.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p606 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p606.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p607 === "entraña" &&
                <button id="txtBut" onClick={this.p607.bind(this)}>entraña</button>
        }
        {this.state.p607 === "Entraña" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p607.bind(this)}>Entraña</button>
        }
        {this.state.p607 === "Entraña" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p607.bind(this)}><span style={{color:"red"}}>E</span>ntraña</button>
        }

        {this.state.p608 === " " &&
                <button id="txtBut" onClick={this.p608.bind(this)}>&nbsp;</button>
        }
        {this.state.p608 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p608.bind(this)}>,&nbsp;</button>
        }
        {this.state.p608 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p608.bind(this)}>;&nbsp;</button>
        }
        {this.state.p608 === ". " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p608.bind(this)}>.&nbsp;</button>
        }
        {this.state.p608 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p608.bind(this)}>(&nbsp;</button>
        }
        {this.state.p608 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p608.bind(this)}>)&nbsp;</button>
        }
        {this.state.p608 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p608.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p608 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p608.bind(this)}>!&nbsp;</button>
        }
        {this.state.p608 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p608.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p608 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p608.bind(this)}>?&nbsp;</button>
        }
        {this.state.p608 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p608.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p608 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p608.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p608 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p608.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p608 === ". " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p608.bind(this)}>.&nbsp;</button>
        }
        {this.state.p608 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p608.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p608 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p608.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p608 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p608.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p608 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p608.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p608 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p608.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p608 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p608.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p609 === "sin" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p609.bind(this)}>sin</button>
        }
        {this.state.p609 === "sin" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p609.bind(this)}><span style={{color:"red"}}>s</span>in</button>
        }
        {this.state.p609 === "Sin" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p609.bind(this)}>Sin</button>
        }
        {this.state.p609 === "Sin" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p609.bind(this)}>Sin</button>
        }

        {this.state.p610 === " " &&
                <button id="txtBut" onClick={this.p610.bind(this)}>&nbsp;</button>
        }
        {this.state.p610 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p610.bind(this)}>,&nbsp;</button>
        }
        {this.state.p610 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p610.bind(this)}>;&nbsp;</button>
        }
        {this.state.p610 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p610.bind(this)}>:&nbsp;</button>
        }
        {this.state.p610 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p610.bind(this)}>(&nbsp;</button>
        }
        {this.state.p610 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p610.bind(this)}>)&nbsp;</button>
        }
        {this.state.p610 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p610.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p610 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p610.bind(this)}>!&nbsp;</button>
        }
        {this.state.p610 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p610.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p610 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p610.bind(this)}>?&nbsp;</button>
        }
        {this.state.p610 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p610.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p610 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p610.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p610 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p610.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p610 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p610.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p610 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p610.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p610 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p610.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p610 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p610.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p610 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p610.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p610 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p610.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p611 === "embargo" &&
                <button id="txtBut" onClick={this.p611.bind(this)}>embargo</button>
        }
        {this.state.p611 === "Embargo" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p611.bind(this)}>Embargo</button>
        }
        {this.state.p611 === "Embargo" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p611.bind(this)}><span style={{color:"red"}}>E</span>mbargo</button>
        }

        {this.state.p612 === " " &&
                <button id="txtBut" onClick={this.p612.bind(this)}>&nbsp;</button>
        }
        {this.state.p612 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p612.bind(this)}>,&nbsp;</button>
        }
        {this.state.p612 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p612.bind(this)}>;&nbsp;</button>
        }
        {this.state.p612 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p612.bind(this)}>:&nbsp;</button>
        }
        {this.state.p612 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p612.bind(this)}>(&nbsp;</button>
        }
        {this.state.p612 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p612.bind(this)}>)&nbsp;</button>
        }
        {this.state.p612 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p612.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p612 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p612.bind(this)}>!&nbsp;</button>
        }
        {this.state.p612 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p612.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p612 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p612.bind(this)}>?&nbsp;</button>
        }
        {this.state.p612 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p612.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p612 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p612.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p612 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p612.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p612 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p612.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p612 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p612.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p612 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p612.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p612 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p612.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p612 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p612.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p612 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p612.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p613 === "siempre" &&
                <button id="txtBut" onClick={this.p613.bind(this)}>siempre</button>
        }
        {this.state.p613 === "Siempre" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p613.bind(this)}>Siempre</button>
        }
        {this.state.p613 === "Siempre" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p613.bind(this)}><span style={{color:"red"}}>S</span>iempre</button>
        }

        {this.state.p614 === " " &&
                <button id="txtBut" onClick={this.p614.bind(this)}>&nbsp;</button>
        }
        {this.state.p614 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p614.bind(this)}>,&nbsp;</button>
        }
        {this.state.p614 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p614.bind(this)}>;&nbsp;</button>
        }
        {this.state.p614 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p614.bind(this)}>:&nbsp;</button>
        }
        {this.state.p614 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p614.bind(this)}>(&nbsp;</button>
        }
        {this.state.p614 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p614.bind(this)}>)&nbsp;</button>
        }
        {this.state.p614 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p614.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p614 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p614.bind(this)}>!&nbsp;</button>
        }
        {this.state.p614 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p614.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p614 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p614.bind(this)}>?&nbsp;</button>
        }
        {this.state.p614 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p614.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p614 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p614.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p614 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p614.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p614 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p614.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p614 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p614.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p614 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p614.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p614 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p614.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p614 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p614.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p614 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p614.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p615 === "amanece" &&
                <button id="txtBut" onClick={this.p615.bind(this)}>amanece</button>
        }
        {this.state.p615 === "Amanece" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p615.bind(this)}>Amanece</button>
        }
        {this.state.p615 === "Amanece" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p615.bind(this)}><span style={{color:"red"}}>A</span>manece</button>
        }

        {this.state.p616 === " " &&
                <button id="txtBut" onClick={this.p616.bind(this)}>&nbsp;</button>
        }
        {this.state.p616 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p616.bind(this)}>,&nbsp;</button>
        }
        {this.state.p616 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p616.bind(this)}>;&nbsp;</button>
        }
        {this.state.p616 === ". " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p616.bind(this)}>.&nbsp;</button>
        }
        {this.state.p616 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p616.bind(this)}>(&nbsp;</button>
        }
        {this.state.p616 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p616.bind(this)}>)&nbsp;</button>
        }
        {this.state.p616 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p616.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p616 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p616.bind(this)}>!&nbsp;</button>
        }
        {this.state.p616 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p616.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p616 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p616.bind(this)}>?&nbsp;</button>
        }
        {this.state.p616 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p616.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p616 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p616.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p616 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p616.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p616 === ". " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p616.bind(this)}>.&nbsp;</button>
        }
        {this.state.p616 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p616.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p616 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p616.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p616 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p616.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p616 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p616.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p616 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p616.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p616 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p616.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p617 === "estoy" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p617.bind(this)}>estoy</button>
        }
        {this.state.p617 === "estoy" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p617.bind(this)}><span style={{color:"red"}}>e</span>stoy</button>
        }
        {this.state.p617 === "Estoy" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p617.bind(this)}>Estoy</button>
        }
        {this.state.p617 === "Estoy" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p617.bind(this)}><span style={{color:"green"}}>E</span>stoy</button>
        }

        {this.state.p618 === " " &&
                <button id="txtBut" onClick={this.p618.bind(this)}>&nbsp;</button>
        }
        {this.state.p618 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p618.bind(this)}>,&nbsp;</button>
        }
        {this.state.p618 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p618.bind(this)}>;&nbsp;</button>
        }
        {this.state.p618 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p618.bind(this)}>:&nbsp;</button>
        }
        {this.state.p618 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p618.bind(this)}>(&nbsp;</button>
        }
        {this.state.p618 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p618.bind(this)}>)&nbsp;</button>
        }
        {this.state.p618 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p618.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p618 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p618.bind(this)}>!&nbsp;</button>
        }
        {this.state.p618 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p618.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p618 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p618.bind(this)}>?&nbsp;</button>
        }
        {this.state.p618 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p618.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p618 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p618.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p618 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p618.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p618 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p618.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p618 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p618.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p618 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p618.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p618 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p618.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p618 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p618.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p618 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p618.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p619 === "vivo" &&
                <button id="txtBut" onClick={this.p619.bind(this)}>vivo</button>
        }
        {this.state.p619 === "Vivo" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p619.bind(this)}>Vivo</button>
        }
        {this.state.p619 === "Vivo" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p619.bind(this)}><span style={{color:"red"}}>V</span>ivo</button>
        }

        {this.state.p620 === " " &&
                <button id="txtBut" onClick={this.p620.bind(this)}>&nbsp;</button>
        }
        {this.state.p620 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p620.bind(this)}>,&nbsp;</button>
        }
        {this.state.p620 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p620.bind(this)}>;&nbsp;</button>
        }
        {this.state.p620 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p620.bind(this)}>:&nbsp;</button>
        }
        {this.state.p620 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p620.bind(this)}>(&nbsp;</button>
        }
        {this.state.p620 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p620.bind(this)}>)&nbsp;</button>
        }
        {this.state.p620 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p620.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p620 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p620.bind(this)}>!&nbsp;</button>
        }
        {this.state.p620 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p620.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p620 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p620.bind(this)}>?&nbsp;</button>
        }
        {this.state.p620 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p620.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p620 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p620.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p620 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p620.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p620 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p620.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p620 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p620.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p620 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p620.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p620 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p620.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p620 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p620.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p620 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p620.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p621 === "y" &&
                <button id="txtBut" onClick={this.p621.bind(this)}>y</button>
        }
        {this.state.p621 === "Y" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p621.bind(this)}>Y</button>
        }
        {this.state.p621 === "Y" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p621.bind(this)}><span style={{color:"red"}}>Y</span></button>
        }

        {this.state.p622 === " " &&
                <button id="txtBut" onClick={this.p622.bind(this)}>&nbsp;</button>
        }
        {this.state.p622 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p622.bind(this)}>,&nbsp;</button>
        }
        {this.state.p622 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p622.bind(this)}>;&nbsp;</button>
        }
        {this.state.p622 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p622.bind(this)}>:&nbsp;</button>
        }
        {this.state.p622 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p622.bind(this)}>(&nbsp;</button>
        }
        {this.state.p622 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p622.bind(this)}>)&nbsp;</button>
        }
        {this.state.p622 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p622.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p622 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p622.bind(this)}>!&nbsp;</button>
        }
        {this.state.p622 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p622.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p622 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p622.bind(this)}>?&nbsp;</button>
        }
        {this.state.p622 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p622.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p622 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p622.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p622 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p622.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p622 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p622.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p622 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p622.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p622 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p622.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p622 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p622.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p622 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p622.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p622 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p622.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p623 === "mi" &&
                <button id="txtBut" onClick={this.p623.bind(this)}>mi</button>
        }
        {this.state.p623 === "Mi" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p623.bind(this)}>Mi</button>
        }
        {this.state.p623 === "Mi" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p623.bind(this)}><span style={{color:"red"}}>M</span>i</button>
        }

        {this.state.p624 === " " &&
                <button id="txtBut" onClick={this.p624.bind(this)}>&nbsp;</button>
        }
        {this.state.p624 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p624.bind(this)}>,&nbsp;</button>
        }
        {this.state.p624 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p624.bind(this)}>;&nbsp;</button>
        }
        {this.state.p624 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p624.bind(this)}>:&nbsp;</button>
        }
        {this.state.p624 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p624.bind(this)}>(&nbsp;</button>
        }
        {this.state.p624 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p624.bind(this)}>)&nbsp;</button>
        }
        {this.state.p624 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p624.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p624 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p624.bind(this)}>!&nbsp;</button>
        }
        {this.state.p624 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p624.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p624 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p624.bind(this)}>?&nbsp;</button>
        }
        {this.state.p624 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p624.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p624 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p624.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p624 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p624.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p624 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p624.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p624 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p624.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p624 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p624.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p624 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p624.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p624 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p624.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p624 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p624.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p625 === "alma" &&
                <button id="txtBut" onClick={this.p625.bind(this)}>alma</button>
        }
        {this.state.p625 === "Alma" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p625.bind(this)}>Alma</button>
        }
        {this.state.p625 === "Alma" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p625.bind(this)}><span style={{color:"red"}}>A</span>lma</button>
        }

        {this.state.p626 === " " &&
                <button id="txtBut" onClick={this.p626.bind(this)}>&nbsp;</button>
        }
        {this.state.p626 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p626.bind(this)}>,&nbsp;</button>
        }
        {this.state.p626 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p626.bind(this)}>;&nbsp;</button>
        }
        {this.state.p626 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p626.bind(this)}>:&nbsp;</button>
        }
        {this.state.p626 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p626.bind(this)}>(&nbsp;</button>
        }
        {this.state.p626 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p626.bind(this)}>)&nbsp;</button>
        }
        {this.state.p626 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p626.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p626 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p626.bind(this)}>!&nbsp;</button>
        }
        {this.state.p626 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p626.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p626 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p626.bind(this)}>?&nbsp;</button>
        }
        {this.state.p626 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p626.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p626 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p626.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p626 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p626.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p626 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p626.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p626 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p626.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p626 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p626.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p626 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p626.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p626 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p626.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p626 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p626.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p627 === "inútilmente" &&
                <button id="txtBut" onClick={this.p627.bind(this)}>inútilmente</button>
        }
        {this.state.p627 === "Inútilmente" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p627.bind(this)}>Inútilmente</button>
        }
        {this.state.p627 === "Inútilmente" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p627.bind(this)}><span style={{color:"red"}}>I</span>nútilmente</button>
        }

        {this.state.p628 === " " &&
                <button id="txtBut" onClick={this.p628.bind(this)}>&nbsp;</button>
        }
        {this.state.p628 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p628.bind(this)}>,&nbsp;</button>
        }
        {this.state.p628 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p628.bind(this)}>;&nbsp;</button>
        }
        {this.state.p628 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p628.bind(this)}>:&nbsp;</button>
        }
        {this.state.p628 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p628.bind(this)}>(&nbsp;</button>
        }
        {this.state.p628 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p628.bind(this)}>)&nbsp;</button>
        }
        {this.state.p628 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p628.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p628 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p628.bind(this)}>!&nbsp;</button>
        }
        {this.state.p628 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p628.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p628 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p628.bind(this)}>?&nbsp;</button>
        }
        {this.state.p628 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p628.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p628 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p628.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p628 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p628.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p628 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p628.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p628 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p628.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p628 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p628.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p628 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p628.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p628 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p628.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p628 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p628.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p629 === "se" &&
                <button id="txtBut" onClick={this.p629.bind(this)}>se</button>
        }
        {this.state.p629 === "Se" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p629.bind(this)}>Se</button>
        }
        {this.state.p629 === "Se" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p629.bind(this)}><span style={{color:"red"}}>S</span>e</button>
        }

        {this.state.p630 === " " &&
                <button id="txtBut" onClick={this.p630.bind(this)}>&nbsp;</button>
        }
        {this.state.p630 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p630.bind(this)}>,&nbsp;</button>
        }
        {this.state.p630 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p630.bind(this)}>;&nbsp;</button>
        }
        {this.state.p630 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p630.bind(this)}>:&nbsp;</button>
        }
        {this.state.p630 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p630.bind(this)}>(&nbsp;</button>
        }
        {this.state.p630 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p630.bind(this)}>)&nbsp;</button>
        }
        {this.state.p630 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p630.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p630 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p630.bind(this)}>!&nbsp;</button>
        }
        {this.state.p630 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p630.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p630 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p630.bind(this)}>?&nbsp;</button>
        }
        {this.state.p630 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p630.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p630 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p630.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p630 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p630.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p630 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p630.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p630 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p630.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p630 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p630.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p630 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p630.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p630 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p630.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p630 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p630.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p631 === "apresta" &&
                <button id="txtBut" onClick={this.p631.bind(this)}>apresta</button>
        }
        {this.state.p631 === "Apresta" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p631.bind(this)}>Apresta</button>
        }
        {this.state.p631 === "Apresta" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p631.bind(this)}><span style={{color:"red"}}>A</span>presta</button>
        }

        {this.state.p632 === " " &&
                <button id="txtBut" onClick={this.p632.bind(this)}>&nbsp;</button>
        }
        {this.state.p632 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p632.bind(this)}>,&nbsp;</button>
        }
        {this.state.p632 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p632.bind(this)}>;&nbsp;</button>
        }
        {this.state.p632 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p632.bind(this)}>:&nbsp;</button>
        }
        {this.state.p632 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p632.bind(this)}>(&nbsp;</button>
        }
        {this.state.p632 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p632.bind(this)}>)&nbsp;</button>
        }
        {this.state.p632 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p632.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p632 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p632.bind(this)}>!&nbsp;</button>
        }
        {this.state.p632 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p632.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p632 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p632.bind(this)}>?&nbsp;</button>
        }
        {this.state.p632 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p632.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p632 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p632.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p632 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p632.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p632 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p632.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p632 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p632.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p632 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p632.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p632 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p632.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p632 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p632.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p632 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p632.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p633 === "y" &&
                <button id="txtBut" onClick={this.p633.bind(this)}>y</button>
        }
        {this.state.p633 === "Y" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p633.bind(this)}>Y</button>
        }
        {this.state.p633 === "Y" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p633.bind(this)}><span style={{color:"red"}}>Y</span></button>
        }

        {this.state.p634 === " " &&
                <button id="txtBut" onClick={this.p634.bind(this)}>&nbsp;</button>
        }
        {this.state.p634 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p634.bind(this)}>,&nbsp;</button>
        }
        {this.state.p634 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p634.bind(this)}>;&nbsp;</button>
        }
        {this.state.p634 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p634.bind(this)}>:&nbsp;</button>
        }
        {this.state.p634 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p634.bind(this)}>(&nbsp;</button>
        }
        {this.state.p634 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p634.bind(this)}>)&nbsp;</button>
        }
        {this.state.p634 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p634.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p634 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p634.bind(this)}>!&nbsp;</button>
        }
        {this.state.p634 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p634.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p634 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p634.bind(this)}>?&nbsp;</button>
        }
        {this.state.p634 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p634.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p634 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p634.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p634 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p634.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p634 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p634.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p634 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p634.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p634 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p634.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p634 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p634.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p634 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p634.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p634 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p634.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p635 === "se" &&
                <button id="txtBut" onClick={this.p635.bind(this)}>se</button>
        }
        {this.state.p635 === "Se" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p635.bind(this)}>Se</button>
        }
        {this.state.p635 === "Se" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p635.bind(this)}><span style={{color:"red"}}>S</span>e</button>
        }

        {this.state.p636 === " " &&
                <button id="txtBut" onClick={this.p636.bind(this)}>&nbsp;</button>
        }
        {this.state.p636 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p636.bind(this)}>,&nbsp;</button>
        }
        {this.state.p636 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p636.bind(this)}>;&nbsp;</button>
        }
        {this.state.p636 === ": " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p636.bind(this)}>:&nbsp;</button>
        }
        {this.state.p636 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p636.bind(this)}>(&nbsp;</button>
        }
        {this.state.p636 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p636.bind(this)}>)&nbsp;</button>
        }
        {this.state.p636 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p636.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p636 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p636.bind(this)}>!&nbsp;</button>
        }
        {this.state.p636 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p636.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p636 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p636.bind(this)}>?&nbsp;</button>
        }
        {this.state.p636 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p636.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p636 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p636.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p636 === ": " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p636.bind(this)}><span style={{color:"red"}}>:</span>&nbsp;</button>
        }
        {this.state.p636 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p636.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p636 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p636.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p636 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p636.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p636 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p636.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p636 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p636.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p636 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p636.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }

        {this.state.p637 === "perfecciona" &&
                <button id="txtBut" onClick={this.p637.bind(this)}>perfecciona</button>
        }
        {this.state.p637 === "Perfecciona" && this.state.compare === false &&
                <button id="txtBut" onClick={this.p637.bind(this)}>Perfecciona</button>
        }
        {this.state.p637 === "Perfecciona" && this.state.compare === true &&
                <button id="txtBut" onClick={this.p637.bind(this)}><span style={{color:"red"}}>P</span>erfecciona</button>
        }

        {this.state.p638 === " " &&
                <button id="txtBut" onClick={this.p638.bind(this)}>&nbsp;</button>
        }
        {this.state.p638 === ", " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p638.bind(this)}>,&nbsp;</button>
        }
        {this.state.p638 === "; " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p638.bind(this)}>;&nbsp;</button>
        }
        {this.state.p638 === ". " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p638.bind(this)}>.&nbsp;</button>
        }
        {this.state.p638 === "( " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p638.bind(this)}>(&nbsp;</button>
        }
        {this.state.p638 === ") " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p638.bind(this)}>)&nbsp;</button>
        }
        {this.state.p638 === "¡ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p638.bind(this)}>¡&nbsp;</button>
        }
        {this.state.p638 === "! " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p638.bind(this)}>!&nbsp;</button>
        }
        {this.state.p638 === "¿ " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p638.bind(this)}>¿&nbsp;</button>
        }
        {this.state.p638 === "? " && this.state.compare === false &&
                <button id="txtBut" onClick={this.p638.bind(this)}>?&nbsp;</button>
        }
        {this.state.p638 === " " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p638.bind(this)}><span style={{background:"red"}}>&nbsp;</span></button>
        }
        {this.state.p638 === ", " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p638.bind(this)}><span style={{color:"red"}}>,</span>&nbsp;</button>
        }
        {this.state.p638 === "; " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p638.bind(this)}><span style={{color:"red"}}>;</span>&nbsp;</button>
        }
        {this.state.p638 === ". " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p638.bind(this)}>.&nbsp;</button>
        }
        {this.state.p638 === "( " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p638.bind(this)}><span style={{color:"red"}}>(</span>&nbsp;</button>
        }
        {this.state.p638 === ") " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p638.bind(this)}><span style={{color:"red"}}>)</span>&nbsp;</button>
        }
        {this.state.p638 === "¡ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p638.bind(this)}><span style={{color:"red"}}>¡</span>&nbsp;</button>
        }
        {this.state.p638 === "! " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p638.bind(this)}><span style={{color:"red"}}>!</span>&nbsp;</button>
        }
        {this.state.p638 === "¿ " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p638.bind(this)}><span style={{color:"red"}}>¿</span>&nbsp;</button>
        }
        {this.state.p638 === "? " && this.state.compare === true &&
                <button id="txtBut" onClick={this.p638.bind(this)}><span style={{color:"red"}}>?</span>&nbsp;</button>
        }


        <br/><br/>Next...

        <br/><br/><br/>
        <button onClick={this.updateComparar.bind(this)}>Comparar</button>
      </div>
    );
  }
}

export default Migala
