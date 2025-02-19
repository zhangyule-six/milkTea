//手势图片
// const rGesture = document.getElementsByClassName("r-gesture");
// const hGesture = document.getElementsByClassName("h-gesture");
// const rImg = document.getElementsByClassName("r-img");
// const hImg = document.getElementsByClassName("h-img");
// const selectGesture = document.getElementsByClassName("select-gesture");

//         //修改图片展示手势
// function Choose(){
// // 机器人随机生成数
//   let num = Math.floor(Math.random()*3);//生成[0，2]的随机整数
//   const gestures = ['石头', '剪刀', '布'];
//   const gesture = gestures[num];
//         // 清空rGesture中的所有子元素
//   rGesture.innerHTML = '';
//   var robotGesture = document.createElement('img');
//   robotGesture.src = `/img/${gesture}.png`;
//   rGesture.appendChild(robotGesture);
  
// //获取玩家选择的手势
//   let humangestures = ['剪刀', '石头', '布']; // 与 <option> 顺序保持一致
//   let selectedIndex = selectGesture.selectedIndex;
  
//   // 清空父容器内容（替代直接操作子元素）
//   let parentContainer = hGesture; // 确保这是正确的父容器引用
//   parentContainer.innerHTML = '';

//   // 创建新手势图片
//   let gestureImg = document.createElement('img');
//   gestureImg.src = `/img/${humangestures[selectedIndex]}.png`; // 模板字符串动态路径

//   // 将图片添加到 DOM
//   parentContainer.appendChild(gestureImg);
// }

// const confirm = document.getElementsByClassName("confirm");
// confirm.addEventListener("click",robotChoose);
