export type Publication = {
  id: string;
  title: string;
  description: string;
  file: {
    title: string;
    link: string;
  };
};

export const getPublicationList = (): Publication[] => {
  const createFileLink = (filename: string) => {
    return "/publications/" + filename;
  };

  return [
    {
      id: "1",
      title: "История Древнего Рима",
      description: "От основания города до падения Западной Римской империи",
      file: {
        title: "Древний Рим: полная история.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "2",
      title: "Философия Древней Греции",
      description: "Учения Сократа, Платона и Аристотеля",
      file: {
        title: "Греческая философия.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "3",
      title: "Средневековая Европа",
      description: "История Европы от падения Рима до Возрождения",
      file: {
        title: "Средневековье в Европе.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "4",
      title: "Экзистенциализм XX века",
      description: "Учения Сартра, Камю и Хайдеггера",
      file: {
        title: "Экзистенциализм.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "5",
      title: "История Российской империи",
      description: "От Петра I до Николая II",
      file: {
        title: "Российская империя.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "6",
      title: "Восточная философия",
      description: "Буддизм, даосизм и конфуцианство",
      file: {
        title: "Философия Востока.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "7",
      title: "Эпоха Великих географических открытий",
      description: "Открытие Америки и морские пути в Индию",
      file: {
        title: "Великие открытия.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "8",
      title: "Философия Просвещения",
      description: "Идеи Вольтера, Руссо и Монтескье",
      file: {
        title: "Эпоха Просвещения.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "9",
      title: "Первая мировая война",
      description: "Причины, ход событий и последствия",
      file: {
        title: "История ПМВ.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "10",
      title: "Марксизм и социализм",
      description: "Философские и экономические учения Маркса",
      file: {
        title: "Марксистская философия.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "11",
      title: "История Древнего Египта",
      description: "От додинастического периода до эллинизма",
      file: {
        title: "Древний Египет.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "12",
      title: "Немецкая классическая философия",
      description: "Кант, Гегель, Фихте и Шеллинг",
      file: {
        title: "Немецкая философия.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "13",
      title: "История Византии",
      description: "Восточная Римская империя от основания до падения",
      file: {
        title: "Византийская империя.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "14",
      title: "Прагматизм в философии",
      description: "Учения Пирса, Джеймса и Дьюи",
      file: {
        title: "Американский прагматизм.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "15",
      title: "Вторая мировая война",
      description: "Хронология ключевых событий 1939-1945",
      file: {
        title: "История ВМВ.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "16",
      title: "Философия постмодернизма",
      description: "Деррида, Фуко, Лиотар",
      file: {
        title: "Постмодернистская философия.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "17",
      title: "История Средней Азии",
      description: "Великий шелковый путь и империи кочевников",
      file: {
        title: "История Центральной Азии.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "18",
      title: "Этика и моральная философия",
      description: "Основные этические теории и концепции",
      file: {
        title: "Основы этики.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "19",
      title: "История Возрождения",
      description: "Итальянское и Северное Возрождение",
      file: {
        title: "Эпоха Ренессанса.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "20",
      title: "Философия науки",
      description: "Проблемы методологии и развития науки",
      file: {
        title: "Наука и философия.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "21",
      title: "История Античности",
      description: "Греко-персидские войны и эллинизм",
      file: {
        title: "Классическая античность.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "22",
      title: "Философия искусства",
      description: "Эстетика и теория искусства",
      file: {
        title: "Философия искусства.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "23",
      title: "История Реформации",
      description: "Реформация и Контрреформация в Европе",
      file: {
        title: "Реформация и ее последствия.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "24",
      title: "Стоицизм",
      description: "Философия стоиков: Сенека, Эпиктет, Марк Аврелий",
      file: {
        title: "Учение стоиков.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "25",
      title: "История Великой французской революции",
      description: "Причины, события и последствия революции",
      file: {
        title: "Французская революция.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "26",
      title: "Философия религии",
      description: "Философское осмысление религиозного опыта",
      file: {
        title: "Религия и философия.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
    {
      id: "27",
      title: "История Колониализма",
      description: "Европейская колонизация Америки, Африки и Азии",
      file: {
        title: "Эпоха колониализма.pdf",
        link: createFileLink("programming-101.pdf"),
      },
    },
  ];
};
