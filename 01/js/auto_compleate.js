var myHeaders = new Headers();
  myHeaders.append("Ocp-Apim-Subscription-Key", "34e35610f9f84e93a0f4cd796e5122dc");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

  fetch("https://api.cognitive.microsoft.com/bing/v7.0/suggestions?q&=깡mkt=ko-kr", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  
    //1.html 로 검색 버튼이랑 인풋박스 만들고
    //2.자바스크립트에 준코드를 함수화
    //함수 인자로 키보드입력 이벤트 발생
    //함수 호출의 결과값을 제이슨으로 만든다 . text() > JSON 
    //jSON을 파싱? ( ) 해서 배열로 만들고  그걸 
