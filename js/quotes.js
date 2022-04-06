const quotes = [
    {
        quotes : "의미 없는 것을 잔뜩하는것이 인생이란다.",
        name : "마루코는 아홉살",
    },
    {
        quotes : "잃은 것만 세지마! 없는 건 이제 없어! 너에게 남은 건 뭐냐?",
        name : "원피스",
    },
    {
        quotes : "다른 사람의 욕을 그대로 믿는 건 그 욕을 말한 사람만큼이나 나쁜거야",
        name : "보노보노",
    },
    {
        quotes : "포기하는 순간 시합은 이미 진거다",
        name : "슬램덩크",
    },
    {
        quotes : "총을 쏴도 되는 사람은 총에 맞을 각오가 되있는사람 뿐이다",
        name : "코드기어스",
    },
    {
        quotes : "아픔을 동반하지 않는 교훈은 의미가 없다",
        name : "강철의 연금술사",
    },
    {
        quotes : "꿈은 도망가지 않아, 너 자신이 도망갈 뿐이지",
        name : "짱구는 못말려",
    },
    {
        quotes : "한번 실패했다고 다른 사람에게 모든 것을 떠넘길 것인지, 아니면 실패했어도 한번 더 실패한 사람들에게 손을 내밀어줄것인지",
        name : "어떤 과학의 초전자포",
    },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quotes;
author.innerHTML = todayQuote.name;