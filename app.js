// 1.링크 엘리먼트 a로 변경
// 2.리스팅에 댓글 카운트 추가
// 3.선택된 값 이벤트 타게팅 추가
// 4.헤쉬값 변경을 위해 해쉬 뒤에 아이디값 넣기
// 5.데이터 불러오기
// 6. 목록태그에서 컨텐츠 태그에 변환
// 7. 리스팅에서 컨텐츠로 ui 그리기
const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

ajax.open('GET', NEWS_URL, false); 
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

window.addEventListener('hashchange', function(){
    // 이벤트 체크 콘솔로그로 확인
    // console.log(location.hash);
    const id = location.hash.substr(1);

    ajax.open('GET', CONTENT_URL.replace('@id', id), false);
    ajax.send();
    // console.log
    const newsContent = JSON.parse(ajax.response);
    console.log(newsContent);
    const title = document.createElement('h1');
    title.innerHTML = newsContent.title;
    content.appendChild(title);
});

for (let i=0; i < 10; i++){
    const li = document.createElement('li');
    // a 추가
    const a = document.createElement('a');
    a.href= `#${newsFeed[i].id}`;
    a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;



    ul.appendChild(li);
    li.appendChild(a);
}
container.appendChild(ul);
container.appendChild(content);