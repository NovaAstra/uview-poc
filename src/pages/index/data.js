export const data = {
  "name": "模板名称",
  "template": "预勘探意见:经预勘探，该店所处地理位置在${locations}，人流量${flow}中小学校、幼儿园周围，经营场所内的烟柜陈列面积为${area}平米，具有符台条件的相应资金，${isNear}与已持有烟草专卖零售许可证的零售点相邻。该店招牌名称与营业执照登记的信息。实际经营情况与提交的相关资料${isSame}，已向零售户宣传烟草专卖法相关法律法规。该店${isStandards}广州市烟草制品零售点合理布局规划。",
  "locations": {
    value: {
      "name": "一般街道",
      "value": "0"
    },
    "type": "radio",
    "require": true,
    "options": [{
      name: "一般街道",
      value: "0",
    },
    {
      name: "繁华路段",
      value: "1",
    },
    {
      name: "公园景区",
      value: "2",
    },]
  },
  "flow": {
    "type": "radio",
    "require": true,
    "options": [{
      name: "一般",
      value: "0",
    },
    {
      name: "较多",
      value: "1",
    },
    {
      name: "稀少",
      value: "2",
    },]
  },
  "area": {
    "value": "123213123",
    "require": true,
    "type": "input",
  },
  "isNear": {
    "type": "radio",
    "require": true,
    "options": [{
      name: "有",
      value: "0",
    },
    {
      name: "没有",
      value: "1",
    },]
  },
  "isSame": {
    "type": "radio",
    "require": true,
    "options": [{
      name: "一致",
      value: "0",
    },
    {
      name: "不符，已劝谕负责人更改招牌名称与工商登记信息一致",
      value: "1",
    },]
  },
  "isStandards": {
    "type": "radio",
    "require": true,
    "options": [{
      name: "符合",
      value: "0",
    },
    {
      name: "不符合",
      value: "1",
    },]
  },
};