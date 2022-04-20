const quotes = [
    {
        quotes : "사람은 오로지 가슴으로만 올바로 볼 수 있다. 본질적인 것은 눈에 보이지 않는다",
        name : "생텍쥐페리"
    },
    {
        quotes : "승리하면 조금 배울 수 있고 패배하면 모든 것을 배울 수 있다 ",
        name : "매튜슨",
    },
    {
        quotes : "빛을 퍼뜨릴 수 있는 두 가지 방법이 있다. 촛불이 되거나 또는 그것을 비추는 거울이 되는 것이다",
        name : "이디스 워튼"
    },
    {
        quotes : "두려움 때문에 갖는 존경심만큼 비열한 것은 없다 ",
        name : "카뮈"
    },
    {
        quotes : "당신이 잘 하는 일이라면 무엇이나 행복에 도움이 된다 ",
        name : "러셀"
    },
    {
        quotes : "스스로를 신뢰하는 사람만이 다른 사람들에게 성실할 수 있다 ",
        name : "에릭 프롬"
    },

    {
        quotes : "큰 재주를 가졌다면 근면은 그 재주를 더 낫게 해줄 것이며 보통의 능력밖에 없다면 근면은 부족함을 보충해 줄 것이다",
        name : "J.레이놀즈"
    },
    {
        quotes : "과거를 지배하는 자가 마래를 지배하며 현재를 지배하는 자가 과거를 지배한다",
        name : "조지 오웰"
    },
    {
        quotes : "노동은 세개의 큰 악, 즉, 지루함, 부도덕, 그리고 가난을 제거한다",
        name : "괴테"
    },
    {
        quotes : "재물을 스스로 만들지 않는 사람에게는 쓸 권리가 없듯이 행복도 스스로 만들지 않는 사람에게는 누릴 권리가 없다",
        name : "버나드 쇼"
    },
    {
        quotes : "힘 있을 때 친구는 친구가 아니다",
        name : "헨리 애덤스"
    },
    {
        quotes : "세상은 고통으로 가득하지만 한편 그것을 이겨내는 일로도 가득차 있다",
        name : "헬렌 켈러"
    },
    {
        quotes : "미래는 일하는 사람의 것이다. 권력과 명예도 일하는 사람에게 주어진다. 게으름뱅이의 손에 누가 권력이나 명예를 안겨줄까",
        name : "힐티"
    },
    {
        quotes : "배움이 없는 자유는 언제나 위험하며 자유가 없는 배움은 언제나 헛된 일이다",
        name : "존 F. 케네디"
    },
    {
        quotes : "당신이 자신은 2위로 만족한다고 일단 말하면, 당신의 인생은 그렇게 되기 마련이라는 것을 나는 깨달았다",
        name : "존 F. 케네디"
    },
    {
        quotes : "무례한 사람의 행위는 내 행실을 바로 잡게 해주는 스승이다",
        name : "공자"
    },
    {
        quotes : "백권의 책에 쓰인 말보다 한 가지 성실한 마음이 더 크게 사람을 움직인다 ",
        name : "B.프랭클린"
    },
    {
        quotes : "말도 아름다운 꽃처럼 그 색깔을 지니고 있다",
        name : "E.리스"
    },
    {
        quotes : "사랑은 두 사람이 마주 쳐다보는 것이 아니라 함께 같은 방향을 바라보는 것이다",
        name : "생텍쥐페리"
    },
]

const quote = document.querySelector('#quote div:first-child span');
const author = document.querySelector('#quote div:last-child span');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todayQuote.quotes;
author.innerHTML = `- ${todayQuote.name} -`;