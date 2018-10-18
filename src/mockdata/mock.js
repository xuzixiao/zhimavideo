const Mock=require("mockjs");
const Data=require("../../static/Data/data.json")
//console.log(Data);
Mock.mock("/about",/post|get/i,Data.about)
Mock.mock("/nav",/post|get/i,Data.nav)
Mock.mock("/ad",/post|get/i,Data.banner)
Mock.mock("/detail",/post|get/i,Data.video)
