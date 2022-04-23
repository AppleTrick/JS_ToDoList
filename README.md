# JS_ToDoList

Language : Javascript / HTML / CSS
IDE : VSCode

## 구현기능
- 배경화면 랜덤 변화
- 로그인기능 (localstorage 사용)
- Time 기능
- 위치, 날씨, 지역이름 표시 (geolocation 활용)
- 무작위 명언 구현하기
- To-Do-List 구현

## electron 사용

```
├── @electron-forge/cli@6.0.0-beta.63
├── @electron-forge/maker-deb@6.0.0-beta.63
├── @electron-forge/maker-rpm@6.0.0-beta.63
├── @electron-forge/maker-squirrel@6.0.0-beta.63
├── @electron-forge/maker-zip@6.0.0-beta.63
├── electron-squirrel-startup@1.0.0
└── electron@18.1.0
```
웹뿐만 아니라 PC에서 고정적인 형태로 사용을 하기 위해 electron 을 사용하여 pc 프로그램으로 변화

## ❗️다운받고 실행하기 전에

js / weather.js 

```js
const API_KEY = "";
```
해당부분에 OpenWeatherAPI 키를 입력해주세요!

## 결과물

- 메인화면
![startHome](https://user-images.githubusercontent.com/31761527/164179127-fee8b5bc-96e5-4d08-b05e-6e6cbcf62cd6.jpeg)

- 로그인 화면
![mainHome](https://user-images.githubusercontent.com/31761527/164179116-c5dd9240-a4c1-49fb-ab97-654bd574046e.jpeg)

## 향후 개선사항

- electron으로 Pc프로그램 생성시 Mac, windows 에서 둘다 getCurrentPosition 사용시, 사용자 엑세스가 거부되어 현재위치를 날려주는 기는 사용 불가능 개선필요.

## 사용된 라이브러리
- bootstrapIcon
- OpenWeatherAPI

## 사용된 배경화면 출처
[저작자] Smilegate RPG
[출처] Smilegate RPG 모코코! 생일 축하해! 이벤트 페이지
(https://lostark.game.onstove.com/Promotion/Mission/220405)