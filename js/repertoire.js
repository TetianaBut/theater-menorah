// =======  children vanilla JavaScript Слайдер======
const itemsChildren = [
  {
    // "«Приключения Мультяшек» 2020"
    content:
      "<h3>МУЗЫКАЛЬНАЯ СКАЗКА ДЛЯ ДЕТЕЙ<br /><small>Сказка предназначена для детей дошкольного и школьного возраста.</small></h3><br /><span>Автор сказки — режиссер ИРИНА ЛЕВ.</span><span>Автор музыки — композитор ИЛЬЯ КУЗИНЕЦ.</span><br /><p>Детей ждет встреча с Героями их самых любимых мультипликационных фильмов: Красной Шапочкой, Буратино, Пьеро и Мальвиной, Бременскими музыкантами, Злой Королевой Мачехой и Синей Бородой, Добрым Волшебником и Дедом Всеведом, Дедом Морозом и… другими.</p><p>А самое удивительное, это то, что все Герои сходят к детям с экрана, действуют, поют и танцуют с детьми, водят хороводы и дарят подарки. Это вызывает у детей уверенность в том, что чудеса случаются, а мечты сбываются. И, хотя Герои сказки известны, сама сказка оригинальная. <br> Посмотрите ее с вашими детьми ВМЕСТЕ! Вам тоже будет интересно и весело!</p><br /><h3><small>Счастливого Просмотра!</small></h3>",
    urlYouTube: "WoTa3pQu1yQ?si=yrtzWcqeEB6-8SEA",
    // "https://www.youtube.com/embed/WoTa3pQu1yQ?autoplay=1&controls=0&modestbranding=1&rel=0&autohide=1&showinfo=0&iv_load_policy=3",
    // "https://www.youtube.com/embed/WoTa3pQu1yQ?si=o_zh1WhR1AuKlK1I&amp;controls=0",
    opacityPlay: "",
  },
  {
    //"«Ветерок спасает Праздник» 2021" https://youtu.be/Q-UUfYfHc9c?si=q5281p_gaYoZKY3X
    content:
      "<h3>МУЗЫКАЛЬНАЯ СКАЗКА ДЛЯ ДЕТЕЙ </h3><br /><span>Автор сказки — режиссер ИРИНА ЛЕВ.</span><span>Автор музыки — композитор ИЛЬЯ КУЗИНЕЦ.</span><br /><p>Бабушка поет внучке колыбельную. Малышка засыпает. Во сне она видит волшебные сны, в которых Дед Мороз, Снегурочка и другие зимние родственники Мороза (тетушки Вьюга и Пурга, матушка Зима, Льдинки и другие...) разлетаются по Земному Шару разнося детям долгожданные подарки... И все бы хорошо, НО... Злючка-Колючка и злой Тараканище всеми силами пытаются помешать. На пути этих злодеев становятся Добрый Доктор Айболит и ВЕТЕРОК... </p><p>О ТОМ, КАК ВЕТЕРОК СПАС ПРАЗДНИК И ДОБРО ПОБЕДИЛО ЗЛО, ВЫ УЗНАЕТЕ ПОСМОТРЕВ СКАЗКУ.  </p><br><h3><small>ДОБРА ВСЕМ И НОВОГОДНИХ ПОДАРКОВ!</small></h3>",
    urlYouTube: "Q-UUfYfHc9c?si=00B2WWtvCSR8mGYp",
    // "https://www.youtube.com/embed/Q-UUfYfHc9c?autoplay=1&controls=0&modestbranding=1&rel=0&autohide=1&showinfo=0&iv_load_policy=3",
    opacityPlay: "",
  },
  {
    //"«Приключения Кролика и его друзей» 2022"
    content: `<h3>Новогодний мюзикл<small></small></h3><br /><span>Автор сказки и режиссер - ИРИНА ЛЕВ.</span><br /><p>Новый год недалек! Праздник к нам на порог! Дед Мороз к нам идет! Всем подарки несет!!! </p><p>Маленький Белый Кролик убегает из дома в предновогодний вечер... Злой Тигр и все его Кошачье семейство похищают Белого Кролика у его маленькой хозяйки. Но! У Малышки есть настоящие друзья - Мумушка, Барбосик и Болтуша(говорящий попугайчик). Собрав своих друзей, она бросается на поиски любимого друга Кролика.</p><p> О приключениях беглеца и его друзей, а также об их победе над злобным Тигром и его Кошачьим семейством, наши зрители узнают посмотрев мюзикл.</p><p>Наших маленьких зрителей и их родителей ждут удивительные истории, очаровательные герои, красочные костюмы, замечательная музыка, песни, хороводы, игры, фотографии с полюбившимися персонажами и... конечно, вкусные подарки!!!</p><br><h3><small>ПОДАРИТЕ СЕБЕ И СВОИМ МАЛЫШАМ СЧАСТЬЕ ДЕТСТВА! ЖДЕМ ВАС!</small></h3>`,
    urlYouTube: "#",
    opacityPlay: 0,
  },
  {
    //"«Книжная сказка» 2023"
    content: "«Книжная сказка» 2023",
    urlYouTube: "#",
    opacityPlay: 0,
  },
  {
    //"«Сказка о СКАЗКАХ» 2024"
    content:
      "<h3>МУЗЫКАЛЬНАЯ СКАЗКА ДЛЯ ДЕТЕЙ<br /><small>от 2-х до 10лет</small></h3><br /><span>Автор сказки — режиссер ИРИНА ЛЕВ.</span><br /><p>«Много есть сказок прекрасных на свете. Мамы и Папы читают их детям...». Любимая детьми Свинка Пеппа представляет детям персонажей из любимых детских книжек а ребятишки должны отгадать «Кто ЭТО?» и как называется сказка. Волк и Красная Шапочка, Тигр, Пантера, Лев и обезьянки из книжки «Маугли», Маша и Медведь, Снежная Королева, Дюймовочка и другие поют и танцуют для ребятишек, рассказывая о себе и своих героях.</p><p> Сказка учит детей быть бесстрашными и храбрыми. </p><br><h3><small>Добро пожаловать в СКАЗКУ !</small></h3>",
    urlYouTube: "1JQUTbOVYj4?si=kxxFzzPqrLgN7-BP",
    // "https://www.youtube.com/embed/1JQUTbOVYj4?autoplay=1&controls=0&modestbranding=1&rel=0&autohide=1&showinfo=0&iv_load_policy=3",
    // "https://www.youtube.com/embed/1JQUTbOVYj4?si=kxxFzzPqrLgN7-BP&amp;controls=0",
    opacityPlay: "",
  },
  {
    //"«Приключения в Новогоднюю ночь» 2024"
    content:
      "<h3>СКАЗКА ДЛЯ ВСЕЙ СЕМЬИ!!!</h3><br /><span>Автор сказки и режиссер — ИРИНА ЛЕВ.</span><br /><p>Чем необычна эта сказка? Что в ней такого, о чем стоит Вам рассказать. Вы увидите в ней Героев и Злодеев, чьи образы будут интересны и знакомы также и Вам, дорогие родители. В ней Робин Гуд, Шерлок Холмс, Римский Легионер и другие «взрослые» герои будут спасать детский Новогодний праздник, отбирать у Злодеев (Кикиморы, Ведьмы и других), украденные детские подарки и под руководством Зеленой Змейки, хранительницы 2025 года, выручать детишек из беды. А потом?... Потом будут танцы, песни, хороводы, фотографии с героями и... сладости.</p><p> Необычные герои, чудесные костюмы, отличная музыка, вкуснейшие подарки и песни, танцы, хороводы, фото на память с Дедом Морозом, Снегурочкой и другими персонажами. </p><br /><h3><small>Доставьте удовольствие своим детям и себе.<br /> Будьте с нами участниками этих замечательных приключений.</small></h3>",
    urlYouTube: "1O9KNtJkvY8?si=QS2INjg1XBjc5RBs",
    opacityPlay: "",
  },
];

const itemsPerformances = [
  {
    name: '"«Истории старой кухни»"',
    content: `<h3> «Истории старой кухни» ( А.Котляр) <br /><small></small></h3><br /><span>Режиссер —  ИРИНА ЛЕВ.</span><span>Автор музыки — композитор ИЛЬЯ КУЗИНЕЦ.</span><br /><p></p><p></p><br /><h3><small>Счастливого Просмотра!</small></h3>`,
    urlYouTube: "Kqsnc2_-pyk?si=2loot9GE_X5F6Bjk",
    opacityPlay: "",
  },
  {
    name: '"«Легкое знакомство»"',
    content: `<h3>«Легкое знакомство» ( В.Красногоров)<br /><small></small></h3><br /><span>Режиссер — ИРИНА ЛЕВ.</span></span><br /><p></p><p></p><br /><h3><small>Счастливого Просмотра!</small></h3>`,
    urlYouTube: "XmKiQVuSbFo",
    // urlYouTube: "XmKiQVuSbFo?si=5gnp3nIq7-4JsLNQ",
    opacityPlay: "",
  },
  {
    name: '"«Варшавская мелодия»"',
    content: ` <h3>АКТУАЛЬНО КАК НИКОГДА!<br /><small>Театр представляет свое прочтение знаменитой пьесы Л.Зорина</small></h3><br /><span>Режиссер - ИРИНА ЛЕВ.</span><br /><p>В спектакле  красной линией проходят две темы: Любовь и Свобода. Эпиграфом стали строки двух Гениев ..." Любовь приходит, чтобы жить навек" Низами и "Невозможна Свобода, когда один район свободен, а другой нет..." Л.Сукарно.</p><p>История любви двух юных сердец, разрушенной выстроенным политиками "железным занавесом", запретом на браки с иностранцами, не оставляет равнодушным ни одно сердце. Л.Зорин, написавший эту историю в далеком прошлом, оказался провидцем, заглянувшим в далекое Сегодня...</p><p>Дорогие зрители! Вас порадует ВСЕ: замечательная игра актеров, оригинальная сценография, живое исполнение песен, музыка великого Шопена, световые эффекты... многое другое.</p><br /><h3><small>Спасибо,что вы с нами!</small></h3>
  `,
    urlYouTube: "O4LvwwmPclQ?si=SJrjKt_XEIASnXx3",
    opacityPlay: "",
  },
  {
    name: '"«Рандеву с театром»"',
    content: `<h3>«Рандеву с театром»<br /><small>или "Ох, уж, эти странные женщины"</small></h3><br /><span>Режиссер-постановщик — ИРИНА ЛЕВ.</span></span><br /><p>И артисты, и зрители за труднейший для всех год борьбы с короновирусом и боевыми действиями периода войны "Страж стен", стосковались друг за другом! Спектакль представляет собой Коллаж из нескольких различных произведений, обьединенных двумя идеями:</p><p> во первых, желанием познакомить зрителя с как можно большим разнообразием театрального искусства, а также дать возможность выразить себя как можно большему количеству артистов Театра;</p><p> во-вторых, рассказать, посредством различных направлений театральной деятельности о многообразии граней женского характера и великой преданности и самоотверженности Женщин в Любви, а также о том, сколько различных оттенков кроется в этом великом понятии- ЛЮБОВЬ: к детям, любимым, родным, к искусству,театру и так до бесконечности....
</p><p></p><br /><h3><small>Зал был полон...</small></h3>`,
    urlYouTube: "5FXnJRBFyPw?si=g8QQzMSylK_Nq7Bk",
    opacityPlay: "",
  },
  {
    name: '"«Шерше ля Фам»"',
    content: `<h3>По произведениям Алессандро Канолы и В.Красногорова<br /><small></small></h3><br /><span>Режиссер-постановщик — ИРИНА ЛЕВ.</span><h3><br /><small>Дорогие наши зрители!</small></h3><br /><p>Наш театр представляет вашему вниманию свою новую работу- спектакль" Шерше ля фам или Ребрышки Адама". Три новеллы, три истории, три взгляда на психологию поведения и различие в увлечениях "слабого пола" - наших милых Дам: приверженность ЕЕ Величеству Моде, жажду Любви, способность к самопожертвованию, силу и слабость, преданность, ненависть и многое другое.. Грустно и смешно! Трогательно и забавно!Наивно и жизненно! Песни, написанные специально для этого спектакля (авторы и исполнители - СЮРПРИЗ!).</p><p></p><br /><h3><small>Милые женщины, Вы и есть те самые "Ребрышки Адама"!<br />ПРИХОДИТЕ УЛЫБНУТЬСЯ! Спектакль добрый, светлый, музыкальный!</small></h3>`,
    urlYouTube: "J859DserkwU?si=Ozp6u6GAFGvuFYVQ",
    opacityPlay: "",
  },
  {
    name: '"«Хочу сниматься в кино»"',
    content: `<h3> </small>По пьесе знаменитого американского драматурга НИЛА САЙМОНА</small></h3><br /><span>Режиссер  — ИРИНА ЛЕВ.</span><br /><p>Голливуд! Таинственный и притягательный! Мир волшебства кинематографа! Красота в свете софитов! Возможность побывать где-то в неизвестности, в неизведанном...</p><p>Какая девчонка (да и мальчишка!) не мечтает об этом!? Вот и героиня спектакля Либби появляется в доме своего, давно ушедшего из семьи отца, с заявлением о том, что она "хочет сниматься в кино"! И помочь ей в этом может отец, некогда успешный голливудский сценарист, Херб Таккер и его подруга жизни Стеффи...</p><p>В спектакле много о любви, дружбе, семейных взаимоотношениях, сексе, взаимопонимании, стремлениях и возможностях!</p><p>Эпиграфом к спектаклю выбраны слова великого В.Гете: "КТО ВЕРИТЬ САМ В СЕБЯ УМЕЕТ, ТОТ И ДРУГИХ ДОВЕРЬЕМ ОВЛАДЕЕТ!"</p><br /><h3><small>Спешите посмотреть спектакль.</small></h3>`,
    urlYouTube: "7QUdHK3NyHw?si=oNYMp4XXOKnA2Nbv",
    opacityPlay: "",
  },
  {
    name: '"«Невесты или Не мешайте выйти замуж»"',
    content: `<h3>Пьеса известного драматурга В. Красногорова<br /><small></small></h3><br /><span>Режиссер-постановщик — ИРИНА ЛЕВ.</span></span><br /><p>Дорогие зрители! Коллектив театра завершил свой колоссальный проект: спектакль "НЕВЕСТЫ" или "КАК НУЖНО ВЫЙТИ ЗАМУЖ". В главной роли-ЕЛЕНА МИХАЙЛОВА. Хотя каждый персонаж по-своему Главный!!!</p><p>Спектакль многогранен, многослоен, в нем задействовано большое количество актеров и внимательному зрителю будет открыто множество сторон человеческих взаимоотношений. Пороки и добродетели, доброжелатели и недруги, друзья и...</p><br /><h3><small>А, впрочем, смотрите сами!</small></h3>`,
    urlYouTube: "cWNkLxef0xE?si=jITM-LkQ-4C2yTm2",
    opacityPlay: "",
  },
  {
    name: '"«Не повторится больше  НИКОГДА»"',
    content: `<h3>День Холокоста</h3><br /><span>Режиссеры- постановщики  — ТАМИР БАМАЙ, ИРИНА ЛЕВ.</span></span><br /><h3><small>Дорогие соотечественники! Израильтяне!</small></h3><br /><p>В эти тяжкие и горькие для каждого из нас дни, когда наши сердца обливаются кровью, а глаза полны слез, многие из нас находятся на грани между стрессом и депрессией. Психологи советуют нам отключать наше внимание на небольшие периоды времени от просмотров новостей и отвлекаться на хорошую книгу, добрые фильмы или любимую музыку.</p><p>Наш театр находиться территориально в одном из самых обстреливаемых городов нашей страны. Над нашими домами звучит не музыка, а сирены.</p><br /><h3><small>Но, город жив! Мы оберегаем его своей любовью, дружбой, взаимопомощью.</small></h3><br /><p>И наш коллектив хочет подарить вам, такие необходимые всем нам сейчас минуты отдыха своим искусством.</p>`,
    urlYouTube: "aBTYP-cV1Vg?si=rjZ1Gj1u_qSB8MZZ",
    opacityPlay: "",
  },
];

//TODO: .performances__slider =================================
const sliderPerformances = document.querySelector(".performances__slider ");
const btnsPerformances = document.querySelectorAll(".performances .social-btn");
const progressBarPerformances = document.querySelector(".performances .progressbar");
const fabulaPerformances = document.querySelector(".performances .fabula__content");
let srcPerformances = itemsPerformances[3].urlYouTube;

function displayPerformances() {
  const item = document.querySelector(".performances .item:nth-child(4)");
  const computedStyle = getComputedStyle(item); //* получаем вычисленные стили
  const iValue = computedStyle.getPropertyValue("--i").trim(); //* получаем значение переменной
  document.documentElement.style.setProperty("--name-performances", itemsPerformances[iValue].name);
  fabulaPerformances.innerHTML = itemsPerformances[iValue].content;
  btnsPerformances[1].style.opacity = itemsPerformances[iValue].opacityPlay;
  srcPerformances = itemsPerformances[iValue].urlYouTube;
  // console.log(
  //   "Per видимая часть: ",
  //   fabulaPerformances.clientHeight,
  //   "/Per весь текст:  ",
  //   fabulaPerformances.scrollHeight
  // );
  fabulaPerformances.scrollTo({ top: 0, behavior: "smooth" }); //* перейти на начало текста
  if (fabulaPerformances.scrollHeight > fabulaPerformances.clientHeight) {
    progressBarPerformances.style.height = "2%"; //* весь текст > видимая часть
    document.querySelector(".performances .scroll-path").style.display = "block";
  } else {
    progressBarPerformances.style.height = "0%";
    document.querySelector(".performances .scroll-path").style.display = "none";
  }
}
displayPerformances();

//! Открытие Box "iframe-box" с видео "srcPerformancesr"
btnsPerformances[1].addEventListener("click", function (event) {
  event.preventDefault();
  openViideoBox(srcPerformances, 0);
});
btnsPerformances[0].addEventListener("click", function (event) {
  event.preventDefault();
  magicButtonCurrent(event);
  let items = document.querySelectorAll(".performances .item");
  sliderPerformances.appendChild(items[0]);
  displayPerformances();
});
btnsPerformances[2].addEventListener("click", function (event) {
  event.preventDefault();
  magicButtonCurrent(event);
  let items = document.querySelectorAll(".performances .item");
  sliderPerformances.prepend(items[items.length - 1]);
  displayPerformances();
});

//TODO: .children__slider=======================================
const sliderChildren = document.querySelector(".children__slider");
const btnsChildren = document.querySelectorAll(".children .social-btn");
const progressBarChildren = document.querySelector(".children .progressbar");
const fabulaChildren = document.querySelector(".children .fabula__content");
let srcChildren = itemsChildren[4].urlYouTube;
// ("https://www.youtube.com/embed/WoTa3pQu1yQ?si=o_zh1WhR1AuKlK1I&amp;controls=0");

function displayChildren() {
  const item = document.querySelector(".children .item:nth-child(5)");
  const computedStyle = getComputedStyle(item); //* получаем вычисленные стили
  const iValue = computedStyle.getPropertyValue("--i").trim(); //* получаем значение переменной
  fabulaChildren.innerHTML = itemsChildren[iValue].content;
  btnsChildren[1].style.opacity = itemsChildren[iValue].opacityPlay;
  srcChildren = itemsChildren[iValue].urlYouTube;
  fabulaChildren.scrollTo({ top: 0, behavior: "smooth" }); //* перейти на начало текста
  if (fabulaChildren.scrollHeight > fabulaChildren.clientHeight) {
    progressBarChildren.style.height = "2%"; //* весь текст > видимая часть
    document.querySelector(".children .scroll-path").style.display = "block";
  } else {
    progressBarChildren.style.height = "0%";
    document.querySelector(".children .scroll-path").style.display = "none";
  }
}
displayChildren();

//! Открытие Box "iframe-box" с видео "srcChildren"
btnsChildren[1].addEventListener("click", function (event) {
  event.preventDefault();
  openViideoBox(srcChildren, 0);
});

btnsChildren[0].addEventListener("click", function (event) {
  event.preventDefault();
  magicButtonCurrent(event);
  let items = document.querySelectorAll(".children .item");
  sliderChildren.appendChild(items[0]);
  displayChildren();
});
btnsChildren[2].addEventListener("click", function (event) {
  event.preventDefault();
  magicButtonCurrent(event);
  let items = document.querySelectorAll(".children .item");
  sliderChildren.prepend(items[items.length - 1]);
  displayChildren();
});

//TODO: ======= scrolling ----> fabulaChildren.onscroll =====================
//* scrollCurrent.clientHeight - видимая часть
//* scrollCurrent.scrollHeight -/весь текст
//* scrollCurrent.scrollTop - высота scrolling текста сверху
function scrollBoxCurrent(event) {
  let scrollCurrent = event.currentTarget; //* Получаем объект события
  const progressbarCurrent = scrollCurrent.parentNode.querySelector(".progressbar");
  const totalHeightCurrent = scrollCurrent.scrollHeight - scrollCurrent.clientHeight;
  let progressHeightCurrent = (scrollCurrent.scrollTop / totalHeightCurrent) * 100;
  if (progressHeightCurrent < 2) {
    progressHeightCurrent = 2;
  }
  if (progressHeightCurrent > 100) {
    progressHeightCurrent = 100;
  }
  // console.log("видимая часть: ", scrollCurrent.clientHeigh, "/весь текст:  ", scrollCurrent.scrollHeight);

  if (scrollCurrent.clientHeight > scrollCurrent.scrollHeight) {
    progressHeightCurrent = 0;
  }
  progressbarCurrent.style.height = progressHeightCurrent + "%";
}
fabulaChildren.addEventListener("scroll", scrollBoxCurrent);
fabulaPerformances.addEventListener("scroll", scrollBoxCurrent);

// TODO:================= эффект_волшебной кнопки  =====================
function magicButtonCurrent(event) {
  let button = event.currentTarget; // Получаем кнопку, на которую нажали
  for (let i = 0; i < 50; i++) {
    let spark = document.createElement("i");
    spark.classList.add("spark");
    // random positions the spark elements
    const randomX = (Math.random() - 0.5) * window.innerWidth;
    const randomY = (Math.random() - 0.5) * window.innerHeight;
    spark.style.setProperty("--x", randomX + "px");
    spark.style.setProperty("--y", randomY + "px");
    // random size for the spark elements 2-8
    const randomSize = Math.random() * 8 + 2;
    spark.style.width = randomSize + "px";
    spark.style.height = randomSize + "px";
    // animation: animateMagic 4s linear forwards;
    const duration = Math.random() * 4 + 0.5;
    spark.style.animation = `animateMagic ${duration}s ease-out forwards`;
    button.after(spark); // magicBtn.appendChild(spark);
    setTimeout(function () {
      spark.remove();
    }, 4000);
    // remove spark element after 2seconds
  }
}
