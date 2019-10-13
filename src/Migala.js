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
    p731: "en",
    p732: " ",
    p733: "la",
    p734: " ",
    p735: "cama",
    p736: ". ",
    p737: "a",
    p738: " ",
    p739: "veces",
    p740: " ",
    p741: "el",
    p742: " ",
    p743: "silencio",
    p744: " ",
    p745: "de",
    p746: " ",
    p747: "la",
    p748: " ",
    p749: "noche",
    p750: " ",
    p751: "me",
    p752: " ",
    p753: "trae",
    p754: " ",
    p755: "el",
    p756: " ",
    p757: "eco",
    p758: " ",
    p759: "de",
    p760: " ",
    p761: "sus",
    p762: " ",
    p763: "pasos",
    p764: ", ",
    p765: "que",
    p766: " ",
    p767: "he",
    p768: " ",
    p769: "aprendido",
    p770: " ",
    p771: "a",
    p772: " ",
    p773: "oír",
    p774: ", ",
    p775: "aunque",
    p776: " ",
    p777: "sé",
    p778: " ",
    p779: "que",
    p780: " ",
    p781: "son",
    p782: " ",
    p783: "imperceptibles",
    p784: ". ",
    p785: "Muchos",
    p786: " ",
    p787: "días",
    p788: " ",
    p789: "encuentro",
    p790: " ",
    p791: "intacto",
    p792: " ",
    p793: "el",
    p794: " ",
    p795: "alimento",
    p796: " ",
    p797: "que",
    p798: " ",
    p799: "he",
    p800: " ",
    p801: "dejado",
    p802: " ",
    p803: "la",
    p804: " ",
    p805: "víspera",
    p806: ". ",
    p807: "cuando",
    p808: " ",
    p809: "desaparece",
    p810: ", ",
    p811: "no",
    p812: " ",
    p813: "sé",
    p814: " ",
    p815: "si",
    p816: " ",
    p817: "lo",
    p818: " ",
    p819: "ha",
    p820: " ",
    p821: "devorado",
    p822: " ",
    p823: "la",
    p824: " ",
    p825: "migala",
    p826: " ",
    p827: "o",
    p828: " ",
    p829: "algún",
    p830: " ",
    p831: "otro",
    p832: " ",
    p833: "inocente",
    p834: " ",
    p835: "huésped",
    p836: " ",
    p837: "de",
    p838: " ",
    p839: "la",
    p840: " ",
    p841: "casa",
    p842: ". ",
    p843: "He",
    p844: " ",
    p845: "llegado",
    p846: " ",
    p847: "a",
    p848: " ",
    p849: "pensar",
    p850: " ",
    p851: "también",
    p852: " ",
    p853: "que",
    p854: " ",
    p855: "acaso",
    p856: " ",
    p857: "estoy",
    p858: " ",
    p859: "siendo",
    p860: " ",
    p861: "víctima",
    p862: " ",
    p863: "de",
    p864: " ",
    p865: "una",
    p866: " ",
    p867: "superchería",
    p868: " ",
    p869: "y",
    p870: " ",
    p871: "que",
    p872: " ",
    p873: "me",
    p874: " ",
    p875: "hallo",
    p876: " ",
    p877: "a",
    p878: " ",
    p879: "merced",
    p880: " ",
    p881: "de",
    p882: " ",
    p883: "una",
    p884: " ",
    p885: "falsa",
    p886: " ",
    p887: "migala",
    p888: ". ",
    p889: "tal",
    p890: " ",
    p891: "vez",
    p892: " ",
    p893: "el",
    p894: "",
    p895: "saltimbanqui",
    p896: " ",
    p897: "me",
    p898: " ",
    p899: "ha",
    p900: " ",
    p901: "engañado",
    p902: ", ",
    p903: "haciéndome",
    p904: " ",
    p905: "pagar",
    p906: " ",
    p907: "un",
    p908: " ",
    p909: "alto",
    p910: " ",
    p911: "precio",
    p912: " ",
    p913: "por",
    p914: " ",
    p915: "un",
    p916: " ",
    p917: "inofensivo",
    p918: " ",
    p919: "y",
    p920: " ",
    p921: "repugnante",
    p922: " ",
    p923: "escarabajo",
    p924: ". ",
    p925: "Pero",
    p926: " ",
    p927: "en ",
    p928: " ",
    p929: "realidad",
    p930: " ",
    p931: "esto",
    p932: " ",
    p933: "no",
    p934: " ",
    p935: "tiene",
    p936: " ",
    p937: "importancia",
    p938: ", ",
    p939: "porque",
    p940: " ",
    p941: "yo",
    p942: " ",
    p943: "he",
    p944: " ",
    p945: "consagrado",
    p946: " ",
    p947: "a",
    p948: " ",
    p949: "la",
    p950: " ",
    p951: "migala",
    p952: " ",
    p953: "con",
    p954: " ",
    p955: "la",
    p956: " ",
    p957: "certeza",
    p958: " ",
    p959: "de",
    p960: " ",
    p961: "mi",
    p962: " ",
    p963: "muerte",
    p964: " ",
    p965: "aplazada",
    p966: ". ",
    p967: "en",
    p968: " ",
    p969: "las",
    p970: " ",
    p971: "horas",
    p972: " ",
    p973: "más",
    p974: " ",
    p975: "agudas",
    p976: " ",
    p977: "del",
    p978: " ",
    p979: "insomnio",
    p980: ", ",
    p981: "cuando",
    p982: " ",
    p983: "me",
    p984: " ",
    p985: "pierdo",
    p986: " ",
    p987: "en",
    p988: " ",
    p989: "conjeturas",
    p990: " ",
    p991: "y",
    p992: " ",
    p993: "nada",
    p994: " ",
    p995: "me",
    p996: " ",
    p997: "tranquiliza",
    p998: ", ",
    p999: "suele",
    p1000: " ",
    p1001: "visitarme",
    p1002: " ",
    p1003: "la",
    p1004: " ",
    p1005: "migala",
    p1006: ". ",
    p1007: "Se",
    p1008: " ",
    p1009: "pasea",
    p1010: " ",
    p1011: "embrolladamente",
    p1012: " ",
    p1013: "por",
    p1014: " ",
    p1015: "el",
    p1016: " ",
    p1017: "cuarto",
    p1018: " ",
    p1019: "y",
    p1020: " ",
    p1021: "trata",
    p1022: " ",
    p1023: "de",
    p1024: " ",
    p1025: "subir",
    p1026: " ",
    p1027: "con",
    p1028: " ",
    p1029: "torpeza",
    p1030: " ",
    p1031: "a",
    p1032: " ",
    p1033: "las",
    p1034: " ",
    p1035: "paredes",
    p1036: ". ",
    p1037: "Se",
    p1038: " ",
    p1039: "detiene",
    p1040: ", ",
    p1041: "levanta",
    p1042: " ",
    p1043: "su",
    p1044: " ",
    p1045: "cabeza",
    p1046: " ",
    p1047: "y",
    p1048: " ",
    p1049: "mueve",
    p1050: " ",
    p1051: "los",
    p1052: " ",
    p1053: "palpos",
    p1054: ". ",
    p1055: "Parece",
    p1056: " ",
    p1057: "husmear",
    p1058: ", ",
    p1059: "agitada",
    p1060: ", ",
    p1061: "un",
    p1062: " ",
    p1063: "invisible",
    p1064: " ",
    p1065: "compañero",
    p1066: ". ",
    p1067: "Entonces",
    p1068: ", ",
    p1069: "estremecido",
    p1070: " ",
    p1071: "en",
    p1072: " ",
    p1073: "mi",
    p1074: " ",
    p1075: "soledad",
    p1076: ", ",
    p1077: "acorralado",
    p1078: " ",
    p1079: "por",
    p1080: " ",
    p1081: "el",
    p1082: " ",
    p1083: "pequeño",
    p1084: " ",
    p1085: "monstruo",
    p1086: ", ",
    p1087: "recuerdo",
    p1088: " ",
    p1089: "que",
    p1090: " ",
    p1091: "en",
    p1092: " ",
    p1093: "otro",
    p1094: " ",
    p1095: "tiempo",
    p1096: " ",
    p1097: "yo",
    p1098: " ",
    p1099: "soñaba",
    p1100: " ",
    p1101: "en",
    p1102: " ",
    p1103: "Beatriz",
    p1104: " ",
    p1105: "y",
    p1106: " ",
    p1107: "en",
    p1108: " ",
    p1109: "su",
    p1110: " ",
    p1111: "compañía",
    p1112: " ",
    p1113: "imposible",
    p1114: ". "
  }

  updateComparar() {
    this.setState({compare: !this.state.compare});
    //console.log(this.state.compare);
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
  p639() {
          if (this.state.p639 === "hay") {
                  this.setState({p639: "Hay"});
          } else {
                  this.setState({p639: "hay"});
          }
  }
  p640() {
          if (this.state.p640 === " ") {this.setState({p640: ", "});}
          if (this.state.p640 === ", ") {this.setState({p640: "; "});}
          if (this.state.p640 === "; ") {this.setState({p640: ": "});}
          if (this.state.p640 === ": ") {this.setState({p640: "( "});}
          if (this.state.p640 === "( ") {this.setState({p640: ") "});}
          if (this.state.p640 === ") ") {this.setState({p640: "¡ "});}
          if (this.state.p640 === "¡ ") {this.setState({p640: "! "});}
          if (this.state.p640 === "! ") {this.setState({p640: "¿ "});}
          if (this.state.p640 === "¿ ") {this.setState({p640: "? "});}
          if (this.state.p640 === "? ") {this.setState({p640: " "});}
  }
  p641() {
          if (this.state.p641 === "dí­as") {
                  this.setState({p641: "Dí­as"});
          } else {
                  this.setState({p641: "dí­as"});
          }
  }
  p642() {
          if (this.state.p642 === " ") {this.setState({p642: ", "});}
          if (this.state.p642 === ", ") {this.setState({p642: "; "});}
          if (this.state.p642 === "; ") {this.setState({p642: ": "});}
          if (this.state.p642 === ": ") {this.setState({p642: "( "});}
          if (this.state.p642 === "( ") {this.setState({p642: ") "});}
          if (this.state.p642 === ") ") {this.setState({p642: "¡ "});}
          if (this.state.p642 === "¡ ") {this.setState({p642: "! "});}
          if (this.state.p642 === "! ") {this.setState({p642: "¿ "});}
          if (this.state.p642 === "¿ ") {this.setState({p642: "? "});}
          if (this.state.p642 === "? ") {this.setState({p642: " "});}
  }
  p643() {
          if (this.state.p643 === "en") {
                  this.setState({p643: "En"});
          } else {
                  this.setState({p643: "en"});
          }
  }
  p644() {
          if (this.state.p644 === " ") {this.setState({p644: ", "});}
          if (this.state.p644 === ", ") {this.setState({p644: "; "});}
          if (this.state.p644 === "; ") {this.setState({p644: ": "});}
          if (this.state.p644 === ": ") {this.setState({p644: "( "});}
          if (this.state.p644 === "( ") {this.setState({p644: ") "});}
          if (this.state.p644 === ") ") {this.setState({p644: "¡ "});}
          if (this.state.p644 === "¡ ") {this.setState({p644: "! "});}
          if (this.state.p644 === "! ") {this.setState({p644: "¿ "});}
          if (this.state.p644 === "¿ ") {this.setState({p644: "? "});}
          if (this.state.p644 === "? ") {this.setState({p644: " "});}
  }
  p645() {
          if (this.state.p645 === "que") {
                  this.setState({p645: "Que"});
          } else {
                  this.setState({p645: "que"});
          }
  }
  p646() {
          if (this.state.p646 === " ") {this.setState({p646: ", "});}
          if (this.state.p646 === ", ") {this.setState({p646: "; "});}
          if (this.state.p646 === "; ") {this.setState({p646: ": "});}
          if (this.state.p646 === ": ") {this.setState({p646: "( "});}
          if (this.state.p646 === "( ") {this.setState({p646: ") "});}
          if (this.state.p646 === ") ") {this.setState({p646: "¡ "});}
          if (this.state.p646 === "¡ ") {this.setState({p646: "! "});}
          if (this.state.p646 === "! ") {this.setState({p646: "¿ "});}
          if (this.state.p646 === "¿ ") {this.setState({p646: "? "});}
          if (this.state.p646 === "? ") {this.setState({p646: " "});}
  }
  p647() {
          if (this.state.p647 === "pienso") {
                  this.setState({p647: "Pienso"});
          } else {
                  this.setState({p647: "pienso"});
          }
  }
  p648() {
          if (this.state.p648 === " ") {this.setState({p648: ", "});}
          if (this.state.p648 === ", ") {this.setState({p648: "; "});}
          if (this.state.p648 === "; ") {this.setState({p648: ": "});}
          if (this.state.p648 === ": ") {this.setState({p648: "( "});}
          if (this.state.p648 === "( ") {this.setState({p648: ") "});}
          if (this.state.p648 === ") ") {this.setState({p648: "¡ "});}
          if (this.state.p648 === "¡ ") {this.setState({p648: "! "});}
          if (this.state.p648 === "! ") {this.setState({p648: "¿ "});}
          if (this.state.p648 === "¿ ") {this.setState({p648: "? "});}
          if (this.state.p648 === "? ") {this.setState({p648: " "});}
  }
  p649() {
          if (this.state.p649 === "que") {
                  this.setState({p649: "Que"});
          } else {
                  this.setState({p649: "que"});
          }
  }
  p650() {
          if (this.state.p650 === " ") {this.setState({p650: ", "});}
          if (this.state.p650 === ", ") {this.setState({p650: "; "});}
          if (this.state.p650 === "; ") {this.setState({p650: ": "});}
          if (this.state.p650 === ": ") {this.setState({p650: "( "});}
          if (this.state.p650 === "( ") {this.setState({p650: ") "});}
          if (this.state.p650 === ") ") {this.setState({p650: "¡ "});}
          if (this.state.p650 === "¡ ") {this.setState({p650: "! "});}
          if (this.state.p650 === "! ") {this.setState({p650: "¿ "});}
          if (this.state.p650 === "¿ ") {this.setState({p650: "? "});}
          if (this.state.p650 === "? ") {this.setState({p650: " "});}
  }
  p651() {
          if (this.state.p651 === "la") {
                  this.setState({p651: "La"});
          } else {
                  this.setState({p651: "la"});
          }
  }
  p652() {
          if (this.state.p652 === " ") {this.setState({p652: ", "});}
          if (this.state.p652 === ", ") {this.setState({p652: "; "});}
          if (this.state.p652 === "; ") {this.setState({p652: ": "});}
          if (this.state.p652 === ": ") {this.setState({p652: "( "});}
          if (this.state.p652 === "( ") {this.setState({p652: ") "});}
          if (this.state.p652 === ") ") {this.setState({p652: "¡ "});}
          if (this.state.p652 === "¡ ") {this.setState({p652: "! "});}
          if (this.state.p652 === "! ") {this.setState({p652: "¿ "});}
          if (this.state.p652 === "¿ ") {this.setState({p652: "? "});}
          if (this.state.p652 === "? ") {this.setState({p652: " "});}
  }
  p653() {
          if (this.state.p653 === "migala") {
                  this.setState({p653: "Migala"});
          } else {
                  this.setState({p653: "migala"});
          }
  }
  p654() {
          if (this.state.p654 === " ") {this.setState({p654: ", "});}
          if (this.state.p654 === ", ") {this.setState({p654: "; "});}
          if (this.state.p654 === "; ") {this.setState({p654: ": "});}
          if (this.state.p654 === ": ") {this.setState({p654: "( "});}
          if (this.state.p654 === "( ") {this.setState({p654: ") "});}
          if (this.state.p654 === ") ") {this.setState({p654: "¡ "});}
          if (this.state.p654 === "¡ ") {this.setState({p654: "! "});}
          if (this.state.p654 === "! ") {this.setState({p654: "¿ "});}
          if (this.state.p654 === "¿ ") {this.setState({p654: "? "});}
          if (this.state.p654 === "? ") {this.setState({p654: " "});}
  }
  p655() {
          if (this.state.p655 === "ha") {
                  this.setState({p655: "Ha"});
          } else {
                  this.setState({p655: "ha"});
          }
  }
  p656() {
          if (this.state.p656 === " ") {this.setState({p656: ", "});}
          if (this.state.p656 === ", ") {this.setState({p656: "; "});}
          if (this.state.p656 === "; ") {this.setState({p656: ": "});}
          if (this.state.p656 === ": ") {this.setState({p656: "( "});}
          if (this.state.p656 === "( ") {this.setState({p656: ") "});}
          if (this.state.p656 === ") ") {this.setState({p656: "¡ "});}
          if (this.state.p656 === "¡ ") {this.setState({p656: "! "});}
          if (this.state.p656 === "! ") {this.setState({p656: "¿ "});}
          if (this.state.p656 === "¿ ") {this.setState({p656: "? "});}
          if (this.state.p656 === "? ") {this.setState({p656: " "});}
  }
  p657() {
          if (this.state.p657 === "desaparecido") {
                  this.setState({p657: "Desaparecido"});
          } else {
                  this.setState({p657: "desaparecido"});
          }
  }
  p658() {
          if (this.state.p658 === " ") {this.setState({p658: ", "});}
          if (this.state.p658 === ", ") {this.setState({p658: "; "});}
          if (this.state.p658 === "; ") {this.setState({p658: ": "});}
          if (this.state.p658 === ": ") {this.setState({p658: "( "});}
          if (this.state.p658 === "( ") {this.setState({p658: ") "});}
          if (this.state.p658 === ") ") {this.setState({p658: "¡ "});}
          if (this.state.p658 === "¡ ") {this.setState({p658: "! "});}
          if (this.state.p658 === "! ") {this.setState({p658: "¿ "});}
          if (this.state.p658 === "¿ ") {this.setState({p658: "? "});}
          if (this.state.p658 === "? ") {this.setState({p658: " "});}
  }
  p659() {
          if (this.state.p659 === "que") {
                  this.setState({p659: "Que"});
          } else {
                  this.setState({p659: "que"});
          }
  }
  p660() {
          if (this.state.p660 === " ") {this.setState({p660: ", "});}
          if (this.state.p660 === ", ") {this.setState({p660: "; "});}
          if (this.state.p660 === "; ") {this.setState({p660: ": "});}
          if (this.state.p660 === ": ") {this.setState({p660: "( "});}
          if (this.state.p660 === "( ") {this.setState({p660: ") "});}
          if (this.state.p660 === ") ") {this.setState({p660: "¡ "});}
          if (this.state.p660 === "¡ ") {this.setState({p660: "! "});}
          if (this.state.p660 === "! ") {this.setState({p660: "¿ "});}
          if (this.state.p660 === "¿ ") {this.setState({p660: "? "});}
          if (this.state.p660 === "? ") {this.setState({p660: " "});}
  }
  p661() {
          if (this.state.p661 === "se") {
                  this.setState({p661: "Se"});
          } else {
                  this.setState({p661: "se"});
          }
  }
  p662() {
          if (this.state.p662 === " ") {this.setState({p662: ", "});}
          if (this.state.p662 === ", ") {this.setState({p662: "; "});}
          if (this.state.p662 === "; ") {this.setState({p662: ": "});}
          if (this.state.p662 === ": ") {this.setState({p662: "( "});}
          if (this.state.p662 === "( ") {this.setState({p662: ") "});}
          if (this.state.p662 === ") ") {this.setState({p662: "¡ "});}
          if (this.state.p662 === "¡ ") {this.setState({p662: "! "});}
          if (this.state.p662 === "! ") {this.setState({p662: "¿ "});}
          if (this.state.p662 === "¿ ") {this.setState({p662: "? "});}
          if (this.state.p662 === "? ") {this.setState({p662: " "});}
  }
  p663() {
          if (this.state.p663 === "ha") {
                  this.setState({p663: "Ha"});
          } else {
                  this.setState({p663: "ha"});
          }
  }
  p664() {
          if (this.state.p664 === " ") {this.setState({p664: ", "});}
          if (this.state.p664 === ", ") {this.setState({p664: "; "});}
          if (this.state.p664 === "; ") {this.setState({p664: ": "});}
          if (this.state.p664 === ": ") {this.setState({p664: "( "});}
          if (this.state.p664 === "( ") {this.setState({p664: ") "});}
          if (this.state.p664 === ") ") {this.setState({p664: "¡ "});}
          if (this.state.p664 === "¡ ") {this.setState({p664: "! "});}
          if (this.state.p664 === "! ") {this.setState({p664: "¿ "});}
          if (this.state.p664 === "¿ ") {this.setState({p664: "? "});}
          if (this.state.p664 === "? ") {this.setState({p664: " "});}
  }
  p665() {
          if (this.state.p665 === "extraviado") {
                  this.setState({p665: "Extraviado"});
          } else {
                  this.setState({p665: "extraviado"});
          }
  }
  p666() {
          if (this.state.p666 === " ") {this.setState({p666: ", "});}
          if (this.state.p666 === ", ") {this.setState({p666: "; "});}
          if (this.state.p666 === "; ") {this.setState({p666: ": "});}
          if (this.state.p666 === ": ") {this.setState({p666: "( "});}
          if (this.state.p666 === "( ") {this.setState({p666: ") "});}
          if (this.state.p666 === ") ") {this.setState({p666: "¡ "});}
          if (this.state.p666 === "¡ ") {this.setState({p666: "! "});}
          if (this.state.p666 === "! ") {this.setState({p666: "¿ "});}
          if (this.state.p666 === "¿ ") {this.setState({p666: "? "});}
          if (this.state.p666 === "? ") {this.setState({p666: " "});}
  }
  p667() {
          if (this.state.p667 === "o") {
                  this.setState({p667: "O"});
          } else {
                  this.setState({p667: "o"});
          }
  }
  p668() {
          if (this.state.p668 === " ") {this.setState({p668: ", "});}
          if (this.state.p668 === ", ") {this.setState({p668: "; "});}
          if (this.state.p668 === "; ") {this.setState({p668: ": "});}
          if (this.state.p668 === ": ") {this.setState({p668: "( "});}
          if (this.state.p668 === "( ") {this.setState({p668: ") "});}
          if (this.state.p668 === ") ") {this.setState({p668: "¡ "});}
          if (this.state.p668 === "¡ ") {this.setState({p668: "! "});}
          if (this.state.p668 === "! ") {this.setState({p668: "¿ "});}
          if (this.state.p668 === "¿ ") {this.setState({p668: "? "});}
          if (this.state.p668 === "? ") {this.setState({p668: " "});}
  }
  p669() {
          if (this.state.p669 === "que") {
                  this.setState({p669: "Que"});
          } else {
                  this.setState({p669: "que"});
          }
  }
  p670() {
          if (this.state.p670 === " ") {this.setState({p670: ", "});}
          if (this.state.p670 === ", ") {this.setState({p670: "; "});}
          if (this.state.p670 === "; ") {this.setState({p670: ": "});}
          if (this.state.p670 === ": ") {this.setState({p670: "( "});}
          if (this.state.p670 === "( ") {this.setState({p670: ") "});}
          if (this.state.p670 === ") ") {this.setState({p670: "¡ "});}
          if (this.state.p670 === "¡ ") {this.setState({p670: "! "});}
          if (this.state.p670 === "! ") {this.setState({p670: "¿ "});}
          if (this.state.p670 === "¿ ") {this.setState({p670: "? "});}
          if (this.state.p670 === "? ") {this.setState({p670: " "});}
  }
  p671() {
          if (this.state.p671 === "ha") {
                  this.setState({p671: "Ha"});
          } else {
                  this.setState({p671: "ha"});
          }
  }
  p672() {
          if (this.state.p672 === " ") {this.setState({p672: ", "});}
          if (this.state.p672 === ", ") {this.setState({p672: "; "});}
          if (this.state.p672 === "; ") {this.setState({p672: ": "});}
          if (this.state.p672 === ": ") {this.setState({p672: "( "});}
          if (this.state.p672 === "( ") {this.setState({p672: ") "});}
          if (this.state.p672 === ") ") {this.setState({p672: "¡ "});}
          if (this.state.p672 === "¡ ") {this.setState({p672: "! "});}
          if (this.state.p672 === "! ") {this.setState({p672: "¿ "});}
          if (this.state.p672 === "¿ ") {this.setState({p672: "? "});}
          if (this.state.p672 === "? ") {this.setState({p672: " "});}
  }
  p673() {
          if (this.state.p673 === "muerto") {
                  this.setState({p673: "Muerto"});
          } else {
                  this.setState({p673: "muerto"});
          }
  }
  p674() {
          if (this.state.p674 === " ") {this.setState({p674: ", "});}
          if (this.state.p674 === ", ") {this.setState({p674: "; "});}
          if (this.state.p674 === "; ") {this.setState({p674: ". "});}
          if (this.state.p674 === ". ") {this.setState({p674: "( "});}
          if (this.state.p674 === "( ") {this.setState({p674: ") "});}
          if (this.state.p674 === ") ") {this.setState({p674: "¡ "});}
          if (this.state.p674 === "¡ ") {this.setState({p674: "! "});}
          if (this.state.p674 === "! ") {this.setState({p674: "¿ "});}
          if (this.state.p674 === "¿ ") {this.setState({p674: "? "});}
          if (this.state.p674 === "? ") {this.setState({p674: " "});}
  }
  p675() {
          if (this.state.p675 === "pero") {
                  this.setState({p675: "Pero"});
          } else {
                  this.setState({p675: "pero"});
          }
  }
  p676() {
          if (this.state.p676 === " ") {this.setState({p676: ", "});}
          if (this.state.p676 === ", ") {this.setState({p676: "; "});}
          if (this.state.p676 === "; ") {this.setState({p676: ": "});}
          if (this.state.p676 === ": ") {this.setState({p676: "( "});}
          if (this.state.p676 === "( ") {this.setState({p676: ") "});}
          if (this.state.p676 === ") ") {this.setState({p676: "¡ "});}
          if (this.state.p676 === "¡ ") {this.setState({p676: "! "});}
          if (this.state.p676 === "! ") {this.setState({p676: "¿ "});}
          if (this.state.p676 === "¿ ") {this.setState({p676: "? "});}
          if (this.state.p676 === "? ") {this.setState({p676: " "});}
  }
  p677() {
          if (this.state.p677 === "no") {
                  this.setState({p677: "No"});
          } else {
                  this.setState({p677: "no"});
          }
  }
  p678() {
          if (this.state.p678 === " ") {this.setState({p678: ", "});}
          if (this.state.p678 === ", ") {this.setState({p678: "; "});}
          if (this.state.p678 === "; ") {this.setState({p678: ": "});}
          if (this.state.p678 === ": ") {this.setState({p678: "( "});}
          if (this.state.p678 === "( ") {this.setState({p678: ") "});}
          if (this.state.p678 === ") ") {this.setState({p678: "¡ "});}
          if (this.state.p678 === "¡ ") {this.setState({p678: "! "});}
          if (this.state.p678 === "! ") {this.setState({p678: "¿ "});}
          if (this.state.p678 === "¿ ") {this.setState({p678: "? "});}
          if (this.state.p678 === "? ") {this.setState({p678: " "});}
  }
  p679() {
          if (this.state.p679 === "hago") {
                  this.setState({p679: "Hago"});
          } else {
                  this.setState({p679: "hago"});
          }
  }
  p680() {
          if (this.state.p680 === " ") {this.setState({p680: ", "});}
          if (this.state.p680 === ", ") {this.setState({p680: "; "});}
          if (this.state.p680 === "; ") {this.setState({p680: ": "});}
          if (this.state.p680 === ": ") {this.setState({p680: "( "});}
          if (this.state.p680 === "( ") {this.setState({p680: ") "});}
          if (this.state.p680 === ") ") {this.setState({p680: "¡ "});}
          if (this.state.p680 === "¡ ") {this.setState({p680: "! "});}
          if (this.state.p680 === "! ") {this.setState({p680: "¿ "});}
          if (this.state.p680 === "¿ ") {this.setState({p680: "? "});}
          if (this.state.p680 === "? ") {this.setState({p680: " "});}
  }
  p681() {
          if (this.state.p681 === "nada") {
                  this.setState({p681: "Nada"});
          } else {
                  this.setState({p681: "nada"});
          }
  }
  p682() {
          if (this.state.p682 === " ") {this.setState({p682: ", "});}
          if (this.state.p682 === ", ") {this.setState({p682: "; "});}
          if (this.state.p682 === "; ") {this.setState({p682: ": "});}
          if (this.state.p682 === ": ") {this.setState({p682: "( "});}
          if (this.state.p682 === "( ") {this.setState({p682: ") "});}
          if (this.state.p682 === ") ") {this.setState({p682: "¡ "});}
          if (this.state.p682 === "¡ ") {this.setState({p682: "! "});}
          if (this.state.p682 === "! ") {this.setState({p682: "¿ "});}
          if (this.state.p682 === "¿ ") {this.setState({p682: "? "});}
          if (this.state.p682 === "? ") {this.setState({p682: " "});}
  }
  p683() {
          if (this.state.p683 === "para") {
                  this.setState({p683: "Para"});
          } else {
                  this.setState({p683: "para"});
          }
  }
  p684() {
          if (this.state.p684 === " ") {this.setState({p684: ", "});}
          if (this.state.p684 === ", ") {this.setState({p684: "; "});}
          if (this.state.p684 === "; ") {this.setState({p684: ": "});}
          if (this.state.p684 === ": ") {this.setState({p684: "( "});}
          if (this.state.p684 === "( ") {this.setState({p684: ") "});}
          if (this.state.p684 === ") ") {this.setState({p684: "¡ "});}
          if (this.state.p684 === "¡ ") {this.setState({p684: "! "});}
          if (this.state.p684 === "! ") {this.setState({p684: "¿ "});}
          if (this.state.p684 === "¿ ") {this.setState({p684: "? "});}
          if (this.state.p684 === "? ") {this.setState({p684: " "});}
  }
  p685() {
          if (this.state.p685 === "comprobarlo") {
                  this.setState({p685: "Comprobarlo"});
          } else {
                  this.setState({p685: "comprobarlo"});
          }
  }
  p686() {
          if (this.state.p686 === " ") {this.setState({p686: ", "});}
          if (this.state.p686 === ", ") {this.setState({p686: "; "});}
          if (this.state.p686 === "; ") {this.setState({p686: ". "});}
          if (this.state.p686 === ". ") {this.setState({p686: "( "});}
          if (this.state.p686 === "( ") {this.setState({p686: ") "});}
          if (this.state.p686 === ") ") {this.setState({p686: "¡ "});}
          if (this.state.p686 === "¡ ") {this.setState({p686: "! "});}
          if (this.state.p686 === "! ") {this.setState({p686: "¿ "});}
          if (this.state.p686 === "¿ ") {this.setState({p686: "? "});}
          if (this.state.p686 === "? ") {this.setState({p686: " "});}
  }
  p687() {
          if (this.state.p687 === "dejo") {
                  this.setState({p687: "Dejo"});
          } else {
                  this.setState({p687: "dejo"});
          }
  }
  p688() {
          if (this.state.p688 === " ") {this.setState({p688: ", "});}
          if (this.state.p688 === ", ") {this.setState({p688: "; "});}
          if (this.state.p688 === "; ") {this.setState({p688: ": "});}
          if (this.state.p688 === ": ") {this.setState({p688: "( "});}
          if (this.state.p688 === "( ") {this.setState({p688: ") "});}
          if (this.state.p688 === ") ") {this.setState({p688: "¡ "});}
          if (this.state.p688 === "¡ ") {this.setState({p688: "! "});}
          if (this.state.p688 === "! ") {this.setState({p688: "¿ "});}
          if (this.state.p688 === "¿ ") {this.setState({p688: "? "});}
          if (this.state.p688 === "? ") {this.setState({p688: " "});}
  }
  p689() {
          if (this.state.p689 === "siempre") {
                  this.setState({p689: "Siempre"});
          } else {
                  this.setState({p689: "siempre"});
          }
  }
  p690() {
          if (this.state.p690 === " ") {this.setState({p690: ", "});}
          if (this.state.p690 === ", ") {this.setState({p690: "; "});}
          if (this.state.p690 === "; ") {this.setState({p690: ": "});}
          if (this.state.p690 === ": ") {this.setState({p690: "( "});}
          if (this.state.p690 === "( ") {this.setState({p690: ") "});}
          if (this.state.p690 === ") ") {this.setState({p690: "¡ "});}
          if (this.state.p690 === "¡ ") {this.setState({p690: "! "});}
          if (this.state.p690 === "! ") {this.setState({p690: "¿ "});}
          if (this.state.p690 === "¿ ") {this.setState({p690: "? "});}
          if (this.state.p690 === "? ") {this.setState({p690: " "});}
  }
  p691() {
          if (this.state.p691 === "que") {
                  this.setState({p691: "Que"});
          } else {
                  this.setState({p691: "que"});
          }
  }
  p692() {
          if (this.state.p692 === " ") {this.setState({p692: ", "});}
          if (this.state.p692 === ", ") {this.setState({p692: "; "});}
          if (this.state.p692 === "; ") {this.setState({p692: ": "});}
          if (this.state.p692 === ": ") {this.setState({p692: "( "});}
          if (this.state.p692 === "( ") {this.setState({p692: ") "});}
          if (this.state.p692 === ") ") {this.setState({p692: "¡ "});}
          if (this.state.p692 === "¡ ") {this.setState({p692: "! "});}
          if (this.state.p692 === "! ") {this.setState({p692: "¿ "});}
          if (this.state.p692 === "¿ ") {this.setState({p692: "? "});}
          if (this.state.p692 === "? ") {this.setState({p692: " "});}
  }
  p693() {
          if (this.state.p693 === "el") {
                  this.setState({p693: "El"});
          } else {
                  this.setState({p693: "el"});
          }
  }
  p694() {
          if (this.state.p694 === " ") {this.setState({p694: ", "});}
          if (this.state.p694 === ", ") {this.setState({p694: "; "});}
          if (this.state.p694 === "; ") {this.setState({p694: ": "});}
          if (this.state.p694 === ": ") {this.setState({p694: "( "});}
          if (this.state.p694 === "( ") {this.setState({p694: ") "});}
          if (this.state.p694 === ") ") {this.setState({p694: "¡ "});}
          if (this.state.p694 === "¡ ") {this.setState({p694: "! "});}
          if (this.state.p694 === "! ") {this.setState({p694: "¿ "});}
          if (this.state.p694 === "¿ ") {this.setState({p694: "? "});}
          if (this.state.p694 === "? ") {this.setState({p694: " "});}
  }
  p695() {
          if (this.state.p695 === "azar") {
                  this.setState({p695: "Azar"});
          } else {
                  this.setState({p695: "azar"});
          }
  }
  p696() {
          if (this.state.p696 === " ") {this.setState({p696: ", "});}
          if (this.state.p696 === ", ") {this.setState({p696: "; "});}
          if (this.state.p696 === "; ") {this.setState({p696: ": "});}
          if (this.state.p696 === ": ") {this.setState({p696: "( "});}
          if (this.state.p696 === "( ") {this.setState({p696: ") "});}
          if (this.state.p696 === ") ") {this.setState({p696: "¡ "});}
          if (this.state.p696 === "¡ ") {this.setState({p696: "! "});}
          if (this.state.p696 === "! ") {this.setState({p696: "¿ "});}
          if (this.state.p696 === "¿ ") {this.setState({p696: "? "});}
          if (this.state.p696 === "? ") {this.setState({p696: " "});}
  }
  p697() {
          if (this.state.p697 === "me") {
                  this.setState({p697: "Me"});
          } else {
                  this.setState({p697: "me"});
          }
  }
  p698() {
          if (this.state.p698 === " ") {this.setState({p698: ", "});}
          if (this.state.p698 === ", ") {this.setState({p698: "; "});}
          if (this.state.p698 === "; ") {this.setState({p698: ": "});}
          if (this.state.p698 === ": ") {this.setState({p698: "( "});}
          if (this.state.p698 === "( ") {this.setState({p698: ") "});}
          if (this.state.p698 === ") ") {this.setState({p698: "¡ "});}
          if (this.state.p698 === "¡ ") {this.setState({p698: "! "});}
          if (this.state.p698 === "! ") {this.setState({p698: "¿ "});}
          if (this.state.p698 === "¿ ") {this.setState({p698: "? "});}
          if (this.state.p698 === "? ") {this.setState({p698: " "});}
  }
  p699() {
          if (this.state.p699 === "vuelva") {
                  this.setState({p699: "Vuelva"});
          } else {
                  this.setState({p699: "vuelva"});
          }
  }
  p700() {
          if (this.state.p700 === " ") {this.setState({p700: ", "});}
          if (this.state.p700 === ", ") {this.setState({p700: "; "});}
          if (this.state.p700 === "; ") {this.setState({p700: ": "});}
          if (this.state.p700 === ": ") {this.setState({p700: "( "});}
          if (this.state.p700 === "( ") {this.setState({p700: ") "});}
          if (this.state.p700 === ") ") {this.setState({p700: "¡ "});}
          if (this.state.p700 === "¡ ") {this.setState({p700: "! "});}
          if (this.state.p700 === "! ") {this.setState({p700: "¿ "});}
          if (this.state.p700 === "¿ ") {this.setState({p700: "? "});}
          if (this.state.p700 === "? ") {this.setState({p700: " "});}
  }
  p701() {
          if (this.state.p701 === "a") {
                  this.setState({p701: "A"});
          } else {
                  this.setState({p701: "a"});
          }
  }
  p702() {
          if (this.state.p702 === " ") {this.setState({p702: ", "});}
          if (this.state.p702 === ", ") {this.setState({p702: "; "});}
          if (this.state.p702 === "; ") {this.setState({p702: ": "});}
          if (this.state.p702 === ": ") {this.setState({p702: "( "});}
          if (this.state.p702 === "( ") {this.setState({p702: ") "});}
          if (this.state.p702 === ") ") {this.setState({p702: "¡ "});}
          if (this.state.p702 === "¡ ") {this.setState({p702: "! "});}
          if (this.state.p702 === "! ") {this.setState({p702: "¿ "});}
          if (this.state.p702 === "¿ ") {this.setState({p702: "? "});}
          if (this.state.p702 === "? ") {this.setState({p702: " "});}
  }
  p703() {
          if (this.state.p703 === "poner") {
                  this.setState({p703: "Poner"});
          } else {
                  this.setState({p703: "poner"});
          }
  }
  p704() {
          if (this.state.p704 === " ") {this.setState({p704: ", "});}
          if (this.state.p704 === ", ") {this.setState({p704: "; "});}
          if (this.state.p704 === "; ") {this.setState({p704: ": "});}
          if (this.state.p704 === ": ") {this.setState({p704: "( "});}
          if (this.state.p704 === "( ") {this.setState({p704: ") "});}
          if (this.state.p704 === ") ") {this.setState({p704: "¡ "});}
          if (this.state.p704 === "¡ ") {this.setState({p704: "! "});}
          if (this.state.p704 === "! ") {this.setState({p704: "¿ "});}
          if (this.state.p704 === "¿ ") {this.setState({p704: "? "});}
          if (this.state.p704 === "? ") {this.setState({p704: " "});}
  }
  p705() {
          if (this.state.p705 === "frente") {
                  this.setState({p705: "Frente"});
          } else {
                  this.setState({p705: "frente"});
          }
  }
  p706() {
          if (this.state.p706 === " ") {this.setState({p706: ", "});}
          if (this.state.p706 === ", ") {this.setState({p706: "; "});}
          if (this.state.p706 === "; ") {this.setState({p706: ": "});}
          if (this.state.p706 === ": ") {this.setState({p706: "( "});}
          if (this.state.p706 === "( ") {this.setState({p706: ") "});}
          if (this.state.p706 === ") ") {this.setState({p706: "¡ "});}
          if (this.state.p706 === "¡ ") {this.setState({p706: "! "});}
          if (this.state.p706 === "! ") {this.setState({p706: "¿ "});}
          if (this.state.p706 === "¿ ") {this.setState({p706: "? "});}
          if (this.state.p706 === "? ") {this.setState({p706: " "});}
  }
  p707() {
          if (this.state.p707 === "a") {
                  this.setState({p707: "A"});
          } else {
                  this.setState({p707: "a"});
          }
  }
  p708() {
          if (this.state.p708 === " ") {this.setState({p708: ", "});}
          if (this.state.p708 === ", ") {this.setState({p708: "; "});}
          if (this.state.p708 === "; ") {this.setState({p708: ": "});}
          if (this.state.p708 === ": ") {this.setState({p708: "( "});}
          if (this.state.p708 === "( ") {this.setState({p708: ") "});}
          if (this.state.p708 === ") ") {this.setState({p708: "¡ "});}
          if (this.state.p708 === "¡ ") {this.setState({p708: "! "});}
          if (this.state.p708 === "! ") {this.setState({p708: "¿ "});}
          if (this.state.p708 === "¿ ") {this.setState({p708: "? "});}
          if (this.state.p708 === "? ") {this.setState({p708: " "});}
  }
  p709() {
          if (this.state.p709 === "ella") {
                  this.setState({p709: "Ella"});
          } else {
                  this.setState({p709: "ella"});
          }
  }
  p710() {
          if (this.state.p710 === " ") {this.setState({p710: ", "});}
          if (this.state.p710 === ", ") {this.setState({p710: "; "});}
          if (this.state.p710 === "; ") {this.setState({p710: ": "});}
          if (this.state.p710 === ": ") {this.setState({p710: "( "});}
          if (this.state.p710 === "( ") {this.setState({p710: ") "});}
          if (this.state.p710 === ") ") {this.setState({p710: "¡ "});}
          if (this.state.p710 === "¡ ") {this.setState({p710: "! "});}
          if (this.state.p710 === "! ") {this.setState({p710: "¿ "});}
          if (this.state.p710 === "¿ ") {this.setState({p710: "? "});}
          if (this.state.p710 === "? ") {this.setState({p710: " "});}
  }
  p711() {
          if (this.state.p711 === "al") {
                  this.setState({p711: "Al"});
          } else {
                  this.setState({p711: "al"});
          }
  }
  p712() {
          if (this.state.p712 === " ") {this.setState({p712: ", "});}
          if (this.state.p712 === ", ") {this.setState({p712: "; "});}
          if (this.state.p712 === "; ") {this.setState({p712: ": "});}
          if (this.state.p712 === ": ") {this.setState({p712: "( "});}
          if (this.state.p712 === "( ") {this.setState({p712: ") "});}
          if (this.state.p712 === ") ") {this.setState({p712: "¡ "});}
          if (this.state.p712 === "¡ ") {this.setState({p712: "! "});}
          if (this.state.p712 === "! ") {this.setState({p712: "¿ "});}
          if (this.state.p712 === "¿ ") {this.setState({p712: "? "});}
          if (this.state.p712 === "? ") {this.setState({p712: " "});}
  }
  p713() {
          if (this.state.p713 === "salir") {
                  this.setState({p713: "Salir"});
          } else {
                  this.setState({p713: "salir"});
          }
  }
  p714() {
          if (this.state.p714 === " ") {this.setState({p714: ", "});}
          if (this.state.p714 === ", ") {this.setState({p714: "; "});}
          if (this.state.p714 === "; ") {this.setState({p714: ": "});}
          if (this.state.p714 === ": ") {this.setState({p714: "( "});}
          if (this.state.p714 === "( ") {this.setState({p714: ") "});}
          if (this.state.p714 === ") ") {this.setState({p714: "¡ "});}
          if (this.state.p714 === "¡ ") {this.setState({p714: "! "});}
          if (this.state.p714 === "! ") {this.setState({p714: "¿ "});}
          if (this.state.p714 === "¿ ") {this.setState({p714: "? "});}
          if (this.state.p714 === "? ") {this.setState({p714: " "});}
  }
  p715() {
          if (this.state.p715 === "del") {
                  this.setState({p715: "Del"});
          } else {
                  this.setState({p715: "del"});
          }
  }
  p716() {
          if (this.state.p716 === " ") {this.setState({p716: ", "});}
          if (this.state.p716 === ", ") {this.setState({p716: "; "});}
          if (this.state.p716 === "; ") {this.setState({p716: ": "});}
          if (this.state.p716 === ": ") {this.setState({p716: "( "});}
          if (this.state.p716 === "( ") {this.setState({p716: ") "});}
          if (this.state.p716 === ") ") {this.setState({p716: "¡ "});}
          if (this.state.p716 === "¡ ") {this.setState({p716: "! "});}
          if (this.state.p716 === "! ") {this.setState({p716: "¿ "});}
          if (this.state.p716 === "¿ ") {this.setState({p716: "? "});}
          if (this.state.p716 === "? ") {this.setState({p716: " "});}
  }
  p717() {
          if (this.state.p717 === "baño") {
                  this.setState({p717: "Baño"});
          } else {
                  this.setState({p717: "baño"});
          }
  }
  p718() {
          if (this.state.p718 === " ") {this.setState({p718: ", "});}
          if (this.state.p718 === ", ") {this.setState({p718: "; "});}
          if (this.state.p718 === "; ") {this.setState({p718: ": "});}
          if (this.state.p718 === ": ") {this.setState({p718: "( "});}
          if (this.state.p718 === "( ") {this.setState({p718: ") "});}
          if (this.state.p718 === ") ") {this.setState({p718: "¡ "});}
          if (this.state.p718 === "¡ ") {this.setState({p718: "! "});}
          if (this.state.p718 === "! ") {this.setState({p718: "¿ "});}
          if (this.state.p718 === "¿ ") {this.setState({p718: "? "});}
          if (this.state.p718 === "? ") {this.setState({p718: " "});}
  }
  p719() {
          if (this.state.p719 === "o") {
                  this.setState({p719: "O"});
          } else {
                  this.setState({p719: "o"});
          }
  }
  p720() {
          if (this.state.p720 === " ") {this.setState({p720: ", "});}
          if (this.state.p720 === ", ") {this.setState({p720: "; "});}
          if (this.state.p720 === "; ") {this.setState({p720: ": "});}
          if (this.state.p720 === ": ") {this.setState({p720: "( "});}
          if (this.state.p720 === "( ") {this.setState({p720: ") "});}
          if (this.state.p720 === ") ") {this.setState({p720: "¡ "});}
          if (this.state.p720 === "¡ ") {this.setState({p720: "! "});}
          if (this.state.p720 === "! ") {this.setState({p720: "¿ "});}
          if (this.state.p720 === "¿ ") {this.setState({p720: "? "});}
          if (this.state.p720 === "? ") {this.setState({p720: " "});}
  }
  p721() {
          if (this.state.p721 === "mientras") {
                  this.setState({p721: "Mientras"});
          } else {
                  this.setState({p721: "mientras"});
          }
  }
  p722() {
          if (this.state.p722 === " ") {this.setState({p722: ", "});}
          if (this.state.p722 === ", ") {this.setState({p722: "; "});}
          if (this.state.p722 === "; ") {this.setState({p722: ": "});}
          if (this.state.p722 === ": ") {this.setState({p722: "( "});}
          if (this.state.p722 === "( ") {this.setState({p722: ") "});}
          if (this.state.p722 === ") ") {this.setState({p722: "¡ "});}
          if (this.state.p722 === "¡ ") {this.setState({p722: "! "});}
          if (this.state.p722 === "! ") {this.setState({p722: "¿ "});}
          if (this.state.p722 === "¿ ") {this.setState({p722: "? "});}
          if (this.state.p722 === "? ") {this.setState({p722: " "});}
  }
  p723() {
          if (this.state.p723 === "me") {
                  this.setState({p723: "Me"});
          } else {
                  this.setState({p723: "me"});
          }
  }
  p724() {
          if (this.state.p724 === " ") {this.setState({p724: ", "});}
          if (this.state.p724 === ", ") {this.setState({p724: "; "});}
          if (this.state.p724 === "; ") {this.setState({p724: ": "});}
          if (this.state.p724 === ": ") {this.setState({p724: "( "});}
          if (this.state.p724 === "( ") {this.setState({p724: ") "});}
          if (this.state.p724 === ") ") {this.setState({p724: "¡ "});}
          if (this.state.p724 === "¡ ") {this.setState({p724: "! "});}
          if (this.state.p724 === "! ") {this.setState({p724: "¿ "});}
          if (this.state.p724 === "¿ ") {this.setState({p724: "? "});}
          if (this.state.p724 === "? ") {this.setState({p724: " "});}
  }
  p725() {
          if (this.state.p725 === "desvisto") {
                  this.setState({p725: "Desvisto"});
          } else {
                  this.setState({p725: "desvisto"});
          }
  }
  p726() {
          if (this.state.p726 === " ") {this.setState({p726: ", "});}
          if (this.state.p726 === ", ") {this.setState({p726: "; "});}
          if (this.state.p726 === "; ") {this.setState({p726: ": "});}
          if (this.state.p726 === ": ") {this.setState({p726: "( "});}
          if (this.state.p726 === "( ") {this.setState({p726: ") "});}
          if (this.state.p726 === ") ") {this.setState({p726: "¡ "});}
          if (this.state.p726 === "¡ ") {this.setState({p726: "! "});}
          if (this.state.p726 === "! ") {this.setState({p726: "¿ "});}
          if (this.state.p726 === "¿ ") {this.setState({p726: "? "});}
          if (this.state.p726 === "? ") {this.setState({p726: " "});}
  }
  p727() {
          if (this.state.p727 === "para") {
                  this.setState({p727: "Para"});
          } else {
                  this.setState({p727: "para"});
          }
  }
  p728() {
          if (this.state.p728 === " ") {this.setState({p728: ", "});}
          if (this.state.p728 === ", ") {this.setState({p728: "; "});}
          if (this.state.p728 === "; ") {this.setState({p728: ": "});}
          if (this.state.p728 === ": ") {this.setState({p728: "( "});}
          if (this.state.p728 === "( ") {this.setState({p728: ") "});}
          if (this.state.p728 === ") ") {this.setState({p728: "¡ "});}
          if (this.state.p728 === "¡ ") {this.setState({p728: "! "});}
          if (this.state.p728 === "! ") {this.setState({p728: "¿ "});}
          if (this.state.p728 === "¿ ") {this.setState({p728: "? "});}
          if (this.state.p728 === "? ") {this.setState({p728: " "});}
  }
  p729() {
          if (this.state.p729 === "echarme") {
                  this.setState({p729: "Echarme"});
          } else {
                  this.setState({p729: "echarme"});
          }
  }
  p730() {
          if (this.state.p730 === " ") {this.setState({p730: ", "});}
          if (this.state.p730 === ", ") {this.setState({p730: "; "});}
          if (this.state.p730 === "; ") {this.setState({p730: ": "});}
          if (this.state.p730 === ": ") {this.setState({p730: "( "});}
          if (this.state.p730 === "( ") {this.setState({p730: ") "});}
          if (this.state.p730 === ") ") {this.setState({p730: "¡ "});}
          if (this.state.p730 === "¡ ") {this.setState({p730: "! "});}
          if (this.state.p730 === "! ") {this.setState({p730: "¿ "});}
          if (this.state.p730 === "¿ ") {this.setState({p730: "? "});}
          if (this.state.p730 === "? ") {this.setState({p730: " "});}
  }
  p731() {
          if (this.state.p731 === "en") {
                  this.setState({p731: "En"});
          } else {
                  this.setState({p731: "en"});
          }
  }
  p732() {
          if (this.state.p732 === " ") {this.setState({p732: ", "});}
          if (this.state.p732 === ", ") {this.setState({p732: "; "});}
          if (this.state.p732 === "; ") {this.setState({p732: ": "});}
          if (this.state.p732 === ": ") {this.setState({p732: "( "});}
          if (this.state.p732 === "( ") {this.setState({p732: ") "});}
          if (this.state.p732 === ") ") {this.setState({p732: "¡ "});}
          if (this.state.p732 === "¡ ") {this.setState({p732: "! "});}
          if (this.state.p732 === "! ") {this.setState({p732: "¿ "});}
          if (this.state.p732 === "¿ ") {this.setState({p732: "? "});}
          if (this.state.p732 === "? ") {this.setState({p732: " "});}
  }
  p733() {
          if (this.state.p733 === "la") {
                  this.setState({p733: "La"});
          } else {
                  this.setState({p733: "la"});
          }
  }
  p734() {
          if (this.state.p734 === " ") {this.setState({p734: ", "});}
          if (this.state.p734 === ", ") {this.setState({p734: "; "});}
          if (this.state.p734 === "; ") {this.setState({p734: ": "});}
          if (this.state.p734 === ": ") {this.setState({p734: "( "});}
          if (this.state.p734 === "( ") {this.setState({p734: ") "});}
          if (this.state.p734 === ") ") {this.setState({p734: "¡ "});}
          if (this.state.p734 === "¡ ") {this.setState({p734: "! "});}
          if (this.state.p734 === "! ") {this.setState({p734: "¿ "});}
          if (this.state.p734 === "¿ ") {this.setState({p734: "? "});}
          if (this.state.p734 === "? ") {this.setState({p734: " "});}
  }
  p735() {
          if (this.state.p735 === "cama") {
                  this.setState({p735: "Cama"});
          } else {
                  this.setState({p735: "cama"});
          }
  }
  p736() {
          if (this.state.p736 === " ") {this.setState({p736: ", "});}
          if (this.state.p736 === ", ") {this.setState({p736: "; "});}
          if (this.state.p736 === "; ") {this.setState({p736: ". "});}
          if (this.state.p736 === ". ") {this.setState({p736: "( "});}
          if (this.state.p736 === "( ") {this.setState({p736: ") "});}
          if (this.state.p736 === ") ") {this.setState({p736: "¡ "});}
          if (this.state.p736 === "¡ ") {this.setState({p736: "! "});}
          if (this.state.p736 === "! ") {this.setState({p736: "¿ "});}
          if (this.state.p736 === "¿ ") {this.setState({p736: "? "});}
          if (this.state.p736 === "? ") {this.setState({p736: " "});}
  }
  p737() {
          if (this.state.p737 === "a") {
                  this.setState({p737: "A"});
          } else {
                  this.setState({p737: "a"});
          }
  }
  p738() {
          if (this.state.p738 === " ") {this.setState({p738: ", "});}
          if (this.state.p738 === ", ") {this.setState({p738: "; "});}
          if (this.state.p738 === "; ") {this.setState({p738: ": "});}
          if (this.state.p738 === ": ") {this.setState({p738: "( "});}
          if (this.state.p738 === "( ") {this.setState({p738: ") "});}
          if (this.state.p738 === ") ") {this.setState({p738: "¡ "});}
          if (this.state.p738 === "¡ ") {this.setState({p738: "! "});}
          if (this.state.p738 === "! ") {this.setState({p738: "¿ "});}
          if (this.state.p738 === "¿ ") {this.setState({p738: "? "});}
          if (this.state.p738 === "? ") {this.setState({p738: " "});}
  }
  p739() {
          if (this.state.p739 === "veces") {
                  this.setState({p739: "Veces"});
          } else {
                  this.setState({p739: "veces"});
          }
  }
  p740() {
          if (this.state.p740 === " ") {this.setState({p740: ", "});}
          if (this.state.p740 === ", ") {this.setState({p740: "; "});}
          if (this.state.p740 === "; ") {this.setState({p740: ": "});}
          if (this.state.p740 === ": ") {this.setState({p740: "( "});}
          if (this.state.p740 === "( ") {this.setState({p740: ") "});}
          if (this.state.p740 === ") ") {this.setState({p740: "¡ "});}
          if (this.state.p740 === "¡ ") {this.setState({p740: "! "});}
          if (this.state.p740 === "! ") {this.setState({p740: "¿ "});}
          if (this.state.p740 === "¿ ") {this.setState({p740: "? "});}
          if (this.state.p740 === "? ") {this.setState({p740: " "});}
  }
  p741() {
          if (this.state.p741 === "el") {
                  this.setState({p741: "El"});
          } else {
                  this.setState({p741: "el"});
          }
  }
  p742() {
          if (this.state.p742 === " ") {this.setState({p742: ", "});}
          if (this.state.p742 === ", ") {this.setState({p742: "; "});}
          if (this.state.p742 === "; ") {this.setState({p742: ": "});}
          if (this.state.p742 === ": ") {this.setState({p742: "( "});}
          if (this.state.p742 === "( ") {this.setState({p742: ") "});}
          if (this.state.p742 === ") ") {this.setState({p742: "¡ "});}
          if (this.state.p742 === "¡ ") {this.setState({p742: "! "});}
          if (this.state.p742 === "! ") {this.setState({p742: "¿ "});}
          if (this.state.p742 === "¿ ") {this.setState({p742: "? "});}
          if (this.state.p742 === "? ") {this.setState({p742: " "});}
  }
  p743() {
          if (this.state.p743 === "silencio") {
                  this.setState({p743: "Silencio"});
          } else {
                  this.setState({p743: "silencio"});
          }
  }
  p744() {
          if (this.state.p744 === " ") {this.setState({p744: ", "});}
          if (this.state.p744 === ", ") {this.setState({p744: "; "});}
          if (this.state.p744 === "; ") {this.setState({p744: ": "});}
          if (this.state.p744 === ": ") {this.setState({p744: "( "});}
          if (this.state.p744 === "( ") {this.setState({p744: ") "});}
          if (this.state.p744 === ") ") {this.setState({p744: "¡ "});}
          if (this.state.p744 === "¡ ") {this.setState({p744: "! "});}
          if (this.state.p744 === "! ") {this.setState({p744: "¿ "});}
          if (this.state.p744 === "¿ ") {this.setState({p744: "? "});}
          if (this.state.p744 === "? ") {this.setState({p744: " "});}
  }
  p745() {
          if (this.state.p745 === "de") {
                  this.setState({p745: "De"});
          } else {
                  this.setState({p745: "de"});
          }
  }
  p746() {
          if (this.state.p746 === " ") {this.setState({p746: ", "});}
          if (this.state.p746 === ", ") {this.setState({p746: "; "});}
          if (this.state.p746 === "; ") {this.setState({p746: ": "});}
          if (this.state.p746 === ": ") {this.setState({p746: "( "});}
          if (this.state.p746 === "( ") {this.setState({p746: ") "});}
          if (this.state.p746 === ") ") {this.setState({p746: "¡ "});}
          if (this.state.p746 === "¡ ") {this.setState({p746: "! "});}
          if (this.state.p746 === "! ") {this.setState({p746: "¿ "});}
          if (this.state.p746 === "¿ ") {this.setState({p746: "? "});}
          if (this.state.p746 === "? ") {this.setState({p746: " "});}
  }
  p747() {
          if (this.state.p747 === "la") {
                  this.setState({p747: "La"});
          } else {
                  this.setState({p747: "la"});
          }
  }
  p748() {
          if (this.state.p748 === " ") {this.setState({p748: ", "});}
          if (this.state.p748 === ", ") {this.setState({p748: "; "});}
          if (this.state.p748 === "; ") {this.setState({p748: ": "});}
          if (this.state.p748 === ": ") {this.setState({p748: "( "});}
          if (this.state.p748 === "( ") {this.setState({p748: ") "});}
          if (this.state.p748 === ") ") {this.setState({p748: "¡ "});}
          if (this.state.p748 === "¡ ") {this.setState({p748: "! "});}
          if (this.state.p748 === "! ") {this.setState({p748: "¿ "});}
          if (this.state.p748 === "¿ ") {this.setState({p748: "? "});}
          if (this.state.p748 === "? ") {this.setState({p748: " "});}
  }
  p749() {
          if (this.state.p749 === "noche") {
                  this.setState({p749: "Noche"});
          } else {
                  this.setState({p749: "noche"});
          }
  }
  p750() {
          if (this.state.p750 === " ") {this.setState({p750: ", "});}
          if (this.state.p750 === ", ") {this.setState({p750: "; "});}
          if (this.state.p750 === "; ") {this.setState({p750: ": "});}
          if (this.state.p750 === ": ") {this.setState({p750: "( "});}
          if (this.state.p750 === "( ") {this.setState({p750: ") "});}
          if (this.state.p750 === ") ") {this.setState({p750: "¡ "});}
          if (this.state.p750 === "¡ ") {this.setState({p750: "! "});}
          if (this.state.p750 === "! ") {this.setState({p750: "¿ "});}
          if (this.state.p750 === "¿ ") {this.setState({p750: "? "});}
          if (this.state.p750 === "? ") {this.setState({p750: " "});}
  }
  p751() {
          if (this.state.p751 === "me") {
                  this.setState({p751: "Me"});
          } else {
                  this.setState({p751: "me"});
          }
  }
  p752() {
          if (this.state.p752 === " ") {this.setState({p752: ", "});}
          if (this.state.p752 === ", ") {this.setState({p752: "; "});}
          if (this.state.p752 === "; ") {this.setState({p752: ": "});}
          if (this.state.p752 === ": ") {this.setState({p752: "( "});}
          if (this.state.p752 === "( ") {this.setState({p752: ") "});}
          if (this.state.p752 === ") ") {this.setState({p752: "¡ "});}
          if (this.state.p752 === "¡ ") {this.setState({p752: "! "});}
          if (this.state.p752 === "! ") {this.setState({p752: "¿ "});}
          if (this.state.p752 === "¿ ") {this.setState({p752: "? "});}
          if (this.state.p752 === "? ") {this.setState({p752: " "});}
  }
  p753() {
          if (this.state.p753 === "trae") {
                  this.setState({p753: "Trae"});
          } else {
                  this.setState({p753: "trae"});
          }
  }
  p754() {
          if (this.state.p754 === " ") {this.setState({p754: ", "});}
          if (this.state.p754 === ", ") {this.setState({p754: "; "});}
          if (this.state.p754 === "; ") {this.setState({p754: ": "});}
          if (this.state.p754 === ": ") {this.setState({p754: "( "});}
          if (this.state.p754 === "( ") {this.setState({p754: ") "});}
          if (this.state.p754 === ") ") {this.setState({p754: "¡ "});}
          if (this.state.p754 === "¡ ") {this.setState({p754: "! "});}
          if (this.state.p754 === "! ") {this.setState({p754: "¿ "});}
          if (this.state.p754 === "¿ ") {this.setState({p754: "? "});}
          if (this.state.p754 === "? ") {this.setState({p754: " "});}
  }
  p755() {
          if (this.state.p755 === "el") {
                  this.setState({p755: "El"});
          } else {
                  this.setState({p755: "el"});
          }
  }
  p756() {
          if (this.state.p756 === " ") {this.setState({p756: ", "});}
          if (this.state.p756 === ", ") {this.setState({p756: "; "});}
          if (this.state.p756 === "; ") {this.setState({p756: ": "});}
          if (this.state.p756 === ": ") {this.setState({p756: "( "});}
          if (this.state.p756 === "( ") {this.setState({p756: ") "});}
          if (this.state.p756 === ") ") {this.setState({p756: "¡ "});}
          if (this.state.p756 === "¡ ") {this.setState({p756: "! "});}
          if (this.state.p756 === "! ") {this.setState({p756: "¿ "});}
          if (this.state.p756 === "¿ ") {this.setState({p756: "? "});}
          if (this.state.p756 === "? ") {this.setState({p756: " "});}
  }
  p757() {
          if (this.state.p757 === "eco") {
                  this.setState({p757: "Eco"});
          } else {
                  this.setState({p757: "eco"});
          }
  }
  p758() {
          if (this.state.p758 === " ") {this.setState({p758: ", "});}
          if (this.state.p758 === ", ") {this.setState({p758: "; "});}
          if (this.state.p758 === "; ") {this.setState({p758: ": "});}
          if (this.state.p758 === ": ") {this.setState({p758: "( "});}
          if (this.state.p758 === "( ") {this.setState({p758: ") "});}
          if (this.state.p758 === ") ") {this.setState({p758: "¡ "});}
          if (this.state.p758 === "¡ ") {this.setState({p758: "! "});}
          if (this.state.p758 === "! ") {this.setState({p758: "¿ "});}
          if (this.state.p758 === "¿ ") {this.setState({p758: "? "});}
          if (this.state.p758 === "? ") {this.setState({p758: " "});}
  }
  p759() {
          if (this.state.p759 === "de") {
                  this.setState({p759: "De"});
          } else {
                  this.setState({p759: "de"});
          }
  }
  p760() {
          if (this.state.p760 === " ") {this.setState({p760: ", "});}
          if (this.state.p760 === ", ") {this.setState({p760: "; "});}
          if (this.state.p760 === "; ") {this.setState({p760: ": "});}
          if (this.state.p760 === ": ") {this.setState({p760: "( "});}
          if (this.state.p760 === "( ") {this.setState({p760: ") "});}
          if (this.state.p760 === ") ") {this.setState({p760: "¡ "});}
          if (this.state.p760 === "¡ ") {this.setState({p760: "! "});}
          if (this.state.p760 === "! ") {this.setState({p760: "¿ "});}
          if (this.state.p760 === "¿ ") {this.setState({p760: "? "});}
          if (this.state.p760 === "? ") {this.setState({p760: " "});}
  }
  p761() {
          if (this.state.p761 === "sus") {
                  this.setState({p761: "Sus"});
          } else {
                  this.setState({p761: "sus"});
          }
  }
  p762() {
          if (this.state.p762 === " ") {this.setState({p762: ", "});}
          if (this.state.p762 === ", ") {this.setState({p762: "; "});}
          if (this.state.p762 === "; ") {this.setState({p762: ": "});}
          if (this.state.p762 === ": ") {this.setState({p762: "( "});}
          if (this.state.p762 === "( ") {this.setState({p762: ") "});}
          if (this.state.p762 === ") ") {this.setState({p762: "¡ "});}
          if (this.state.p762 === "¡ ") {this.setState({p762: "! "});}
          if (this.state.p762 === "! ") {this.setState({p762: "¿ "});}
          if (this.state.p762 === "¿ ") {this.setState({p762: "? "});}
          if (this.state.p762 === "? ") {this.setState({p762: " "});}
  }
  p763() {
          if (this.state.p763 === "pasos") {
                  this.setState({p763: "Pasos"});
          } else {
                  this.setState({p763: "pasos"});
          }
  }
  p764() {
          if (this.state.p764 === " ") {this.setState({p764: ", "});}
          if (this.state.p764 === ", ") {this.setState({p764: "; "});}
          if (this.state.p764 === "; ") {this.setState({p764: ": "});}
          if (this.state.p764 === ": ") {this.setState({p764: "( "});}
          if (this.state.p764 === "( ") {this.setState({p764: ") "});}
          if (this.state.p764 === ") ") {this.setState({p764: "¡ "});}
          if (this.state.p764 === "¡ ") {this.setState({p764: "! "});}
          if (this.state.p764 === "! ") {this.setState({p764: "¿ "});}
          if (this.state.p764 === "¿ ") {this.setState({p764: "? "});}
          if (this.state.p764 === "? ") {this.setState({p764: " "});}
  }
  p765() {
          if (this.state.p765 === "que") {
                  this.setState({p765: "Que"});
          } else {
                  this.setState({p765: "que"});
          }
  }
  p766() {
          if (this.state.p766 === " ") {this.setState({p766: ", "});}
          if (this.state.p766 === ", ") {this.setState({p766: "; "});}
          if (this.state.p766 === "; ") {this.setState({p766: ": "});}
          if (this.state.p766 === ": ") {this.setState({p766: "( "});}
          if (this.state.p766 === "( ") {this.setState({p766: ") "});}
          if (this.state.p766 === ") ") {this.setState({p766: "¡ "});}
          if (this.state.p766 === "¡ ") {this.setState({p766: "! "});}
          if (this.state.p766 === "! ") {this.setState({p766: "¿ "});}
          if (this.state.p766 === "¿ ") {this.setState({p766: "? "});}
          if (this.state.p766 === "? ") {this.setState({p766: " "});}
  }
  p767() {
          if (this.state.p767 === "he") {
                  this.setState({p767: "He"});
          } else {
                  this.setState({p767: "he"});
          }
  }
  p768() {
          if (this.state.p768 === " ") {this.setState({p768: ", "});}
          if (this.state.p768 === ", ") {this.setState({p768: "; "});}
          if (this.state.p768 === "; ") {this.setState({p768: ": "});}
          if (this.state.p768 === ": ") {this.setState({p768: "( "});}
          if (this.state.p768 === "( ") {this.setState({p768: ") "});}
          if (this.state.p768 === ") ") {this.setState({p768: "¡ "});}
          if (this.state.p768 === "¡ ") {this.setState({p768: "! "});}
          if (this.state.p768 === "! ") {this.setState({p768: "¿ "});}
          if (this.state.p768 === "¿ ") {this.setState({p768: "? "});}
          if (this.state.p768 === "? ") {this.setState({p768: " "});}
  }
  p769() {
          if (this.state.p769 === "aprendido") {
                  this.setState({p769: "Aprendido"});
          } else {
                  this.setState({p769: "aprendido"});
          }
  }
  p770() {
          if (this.state.p770 === " ") {this.setState({p770: ", "});}
          if (this.state.p770 === ", ") {this.setState({p770: "; "});}
          if (this.state.p770 === "; ") {this.setState({p770: ": "});}
          if (this.state.p770 === ": ") {this.setState({p770: "( "});}
          if (this.state.p770 === "( ") {this.setState({p770: ") "});}
          if (this.state.p770 === ") ") {this.setState({p770: "¡ "});}
          if (this.state.p770 === "¡ ") {this.setState({p770: "! "});}
          if (this.state.p770 === "! ") {this.setState({p770: "¿ "});}
          if (this.state.p770 === "¿ ") {this.setState({p770: "? "});}
          if (this.state.p770 === "? ") {this.setState({p770: " "});}
  }
  p771() {
          if (this.state.p771 === "a") {
                  this.setState({p771: "A"});
          } else {
                  this.setState({p771: "a"});
          }
  }
  p772() {
          if (this.state.p772 === " ") {this.setState({p772: ", "});}
          if (this.state.p772 === ", ") {this.setState({p772: "; "});}
          if (this.state.p772 === "; ") {this.setState({p772: ": "});}
          if (this.state.p772 === ": ") {this.setState({p772: "( "});}
          if (this.state.p772 === "( ") {this.setState({p772: ") "});}
          if (this.state.p772 === ") ") {this.setState({p772: "¡ "});}
          if (this.state.p772 === "¡ ") {this.setState({p772: "! "});}
          if (this.state.p772 === "! ") {this.setState({p772: "¿ "});}
          if (this.state.p772 === "¿ ") {this.setState({p772: "? "});}
          if (this.state.p772 === "? ") {this.setState({p772: " "});}
  }
  p773() {
          if (this.state.p773 === "oí­r") {
                  this.setState({p773: "Oí­r"});
          } else {
                  this.setState({p773: "oí­r"});
          }
  }
  p774() {
          if (this.state.p774 === " ") {this.setState({p774: ", "});}
          if (this.state.p774 === ", ") {this.setState({p774: "; "});}
          if (this.state.p774 === "; ") {this.setState({p774: ": "});}
          if (this.state.p774 === ": ") {this.setState({p774: "( "});}
          if (this.state.p774 === "( ") {this.setState({p774: ") "});}
          if (this.state.p774 === ") ") {this.setState({p774: "¡ "});}
          if (this.state.p774 === "¡ ") {this.setState({p774: "! "});}
          if (this.state.p774 === "! ") {this.setState({p774: "¿ "});}
          if (this.state.p774 === "¿ ") {this.setState({p774: "? "});}
          if (this.state.p774 === "? ") {this.setState({p774: " "});}
  }
  p775() {
          if (this.state.p775 === "aunque") {
                  this.setState({p775: "Aunque"});
          } else {
                  this.setState({p775: "aunque"});
          }
  }
  p776() {
          if (this.state.p776 === " ") {this.setState({p776: ", "});}
          if (this.state.p776 === ", ") {this.setState({p776: "; "});}
          if (this.state.p776 === "; ") {this.setState({p776: ": "});}
          if (this.state.p776 === ": ") {this.setState({p776: "( "});}
          if (this.state.p776 === "( ") {this.setState({p776: ") "});}
          if (this.state.p776 === ") ") {this.setState({p776: "¡ "});}
          if (this.state.p776 === "¡ ") {this.setState({p776: "! "});}
          if (this.state.p776 === "! ") {this.setState({p776: "¿ "});}
          if (this.state.p776 === "¿ ") {this.setState({p776: "? "});}
          if (this.state.p776 === "? ") {this.setState({p776: " "});}
  }
  p777() {
          if (this.state.p777 === "sé") {
                  this.setState({p777: "Sé"});
          } else {
                  this.setState({p777: "sé"});
          }
  }
  p778() {
          if (this.state.p778 === " ") {this.setState({p778: ", "});}
          if (this.state.p778 === ", ") {this.setState({p778: "; "});}
          if (this.state.p778 === "; ") {this.setState({p778: ": "});}
          if (this.state.p778 === ": ") {this.setState({p778: "( "});}
          if (this.state.p778 === "( ") {this.setState({p778: ") "});}
          if (this.state.p778 === ") ") {this.setState({p778: "¡ "});}
          if (this.state.p778 === "¡ ") {this.setState({p778: "! "});}
          if (this.state.p778 === "! ") {this.setState({p778: "¿ "});}
          if (this.state.p778 === "¿ ") {this.setState({p778: "? "});}
          if (this.state.p778 === "? ") {this.setState({p778: " "});}
  }
  p779() {
          if (this.state.p779 === "que") {
                  this.setState({p779: "Que"});
          } else {
                  this.setState({p779: "que"});
          }
  }
  p780() {
          if (this.state.p780 === " ") {this.setState({p780: ", "});}
          if (this.state.p780 === ", ") {this.setState({p780: "; "});}
          if (this.state.p780 === "; ") {this.setState({p780: ": "});}
          if (this.state.p780 === ": ") {this.setState({p780: "( "});}
          if (this.state.p780 === "( ") {this.setState({p780: ") "});}
          if (this.state.p780 === ") ") {this.setState({p780: "¡ "});}
          if (this.state.p780 === "¡ ") {this.setState({p780: "! "});}
          if (this.state.p780 === "! ") {this.setState({p780: "¿ "});}
          if (this.state.p780 === "¿ ") {this.setState({p780: "? "});}
          if (this.state.p780 === "? ") {this.setState({p780: " "});}
  }
  p781() {
          if (this.state.p781 === "son") {
                  this.setState({p781: "Son"});
          } else {
                  this.setState({p781: "son"});
          }
  }
  p782() {
          if (this.state.p782 === " ") {this.setState({p782: ", "});}
          if (this.state.p782 === ", ") {this.setState({p782: "; "});}
          if (this.state.p782 === "; ") {this.setState({p782: ": "});}
          if (this.state.p782 === ": ") {this.setState({p782: "( "});}
          if (this.state.p782 === "( ") {this.setState({p782: ") "});}
          if (this.state.p782 === ") ") {this.setState({p782: "¡ "});}
          if (this.state.p782 === "¡ ") {this.setState({p782: "! "});}
          if (this.state.p782 === "! ") {this.setState({p782: "¿ "});}
          if (this.state.p782 === "¿ ") {this.setState({p782: "? "});}
          if (this.state.p782 === "? ") {this.setState({p782: " "});}
  }
  p783() {
          if (this.state.p783 === "imperceptibles") {
                  this.setState({p783: "Imperceptibles"});
          } else {
                  this.setState({p783: "imperceptibles"});
          }
  }
  p784() {
          if (this.state.p784 === " ") {this.setState({p784: ", "});}
          if (this.state.p784 === ", ") {this.setState({p784: "; "});}
          if (this.state.p784 === "; ") {this.setState({p784: ". "});}
          if (this.state.p784 === ". ") {this.setState({p784: "( "});}
          if (this.state.p784 === "( ") {this.setState({p784: ") "});}
          if (this.state.p784 === ") ") {this.setState({p784: "¡ "});}
          if (this.state.p784 === "¡ ") {this.setState({p784: "! "});}
          if (this.state.p784 === "! ") {this.setState({p784: "¿ "});}
          if (this.state.p784 === "¿ ") {this.setState({p784: "? "});}
          if (this.state.p784 === "? ") {this.setState({p784: " "});}
  }
  p784() {
          if (this.state.p784 === " ") {this.setState({p784: ", "});}
          if (this.state.p784 === ", ") {this.setState({p784: "; "});}
          if (this.state.p784 === "; ") {this.setState({p784: ": "});}
          if (this.state.p784 === ": ") {this.setState({p784: "( "});}
          if (this.state.p784 === "( ") {this.setState({p784: ") "});}
          if (this.state.p784 === ") ") {this.setState({p784: "¡ "});}
          if (this.state.p784 === "¡ ") {this.setState({p784: "! "});}
          if (this.state.p784 === "! ") {this.setState({p784: "¿ "});}
          if (this.state.p784 === "¿ ") {this.setState({p784: "? "});}
          if (this.state.p784 === "? ") {this.setState({p784: " "});}
  }
  p785() {
          if (this.state.p785 === "muchos") {
                  this.setState({p785: "Muchos"});
          } else {
                  this.setState({p785: "muchos"});
          }
  }
  p786() {
          if (this.state.p786 === " ") {this.setState({p786: ", "});}
          if (this.state.p786 === ", ") {this.setState({p786: "; "});}
          if (this.state.p786 === "; ") {this.setState({p786: ": "});}
          if (this.state.p786 === ": ") {this.setState({p786: "( "});}
          if (this.state.p786 === "( ") {this.setState({p786: ") "});}
          if (this.state.p786 === ") ") {this.setState({p786: "¡ "});}
          if (this.state.p786 === "¡ ") {this.setState({p786: "! "});}
          if (this.state.p786 === "! ") {this.setState({p786: "¿ "});}
          if (this.state.p786 === "¿ ") {this.setState({p786: "? "});}
          if (this.state.p786 === "? ") {this.setState({p786: " "});}
  }
  p787() {
          if (this.state.p787 === "dí­as") {
                  this.setState({p787: "Dí­as"});
          } else {
                  this.setState({p787: "dí­as"});
          }
  }
  p788() {
          if (this.state.p788 === " ") {this.setState({p788: ", "});}
          if (this.state.p788 === ", ") {this.setState({p788: "; "});}
          if (this.state.p788 === "; ") {this.setState({p788: ": "});}
          if (this.state.p788 === ": ") {this.setState({p788: "( "});}
          if (this.state.p788 === "( ") {this.setState({p788: ") "});}
          if (this.state.p788 === ") ") {this.setState({p788: "¡ "});}
          if (this.state.p788 === "¡ ") {this.setState({p788: "! "});}
          if (this.state.p788 === "! ") {this.setState({p788: "¿ "});}
          if (this.state.p788 === "¿ ") {this.setState({p788: "? "});}
          if (this.state.p788 === "? ") {this.setState({p788: " "});}
  }
  p789() {
          if (this.state.p789 === "encuentro") {
                  this.setState({p789: "Encuentro"});
          } else {
                  this.setState({p789: "encuentro"});
          }
  }
  p790() {
          if (this.state.p790 === " ") {this.setState({p790: ", "});}
          if (this.state.p790 === ", ") {this.setState({p790: "; "});}
          if (this.state.p790 === "; ") {this.setState({p790: ": "});}
          if (this.state.p790 === ": ") {this.setState({p790: "( "});}
          if (this.state.p790 === "( ") {this.setState({p790: ") "});}
          if (this.state.p790 === ") ") {this.setState({p790: "¡ "});}
          if (this.state.p790 === "¡ ") {this.setState({p790: "! "});}
          if (this.state.p790 === "! ") {this.setState({p790: "¿ "});}
          if (this.state.p790 === "¿ ") {this.setState({p790: "? "});}
          if (this.state.p790 === "? ") {this.setState({p790: " "});}
  }
  p791() {
          if (this.state.p791 === "intacto") {
                  this.setState({p791: "Intacto"});
          } else {
                  this.setState({p791: "intacto"});
          }
  }
  p792() {
          if (this.state.p792 === " ") {this.setState({p792: ", "});}
          if (this.state.p792 === ", ") {this.setState({p792: "; "});}
          if (this.state.p792 === "; ") {this.setState({p792: ": "});}
          if (this.state.p792 === ": ") {this.setState({p792: "( "});}
          if (this.state.p792 === "( ") {this.setState({p792: ") "});}
          if (this.state.p792 === ") ") {this.setState({p792: "¡ "});}
          if (this.state.p792 === "¡ ") {this.setState({p792: "! "});}
          if (this.state.p792 === "! ") {this.setState({p792: "¿ "});}
          if (this.state.p792 === "¿ ") {this.setState({p792: "? "});}
          if (this.state.p792 === "? ") {this.setState({p792: " "});}
  }
  p793() {
          if (this.state.p793 === "el") {
                  this.setState({p793: "El"});
          } else {
                  this.setState({p793: "el"});
          }
  }
  p794() {
          if (this.state.p794 === " ") {this.setState({p794: ", "});}
          if (this.state.p794 === ", ") {this.setState({p794: "; "});}
          if (this.state.p794 === "; ") {this.setState({p794: ": "});}
          if (this.state.p794 === ": ") {this.setState({p794: "( "});}
          if (this.state.p794 === "( ") {this.setState({p794: ") "});}
          if (this.state.p794 === ") ") {this.setState({p794: "¡ "});}
          if (this.state.p794 === "¡ ") {this.setState({p794: "! "});}
          if (this.state.p794 === "! ") {this.setState({p794: "¿ "});}
          if (this.state.p794 === "¿ ") {this.setState({p794: "? "});}
          if (this.state.p794 === "? ") {this.setState({p794: " "});}
  }
  p795() {
          if (this.state.p795 === "alimento") {
                  this.setState({p795: "Alimento"});
          } else {
                  this.setState({p795: "alimento"});
          }
  }
  p796() {
          if (this.state.p796 === " ") {this.setState({p796: ", "});}
          if (this.state.p796 === ", ") {this.setState({p796: "; "});}
          if (this.state.p796 === "; ") {this.setState({p796: ": "});}
          if (this.state.p796 === ": ") {this.setState({p796: "( "});}
          if (this.state.p796 === "( ") {this.setState({p796: ") "});}
          if (this.state.p796 === ") ") {this.setState({p796: "¡ "});}
          if (this.state.p796 === "¡ ") {this.setState({p796: "! "});}
          if (this.state.p796 === "! ") {this.setState({p796: "¿ "});}
          if (this.state.p796 === "¿ ") {this.setState({p796: "? "});}
          if (this.state.p796 === "? ") {this.setState({p796: " "});}
  }
  p797() {
          if (this.state.p797 === "que") {
                  this.setState({p797: "Que"});
          } else {
                  this.setState({p797: "que"});
          }
  }
  p798() {
          if (this.state.p798 === " ") {this.setState({p798: ", "});}
          if (this.state.p798 === ", ") {this.setState({p798: "; "});}
          if (this.state.p798 === "; ") {this.setState({p798: ": "});}
          if (this.state.p798 === ": ") {this.setState({p798: "( "});}
          if (this.state.p798 === "( ") {this.setState({p798: ") "});}
          if (this.state.p798 === ") ") {this.setState({p798: "¡ "});}
          if (this.state.p798 === "¡ ") {this.setState({p798: "! "});}
          if (this.state.p798 === "! ") {this.setState({p798: "¿ "});}
          if (this.state.p798 === "¿ ") {this.setState({p798: "? "});}
          if (this.state.p798 === "? ") {this.setState({p798: " "});}
  }
  p799() {
          if (this.state.p799 === "he") {
                  this.setState({p799: "He"});
          } else {
                  this.setState({p799: "he"});
          }
  }
  p800() {
          if (this.state.p800 === " ") {this.setState({p800: ", "});}
          if (this.state.p800 === ", ") {this.setState({p800: "; "});}
          if (this.state.p800 === "; ") {this.setState({p800: ": "});}
          if (this.state.p800 === ": ") {this.setState({p800: "( "});}
          if (this.state.p800 === "( ") {this.setState({p800: ") "});}
          if (this.state.p800 === ") ") {this.setState({p800: "¡ "});}
          if (this.state.p800 === "¡ ") {this.setState({p800: "! "});}
          if (this.state.p800 === "! ") {this.setState({p800: "¿ "});}
          if (this.state.p800 === "¿ ") {this.setState({p800: "? "});}
          if (this.state.p800 === "? ") {this.setState({p800: " "});}
  }
  p801() {
          if (this.state.p801 === "dejado") {
                  this.setState({p801: "Dejado"});
          } else {
                  this.setState({p801: "dejado"});
          }
  }
  p802() {
          if (this.state.p802 === " ") {this.setState({p802: ", "});}
          if (this.state.p802 === ", ") {this.setState({p802: "; "});}
          if (this.state.p802 === "; ") {this.setState({p802: ": "});}
          if (this.state.p802 === ": ") {this.setState({p802: "( "});}
          if (this.state.p802 === "( ") {this.setState({p802: ") "});}
          if (this.state.p802 === ") ") {this.setState({p802: "¡ "});}
          if (this.state.p802 === "¡ ") {this.setState({p802: "! "});}
          if (this.state.p802 === "! ") {this.setState({p802: "¿ "});}
          if (this.state.p802 === "¿ ") {this.setState({p802: "? "});}
          if (this.state.p802 === "? ") {this.setState({p802: " "});}
  }
  p803() {
          if (this.state.p803 === "la") {
                  this.setState({p803: "La"});
          } else {
                  this.setState({p803: "la"});
          }
  }
  p804() {
          if (this.state.p804 === " ") {this.setState({p804: ", "});}
          if (this.state.p804 === ", ") {this.setState({p804: "; "});}
          if (this.state.p804 === "; ") {this.setState({p804: ": "});}
          if (this.state.p804 === ": ") {this.setState({p804: "( "});}
          if (this.state.p804 === "( ") {this.setState({p804: ") "});}
          if (this.state.p804 === ") ") {this.setState({p804: "¡ "});}
          if (this.state.p804 === "¡ ") {this.setState({p804: "! "});}
          if (this.state.p804 === "! ") {this.setState({p804: "¿ "});}
          if (this.state.p804 === "¿ ") {this.setState({p804: "? "});}
          if (this.state.p804 === "? ") {this.setState({p804: " "});}
  }
  p805() {
          if (this.state.p805 === "ví­spera") {
                  this.setState({p805: "Ví­spera"});
          } else {
                  this.setState({p805: "ví­spera"});
          }
  }
  p806() {
          if (this.state.p806 === " ") {this.setState({p806: ", "});}
          if (this.state.p806 === ", ") {this.setState({p806: "; "});}
          if (this.state.p806 === "; ") {this.setState({p806: ". "});}
          if (this.state.p806 === ". ") {this.setState({p806: "( "});}
          if (this.state.p806 === "( ") {this.setState({p806: ") "});}
          if (this.state.p806 === ") ") {this.setState({p806: "¡ "});}
          if (this.state.p806 === "¡ ") {this.setState({p806: "! "});}
          if (this.state.p806 === "! ") {this.setState({p806: "¿ "});}
          if (this.state.p806 === "¿ ") {this.setState({p806: "? "});}
          if (this.state.p806 === "? ") {this.setState({p806: " "});}
  }
  p807() {
          if (this.state.p807 === "cuando") {
                  this.setState({p807: "Cuando"});
          } else {
                  this.setState({p807: "cuando"});
          }
  }
  p808() {
          if (this.state.p808 === " ") {this.setState({p808: ", "});}
          if (this.state.p808 === ", ") {this.setState({p808: "; "});}
          if (this.state.p808 === "; ") {this.setState({p808: ": "});}
          if (this.state.p808 === ": ") {this.setState({p808: "( "});}
          if (this.state.p808 === "( ") {this.setState({p808: ") "});}
          if (this.state.p808 === ") ") {this.setState({p808: "¡ "});}
          if (this.state.p808 === "¡ ") {this.setState({p808: "! "});}
          if (this.state.p808 === "! ") {this.setState({p808: "¿ "});}
          if (this.state.p808 === "¿ ") {this.setState({p808: "? "});}
          if (this.state.p808 === "? ") {this.setState({p808: " "});}
  }
  p809() {
          if (this.state.p809 === "desaparece") {
                  this.setState({p809: "Desaparece"});
          } else {
                  this.setState({p809: "desaparece"});
          }
  }
  p810() {
          if (this.state.p810 === " ") {this.setState({p810: ", "});}
          if (this.state.p810 === ", ") {this.setState({p810: "; "});}
          if (this.state.p810 === "; ") {this.setState({p810: ": "});}
          if (this.state.p810 === ": ") {this.setState({p810: "( "});}
          if (this.state.p810 === "( ") {this.setState({p810: ") "});}
          if (this.state.p810 === ") ") {this.setState({p810: "¡ "});}
          if (this.state.p810 === "¡ ") {this.setState({p810: "! "});}
          if (this.state.p810 === "! ") {this.setState({p810: "¿ "});}
          if (this.state.p810 === "¿ ") {this.setState({p810: "? "});}
          if (this.state.p810 === "? ") {this.setState({p810: " "});}
  }
  p811() {
          if (this.state.p811 === "no") {
                  this.setState({p811: "No"});
          } else {
                  this.setState({p811: "no"});
          }
  }
  p812() {
          if (this.state.p812 === " ") {this.setState({p812: ", "});}
          if (this.state.p812 === ", ") {this.setState({p812: "; "});}
          if (this.state.p812 === "; ") {this.setState({p812: ": "});}
          if (this.state.p812 === ": ") {this.setState({p812: "( "});}
          if (this.state.p812 === "( ") {this.setState({p812: ") "});}
          if (this.state.p812 === ") ") {this.setState({p812: "¡ "});}
          if (this.state.p812 === "¡ ") {this.setState({p812: "! "});}
          if (this.state.p812 === "! ") {this.setState({p812: "¿ "});}
          if (this.state.p812 === "¿ ") {this.setState({p812: "? "});}
          if (this.state.p812 === "? ") {this.setState({p812: " "});}
  }
  p813() {
          if (this.state.p813 === "sé") {
                  this.setState({p813: "Sé"});
          } else {
                  this.setState({p813: "sé"});
          }
  }
  p814() {
          if (this.state.p814 === " ") {this.setState({p814: ", "});}
          if (this.state.p814 === ", ") {this.setState({p814: "; "});}
          if (this.state.p814 === "; ") {this.setState({p814: ": "});}
          if (this.state.p814 === ": ") {this.setState({p814: "( "});}
          if (this.state.p814 === "( ") {this.setState({p814: ") "});}
          if (this.state.p814 === ") ") {this.setState({p814: "¡ "});}
          if (this.state.p814 === "¡ ") {this.setState({p814: "! "});}
          if (this.state.p814 === "! ") {this.setState({p814: "¿ "});}
          if (this.state.p814 === "¿ ") {this.setState({p814: "? "});}
          if (this.state.p814 === "? ") {this.setState({p814: " "});}
  }
  p815() {
          if (this.state.p815 === "si") {
                  this.setState({p815: "Si"});
          } else {
                  this.setState({p815: "si"});
          }
  }
  p816() {
          if (this.state.p816 === " ") {this.setState({p816: ", "});}
          if (this.state.p816 === ", ") {this.setState({p816: "; "});}
          if (this.state.p816 === "; ") {this.setState({p816: ": "});}
          if (this.state.p816 === ": ") {this.setState({p816: "( "});}
          if (this.state.p816 === "( ") {this.setState({p816: ") "});}
          if (this.state.p816 === ") ") {this.setState({p816: "¡ "});}
          if (this.state.p816 === "¡ ") {this.setState({p816: "! "});}
          if (this.state.p816 === "! ") {this.setState({p816: "¿ "});}
          if (this.state.p816 === "¿ ") {this.setState({p816: "? "});}
          if (this.state.p816 === "? ") {this.setState({p816: " "});}
  }
  p817() {
          if (this.state.p817 === "lo") {
                  this.setState({p817: "Lo"});
          } else {
                  this.setState({p817: "lo"});
          }
  }
  p818() {
          if (this.state.p818 === " ") {this.setState({p818: ", "});}
          if (this.state.p818 === ", ") {this.setState({p818: "; "});}
          if (this.state.p818 === "; ") {this.setState({p818: ": "});}
          if (this.state.p818 === ": ") {this.setState({p818: "( "});}
          if (this.state.p818 === "( ") {this.setState({p818: ") "});}
          if (this.state.p818 === ") ") {this.setState({p818: "¡ "});}
          if (this.state.p818 === "¡ ") {this.setState({p818: "! "});}
          if (this.state.p818 === "! ") {this.setState({p818: "¿ "});}
          if (this.state.p818 === "¿ ") {this.setState({p818: "? "});}
          if (this.state.p818 === "? ") {this.setState({p818: " "});}
  }
  p819() {
          if (this.state.p819 === "ha") {
                  this.setState({p819: "Ha"});
          } else {
                  this.setState({p819: "ha"});
          }
  }
  p820() {
          if (this.state.p820 === " ") {this.setState({p820: ", "});}
          if (this.state.p820 === ", ") {this.setState({p820: "; "});}
          if (this.state.p820 === "; ") {this.setState({p820: ": "});}
          if (this.state.p820 === ": ") {this.setState({p820: "( "});}
          if (this.state.p820 === "( ") {this.setState({p820: ") "});}
          if (this.state.p820 === ") ") {this.setState({p820: "¡ "});}
          if (this.state.p820 === "¡ ") {this.setState({p820: "! "});}
          if (this.state.p820 === "! ") {this.setState({p820: "¿ "});}
          if (this.state.p820 === "¿ ") {this.setState({p820: "? "});}
          if (this.state.p820 === "? ") {this.setState({p820: " "});}
  }
  p821() {
          if (this.state.p821 === "devorado") {
                  this.setState({p821: "Devorado"});
          } else {
                  this.setState({p821: "devorado"});
          }
  }
  p822() {
          if (this.state.p822 === " ") {this.setState({p822: ", "});}
          if (this.state.p822 === ", ") {this.setState({p822: "; "});}
          if (this.state.p822 === "; ") {this.setState({p822: ": "});}
          if (this.state.p822 === ": ") {this.setState({p822: "( "});}
          if (this.state.p822 === "( ") {this.setState({p822: ") "});}
          if (this.state.p822 === ") ") {this.setState({p822: "¡ "});}
          if (this.state.p822 === "¡ ") {this.setState({p822: "! "});}
          if (this.state.p822 === "! ") {this.setState({p822: "¿ "});}
          if (this.state.p822 === "¿ ") {this.setState({p822: "? "});}
          if (this.state.p822 === "? ") {this.setState({p822: " "});}
  }
  p823() {
          if (this.state.p823 === "la") {
                  this.setState({p823: "La"});
          } else {
                  this.setState({p823: "la"});
          }
  }
  p824() {
          if (this.state.p824 === " ") {this.setState({p824: ", "});}
          if (this.state.p824 === ", ") {this.setState({p824: "; "});}
          if (this.state.p824 === "; ") {this.setState({p824: ": "});}
          if (this.state.p824 === ": ") {this.setState({p824: "( "});}
          if (this.state.p824 === "( ") {this.setState({p824: ") "});}
          if (this.state.p824 === ") ") {this.setState({p824: "¡ "});}
          if (this.state.p824 === "¡ ") {this.setState({p824: "! "});}
          if (this.state.p824 === "! ") {this.setState({p824: "¿ "});}
          if (this.state.p824 === "¿ ") {this.setState({p824: "? "});}
          if (this.state.p824 === "? ") {this.setState({p824: " "});}
  }
  p825() {
          if (this.state.p825 === "migala") {
                  this.setState({p825: "Migala"});
          } else {
                  this.setState({p825: "migala"});
          }
  }
  p826() {
          if (this.state.p826 === " ") {this.setState({p826: ", "});}
          if (this.state.p826 === ", ") {this.setState({p826: "; "});}
          if (this.state.p826 === "; ") {this.setState({p826: ": "});}
          if (this.state.p826 === ": ") {this.setState({p826: "( "});}
          if (this.state.p826 === "( ") {this.setState({p826: ") "});}
          if (this.state.p826 === ") ") {this.setState({p826: "¡ "});}
          if (this.state.p826 === "¡ ") {this.setState({p826: "! "});}
          if (this.state.p826 === "! ") {this.setState({p826: "¿ "});}
          if (this.state.p826 === "¿ ") {this.setState({p826: "? "});}
          if (this.state.p826 === "? ") {this.setState({p826: " "});}
  }
  p827() {
          if (this.state.p827 === "o") {
                  this.setState({p827: "O"});
          } else {
                  this.setState({p827: "o"});
          }
  }
  p828() {
          if (this.state.p828 === " ") {this.setState({p828: ", "});}
          if (this.state.p828 === ", ") {this.setState({p828: "; "});}
          if (this.state.p828 === "; ") {this.setState({p828: ": "});}
          if (this.state.p828 === ": ") {this.setState({p828: "( "});}
          if (this.state.p828 === "( ") {this.setState({p828: ") "});}
          if (this.state.p828 === ") ") {this.setState({p828: "¡ "});}
          if (this.state.p828 === "¡ ") {this.setState({p828: "! "});}
          if (this.state.p828 === "! ") {this.setState({p828: "¿ "});}
          if (this.state.p828 === "¿ ") {this.setState({p828: "? "});}
          if (this.state.p828 === "? ") {this.setState({p828: " "});}
  }
  p829() {
          if (this.state.p829 === "algún") {
                  this.setState({p829: "Algún"});
          } else {
                  this.setState({p829: "algún"});
          }
  }
  p830() {
          if (this.state.p830 === " ") {this.setState({p830: ", "});}
          if (this.state.p830 === ", ") {this.setState({p830: "; "});}
          if (this.state.p830 === "; ") {this.setState({p830: ": "});}
          if (this.state.p830 === ": ") {this.setState({p830: "( "});}
          if (this.state.p830 === "( ") {this.setState({p830: ") "});}
          if (this.state.p830 === ") ") {this.setState({p830: "¡ "});}
          if (this.state.p830 === "¡ ") {this.setState({p830: "! "});}
          if (this.state.p830 === "! ") {this.setState({p830: "¿ "});}
          if (this.state.p830 === "¿ ") {this.setState({p830: "? "});}
          if (this.state.p830 === "? ") {this.setState({p830: " "});}
  }
  p831() {
          if (this.state.p831 === "otro") {
                  this.setState({p831: "Otro"});
          } else {
                  this.setState({p831: "otro"});
          }
  }
  p832() {
          if (this.state.p832 === " ") {this.setState({p832: ", "});}
          if (this.state.p832 === ", ") {this.setState({p832: "; "});}
          if (this.state.p832 === "; ") {this.setState({p832: ": "});}
          if (this.state.p832 === ": ") {this.setState({p832: "( "});}
          if (this.state.p832 === "( ") {this.setState({p832: ") "});}
          if (this.state.p832 === ") ") {this.setState({p832: "¡ "});}
          if (this.state.p832 === "¡ ") {this.setState({p832: "! "});}
          if (this.state.p832 === "! ") {this.setState({p832: "¿ "});}
          if (this.state.p832 === "¿ ") {this.setState({p832: "? "});}
          if (this.state.p832 === "? ") {this.setState({p832: " "});}
  }
  p833() {
          if (this.state.p833 === "inocente") {
                  this.setState({p833: "Inocente"});
          } else {
                  this.setState({p833: "inocente"});
          }
  }
  p834() {
          if (this.state.p834 === " ") {this.setState({p834: ", "});}
          if (this.state.p834 === ", ") {this.setState({p834: "; "});}
          if (this.state.p834 === "; ") {this.setState({p834: ": "});}
          if (this.state.p834 === ": ") {this.setState({p834: "( "});}
          if (this.state.p834 === "( ") {this.setState({p834: ") "});}
          if (this.state.p834 === ") ") {this.setState({p834: "¡ "});}
          if (this.state.p834 === "¡ ") {this.setState({p834: "! "});}
          if (this.state.p834 === "! ") {this.setState({p834: "¿ "});}
          if (this.state.p834 === "¿ ") {this.setState({p834: "? "});}
          if (this.state.p834 === "? ") {this.setState({p834: " "});}
  }
  p835() {
          if (this.state.p835 === "huésped") {
                  this.setState({p835: "Huésped"});
          } else {
                  this.setState({p835: "huésped"});
          }
  }
  p836() {
          if (this.state.p836 === " ") {this.setState({p836: ", "});}
          if (this.state.p836 === ", ") {this.setState({p836: "; "});}
          if (this.state.p836 === "; ") {this.setState({p836: ": "});}
          if (this.state.p836 === ": ") {this.setState({p836: "( "});}
          if (this.state.p836 === "( ") {this.setState({p836: ") "});}
          if (this.state.p836 === ") ") {this.setState({p836: "¡ "});}
          if (this.state.p836 === "¡ ") {this.setState({p836: "! "});}
          if (this.state.p836 === "! ") {this.setState({p836: "¿ "});}
          if (this.state.p836 === "¿ ") {this.setState({p836: "? "});}
          if (this.state.p836 === "? ") {this.setState({p836: " "});}
  }
  p837() {
          if (this.state.p837 === "de") {
                  this.setState({p837: "De"});
          } else {
                  this.setState({p837: "de"});
          }
  }
  p838() {
          if (this.state.p838 === " ") {this.setState({p838: ", "});}
          if (this.state.p838 === ", ") {this.setState({p838: "; "});}
          if (this.state.p838 === "; ") {this.setState({p838: ": "});}
          if (this.state.p838 === ": ") {this.setState({p838: "( "});}
          if (this.state.p838 === "( ") {this.setState({p838: ") "});}
          if (this.state.p838 === ") ") {this.setState({p838: "¡ "});}
          if (this.state.p838 === "¡ ") {this.setState({p838: "! "});}
          if (this.state.p838 === "! ") {this.setState({p838: "¿ "});}
          if (this.state.p838 === "¿ ") {this.setState({p838: "? "});}
          if (this.state.p838 === "? ") {this.setState({p838: " "});}
  }
  p839() {
          if (this.state.p839 === "la") {
                  this.setState({p839: "La"});
          } else {
                  this.setState({p839: "la"});
          }
  }
  p840() {
          if (this.state.p840 === " ") {this.setState({p840: ", "});}
          if (this.state.p840 === ", ") {this.setState({p840: "; "});}
          if (this.state.p840 === "; ") {this.setState({p840: ": "});}
          if (this.state.p840 === ": ") {this.setState({p840: "( "});}
          if (this.state.p840 === "( ") {this.setState({p840: ") "});}
          if (this.state.p840 === ") ") {this.setState({p840: "¡ "});}
          if (this.state.p840 === "¡ ") {this.setState({p840: "! "});}
          if (this.state.p840 === "! ") {this.setState({p840: "¿ "});}
          if (this.state.p840 === "¿ ") {this.setState({p840: "? "});}
          if (this.state.p840 === "? ") {this.setState({p840: " "});}
  }
  p841() {
          if (this.state.p841 === "casa") {
                  this.setState({p841: "Casa"});
          } else {
                  this.setState({p841: "casa"});
          }
  }
  p842() {
          if (this.state.p842 === " ") {this.setState({p842: ", "});}
          if (this.state.p842 === ", ") {this.setState({p842: "; "});}
          if (this.state.p842 === "; ") {this.setState({p842: ". "});}
          if (this.state.p842 === ". ") {this.setState({p842: "( "});}
          if (this.state.p842 === "( ") {this.setState({p842: ") "});}
          if (this.state.p842 === ") ") {this.setState({p842: "¡ "});}
          if (this.state.p842 === "¡ ") {this.setState({p842: "! "});}
          if (this.state.p842 === "! ") {this.setState({p842: "¿ "});}
          if (this.state.p842 === "¿ ") {this.setState({p842: "? "});}
          if (this.state.p842 === "? ") {this.setState({p842: " "});}
  }
  p843() {
          if (this.state.p843 === "he") {
                  this.setState({p843: "He"});
          } else {
                  this.setState({p843: "he"});
          }
  }
  p844() {
          if (this.state.p844 === " ") {this.setState({p844: ", "});}
          if (this.state.p844 === ", ") {this.setState({p844: "; "});}
          if (this.state.p844 === "; ") {this.setState({p844: ": "});}
          if (this.state.p844 === ": ") {this.setState({p844: "( "});}
          if (this.state.p844 === "( ") {this.setState({p844: ") "});}
          if (this.state.p844 === ") ") {this.setState({p844: "¡ "});}
          if (this.state.p844 === "¡ ") {this.setState({p844: "! "});}
          if (this.state.p844 === "! ") {this.setState({p844: "¿ "});}
          if (this.state.p844 === "¿ ") {this.setState({p844: "? "});}
          if (this.state.p844 === "? ") {this.setState({p844: " "});}
  }
  p845() {
          if (this.state.p845 === "llegado") {
                  this.setState({p845: "Llegado"});
          } else {
                  this.setState({p845: "llegado"});
          }
  }
  p846() {
          if (this.state.p846 === " ") {this.setState({p846: ", "});}
          if (this.state.p846 === ", ") {this.setState({p846: "; "});}
          if (this.state.p846 === "; ") {this.setState({p846: ": "});}
          if (this.state.p846 === ": ") {this.setState({p846: "( "});}
          if (this.state.p846 === "( ") {this.setState({p846: ") "});}
          if (this.state.p846 === ") ") {this.setState({p846: "¡ "});}
          if (this.state.p846 === "¡ ") {this.setState({p846: "! "});}
          if (this.state.p846 === "! ") {this.setState({p846: "¿ "});}
          if (this.state.p846 === "¿ ") {this.setState({p846: "? "});}
          if (this.state.p846 === "? ") {this.setState({p846: " "});}
  }
  p847() {
          if (this.state.p847 === "a") {
                  this.setState({p847: "A"});
          } else {
                  this.setState({p847: "a"});
          }
  }
  p848() {
          if (this.state.p848 === " ") {this.setState({p848: ", "});}
          if (this.state.p848 === ", ") {this.setState({p848: "; "});}
          if (this.state.p848 === "; ") {this.setState({p848: ": "});}
          if (this.state.p848 === ": ") {this.setState({p848: "( "});}
          if (this.state.p848 === "( ") {this.setState({p848: ") "});}
          if (this.state.p848 === ") ") {this.setState({p848: "¡ "});}
          if (this.state.p848 === "¡ ") {this.setState({p848: "! "});}
          if (this.state.p848 === "! ") {this.setState({p848: "¿ "});}
          if (this.state.p848 === "¿ ") {this.setState({p848: "? "});}
          if (this.state.p848 === "? ") {this.setState({p848: " "});}
  }
  p849() {
          if (this.state.p849 === "pensar") {
                  this.setState({p849: "Pensar"});
          } else {
                  this.setState({p849: "pensar"});
          }
  }
  p850() {
          if (this.state.p850 === " ") {this.setState({p850: ", "});}
          if (this.state.p850 === ", ") {this.setState({p850: "; "});}
          if (this.state.p850 === "; ") {this.setState({p850: ": "});}
          if (this.state.p850 === ": ") {this.setState({p850: "( "});}
          if (this.state.p850 === "( ") {this.setState({p850: ") "});}
          if (this.state.p850 === ") ") {this.setState({p850: "¡ "});}
          if (this.state.p850 === "¡ ") {this.setState({p850: "! "});}
          if (this.state.p850 === "! ") {this.setState({p850: "¿ "});}
          if (this.state.p850 === "¿ ") {this.setState({p850: "? "});}
          if (this.state.p850 === "? ") {this.setState({p850: " "});}
  }
  p851() {
          if (this.state.p851 === "también") {
                  this.setState({p851: "También"});
          } else {
                  this.setState({p851: "también"});
          }
  }
  p852() {
          if (this.state.p852 === " ") {this.setState({p852: ", "});}
          if (this.state.p852 === ", ") {this.setState({p852: "; "});}
          if (this.state.p852 === "; ") {this.setState({p852: ": "});}
          if (this.state.p852 === ": ") {this.setState({p852: "( "});}
          if (this.state.p852 === "( ") {this.setState({p852: ") "});}
          if (this.state.p852 === ") ") {this.setState({p852: "¡ "});}
          if (this.state.p852 === "¡ ") {this.setState({p852: "! "});}
          if (this.state.p852 === "! ") {this.setState({p852: "¿ "});}
          if (this.state.p852 === "¿ ") {this.setState({p852: "? "});}
          if (this.state.p852 === "? ") {this.setState({p852: " "});}
  }
  p853() {
          if (this.state.p853 === "que") {
                  this.setState({p853: "Que"});
          } else {
                  this.setState({p853: "que"});
          }
  }
  p854() {
          if (this.state.p854 === " ") {this.setState({p854: ", "});}
          if (this.state.p854 === ", ") {this.setState({p854: "; "});}
          if (this.state.p854 === "; ") {this.setState({p854: ": "});}
          if (this.state.p854 === ": ") {this.setState({p854: "( "});}
          if (this.state.p854 === "( ") {this.setState({p854: ") "});}
          if (this.state.p854 === ") ") {this.setState({p854: "¡ "});}
          if (this.state.p854 === "¡ ") {this.setState({p854: "! "});}
          if (this.state.p854 === "! ") {this.setState({p854: "¿ "});}
          if (this.state.p854 === "¿ ") {this.setState({p854: "? "});}
          if (this.state.p854 === "? ") {this.setState({p854: " "});}
  }
  p855() {
          if (this.state.p855 === "acaso") {
                  this.setState({p855: "Acaso"});
          } else {
                  this.setState({p855: "acaso"});
          }
  }
  p856() {
          if (this.state.p856 === " ") {this.setState({p856: ", "});}
          if (this.state.p856 === ", ") {this.setState({p856: "; "});}
          if (this.state.p856 === "; ") {this.setState({p856: ": "});}
          if (this.state.p856 === ": ") {this.setState({p856: "( "});}
          if (this.state.p856 === "( ") {this.setState({p856: ") "});}
          if (this.state.p856 === ") ") {this.setState({p856: "¡ "});}
          if (this.state.p856 === "¡ ") {this.setState({p856: "! "});}
          if (this.state.p856 === "! ") {this.setState({p856: "¿ "});}
          if (this.state.p856 === "¿ ") {this.setState({p856: "? "});}
          if (this.state.p856 === "? ") {this.setState({p856: " "});}
  }
  p857() {
          if (this.state.p857 === "estoy") {
                  this.setState({p857: "Estoy"});
          } else {
                  this.setState({p857: "estoy"});
          }
  }
  p858() {
          if (this.state.p858 === " ") {this.setState({p858: ", "});}
          if (this.state.p858 === ", ") {this.setState({p858: "; "});}
          if (this.state.p858 === "; ") {this.setState({p858: ": "});}
          if (this.state.p858 === ": ") {this.setState({p858: "( "});}
          if (this.state.p858 === "( ") {this.setState({p858: ") "});}
          if (this.state.p858 === ") ") {this.setState({p858: "¡ "});}
          if (this.state.p858 === "¡ ") {this.setState({p858: "! "});}
          if (this.state.p858 === "! ") {this.setState({p858: "¿ "});}
          if (this.state.p858 === "¿ ") {this.setState({p858: "? "});}
          if (this.state.p858 === "? ") {this.setState({p858: " "});}
  }
  p859() {
          if (this.state.p859 === "siendo") {
                  this.setState({p859: "Siendo"});
          } else {
                  this.setState({p859: "siendo"});
          }
  }
  p860() {
          if (this.state.p860 === " ") {this.setState({p860: ", "});}
          if (this.state.p860 === ", ") {this.setState({p860: "; "});}
          if (this.state.p860 === "; ") {this.setState({p860: ": "});}
          if (this.state.p860 === ": ") {this.setState({p860: "( "});}
          if (this.state.p860 === "( ") {this.setState({p860: ") "});}
          if (this.state.p860 === ") ") {this.setState({p860: "¡ "});}
          if (this.state.p860 === "¡ ") {this.setState({p860: "! "});}
          if (this.state.p860 === "! ") {this.setState({p860: "¿ "});}
          if (this.state.p860 === "¿ ") {this.setState({p860: "? "});}
          if (this.state.p860 === "? ") {this.setState({p860: " "});}
  }
  p861() {
          if (this.state.p861 === "ví­ctima") {
                  this.setState({p861: "Ví­ctima"});
          } else {
                  this.setState({p861: "ví­ctima"});
          }
  }
  p862() {
          if (this.state.p862 === " ") {this.setState({p862: ", "});}
          if (this.state.p862 === ", ") {this.setState({p862: "; "});}
          if (this.state.p862 === "; ") {this.setState({p862: ": "});}
          if (this.state.p862 === ": ") {this.setState({p862: "( "});}
          if (this.state.p862 === "( ") {this.setState({p862: ") "});}
          if (this.state.p862 === ") ") {this.setState({p862: "¡ "});}
          if (this.state.p862 === "¡ ") {this.setState({p862: "! "});}
          if (this.state.p862 === "! ") {this.setState({p862: "¿ "});}
          if (this.state.p862 === "¿ ") {this.setState({p862: "? "});}
          if (this.state.p862 === "? ") {this.setState({p862: " "});}
  }
  p863() {
          if (this.state.p863 === "de") {
                  this.setState({p863: "De"});
          } else {
                  this.setState({p863: "de"});
          }
  }
  p864() {
          if (this.state.p864 === " ") {this.setState({p864: ", "});}
          if (this.state.p864 === ", ") {this.setState({p864: "; "});}
          if (this.state.p864 === "; ") {this.setState({p864: ": "});}
          if (this.state.p864 === ": ") {this.setState({p864: "( "});}
          if (this.state.p864 === "( ") {this.setState({p864: ") "});}
          if (this.state.p864 === ") ") {this.setState({p864: "¡ "});}
          if (this.state.p864 === "¡ ") {this.setState({p864: "! "});}
          if (this.state.p864 === "! ") {this.setState({p864: "¿ "});}
          if (this.state.p864 === "¿ ") {this.setState({p864: "? "});}
          if (this.state.p864 === "? ") {this.setState({p864: " "});}
  }
  p865() {
          if (this.state.p865 === "una") {
                  this.setState({p865: "Una"});
          } else {
                  this.setState({p865: "una"});
          }
  }
  p866() {
          if (this.state.p866 === " ") {this.setState({p866: ", "});}
          if (this.state.p866 === ", ") {this.setState({p866: "; "});}
          if (this.state.p866 === "; ") {this.setState({p866: ": "});}
          if (this.state.p866 === ": ") {this.setState({p866: "( "});}
          if (this.state.p866 === "( ") {this.setState({p866: ") "});}
          if (this.state.p866 === ") ") {this.setState({p866: "¡ "});}
          if (this.state.p866 === "¡ ") {this.setState({p866: "! "});}
          if (this.state.p866 === "! ") {this.setState({p866: "¿ "});}
          if (this.state.p866 === "¿ ") {this.setState({p866: "? "});}
          if (this.state.p866 === "? ") {this.setState({p866: " "});}
  }
  p867() {
          if (this.state.p867 === "supercherí­a") {
                  this.setState({p867: "Supercherí­a"});
          } else {
                  this.setState({p867: "supercherí­a"});
          }
  }
  p868() {
          if (this.state.p868 === " ") {this.setState({p868: ", "});}
          if (this.state.p868 === ", ") {this.setState({p868: "; "});}
          if (this.state.p868 === "; ") {this.setState({p868: ": "});}
          if (this.state.p868 === ": ") {this.setState({p868: "( "});}
          if (this.state.p868 === "( ") {this.setState({p868: ") "});}
          if (this.state.p868 === ") ") {this.setState({p868: "¡ "});}
          if (this.state.p868 === "¡ ") {this.setState({p868: "! "});}
          if (this.state.p868 === "! ") {this.setState({p868: "¿ "});}
          if (this.state.p868 === "¿ ") {this.setState({p868: "? "});}
          if (this.state.p868 === "? ") {this.setState({p868: " "});}
  }
  p869() {
          if (this.state.p869 === "y") {
                  this.setState({p869: "Y"});
          } else {
                  this.setState({p869: "y"});
          }
  }
  p870() {
          if (this.state.p870 === " ") {this.setState({p870: ", "});}
          if (this.state.p870 === ", ") {this.setState({p870: "; "});}
          if (this.state.p870 === "; ") {this.setState({p870: ": "});}
          if (this.state.p870 === ": ") {this.setState({p870: "( "});}
          if (this.state.p870 === "( ") {this.setState({p870: ") "});}
          if (this.state.p870 === ") ") {this.setState({p870: "¡ "});}
          if (this.state.p870 === "¡ ") {this.setState({p870: "! "});}
          if (this.state.p870 === "! ") {this.setState({p870: "¿ "});}
          if (this.state.p870 === "¿ ") {this.setState({p870: "? "});}
          if (this.state.p870 === "? ") {this.setState({p870: " "});}
  }
  p871() {
          if (this.state.p871 === "que") {
                  this.setState({p871: "Que"});
          } else {
                  this.setState({p871: "que"});
          }
  }
  p872() {
          if (this.state.p872 === " ") {this.setState({p872: ", "});}
          if (this.state.p872 === ", ") {this.setState({p872: "; "});}
          if (this.state.p872 === "; ") {this.setState({p872: ": "});}
          if (this.state.p872 === ": ") {this.setState({p872: "( "});}
          if (this.state.p872 === "( ") {this.setState({p872: ") "});}
          if (this.state.p872 === ") ") {this.setState({p872: "¡ "});}
          if (this.state.p872 === "¡ ") {this.setState({p872: "! "});}
          if (this.state.p872 === "! ") {this.setState({p872: "¿ "});}
          if (this.state.p872 === "¿ ") {this.setState({p872: "? "});}
          if (this.state.p872 === "? ") {this.setState({p872: " "});}
  }
  p873() {
          if (this.state.p873 === "me") {
                  this.setState({p873: "Me"});
          } else {
                  this.setState({p873: "me"});
          }
  }
  p874() {
          if (this.state.p874 === " ") {this.setState({p874: ", "});}
          if (this.state.p874 === ", ") {this.setState({p874: "; "});}
          if (this.state.p874 === "; ") {this.setState({p874: ": "});}
          if (this.state.p874 === ": ") {this.setState({p874: "( "});}
          if (this.state.p874 === "( ") {this.setState({p874: ") "});}
          if (this.state.p874 === ") ") {this.setState({p874: "¡ "});}
          if (this.state.p874 === "¡ ") {this.setState({p874: "! "});}
          if (this.state.p874 === "! ") {this.setState({p874: "¿ "});}
          if (this.state.p874 === "¿ ") {this.setState({p874: "? "});}
          if (this.state.p874 === "? ") {this.setState({p874: " "});}
  }
  p875() {
          if (this.state.p875 === "hallo") {
                  this.setState({p875: "Hallo"});
          } else {
                  this.setState({p875: "hallo"});
          }
  }
  p876() {
          if (this.state.p876 === " ") {this.setState({p876: ", "});}
          if (this.state.p876 === ", ") {this.setState({p876: "; "});}
          if (this.state.p876 === "; ") {this.setState({p876: ": "});}
          if (this.state.p876 === ": ") {this.setState({p876: "( "});}
          if (this.state.p876 === "( ") {this.setState({p876: ") "});}
          if (this.state.p876 === ") ") {this.setState({p876: "¡ "});}
          if (this.state.p876 === "¡ ") {this.setState({p876: "! "});}
          if (this.state.p876 === "! ") {this.setState({p876: "¿ "});}
          if (this.state.p876 === "¿ ") {this.setState({p876: "? "});}
          if (this.state.p876 === "? ") {this.setState({p876: " "});}
  }
  p877() {
          if (this.state.p877 === "a") {
                  this.setState({p877: "A"});
          } else {
                  this.setState({p877: "a"});
          }
  }
  p878() {
          if (this.state.p878 === " ") {this.setState({p878: ", "});}
          if (this.state.p878 === ", ") {this.setState({p878: "; "});}
          if (this.state.p878 === "; ") {this.setState({p878: ": "});}
          if (this.state.p878 === ": ") {this.setState({p878: "( "});}
          if (this.state.p878 === "( ") {this.setState({p878: ") "});}
          if (this.state.p878 === ") ") {this.setState({p878: "¡ "});}
          if (this.state.p878 === "¡ ") {this.setState({p878: "! "});}
          if (this.state.p878 === "! ") {this.setState({p878: "¿ "});}
          if (this.state.p878 === "¿ ") {this.setState({p878: "? "});}
          if (this.state.p878 === "? ") {this.setState({p878: " "});}
  }
  p879() {
          if (this.state.p879 === "merced") {
                  this.setState({p879: "Merced"});
          } else {
                  this.setState({p879: "merced"});
          }
  }
  p880() {
          if (this.state.p880 === " ") {this.setState({p880: ", "});}
          if (this.state.p880 === ", ") {this.setState({p880: "; "});}
          if (this.state.p880 === "; ") {this.setState({p880: ": "});}
          if (this.state.p880 === ": ") {this.setState({p880: "( "});}
          if (this.state.p880 === "( ") {this.setState({p880: ") "});}
          if (this.state.p880 === ") ") {this.setState({p880: "¡ "});}
          if (this.state.p880 === "¡ ") {this.setState({p880: "! "});}
          if (this.state.p880 === "! ") {this.setState({p880: "¿ "});}
          if (this.state.p880 === "¿ ") {this.setState({p880: "? "});}
          if (this.state.p880 === "? ") {this.setState({p880: " "});}
  }
  p881() {
          if (this.state.p881 === "de") {
                  this.setState({p881: "De"});
          } else {
                  this.setState({p881: "de"});
          }
  }
  p882() {
          if (this.state.p882 === " ") {this.setState({p882: ", "});}
          if (this.state.p882 === ", ") {this.setState({p882: "; "});}
          if (this.state.p882 === "; ") {this.setState({p882: ": "});}
          if (this.state.p882 === ": ") {this.setState({p882: "( "});}
          if (this.state.p882 === "( ") {this.setState({p882: ") "});}
          if (this.state.p882 === ") ") {this.setState({p882: "¡ "});}
          if (this.state.p882 === "¡ ") {this.setState({p882: "! "});}
          if (this.state.p882 === "! ") {this.setState({p882: "¿ "});}
          if (this.state.p882 === "¿ ") {this.setState({p882: "? "});}
          if (this.state.p882 === "? ") {this.setState({p882: " "});}
  }
  p883() {
          if (this.state.p883 === "una") {
                  this.setState({p883: "Una"});
          } else {
                  this.setState({p883: "una"});
          }
  }
  p884() {
          if (this.state.p884 === " ") {this.setState({p884: ", "});}
          if (this.state.p884 === ", ") {this.setState({p884: "; "});}
          if (this.state.p884 === "; ") {this.setState({p884: ": "});}
          if (this.state.p884 === ": ") {this.setState({p884: "( "});}
          if (this.state.p884 === "( ") {this.setState({p884: ") "});}
          if (this.state.p884 === ") ") {this.setState({p884: "¡ "});}
          if (this.state.p884 === "¡ ") {this.setState({p884: "! "});}
          if (this.state.p884 === "! ") {this.setState({p884: "¿ "});}
          if (this.state.p884 === "¿ ") {this.setState({p884: "? "});}
          if (this.state.p884 === "? ") {this.setState({p884: " "});}
  }
  p885() {
          if (this.state.p885 === "falsa") {
                  this.setState({p885: "Falsa"});
          } else {
                  this.setState({p885: "falsa"});
          }
  }
  p886() {
          if (this.state.p886 === " ") {this.setState({p886: ", "});}
          if (this.state.p886 === ", ") {this.setState({p886: "; "});}
          if (this.state.p886 === "; ") {this.setState({p886: ": "});}
          if (this.state.p886 === ": ") {this.setState({p886: "( "});}
          if (this.state.p886 === "( ") {this.setState({p886: ") "});}
          if (this.state.p886 === ") ") {this.setState({p886: "¡ "});}
          if (this.state.p886 === "¡ ") {this.setState({p886: "! "});}
          if (this.state.p886 === "! ") {this.setState({p886: "¿ "});}
          if (this.state.p886 === "¿ ") {this.setState({p886: "? "});}
          if (this.state.p886 === "? ") {this.setState({p886: " "});}
  }
  p887() {
          if (this.state.p887 === "migala") {
                  this.setState({p887: "Migala"});
          } else {
                  this.setState({p887: "migala"});
          }
  }
  p888() {
          if (this.state.p888 === " ") {this.setState({p888: ", "});}
          if (this.state.p888 === ", ") {this.setState({p888: ". "});}
          if (this.state.p888 === ". ") {this.setState({p888: ": "});}
          if (this.state.p888 === ": ") {this.setState({p888: "( "});}
          if (this.state.p888 === "( ") {this.setState({p888: ") "});}
          if (this.state.p888 === ") ") {this.setState({p888: "¡ "});}
          if (this.state.p888 === "¡ ") {this.setState({p888: "! "});}
          if (this.state.p888 === "! ") {this.setState({p888: "¿ "});}
          if (this.state.p888 === "¿ ") {this.setState({p888: "? "});}
          if (this.state.p888 === "? ") {this.setState({p888: " "});}
  }
  p889() {
          if (this.state.p889 === "tal") {
                  this.setState({p889: "Tal"});
          } else {
                  this.setState({p889: "tal"});
          }
  }
  p890() {
          if (this.state.p890 === " ") {this.setState({p890: ", "});}
          if (this.state.p890 === ", ") {this.setState({p890: "; "});}
          if (this.state.p890 === "; ") {this.setState({p890: ": "});}
          if (this.state.p890 === ": ") {this.setState({p890: "( "});}
          if (this.state.p890 === "( ") {this.setState({p890: ") "});}
          if (this.state.p890 === ") ") {this.setState({p890: "¡ "});}
          if (this.state.p890 === "¡ ") {this.setState({p890: "! "});}
          if (this.state.p890 === "! ") {this.setState({p890: "¿ "});}
          if (this.state.p890 === "¿ ") {this.setState({p890: "? "});}
          if (this.state.p890 === "? ") {this.setState({p890: " "});}
  }
  p891() {
          if (this.state.p891 === "vez") {
                  this.setState({p891: "Vez"});
          } else {
                  this.setState({p891: "vez"});
          }
  }
  p892() {
          if (this.state.p892 === " ") {this.setState({p892: ", "});}
          if (this.state.p892 === ", ") {this.setState({p892: "; "});}
          if (this.state.p892 === "; ") {this.setState({p892: ": "});}
          if (this.state.p892 === ": ") {this.setState({p892: "( "});}
          if (this.state.p892 === "( ") {this.setState({p892: ") "});}
          if (this.state.p892 === ") ") {this.setState({p892: "¡ "});}
          if (this.state.p892 === "¡ ") {this.setState({p892: "! "});}
          if (this.state.p892 === "! ") {this.setState({p892: "¿ "});}
          if (this.state.p892 === "¿ ") {this.setState({p892: "? "});}
          if (this.state.p892 === "? ") {this.setState({p892: " "});}
  }
  p893() {
          if (this.state.p893 === "el") {
                  this.setState({p893: "El"});
          } else {
                  this.setState({p893: "el"});
          }
  }
  p894() {
          if (this.state.p894 === " ") {this.setState({p894: ", "});}
          if (this.state.p894 === ", ") {this.setState({p894: "; "});}
          if (this.state.p894 === "; ") {this.setState({p894: ": "});}
          if (this.state.p894 === ": ") {this.setState({p894: "( "});}
          if (this.state.p894 === "( ") {this.setState({p894: ") "});}
          if (this.state.p894 === ") ") {this.setState({p894: "¡ "});}
          if (this.state.p894 === "¡ ") {this.setState({p894: "! "});}
          if (this.state.p894 === "! ") {this.setState({p894: "¿ "});}
          if (this.state.p894 === "¿ ") {this.setState({p894: "? "});}
          if (this.state.p894 === "? ") {this.setState({p894: " "});}
  }
  p895() {
          if (this.state.p895 === "saltimbanqui") {
                  this.setState({p895: "Saltimbanqui"});
          } else {
                  this.setState({p895: "saltimbanqui"});
          }
  }
  p896() {
          if (this.state.p896 === " ") {this.setState({p896: ", "});}
          if (this.state.p896 === ", ") {this.setState({p896: "; "});}
          if (this.state.p896 === "; ") {this.setState({p896: ": "});}
          if (this.state.p896 === ": ") {this.setState({p896: "( "});}
          if (this.state.p896 === "( ") {this.setState({p896: ") "});}
          if (this.state.p896 === ") ") {this.setState({p896: "¡ "});}
          if (this.state.p896 === "¡ ") {this.setState({p896: "! "});}
          if (this.state.p896 === "! ") {this.setState({p896: "¿ "});}
          if (this.state.p896 === "¿ ") {this.setState({p896: "? "});}
          if (this.state.p896 === "? ") {this.setState({p896: " "});}
  }
  p897() {
          if (this.state.p897 === "me") {
                  this.setState({p897: "Me"});
          } else {
                  this.setState({p897: "me"});
          }
  }
  p898() {
          if (this.state.p898 === " ") {this.setState({p898: ", "});}
          if (this.state.p898 === ", ") {this.setState({p898: "; "});}
          if (this.state.p898 === "; ") {this.setState({p898: ": "});}
          if (this.state.p898 === ": ") {this.setState({p898: "( "});}
          if (this.state.p898 === "( ") {this.setState({p898: ") "});}
          if (this.state.p898 === ") ") {this.setState({p898: "¡ "});}
          if (this.state.p898 === "¡ ") {this.setState({p898: "! "});}
          if (this.state.p898 === "! ") {this.setState({p898: "¿ "});}
          if (this.state.p898 === "¿ ") {this.setState({p898: "? "});}
          if (this.state.p898 === "? ") {this.setState({p898: " "});}
  }
  p899() {
          if (this.state.p899 === "ha") {
                  this.setState({p899: "Ha"});
          } else {
                  this.setState({p899: "ha"});
          }
  }
  p900() {
          if (this.state.p900 === " ") {this.setState({p900: ", "});}
          if (this.state.p900 === ", ") {this.setState({p900: "; "});}
          if (this.state.p900 === "; ") {this.setState({p900: ": "});}
          if (this.state.p900 === ": ") {this.setState({p900: "( "});}
          if (this.state.p900 === "( ") {this.setState({p900: ") "});}
          if (this.state.p900 === ") ") {this.setState({p900: "¡ "});}
          if (this.state.p900 === "¡ ") {this.setState({p900: "! "});}
          if (this.state.p900 === "! ") {this.setState({p900: "¿ "});}
          if (this.state.p900 === "¿ ") {this.setState({p900: "? "});}
          if (this.state.p900 === "? ") {this.setState({p900: " "});}
  }
  p901() {
          if (this.state.p901 === "engañado") {
                  this.setState({p901: "Engañado"});
          } else {
                  this.setState({p901: "engañado"});
          }
  }
  p902() {
          if (this.state.p902 === " ") {this.setState({p902: ", "});}
          if (this.state.p902 === ", ") {this.setState({p902: "; "});}
          if (this.state.p902 === "; ") {this.setState({p902: ": "});}
          if (this.state.p902 === ": ") {this.setState({p902: "( "});}
          if (this.state.p902 === "( ") {this.setState({p902: ") "});}
          if (this.state.p902 === ") ") {this.setState({p902: "¡ "});}
          if (this.state.p902 === "¡ ") {this.setState({p902: "! "});}
          if (this.state.p902 === "! ") {this.setState({p902: "¿ "});}
          if (this.state.p902 === "¿ ") {this.setState({p902: "? "});}
          if (this.state.p902 === "? ") {this.setState({p902: " "});}
  }
  p903() {
          if (this.state.p903 === "haciéndome") {
                  this.setState({p903: "Haciéndome"});
          } else {
                  this.setState({p903: "haciéndome"});
          }
  }
  p904() {
          if (this.state.p904 === " ") {this.setState({p904: ", "});}
          if (this.state.p904 === ", ") {this.setState({p904: "; "});}
          if (this.state.p904 === "; ") {this.setState({p904: ": "});}
          if (this.state.p904 === ": ") {this.setState({p904: "( "});}
          if (this.state.p904 === "( ") {this.setState({p904: ") "});}
          if (this.state.p904 === ") ") {this.setState({p904: "¡ "});}
          if (this.state.p904 === "¡ ") {this.setState({p904: "! "});}
          if (this.state.p904 === "! ") {this.setState({p904: "¿ "});}
          if (this.state.p904 === "¿ ") {this.setState({p904: "? "});}
          if (this.state.p904 === "? ") {this.setState({p904: " "});}
  }
  p905() {
          if (this.state.p905 === "pagar") {
                  this.setState({p905: "Pagar"});
          } else {
                  this.setState({p905: "pagar"});
          }
  }
  p906() {
          if (this.state.p906 === " ") {this.setState({p906: ", "});}
          if (this.state.p906 === ", ") {this.setState({p906: "; "});}
          if (this.state.p906 === "; ") {this.setState({p906: ": "});}
          if (this.state.p906 === ": ") {this.setState({p906: "( "});}
          if (this.state.p906 === "( ") {this.setState({p906: ") "});}
          if (this.state.p906 === ") ") {this.setState({p906: "¡ "});}
          if (this.state.p906 === "¡ ") {this.setState({p906: "! "});}
          if (this.state.p906 === "! ") {this.setState({p906: "¿ "});}
          if (this.state.p906 === "¿ ") {this.setState({p906: "? "});}
          if (this.state.p906 === "? ") {this.setState({p906: " "});}
  }
  p907() {
          if (this.state.p907 === "un") {
                  this.setState({p907: "Un"});
          } else {
                  this.setState({p907: "un"});
          }
  }
  p908() {
          if (this.state.p908 === " ") {this.setState({p908: ", "});}
          if (this.state.p908 === ", ") {this.setState({p908: "; "});}
          if (this.state.p908 === "; ") {this.setState({p908: ": "});}
          if (this.state.p908 === ": ") {this.setState({p908: "( "});}
          if (this.state.p908 === "( ") {this.setState({p908: ") "});}
          if (this.state.p908 === ") ") {this.setState({p908: "¡ "});}
          if (this.state.p908 === "¡ ") {this.setState({p908: "! "});}
          if (this.state.p908 === "! ") {this.setState({p908: "¿ "});}
          if (this.state.p908 === "¿ ") {this.setState({p908: "? "});}
          if (this.state.p908 === "? ") {this.setState({p908: " "});}
  }
  p909() {
          if (this.state.p909 === "alto") {
                  this.setState({p909: "Alto"});
          } else {
                  this.setState({p909: "alto"});
          }
  }
  p910() {
          if (this.state.p910 === " ") {this.setState({p910: ", "});}
          if (this.state.p910 === ", ") {this.setState({p910: "; "});}
          if (this.state.p910 === "; ") {this.setState({p910: ": "});}
          if (this.state.p910 === ": ") {this.setState({p910: "( "});}
          if (this.state.p910 === "( ") {this.setState({p910: ") "});}
          if (this.state.p910 === ") ") {this.setState({p910: "¡ "});}
          if (this.state.p910 === "¡ ") {this.setState({p910: "! "});}
          if (this.state.p910 === "! ") {this.setState({p910: "¿ "});}
          if (this.state.p910 === "¿ ") {this.setState({p910: "? "});}
          if (this.state.p910 === "? ") {this.setState({p910: " "});}
  }
  p911() {
          if (this.state.p911 === "precio") {
                  this.setState({p911: "Precio"});
          } else {
                  this.setState({p911: "precio"});
          }
  }
  p912() {
          if (this.state.p912 === " ") {this.setState({p912: ", "});}
          if (this.state.p912 === ", ") {this.setState({p912: "; "});}
          if (this.state.p912 === "; ") {this.setState({p912: ": "});}
          if (this.state.p912 === ": ") {this.setState({p912: "( "});}
          if (this.state.p912 === "( ") {this.setState({p912: ") "});}
          if (this.state.p912 === ") ") {this.setState({p912: "¡ "});}
          if (this.state.p912 === "¡ ") {this.setState({p912: "! "});}
          if (this.state.p912 === "! ") {this.setState({p912: "¿ "});}
          if (this.state.p912 === "¿ ") {this.setState({p912: "? "});}
          if (this.state.p912 === "? ") {this.setState({p912: " "});}
  }
  p913() {
          if (this.state.p913 === "por") {
                  this.setState({p913: "Por"});
          } else {
                  this.setState({p913: "por"});
          }
  }
  p914() {
          if (this.state.p914 === " ") {this.setState({p914: ", "});}
          if (this.state.p914 === ", ") {this.setState({p914: "; "});}
          if (this.state.p914 === "; ") {this.setState({p914: ": "});}
          if (this.state.p914 === ": ") {this.setState({p914: "( "});}
          if (this.state.p914 === "( ") {this.setState({p914: ") "});}
          if (this.state.p914 === ") ") {this.setState({p914: "¡ "});}
          if (this.state.p914 === "¡ ") {this.setState({p914: "! "});}
          if (this.state.p914 === "! ") {this.setState({p914: "¿ "});}
          if (this.state.p914 === "¿ ") {this.setState({p914: "? "});}
          if (this.state.p914 === "? ") {this.setState({p914: " "});}
  }
  p915() {
          if (this.state.p915 === "un") {
                  this.setState({p915: "Un"});
          } else {
                  this.setState({p915: "un"});
          }
  }
  p916() {
          if (this.state.p916 === " ") {this.setState({p916: ", "});}
          if (this.state.p916 === ", ") {this.setState({p916: "; "});}
          if (this.state.p916 === "; ") {this.setState({p916: ": "});}
          if (this.state.p916 === ": ") {this.setState({p916: "( "});}
          if (this.state.p916 === "( ") {this.setState({p916: ") "});}
          if (this.state.p916 === ") ") {this.setState({p916: "¡ "});}
          if (this.state.p916 === "¡ ") {this.setState({p916: "! "});}
          if (this.state.p916 === "! ") {this.setState({p916: "¿ "});}
          if (this.state.p916 === "¿ ") {this.setState({p916: "? "});}
          if (this.state.p916 === "? ") {this.setState({p916: " "});}
  }
  p917() {
          if (this.state.p917 === "inofensivo") {
                  this.setState({p917: "Inofensivo"});
          } else {
                  this.setState({p917: "inofensivo"});
          }
  }
  p918() {
          if (this.state.p918 === " ") {this.setState({p918: ", "});}
          if (this.state.p918 === ", ") {this.setState({p918: "; "});}
          if (this.state.p918 === "; ") {this.setState({p918: ": "});}
          if (this.state.p918 === ": ") {this.setState({p918: "( "});}
          if (this.state.p918 === "( ") {this.setState({p918: ") "});}
          if (this.state.p918 === ") ") {this.setState({p918: "¡ "});}
          if (this.state.p918 === "¡ ") {this.setState({p918: "! "});}
          if (this.state.p918 === "! ") {this.setState({p918: "¿ "});}
          if (this.state.p918 === "¿ ") {this.setState({p918: "? "});}
          if (this.state.p918 === "? ") {this.setState({p918: " "});}
  }
  p919() {
          if (this.state.p919 === "y") {
                  this.setState({p919: "Y"});
          } else {
                  this.setState({p919: "y"});
          }
  }
  p920() {
          if (this.state.p920 === " ") {this.setState({p920: ", "});}
          if (this.state.p920 === ", ") {this.setState({p920: "; "});}
          if (this.state.p920 === "; ") {this.setState({p920: ": "});}
          if (this.state.p920 === ": ") {this.setState({p920: "( "});}
          if (this.state.p920 === "( ") {this.setState({p920: ") "});}
          if (this.state.p920 === ") ") {this.setState({p920: "¡ "});}
          if (this.state.p920 === "¡ ") {this.setState({p920: "! "});}
          if (this.state.p920 === "! ") {this.setState({p920: "¿ "});}
          if (this.state.p920 === "¿ ") {this.setState({p920: "? "});}
          if (this.state.p920 === "? ") {this.setState({p920: " "});}
  }
  p921() {
          if (this.state.p921 === "repugnante") {
                  this.setState({p921: "Repugnante"});
          } else {
                  this.setState({p921: "repugnante"});
          }
  }
  p922() {
          if (this.state.p922 === " ") {this.setState({p922: ", "});}
          if (this.state.p922 === ", ") {this.setState({p922: "; "});}
          if (this.state.p922 === "; ") {this.setState({p922: ": "});}
          if (this.state.p922 === ": ") {this.setState({p922: "( "});}
          if (this.state.p922 === "( ") {this.setState({p922: ") "});}
          if (this.state.p922 === ") ") {this.setState({p922: "¡ "});}
          if (this.state.p922 === "¡ ") {this.setState({p922: "! "});}
          if (this.state.p922 === "! ") {this.setState({p922: "¿ "});}
          if (this.state.p922 === "¿ ") {this.setState({p922: "? "});}
          if (this.state.p922 === "? ") {this.setState({p922: " "});}
  }
  p923() {
          if (this.state.p923 === "escarabajo") {
                  this.setState({p923: "Escarabajo"});
          } else {
                  this.setState({p923: "escarabajo"});
          }
  }
  p924() {
          if (this.state.p924 === " ") {this.setState({p924: ", "});}
          if (this.state.p924 === ", ") {this.setState({p924: "; "});}
          if (this.state.p924 === "; ") {this.setState({p924: ". "});}
          if (this.state.p924 === ". ") {this.setState({p924: "( "});}
          if (this.state.p924 === "( ") {this.setState({p924: ") "});}
          if (this.state.p924 === ") ") {this.setState({p924: "¡ "});}
          if (this.state.p924 === "¡ ") {this.setState({p924: "! "});}
          if (this.state.p924 === "! ") {this.setState({p924: "¿ "});}
          if (this.state.p924 === "¿ ") {this.setState({p924: "? "});}
          if (this.state.p924 === "? ") {this.setState({p924: " "});}
  }
  p925() {
          if (this.state.p925 === "pero") {
                  this.setState({p925: "Pero"});
          } else {
                  this.setState({p925: "pero"});
          }
  }
  p926() {
          if (this.state.p926 === " ") {this.setState({p926: ", "});}
          if (this.state.p926 === ", ") {this.setState({p926: "; "});}
          if (this.state.p926 === "; ") {this.setState({p926: ": "});}
          if (this.state.p926 === ": ") {this.setState({p926: "( "});}
          if (this.state.p926 === "( ") {this.setState({p926: ") "});}
          if (this.state.p926 === ") ") {this.setState({p926: "¡ "});}
          if (this.state.p926 === "¡ ") {this.setState({p926: "! "});}
          if (this.state.p926 === "! ") {this.setState({p926: "¿ "});}
          if (this.state.p926 === "¿ ") {this.setState({p926: "? "});}
          if (this.state.p926 === "? ") {this.setState({p926: " "});}
  }
  p927() {
          if (this.state.p927 === "en") {
                  this.setState({p927: "En"});
          } else {
                  this.setState({p927: "en"});
          }
  }
  p928() {
          if (this.state.p928 === " ") {this.setState({p928: ", "});}
          if (this.state.p928 === ", ") {this.setState({p928: "; "});}
          if (this.state.p928 === "; ") {this.setState({p928: ": "});}
          if (this.state.p928 === ": ") {this.setState({p928: "( "});}
          if (this.state.p928 === "( ") {this.setState({p928: ") "});}
          if (this.state.p928 === ") ") {this.setState({p928: "¡ "});}
          if (this.state.p928 === "¡ ") {this.setState({p928: "! "});}
          if (this.state.p928 === "! ") {this.setState({p928: "¿ "});}
          if (this.state.p928 === "¿ ") {this.setState({p928: "? "});}
          if (this.state.p928 === "? ") {this.setState({p928: " "});}
  }
  p929() {
          if (this.state.p929 === "realidad") {
                  this.setState({p929: "Realidad"});
          } else {
                  this.setState({p929: "realidad"});
          }
  }
  p930() {
          if (this.state.p930 === " ") {this.setState({p930: ", "});}
          if (this.state.p930 === ", ") {this.setState({p930: "; "});}
          if (this.state.p930 === "; ") {this.setState({p930: ": "});}
          if (this.state.p930 === ": ") {this.setState({p930: "( "});}
          if (this.state.p930 === "( ") {this.setState({p930: ") "});}
          if (this.state.p930 === ") ") {this.setState({p930: "¡ "});}
          if (this.state.p930 === "¡ ") {this.setState({p930: "! "});}
          if (this.state.p930 === "! ") {this.setState({p930: "¿ "});}
          if (this.state.p930 === "¿ ") {this.setState({p930: "? "});}
          if (this.state.p930 === "? ") {this.setState({p930: " "});}
  }
  p931() {
          if (this.state.p931 === "esto") {
                  this.setState({p931: "Esto"});
          } else {
                  this.setState({p931: "esto"});
          }
  }
  p932() {
          if (this.state.p932 === " ") {this.setState({p932: ", "});}
          if (this.state.p932 === ", ") {this.setState({p932: "; "});}
          if (this.state.p932 === "; ") {this.setState({p932: ": "});}
          if (this.state.p932 === ": ") {this.setState({p932: "( "});}
          if (this.state.p932 === "( ") {this.setState({p932: ") "});}
          if (this.state.p932 === ") ") {this.setState({p932: "¡ "});}
          if (this.state.p932 === "¡ ") {this.setState({p932: "! "});}
          if (this.state.p932 === "! ") {this.setState({p932: "¿ "});}
          if (this.state.p932 === "¿ ") {this.setState({p932: "? "});}
          if (this.state.p932 === "? ") {this.setState({p932: " "});}
  }
  p933() {
          if (this.state.p933 === "no") {
                  this.setState({p933: "No"});
          } else {
                  this.setState({p933: "no"});
          }
  }
  p934() {
          if (this.state.p934 === " ") {this.setState({p934: ", "});}
          if (this.state.p934 === ", ") {this.setState({p934: "; "});}
          if (this.state.p934 === "; ") {this.setState({p934: ": "});}
          if (this.state.p934 === ": ") {this.setState({p934: "( "});}
          if (this.state.p934 === "( ") {this.setState({p934: ") "});}
          if (this.state.p934 === ") ") {this.setState({p934: "¡ "});}
          if (this.state.p934 === "¡ ") {this.setState({p934: "! "});}
          if (this.state.p934 === "! ") {this.setState({p934: "¿ "});}
          if (this.state.p934 === "¿ ") {this.setState({p934: "? "});}
          if (this.state.p934 === "? ") {this.setState({p934: " "});}
  }
  p935() {
          if (this.state.p935 === "tiene") {
                  this.setState({p935: "Tiene"});
          } else {
                  this.setState({p935: "tiene"});
          }
  }
  p936() {
          if (this.state.p936 === " ") {this.setState({p936: ", "});}
          if (this.state.p936 === ", ") {this.setState({p936: "; "});}
          if (this.state.p936 === "; ") {this.setState({p936: ": "});}
          if (this.state.p936 === ": ") {this.setState({p936: "( "});}
          if (this.state.p936 === "( ") {this.setState({p936: ") "});}
          if (this.state.p936 === ") ") {this.setState({p936: "¡ "});}
          if (this.state.p936 === "¡ ") {this.setState({p936: "! "});}
          if (this.state.p936 === "! ") {this.setState({p936: "¿ "});}
          if (this.state.p936 === "¿ ") {this.setState({p936: "? "});}
          if (this.state.p936 === "? ") {this.setState({p936: " "});}
  }
  p937() {
          if (this.state.p937 === "importancia") {
                  this.setState({p937: "Importancia"});
          } else {
                  this.setState({p937: "importancia"});
          }
  }
  p938() {
          if (this.state.p938 === " ") {this.setState({p938: ", "});}
          if (this.state.p938 === ", ") {this.setState({p938: "; "});}
          if (this.state.p938 === "; ") {this.setState({p938: ": "});}
          if (this.state.p938 === ": ") {this.setState({p938: "( "});}
          if (this.state.p938 === "( ") {this.setState({p938: ") "});}
          if (this.state.p938 === ") ") {this.setState({p938: "¡ "});}
          if (this.state.p938 === "¡ ") {this.setState({p938: "! "});}
          if (this.state.p938 === "! ") {this.setState({p938: "¿ "});}
          if (this.state.p938 === "¿ ") {this.setState({p938: "? "});}
          if (this.state.p938 === "? ") {this.setState({p938: " "});}
  }
  p939() {
          if (this.state.p939 === "porque") {
                  this.setState({p939: "Porque"});
          } else {
                  this.setState({p939: "porque"});
          }
  }
  p940() {
          if (this.state.p940 === " ") {this.setState({p940: ", "});}
          if (this.state.p940 === ", ") {this.setState({p940: "; "});}
          if (this.state.p940 === "; ") {this.setState({p940: ": "});}
          if (this.state.p940 === ": ") {this.setState({p940: "( "});}
          if (this.state.p940 === "( ") {this.setState({p940: ") "});}
          if (this.state.p940 === ") ") {this.setState({p940: "¡ "});}
          if (this.state.p940 === "¡ ") {this.setState({p940: "! "});}
          if (this.state.p940 === "! ") {this.setState({p940: "¿ "});}
          if (this.state.p940 === "¿ ") {this.setState({p940: "? "});}
          if (this.state.p940 === "? ") {this.setState({p940: " "});}
  }
  p941() {
          if (this.state.p941 === "yo") {
                  this.setState({p941: "Yo"});
          } else {
                  this.setState({p941: "yo"});
          }
  }
  p942() {
          if (this.state.p942 === " ") {this.setState({p942: ", "});}
          if (this.state.p942 === ", ") {this.setState({p942: "; "});}
          if (this.state.p942 === "; ") {this.setState({p942: ": "});}
          if (this.state.p942 === ": ") {this.setState({p942: "( "});}
          if (this.state.p942 === "( ") {this.setState({p942: ") "});}
          if (this.state.p942 === ") ") {this.setState({p942: "¡ "});}
          if (this.state.p942 === "¡ ") {this.setState({p942: "! "});}
          if (this.state.p942 === "! ") {this.setState({p942: "¿ "});}
          if (this.state.p942 === "¿ ") {this.setState({p942: "? "});}
          if (this.state.p942 === "? ") {this.setState({p942: " "});}
  }
  p943() {
          if (this.state.p943 === "he") {
                  this.setState({p943: "He"});
          } else {
                  this.setState({p943: "he"});
          }
  }
  p944() {
          if (this.state.p944 === " ") {this.setState({p944: ", "});}
          if (this.state.p944 === ", ") {this.setState({p944: "; "});}
          if (this.state.p944 === "; ") {this.setState({p944: ": "});}
          if (this.state.p944 === ": ") {this.setState({p944: "( "});}
          if (this.state.p944 === "( ") {this.setState({p944: ") "});}
          if (this.state.p944 === ") ") {this.setState({p944: "¡ "});}
          if (this.state.p944 === "¡ ") {this.setState({p944: "! "});}
          if (this.state.p944 === "! ") {this.setState({p944: "¿ "});}
          if (this.state.p944 === "¿ ") {this.setState({p944: "? "});}
          if (this.state.p944 === "? ") {this.setState({p944: " "});}
  }
  p945() {
          if (this.state.p945 === "consagrado") {
                  this.setState({p945: "Consagrado"});
          } else {
                  this.setState({p945: "consagrado"});
          }
  }
  p946() {
          if (this.state.p946 === " ") {this.setState({p946: ", "});}
          if (this.state.p946 === ", ") {this.setState({p946: "; "});}
          if (this.state.p946 === "; ") {this.setState({p946: ": "});}
          if (this.state.p946 === ": ") {this.setState({p946: "( "});}
          if (this.state.p946 === "( ") {this.setState({p946: ") "});}
          if (this.state.p946 === ") ") {this.setState({p946: "¡ "});}
          if (this.state.p946 === "¡ ") {this.setState({p946: "! "});}
          if (this.state.p946 === "! ") {this.setState({p946: "¿ "});}
          if (this.state.p946 === "¿ ") {this.setState({p946: "? "});}
          if (this.state.p946 === "? ") {this.setState({p946: " "});}
  }
  p947() {
          if (this.state.p947 === "a") {
                  this.setState({p947: "A"});
          } else {
                  this.setState({p947: "a"});
          }
  }
  p948() {
          if (this.state.p948 === " ") {this.setState({p948: ", "});}
          if (this.state.p948 === ", ") {this.setState({p948: "; "});}
          if (this.state.p948 === "; ") {this.setState({p948: ": "});}
          if (this.state.p948 === ": ") {this.setState({p948: "( "});}
          if (this.state.p948 === "( ") {this.setState({p948: ") "});}
          if (this.state.p948 === ") ") {this.setState({p948: "¡ "});}
          if (this.state.p948 === "¡ ") {this.setState({p948: "! "});}
          if (this.state.p948 === "! ") {this.setState({p948: "¿ "});}
          if (this.state.p948 === "¿ ") {this.setState({p948: "? "});}
          if (this.state.p948 === "? ") {this.setState({p948: " "});}
  }
  p949() {
          if (this.state.p949 === "la") {
                  this.setState({p949: "La"});
          } else {
                  this.setState({p949: "la"});
          }
  }
  p950() {
          if (this.state.p950 === " ") {this.setState({p950: ", "});}
          if (this.state.p950 === ", ") {this.setState({p950: "; "});}
          if (this.state.p950 === "; ") {this.setState({p950: ": "});}
          if (this.state.p950 === ": ") {this.setState({p950: "( "});}
          if (this.state.p950 === "( ") {this.setState({p950: ") "});}
          if (this.state.p950 === ") ") {this.setState({p950: "¡ "});}
          if (this.state.p950 === "¡ ") {this.setState({p950: "! "});}
          if (this.state.p950 === "! ") {this.setState({p950: "¿ "});}
          if (this.state.p950 === "¿ ") {this.setState({p950: "? "});}
          if (this.state.p950 === "? ") {this.setState({p950: " "});}
  }
  p951() {
          if (this.state.p951 === "migala") {
                  this.setState({p951: "Migala"});
          } else {
                  this.setState({p951: "migala"});
          }
  }
  p952() {
          if (this.state.p952 === " ") {this.setState({p952: ", "});}
          if (this.state.p952 === ", ") {this.setState({p952: "; "});}
          if (this.state.p952 === "; ") {this.setState({p952: ": "});}
          if (this.state.p952 === ": ") {this.setState({p952: "( "});}
          if (this.state.p952 === "( ") {this.setState({p952: ") "});}
          if (this.state.p952 === ") ") {this.setState({p952: "¡ "});}
          if (this.state.p952 === "¡ ") {this.setState({p952: "! "});}
          if (this.state.p952 === "! ") {this.setState({p952: "¿ "});}
          if (this.state.p952 === "¿ ") {this.setState({p952: "? "});}
          if (this.state.p952 === "? ") {this.setState({p952: " "});}
  }
  p953() {
          if (this.state.p953 === "con") {
                  this.setState({p953: "Con"});
          } else {
                  this.setState({p953: "con"});
          }
  }
  p954() {
          if (this.state.p954 === " ") {this.setState({p954: ", "});}
          if (this.state.p954 === ", ") {this.setState({p954: "; "});}
          if (this.state.p954 === "; ") {this.setState({p954: ": "});}
          if (this.state.p954 === ": ") {this.setState({p954: "( "});}
          if (this.state.p954 === "( ") {this.setState({p954: ") "});}
          if (this.state.p954 === ") ") {this.setState({p954: "¡ "});}
          if (this.state.p954 === "¡ ") {this.setState({p954: "! "});}
          if (this.state.p954 === "! ") {this.setState({p954: "¿ "});}
          if (this.state.p954 === "¿ ") {this.setState({p954: "? "});}
          if (this.state.p954 === "? ") {this.setState({p954: " "});}
  }
  p955() {
          if (this.state.p955 === "la") {
                  this.setState({p955: "La"});
          } else {
                  this.setState({p955: "la"});
          }
  }
  p956() {
          if (this.state.p956 === " ") {this.setState({p956: ", "});}
          if (this.state.p956 === ", ") {this.setState({p956: "; "});}
          if (this.state.p956 === "; ") {this.setState({p956: ": "});}
          if (this.state.p956 === ": ") {this.setState({p956: "( "});}
          if (this.state.p956 === "( ") {this.setState({p956: ") "});}
          if (this.state.p956 === ") ") {this.setState({p956: "¡ "});}
          if (this.state.p956 === "¡ ") {this.setState({p956: "! "});}
          if (this.state.p956 === "! ") {this.setState({p956: "¿ "});}
          if (this.state.p956 === "¿ ") {this.setState({p956: "? "});}
          if (this.state.p956 === "? ") {this.setState({p956: " "});}
  }
  p957() {
          if (this.state.p957 === "certeza") {
                  this.setState({p957: "Certeza"});
          } else {
                  this.setState({p957: "certeza"});
          }
  }
  p958() {
          if (this.state.p958 === " ") {this.setState({p958: ", "});}
          if (this.state.p958 === ", ") {this.setState({p958: "; "});}
          if (this.state.p958 === "; ") {this.setState({p958: ": "});}
          if (this.state.p958 === ": ") {this.setState({p958: "( "});}
          if (this.state.p958 === "( ") {this.setState({p958: ") "});}
          if (this.state.p958 === ") ") {this.setState({p958: "¡ "});}
          if (this.state.p958 === "¡ ") {this.setState({p958: "! "});}
          if (this.state.p958 === "! ") {this.setState({p958: "¿ "});}
          if (this.state.p958 === "¿ ") {this.setState({p958: "? "});}
          if (this.state.p958 === "? ") {this.setState({p958: " "});}
  }
  p959() {
          if (this.state.p959 === "de") {
                  this.setState({p959: "De"});
          } else {
                  this.setState({p959: "de"});
          }
  }
  p960() {
          if (this.state.p960 === " ") {this.setState({p960: ", "});}
          if (this.state.p960 === ", ") {this.setState({p960: "; "});}
          if (this.state.p960 === "; ") {this.setState({p960: ": "});}
          if (this.state.p960 === ": ") {this.setState({p960: "( "});}
          if (this.state.p960 === "( ") {this.setState({p960: ") "});}
          if (this.state.p960 === ") ") {this.setState({p960: "¡ "});}
          if (this.state.p960 === "¡ ") {this.setState({p960: "! "});}
          if (this.state.p960 === "! ") {this.setState({p960: "¿ "});}
          if (this.state.p960 === "¿ ") {this.setState({p960: "? "});}
          if (this.state.p960 === "? ") {this.setState({p960: " "});}
  }
  p961() {
          if (this.state.p961 === "mi") {
                  this.setState({p961: "Mi"});
          } else {
                  this.setState({p961: "mi"});
          }
  }
  p962() {
          if (this.state.p962 === " ") {this.setState({p962: ", "});}
          if (this.state.p962 === ", ") {this.setState({p962: "; "});}
          if (this.state.p962 === "; ") {this.setState({p962: ": "});}
          if (this.state.p962 === ": ") {this.setState({p962: "( "});}
          if (this.state.p962 === "( ") {this.setState({p962: ") "});}
          if (this.state.p962 === ") ") {this.setState({p962: "¡ "});}
          if (this.state.p962 === "¡ ") {this.setState({p962: "! "});}
          if (this.state.p962 === "! ") {this.setState({p962: "¿ "});}
          if (this.state.p962 === "¿ ") {this.setState({p962: "? "});}
          if (this.state.p962 === "? ") {this.setState({p962: " "});}
  }
  p963() {
          if (this.state.p963 === "muerte") {
                  this.setState({p963: "Muerte"});
          } else {
                  this.setState({p963: "muerte"});
          }
  }
  p964() {
          if (this.state.p964 === " ") {this.setState({p964: ", "});}
          if (this.state.p964 === ", ") {this.setState({p964: "; "});}
          if (this.state.p964 === "; ") {this.setState({p964: ": "});}
          if (this.state.p964 === ": ") {this.setState({p964: "( "});}
          if (this.state.p964 === "( ") {this.setState({p964: ") "});}
          if (this.state.p964 === ") ") {this.setState({p964: "¡ "});}
          if (this.state.p964 === "¡ ") {this.setState({p964: "! "});}
          if (this.state.p964 === "! ") {this.setState({p964: "¿ "});}
          if (this.state.p964 === "¿ ") {this.setState({p964: "? "});}
          if (this.state.p964 === "? ") {this.setState({p964: " "});}
  }
  p965() {
          if (this.state.p965 === "aplazada") {
                  this.setState({p965: "Aplazada"});
          } else {
                  this.setState({p965: "aplazada"});
          }
  }
  p966() {
          if (this.state.p966 === " ") {this.setState({p966: ", "});}
          if (this.state.p966 === ", ") {this.setState({p966: "; "});}
          if (this.state.p966 === "; ") {this.setState({p966: ". "});}
          if (this.state.p966 === ". ") {this.setState({p966: "( "});}
          if (this.state.p966 === "( ") {this.setState({p966: ") "});}
          if (this.state.p966 === ") ") {this.setState({p966: "¡ "});}
          if (this.state.p966 === "¡ ") {this.setState({p966: "! "});}
          if (this.state.p966 === "! ") {this.setState({p966: "¿ "});}
          if (this.state.p966 === "¿ ") {this.setState({p966: "? "});}
          if (this.state.p966 === "? ") {this.setState({p966: " "});}
  }
  p967() {
          if (this.state.p967 === "en") {
                  this.setState({p967: "En"});
          } else {
                  this.setState({p967: "en"});
          }
  }
  p968() {
          if (this.state.p968 === " ") {this.setState({p968: ", "});}
          if (this.state.p968 === ", ") {this.setState({p968: "; "});}
          if (this.state.p968 === "; ") {this.setState({p968: ": "});}
          if (this.state.p968 === ": ") {this.setState({p968: "( "});}
          if (this.state.p968 === "( ") {this.setState({p968: ") "});}
          if (this.state.p968 === ") ") {this.setState({p968: "¡ "});}
          if (this.state.p968 === "¡ ") {this.setState({p968: "! "});}
          if (this.state.p968 === "! ") {this.setState({p968: "¿ "});}
          if (this.state.p968 === "¿ ") {this.setState({p968: "? "});}
          if (this.state.p968 === "? ") {this.setState({p968: " "});}
  }
  p969() {
          if (this.state.p969 === "las") {
                  this.setState({p969: "Las"});
          } else {
                  this.setState({p969: "las"});
          }
  }
  p970() {
          if (this.state.p970 === " ") {this.setState({p970: ", "});}
          if (this.state.p970 === ", ") {this.setState({p970: "; "});}
          if (this.state.p970 === "; ") {this.setState({p970: ": "});}
          if (this.state.p970 === ": ") {this.setState({p970: "( "});}
          if (this.state.p970 === "( ") {this.setState({p970: ") "});}
          if (this.state.p970 === ") ") {this.setState({p970: "¡ "});}
          if (this.state.p970 === "¡ ") {this.setState({p970: "! "});}
          if (this.state.p970 === "! ") {this.setState({p970: "¿ "});}
          if (this.state.p970 === "¿ ") {this.setState({p970: "? "});}
          if (this.state.p970 === "? ") {this.setState({p970: " "});}
  }
  p971() {
          if (this.state.p971 === "horas") {
                  this.setState({p971: "Horas"});
          } else {
                  this.setState({p971: "horas"});
          }
  }
  p972() {
          if (this.state.p972 === " ") {this.setState({p972: ", "});}
          if (this.state.p972 === ", ") {this.setState({p972: "; "});}
          if (this.state.p972 === "; ") {this.setState({p972: ": "});}
          if (this.state.p972 === ": ") {this.setState({p972: "( "});}
          if (this.state.p972 === "( ") {this.setState({p972: ") "});}
          if (this.state.p972 === ") ") {this.setState({p972: "¡ "});}
          if (this.state.p972 === "¡ ") {this.setState({p972: "! "});}
          if (this.state.p972 === "! ") {this.setState({p972: "¿ "});}
          if (this.state.p972 === "¿ ") {this.setState({p972: "? "});}
          if (this.state.p972 === "? ") {this.setState({p972: " "});}
  }
  p973() {
          if (this.state.p973 === "más") {
                  this.setState({p973: "Más"});
          } else {
                  this.setState({p973: "más"});
          }
  }
  p974() {
          if (this.state.p974 === " ") {this.setState({p974: ", "});}
          if (this.state.p974 === ", ") {this.setState({p974: "; "});}
          if (this.state.p974 === "; ") {this.setState({p974: ": "});}
          if (this.state.p974 === ": ") {this.setState({p974: "( "});}
          if (this.state.p974 === "( ") {this.setState({p974: ") "});}
          if (this.state.p974 === ") ") {this.setState({p974: "¡ "});}
          if (this.state.p974 === "¡ ") {this.setState({p974: "! "});}
          if (this.state.p974 === "! ") {this.setState({p974: "¿ "});}
          if (this.state.p974 === "¿ ") {this.setState({p974: "? "});}
          if (this.state.p974 === "? ") {this.setState({p974: " "});}
  }
  p975() {
          if (this.state.p975 === "agudas") {
                  this.setState({p975: "Agudas"});
          } else {
                  this.setState({p975: "agudas"});
          }
  }
  p976() {
          if (this.state.p976 === " ") {this.setState({p976: ", "});}
          if (this.state.p976 === ", ") {this.setState({p976: "; "});}
          if (this.state.p976 === "; ") {this.setState({p976: ": "});}
          if (this.state.p976 === ": ") {this.setState({p976: "( "});}
          if (this.state.p976 === "( ") {this.setState({p976: ") "});}
          if (this.state.p976 === ") ") {this.setState({p976: "¡ "});}
          if (this.state.p976 === "¡ ") {this.setState({p976: "! "});}
          if (this.state.p976 === "! ") {this.setState({p976: "¿ "});}
          if (this.state.p976 === "¿ ") {this.setState({p976: "? "});}
          if (this.state.p976 === "? ") {this.setState({p976: " "});}
  }
  p977() {
          if (this.state.p977 === "del") {
                  this.setState({p977: "Del"});
          } else {
                  this.setState({p977: "del"});
          }
  }
  p978() {
          if (this.state.p978 === " ") {this.setState({p978: ", "});}
          if (this.state.p978 === ", ") {this.setState({p978: "; "});}
          if (this.state.p978 === "; ") {this.setState({p978: ": "});}
          if (this.state.p978 === ": ") {this.setState({p978: "( "});}
          if (this.state.p978 === "( ") {this.setState({p978: ") "});}
          if (this.state.p978 === ") ") {this.setState({p978: "¡ "});}
          if (this.state.p978 === "¡ ") {this.setState({p978: "! "});}
          if (this.state.p978 === "! ") {this.setState({p978: "¿ "});}
          if (this.state.p978 === "¿ ") {this.setState({p978: "? "});}
          if (this.state.p978 === "? ") {this.setState({p978: " "});}
  }
  p979() {
          if (this.state.p979 === "insomnio") {
                  this.setState({p979: "Insomnio"});
          } else {
                  this.setState({p979: "insomnio"});
          }
  }
  p980() {
          if (this.state.p980 === " ") {this.setState({p980: ", "});}
          if (this.state.p980 === ", ") {this.setState({p980: "; "});}
          if (this.state.p980 === "; ") {this.setState({p980: ": "});}
          if (this.state.p980 === ": ") {this.setState({p980: "( "});}
          if (this.state.p980 === "( ") {this.setState({p980: ") "});}
          if (this.state.p980 === ") ") {this.setState({p980: "¡ "});}
          if (this.state.p980 === "¡ ") {this.setState({p980: "! "});}
          if (this.state.p980 === "! ") {this.setState({p980: "¿ "});}
          if (this.state.p980 === "¿ ") {this.setState({p980: "? "});}
          if (this.state.p980 === "? ") {this.setState({p980: " "});}
  }
  p981() {
          if (this.state.p981 === "cuando") {
                  this.setState({p981: "Cuando"});
          } else {
                  this.setState({p981: "cuando"});
          }
  }
  p982() {
          if (this.state.p982 === " ") {this.setState({p982: ", "});}
          if (this.state.p982 === ", ") {this.setState({p982: "; "});}
          if (this.state.p982 === "; ") {this.setState({p982: ": "});}
          if (this.state.p982 === ": ") {this.setState({p982: "( "});}
          if (this.state.p982 === "( ") {this.setState({p982: ") "});}
          if (this.state.p982 === ") ") {this.setState({p982: "¡ "});}
          if (this.state.p982 === "¡ ") {this.setState({p982: "! "});}
          if (this.state.p982 === "! ") {this.setState({p982: "¿ "});}
          if (this.state.p982 === "¿ ") {this.setState({p982: "? "});}
          if (this.state.p982 === "? ") {this.setState({p982: " "});}
  }
  p983() {
          if (this.state.p983 === "me") {
                  this.setState({p983: "Me"});
          } else {
                  this.setState({p983: "me"});
          }
  }
  p984() {
          if (this.state.p984 === " ") {this.setState({p984: ", "});}
          if (this.state.p984 === ", ") {this.setState({p984: "; "});}
          if (this.state.p984 === "; ") {this.setState({p984: ": "});}
          if (this.state.p984 === ": ") {this.setState({p984: "( "});}
          if (this.state.p984 === "( ") {this.setState({p984: ") "});}
          if (this.state.p984 === ") ") {this.setState({p984: "¡ "});}
          if (this.state.p984 === "¡ ") {this.setState({p984: "! "});}
          if (this.state.p984 === "! ") {this.setState({p984: "¿ "});}
          if (this.state.p984 === "¿ ") {this.setState({p984: "? "});}
          if (this.state.p984 === "? ") {this.setState({p984: " "});}
  }
  p985() {
          if (this.state.p985 === "pierdo") {
                  this.setState({p985: "Pierdo"});
          } else {
                  this.setState({p985: "pierdo"});
          }
  }
  p986() {
          if (this.state.p986 === " ") {this.setState({p986: ", "});}
          if (this.state.p986 === ", ") {this.setState({p986: "; "});}
          if (this.state.p986 === "; ") {this.setState({p986: ": "});}
          if (this.state.p986 === ": ") {this.setState({p986: "( "});}
          if (this.state.p986 === "( ") {this.setState({p986: ") "});}
          if (this.state.p986 === ") ") {this.setState({p986: "¡ "});}
          if (this.state.p986 === "¡ ") {this.setState({p986: "! "});}
          if (this.state.p986 === "! ") {this.setState({p986: "¿ "});}
          if (this.state.p986 === "¿ ") {this.setState({p986: "? "});}
          if (this.state.p986 === "? ") {this.setState({p986: " "});}
  }
  p987() {
          if (this.state.p987 === "en") {
                  this.setState({p987: "En"});
          } else {
                  this.setState({p987: "en"});
          }
  }
  p988() {
          if (this.state.p988 === " ") {this.setState({p988: ", "});}
          if (this.state.p988 === ", ") {this.setState({p988: "; "});}
          if (this.state.p988 === "; ") {this.setState({p988: ": "});}
          if (this.state.p988 === ": ") {this.setState({p988: "( "});}
          if (this.state.p988 === "( ") {this.setState({p988: ") "});}
          if (this.state.p988 === ") ") {this.setState({p988: "¡ "});}
          if (this.state.p988 === "¡ ") {this.setState({p988: "! "});}
          if (this.state.p988 === "! ") {this.setState({p988: "¿ "});}
          if (this.state.p988 === "¿ ") {this.setState({p988: "? "});}
          if (this.state.p988 === "? ") {this.setState({p988: " "});}
  }
  p989() {
          if (this.state.p989 === "conjeturas") {
                  this.setState({p989: "Conjeturas"});
          } else {
                  this.setState({p989: "conjeturas"});
          }
  }
  p990() {
          if (this.state.p990 === " ") {this.setState({p990: ", "});}
          if (this.state.p990 === ", ") {this.setState({p990: "; "});}
          if (this.state.p990 === "; ") {this.setState({p990: ": "});}
          if (this.state.p990 === ": ") {this.setState({p990: "( "});}
          if (this.state.p990 === "( ") {this.setState({p990: ") "});}
          if (this.state.p990 === ") ") {this.setState({p990: "¡ "});}
          if (this.state.p990 === "¡ ") {this.setState({p990: "! "});}
          if (this.state.p990 === "! ") {this.setState({p990: "¿ "});}
          if (this.state.p990 === "¿ ") {this.setState({p990: "? "});}
          if (this.state.p990 === "? ") {this.setState({p990: " "});}
  }
  p991() {
          if (this.state.p991 === "y") {
                  this.setState({p991: "Y"});
          } else {
                  this.setState({p991: "y"});
          }
  }
  p992() {
          if (this.state.p992 === " ") {this.setState({p992: ", "});}
          if (this.state.p992 === ", ") {this.setState({p992: "; "});}
          if (this.state.p992 === "; ") {this.setState({p992: ": "});}
          if (this.state.p992 === ": ") {this.setState({p992: "( "});}
          if (this.state.p992 === "( ") {this.setState({p992: ") "});}
          if (this.state.p992 === ") ") {this.setState({p992: "¡ "});}
          if (this.state.p992 === "¡ ") {this.setState({p992: "! "});}
          if (this.state.p992 === "! ") {this.setState({p992: "¿ "});}
          if (this.state.p992 === "¿ ") {this.setState({p992: "? "});}
          if (this.state.p992 === "? ") {this.setState({p992: " "});}
  }
  p993() {
          if (this.state.p993 === "nada") {
                  this.setState({p993: "Nada"});
          } else {
                  this.setState({p993: "nada"});
          }
  }
  p994() {
          if (this.state.p994 === " ") {this.setState({p994: ", "});}
          if (this.state.p994 === ", ") {this.setState({p994: "; "});}
          if (this.state.p994 === "; ") {this.setState({p994: ": "});}
          if (this.state.p994 === ": ") {this.setState({p994: "( "});}
          if (this.state.p994 === "( ") {this.setState({p994: ") "});}
          if (this.state.p994 === ") ") {this.setState({p994: "¡ "});}
          if (this.state.p994 === "¡ ") {this.setState({p994: "! "});}
          if (this.state.p994 === "! ") {this.setState({p994: "¿ "});}
          if (this.state.p994 === "¿ ") {this.setState({p994: "? "});}
          if (this.state.p994 === "? ") {this.setState({p994: " "});}
  }
  p995() {
          if (this.state.p995 === "me") {
                  this.setState({p995: "Me"});
          } else {
                  this.setState({p995: "me"});
          }
  }
  p996() {
          if (this.state.p996 === " ") {this.setState({p996: ", "});}
          if (this.state.p996 === ", ") {this.setState({p996: "; "});}
          if (this.state.p996 === "; ") {this.setState({p996: ": "});}
          if (this.state.p996 === ": ") {this.setState({p996: "( "});}
          if (this.state.p996 === "( ") {this.setState({p996: ") "});}
          if (this.state.p996 === ") ") {this.setState({p996: "¡ "});}
          if (this.state.p996 === "¡ ") {this.setState({p996: "! "});}
          if (this.state.p996 === "! ") {this.setState({p996: "¿ "});}
          if (this.state.p996 === "¿ ") {this.setState({p996: "? "});}
          if (this.state.p996 === "? ") {this.setState({p996: " "});}
  }
  p997() {
          if (this.state.p997 === "tranquiliza") {
                  this.setState({p997: "Tranquiliza"});
          } else {
                  this.setState({p997: "tranquiliza"});
          }
  }
  p998() {
          if (this.state.p998 === " ") {this.setState({p998: ", "});}
          if (this.state.p998 === ", ") {this.setState({p998: "; "});}
          if (this.state.p998 === "; ") {this.setState({p998: ": "});}
          if (this.state.p998 === ": ") {this.setState({p998: "( "});}
          if (this.state.p998 === "( ") {this.setState({p998: ") "});}
          if (this.state.p998 === ") ") {this.setState({p998: "¡ "});}
          if (this.state.p998 === "¡ ") {this.setState({p998: "! "});}
          if (this.state.p998 === "! ") {this.setState({p998: "¿ "});}
          if (this.state.p998 === "¿ ") {this.setState({p998: "? "});}
          if (this.state.p998 === "? ") {this.setState({p998: " "});}
  }
  p999() {
          if (this.state.p999 === "suele") {
                  this.setState({p999: "Suele"});
          } else {
                  this.setState({p999: "suele"});
          }
  }
  p1000() {
          if (this.state.p1000 === " ") {this.setState({p1000: ", "});}
          if (this.state.p1000 === ", ") {this.setState({p1000: "; "});}
          if (this.state.p1000 === "; ") {this.setState({p1000: ": "});}
          if (this.state.p1000 === ": ") {this.setState({p1000: "( "});}
          if (this.state.p1000 === "( ") {this.setState({p1000: ") "});}
          if (this.state.p1000 === ") ") {this.setState({p1000: "¡ "});}
          if (this.state.p1000 === "¡ ") {this.setState({p1000: "! "});}
          if (this.state.p1000 === "! ") {this.setState({p1000: "¿ "});}
          if (this.state.p1000 === "¿ ") {this.setState({p1000: "? "});}
          if (this.state.p1000 === "? ") {this.setState({p1000: " "});}
  }
  p1001() {
          if (this.state.p1001 === "visitarme") {
                  this.setState({p1001: "Visitarme"});
          } else {
                  this.setState({p1001: "visitarme"});
          }
  }
  p1002() {
          if (this.state.p1002 === " ") {this.setState({p1002: ", "});}
          if (this.state.p1002 === ", ") {this.setState({p1002: "; "});}
          if (this.state.p1002 === "; ") {this.setState({p1002: ": "});}
          if (this.state.p1002 === ": ") {this.setState({p1002: "( "});}
          if (this.state.p1002 === "( ") {this.setState({p1002: ") "});}
          if (this.state.p1002 === ") ") {this.setState({p1002: "¡ "});}
          if (this.state.p1002 === "¡ ") {this.setState({p1002: "! "});}
          if (this.state.p1002 === "! ") {this.setState({p1002: "¿ "});}
          if (this.state.p1002 === "¿ ") {this.setState({p1002: "? "});}
          if (this.state.p1002 === "? ") {this.setState({p1002: " "});}
  }
  p1003() {
          if (this.state.p1003 === "la") {
                  this.setState({p1003: "La"});
          } else {
                  this.setState({p1003: "la"});
          }
  }
  p1004() {
          if (this.state.p1004 === " ") {this.setState({p1004: ", "});}
          if (this.state.p1004 === ", ") {this.setState({p1004: "; "});}
          if (this.state.p1004 === "; ") {this.setState({p1004: ": "});}
          if (this.state.p1004 === ": ") {this.setState({p1004: "( "});}
          if (this.state.p1004 === "( ") {this.setState({p1004: ") "});}
          if (this.state.p1004 === ") ") {this.setState({p1004: "¡ "});}
          if (this.state.p1004 === "¡ ") {this.setState({p1004: "! "});}
          if (this.state.p1004 === "! ") {this.setState({p1004: "¿ "});}
          if (this.state.p1004 === "¿ ") {this.setState({p1004: "? "});}
          if (this.state.p1004 === "? ") {this.setState({p1004: " "});}
  }
  p1005() {
          if (this.state.p1005 === "migala") {
                  this.setState({p1005: "Migala"});
          } else {
                  this.setState({p1005: "migala"});
          }
  }
  p1006() {
          if (this.state.p1006 === " ") {this.setState({p1006: ", "});}
          if (this.state.p1006 === ", ") {this.setState({p1006: "; "});}
          if (this.state.p1006 === "; ") {this.setState({p1006: ". "});}
          if (this.state.p1006 === ". ") {this.setState({p1006: "( "});}
          if (this.state.p1006 === "( ") {this.setState({p1006: ") "});}
          if (this.state.p1006 === ") ") {this.setState({p1006: "¡ "});}
          if (this.state.p1006 === "¡ ") {this.setState({p1006: "! "});}
          if (this.state.p1006 === "! ") {this.setState({p1006: "¿ "});}
          if (this.state.p1006 === "¿ ") {this.setState({p1006: "? "});}
          if (this.state.p1006 === "? ") {this.setState({p1006: " "});}
  }
  p1007() {
          if (this.state.p1007 === "se") {
                  this.setState({p1007: "Se"});
          } else {
                  this.setState({p1007: "se"});
          }
  }
  p1008() {
          if (this.state.p1008 === " ") {this.setState({p1008: ", "});}
          if (this.state.p1008 === ", ") {this.setState({p1008: "; "});}
          if (this.state.p1008 === "; ") {this.setState({p1008: ": "});}
          if (this.state.p1008 === ": ") {this.setState({p1008: "( "});}
          if (this.state.p1008 === "( ") {this.setState({p1008: ") "});}
          if (this.state.p1008 === ") ") {this.setState({p1008: "¡ "});}
          if (this.state.p1008 === "¡ ") {this.setState({p1008: "! "});}
          if (this.state.p1008 === "! ") {this.setState({p1008: "¿ "});}
          if (this.state.p1008 === "¿ ") {this.setState({p1008: "? "});}
          if (this.state.p1008 === "? ") {this.setState({p1008: " "});}
  }
  p1009() {
          if (this.state.p1009 === "pasea") {
                  this.setState({p1009: "Pasea"});
          } else {
                  this.setState({p1009: "pasea"});
          }
  }
  p1010() {
          if (this.state.p1010 === " ") {this.setState({p1010: ", "});}
          if (this.state.p1010 === ", ") {this.setState({p1010: "; "});}
          if (this.state.p1010 === "; ") {this.setState({p1010: ": "});}
          if (this.state.p1010 === ": ") {this.setState({p1010: "( "});}
          if (this.state.p1010 === "( ") {this.setState({p1010: ") "});}
          if (this.state.p1010 === ") ") {this.setState({p1010: "¡ "});}
          if (this.state.p1010 === "¡ ") {this.setState({p1010: "! "});}
          if (this.state.p1010 === "! ") {this.setState({p1010: "¿ "});}
          if (this.state.p1010 === "¿ ") {this.setState({p1010: "? "});}
          if (this.state.p1010 === "? ") {this.setState({p1010: " "});}
  }
  p1011() {
          if (this.state.p1011 === "embrolladamente") {
                  this.setState({p1011: "Embrolladamente"});
          } else {
                  this.setState({p1011: "embrolladamente"});
          }
  }
  p1012() {
          if (this.state.p1012 === " ") {this.setState({p1012: ", "});}
          if (this.state.p1012 === ", ") {this.setState({p1012: "; "});}
          if (this.state.p1012 === "; ") {this.setState({p1012: ": "});}
          if (this.state.p1012 === ": ") {this.setState({p1012: "( "});}
          if (this.state.p1012 === "( ") {this.setState({p1012: ") "});}
          if (this.state.p1012 === ") ") {this.setState({p1012: "¡ "});}
          if (this.state.p1012 === "¡ ") {this.setState({p1012: "! "});}
          if (this.state.p1012 === "! ") {this.setState({p1012: "¿ "});}
          if (this.state.p1012 === "¿ ") {this.setState({p1012: "? "});}
          if (this.state.p1012 === "? ") {this.setState({p1012: " "});}
  }
  p1013() {
          if (this.state.p1013 === "por") {
                  this.setState({p1013: "Por"});
          } else {
                  this.setState({p1013: "por"});
          }
  }
  p1014() {
          if (this.state.p1014 === " ") {this.setState({p1014: ", "});}
          if (this.state.p1014 === ", ") {this.setState({p1014: "; "});}
          if (this.state.p1014 === "; ") {this.setState({p1014: ": "});}
          if (this.state.p1014 === ": ") {this.setState({p1014: "( "});}
          if (this.state.p1014 === "( ") {this.setState({p1014: ") "});}
          if (this.state.p1014 === ") ") {this.setState({p1014: "¡ "});}
          if (this.state.p1014 === "¡ ") {this.setState({p1014: "! "});}
          if (this.state.p1014 === "! ") {this.setState({p1014: "¿ "});}
          if (this.state.p1014 === "¿ ") {this.setState({p1014: "? "});}
          if (this.state.p1014 === "? ") {this.setState({p1014: " "});}
  }
  p1015() {
          if (this.state.p1015 === "el") {
                  this.setState({p1015: "El"});
          } else {
                  this.setState({p1015: "el"});
          }
  }
  p1016() {
          if (this.state.p1016 === " ") {this.setState({p1016: ", "});}
          if (this.state.p1016 === ", ") {this.setState({p1016: "; "});}
          if (this.state.p1016 === "; ") {this.setState({p1016: ": "});}
          if (this.state.p1016 === ": ") {this.setState({p1016: "( "});}
          if (this.state.p1016 === "( ") {this.setState({p1016: ") "});}
          if (this.state.p1016 === ") ") {this.setState({p1016: "¡ "});}
          if (this.state.p1016 === "¡ ") {this.setState({p1016: "! "});}
          if (this.state.p1016 === "! ") {this.setState({p1016: "¿ "});}
          if (this.state.p1016 === "¿ ") {this.setState({p1016: "? "});}
          if (this.state.p1016 === "? ") {this.setState({p1016: " "});}
  }
  p1017() {
          if (this.state.p1017 === "cuarto") {
                  this.setState({p1017: "Cuarto"});
          } else {
                  this.setState({p1017: "cuarto"});
          }
  }
  p1018() {
          if (this.state.p1018 === " ") {this.setState({p1018: ", "});}
          if (this.state.p1018 === ", ") {this.setState({p1018: "; "});}
          if (this.state.p1018 === "; ") {this.setState({p1018: ": "});}
          if (this.state.p1018 === ": ") {this.setState({p1018: "( "});}
          if (this.state.p1018 === "( ") {this.setState({p1018: ") "});}
          if (this.state.p1018 === ") ") {this.setState({p1018: "¡ "});}
          if (this.state.p1018 === "¡ ") {this.setState({p1018: "! "});}
          if (this.state.p1018 === "! ") {this.setState({p1018: "¿ "});}
          if (this.state.p1018 === "¿ ") {this.setState({p1018: "? "});}
          if (this.state.p1018 === "? ") {this.setState({p1018: " "});}
  }
  p1019() {
          if (this.state.p1019 === "y") {
                  this.setState({p1019: "Y"});
          } else {
                  this.setState({p1019: "y"});
          }
  }
  p1020() {
          if (this.state.p1020 === " ") {this.setState({p1020: ", "});}
          if (this.state.p1020 === ", ") {this.setState({p1020: "; "});}
          if (this.state.p1020 === "; ") {this.setState({p1020: ": "});}
          if (this.state.p1020 === ": ") {this.setState({p1020: "( "});}
          if (this.state.p1020 === "( ") {this.setState({p1020: ") "});}
          if (this.state.p1020 === ") ") {this.setState({p1020: "¡ "});}
          if (this.state.p1020 === "¡ ") {this.setState({p1020: "! "});}
          if (this.state.p1020 === "! ") {this.setState({p1020: "¿ "});}
          if (this.state.p1020 === "¿ ") {this.setState({p1020: "? "});}
          if (this.state.p1020 === "? ") {this.setState({p1020: " "});}
  }
  p1021() {
          if (this.state.p1021 === "trata") {
                  this.setState({p1021: "Trata"});
          } else {
                  this.setState({p1021: "trata"});
          }
  }
  p1022() {
          if (this.state.p1022 === " ") {this.setState({p1022: ", "});}
          if (this.state.p1022 === ", ") {this.setState({p1022: "; "});}
          if (this.state.p1022 === "; ") {this.setState({p1022: ": "});}
          if (this.state.p1022 === ": ") {this.setState({p1022: "( "});}
          if (this.state.p1022 === "( ") {this.setState({p1022: ") "});}
          if (this.state.p1022 === ") ") {this.setState({p1022: "¡ "});}
          if (this.state.p1022 === "¡ ") {this.setState({p1022: "! "});}
          if (this.state.p1022 === "! ") {this.setState({p1022: "¿ "});}
          if (this.state.p1022 === "¿ ") {this.setState({p1022: "? "});}
          if (this.state.p1022 === "? ") {this.setState({p1022: " "});}
  }
  p1023() {
          if (this.state.p1023 === "de") {
                  this.setState({p1023: "De"});
          } else {
                  this.setState({p1023: "de"});
          }
  }
  p1024() {
          if (this.state.p1024 === " ") {this.setState({p1024: ", "});}
          if (this.state.p1024 === ", ") {this.setState({p1024: "; "});}
          if (this.state.p1024 === "; ") {this.setState({p1024: ": "});}
          if (this.state.p1024 === ": ") {this.setState({p1024: "( "});}
          if (this.state.p1024 === "( ") {this.setState({p1024: ") "});}
          if (this.state.p1024 === ") ") {this.setState({p1024: "¡ "});}
          if (this.state.p1024 === "¡ ") {this.setState({p1024: "! "});}
          if (this.state.p1024 === "! ") {this.setState({p1024: "¿ "});}
          if (this.state.p1024 === "¿ ") {this.setState({p1024: "? "});}
          if (this.state.p1024 === "? ") {this.setState({p1024: " "});}
  }
  p1025() {
          if (this.state.p1025 === "subir") {
                  this.setState({p1025: "Subir"});
          } else {
                  this.setState({p1025: "subir"});
          }
  }
  p1026() {
          if (this.state.p1026 === " ") {this.setState({p1026: ", "});}
          if (this.state.p1026 === ", ") {this.setState({p1026: "; "});}
          if (this.state.p1026 === "; ") {this.setState({p1026: ": "});}
          if (this.state.p1026 === ": ") {this.setState({p1026: "( "});}
          if (this.state.p1026 === "( ") {this.setState({p1026: ") "});}
          if (this.state.p1026 === ") ") {this.setState({p1026: "¡ "});}
          if (this.state.p1026 === "¡ ") {this.setState({p1026: "! "});}
          if (this.state.p1026 === "! ") {this.setState({p1026: "¿ "});}
          if (this.state.p1026 === "¿ ") {this.setState({p1026: "? "});}
          if (this.state.p1026 === "? ") {this.setState({p1026: " "});}
  }
  p1027() {
          if (this.state.p1027 === "con") {
                  this.setState({p1027: "Con"});
          } else {
                  this.setState({p1027: "con"});
          }
  }
  p1028() {
          if (this.state.p1028 === " ") {this.setState({p1028: ", "});}
          if (this.state.p1028 === ", ") {this.setState({p1028: "; "});}
          if (this.state.p1028 === "; ") {this.setState({p1028: ": "});}
          if (this.state.p1028 === ": ") {this.setState({p1028: "( "});}
          if (this.state.p1028 === "( ") {this.setState({p1028: ") "});}
          if (this.state.p1028 === ") ") {this.setState({p1028: "¡ "});}
          if (this.state.p1028 === "¡ ") {this.setState({p1028: "! "});}
          if (this.state.p1028 === "! ") {this.setState({p1028: "¿ "});}
          if (this.state.p1028 === "¿ ") {this.setState({p1028: "? "});}
          if (this.state.p1028 === "? ") {this.setState({p1028: " "});}
  }
  p1029() {
          if (this.state.p1029 === "torpeza") {
                  this.setState({p1029: "Torpeza"});
          } else {
                  this.setState({p1029: "torpeza"});
          }
  }
  p1030() {
          if (this.state.p1030 === " ") {this.setState({p1030: ", "});}
          if (this.state.p1030 === ", ") {this.setState({p1030: "; "});}
          if (this.state.p1030 === "; ") {this.setState({p1030: ": "});}
          if (this.state.p1030 === ": ") {this.setState({p1030: "( "});}
          if (this.state.p1030 === "( ") {this.setState({p1030: ") "});}
          if (this.state.p1030 === ") ") {this.setState({p1030: "¡ "});}
          if (this.state.p1030 === "¡ ") {this.setState({p1030: "! "});}
          if (this.state.p1030 === "! ") {this.setState({p1030: "¿ "});}
          if (this.state.p1030 === "¿ ") {this.setState({p1030: "? "});}
          if (this.state.p1030 === "? ") {this.setState({p1030: " "});}
  }
  p1031() {
          if (this.state.p1031 === "a") {
                  this.setState({p1031: "A"});
          } else {
                  this.setState({p1031: "a"});
          }
  }
  p1032() {
          if (this.state.p1032 === " ") {this.setState({p1032: ", "});}
          if (this.state.p1032 === ", ") {this.setState({p1032: "; "});}
          if (this.state.p1032 === "; ") {this.setState({p1032: ": "});}
          if (this.state.p1032 === ": ") {this.setState({p1032: "( "});}
          if (this.state.p1032 === "( ") {this.setState({p1032: ") "});}
          if (this.state.p1032 === ") ") {this.setState({p1032: "¡ "});}
          if (this.state.p1032 === "¡ ") {this.setState({p1032: "! "});}
          if (this.state.p1032 === "! ") {this.setState({p1032: "¿ "});}
          if (this.state.p1032 === "¿ ") {this.setState({p1032: "? "});}
          if (this.state.p1032 === "? ") {this.setState({p1032: " "});}
  }
  p1033() {
          if (this.state.p1033 === "las") {
                  this.setState({p1033: "Las"});
          } else {
                  this.setState({p1033: "las"});
          }
  }
  p1034() {
          if (this.state.p1034 === " ") {this.setState({p1034: ", "});}
          if (this.state.p1034 === ", ") {this.setState({p1034: "; "});}
          if (this.state.p1034 === "; ") {this.setState({p1034: ": "});}
          if (this.state.p1034 === ": ") {this.setState({p1034: "( "});}
          if (this.state.p1034 === "( ") {this.setState({p1034: ") "});}
          if (this.state.p1034 === ") ") {this.setState({p1034: "¡ "});}
          if (this.state.p1034 === "¡ ") {this.setState({p1034: "! "});}
          if (this.state.p1034 === "! ") {this.setState({p1034: "¿ "});}
          if (this.state.p1034 === "¿ ") {this.setState({p1034: "? "});}
          if (this.state.p1034 === "? ") {this.setState({p1034: " "});}
  }
  p1035() {
          if (this.state.p1035 === "paredes") {
                  this.setState({p1035: "Paredes"});
          } else {
                  this.setState({p1035: "paredes"});
          }
  }
  p1036() {
          if (this.state.p1036 === " ") {this.setState({p1036: ", "});}
          if (this.state.p1036 === ", ") {this.setState({p1036: "; "});}
          if (this.state.p1036 === "; ") {this.setState({p1036: ". "});}
          if (this.state.p1036 === ". ") {this.setState({p1036: "( "});}
          if (this.state.p1036 === "( ") {this.setState({p1036: ") "});}
          if (this.state.p1036 === ") ") {this.setState({p1036: "¡ "});}
          if (this.state.p1036 === "¡ ") {this.setState({p1036: "! "});}
          if (this.state.p1036 === "! ") {this.setState({p1036: "¿ "});}
          if (this.state.p1036 === "¿ ") {this.setState({p1036: "? "});}
          if (this.state.p1036 === "? ") {this.setState({p1036: " "});}
  }
  p1037() {
          if (this.state.p1037 === "se") {
                  this.setState({p1037: "Se"});
          } else {
                  this.setState({p1037: "se"});
          }
  }
  p1038() {
          if (this.state.p1038 === " ") {this.setState({p1038: ", "});}
          if (this.state.p1038 === ", ") {this.setState({p1038: "; "});}
          if (this.state.p1038 === "; ") {this.setState({p1038: ": "});}
          if (this.state.p1038 === ": ") {this.setState({p1038: "( "});}
          if (this.state.p1038 === "( ") {this.setState({p1038: ") "});}
          if (this.state.p1038 === ") ") {this.setState({p1038: "¡ "});}
          if (this.state.p1038 === "¡ ") {this.setState({p1038: "! "});}
          if (this.state.p1038 === "! ") {this.setState({p1038: "¿ "});}
          if (this.state.p1038 === "¿ ") {this.setState({p1038: "? "});}
          if (this.state.p1038 === "? ") {this.setState({p1038: " "});}
  }
  p1039() {
          if (this.state.p1039 === "detiene") {
                  this.setState({p1039: "Detiene"});
          } else {
                  this.setState({p1039: "detiene"});
          }
  }
  p1040() {
          if (this.state.p1040 === " ") {this.setState({p1040: ", "});}
          if (this.state.p1040 === ", ") {this.setState({p1040: "; "});}
          if (this.state.p1040 === "; ") {this.setState({p1040: ": "});}
          if (this.state.p1040 === ": ") {this.setState({p1040: "( "});}
          if (this.state.p1040 === "( ") {this.setState({p1040: ") "});}
          if (this.state.p1040 === ") ") {this.setState({p1040: "¡ "});}
          if (this.state.p1040 === "¡ ") {this.setState({p1040: "! "});}
          if (this.state.p1040 === "! ") {this.setState({p1040: "¿ "});}
          if (this.state.p1040 === "¿ ") {this.setState({p1040: "? "});}
          if (this.state.p1040 === "? ") {this.setState({p1040: " "});}
  }
  p1041() {
          if (this.state.p1041 === "levanta") {
                  this.setState({p1041: "Levanta"});
          } else {
                  this.setState({p1041: "levanta"});
          }
  }
  p1042() {
          if (this.state.p1042 === " ") {this.setState({p1042: ", "});}
          if (this.state.p1042 === ", ") {this.setState({p1042: "; "});}
          if (this.state.p1042 === "; ") {this.setState({p1042: ": "});}
          if (this.state.p1042 === ": ") {this.setState({p1042: "( "});}
          if (this.state.p1042 === "( ") {this.setState({p1042: ") "});}
          if (this.state.p1042 === ") ") {this.setState({p1042: "¡ "});}
          if (this.state.p1042 === "¡ ") {this.setState({p1042: "! "});}
          if (this.state.p1042 === "! ") {this.setState({p1042: "¿ "});}
          if (this.state.p1042 === "¿ ") {this.setState({p1042: "? "});}
          if (this.state.p1042 === "? ") {this.setState({p1042: " "});}
  }
  p1043() {
          if (this.state.p1043 === "su") {
                  this.setState({p1043: "Su"});
          } else {
                  this.setState({p1043: "su"});
          }
  }
  p1044() {
          if (this.state.p1044 === " ") {this.setState({p1044: ", "});}
          if (this.state.p1044 === ", ") {this.setState({p1044: "; "});}
          if (this.state.p1044 === "; ") {this.setState({p1044: ": "});}
          if (this.state.p1044 === ": ") {this.setState({p1044: "( "});}
          if (this.state.p1044 === "( ") {this.setState({p1044: ") "});}
          if (this.state.p1044 === ") ") {this.setState({p1044: "¡ "});}
          if (this.state.p1044 === "¡ ") {this.setState({p1044: "! "});}
          if (this.state.p1044 === "! ") {this.setState({p1044: "¿ "});}
          if (this.state.p1044 === "¿ ") {this.setState({p1044: "? "});}
          if (this.state.p1044 === "? ") {this.setState({p1044: " "});}
  }
  p1045() {
          if (this.state.p1045 === "cabeza") {
                  this.setState({p1045: "Cabeza"});
          } else {
                  this.setState({p1045: "cabeza"});
          }
  }
  p1046() {
          if (this.state.p1046 === " ") {this.setState({p1046: ", "});}
          if (this.state.p1046 === ", ") {this.setState({p1046: "; "});}
          if (this.state.p1046 === "; ") {this.setState({p1046: ": "});}
          if (this.state.p1046 === ": ") {this.setState({p1046: "( "});}
          if (this.state.p1046 === "( ") {this.setState({p1046: ") "});}
          if (this.state.p1046 === ") ") {this.setState({p1046: "¡ "});}
          if (this.state.p1046 === "¡ ") {this.setState({p1046: "! "});}
          if (this.state.p1046 === "! ") {this.setState({p1046: "¿ "});}
          if (this.state.p1046 === "¿ ") {this.setState({p1046: "? "});}
          if (this.state.p1046 === "? ") {this.setState({p1046: " "});}
  }
  p1047() {
          if (this.state.p1047 === "y") {
                  this.setState({p1047: "Y"});
          } else {
                  this.setState({p1047: "y"});
          }
  }
  p1048() {
          if (this.state.p1048 === " ") {this.setState({p1048: ", "});}
          if (this.state.p1048 === ", ") {this.setState({p1048: "; "});}
          if (this.state.p1048 === "; ") {this.setState({p1048: ": "});}
          if (this.state.p1048 === ": ") {this.setState({p1048: "( "});}
          if (this.state.p1048 === "( ") {this.setState({p1048: ") "});}
          if (this.state.p1048 === ") ") {this.setState({p1048: "¡ "});}
          if (this.state.p1048 === "¡ ") {this.setState({p1048: "! "});}
          if (this.state.p1048 === "! ") {this.setState({p1048: "¿ "});}
          if (this.state.p1048 === "¿ ") {this.setState({p1048: "? "});}
          if (this.state.p1048 === "? ") {this.setState({p1048: " "});}
  }
  p1049() {
          if (this.state.p1049 === "mueve") {
                  this.setState({p1049: "Mueve"});
          } else {
                  this.setState({p1049: "mueve"});
          }
  }
  p1050() {
          if (this.state.p1050 === " ") {this.setState({p1050: ", "});}
          if (this.state.p1050 === ", ") {this.setState({p1050: "; "});}
          if (this.state.p1050 === "; ") {this.setState({p1050: ": "});}
          if (this.state.p1050 === ": ") {this.setState({p1050: "( "});}
          if (this.state.p1050 === "( ") {this.setState({p1050: ") "});}
          if (this.state.p1050 === ") ") {this.setState({p1050: "¡ "});}
          if (this.state.p1050 === "¡ ") {this.setState({p1050: "! "});}
          if (this.state.p1050 === "! ") {this.setState({p1050: "¿ "});}
          if (this.state.p1050 === "¿ ") {this.setState({p1050: "? "});}
          if (this.state.p1050 === "? ") {this.setState({p1050: " "});}
  }
  p1051() {
          if (this.state.p1051 === "los") {
                  this.setState({p1051: "Los"});
          } else {
                  this.setState({p1051: "los"});
          }
  }
  p1052() {
          if (this.state.p1052 === " ") {this.setState({p1052: ", "});}
          if (this.state.p1052 === ", ") {this.setState({p1052: "; "});}
          if (this.state.p1052 === "; ") {this.setState({p1052: ": "});}
          if (this.state.p1052 === ": ") {this.setState({p1052: "( "});}
          if (this.state.p1052 === "( ") {this.setState({p1052: ") "});}
          if (this.state.p1052 === ") ") {this.setState({p1052: "¡ "});}
          if (this.state.p1052 === "¡ ") {this.setState({p1052: "! "});}
          if (this.state.p1052 === "! ") {this.setState({p1052: "¿ "});}
          if (this.state.p1052 === "¿ ") {this.setState({p1052: "? "});}
          if (this.state.p1052 === "? ") {this.setState({p1052: " "});}
  }
  p1053() {
          if (this.state.p1053 === "palpos") {
                  this.setState({p1053: "Palpos"});
          } else {
                  this.setState({p1053: "palpos"});
          }
  }
  p1054() {
          if (this.state.p1054 === " ") {this.setState({p1054: ", "});}
          if (this.state.p1054 === ", ") {this.setState({p1054: "; "});}
          if (this.state.p1054 === "; ") {this.setState({p1054: ". "});}
          if (this.state.p1054 === ". ") {this.setState({p1054: "( "});}
          if (this.state.p1054 === "( ") {this.setState({p1054: ") "});}
          if (this.state.p1054 === ") ") {this.setState({p1054: "¡ "});}
          if (this.state.p1054 === "¡ ") {this.setState({p1054: "! "});}
          if (this.state.p1054 === "! ") {this.setState({p1054: "¿ "});}
          if (this.state.p1054 === "¿ ") {this.setState({p1054: "? "});}
          if (this.state.p1054 === "? ") {this.setState({p1054: " "});}
  }
  p1055() {
          if (this.state.p1055 === "parece") {
                  this.setState({p1055: "Parece"});
          } else {
                  this.setState({p1055: "parece"});
          }
  }
  p1056() {
          if (this.state.p1056 === " ") {this.setState({p1056: ", "});}
          if (this.state.p1056 === ", ") {this.setState({p1056: "; "});}
          if (this.state.p1056 === "; ") {this.setState({p1056: ": "});}
          if (this.state.p1056 === ": ") {this.setState({p1056: "( "});}
          if (this.state.p1056 === "( ") {this.setState({p1056: ") "});}
          if (this.state.p1056 === ") ") {this.setState({p1056: "¡ "});}
          if (this.state.p1056 === "¡ ") {this.setState({p1056: "! "});}
          if (this.state.p1056 === "! ") {this.setState({p1056: "¿ "});}
          if (this.state.p1056 === "¿ ") {this.setState({p1056: "? "});}
          if (this.state.p1056 === "? ") {this.setState({p1056: " "});}
  }
  p1057() {
          if (this.state.p1057 === "husmear") {
                  this.setState({p1057: "Husmear"});
          } else {
                  this.setState({p1057: "husmear"});
          }
  }
  p1058() {
          if (this.state.p1058 === " ") {this.setState({p1058: ", "});}
          if (this.state.p1058 === ", ") {this.setState({p1058: "; "});}
          if (this.state.p1058 === "; ") {this.setState({p1058: ": "});}
          if (this.state.p1058 === ": ") {this.setState({p1058: "( "});}
          if (this.state.p1058 === "( ") {this.setState({p1058: ") "});}
          if (this.state.p1058 === ") ") {this.setState({p1058: "¡ "});}
          if (this.state.p1058 === "¡ ") {this.setState({p1058: "! "});}
          if (this.state.p1058 === "! ") {this.setState({p1058: "¿ "});}
          if (this.state.p1058 === "¿ ") {this.setState({p1058: "? "});}
          if (this.state.p1058 === "? ") {this.setState({p1058: " "});}
  }
  p1059() {
          if (this.state.p1059 === "agitada,") {
                  this.setState({p1059: "Agitada,"});
          } else {
                  this.setState({p1059: "agitada,"});
          }
  }
  p1060() {
          if (this.state.p1060 === " ") {this.setState({p1060: ", "});}
          if (this.state.p1060 === ", ") {this.setState({p1060: "; "});}
          if (this.state.p1060 === "; ") {this.setState({p1060: ": "});}
          if (this.state.p1060 === ": ") {this.setState({p1060: "( "});}
          if (this.state.p1060 === "( ") {this.setState({p1060: ") "});}
          if (this.state.p1060 === ") ") {this.setState({p1060: "¡ "});}
          if (this.state.p1060 === "¡ ") {this.setState({p1060: "! "});}
          if (this.state.p1060 === "! ") {this.setState({p1060: "¿ "});}
          if (this.state.p1060 === "¿ ") {this.setState({p1060: "? "});}
          if (this.state.p1060 === "? ") {this.setState({p1060: " "});}
  }
  p1061() {
          if (this.state.p1061 === "un") {
                  this.setState({p1061: "Un"});
          } else {
                  this.setState({p1061: "un"});
          }
  }
  p1062() {
          if (this.state.p1062 === " ") {this.setState({p1062: ", "});}
          if (this.state.p1062 === ", ") {this.setState({p1062: "; "});}
          if (this.state.p1062 === "; ") {this.setState({p1062: ": "});}
          if (this.state.p1062 === ": ") {this.setState({p1062: "( "});}
          if (this.state.p1062 === "( ") {this.setState({p1062: ") "});}
          if (this.state.p1062 === ") ") {this.setState({p1062: "¡ "});}
          if (this.state.p1062 === "¡ ") {this.setState({p1062: "! "});}
          if (this.state.p1062 === "! ") {this.setState({p1062: "¿ "});}
          if (this.state.p1062 === "¿ ") {this.setState({p1062: "? "});}
          if (this.state.p1062 === "? ") {this.setState({p1062: " "});}
  }
  p1063() {
          if (this.state.p1063 === "invisible") {
                  this.setState({p1063: "Invisible"});
          } else {
                  this.setState({p1063: "invisible"});
          }
  }
  p1064() {
          if (this.state.p1064 === " ") {this.setState({p1064: ", "});}
          if (this.state.p1064 === ", ") {this.setState({p1064: "; "});}
          if (this.state.p1064 === "; ") {this.setState({p1064: ": "});}
          if (this.state.p1064 === ": ") {this.setState({p1064: "( "});}
          if (this.state.p1064 === "( ") {this.setState({p1064: ") "});}
          if (this.state.p1064 === ") ") {this.setState({p1064: "¡ "});}
          if (this.state.p1064 === "¡ ") {this.setState({p1064: "! "});}
          if (this.state.p1064 === "! ") {this.setState({p1064: "¿ "});}
          if (this.state.p1064 === "¿ ") {this.setState({p1064: "? "});}
          if (this.state.p1064 === "? ") {this.setState({p1064: " "});}
  }
  p1065() {
          if (this.state.p1065 === "compañero") {
                  this.setState({p1065: "Compañero"});
          } else {
                  this.setState({p1065: "compañero"});
          }
  }
  p1066() {
          if (this.state.p1066 === " ") {this.setState({p1066: ", "});}
          if (this.state.p1066 === ", ") {this.setState({p1066: "; "});}
          if (this.state.p1066 === "; ") {this.setState({p1066: ". "});}
          if (this.state.p1066 === ". ") {this.setState({p1066: "( "});}
          if (this.state.p1066 === "( ") {this.setState({p1066: ") "});}
          if (this.state.p1066 === ") ") {this.setState({p1066: "¡ "});}
          if (this.state.p1066 === "¡ ") {this.setState({p1066: "! "});}
          if (this.state.p1066 === "! ") {this.setState({p1066: "¿ "});}
          if (this.state.p1066 === "¿ ") {this.setState({p1066: "? "});}
          if (this.state.p1066 === "? ") {this.setState({p1066: " "});}
  }
  p1067() {
          if (this.state.p1067 === "entonces") {
                  this.setState({p1067: "Entonces"});
          } else {
                  this.setState({p1067: "entonces"});
          }
  }
  p1068() {
          if (this.state.p1068 === " ") {this.setState({p1068: ", "});}
          if (this.state.p1068 === ", ") {this.setState({p1068: "; "});}
          if (this.state.p1068 === "; ") {this.setState({p1068: ": "});}
          if (this.state.p1068 === ": ") {this.setState({p1068: "( "});}
          if (this.state.p1068 === "( ") {this.setState({p1068: ") "});}
          if (this.state.p1068 === ") ") {this.setState({p1068: "¡ "});}
          if (this.state.p1068 === "¡ ") {this.setState({p1068: "! "});}
          if (this.state.p1068 === "! ") {this.setState({p1068: "¿ "});}
          if (this.state.p1068 === "¿ ") {this.setState({p1068: "? "});}
          if (this.state.p1068 === "? ") {this.setState({p1068: " "});}
  }
  p1069() {
          if (this.state.p1069 === "estremecido") {
                  this.setState({p1069: "Estremecido"});
          } else {
                  this.setState({p1069: "estremecido"});
          }
  }
  p1070() {
          if (this.state.p1070 === " ") {this.setState({p1070: ", "});}
          if (this.state.p1070 === ", ") {this.setState({p1070: "; "});}
          if (this.state.p1070 === "; ") {this.setState({p1070: ": "});}
          if (this.state.p1070 === ": ") {this.setState({p1070: "( "});}
          if (this.state.p1070 === "( ") {this.setState({p1070: ") "});}
          if (this.state.p1070 === ") ") {this.setState({p1070: "¡ "});}
          if (this.state.p1070 === "¡ ") {this.setState({p1070: "! "});}
          if (this.state.p1070 === "! ") {this.setState({p1070: "¿ "});}
          if (this.state.p1070 === "¿ ") {this.setState({p1070: "? "});}
          if (this.state.p1070 === "? ") {this.setState({p1070: " "});}
  }
  p1071() {
          if (this.state.p1071 === "en") {
                  this.setState({p1071: "En"});
          } else {
                  this.setState({p1071: "en"});
          }
  }
  p1072() {
          if (this.state.p1072 === " ") {this.setState({p1072: ", "});}
          if (this.state.p1072 === ", ") {this.setState({p1072: "; "});}
          if (this.state.p1072 === "; ") {this.setState({p1072: ": "});}
          if (this.state.p1072 === ": ") {this.setState({p1072: "( "});}
          if (this.state.p1072 === "( ") {this.setState({p1072: ") "});}
          if (this.state.p1072 === ") ") {this.setState({p1072: "¡ "});}
          if (this.state.p1072 === "¡ ") {this.setState({p1072: "! "});}
          if (this.state.p1072 === "! ") {this.setState({p1072: "¿ "});}
          if (this.state.p1072 === "¿ ") {this.setState({p1072: "? "});}
          if (this.state.p1072 === "? ") {this.setState({p1072: " "});}
  }
  p1073() {
          if (this.state.p1073 === "mi") {
                  this.setState({p1073: "Mi"});
          } else {
                  this.setState({p1073: "mi"});
          }
  }
  p1074() {
          if (this.state.p1074 === " ") {this.setState({p1074: ", "});}
          if (this.state.p1074 === ", ") {this.setState({p1074: "; "});}
          if (this.state.p1074 === "; ") {this.setState({p1074: ": "});}
          if (this.state.p1074 === ": ") {this.setState({p1074: "( "});}
          if (this.state.p1074 === "( ") {this.setState({p1074: ") "});}
          if (this.state.p1074 === ") ") {this.setState({p1074: "¡ "});}
          if (this.state.p1074 === "¡ ") {this.setState({p1074: "! "});}
          if (this.state.p1074 === "! ") {this.setState({p1074: "¿ "});}
          if (this.state.p1074 === "¿ ") {this.setState({p1074: "? "});}
          if (this.state.p1074 === "? ") {this.setState({p1074: " "});}
  }
  p1075() {
          if (this.state.p1075 === "soledad") {
                  this.setState({p1075: "Soledad"});
          } else {
                  this.setState({p1075: "soledad"});
          }
  }
  p1076() {
          if (this.state.p1076 === " ") {this.setState({p1076: ", "});}
          if (this.state.p1076 === ", ") {this.setState({p1076: "; "});}
          if (this.state.p1076 === "; ") {this.setState({p1076: ": "});}
          if (this.state.p1076 === ": ") {this.setState({p1076: "( "});}
          if (this.state.p1076 === "( ") {this.setState({p1076: ") "});}
          if (this.state.p1076 === ") ") {this.setState({p1076: "¡ "});}
          if (this.state.p1076 === "¡ ") {this.setState({p1076: "! "});}
          if (this.state.p1076 === "! ") {this.setState({p1076: "¿ "});}
          if (this.state.p1076 === "¿ ") {this.setState({p1076: "? "});}
          if (this.state.p1076 === "? ") {this.setState({p1076: " "});}
  }
  p1077() {
          if (this.state.p1077 === "acorralado") {
                  this.setState({p1077: "Acorralado"});
          } else {
                  this.setState({p1077: "acorralado"});
          }
  }
  p1078() {
          if (this.state.p1078 === " ") {this.setState({p1078: ", "});}
          if (this.state.p1078 === ", ") {this.setState({p1078: "; "});}
          if (this.state.p1078 === "; ") {this.setState({p1078: ": "});}
          if (this.state.p1078 === ": ") {this.setState({p1078: "( "});}
          if (this.state.p1078 === "( ") {this.setState({p1078: ") "});}
          if (this.state.p1078 === ") ") {this.setState({p1078: "¡ "});}
          if (this.state.p1078 === "¡ ") {this.setState({p1078: "! "});}
          if (this.state.p1078 === "! ") {this.setState({p1078: "¿ "});}
          if (this.state.p1078 === "¿ ") {this.setState({p1078: "? "});}
          if (this.state.p1078 === "? ") {this.setState({p1078: " "});}
  }
  p1079() {
          if (this.state.p1079 === "por") {
                  this.setState({p1079: "Por"});
          } else {
                  this.setState({p1079: "por"});
          }
  }
  p1080() {
          if (this.state.p1080 === " ") {this.setState({p1080: ", "});}
          if (this.state.p1080 === ", ") {this.setState({p1080: "; "});}
          if (this.state.p1080 === "; ") {this.setState({p1080: ": "});}
          if (this.state.p1080 === ": ") {this.setState({p1080: "( "});}
          if (this.state.p1080 === "( ") {this.setState({p1080: ") "});}
          if (this.state.p1080 === ") ") {this.setState({p1080: "¡ "});}
          if (this.state.p1080 === "¡ ") {this.setState({p1080: "! "});}
          if (this.state.p1080 === "! ") {this.setState({p1080: "¿ "});}
          if (this.state.p1080 === "¿ ") {this.setState({p1080: "? "});}
          if (this.state.p1080 === "? ") {this.setState({p1080: " "});}
  }
  p1081() {
          if (this.state.p1081 === "el") {
                  this.setState({p1081: "El"});
          } else {
                  this.setState({p1081: "el"});
          }
  }
  p1082() {
          if (this.state.p1082 === " ") {this.setState({p1082: ", "});}
          if (this.state.p1082 === ", ") {this.setState({p1082: "; "});}
          if (this.state.p1082 === "; ") {this.setState({p1082: ": "});}
          if (this.state.p1082 === ": ") {this.setState({p1082: "( "});}
          if (this.state.p1082 === "( ") {this.setState({p1082: ") "});}
          if (this.state.p1082 === ") ") {this.setState({p1082: "¡ "});}
          if (this.state.p1082 === "¡ ") {this.setState({p1082: "! "});}
          if (this.state.p1082 === "! ") {this.setState({p1082: "¿ "});}
          if (this.state.p1082 === "¿ ") {this.setState({p1082: "? "});}
          if (this.state.p1082 === "? ") {this.setState({p1082: " "});}
  }
  p1083() {
          if (this.state.p1083 === "pequeño") {
                  this.setState({p1083: "Pequeño"});
          } else {
                  this.setState({p1083: "pequeño"});
          }
  }
  p1084() {
          if (this.state.p1084 === " ") {this.setState({p1084: ", "});}
          if (this.state.p1084 === ", ") {this.setState({p1084: "; "});}
          if (this.state.p1084 === "; ") {this.setState({p1084: ": "});}
          if (this.state.p1084 === ": ") {this.setState({p1084: "( "});}
          if (this.state.p1084 === "( ") {this.setState({p1084: ") "});}
          if (this.state.p1084 === ") ") {this.setState({p1084: "¡ "});}
          if (this.state.p1084 === "¡ ") {this.setState({p1084: "! "});}
          if (this.state.p1084 === "! ") {this.setState({p1084: "¿ "});}
          if (this.state.p1084 === "¿ ") {this.setState({p1084: "? "});}
          if (this.state.p1084 === "? ") {this.setState({p1084: " "});}
  }
  p1085() {
          if (this.state.p1085 === "monstruo") {
                  this.setState({p1085: "Monstruo"});
          } else {
                  this.setState({p1085: "monstruo"});
          }
  }
  p1086() {
          if (this.state.p1086 === " ") {this.setState({p1086: ", "});}
          if (this.state.p1086 === ", ") {this.setState({p1086: "; "});}
          if (this.state.p1086 === "; ") {this.setState({p1086: ": "});}
          if (this.state.p1086 === ": ") {this.setState({p1086: "( "});}
          if (this.state.p1086 === "( ") {this.setState({p1086: ") "});}
          if (this.state.p1086 === ") ") {this.setState({p1086: "¡ "});}
          if (this.state.p1086 === "¡ ") {this.setState({p1086: "! "});}
          if (this.state.p1086 === "! ") {this.setState({p1086: "¿ "});}
          if (this.state.p1086 === "¿ ") {this.setState({p1086: "? "});}
          if (this.state.p1086 === "? ") {this.setState({p1086: " "});}
  }
  p1087() {
          if (this.state.p1087 === "recuerdo") {
                  this.setState({p1087: "Recuerdo"});
          } else {
                  this.setState({p1087: "recuerdo"});
          }
  }
  p1088() {
          if (this.state.p1088 === " ") {this.setState({p1088: ", "});}
          if (this.state.p1088 === ", ") {this.setState({p1088: "; "});}
          if (this.state.p1088 === "; ") {this.setState({p1088: ": "});}
          if (this.state.p1088 === ": ") {this.setState({p1088: "( "});}
          if (this.state.p1088 === "( ") {this.setState({p1088: ") "});}
          if (this.state.p1088 === ") ") {this.setState({p1088: "¡ "});}
          if (this.state.p1088 === "¡ ") {this.setState({p1088: "! "});}
          if (this.state.p1088 === "! ") {this.setState({p1088: "¿ "});}
          if (this.state.p1088 === "¿ ") {this.setState({p1088: "? "});}
          if (this.state.p1088 === "? ") {this.setState({p1088: " "});}
  }
  p1089() {
          if (this.state.p1089 === "que") {
                  this.setState({p1089: "Que"});
          } else {
                  this.setState({p1089: "que"});
          }
  }
  p1090() {
          if (this.state.p1090 === " ") {this.setState({p1090: ", "});}
          if (this.state.p1090 === ", ") {this.setState({p1090: "; "});}
          if (this.state.p1090 === "; ") {this.setState({p1090: ": "});}
          if (this.state.p1090 === ": ") {this.setState({p1090: "( "});}
          if (this.state.p1090 === "( ") {this.setState({p1090: ") "});}
          if (this.state.p1090 === ") ") {this.setState({p1090: "¡ "});}
          if (this.state.p1090 === "¡ ") {this.setState({p1090: "! "});}
          if (this.state.p1090 === "! ") {this.setState({p1090: "¿ "});}
          if (this.state.p1090 === "¿ ") {this.setState({p1090: "? "});}
          if (this.state.p1090 === "? ") {this.setState({p1090: " "});}
  }
  p1091() {
          if (this.state.p1091 === "en") {
                  this.setState({p1091: "En"});
          } else {
                  this.setState({p1091: "en"});
          }
  }
  p1092() {
          if (this.state.p1092 === " ") {this.setState({p1092: ", "});}
          if (this.state.p1092 === ", ") {this.setState({p1092: "; "});}
          if (this.state.p1092 === "; ") {this.setState({p1092: ": "});}
          if (this.state.p1092 === ": ") {this.setState({p1092: "( "});}
          if (this.state.p1092 === "( ") {this.setState({p1092: ") "});}
          if (this.state.p1092 === ") ") {this.setState({p1092: "¡ "});}
          if (this.state.p1092 === "¡ ") {this.setState({p1092: "! "});}
          if (this.state.p1092 === "! ") {this.setState({p1092: "¿ "});}
          if (this.state.p1092 === "¿ ") {this.setState({p1092: "? "});}
          if (this.state.p1092 === "? ") {this.setState({p1092: " "});}
  }
  p1093() {
          if (this.state.p1093 === "otro") {
                  this.setState({p1093: "Otro"});
          } else {
                  this.setState({p1093: "otro"});
          }
  }
  p1094() {
          if (this.state.p1094 === " ") {this.setState({p1094: ", "});}
          if (this.state.p1094 === ", ") {this.setState({p1094: "; "});}
          if (this.state.p1094 === "; ") {this.setState({p1094: ": "});}
          if (this.state.p1094 === ": ") {this.setState({p1094: "( "});}
          if (this.state.p1094 === "( ") {this.setState({p1094: ") "});}
          if (this.state.p1094 === ") ") {this.setState({p1094: "¡ "});}
          if (this.state.p1094 === "¡ ") {this.setState({p1094: "! "});}
          if (this.state.p1094 === "! ") {this.setState({p1094: "¿ "});}
          if (this.state.p1094 === "¿ ") {this.setState({p1094: "? "});}
          if (this.state.p1094 === "? ") {this.setState({p1094: " "});}
  }
  p1095() {
          if (this.state.p1095 === "tiempo") {
                  this.setState({p1095: "Tiempo"});
          } else {
                  this.setState({p1095: "tiempo"});
          }
  }
  p1096() {
          if (this.state.p1096 === " ") {this.setState({p1096: ", "});}
          if (this.state.p1096 === ", ") {this.setState({p1096: "; "});}
          if (this.state.p1096 === "; ") {this.setState({p1096: ": "});}
          if (this.state.p1096 === ": ") {this.setState({p1096: "( "});}
          if (this.state.p1096 === "( ") {this.setState({p1096: ") "});}
          if (this.state.p1096 === ") ") {this.setState({p1096: "¡ "});}
          if (this.state.p1096 === "¡ ") {this.setState({p1096: "! "});}
          if (this.state.p1096 === "! ") {this.setState({p1096: "¿ "});}
          if (this.state.p1096 === "¿ ") {this.setState({p1096: "? "});}
          if (this.state.p1096 === "? ") {this.setState({p1096: " "});}
  }
  p1097() {
          if (this.state.p1097 === "yo") {
                  this.setState({p1097: "Yo"});
          } else {
                  this.setState({p1097: "yo"});
          }
  }
  p1098() {
          if (this.state.p1098 === " ") {this.setState({p1098: ", "});}
          if (this.state.p1098 === ", ") {this.setState({p1098: "; "});}
          if (this.state.p1098 === "; ") {this.setState({p1098: ": "});}
          if (this.state.p1098 === ": ") {this.setState({p1098: "( "});}
          if (this.state.p1098 === "( ") {this.setState({p1098: ") "});}
          if (this.state.p1098 === ") ") {this.setState({p1098: "¡ "});}
          if (this.state.p1098 === "¡ ") {this.setState({p1098: "! "});}
          if (this.state.p1098 === "! ") {this.setState({p1098: "¿ "});}
          if (this.state.p1098 === "¿ ") {this.setState({p1098: "? "});}
          if (this.state.p1098 === "? ") {this.setState({p1098: " "});}
  }
  p1099() {
          if (this.state.p1099 === "soñaba") {
                  this.setState({p1099: "Soñaba"});
          } else {
                  this.setState({p1099: "soñaba"});
          }
  }
  p1100() {
          if (this.state.p1100 === " ") {this.setState({p1100: ", "});}
          if (this.state.p1100 === ", ") {this.setState({p1100: "; "});}
          if (this.state.p1100 === "; ") {this.setState({p1100: ": "});}
          if (this.state.p1100 === ": ") {this.setState({p1100: "( "});}
          if (this.state.p1100 === "( ") {this.setState({p1100: ") "});}
          if (this.state.p1100 === ") ") {this.setState({p1100: "¡ "});}
          if (this.state.p1100 === "¡ ") {this.setState({p1100: "! "});}
          if (this.state.p1100 === "! ") {this.setState({p1100: "¿ "});}
          if (this.state.p1100 === "¿ ") {this.setState({p1100: "? "});}
          if (this.state.p1100 === "? ") {this.setState({p1100: " "});}
  }
  p1101() {
          if (this.state.p1101 === "en") {
                  this.setState({p1101: "En"});
          } else {
                  this.setState({p1101: "en"});
          }
  }
  p1102() {
          if (this.state.p1102 === " ") {this.setState({p1102: ", "});}
          if (this.state.p1102 === ", ") {this.setState({p1102: "; "});}
          if (this.state.p1102 === "; ") {this.setState({p1102: ": "});}
          if (this.state.p1102 === ": ") {this.setState({p1102: "( "});}
          if (this.state.p1102 === "( ") {this.setState({p1102: ") "});}
          if (this.state.p1102 === ") ") {this.setState({p1102: "¡ "});}
          if (this.state.p1102 === "¡ ") {this.setState({p1102: "! "});}
          if (this.state.p1102 === "! ") {this.setState({p1102: "¿ "});}
          if (this.state.p1102 === "¿ ") {this.setState({p1102: "? "});}
          if (this.state.p1102 === "? ") {this.setState({p1102: " "});}
  }
  p1103() {
          if (this.state.p1103 === "beatriz") {
                  this.setState({p1103: "Beatriz"});
          } else {
                  this.setState({p1103: "beatriz"});
          }
  }
  p1104() {
          if (this.state.p1104 === " ") {this.setState({p1104: ", "});}
          if (this.state.p1104 === ", ") {this.setState({p1104: "; "});}
          if (this.state.p1104 === "; ") {this.setState({p1104: ": "});}
          if (this.state.p1104 === ": ") {this.setState({p1104: "( "});}
          if (this.state.p1104 === "( ") {this.setState({p1104: ") "});}
          if (this.state.p1104 === ") ") {this.setState({p1104: "¡ "});}
          if (this.state.p1104 === "¡ ") {this.setState({p1104: "! "});}
          if (this.state.p1104 === "! ") {this.setState({p1104: "¿ "});}
          if (this.state.p1104 === "¿ ") {this.setState({p1104: "? "});}
          if (this.state.p1104 === "? ") {this.setState({p1104: " "});}
  }
  p1105() {
          if (this.state.p1105 === "y") {
                  this.setState({p1105: "Y"});
          } else {
                  this.setState({p1105: "y"});
          }
  }
  p1106() {
          if (this.state.p1106 === " ") {this.setState({p1106: ", "});}
          if (this.state.p1106 === ", ") {this.setState({p1106: "; "});}
          if (this.state.p1106 === "; ") {this.setState({p1106: ": "});}
          if (this.state.p1106 === ": ") {this.setState({p1106: "( "});}
          if (this.state.p1106 === "( ") {this.setState({p1106: ") "});}
          if (this.state.p1106 === ") ") {this.setState({p1106: "¡ "});}
          if (this.state.p1106 === "¡ ") {this.setState({p1106: "! "});}
          if (this.state.p1106 === "! ") {this.setState({p1106: "¿ "});}
          if (this.state.p1106 === "¿ ") {this.setState({p1106: "? "});}
          if (this.state.p1106 === "? ") {this.setState({p1106: " "});}
  }
  p1107() {
          if (this.state.p1107 === "en") {
                  this.setState({p1107: "En"});
          } else {
                  this.setState({p1107: "en"});
          }
  }
  p1108() {
          if (this.state.p1108 === " ") {this.setState({p1108: ", "});}
          if (this.state.p1108 === ", ") {this.setState({p1108: "; "});}
          if (this.state.p1108 === "; ") {this.setState({p1108: ": "});}
          if (this.state.p1108 === ": ") {this.setState({p1108: "( "});}
          if (this.state.p1108 === "( ") {this.setState({p1108: ") "});}
          if (this.state.p1108 === ") ") {this.setState({p1108: "¡ "});}
          if (this.state.p1108 === "¡ ") {this.setState({p1108: "! "});}
          if (this.state.p1108 === "! ") {this.setState({p1108: "¿ "});}
          if (this.state.p1108 === "¿ ") {this.setState({p1108: "? "});}
          if (this.state.p1108 === "? ") {this.setState({p1108: " "});}
  }
  p1109() {
          if (this.state.p1109 === "su") {
                  this.setState({p1109: "Su"});
          } else {
                  this.setState({p1109: "su"});
          }
  }
  p1110() {
          if (this.state.p1110 === " ") {this.setState({p1110: ", "});}
          if (this.state.p1110 === ", ") {this.setState({p1110: "; "});}
          if (this.state.p1110 === "; ") {this.setState({p1110: ": "});}
          if (this.state.p1110 === ": ") {this.setState({p1110: "( "});}
          if (this.state.p1110 === "( ") {this.setState({p1110: ") "});}
          if (this.state.p1110 === ") ") {this.setState({p1110: "¡ "});}
          if (this.state.p1110 === "¡ ") {this.setState({p1110: "! "});}
          if (this.state.p1110 === "! ") {this.setState({p1110: "¿ "});}
          if (this.state.p1110 === "¿ ") {this.setState({p1110: "? "});}
          if (this.state.p1110 === "? ") {this.setState({p1110: " "});}
  }
  p1111() {
          if (this.state.p1111 === "compañí­a") {
                  this.setState({p1111: "Compañí­a"});
          } else {
                  this.setState({p1111: "compañí­a"});
          }
  }
  p1112() {
          if (this.state.p1112 === " ") {this.setState({p1112: ", "});}
          if (this.state.p1112 === ", ") {this.setState({p1112: "; "});}
          if (this.state.p1112 === "; ") {this.setState({p1112: ": "});}
          if (this.state.p1112 === ": ") {this.setState({p1112: "( "});}
          if (this.state.p1112 === "( ") {this.setState({p1112: ") "});}
          if (this.state.p1112 === ") ") {this.setState({p1112: "¡ "});}
          if (this.state.p1112 === "¡ ") {this.setState({p1112: "! "});}
          if (this.state.p1112 === "! ") {this.setState({p1112: "¿ "});}
          if (this.state.p1112 === "¿ ") {this.setState({p1112: "? "});}
          if (this.state.p1112 === "? ") {this.setState({p1112: " "});}
  }
  p1113() {
          if (this.state.p1113 === "imposible") {
                  this.setState({p1113: "Imposible"});
          } else {
                  this.setState({p1113: "imposible"});
          }
  }
  p1114() {
          if (this.state.p1114 === " ") {this.setState({p1114: ", "});}
          if (this.state.p1114 === ", ") {this.setState({p1114: "; "});}
          if (this.state.p1114 === "; ") {this.setState({p1114: ". "});}
          if (this.state.p1114 === ". ") {this.setState({p1114: "( "});}
          if (this.state.p1114 === "( ") {this.setState({p1114: ") "});}
          if (this.state.p1114 === ") ") {this.setState({p1114: "¡ "});}
          if (this.state.p1114 === "¡ ") {this.setState({p1114: "! "});}
          if (this.state.p1114 === "! ") {this.setState({p1114: "¿ "});}
          if (this.state.p1114 === "¿ ") {this.setState({p1114: "? "});}
          if (this.state.p1114 === "? ") {this.setState({p1114: " "});}
  }

  render() {
    return(
      <div id="crucigramaWrap">
        <p>Escribe en el siguiente texto los signos de puntuación y las mayúsculas correspondientes.</p>
        <h1 align="center">LA MIGALA</h1>
        <h2 align="center">Juan José Arreola</h2>

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
