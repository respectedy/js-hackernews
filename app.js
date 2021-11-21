// 자바스크립트를 사용해서 브라우저가 서버에게 데이터를 요청하고, 서버가 응답한 데이터를 수신하여 웹페이지를 갱신하는 프로그래밍 방식
// XMLHttpRequest 객체의 생성
const ajax = new XMLHttpRequest();
// HTTP 요청 초기화, 동기 방식
ajax.open('GET', 'https://api.hnpwa.com/v0/news/1.json', false);
// HTTP 요청 전송
ajax.send();
// 콘솔로 데이터 요청 확인
console.log(ajax.response);
// 텍스트 데이터 포맷을 객체로 변환
const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

for (let i=0; i < 10; i++){
    const li = document.createElement('li');
    li.innerHTML = newsFeed[i].title;
    ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);