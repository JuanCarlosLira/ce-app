import React from "react";
import Header from './Header'
//import Scores from './Scores'
import "../css/ViciosLen.css";

class ViciosLen2 extends React.Component {
  state = {
    compare: false,
    b000: false,
    b001: false,
    b002: false,
    b003: false,
    b004: false,
    b005: false,
    b006: false,
    b007: false,
    b008: false,
    b009: false,
    b010: false,
    b011: false,
    b012: false,
    b013: false,
    b014: false,
    b015: false,
    b016: false,
    b017: false,
    b018: false,
    b019: false,
    b020: false,
    b021: false,
    b022: false,
    b023: false,
    b024: false,
    b025: false,
    b026: false,
    b027: false,
    b028: false,
    b029: false,
    b030: false,
    b031: false,
    b032: false,
    b033: false,
    b034: false,
    b035: false,
    b036: false,
    b037: false,
    b038: false,
    b039: false,
    b040: false,
    b041: false,
    b042: false,
    b043: false,
    b044: false,
    b045: false,
    b046: false,
    b047: false,
    b048: false,
    b049: false,
    b050: false,
    b051: false,
    b052: false,
    b053: false,
    b054: false,
    b055: false,
    b056: false,
    b057: false,
    b058: false,
    b059: false,
    b060: false,
    b061: false,
    b062: false,
    b063: false,
    b064: false,
    b065: false,
    b066: false,
    b067: false,
    b068: false,
    b069: false,
    b070: false,
    b071: false,
    b072: false,
    b073: false,
    b074: false,
    b075: false,
    b076: false,
    b077: false,
    b078: false,
    b079: false,
    b080: false,
    b081: false,
    b082: false,
    b083: false,
    b084: false,
    b085: false,
    b086: false,
    b087: false,
    b088: false,
    b089: false,
    b090: false,
    b091: false,
    b092: false,
    b093: false,
    b094: false,
    b095: false,
    b096: false,
    b097: false,
    b098: false,
    b099: false,
    b100: false,
    b101: false,
    b102: false,
    b103: false,
    b104: false,
    b105: false,
    b106: false,
    b107: false,
    b108: false,
    b109: false,
    b110: false,
    b111: false,
    b112: false,
    b113: false,
    b114: false,
    b115: false,
    b116: false,
    b117: false,
    b118: false,
    b119: false,
    b120: false,
    b121: false,
    b122: false,
    b123: false,
    b124: false,
    b125: false,
    b126: false,
    b127: false,
    b128: false,
    b129: false,
    b130: false,
    b131: false,
    b132: false,
    b133: false,
    b134: false,
    b135: false,
    b136: false,
    b137: false,
    b138: false,
    b139: false,
    b140: false,
    b141: false,
    b142: false,
    b143: false,
    b144: false,
    b145: false,
    b146: false,
    b147: false,
    b148: false,
    b149: false,
    b150: false,
    b151: false,
    b152: false,
    b153: false,
    b154: false,
    b155: false,
    b156: false,
    b157: false,
    b158: false,
    b159: false,
    b160: false,
    b161: false,
    b162: false,
    b163: false,
    b164: false,
    b165: false,
    b166: false,
    b167: false,
    b168: false,
    b169: false,
    b170: false,
    b171: false,
    b172: false,
    b173: false,
    b174: false,
    b175: false,
    b176: false,
    b177: false,
    b178: false,
    b179: false,
    b180: false,
    b181: false,
    b182: false,
    b183: false,
    b184: false,
    b185: false,
    b186: false,
    b187: false,
    b188: false,
    b189: false,
    b190: false,
    b191: false,
    b192: false,
    b193: false,
    b194: false,
    b195: false,
    b196: false,
    b197: false,
    b198: false,
    b199: false,
    b200: false,
    b201: false,
    b202: false,
    b203: false,
    b204: false,
    b205: false,
    b206: false,
    b207: false,
    b208: false,
    b209: false,
    b210: false,
    b211: false,
    b212: false,
    b213: false,
    b214: false,
    b215: false,
    b216: false,
    b217: false,
    b218: false,
    b219: false,
    b220: false,
    b221: false,
    b222: false,
    b223: false,
    b224: false,
    b225: false,
    b226: false,
    b227: false,
    b228: false,
    b229: false,
    b230: false,
    b231: false,
    b232: false,
    b233: false,
    b234: false,
    b235: false,
    b236: false,
    b237: false,
    b238: false,
    b239: false,
    b240: false,
    b241: false,
    b242: false,
    b243: false,
    b244: false,
    b245: false,
    b246: false,
    b247: false,
    b248: false,
    b249: false,
    b250: false,
    b251: false,
    b252: false,
    b253: false,
    b254: false,
    b255: false,
    b256: false,
    b257: false,
    b258: false,
    b259: false,
    b260: false,
    b261: false,
    b262: false,
    b263: false,
    b264: false,
    b265: false,
    b266: false,
    b267: false,
    b268: false,
    b269: false,
    b270: false,
    b271: false,
    b272: false,
    b273: false,
    b274: false,
    b275: false,
    b276: false,
    b277: false,
    b278: false,
    b279: false,
    b280: false,
    b281: false,
    b282: false,
    b283: false,
    b284: false,
    b285: false,
    b286: false,
    b287: false,
    b288: false,
    b289: false,
    b290: false,
    b291: false,
    b292: false,
    b293: false,
    b294: false,
    b295: false,
    b296: false,
    b297: false,
    b298: false,
    b299: false,
    b300: false,
    b301: false,
    b302: false,
    b303: false,
    b304: false,
    b305: false,
    b306: false,
    b307: false,
    b308: false,
    b309: false,
    b310: false,
    b311: false,
    b312: false,
    b313: false,
    b314: false,
    b315: false,
    b316: false,
    b317: false,
    b318: false,
    b319: false,
    b320: false,
    b321: false,
    b322: false,
    b323: false,
    b324: false,
    b325: false,
    b326: false,
    b327: false,
    b328: false,
    b329: false,
    b330: false,
    b331: false,
    b332: false,
    b333: false,
    b334: false,
    b335: false,
    b336: false,
    b337: false,
    b338: false,
    b339: false,
    b340: false,
    b341: false,
    b342: false,
    b343: false,
    b344: false,
    b345: false,
    b346: false,
    b347: false,
    b348: false,
    b349: false,
    b350: false,
    b351: false,
    b352: false,
    b353: false,
    b354: false,
    b355: false,
    b356: false,
    b357: false,
    b358: false,
    b359: false,
    b360: false,
    b361: false,
    b362: false,
    b363: false,
    b364: false,
    b365: false,
    b366: false,
    b367: false,
    b368: false,
    b369: false,
    b370: false,
    b371: false,
    b372: false,
    b373: false,
    b374: false,
    b375: false,
    b376: false,
    b377: false,
    b378: false,
    b379: false,
    b380: false,
    b381: false,
    b382: false,
    b383: false,
    b384: false,
    b385: false,
    b386: false,
    b387: false,
    b388: false,
    b389: false,
    b390: false,
    b391: false,
    b392: false,
    b393: false,
    b394: false,
    b395: false,
    b396: false,
    b397: false,
    b398: false,
    b399: false
  }

  updateComparar() {
    this.setState({compare: !this.state.compare});
  }

  he000 = (event) => {this.setState({ b000: !this.state.b000})}
  he001 = (event) => {this.setState({ b001: !this.state.b001})}
  he002 = (event) => {this.setState({ b002: !this.state.b002})}
  he003 = (event) => {this.setState({ b003: !this.state.b003})}
  he004 = (event) => {this.setState({ b004: !this.state.b004})}
  he005 = (event) => {this.setState({ b005: !this.state.b005})}
  he006 = (event) => {this.setState({ b006: !this.state.b006})}
  he007 = (event) => {this.setState({ b007: !this.state.b007})}
  he008 = (event) => {this.setState({ b008: !this.state.b008})}
  he009 = (event) => {this.setState({ b009: !this.state.b009})}
  he010 = (event) => {this.setState({ b010: !this.state.b010})}
  he011 = (event) => {this.setState({ b011: !this.state.b011})}
  he012 = (event) => {this.setState({ b012: !this.state.b012})}
  he013 = (event) => {this.setState({ b013: !this.state.b013})}
  he014 = (event) => {this.setState({ b014: !this.state.b014})}
  he015 = (event) => {this.setState({ b015: !this.state.b015})}
  he016 = (event) => {this.setState({ b016: !this.state.b016})}
  he017 = (event) => {this.setState({ b017: !this.state.b017})}
  he018 = (event) => {this.setState({ b018: !this.state.b018})}
  he019 = (event) => {this.setState({ b019: !this.state.b019})}
  he020 = (event) => {this.setState({ b020: !this.state.b020})}
  he021 = (event) => {this.setState({ b021: !this.state.b021})}
  he022 = (event) => {this.setState({ b022: !this.state.b022})}
  he023 = (event) => {this.setState({ b023: !this.state.b023})}
  he024 = (event) => {this.setState({ b024: !this.state.b024})}
  he025 = (event) => {this.setState({ b025: !this.state.b025})}
  he026 = (event) => {this.setState({ b026: !this.state.b026})}
  he027 = (event) => {this.setState({ b027: !this.state.b027})}
  he028 = (event) => {this.setState({ b028: !this.state.b028})}
  he029 = (event) => {this.setState({ b029: !this.state.b029})}
  he030 = (event) => {this.setState({ b030: !this.state.b030})}
  he031 = (event) => {this.setState({ b031: !this.state.b031})}
  he032 = (event) => {this.setState({ b032: !this.state.b032})}
  he033 = (event) => {this.setState({ b033: !this.state.b033})}
  he034 = (event) => {this.setState({ b034: !this.state.b034})}
  he035 = (event) => {this.setState({ b035: !this.state.b035})}
  he036 = (event) => {this.setState({ b036: !this.state.b036})}
  he037 = (event) => {this.setState({ b037: !this.state.b037})}
  he038 = (event) => {this.setState({ b038: !this.state.b038})}
  he039 = (event) => {this.setState({ b039: !this.state.b039})}
  he040 = (event) => {this.setState({ b040: !this.state.b040})}
  he041 = (event) => {this.setState({ b041: !this.state.b041})}
  he042 = (event) => {this.setState({ b042: !this.state.b042})}
  he043 = (event) => {this.setState({ b043: !this.state.b043})}
  he044 = (event) => {this.setState({ b044: !this.state.b044})}
  he045 = (event) => {this.setState({ b045: !this.state.b045})}
  he046 = (event) => {this.setState({ b046: !this.state.b046})}
  he047 = (event) => {this.setState({ b047: !this.state.b047})}
  he048 = (event) => {this.setState({ b048: !this.state.b048})}
  he049 = (event) => {this.setState({ b049: !this.state.b049})}
  he050 = (event) => {this.setState({ b050: !this.state.b050})}
  he051 = (event) => {this.setState({ b051: !this.state.b051})}
  he052 = (event) => {this.setState({ b052: !this.state.b052})}
  he053 = (event) => {this.setState({ b053: !this.state.b053})}
  he054 = (event) => {this.setState({ b054: !this.state.b054})}
  he055 = (event) => {this.setState({ b055: !this.state.b055})}
  he056 = (event) => {this.setState({ b056: !this.state.b056})}
  he057 = (event) => {this.setState({ b057: !this.state.b057})}
  he058 = (event) => {this.setState({ b058: !this.state.b058})}
  he059 = (event) => {this.setState({ b059: !this.state.b059})}
  he060 = (event) => {this.setState({ b060: !this.state.b060})}
  he061 = (event) => {this.setState({ b061: !this.state.b061})}
  he062 = (event) => {this.setState({ b062: !this.state.b062})}
  he063 = (event) => {this.setState({ b063: !this.state.b063})}
  he064 = (event) => {this.setState({ b064: !this.state.b064})}
  he065 = (event) => {this.setState({ b065: !this.state.b065})}
  he066 = (event) => {this.setState({ b066: !this.state.b066})}
  he067 = (event) => {this.setState({ b067: !this.state.b067})}
  he068 = (event) => {this.setState({ b068: !this.state.b068})}
  he069 = (event) => {this.setState({ b069: !this.state.b069})}
  he070 = (event) => {this.setState({ b070: !this.state.b070})}
  he071 = (event) => {this.setState({ b071: !this.state.b071})}
  he072 = (event) => {this.setState({ b072: !this.state.b072})}
  he073 = (event) => {this.setState({ b073: !this.state.b073})}
  he074 = (event) => {this.setState({ b074: !this.state.b074})}
  he075 = (event) => {this.setState({ b075: !this.state.b075})}
  he076 = (event) => {this.setState({ b076: !this.state.b076})}
  he077 = (event) => {this.setState({ b077: !this.state.b077})}
  he078 = (event) => {this.setState({ b078: !this.state.b078})}
  he079 = (event) => {this.setState({ b079: !this.state.b079})}
  he080 = (event) => {this.setState({ b080: !this.state.b080})}
  he081 = (event) => {this.setState({ b081: !this.state.b081})}
  he082 = (event) => {this.setState({ b082: !this.state.b082})}
  he083 = (event) => {this.setState({ b083: !this.state.b083})}
  he084 = (event) => {this.setState({ b084: !this.state.b084})}
  he085 = (event) => {this.setState({ b085: !this.state.b085})}
  he086 = (event) => {this.setState({ b086: !this.state.b086})}
  he087 = (event) => {this.setState({ b087: !this.state.b087})}
  he088 = (event) => {this.setState({ b088: !this.state.b088})}
  he089 = (event) => {this.setState({ b089: !this.state.b089})}
  he090 = (event) => {this.setState({ b090: !this.state.b090})}
  he091 = (event) => {this.setState({ b091: !this.state.b091})}
  he092 = (event) => {this.setState({ b092: !this.state.b092})}
  he093 = (event) => {this.setState({ b093: !this.state.b093})}
  he094 = (event) => {this.setState({ b094: !this.state.b094})}
  he095 = (event) => {this.setState({ b095: !this.state.b095})}
  he096 = (event) => {this.setState({ b096: !this.state.b096})}
  he097 = (event) => {this.setState({ b097: !this.state.b097})}
  he098 = (event) => {this.setState({ b098: !this.state.b098})}
  he099 = (event) => {this.setState({ b099: !this.state.b099})}
  he100 = (event) => {this.setState({ b100: !this.state.b100})}
  he101 = (event) => {this.setState({ b101: !this.state.b101})}
  he102 = (event) => {this.setState({ b102: !this.state.b102})}
  he103 = (event) => {this.setState({ b103: !this.state.b103})}
  he104 = (event) => {this.setState({ b104: !this.state.b104})}
  he105 = (event) => {this.setState({ b105: !this.state.b105})}
  he106 = (event) => {this.setState({ b106: !this.state.b106})}
  he107 = (event) => {this.setState({ b107: !this.state.b107})}
  he108 = (event) => {this.setState({ b108: !this.state.b108})}
  he109 = (event) => {this.setState({ b109: !this.state.b109})}
  he110 = (event) => {this.setState({ b110: !this.state.b110})}
  he111 = (event) => {this.setState({ b111: !this.state.b111})}
  he112 = (event) => {this.setState({ b112: !this.state.b112})}
  he113 = (event) => {this.setState({ b113: !this.state.b113})}
  he114 = (event) => {this.setState({ b114: !this.state.b114})}
  he115 = (event) => {this.setState({ b115: !this.state.b115})}
  he116 = (event) => {this.setState({ b116: !this.state.b116})}
  he117 = (event) => {this.setState({ b117: !this.state.b117})}
  he118 = (event) => {this.setState({ b118: !this.state.b118})}
  he119 = (event) => {this.setState({ b119: !this.state.b119})}
  he120 = (event) => {this.setState({ b120: !this.state.b120})}
  he121 = (event) => {this.setState({ b121: !this.state.b121})}
  he122 = (event) => {this.setState({ b122: !this.state.b122})}
  he123 = (event) => {this.setState({ b123: !this.state.b123})}
  he124 = (event) => {this.setState({ b124: !this.state.b124})}
  he125 = (event) => {this.setState({ b125: !this.state.b125})}
  he126 = (event) => {this.setState({ b126: !this.state.b126})}
  he127 = (event) => {this.setState({ b127: !this.state.b127})}
  he128 = (event) => {this.setState({ b128: !this.state.b128})}
  he129 = (event) => {this.setState({ b129: !this.state.b129})}
  he130 = (event) => {this.setState({ b130: !this.state.b130})}
  he131 = (event) => {this.setState({ b131: !this.state.b131})}
  he132 = (event) => {this.setState({ b132: !this.state.b132})}
  he133 = (event) => {this.setState({ b133: !this.state.b133})}
  he134 = (event) => {this.setState({ b134: !this.state.b134})}
  he135 = (event) => {this.setState({ b135: !this.state.b135})}
  he136 = (event) => {this.setState({ b136: !this.state.b136})}
  he137 = (event) => {this.setState({ b137: !this.state.b137})}
  he138 = (event) => {this.setState({ b138: !this.state.b138})}
  he139 = (event) => {this.setState({ b139: !this.state.b139})}
  he140 = (event) => {this.setState({ b140: !this.state.b140})}
  he141 = (event) => {this.setState({ b141: !this.state.b141})}
  he142 = (event) => {this.setState({ b142: !this.state.b142})}
  he143 = (event) => {this.setState({ b143: !this.state.b143})}
  he144 = (event) => {this.setState({ b144: !this.state.b144})}
  he145 = (event) => {this.setState({ b145: !this.state.b145})}
  he146 = (event) => {this.setState({ b146: !this.state.b146})}
  he147 = (event) => {this.setState({ b147: !this.state.b147})}
  he148 = (event) => {this.setState({ b148: !this.state.b148})}
  he149 = (event) => {this.setState({ b149: !this.state.b149})}
  he150 = (event) => {this.setState({ b150: !this.state.b150})}
  he151 = (event) => {this.setState({ b151: !this.state.b151})}
  he152 = (event) => {this.setState({ b152: !this.state.b152})}
  he153 = (event) => {this.setState({ b153: !this.state.b153})}
  he154 = (event) => {this.setState({ b154: !this.state.b154})}
  he155 = (event) => {this.setState({ b155: !this.state.b155})}
  he156 = (event) => {this.setState({ b156: !this.state.b156})}
  he157 = (event) => {this.setState({ b157: !this.state.b157})}
  he158 = (event) => {this.setState({ b158: !this.state.b158})}
  he159 = (event) => {this.setState({ b159: !this.state.b159})}
  he160 = (event) => {this.setState({ b160: !this.state.b160})}
  he161 = (event) => {this.setState({ b161: !this.state.b161})}
  he162 = (event) => {this.setState({ b162: !this.state.b162})}
  he163 = (event) => {this.setState({ b163: !this.state.b163})}
  he164 = (event) => {this.setState({ b164: !this.state.b164})}
  he165 = (event) => {this.setState({ b165: !this.state.b165})}
  he166 = (event) => {this.setState({ b166: !this.state.b166})}
  he167 = (event) => {this.setState({ b167: !this.state.b167})}
  he168 = (event) => {this.setState({ b168: !this.state.b168})}
  he169 = (event) => {this.setState({ b169: !this.state.b169})}
  he170 = (event) => {this.setState({ b170: !this.state.b170})}
  he171 = (event) => {this.setState({ b171: !this.state.b171})}
  he172 = (event) => {this.setState({ b172: !this.state.b172})}
  he173 = (event) => {this.setState({ b173: !this.state.b173})}
  he174 = (event) => {this.setState({ b174: !this.state.b174})}
  he175 = (event) => {this.setState({ b175: !this.state.b175})}
  he176 = (event) => {this.setState({ b176: !this.state.b176})}
  he177 = (event) => {this.setState({ b177: !this.state.b177})}
  he178 = (event) => {this.setState({ b178: !this.state.b178})}
  he179 = (event) => {this.setState({ b179: !this.state.b179})}
  he180 = (event) => {this.setState({ b180: !this.state.b180})}
  he181 = (event) => {this.setState({ b181: !this.state.b181})}
  he182 = (event) => {this.setState({ b182: !this.state.b182})}
  he183 = (event) => {this.setState({ b183: !this.state.b183})}
  he184 = (event) => {this.setState({ b184: !this.state.b184})}
  he185 = (event) => {this.setState({ b185: !this.state.b185})}
  he186 = (event) => {this.setState({ b186: !this.state.b186})}
  he187 = (event) => {this.setState({ b187: !this.state.b187})}
  he188 = (event) => {this.setState({ b188: !this.state.b188})}
  he189 = (event) => {this.setState({ b189: !this.state.b189})}
  he190 = (event) => {this.setState({ b190: !this.state.b190})}
  he191 = (event) => {this.setState({ b191: !this.state.b191})}
  he192 = (event) => {this.setState({ b192: !this.state.b192})}
  he193 = (event) => {this.setState({ b193: !this.state.b193})}
  he194 = (event) => {this.setState({ b194: !this.state.b194})}
  he195 = (event) => {this.setState({ b195: !this.state.b195})}
  he196 = (event) => {this.setState({ b196: !this.state.b196})}
  he197 = (event) => {this.setState({ b197: !this.state.b197})}
  he198 = (event) => {this.setState({ b198: !this.state.b198})}
  he199 = (event) => {this.setState({ b199: !this.state.b199})}
  he200 = (event) => {this.setState({ b200: !this.state.b200})}
  he201 = (event) => {this.setState({ b201: !this.state.b201})}
  he202 = (event) => {this.setState({ b202: !this.state.b202})}
  he203 = (event) => {this.setState({ b203: !this.state.b203})}
  he204 = (event) => {this.setState({ b204: !this.state.b204})}
  he205 = (event) => {this.setState({ b205: !this.state.b205})}
  he206 = (event) => {this.setState({ b206: !this.state.b206})}
  he207 = (event) => {this.setState({ b207: !this.state.b207})}
  he208 = (event) => {this.setState({ b208: !this.state.b208})}
  he209 = (event) => {this.setState({ b209: !this.state.b209})}
  he210 = (event) => {this.setState({ b210: !this.state.b210})}
  he211 = (event) => {this.setState({ b211: !this.state.b211})}
  he212 = (event) => {this.setState({ b212: !this.state.b212})}
  he213 = (event) => {this.setState({ b213: !this.state.b213})}
  he214 = (event) => {this.setState({ b214: !this.state.b214})}
  he215 = (event) => {this.setState({ b215: !this.state.b215})}
  he216 = (event) => {this.setState({ b216: !this.state.b216})}
  he217 = (event) => {this.setState({ b217: !this.state.b217})}
  he218 = (event) => {this.setState({ b218: !this.state.b218})}
  he219 = (event) => {this.setState({ b219: !this.state.b219})}
  he220 = (event) => {this.setState({ b220: !this.state.b220})}
  he221 = (event) => {this.setState({ b221: !this.state.b221})}
  he222 = (event) => {this.setState({ b222: !this.state.b222})}
  he223 = (event) => {this.setState({ b223: !this.state.b223})}
  he224 = (event) => {this.setState({ b224: !this.state.b224})}
  he225 = (event) => {this.setState({ b225: !this.state.b225})}
  he226 = (event) => {this.setState({ b226: !this.state.b226})}
  he227 = (event) => {this.setState({ b227: !this.state.b227})}
  he228 = (event) => {this.setState({ b228: !this.state.b228})}
  he229 = (event) => {this.setState({ b229: !this.state.b229})}
  he230 = (event) => {this.setState({ b230: !this.state.b230})}
  he231 = (event) => {this.setState({ b231: !this.state.b231})}
  he232 = (event) => {this.setState({ b232: !this.state.b232})}
  he233 = (event) => {this.setState({ b233: !this.state.b233})}
  he234 = (event) => {this.setState({ b234: !this.state.b234})}
  he235 = (event) => {this.setState({ b235: !this.state.b235})}
  he236 = (event) => {this.setState({ b236: !this.state.b236})}
  he237 = (event) => {this.setState({ b237: !this.state.b237})}
  he238 = (event) => {this.setState({ b238: !this.state.b238})}
  he239 = (event) => {this.setState({ b239: !this.state.b239})}
  he240 = (event) => {this.setState({ b240: !this.state.b240})}
  he241 = (event) => {this.setState({ b241: !this.state.b241})}
  he242 = (event) => {this.setState({ b242: !this.state.b242})}
  he243 = (event) => {this.setState({ b243: !this.state.b243})}
  he244 = (event) => {this.setState({ b244: !this.state.b244})}
  he245 = (event) => {this.setState({ b245: !this.state.b245})}
  he246 = (event) => {this.setState({ b246: !this.state.b246})}
  he247 = (event) => {this.setState({ b247: !this.state.b247})}
  he248 = (event) => {this.setState({ b248: !this.state.b248})}
  he249 = (event) => {this.setState({ b249: !this.state.b249})}
  he250 = (event) => {this.setState({ b250: !this.state.b250})}
  he251 = (event) => {this.setState({ b251: !this.state.b251})}
  he252 = (event) => {this.setState({ b252: !this.state.b252})}
  he253 = (event) => {this.setState({ b253: !this.state.b253})}
  he254 = (event) => {this.setState({ b254: !this.state.b254})}
  he255 = (event) => {this.setState({ b255: !this.state.b255})}
  he256 = (event) => {this.setState({ b256: !this.state.b256})}
  he257 = (event) => {this.setState({ b257: !this.state.b257})}
  he258 = (event) => {this.setState({ b258: !this.state.b258})}
  he259 = (event) => {this.setState({ b259: !this.state.b259})}
  he260 = (event) => {this.setState({ b260: !this.state.b260})}
  he261 = (event) => {this.setState({ b261: !this.state.b261})}
  he262 = (event) => {this.setState({ b262: !this.state.b262})}
  he263 = (event) => {this.setState({ b263: !this.state.b263})}
  he264 = (event) => {this.setState({ b264: !this.state.b264})}
  he265 = (event) => {this.setState({ b265: !this.state.b265})}
  he266 = (event) => {this.setState({ b266: !this.state.b266})}
  he267 = (event) => {this.setState({ b267: !this.state.b267})}
  he268 = (event) => {this.setState({ b268: !this.state.b268})}
  he269 = (event) => {this.setState({ b269: !this.state.b269})}
  he270 = (event) => {this.setState({ b270: !this.state.b270})}
  he271 = (event) => {this.setState({ b271: !this.state.b271})}
  he272 = (event) => {this.setState({ b272: !this.state.b272})}
  he273 = (event) => {this.setState({ b273: !this.state.b273})}
  he274 = (event) => {this.setState({ b274: !this.state.b274})}
  he275 = (event) => {this.setState({ b275: !this.state.b275})}
  he276 = (event) => {this.setState({ b276: !this.state.b276})}
  he277 = (event) => {this.setState({ b277: !this.state.b277})}
  he278 = (event) => {this.setState({ b278: !this.state.b278})}
  he279 = (event) => {this.setState({ b279: !this.state.b279})}
  he280 = (event) => {this.setState({ b280: !this.state.b280})}
  he281 = (event) => {this.setState({ b281: !this.state.b281})}
  he282 = (event) => {this.setState({ b282: !this.state.b282})}
  he283 = (event) => {this.setState({ b283: !this.state.b283})}
  he284 = (event) => {this.setState({ b284: !this.state.b284})}
  he285 = (event) => {this.setState({ b285: !this.state.b285})}
  he286 = (event) => {this.setState({ b286: !this.state.b286})}
  he287 = (event) => {this.setState({ b287: !this.state.b287})}
  he288 = (event) => {this.setState({ b288: !this.state.b288})}
  he289 = (event) => {this.setState({ b289: !this.state.b289})}
  he290 = (event) => {this.setState({ b290: !this.state.b290})}
  he291 = (event) => {this.setState({ b291: !this.state.b291})}
  he292 = (event) => {this.setState({ b292: !this.state.b292})}
  he293 = (event) => {this.setState({ b293: !this.state.b293})}
  he294 = (event) => {this.setState({ b294: !this.state.b294})}
  he295 = (event) => {this.setState({ b295: !this.state.b295})}
  he296 = (event) => {this.setState({ b296: !this.state.b296})}
  he297 = (event) => {this.setState({ b297: !this.state.b297})}
  he298 = (event) => {this.setState({ b298: !this.state.b298})}
  he299 = (event) => {this.setState({ b299: !this.state.b299})}
  he300 = (event) => {this.setState({ b300: !this.state.b300})}
  he301 = (event) => {this.setState({ b301: !this.state.b301})}
  he302 = (event) => {this.setState({ b302: !this.state.b302})}
  he303 = (event) => {this.setState({ b303: !this.state.b303})}
  he304 = (event) => {this.setState({ b304: !this.state.b304})}
  he305 = (event) => {this.setState({ b305: !this.state.b305})}
  he306 = (event) => {this.setState({ b306: !this.state.b306})}
  he307 = (event) => {this.setState({ b307: !this.state.b307})}
  he308 = (event) => {this.setState({ b308: !this.state.b308})}
  he309 = (event) => {this.setState({ b309: !this.state.b309})}
  he310 = (event) => {this.setState({ b310: !this.state.b310})}
  he311 = (event) => {this.setState({ b311: !this.state.b311})}
  he312 = (event) => {this.setState({ b312: !this.state.b312})}
  he313 = (event) => {this.setState({ b313: !this.state.b313})}
  he314 = (event) => {this.setState({ b314: !this.state.b314})}
  he315 = (event) => {this.setState({ b315: !this.state.b315})}
  he316 = (event) => {this.setState({ b316: !this.state.b316})}
  he317 = (event) => {this.setState({ b317: !this.state.b317})}
  he318 = (event) => {this.setState({ b318: !this.state.b318})}
  he319 = (event) => {this.setState({ b319: !this.state.b319})}
  he320 = (event) => {this.setState({ b320: !this.state.b320})}
  he321 = (event) => {this.setState({ b321: !this.state.b321})}
  he322 = (event) => {this.setState({ b322: !this.state.b322})}
  he323 = (event) => {this.setState({ b323: !this.state.b323})}
  he324 = (event) => {this.setState({ b324: !this.state.b324})}
  he325 = (event) => {this.setState({ b325: !this.state.b325})}
  he326 = (event) => {this.setState({ b326: !this.state.b326})}
  he327 = (event) => {this.setState({ b327: !this.state.b327})}
  he328 = (event) => {this.setState({ b328: !this.state.b328})}
  he329 = (event) => {this.setState({ b329: !this.state.b329})}
  he330 = (event) => {this.setState({ b330: !this.state.b330})}
  he331 = (event) => {this.setState({ b331: !this.state.b331})}
  he332 = (event) => {this.setState({ b332: !this.state.b332})}
  he333 = (event) => {this.setState({ b333: !this.state.b333})}
  he334 = (event) => {this.setState({ b334: !this.state.b334})}
  he335 = (event) => {this.setState({ b335: !this.state.b335})}
  he336 = (event) => {this.setState({ b336: !this.state.b336})}
  he337 = (event) => {this.setState({ b337: !this.state.b337})}
  he338 = (event) => {this.setState({ b338: !this.state.b338})}
  he339 = (event) => {this.setState({ b339: !this.state.b339})}
  he340 = (event) => {this.setState({ b340: !this.state.b340})}
  he341 = (event) => {this.setState({ b341: !this.state.b341})}
  he342 = (event) => {this.setState({ b342: !this.state.b342})}
  he343 = (event) => {this.setState({ b343: !this.state.b343})}
  he344 = (event) => {this.setState({ b344: !this.state.b344})}
  he345 = (event) => {this.setState({ b345: !this.state.b345})}
  he346 = (event) => {this.setState({ b346: !this.state.b346})}
  he347 = (event) => {this.setState({ b347: !this.state.b347})}
  he348 = (event) => {this.setState({ b348: !this.state.b348})}
  he349 = (event) => {this.setState({ b349: !this.state.b349})}
  he350 = (event) => {this.setState({ b350: !this.state.b350})}
  he351 = (event) => {this.setState({ b351: !this.state.b351})}
  he352 = (event) => {this.setState({ b352: !this.state.b352})}
  he353 = (event) => {this.setState({ b353: !this.state.b353})}
  he354 = (event) => {this.setState({ b354: !this.state.b354})}
  he355 = (event) => {this.setState({ b355: !this.state.b355})}
  he356 = (event) => {this.setState({ b356: !this.state.b356})}
  he357 = (event) => {this.setState({ b357: !this.state.b357})}
  he358 = (event) => {this.setState({ b358: !this.state.b358})}
  he359 = (event) => {this.setState({ b359: !this.state.b359})}
  he360 = (event) => {this.setState({ b360: !this.state.b360})}
  he361 = (event) => {this.setState({ b361: !this.state.b361})}
  he362 = (event) => {this.setState({ b362: !this.state.b362})}
  he363 = (event) => {this.setState({ b363: !this.state.b363})}
  he364 = (event) => {this.setState({ b364: !this.state.b364})}
  he365 = (event) => {this.setState({ b365: !this.state.b365})}
  he366 = (event) => {this.setState({ b366: !this.state.b366})}
  he367 = (event) => {this.setState({ b367: !this.state.b367})}
  he368 = (event) => {this.setState({ b368: !this.state.b368})}
  he369 = (event) => {this.setState({ b369: !this.state.b369})}
  he370 = (event) => {this.setState({ b370: !this.state.b370})}
  he371 = (event) => {this.setState({ b371: !this.state.b371})}
  he372 = (event) => {this.setState({ b372: !this.state.b372})}
  he373 = (event) => {this.setState({ b373: !this.state.b373})}
  he374 = (event) => {this.setState({ b374: !this.state.b374})}
  he375 = (event) => {this.setState({ b375: !this.state.b375})}
  he376 = (event) => {this.setState({ b376: !this.state.b376})}
  he377 = (event) => {this.setState({ b377: !this.state.b377})}
  he378 = (event) => {this.setState({ b378: !this.state.b378})}
  he379 = (event) => {this.setState({ b379: !this.state.b379})}
  he380 = (event) => {this.setState({ b380: !this.state.b380})}
  he381 = (event) => {this.setState({ b381: !this.state.b381})}
  he382 = (event) => {this.setState({ b382: !this.state.b382})}
  he383 = (event) => {this.setState({ b383: !this.state.b383})}
  he384 = (event) => {this.setState({ b384: !this.state.b384})}
  he385 = (event) => {this.setState({ b385: !this.state.b385})}
  he386 = (event) => {this.setState({ b386: !this.state.b386})}
  he387 = (event) => {this.setState({ b387: !this.state.b387})}
  he388 = (event) => {this.setState({ b388: !this.state.b388})}
  he389 = (event) => {this.setState({ b389: !this.state.b389})}
  he390 = (event) => {this.setState({ b390: !this.state.b390})}
  he391 = (event) => {this.setState({ b391: !this.state.b391})}
  he392 = (event) => {this.setState({ b392: !this.state.b392})}
  he393 = (event) => {this.setState({ b393: !this.state.b393})}
  he394 = (event) => {this.setState({ b394: !this.state.b394})}
  he395 = (event) => {this.setState({ b395: !this.state.b395})}
  he396 = (event) => {this.setState({ b396: !this.state.b396})}
  he397 = (event) => {this.setState({ b397: !this.state.b397})}
  he398 = (event) => {this.setState({ b398: !this.state.b398})}
  he399 = (event) => {this.setState({ b399: !this.state.b399})}

  render() {
    return (
      <div style={{width: '100%', textAlign: 'center'}}>
        <Header exerciseHeader="Vicios de la Lengua" instructions="Repasarás la definición de 10 vicios de la lengua, mediante la siguiente sopa de letras. Son 10 vicios o palabras a marcar ayudándote del mouse."/>

        <table cellPadding="10px" style={{tableLayout: "fixed", textAlign: "left", width: '90%', borderCollapse: "collapse", display: "inline-block"}}>
          <thead>
            <tr className="darkBlueBg">
              <td><b>VICIO</b></td>
              <td><b>DEFINICIÓN</b></td>
              <td><b>EJEMPLO</b></td>
            </tr>
          </thead>
          <tbody>
            <tr className="lightBlueBg">
              <td>BARBARISMO</td>
              <td>Alterar la raíz o lexema de una palabra.</td>
              <td>MOUSTRO/ en vez de MONSTRUO</td>
            </tr>
            <tr className="lightWhiteBg">
              <td>ANFIBOLOGÍA</td>
              <td>Generar doble sentido, al desordenar sintácticamente los elementos de una oración.</td>
              <td>Se venden calcetines para caballeros de lana.</td>
            </tr>
            <tr className="lightBlueBg">
              <td>CACOFONÍA</td>
              <td>Sonido chocante o "verso sin esfuerzo" por repetición fonética de letras o sílabas.</td>
              <td>La vida de diva que soñaba y cantaba ilusionada y dormida.</td>
            </tr>
            <tr className="lightWhiteBg">
              <td>REDUNDANCIA</td>
              <td>Repetir la misma palabra varias veces en un lapso muy corto dentro del párrafo.</td>
              <td>Vamos a saber que un saber en esta vida es saber de todo un poco.</td>
            </tr>
            <tr className="lightBlueBg">
              <td>PLEONASMO</td>
              <td>Expresar innecesariamente por duplicado el sentido de una palabra, frase u oración.</td>
              <td>Volver a reiterar.</td>
            </tr>
            <tr className="lightWhiteBg">
              <td>PERÍFRASIS VERBAL</td>
              <td>Construcción errónea de verbos de varias palabras, para indicar acción progresiva o continua. </td>
              <td>Vamos a pasar a retirarnos.</td>
            </tr>
            <tr className="lightBlueBg">
              <td>IMPROPIEDAD</td>
              <td>Mal empleo de una categoría morfológica: poner un adjetivo, cuando debe ir adverbio.</td>
              <td>Esa niña está bien bonita (no se puede estar "mal bonita").</td>
            </tr>
            <tr className="lightWhiteBg">
              <td>SOLECISMO</td>
              <td>Mal empleo de preposiciones y conjunciones; también, inconcordancia de género y número.</td>
              <td>En base a (Con base en)/ Bajo el pretexto (Con el pretexto).</td>
            </tr>
            <tr className="lightBlueBg">
              <td>CIRCUNLOQUIO</td>
              <td>Dar rodeos y expresar poco en una misma oración o párrafo (cantinflear).</td>
              <td>"Como digo una cosa, digo otra cosa, porque yo digo…"</td>
            </tr>
            <tr className="lightWhiteBg">
              <td>QUEÍSMO</td>
              <td>Abuso del empleo del "que", como nexo o como parte del verbo.</td>
              <td>Quiero que me digas qué es lo que te pasa para ver qué hacer.</td>
            </tr>
          </tbody>
        </table>

        <br/><br/><br/>

        <table style={{width: '90%', borderCollapse: "collapse", display: "inline-block"}}>
          <tbody>
            <tr>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b000 ? "salmon":"LightGray"):(this.state.b000 ? "Gray":"LightGray")}} onClick={ this.he000 }>A</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b001 ? "salmon":"LightGray"):(this.state.b001 ? "Gray":"LightGray")}} onClick={ this.he001 }>S</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b002 ? "salmon":"LightGray"):(this.state.b002 ? "Gray":"LightGray")}} onClick={ this.he002 }>E</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b003 ? "salmon":"LightGray"):(this.state.b003 ? "Gray":"LightGray")}} onClick={ this.he003 }>R</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b004 ? "salmon":"LightGray"):(this.state.b004 ? "Gray":"LightGray")}} onClick={ this.he004 }>T</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b005 ? "salmon":"LightGray"):(this.state.b005 ? "Gray":"LightGray")}} onClick={ this.he005 }>Y</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b006 ? "salmon":"LightGray"):(this.state.b006 ? "Gray":"LightGray")}} onClick={ this.he006 }>V</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b007 ? "salmon":"LightGray"):(this.state.b007 ? "Gray":"LightGray")}} onClick={ this.he007 }>O</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b008 ? "salmon":"LightGray"):(this.state.b008 ? "Gray":"LightGray")}} onClick={ this.he008 }>S</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b009 ? "salmon":"LightGray"):(this.state.b009 ? "Gray":"LightGray")}} onClick={ this.he009 }>T</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b010 ? "salmon":"LightGray"):(this.state.b010 ? "Gray":"LightGray")}} onClick={ this.he010 }>E</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b011 ? "salmon":"LightGray"):(this.state.b011 ? "Gray":"LightGray")}} onClick={ this.he011 }>O</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b012 ? "salmon":"LightGray"):(this.state.b012 ? "Gray":"LightGray")}} onClick={ this.he012 }>P</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b013 ? "salmon":"LightGray"):(this.state.b013 ? "Gray":"LightGray")}} onClick={ this.he013 }>O</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b014 ? "salmon":"LightGray"):(this.state.b014 ? "Gray":"LightGray")}} onClick={ this.he014 }>R</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b015 ? "salmon":"LightGray"):(this.state.b015 ? "Gray":"LightGray")}} onClick={ this.he015 }>O</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b016 ? "salmon":"LightGray"):(this.state.b016 ? "Gray":"LightGray")}} onClick={ this.he016 }>S</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b017 ? "salmon":"LightGray"):(this.state.b017 ? "Gray":"LightGray")}} onClick={ this.he017 }>I</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b018 ? "salmon":"LightGray"):(this.state.b018 ? "Gray":"LightGray")}} onClick={ this.he018 }>S</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b019 ? "salmon":"LightGray"):(this.state.b019 ? "Gray":"LightGray")}} onClick={ this.he019 }>I</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b020 ? "salmon":"LightGray"):(this.state.b020 ? "Gray":"LightGray")}} onClick={ this.he020 }>S</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b021 ? "salmon":"LightGray"):(this.state.b021 ? "Gray":"LightGray")}} onClick={ this.he021 }>N</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b022 ? "salmon":"LightGray"):(this.state.b022 ? "Gray":"LightGray")}} onClick={ this.he022 }>M</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b023 ? "salmon":"LightGray"):(this.state.b023 ? "Gray":"LightGray")}} onClick={ this.he023 }>Ñ</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b024 ? "salmon":"LightGray"):(this.state.b024 ? "Gray":"LightGray")}} onClick={ this.he024 }>E</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b025 ? "salmon":"LightGray"):(this.state.b025 ? "Gray":"LightGray")}} onClick={ this.he025 }>R</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b026 ? "salmon":"LightGray"):(this.state.b026 ? "Gray":"LightGray")}} onClick={ this.he026 }>T</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b027 ? "lightgreen":"salmon"):(this.state.b027 ? "Gray":"LightGray")}} onClick={ this.he027 }>R</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b028 ? "salmon":"LightGray"):(this.state.b028 ? "Gray":"LightGray")}} onClick={ this.he028 }>O</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b029 ? "salmon":"LightGray"):(this.state.b029 ? "Gray":"LightGray")}} onClick={ this.he029 }>P</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b030 ? "salmon":"LightGray"):(this.state.b030 ? "Gray":"LightGray")}} onClick={ this.he030 }>L</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b031 ? "salmon":"LightGray"):(this.state.b031 ? "Gray":"LightGray")}} onClick={ this.he031 }>E</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b032 ? "salmon":"LightGray"):(this.state.b032 ? "Gray":"LightGray")}} onClick={ this.he032 }>R</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b033 ? "salmon":"LightGray"):(this.state.b033 ? "Gray":"LightGray")}} onClick={ this.he033 }>I</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b034 ? "salmon":"LightGray"):(this.state.b034 ? "Gray":"LightGray")}} onClick={ this.he034 }>O</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b035 ? "salmon":"LightGray"):(this.state.b035 ? "Gray":"LightGray")}} onClick={ this.he035 }>Z</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b036 ? "salmon":"LightGray"):(this.state.b036 ? "Gray":"LightGray")}} onClick={ this.he036 }>A</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b037 ? "salmon":"LightGray"):(this.state.b037 ? "Gray":"LightGray")}} onClick={ this.he037 }>U</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b038 ? "salmon":"LightGray"):(this.state.b038 ? "Gray":"LightGray")}} onClick={ this.he038 }>R</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b039 ? "salmon":"LightGray"):(this.state.b039 ? "Gray":"LightGray")}} onClick={ this.he039 }>I</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b040 ? "salmon":"LightGray"):(this.state.b040 ? "Gray":"LightGray")}} onClick={ this.he040 }>O</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b041 ? "salmon":"LightGray"):(this.state.b041 ? "Gray":"LightGray")}} onClick={ this.he041 }>I</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b042 ? "salmon":"LightGray"):(this.state.b042 ? "Gray":"LightGray")}} onClick={ this.he042 }>T</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b043 ? "salmon":"LightGray"):(this.state.b043 ? "Gray":"LightGray")}} onClick={ this.he043 }>Ñ</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b044 ? "lightgreen":"salmon"):(this.state.b044 ? "Gray":"LightGray")}} onClick={ this.he044 }>Q</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b045 ? "salmon":"LightGray"):(this.state.b045 ? "Gray":"LightGray")}} onClick={ this.he045 }>F</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b046 ? "salmon":"LightGray"):(this.state.b046 ? "Gray":"LightGray")}} onClick={ this.he046 }>I</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b047 ? "salmon":"LightGray"):(this.state.b047 ? "Gray":"LightGray")}} onClick={ this.he047 }>A</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b048 ? "lightgreen":"salmon"):(this.state.b048 ? "Gray":"LightGray")}} onClick={ this.he048 }>E</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b049 ? "salmon":"LightGray"):(this.state.b049 ? "Gray":"LightGray")}} onClick={ this.he049 }>L</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b050 ? "salmon":"LightGray"):(this.state.b050 ? "Gray":"LightGray")}} onClick={ this.he050 }>M</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b051 ? "salmon":"LightGray"):(this.state.b051 ? "Gray":"LightGray")}} onClick={ this.he051 }>U</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b052 ? "salmon":"LightGray"):(this.state.b052 ? "Gray":"LightGray")}} onClick={ this.he052 }>L</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b053 ? "salmon":"LightGray"):(this.state.b053 ? "Gray":"LightGray")}} onClick={ this.he053 }>T</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b054 ? "salmon":"LightGray"):(this.state.b054 ? "Gray":"LightGray")}} onClick={ this.he054 }>I</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b055 ? "salmon":"LightGray"):(this.state.b055 ? "Gray":"LightGray")}} onClick={ this.he055 }>H</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b056 ? "salmon":"LightGray"):(this.state.b056 ? "Gray":"LightGray")}} onClick={ this.he056 }>T</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b057 ? "salmon":"LightGray"):(this.state.b057 ? "Gray":"LightGray")}} onClick={ this.he057 }>U</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b058 ? "salmon":"LightGray"):(this.state.b058 ? "Gray":"LightGray")}} onClick={ this.he058 }>D</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b059 ? "salmon":"LightGray"):(this.state.b059 ? "Gray":"LightGray")}} onClick={ this.he059 }>D</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b060 ? "salmon":"LightGray"):(this.state.b060 ? "Gray":"LightGray")}} onClick={ this.he060 }>U</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b061 ? "salmon":"LightGray"):(this.state.b061 ? "Gray":"LightGray")}} onClick={ this.he061 }>A</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b062 ? "salmon":"LightGray"):(this.state.b062 ? "Gray":"LightGray")}} onClick={ this.he062 }>S</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b063 ? "salmon":"LightGray"):(this.state.b063 ? "Gray":"LightGray")}} onClick={ this.he063 }>E</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b064 ? "salmon":"LightGray"):(this.state.b064 ? "Gray":"LightGray")}} onClick={ this.he064 }>S</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b065 ? "lightgreen":"salmon"):(this.state.b065 ? "Gray":"LightGray")}} onClick={ this.he065 }>U</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b066 ? "salmon":"LightGray"):(this.state.b066 ? "Gray":"LightGray")}} onClick={ this.he066 }>E</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b067 ? "salmon":"LightGray"):(this.state.b067 ? "Gray":"LightGray")}} onClick={ this.he067 }>S</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b068 ? "salmon":"LightGray"):(this.state.b068 ? "Gray":"LightGray")}} onClick={ this.he068 }>I</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b069 ? "lightgreen":"salmon"):(this.state.b069 ? "Gray":"LightGray")}} onClick={ this.he069 }>D</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b070 ? "salmon":"LightGray"):(this.state.b070 ? "Gray":"LightGray")}} onClick={ this.he070 }>I</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b071 ? "salmon":"LightGray"):(this.state.b071 ? "Gray":"LightGray")}} onClick={ this.he071 }>N</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b072 ? "salmon":"LightGray"):(this.state.b072 ? "Gray":"LightGray")}} onClick={ this.he072 }>O</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b073 ? "salmon":"LightGray"):(this.state.b073 ? "Gray":"LightGray")}} onClick={ this.he073 }>S</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b074 ? "salmon":"LightGray"):(this.state.b074 ? "Gray":"LightGray")}} onClick={ this.he074 }>A</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b075 ? "salmon":"LightGray"):(this.state.b075 ? "Gray":"LightGray")}} onClick={ this.he075 }>U</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b076 ? "salmon":"LightGray"):(this.state.b076 ? "Gray":"LightGray")}} onClick={ this.he076 }>R</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b077 ? "salmon":"LightGray"):(this.state.b077 ? "Gray":"LightGray")}} onClick={ this.he077 }>I</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b078 ? "salmon":"LightGray"):(this.state.b078 ? "Gray":"LightGray")}} onClick={ this.he078 }>O</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b079 ? "salmon":"LightGray"):(this.state.b079 ? "Gray":"LightGray")}} onClick={ this.he079 }>S</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b080 ? "salmon":"LightGray"):(this.state.b080 ? "Gray":"LightGray")}} onClick={ this.he080 }>R</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b081 ? "salmon":"LightGray"):(this.state.b081 ? "Gray":"LightGray")}} onClick={ this.he081 }>V</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b082 ? "salmon":"LightGray"):(this.state.b082 ? "Gray":"LightGray")}} onClick={ this.he082 }>S</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b083 ? "salmon":"LightGray"):(this.state.b083 ? "Gray":"LightGray")}} onClick={ this.he083 }>T</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b084 ? "salmon":"LightGray"):(this.state.b084 ? "Gray":"LightGray")}} onClick={ this.he084 }>C</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b085 ? "salmon":"LightGray"):(this.state.b085 ? "Gray":"LightGray")}} onClick={ this.he085 }>A</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b086 ? "lightgreen":"salmon"):(this.state.b086 ? "Gray":"LightGray")}} onClick={ this.he086 }>E</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b087 ? "salmon":"LightGray"):(this.state.b087 ? "Gray":"LightGray")}} onClick={ this.he087 }>T</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b088 ? "salmon":"LightGray"):(this.state.b088 ? "Gray":"LightGray")}} onClick={ this.he088 }>S</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b089 ? "salmon":"LightGray"):(this.state.b089 ? "Gray":"LightGray")}} onClick={ this.he089 }>R</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b090 ? "lightgreen":"salmon"):(this.state.b090 ? "Gray":"LightGray")}} onClick={ this.he090 }>U</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b091 ? "salmon":"LightGray"):(this.state.b091 ? "Gray":"LightGray")}} onClick={ this.he091 }>V</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b092 ? "salmon":"LightGray"):(this.state.b092 ? "Gray":"LightGray")}} onClick={ this.he092 }>U</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b093 ? "salmon":"LightGray"):(this.state.b093 ? "Gray":"LightGray")}} onClick={ this.he093 }>L</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b094 ? "salmon":"LightGray"):(this.state.b094 ? "Gray":"LightGray")}} onClick={ this.he094 }>G</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b095 ? "salmon":"LightGray"):(this.state.b095 ? "Gray":"LightGray")}} onClick={ this.he095 }>A</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b096 ? "salmon":"LightGray"):(this.state.b096 ? "Gray":"LightGray")}} onClick={ this.he096 }>R</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b097 ? "salmon":"LightGray"):(this.state.b097 ? "Gray":"LightGray")}} onClick={ this.he097 }>O</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b098 ? "salmon":"LightGray"):(this.state.b098 ? "Gray":"LightGray")}} onClick={ this.he098 }>P</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b099 ? "salmon":"LightGray"):(this.state.b099 ? "Gray":"LightGray")}} onClick={ this.he099 }>R</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b100 ? "salmon":"LightGray"):(this.state.b100 ? "Gray":"LightGray")}} onClick={ this.he100 }>E</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b101 ? "salmon":"LightGray"):(this.state.b101 ? "Gray":"LightGray")}} onClick={ this.he101 }>S</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b102 ? "salmon":"LightGray"):(this.state.b102 ? "Gray":"LightGray")}} onClick={ this.he102 }>S</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b103 ? "salmon":"LightGray"):(this.state.b103 ? "Gray":"LightGray")}} onClick={ this.he103 }>T</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b104 ? "salmon":"LightGray"):(this.state.b104 ? "Gray":"LightGray")}} onClick={ this.he104 }>E</button>
              </td>
            </tr>
            <tr>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b105 ? "salmon":"LightGray"):(this.state.b105 ? "Gray":"LightGray")}} onClick={ this.he105 }>E</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b106 ? "lightgreen":"salmon"):(this.state.b106 ? "Gray":"LightGray")}} onClick={ this.he106 }>C</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b107 ? "lightgreen":"salmon"):(this.state.b107 ? "Gray":"LightGray")}} onClick={ this.he107 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b108 ? "lightgreen":"salmon"):(this.state.b108 ? "Gray":"LightGray")}} onClick={ this.he108 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b109 ? "lightgreen":"salmon"):(this.state.b109 ? "Gray":"LightGray")}} onClick={ this.he109 }>C</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b110 ? "lightgreen":"salmon"):(this.state.b110 ? "Gray":"LightGray")}} onClick={ this.he110 }>U</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b111 ? "lightgreen":"salmon"):(this.state.b111 ? "Gray":"LightGray")}} onClick={ this.he111 }>N</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b112 ? "lightgreen":"salmon"):(this.state.b112 ? "Gray":"LightGray")}} onClick={ this.he112 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b113 ? "lightgreen":"salmon"):(this.state.b113 ? "Gray":"LightGray")}} onClick={ this.he113 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b114 ? "lightgreen":"salmon"):(this.state.b114 ? "Gray":"LightGray")}} onClick={ this.he114 }>Q</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b115 ? "lightgreen":"salmon"):(this.state.b115 ? "Gray":"LightGray")}} onClick={ this.he115 }>U</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b116 ? "lightgreen":"salmon"):(this.state.b116 ? "Gray":"LightGray")}} onClick={ this.he116 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b117 ? "lightgreen":"salmon"):(this.state.b117 ? "Gray":"LightGray")}} onClick={ this.he117 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b118 ? "salmon":"LightGray"):(this.state.b118 ? "Gray":"LightGray")}} onClick={ this.he118 }>K</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b119 ? "salmon":"LightGray"):(this.state.b119 ? "Gray":"LightGray")}} onClick={ this.he119 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b120 ? "salmon":"LightGray"):(this.state.b120 ? "Gray":"LightGray")}} onClick={ this.he120 }>F</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b121 ? "salmon":"LightGray"):(this.state.b121 ? "Gray":"LightGray")}} onClick={ this.he121 }>D</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b122 ? "salmon":"LightGray"):(this.state.b122 ? "Gray":"LightGray")}} onClick={ this.he122 }>X</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b123 ? "salmon":"LightGray"):(this.state.b123 ? "Gray":"LightGray")}} onClick={ this.he123 }>Y</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b124 ? "salmon":"LightGray"):(this.state.b124 ? "Gray":"LightGray")}} onClick={ this.he124 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b125 ? "salmon":"LightGray"):(this.state.b125 ? "Gray":"LightGray")}} onClick={ this.he125 }>M</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b126 ? "salmon":"LightGray"):(this.state.b126 ? "Gray":"LightGray")}} onClick={ this.he126 }>D</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b127 ? "salmon":"LightGray"):(this.state.b127 ? "Gray":"LightGray")}} onClick={ this.he127 }>U</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b128 ? "lightgreen":"salmon"):(this.state.b128 ? "Gray":"LightGray")}} onClick={ this.he128 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b129 ? "salmon":"LightGray"):(this.state.b129 ? "Gray":"LightGray")}} onClick={ this.he129 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b130 ? "salmon":"LightGray"):(this.state.b130 ? "Gray":"LightGray")}} onClick={ this.he130 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b131 ? "salmon":"LightGray"):(this.state.b131 ? "Gray":"LightGray")}} onClick={ this.he131 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b132 ? "lightgreen":"salmon"):(this.state.b132 ? "Gray":"LightGray")}} onClick={ this.he132 }>D</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b133 ? "salmon":"LightGray"):(this.state.b133 ? "Gray":"LightGray")}} onClick={ this.he133 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b134 ? "salmon":"LightGray"):(this.state.b134 ? "Gray":"LightGray")}} onClick={ this.he134 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b135 ? "salmon":"LightGray"):(this.state.b135 ? "Gray":"LightGray")}} onClick={ this.he135 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b136 ? "salmon":"LightGray"):(this.state.b136 ? "Gray":"LightGray")}} onClick={ this.he136 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b137 ? "salmon":"LightGray"):(this.state.b137 ? "Gray":"LightGray")}} onClick={ this.he137 }>P</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b138 ? "salmon":"LightGray"):(this.state.b138 ? "Gray":"LightGray")}} onClick={ this.he138 }>H</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b139 ? "salmon":"LightGray"):(this.state.b139 ? "Gray":"LightGray")}} onClick={ this.he139 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b140 ? "salmon":"LightGray"):(this.state.b140 ? "Gray":"LightGray")}} onClick={ this.he140 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b141 ? "salmon":"LightGray"):(this.state.b141 ? "Gray":"LightGray")}} onClick={ this.he141 }>T</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b142 ? "salmon":"LightGray"):(this.state.b142 ? "Gray":"LightGray")}} onClick={ this.he142 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b143 ? "salmon":"LightGray"):(this.state.b143 ? "Gray":"LightGray")}} onClick={ this.he143 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b144 ? "salmon":"LightGray"):(this.state.b144 ? "Gray":"LightGray")}} onClick={ this.he144 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b145 ? "salmon":"LightGray"):(this.state.b145 ? "Gray":"LightGray")}} onClick={ this.he145 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b146 ? "salmon":"LightGray"):(this.state.b146 ? "Gray":"LightGray")}} onClick={ this.he146 }>I</button>
              </td>
            </tr>
            <tr>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b147 ? "salmon":"LightGray"):(this.state.b147 ? "Gray":"LightGray")}} onClick={ this.he147 }>E</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b148 ? "salmon":"LightGray"):(this.state.b148 ? "Gray":"LightGray")}} onClick={ this.he148 }>C</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b149 ? "lightgreen":"salmon"):(this.state.b149 ? "Gray":"LightGray")}} onClick={ this.he149 }>M</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b150 ? "salmon":"LightGray"):(this.state.b150 ? "Gray":"LightGray")}} onClick={ this.he150 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b151 ? "salmon":"LightGray"):(this.state.b151 ? "Gray":"LightGray")}} onClick={ this.he151 }>T</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b152 ? "lightgreen":"salmon"):(this.state.b152 ? "Gray":"LightGray")}} onClick={ this.he152 }>B</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b153 ? "lightgreen":"salmon"):(this.state.b153 ? "Gray":"LightGray")}} onClick={ this.he153 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b154 ? "lightgreen":"salmon"):(this.state.b154 ? "Gray":"LightGray")}} onClick={ this.he154 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b155 ? "lightgreen":"salmon"):(this.state.b155 ? "Gray":"LightGray")}} onClick={ this.he155 }>B</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b156 ? "lightgreen":"salmon"):(this.state.b156 ? "Gray":"LightGray")}} onClick={ this.he156 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b157 ? "lightgreen":"salmon"):(this.state.b157 ? "Gray":"LightGray")}} onClick={ this.he157 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b158 ? "lightgreen":"salmon"):(this.state.b158 ? "Gray":"LightGray")}} onClick={ this.he158 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b159 ? "lightgreen":"salmon"):(this.state.b159 ? "Gray":"LightGray")}} onClick={ this.he159 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b160 ? "lightgreen":"salmon"):(this.state.b160 ? "Gray":"LightGray")}} onClick={ this.he160 }>M</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b161 ? "lightgreen":"salmon"):(this.state.b161 ? "Gray":"LightGray")}} onClick={ this.he161 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b162 ? "salmon":"LightGray"):(this.state.b162 ? "Gray":"LightGray")}} onClick={ this.he162 }>Z</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b163 ? "salmon":"LightGray"):(this.state.b163 ? "Gray":"LightGray")}} onClick={ this.he163 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b164 ? "salmon":"LightGray"):(this.state.b164 ? "Gray":"LightGray")}} onClick={ this.he164 }>X</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b165 ? "salmon":"LightGray"):(this.state.b165 ? "Gray":"LightGray")}} onClick={ this.he165 }>V</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b166 ? "salmon":"LightGray"):(this.state.b166 ? "Gray":"LightGray")}} onClick={ this.he166 }>B</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b167 ? "salmon":"LightGray"):(this.state.b167 ? "Gray":"LightGray")}} onClick={ this.he167 }>C</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b168 ? "salmon":"LightGray"):(this.state.b168 ? "Gray":"LightGray")}} onClick={ this.he168 }>N</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b169 ? "salmon":"LightGray"):(this.state.b169 ? "Gray":"LightGray")}} onClick={ this.he169 }>H</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b170 ? "lightgreen":"salmon"):(this.state.b170 ? "Gray":"LightGray")}} onClick={ this.he170 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b171 ? "lightgreen":"salmon"):(this.state.b171 ? "Gray":"LightGray")}} onClick={ this.he171 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b172 ? "salmon":"LightGray"):(this.state.b172 ? "Gray":"LightGray")}} onClick={ this.he172 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b173 ? "salmon":"LightGray"):(this.state.b173 ? "Gray":"LightGray")}} onClick={ this.he173 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b174 ? "lightgreen":"salmon"):(this.state.b174 ? "Gray":"LightGray")}} onClick={ this.he174 }>N</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b175 ? "salmon":"LightGray"):(this.state.b175 ? "Gray":"LightGray")}} onClick={ this.he175 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b176 ? "salmon":"LightGray"):(this.state.b176 ? "Gray":"LightGray")}} onClick={ this.he176 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b177 ? "salmon":"LightGray"):(this.state.b177 ? "Gray":"LightGray")}} onClick={ this.he177 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b178 ? "salmon":"LightGray"):(this.state.b178 ? "Gray":"LightGray")}} onClick={ this.he178 }>N</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b179 ? "salmon":"LightGray"):(this.state.b179 ? "Gray":"LightGray")}} onClick={ this.he179 }>J</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b180 ? "salmon":"LightGray"):(this.state.b180 ? "Gray":"LightGray")}} onClick={ this.he180 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b181 ? "salmon":"LightGray"):(this.state.b181 ? "Gray":"LightGray")}} onClick={ this.he181 }>D</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b182 ? "salmon":"LightGray"):(this.state.b182 ? "Gray":"LightGray")}} onClick={ this.he182 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b183 ? "salmon":"LightGray"):(this.state.b183 ? "Gray":"LightGray")}} onClick={ this.he183 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b184 ? "salmon":"LightGray"):(this.state.b184 ? "Gray":"LightGray")}} onClick={ this.he184 }>Q</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b185 ? "salmon":"LightGray"):(this.state.b185 ? "Gray":"LightGray")}} onClick={ this.he185 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b186 ? "salmon":"LightGray"):(this.state.b186 ? "Gray":"LightGray")}} onClick={ this.he186 }>G</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b187 ? "salmon":"LightGray"):(this.state.b187 ? "Gray":"LightGray")}} onClick={ this.he187 }>U</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b188 ? "salmon":"LightGray"):(this.state.b188 ? "Gray":"LightGray")}} onClick={ this.he188 }>O</button>
              </td>
            </tr>
            <tr>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b189 ? "salmon":"LightGray"):(this.state.b189 ? "Gray":"LightGray")}} onClick={ this.he189 }>T</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b190 ? "salmon":"LightGray"):(this.state.b190 ? "Gray":"LightGray")}} onClick={ this.he190 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b191 ? "salmon":"LightGray"):(this.state.b191 ? "Gray":"LightGray")}} onClick={ this.he191 }>C</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b192 ? "lightgreen":"salmon"):(this.state.b192 ? "Gray":"LightGray")}} onClick={ this.he192 }>N</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b193 ? "salmon":"LightGray"):(this.state.b193 ? "Gray":"LightGray")}} onClick={ this.he193 }>X</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b194 ? "salmon":"LightGray"):(this.state.b194 ? "Gray":"LightGray")}} onClick={ this.he194 }>F</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b195 ? "lightgreen":"salmon"):(this.state.b195 ? "Gray":"LightGray")}} onClick={ this.he195 }>C</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b196 ? "lightgreen":"salmon"):(this.state.b196 ? "Gray":"LightGray")}} onClick={ this.he196 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b197 ? "lightgreen":"salmon"):(this.state.b197 ? "Gray":"LightGray")}} onClick={ this.he197 }>C</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b198 ? "lightgreen":"salmon"):(this.state.b198 ? "Gray":"LightGray")}} onClick={ this.he198 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b199 ? "lightgreen":"salmon"):(this.state.b199 ? "Gray":"LightGray")}} onClick={ this.he199 }>F</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b200 ? "lightgreen":"salmon"):(this.state.b200 ? "Gray":"LightGray")}} onClick={ this.he200 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b201 ? "lightgreen":"salmon"):(this.state.b201 ? "Gray":"LightGray")}} onClick={ this.he201 }>N</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b202 ? "lightgreen":"salmon"):(this.state.b202 ? "Gray":"LightGray")}} onClick={ this.he202 }>Í</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b203 ? "lightgreen":"salmon"):(this.state.b203 ? "Gray":"LightGray")}} onClick={ this.he203 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b204 ? "salmon":"LightGray"):(this.state.b204 ? "Gray":"LightGray")}} onClick={ this.he204 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b205 ? "lightgreen":"salmon"):(this.state.b205 ? "Gray":"LightGray")}} onClick={ this.he205 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b206 ? "salmon":"LightGray"):(this.state.b206 ? "Gray":"LightGray")}} onClick={ this.he206 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b207 ? "salmon":"LightGray"):(this.state.b207 ? "Gray":"LightGray")}} onClick={ this.he207 }>J</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b208 ? "salmon":"LightGray"):(this.state.b208 ? "Gray":"LightGray")}} onClick={ this.he208 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b209 ? "salmon":"LightGray"):(this.state.b209 ? "Gray":"LightGray")}} onClick={ this.he209 }>L</button>
              </td>
            </tr>
            <tr>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b210 ? "salmon":"LightGray"):(this.state.b210 ? "Gray":"LightGray")}} onClick={ this.he210 }>E</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b211 ? "salmon":"LightGray"):(this.state.b211 ? "Gray":"LightGray")}} onClick={ this.he211 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b212 ? "salmon":"LightGray"):(this.state.b212 ? "Gray":"LightGray")}} onClick={ this.he212 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b213 ? "lightgreen":"salmon"):(this.state.b213 ? "Gray":"LightGray")}} onClick={ this.he213 }>F</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b214 ? "salmon":"LightGray"):(this.state.b214 ? "Gray":"LightGray")}} onClick={ this.he214 }>E</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b215 ? "salmon":"LightGray"):(this.state.b215 ? "Gray":"LightGray")}} onClick={ this.he215 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b216 ? "lightgreen":"salmon"):(this.state.b216 ? "Gray":"LightGray")}} onClick={ this.he216 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b217 ? "salmon":"LightGray"):(this.state.b217 ? "Gray":"LightGray")}} onClick={ this.he217 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b218 ? "salmon":"LightGray"):(this.state.b218 ? "Gray":"LightGray")}} onClick={ this.he218 }>T</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b219 ? "salmon":"LightGray"):(this.state.b219 ? "Gray":"LightGray")}} onClick={ this.he219 }>M</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b220 ? "salmon":"LightGray"):(this.state.b220 ? "Gray":"LightGray")}} onClick={ this.he220 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b221 ? "salmon":"LightGray"):(this.state.b221 ? "Gray":"LightGray")}} onClick={ this.he221 }>C</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b222 ? "salmon":"LightGray"):(this.state.b222 ? "Gray":"LightGray")}} onClick={ this.he222 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b223 ? "salmon":"LightGray"):(this.state.b223 ? "Gray":"LightGray")}} onClick={ this.he223 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b224 ? "salmon":"LightGray"):(this.state.b224 ? "Gray":"LightGray")}} onClick={ this.he224 }>M</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b225 ? "salmon":"LightGray"):(this.state.b225 ? "Gray":"LightGray")}} onClick={ this.he225 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b226 ? "lightgreen":"salmon"):(this.state.b226 ? "Gray":"LightGray")}} onClick={ this.he226 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b227 ? "salmon":"LightGray"):(this.state.b227 ? "Gray":"LightGray")}} onClick={ this.he227 }>F</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b228 ? "salmon":"LightGray"):(this.state.b228 ? "Gray":"LightGray")}} onClick={ this.he228 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b229 ? "salmon":"LightGray"):(this.state.b229 ? "Gray":"LightGray")}} onClick={ this.he229 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b230 ? "salmon":"LightGray"):(this.state.b230 ? "Gray":"LightGray")}} onClick={ this.he230 }>I</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b231 ? "lightgreen":"salmon"):(this.state.b231 ? "Gray":"LightGray")}} onClick={ this.he231 }>P</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b232 ? "lightgreen":"salmon"):(this.state.b232 ? "Gray":"LightGray")}} onClick={ this.he232 }>E</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b233 ? "lightgreen":"salmon"):(this.state.b233 ? "Gray":"LightGray")}} onClick={ this.he233 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b234 ? "lightgreen":"salmon"):(this.state.b234 ? "Gray":"LightGray")}} onClick={ this.he234 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b235 ? "lightgreen":"salmon"):(this.state.b235 ? "Gray":"LightGray")}} onClick={ this.he235 }>F</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b236 ? "lightgreen":"salmon"):(this.state.b236 ? "Gray":"LightGray")}} onClick={ this.he236 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b237 ? "lightgreen":"salmon"):(this.state.b237 ? "Gray":"LightGray")}} onClick={ this.he237 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b238 ? "lightgreen":"salmon"):(this.state.b238 ? "Gray":"LightGray")}} onClick={ this.he238 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b239 ? "lightgreen":"salmon"):(this.state.b239 ? "Gray":"LightGray")}} onClick={ this.he239 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b240 ? "lightgreen":"salmon"):(this.state.b240 ? "Gray":"LightGray")}} onClick={ this.he240 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b241 ? "lightgreen":"salmon"):(this.state.b241 ? "Gray":"LightGray")}} onClick={ this.he241 }>&nbsp;&nbsp;</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b242 ? "lightgreen":"salmon"):(this.state.b242 ? "Gray":"LightGray")}} onClick={ this.he242 }>V</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b243 ? "lightgreen":"salmon"):(this.state.b243 ? "Gray":"LightGray")}} onClick={ this.he243 }>E</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b244 ? "lightgreen":"salmon"):(this.state.b244 ? "Gray":"LightGray")}} onClick={ this.he244 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b245 ? "lightgreen":"salmon"):(this.state.b245 ? "Gray":"LightGray")}} onClick={ this.he245 }>B</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b246 ? "lightgreen":"salmon"):(this.state.b246 ? "Gray":"LightGray")}} onClick={ this.he246 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b247 ? "lightgreen":"salmon"):(this.state.b247 ? "Gray":"LightGray")}} onClick={ this.he247 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b248 ? "salmon":"LightGray"):(this.state.b248 ? "Gray":"LightGray")}} onClick={ this.he248 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b249 ? "salmon":"LightGray"):(this.state.b249 ? "Gray":"LightGray")}} onClick={ this.he249 }>C</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b250 ? "salmon":"LightGray"):(this.state.b250 ? "Gray":"LightGray")}} onClick={ this.he250 }>T</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b251 ? "salmon":"LightGray"):(this.state.b251 ? "Gray":"LightGray")}} onClick={ this.he251 }>V</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b252 ? "salmon":"LightGray"):(this.state.b252 ? "Gray":"LightGray")}} onClick={ this.he252 }>E</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b253 ? "salmon":"LightGray"):(this.state.b253 ? "Gray":"LightGray")}} onClick={ this.he253 }>R</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b254 ? "salmon":"LightGray"):(this.state.b254 ? "Gray":"LightGray")}} onClick={ this.he254 }>I</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b255 ? "lightgreen":"salmon"):(this.state.b255 ? "Gray":"LightGray")}} onClick={ this.he255 }>B</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b256 ? "salmon":"LightGray"):(this.state.b256 ? "Gray":"LightGray")}} onClick={ this.he256 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b257 ? "salmon":"LightGray"):(this.state.b257 ? "Gray":"LightGray")}} onClick={ this.he257 }>Q</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b258 ? "salmon":"LightGray"):(this.state.b258 ? "Gray":"LightGray")}} onClick={ this.he258 }>U</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b259 ? "salmon":"LightGray"):(this.state.b259 ? "Gray":"LightGray")}} onClick={ this.he259 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b260 ? "salmon":"LightGray"):(this.state.b260 ? "Gray":"LightGray")}} onClick={ this.he260 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b261 ? "salmon":"LightGray"):(this.state.b261 ? "Gray":"LightGray")}} onClick={ this.he261 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b262 ? "salmon":"LightGray"):(this.state.b262 ? "Gray":"LightGray")}} onClick={ this.he262 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b263 ? "salmon":"LightGray"):(this.state.b263 ? "Gray":"LightGray")}} onClick={ this.he263 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b264 ? "salmon":"LightGray"):(this.state.b264 ? "Gray":"LightGray")}} onClick={ this.he264 }>B</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b265 ? "salmon":"LightGray"):(this.state.b265 ? "Gray":"LightGray")}} onClick={ this.he265 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b266 ? "salmon":"LightGray"):(this.state.b266 ? "Gray":"LightGray")}} onClick={ this.he266 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b267 ? "salmon":"LightGray"):(this.state.b267 ? "Gray":"LightGray")}} onClick={ this.he267 }>E</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b268 ? "lightgreen":"salmon"):(this.state.b268 ? "Gray":"LightGray")}} onClick={ this.he268 }>E</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b269 ? "salmon":"LightGray"):(this.state.b269 ? "Gray":"LightGray")}} onClick={ this.he269 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b270 ? "salmon":"LightGray"):(this.state.b270 ? "Gray":"LightGray")}} onClick={ this.he270 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b271 ? "salmon":"LightGray"):(this.state.b271 ? "Gray":"LightGray")}} onClick={ this.he271 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b272 ? "salmon":"LightGray"):(this.state.b272 ? "Gray":"LightGray")}} onClick={ this.he272 }>I</button>
              </td>
            </tr>
            <tr>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b273 ? "salmon":"LightGray"):(this.state.b273 ? "Gray":"LightGray")}} onClick={ this.he273 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b274 ? "salmon":"LightGray"):(this.state.b274 ? "Gray":"LightGray")}} onClick={ this.he274 }>U</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b275 ? "salmon":"LightGray"):(this.state.b275 ? "Gray":"LightGray")}} onClick={ this.he275 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b276 ? "lightgreen":"salmon"):(this.state.b276 ? "Gray":"LightGray")}} onClick={ this.he276 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b277 ? "salmon":"LightGray"):(this.state.b277 ? "Gray":"LightGray")}} onClick={ this.he277 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b278 ? "salmon":"LightGray"):(this.state.b278 ? "Gray":"LightGray")}} onClick={ this.he278 }>D</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b279 ? "salmon":"LightGray"):(this.state.b279 ? "Gray":"LightGray")}} onClick={ this.he279 }>E</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b280 ? "salmon":"LightGray"):(this.state.b280 ? "Gray":"LightGray")}} onClick={ this.he280 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b281 ? "salmon":"LightGray"):(this.state.b281 ? "Gray":"LightGray")}} onClick={ this.he281 }>C</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b282 ? "salmon":"LightGray"):(this.state.b282 ? "Gray":"LightGray")}} onClick={ this.he282 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b283 ? "salmon":"LightGray"):(this.state.b283 ? "Gray":"LightGray")}} onClick={ this.he283 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b284 ? "salmon":"LightGray"):(this.state.b284 ? "Gray":"LightGray")}} onClick={ this.he284 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b285 ? "salmon":"LightGray"):(this.state.b285 ? "Gray":"LightGray")}} onClick={ this.he285 }>M</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b286 ? "salmon":"LightGray"):(this.state.b286 ? "Gray":"LightGray")}} onClick={ this.he286 }>E</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b287 ? "salmon":"LightGray"):(this.state.b287 ? "Gray":"LightGray")}} onClick={ this.he287 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b288 ? "salmon":"LightGray"):(this.state.b288 ? "Gray":"LightGray")}} onClick={ this.he288 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b289 ? "lightgreen":"salmon"):(this.state.b289 ? "Gray":"LightGray")}} onClick={ this.he289 }>C</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b290 ? "salmon":"LightGray"):(this.state.b290 ? "Gray":"LightGray")}} onClick={ this.he290 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b291 ? "salmon":"LightGray"):(this.state.b291 ? "Gray":"LightGray")}} onClick={ this.he291 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b292 ? "salmon":"LightGray"):(this.state.b292 ? "Gray":"LightGray")}} onClick={ this.he292 }>G</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b293 ? "salmon":"LightGray"):(this.state.b293 ? "Gray":"LightGray")}} onClick={ this.he293 }>A</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b294 ? "salmon":"LightGray"):(this.state.b294 ? "Gray":"LightGray")}} onClick={ this.he294 }>A</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b295 ? "salmon":"LightGray"):(this.state.b295 ? "Gray":"LightGray")}} onClick={ this.he295 }>Z</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b296 ? "salmon":"LightGray"):(this.state.b296 ? "Gray":"LightGray")}} onClick={ this.he296 }>L</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b297 ? "lightgreen":"salmon"):(this.state.b297 ? "Gray":"LightGray")}} onClick={ this.he297 }>L</button>
              </td>
              <td>
                <button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b298 ? "salmon":"LightGray"):(this.state.b298 ? "Gray":"LightGray")}} onClick={ this.he298 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b299 ? "salmon":"LightGray"):(this.state.b299 ? "Gray":"LightGray")}} onClick={ this.he299 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b300 ? "salmon":"LightGray"):(this.state.b300 ? "Gray":"LightGray")}} onClick={ this.he300 }>P</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b301 ? "salmon":"LightGray"):(this.state.b301 ? "Gray":"LightGray")}} onClick={ this.he301 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b302 ? "salmon":"LightGray"):(this.state.b302 ? "Gray":"LightGray")}} onClick={ this.he302 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b303 ? "salmon":"LightGray"):(this.state.b303 ? "Gray":"LightGray")}} onClick={ this.he303 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b304 ? "lightgreen":"salmon"):(this.state.b304 ? "Gray":"LightGray")}} onClick={ this.he304 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b305 ? "lightgreen":"salmon"):(this.state.b305 ? "Gray":"LightGray")}} onClick={ this.he305 }>M</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b306 ? "lightgreen":"salmon"):(this.state.b306 ? "Gray":"LightGray")}} onClick={ this.he306 }>P</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b307 ? "lightgreen":"salmon"):(this.state.b307 ? "Gray":"LightGray")}} onClick={ this.he307 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b308 ? "lightgreen":"salmon"):(this.state.b308 ? "Gray":"LightGray")}} onClick={ this.he308 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b309 ? "lightgreen":"salmon"):(this.state.b309 ? "Gray":"LightGray")}} onClick={ this.he309 }>P</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b310 ? "lightgreen":"salmon"):(this.state.b310 ? "Gray":"LightGray")}} onClick={ this.he310 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b311 ? "lightgreen":"salmon"):(this.state.b311 ? "Gray":"LightGray")}} onClick={ this.he311 }>E</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b312 ? "lightgreen":"salmon"):(this.state.b312 ? "Gray":"LightGray")}} onClick={ this.he312 }>D</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b313 ? "lightgreen":"salmon"):(this.state.b313 ? "Gray":"LightGray")}} onClick={ this.he313 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b314 ? "lightgreen":"salmon"):(this.state.b314 ? "Gray":"LightGray")}} onClick={ this.he314 }>D</button>
              </td>
            </tr>
            <tr>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b315 ? "lightgreen":"salmon"):(this.state.b315 ? "Gray":"LightGray")}} onClick={ this.he315 }>P</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b316 ? "lightgreen":"salmon"):(this.state.b316 ? "Gray":"LightGray")}} onClick={ this.he316 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b317 ? "lightgreen":"salmon"):(this.state.b317 ? "Gray":"LightGray")}} onClick={ this.he317 }>E</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b318 ? "lightgreen":"salmon"):(this.state.b318 ? "Gray":"LightGray")}} onClick={ this.he318 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b319 ? "lightgreen":"salmon"):(this.state.b319 ? "Gray":"LightGray")}} onClick={ this.he319 }>N</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b320 ? "lightgreen":"salmon"):(this.state.b320 ? "Gray":"LightGray")}} onClick={ this.he320 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b321 ? "lightgreen":"salmon"):(this.state.b321 ? "Gray":"LightGray")}} onClick={ this.he321 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b322 ? "lightgreen":"salmon"):(this.state.b322 ? "Gray":"LightGray")}} onClick={ this.he322 }>M</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b323 ? "lightgreen":"salmon"):(this.state.b323 ? "Gray":"LightGray")}} onClick={ this.he323 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b324 ? "salmon":"LightGray"):(this.state.b324 ? "Gray":"LightGray")}} onClick={ this.he324 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b325 ? "salmon":"LightGray"):(this.state.b325 ? "Gray":"LightGray")}} onClick={ this.he325 }>T</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b326 ? "salmon":"LightGray"):(this.state.b326 ? "Gray":"LightGray")}} onClick={ this.he326 }>E</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b327 ? "salmon":"LightGray"):(this.state.b327 ? "Gray":"LightGray")}} onClick={ this.he327 }>N</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b328 ? "salmon":"LightGray"):(this.state.b328 ? "Gray":"LightGray")}} onClick={ this.he328 }>T</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b329 ? "salmon":"LightGray"):(this.state.b329 ? "Gray":"LightGray")}} onClick={ this.he329 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b330 ? "salmon":"LightGray"):(this.state.b330 ? "Gray":"LightGray")}} onClick={ this.he330 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b331 ? "lightgreen":"salmon"):(this.state.b331 ? "Gray":"LightGray")}} onClick={ this.he331 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b332 ? "salmon":"LightGray"):(this.state.b332 ? "Gray":"LightGray")}} onClick={ this.he332 }>T</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b333 ? "salmon":"LightGray"):(this.state.b333 ? "Gray":"LightGray")}} onClick={ this.he333 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b334 ? "salmon":"LightGray"):(this.state.b334 ? "Gray":"LightGray")}} onClick={ this.he334 }>T</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b335 ? "salmon":"LightGray"):(this.state.b335 ? "Gray":"LightGray")}} onClick={ this.he335 }>O</button>
              </td>
            </tr>
            <tr>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b336 ? "salmon":"LightGray"):(this.state.b336 ? "Gray":"LightGray")}} onClick={ this.he336 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b337 ? "salmon":"LightGray"):(this.state.b337 ? "Gray":"LightGray")}} onClick={ this.he337 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b338 ? "salmon":"LightGray"):(this.state.b338 ? "Gray":"LightGray")}} onClick={ this.he338 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b339 ? "lightgreen":"salmon"):(this.state.b339 ? "Gray":"LightGray")}} onClick={ this.he339 }>G</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b340 ? "salmon":"LightGray"):(this.state.b340 ? "Gray":"LightGray")}} onClick={ this.he340 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b341 ? "salmon":"LightGray"):(this.state.b341 ? "Gray":"LightGray")}} onClick={ this.he341 }>T</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b342 ? "salmon":"LightGray"):(this.state.b342 ? "Gray":"LightGray")}} onClick={ this.he342 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b343 ? "salmon":"LightGray"):(this.state.b343 ? "Gray":"LightGray")}} onClick={ this.he343 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b344 ? "salmon":"LightGray"):(this.state.b344 ? "Gray":"LightGray")}} onClick={ this.he344 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b345 ? "salmon":"LightGray"):(this.state.b345 ? "Gray":"LightGray")}} onClick={ this.he345 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b346 ? "salmon":"LightGray"):(this.state.b346 ? "Gray":"LightGray")}} onClick={ this.he346 }>M</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b347 ? "salmon":"LightGray"):(this.state.b347 ? "Gray":"LightGray")}} onClick={ this.he347 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b348 ? "salmon":"LightGray"):(this.state.b348 ? "Gray":"LightGray")}} onClick={ this.he348 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b349 ? "salmon":"LightGray"):(this.state.b349 ? "Gray":"LightGray")}} onClick={ this.he349 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b350 ? "salmon":"LightGray"):(this.state.b350 ? "Gray":"LightGray")}} onClick={ this.he350 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b351 ? "salmon":"LightGray"):(this.state.b351 ? "Gray":"LightGray")}} onClick={ this.he351 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b352 ? "lightgreen":"salmon"):(this.state.b352 ? "Gray":"LightGray")}} onClick={ this.he352 }>M</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b353 ? "salmon":"LightGray"):(this.state.b353 ? "Gray":"LightGray")}} onClick={ this.he353 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b354 ? "salmon":"LightGray"):(this.state.b354 ? "Gray":"LightGray")}} onClick={ this.he354 }>E</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b355 ? "salmon":"LightGray"):(this.state.b355 ? "Gray":"LightGray")}} onClick={ this.he355 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b356 ? "salmon":"LightGray"):(this.state.b356 ? "Gray":"LightGray")}} onClick={ this.he356 }>M</button>
              </td>
            </tr>
            <tr>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b357 ? "salmon":"LightGray"):(this.state.b357 ? "Gray":"LightGray")}} onClick={ this.he357 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b358 ? "salmon":"LightGray"):(this.state.b358 ? "Gray":"LightGray")}} onClick={ this.he358 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b359 ? "salmon":"LightGray"):(this.state.b359 ? "Gray":"LightGray")}} onClick={ this.he359 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b360 ? "lightgreen":"salmon"):(this.state.b360 ? "Gray":"LightGray")}} onClick={ this.he360 }>Í</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b361 ? "salmon":"LightGray"):(this.state.b361 ? "Gray":"LightGray")}} onClick={ this.he361 }>D</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b362 ? "salmon":"LightGray"):(this.state.b362 ? "Gray":"LightGray")}} onClick={ this.he362 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b363 ? "salmon":"LightGray"):(this.state.b363 ? "Gray":"LightGray")}} onClick={ this.he363 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b364 ? "salmon":"LightGray"):(this.state.b364 ? "Gray":"LightGray")}} onClick={ this.he364 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b365 ? "salmon":"LightGray"):(this.state.b365 ? "Gray":"LightGray")}} onClick={ this.he365 }>K</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b366 ? "salmon":"LightGray"):(this.state.b366 ? "Gray":"LightGray")}} onClick={ this.he366 }>U</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b367 ? "salmon":"LightGray"):(this.state.b367 ? "Gray":"LightGray")}} onClick={ this.he367 }>N</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b368 ? "salmon":"LightGray"):(this.state.b368 ? "Gray":"LightGray")}} onClick={ this.he368 }>W</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b369 ? "salmon":"LightGray"):(this.state.b369 ? "Gray":"LightGray")}} onClick={ this.he369 }>Q</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b370 ? "salmon":"LightGray"):(this.state.b370 ? "Gray":"LightGray")}} onClick={ this.he370 }>S</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b371 ? "salmon":"LightGray"):(this.state.b371 ? "Gray":"LightGray")}} onClick={ this.he371 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b372 ? "salmon":"LightGray"):(this.state.b372 ? "Gray":"LightGray")}} onClick={ this.he372 }>E</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b373 ? "lightgreen":"salmon"):(this.state.b373 ? "Gray":"LightGray")}} onClick={ this.he373 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b374 ? "salmon":"LightGray"):(this.state.b374 ? "Gray":"LightGray")}} onClick={ this.he374 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b375 ? "salmon":"LightGray"):(this.state.b375 ? "Gray":"LightGray")}} onClick={ this.he375 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b376 ? "salmon":"LightGray"):(this.state.b376 ? "Gray":"LightGray")}} onClick={ this.he376 }>D</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b377 ? "salmon":"LightGray"):(this.state.b377 ? "Gray":"LightGray")}} onClick={ this.he377 }>E</button>
              </td>
            </tr>
            <tr>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b378 ? "salmon":"LightGray"):(this.state.b378 ? "Gray":"LightGray")}} onClick={ this.he378 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b379 ? "salmon":"LightGray"):(this.state.b379 ? "Gray":"LightGray")}} onClick={ this.he379 }>N</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b380 ? "salmon":"LightGray"):(this.state.b380 ? "Gray":"LightGray")}} onClick={ this.he380 }>Y</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b381 ? "lightgreen":"salmon"):(this.state.b381 ? "Gray":"LightGray")}} onClick={ this.he381 }>A</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b382 ? "salmon":"LightGray"):(this.state.b382 ? "Gray":"LightGray")}} onClick={ this.he382 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b383 ? "salmon":"LightGray"):(this.state.b383 ? "Gray":"LightGray")}} onClick={ this.he383 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b384 ? "salmon":"LightGray"):(this.state.b384 ? "Gray":"LightGray")}} onClick={ this.he384 }>G</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b385 ? "salmon":"LightGray"):(this.state.b385 ? "Gray":"LightGray")}} onClick={ this.he385 }>T</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b386 ? "salmon":"LightGray"):(this.state.b386 ? "Gray":"LightGray")}} onClick={ this.he386 }>R</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b387 ? "salmon":"LightGray"):(this.state.b387 ? "Gray":"LightGray")}} onClick={ this.he387 }>G</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b388 ? "salmon":"LightGray"):(this.state.b388 ? "Gray":"LightGray")}} onClick={ this.he388 }>U</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b389 ? "salmon":"LightGray"):(this.state.b389 ? "Gray":"LightGray")}} onClick={ this.he389 }>I</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b390 ? "salmon":"LightGray"):(this.state.b390 ? "Gray":"LightGray")}} onClick={ this.he390 }>Ñ</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b391 ? "salmon":"LightGray"):(this.state.b391 ? "Gray":"LightGray")}} onClick={ this.he391 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b392 ? "salmon":"LightGray"):(this.state.b392 ? "Gray":"LightGray")}} onClick={ this.he392 }>P</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b393 ? "salmon":"LightGray"):(this.state.b393 ? "Gray":"LightGray")}} onClick={ this.he393 }>E</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b394 ? "salmon":"LightGray"):(this.state.b394 ? "Gray":"LightGray")}} onClick={ this.he394 }>L</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b395 ? "salmon":"LightGray"):(this.state.b395 ? "Gray":"LightGray")}} onClick={ this.he395 }>O</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b396 ? "salmon":"LightGray"):(this.state.b396 ? "Gray":"LightGray")}} onClick={ this.he396 }>N</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b397 ? "salmon":"LightGray"):(this.state.b397 ? "Gray":"LightGray")}} onClick={ this.he397 }>E</button>
              </td>
              <td>
              	<button className="bT" style={{backgroundColor: this.state.compare ? (this.state.b398 ? "salmon":"LightGray"):(this.state.b398 ? "Gray":"LightGray")}} onClick={ this.he398 }>S</button>
              </td>
              
            </tr>
            <tr>
            </tr>
          </tbody>
        </table>

        <br/><br/>
        <button onClick={this.updateComparar.bind(this)}>Comparar</button>
        <button>Salir</button>
      </div>
    )
  }
}

export default ViciosLen2;
