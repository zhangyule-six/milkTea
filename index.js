//提交
const submit = document.getElementsByClassName("submit")[0];
const form = document.getElementsByTagName("form")[0]; 

  function submitBtn(e){
  //阻止默认提交表单
  e.preventDefault();
  const formData = new FormData(form);
  const info = {};
  for(var p of formData.entries()){
    const pname = p[0];
    const pvalue = p[1];
  
    if(!info[pname]){
      info[pname] = pvalue;
    }else{
      // var str = info[pname].value.split("");
      // str = str.push(pvalue);
      // info[pname] = str.join();
      [pvalue].concat(info[pname])
    }
  }
  const text = `
  【您的订单已经生成】
  ------------------------
  奶茶口味：${info.flavor}
  数量：${info.count}
  杯型：${info.size}
  甜度：${info.sweetness}
  免费小料：${info["free-ingredient"] ? info["free-ingredient"] : "-"}
  加价小料：${info["charge-ingredient"] ? info["charge-ingredient"] : "-"}
  是否加冰：${info.ice}
  是否去茶底：${info.tea}
  地址：${info.address}
  手机号：${info.phone}
  期待送达时间：${info.time}
  备注：${info.remark}
  支付方式：${info.pay}
`;
console.log(info)
alert(text);
};


form.addEventListener("submit",submitBtn);

//返回顶部
const tp = document.querySelector(".to-top");
tp.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
})