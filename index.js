const { Telegraf, Markup } = require("telegraf");
const sleep = require("./utils/sleep");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

// Создаем экземпляр бота
const bot = new Telegraf(process.env.BOT_TOKEN);

// Обработчик команды /start
bot.start(async (ctx) => {
  ctx.reply("Привет! Я информационный бот города Алания. Чем могу помочь?", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "🚕 Транспорт",
          },
          {
            text: "⚕️ Медицина",
          },
          {
            text: "🛍 Магазины",
          },
        ],
        [
          {
            text: "🚑 Экстренные службы",
          },
        ],
        [
          {
            text: "🚗 Аренда автомобилей",
          },
          {
            text: "🏢 Агентства недвижимости",
          },
        ],
        [
          {
            text: "💊 Аптеки",
          },
          {
            text: "🌐 Маркетплейсы",
          },
        ],
      ],
      resize_keyboard: true,
    },
  });
});

// Обработчик кнопки "🚕 Транспорт"
bot.hears("🚕 Транспорт", async (ctx) => {
  ctx.reply("Выберите подкатегорию:", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "🚖 Такси",
          },
          {
            text: "🚌 Автобусы",
          },
        ],
        [
          {
            text: "🔙 На главную",
          },
        ],
      ],
      resize_keyboard: true,
    },
  });
});

// Обработчик кнопки "🚖 Такси"
bot.hears("🚖 Такси", async (ctx) => {
  ctx.reply(
    "Такси в Алании – один из самых комфортных способов передвижения. На улицах вы будете видеть их повсеместно, потому как машин – огромное количество.",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: "🔙 На главную",
            },
            {
              text: "🚕 Транспорт",
            },
          ],
        ],
        resize_keyboard: true,
      },
    }
  );
  await sleep(500);

  ctx.reply(
    "Все такси окрашены в характерный желтый цвет. Поскольку в турецком алфавите нет буквы X, то крышу большинства автомобилей украшает значок с надписью «TAKSI». Пытаться останавливать машину на улице взмахом руки в Турции не принято. Вместо этого по всему городу есть специализированные стоянки и огромнейшее количество кнопок вызова."
  );
  await sleep(500);

  ctx.replyWithPhoto(
    { source: "./img/taxi-button-turkey.jpg" },
    {
      caption:
        "Эти кнопки можно отыскать во всех людных местах, на столбах вдоль дорог и даже деревьях. Они посажены так густо, что от одной кнопки до другой местами не более 50 метров. Нажав кнопку, нужно просто оставаться на месте и в течение нескольких минут подъедет именно Ваша машина. Это настолько удобно, что даже многие турки не знают номеров телефонов служб.",
    }
  );
});

// Обработчик кнопки "🚌 Автобусы"
bot.hears("🚌 Автобусы", async (ctx) => {
  ctx.reply(
    "В Аланье хорошо развит общественный транспорт — автобусы. Трамвая и метро в Алании нет. На автобусах можно проехать с одного пляжа на другой, добраться до центра и многих достопримечательностей.",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: "Маршрут №1 (101)",
            },
            {
              text: "Маршрут №2 (202)",
            },
            {
              text: "Маршрут №4",
            },
          ],
          [
            {
              text: "Маршрут №8",
            },
            {
              text: "Маршрут №10",
            },
          ],
          [
            {
              text: "🔙 На главную",
            },
            {
              text: "🚕 Транспорт",
            },
          ],
        ],
        resize_keyboard: true,
      },
    }
  );
  await sleep(500);

  ctx.reply("Местные используют транспортную карту (Kentkart Alanya).");
  await sleep(500);

  ctx.replyWithPhoto(
    {
      source: "./img/kentkart.jpg",
    },
    {
      caption: "Приобрести ее можно в минимаркетах.",
    }
  );
  await sleep(500);

  ctx.reply(
    "Есть еще приложение с маршрутами автобусов в Аланье - Moovit. Есть русский язык. Можно построить маршрут по карте до нужной точки и оно покажет, на каких автобусах добираться. Также оно работает и в Анталье."
  );
  await sleep(500);

  ctx.replyWithPhoto(
    {
      source: "./img/moovit-app.jpg",
    },
    {
      caption: "Приложение Moovit",
    }
  );
  await sleep(500);
});

// Обработчик кнопки "Маршрут №1"
bot.hears("Маршрут №1 (101)", async (ctx) => {
  ctx.reply(
    "Этот маршрут идет по набережной через всю Аланью, Махмутлар и Кестель от пляжа Каргыджак. Самый популярный и удобный автобус для туристов. Можно доехать до центра города, автобусной станции и пляжа Клеопатры."
  );
  await sleep(500);
  ctx.reply(
    "Aвтoбуc куpcиpуeт c 6:15 дo 23:00 c пpoмeжуткoм в 15-20 минут (paнним утpoм и пoздним вeчepoм – peжe)."
  );
  await sleep(500);
  ctx.reply(
    "https://moovitapp.com/antalya-3462/lines/1/409363/1399504/tr?ref=2&poiType=line&abTest=Test_Add_Agency_to_Top_H2s&customerId=4908&af_sub8=%2Findex%2Ftr%2Ftoplu_ta%25C5%259F%25C4%25B1ma-line-1-Antalya-3462-858760-409363-0&t=1"
  );
});

// Обработчик кнопки "Маршрут №2"
bot.hears("Маршрут №2 (202)", async (ctx) => {
  ctx.reply(
    "Проезжает от автовокзала через всю Аланью по второй улице. На нем можно добраться до ТЦ Аланиум, самого большого Migros 5M и гипермаркета Metro. В районе магазина Метро автобус 2 сворачивает с трассы и углубляется в районы в сторону гор, проезжает Кестель по второй улице. Конечная в Махмутларе."
  );
  await sleep(500);
  ctx.reply(
    "Kуpcиpуeт c 6:35 дo 22:50 c пpoмeжуткoм в 15-20 минут (paнним утpoм и пoздним вeчepoм – peжe)."
  );
  await sleep(500);
  ctx.reply("https://goo.gl/maps/ALMB3d7fxAMMvFZs6");
});

// Обработчик кнопки "Маршрут №4"
bot.hears("Маршрут №4", async (ctx) => {
  ctx.reply(
    "Aвтoбуc №4. Идeт oт пятничнoгo pынкa нa гopу к кpeпocти Aлaнии. Bпpoчeм, пocлe пoявлeния в Aлaнии кaнaтнoй дopoги нeoбxoдимocть в нeм пoчти oтпaлa, нo вдpуг вы peшитe пoднятьcя к кpeпocти пo cтapинкe, дa eщe и cэкoнoмить пapу дecяткoв лиp. Aвтoбуc идeт мимo пляжa Kлeoпaтpы и пeщepы Дaмлaтaш, гдe нa нeгo caдитьcя удoбнee вceгo."
  );
  await sleep(500);

  ctx.reply(
    "Kуpcиpуeт c интepвaлoм в 1 чac. Пepвый выeзд oт пятничнoгo pынкa в 9:00, пocлeдний – в 19:00. Пepвый выeзд oт кpeпocти в 9:30, пocлeдний – в 18:30. Mapшpут нa туpeцкoм языкe: Damlataş – Kuуularönü — Cuma Pazarı."
  );
  await sleep(500);

  ctx.reply("https://goo.gl/maps/cJmMxP9EjF1PZgQcA");
});

// Обработчик кнопки "Маршрут №8"
bot.hears("Маршрут №8", async (ctx) => {
  ctx.reply(
    "Aвтoбуc №8. Идeт из цeнтpa гopoдa нa cмoтpoвую плoщaдку c нaдпиcью I love Alanуa."
  ),
    await sleep(500);
  ctx.reply(
    "Из цeнтpa Aлaнии (кoнeчнaя – oкoлo мaгaзинa De Facto) cтapтуeт в 7:00, 10:00, 12:30, 15:30, 17:30, 19:10. Oбpaтнo из paйoнa Bektaş Mahallesi (oкoлo cмoтpoвoй плoщaдки) cтapтуeт в 7:25, 10:25, 12:55, 15:55, 17:55, 19:30. Mapшpут нa туpeцкoм языкe: Seуir Terası – Hacet — Cuma Pazarı."
  );
  await sleep(500);
  ctx.reply("https://goo.gl/maps/bYh86BEN73PMUYzR8");
});

// Обработчик кнопки "Маршрут №10"
bot.hears("Маршрут №10", async (ctx) => {
  ctx.reply(
    "Aвтoбуc №10. Идeт oт пятничнoгo pынкa к зoнe oтдыxa и пикникoв нa peкe Дим Чaй и пeщepe Дим. Пpoeзжaeт чepeз paйoн Oбa и тopгoвыe цeнтpы 5M Migros, Salı Pazarı, Alanуum."
  );
  await sleep(500);
  ctx.reply(
    "Oт пятничнoгo pынкa aвтoбуc oтпpaвляeтcя кaждый чac c 8:00 дo 19:00. Oбpaтнo – кaждый чac c 8:00 дo 20:00. Boзмoжны зaдepжки c oтпpaвлeниeм нa 10-15 минут. Пo-туpeцки мapшpут нaзывaeтcя пpocтo: Dimçaуı."
  );
  await sleep(500);
  ctx.reply("https://goo.gl/maps/diYyKbD8jRBdwv24A");
});

// Обработчик кнопки "🚑 Экстренные службы"
bot.hears("🚑 Экстренные службы", async (ctx) => {
  ctx.replyWithHTML(
    "<b>Здесь вы можете найти контактные телефоны экстренных служб.</b>"
  );

  const emergencyNumbers = `Пожарная Служба: 110
Скорая медицинская помощь: 112
Муниципальная горячая линия: 153
Полиция: 155
Жандармерия: 156
Информационный Центр Миграционной Службы: 157
Береговая охрана: 158
Помощь при отказе от курения: 171
Горячая линия по жалобам потребителей: 175
Лесные пожары: 177
Центральная система приема в больницах: 182
Социальная поддержка семьи, женщин, детей, престарелых и инвалидов: 183
Водоканал: 185
Электроэнергия: 186
Газ: 187
Ритуальные услуги: 188`;
  ctx.replyWithHTML(emergencyNumbers);
  await sleep(500);
});

// Обработчик кнопки "⚕️ Медицина"
bot.hears("⚕️ Медицина", async (ctx) => {
  try {
    ctx.reply(
      "Медицинские учреждения в Турции делятся на государственные (Devlet Hastanesi) и частные (Özel Hastanesi)."
    );

    await sleep(500);
    const replyMarkup = Markup.inlineKeyboard([
      [
        Markup.button.url(
          "Узнать",
          "https://atlasproperties.ru/blog/about-turkey/obyazatelnoe-meditsinskoe-strakhovanie-v-turtsii"
        ),
      ],
    ]);
    const medicine1 = `<b>В Туреции медицина основана на страховании.</b>

Страхование также бывает государственным и частным. Более подробно о медицинском страховании в Турции вы можете узнать здесь 👇`;
    ctx.replyWithHTML(medicine1, replyMarkup);
    bot.action("Узнать_button", (ctx) => {
      ctx.answerCbQuery('Вы нажали на кнопку "Узнать"');
    });

    const medicine2 = `<b>Вызов скорой помощи и госпитализация в экстренных случаях (в том числе ДТП) являются бесплатными. </b>

Стоимость дальнейшего лечения и оказания медицинских услуг зависит от вашего страхового полиса и предусмотренного в нем покрытия расходов. Представитель турецкого медицинского заведения связывается со страховой компанией и выясняет, в какой мере страховая компания покрывает расходы. Далее русскоговорящий представитель страховой компании звонит Вам и сообщает результат, а также рассказывает план действий.`;
    ctx.replyWithHTML(medicine2);
  } catch (error) {
    console.error("Ошибка в обработчике события: Медицина", error);
  }
});

// Обработчик кнопки "🛍 Магазины"
bot.hears("🛍 Магазины", async (ctx) => {
  ctx.reply("Здесь вы можете узнать какие есть супермаркеты в городе Алания.", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Хасбул» (Hasbul)",
          },
          {
            text: "Метро (Metro)",
          },
        ],
        [
          {
            text: "А101",
          },
          {
            text: "Бим (Bim)",
          },
          {
            text: "Шок (Şok)",
          },
        ],
        [
          {
            text: "Карфур (Carrefour)",
          },
          {
            text: "Мигрос (Migros)",
          },
        ],
        [
          {
            text: "🔙 На главную",
          },
        ],
      ],
      resize_keyboard: true,
    },
  });
});

bot.hears("Хасбул» (Hasbul)", async (ctx) => {
  ctx.replyWithPhoto(
    {
      source: "./img/hasbul-market.jpg",
    },
    {
      caption:
        "У бренда синий и красный цвет на вывеске. Отдаленно похоже на «Бим», но рисунок логотипа другой. Особенность этого магазина — многое на развес. Вкусные сладости, турецкий кофе. Недорого, очень по-восточному.",
    }
  );
});

bot.hears("Метро (Metro)", async (ctx) => {
  ctx.replyWithPhoto(
    {
      source: "./img/metro-market.jpg",
    },
    {
      caption:
        "Огромный магазин товаров всех видов в аланийском районе Оба. Там есть все: от гладильных досок и утюгов до тигровых креветок и водорослей нори. Не особо дешево, зато разнообразно.",
    }
  );
});

bot.hears("А101", async (ctx) => {
  ctx.replyWithPhoto(
    {
      source: "./img/a101-market.jpg",
    },
    {
      caption:
        "У бренда синий и красный цвет на вывеске. Отдаленно похоже на «Бим», но рисунок логотипа другой. Особенность этого магазина — многое на развес. Вкусные сладости, турецкий кофе. Недорого, очень по-восточному.",
    }
  );
});
bot.hears("Бим (Bim)", async (ctx) => {
  ctx.replyWithPhoto(
    {
      source: "./img/bim-market.jpg",
    },
    {
      caption:
        "Логотип супермаркета — красный. Известен низкими ценами, частыми скидками. Широкий выбор сладостей и молочных продуктов. Марок не очень много, зато они все неплохие. В магазине нет алкоголя и сигарет.",
    }
  );
});

bot.hears("Шок (Şok)", async (ctx) => {
  ctx.replyWithPhoto(
    {
      source: "./img/sok-market.jpg",
    },
    {
      caption:
        "Опять красный и синий на вывеске. в Турции вообще любят эти цвета для продуктовых брендов. Это, наверное, самый бюджетный магазин из бюджетной триады: «Бим», «Шок», «А101». Много дешевого (и не очень вкусного) шоколада. Есть дешевые качественные крупы и молочные продукты.",
    }
  );
});
bot.hears("Карфур (Carrefour)", async (ctx) => {
  ctx.replyWithPhoto(
    {
      source: "./img/carrefour-market.jpg",
    },
    {
      caption:
        "Супермаркет недешевый, даже со скидочной картой. Гигантский выбор выпечки. Есть гезлеме — турецкие лепешки с начинкой, прямо со сковороды. Много фруктов, в том числе и экзотических. Хороший рыбный отдел.",
    }
  );
});
bot.hears("Мигрос (Migros)", async (ctx) => {
  ctx.replyWithPhoto(
    {
      source: "./img/migros-market.jpg",
    },
    {
      caption:
        "Вероятно, наряду с «Карфуром», один из дорогих турецких супермаркетов. Есть рыба, много интересных замороженных товаров. Сыры, оливки, колбасы — в своих отделах, причем есть еще и витрины, где продавец взвесит нужное количество. Есть сыры с голубой плесенью, кстати. Есть пармезан. На развес есть каламатские маслины. Выпечка у бренда своя, а еще продают пончики. Промтовары весьма качественные, хотя одежду все же лучше покупать в специализированных магазинах. Впрочем, если выбирать товары по скидкам, можно купить продукты премиум-брендов. Да, к праздникам есть разные подарочные коробки с продуктами, удобно.",
    }
  );
});
// Дополнительные действия для категории "Магазины"

// Обработчик кнопки "💊 Аптеки"
bot.hears("💊 Аптеки", async (ctx) => {
  try {
    ctx.reply(
      "Аптеки (Eczane) в Турции работают немного иначе. Например, здесь везде есть круглосуточные аптеки, но только одна аптека на район работает в воскресенье."
    );
    await sleep(500);
    ctx.reply(
      "Каждая аптека в Турции дежурит по расписанию. С понедельника по субботу режим работы аптеки — с 9:00 до 19:00 или с 8:00 до 20:00. В сезон с апреля по октябрь некоторые аптеки в центре работают до 22:00-23:00."
    );
    await sleep(500);
    // Дополнительные действия для категории "Аптеки"
    const replyMarkup = Markup.inlineKeyboard([
      [
        Markup.button.url(
          "Дежурные аптеки",
          "https://www.alanyaeo.org.tr/tr/nobetci-eczaneler"
        ),
      ],
      [
        Markup.button.url(
          "Аптеки на карте",
          "https://yandex.ru/maps/-/CCUDiPxUpC"
        ),
      ],
    ]);
    ctx.reply(
      "Узнать адрес круглосуточной (дежурной) аптеки в Алании можно на сайте или на двери любой другой аптеки — на них вывешивают расписание. На сайте есть карта и телефон дежурящих аптек, расписание постоянно обновляется.",
      replyMarkup
    );
    await sleep(500);

    bot.action("Дежурные аптеки_button", (ctx) => {
      ctx.answerCbQuery('Вы нажали на кнопку "Дежурные аптеки"');
    });
    bot.action("Аптеки на карте_button", (ctx) => {
      ctx.answerCbQuery('Вы нажали на кнопку "Аптеки на карте"');
    });
  } catch (error) {
    console.error("Ошибка в обработчике события:", error);
    // Дополнительные действия в случае ошибки
  }
});

// Обработчик кнопки "🌐 Маркетплейсы"
bot.hears("🌐 Маркетплейсы", async (ctx) => {
  try {
    ctx.reply(
      "Здесь вы можете найти описание и адреса популярных турецких Маркетплесвов."
    );
    await sleep(500);

    const replyMarkup1 = Markup.inlineKeyboard([
      Markup.button.url("Trendyol", "https://www.trendyol.com/"),
    ]);
    ctx.reply(
      "Trendyol (Трендиол) - один из самых известных турецких торговых сайтов для покупки одежды и товаров в Интернете, так как он отличается разнообразием своих товаров, цен и специальных предложений. Продукция Trendyol варьируется от одежды и электроники до косметики и предметов личной гигиены, а также электроприборов. Сайт славится продажей одежды.",
      replyMarkup1
    );
    await sleep(500);
    bot.action("trendyol_button", (ctx) => {
      ctx.answerCbQuery('Вы нажали на кнопку "Trendyol"');
    });

    const replyMarkup2 = Markup.inlineKeyboard([
      Markup.button.url("Hepsiburada", "https://www.hepsiburada.com/"),
    ]);
    ctx.reply(
      "Hepsiburada (Хепсибурада) - Это старейший сайт онлайн-покупок в Турции, где он непрерывно работает с 1998 года, чтобы сделать себе важное имя и отличительный бренд в турецкой электронной коммерции. Хепсибурада также предоставляет услуги доставки и покупки продуктов из супермаркетов в сотрудничестве с Carrefour через Hepsi Market.",
      replyMarkup2
    );
    await sleep(500);
    bot.action("hepsiburada_button", (ctx) => {
      ctx.answerCbQuery('Вы нажали на кнопку "Hepsiburada"');
    });

    const replyMarkup3 = Markup.inlineKeyboard([
      Markup.button.url("Sahibinden", "https://sahibinden.com/"),
    ]);
    ctx.reply(
      "Sahibinden (Сахибинден) – самый важный и известный турецкий сайт по покупке и продаже подержанных товаров, недвижимости, квартир и автомобилей. Sahibinden предлагает миллионы товаров, предлагаемых непосредственно владельцем, поскольку этот сайт является крупнейшим и самым популярным онлайн-рынком для демонстрации квартир и недвижимости во всей Турции.",
      replyMarkup3
    );
    await sleep(500);
    bot.action("gittigidiyor_button", (ctx) => {
      ctx.answerCbQuery('Вы нажали на кнопку "GittiGidiyor"');
    });

    const replyMarkup4 = Markup.inlineKeyboard([
      Markup.button.url("N11", "https://www.n11.com/"),
    ]);
    ctx.reply(
      "N11 – турецкий веб-сайт, который продает всевозможные новые продукты, аффилированный с Dogus Group и южнокорейской SK. Сайт предлагает легкий опыт покупки и отличается от других сайтов тем, что предоставляет купоны на скидку после каждой покупки.",
      replyMarkup4
    );
    await sleep(500);
    bot.action("n11_button", (ctx) => {
      ctx.answerCbQuery('Вы нажали на кнопку "N11"');
    });

    const replyMarkup5 = Markup.inlineKeyboard([
      Markup.button.url("Emeksepeti", "https://www.yemeksepeti.com/"),
    ]);
    ctx.reply(
      "Yemeksepeti (Йемексепети) – это служба доставки еды, работающая онлайн. В настоящее время он присутствует в 69 городах Турции и Северного Кипра. Его ресторанная сеть состоит из большинства международных и отечественных брендов. Вы можете разместить заказ с помощью iPhone, устройства Android, мобильного веб-браузера или через Интернет.Yemeksepeti использует ваше местоположение GPS для отображения ближайших к вам ресторанов вместе с их меню.",
      replyMarkup5
    );
    await sleep(500);
    bot.action("emeksepeti_button", (ctx) => {
      ctx.answerCbQuery('Вы нажали на кнопку "Emeksepeti"');
    });

    const replyMarkup6 = Markup.inlineKeyboard([
      Markup.button.url("Media Markt", "https://www.mediamarkt.com.tr/"),
    ]);
    ctx.reply(
      "Media Markt – один из самых важных сайтов по продаже электроники в Турции, так как он предлагает широкий спектр товаров от сотовых телефонов и компьютеров до бытовой техники, холодильников и стиральных машин. Media Market предлагает множество специальных предложений и скидок, а также полную гарантию и дополнительную гарантию.",
      replyMarkup6
    );
    await sleep(500);
    bot.action("n11_button", (ctx) => {
      ctx.answerCbQuery('Вы нажали на кнопку "Media Markt"');
    });
  } catch (error) {
    console.error("Ошибка в обработчике события:", error);
    // Дополнительные действия в случае ошибки
  }
});

// Обработчик кнопки "🏢 Агентства недвижимости"
bot.hears("🏢 Агентства недвижимости", async (ctx) => {
  ctx.reply("Здесь вы можете найти адреса агентств недвижимости.");
});

// Обработчик кнопки "🚗 Аренда автомобилей"
bot.hears("🚗 Аренда автомобилей", async (ctx) => {
  const replyMarkupClio = Markup.inlineKeyboard([
    Markup.button.callback("Renault Clio", "car:Renault Clio"),
  ]);
  ctx.replyWithPhoto({ source: "./img/renault-clio.jpg" }, { caption: "" });
  await sleep(500);
  ctx.reply("Стоимость аренды одного дня: 40€", replyMarkupClio);
  bot.action("car:Renault Clio", (ctx) => {
    ctx.answerCbQuery('Вы нажали на кнопку "Renault Clio"');
  });

  const replyMarkupEgea16 = Markup.inlineKeyboard([
    Markup.button.callback("Fiat Egea 1.6", "car:Renault Egea 1.6"),
  ]);
  ctx.replyWithPhoto({ source: "./img/fiat-egea1.6.jpg" }, { caption: "" });
  await sleep(500);
  ctx.reply("Стоимость аренды одного дня: 40€", replyMarkupEgea16);
  bot.action("car:Fiat Egea 1.6", (ctx) => {
    ctx.answerCbQuery('Вы нажали на кнопку "Fiat Egea 1.6"');
  });

  const replyMarkupEgea14 = Markup.inlineKeyboard([
    Markup.button.callback("Fiat Egea 1.4", "car:Fiat Egea 1.4"),
  ]);
  ctx.replyWithPhoto({ source: "./img/fiat-egea1.4.jpg" }, { caption: "" });
  await sleep(500);
  ctx.reply("Стоимость аренды одного дня: 40€", replyMarkupEgea14);
  bot.action("car:Fiat Egea 1.4", (ctx) => {
    ctx.answerCbQuery('Вы нажали на кнопку "Fiat Egea 1.6"');
  });

  const replyMarkupEgea13 = Markup.inlineKeyboard([
    Markup.button.callback("Fiat Egea 1.3", "car:Fiat Egea 1.3"),
  ]);
  ctx.replyWithPhoto({ source: "./img/fiat-egea1.3.jpg" }, { caption: "" });
  await sleep(500);
  ctx.reply("Стоимость аренды одного дня: 40€", replyMarkupEgea13);
  bot.action("car:Fiat Egea 1.3", (ctx) => {
    ctx.answerCbQuery('Вы нажали на кнопку "Fiat Egea 1.3"');
  });

  const replyMarkupFiorino = Markup.inlineKeyboard([
    Markup.button.callback("Fiat Fiorino", "car:Fiat Fiorino"),
  ]);
  ctx.replyWithPhoto({ source: "./img/fiat-fiorino.jpg" }, { caption: "" });
  await sleep(500);
  ctx.reply("Стоимость аренды одного дня: 40€", replyMarkupFiorino);
  bot.action("car:Fiat Fiorino", (ctx) => {
    ctx.answerCbQuery('Вы нажали на кнопку "Fiat Fiorino"');
  });
});

//   ctx.reply("Здесь вы можете найти адреса агентств аренды автомобилей.", Markup.inlineKeyboard([
//     Markup.button.callback("Audi A4", "car:Audi A4"),
//     Markup.button.callback("BMW X5", "car:BMW X5"),
//     Markup.button.callback("Mercedes-Benz E-Class", "car:Mercedes-Benz E-Class"),
//   ]));
// });

let carData = "";
let textData = "";

// Обрабатываем нажатие на кнопку с выбранным автомобилем
bot.action(/^car:(.*)/, async (ctx) => {
  carData = ctx.match[1]; // Получаем выбранный автомобиль из callback-данных
  console.log("carData", carData);

  // Запрашиваем у пользователя его данные
  const dataQuery = `Напишите пожалуйста Ваши:
ФИО
Номер телефона
Дату начала аренды
Сколько дней аренды
Адрес места где вы проживаете или название отеля`;
  ctx.replyWithHTML(dataQuery);
  //ctx.reply("Напишите пожалуйста Ваши: ФИО и номер телефона:");
  // Следующее сообщение пользователя будет обработано событием 'message' в следующем блоке кода
});

// Обрабатываем сообщение пользователя с его данными
bot.on("message", async (ctx) => {
  textData = ctx?.update?.message?.text;
  // Отправляем данные в ваш Телеграм-аккаунт
  const yourTelegramChatId = process.env.CHAT_ID; // Замените на ваш фактический идентификатор чата
  await ctx.telegram.sendMessage(
    yourTelegramChatId,
    `Новый заказ:\nАвтомобиль: ${carData}\nДанные пользователя: ${textData}`
  );

  // Отправляем пользователю подтверждение о получении данных
  ctx.reply("Спасибо за ваш заказ! Мы свяжемся с вами в ближайшее время.");
});

// bot.hears("Polo", async (ctx) => {
//   ctx.replyWithPhoto(
//     {
//       source: "./img/polo.jpg",
//     },
//     {
//       caption:
//         "40 евро в день",
//     }
//   );
// });

// Обработчик кнопки "🔙 Назад"
bot.hears("🔙 На главную", async (ctx) => {
  ctx.reply("Привет! Я информационный бот города Алания. Чем могу помочь?", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "🚕 Транспорт",
          },
          {
            text: "⚕️ Медицина",
          },
          {
            text: "🛍 Магазины",
          },
        ],
        [
          {
            text: "🚑 Экстренные службы",
          },
        ],
        [
          {
            text: "🏢 Агентства недвижимости",
          },
          {
            text: "🚗 Аренда автомобилей",
          },
        ],
        [
          {
            text: "💊 Аптеки",
          },
          {
            text: "🌐 Маркетплейсы",
          },
        ],
      ],
      resize_keyboard: true,
    },
  });
});

// Обработчик команды /help
bot.help(async (ctx) => {
  ctx.reply(
    "Это информационный бот города Алания. Доступные категории: \n" +
      "• 🚕 Транспорт\n" +
      "• 🚑 Экстренные службы\n" +
      "• ⚕️ Медицина\n" +
      "• 🛍 Магазины\n" +
      "• 💊 Аптеки\n" +
      "• 🌐 Маркетплейсы\n" +
      "• 🏢 Агентства недвижимости\n" +
      "• 🚗 Аренда автомобилей"
  );
});

// Запуск бота
bot.launch();
