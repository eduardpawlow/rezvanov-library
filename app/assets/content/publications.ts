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
		return '/publications/' + filename
	}

	return [
    {
        id: "1",
        title: "Основы программирования",
        description: "Введение в основы программирования для начинающих разработчиков",
        file: {
            title: "Программирование_101.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "2",
        title: "React для профессионалов",
        description: "Продвинутые техники работы с React и экосистемой",
        file: {
            title: "React_Advanced_Guide.pdf",
			link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "3",
        title: "Дизайн систем",
        description: "Создание и поддержка дизайн-систем для крупных проектов",
        file: {
            title: "Design_Systems_Handbook.pdf",
			link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "4",
        title: "TypeScript: Полное руководство",
        description: "От основ до продвинутых типов и утилит TypeScript",
        file: {
            title: "TypeScript_Mastery.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "5",
        title: "Веб-безопасность",
        description: "Современные подходы к защите веб-приложений",
        file: {
            title: "Web_Security_Best_Practices.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "6",
        title: "Node.js в продакшене",
        description: "Развертывание и масштабирование Node.js приложений",
        file: {
            title: "Node_Production_Handbook.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "7",
        title: "Глубокое обучение",
        description: "Введение в нейронные сети и машинное обучение",
        file: {
            title: "Deep_Learning_Fundamentals.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "8",
        title: "DevOps практики",
        description: "CI/CD, контейнеризация и инфраструктура как код",
        file: {
            title: "DevOps_Handbook.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "9",
        title: "Мобильная разработка",
        description: "Создание кросс-платформенных мобильных приложений",
        file: {
            title: "Mobile_Development_Guide.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "10",
        title: "Оптимизация производительности",
        description: "Техники оптимизации веб-приложений",
        file: {
            title: "Web_Performance_Optimization.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "11",
        title: "Базы данных",
        description: "SQL и NoSQL базы данных для разработчиков",
        file: {
            title: "Database_Design_Guide.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "12",
        title: "Тестирование ПО",
        description: "Unit, integration и E2E тестирование",
        file: {
            title: "Software_Testing_Methodology.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "13",
        title: "Микросервисная архитектура",
        description: "Проектирование и реализация микросервисов",
        file: {
            title: "Microservices_Architecture.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "14",
        title: "GraphQL API",
        description: "Создание эффективных API с использованием GraphQL",
        file: {
            title: "GraphQL_API_Design.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "15",
        title: "UX/UI дизайн",
        description: "Принципы проектирования пользовательских интерфейсов",
        file: {
            title: "UX_UI_Design_Principles.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "16",
        title: "Кибербезопасность",
        description: "Защита приложений от современных угроз",
        file: {
            title: "Cybersecurity_Essentials.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "17",
        title: "Облачные технологии",
        description: "Работа с AWS, Azure и Google Cloud",
        file: {
            title: "Cloud_Computing_Guide.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "18",
        title: "Алгоритмы и структуры данных",
        description: "Фундаментальные знания для разработчиков",
        file: {
            title: "Algorithms_Data_Structures.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "19",
        title: "Git и контроль версий",
        description: "Эффективная работа с Git в команде",
        file: {
            title: "Git_Mastery.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "20",
        title: "Веб-анимации",
        description: "Создание плавных анимаций для веб-интерфейсов",
        file: {
            title: "Web_Animations_Guide.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "21",
        title: "PWA приложения",
        description: "Создание прогрессивных веб-приложений",
        file: {
            title: "PWA_Development.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "22",
        title: "Docker и контейнеризация",
        description: "Разработка и деплой с использованием Docker",
        file: {
            title: "Docker_Handbook.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "23",
        title: "Реактивное программирование",
        description: "RxJS и реактивные подходы в JavaScript",
        file: {
            title: "Reactive_Programming.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "24",
        title: "Agile методологии",
        description: "Scrum, Kanban и другие гибкие методологии",
        file: {
            title: "Agile_Methodologies.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "25",
        title: "Менеджмент в IT",
        description: "Управление проектами и командами разработки",
        file: {
            title: "IT_Management_Guide.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "26",
        title: "Веб-компоненты",
        description: "Создание переиспользуемых веб-компонентов",
        file: {
            title: "Web_Components.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    },
    {
        id: "27",
        title: "Machine Learning на Python",
        description: "Практическое введение в машинное обучение",
        file: {
            title: "Python_ML_Handbook.pdf",
            link: createFileLink("programming-101.pdf"),
        }
    }
]};
