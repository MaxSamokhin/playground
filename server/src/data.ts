export const USER_DATA_OK = {
    userId: 1,
    name: 'Имя',
    city: 'Москва',
    languages: [
        'English',
        'Русский'
    ],
    social: [
        {
            label: 'vk',
            link: 'https://vk.com'
        },
        {
            label: 'telegram',
            link: 'https://ru.wikipedia.org/wiki/Telegram'
        },
        {
            label: 'mail',
            link: 'https://mail.ru/'
        },
        {
            label: 'youtube',
            link: 'https://www.youtube.com'
        },
        {
            label: 'yandex',
            link: 'https://ya.ru'
        },
        {
            label: 'qqqwe',
            link: 'https://ya.ru'
        }
    ]
};

export const USER_DATA_BAD = {
    status: 'err',
    message: 'user_not_found'
};

export const VALIDATE_OK =  {
    status: 'ok',
    data: {
        id: 1
    }
};

export const VALIDATE_BAD = {
    status: 'err',
    message: 'wrong_email_or_password'
};

export const NEWS_OK = {
    status: 'ok',
    data: [
        {
            id: 1,
            title: 'Не слишком ли быстро мы переходим на беспилотные автомобили',
            text: 'Автопроизводители и высокотехнологичные компании, тратящие миллиарды долларов на ' +
            'развитие беспилотных автомобилей и грузовиков, вовсю рекламируют автоматический транспорт, ' +
            'который, по их мнению, будет безопаснее, чище и сделает общество более мобильным.'
        },
        {
            id: 2,
            title: 'Интеллектуальная собственность: где заканчивается цитирование и начинается плагиат',
            text: 'Компьютерная программа или роман — это в первую очередь идея, творческий замысел. Но человек,' +
            ' купивший книгу, хоть и стал собственником её обложки и страниц, не может присвоить себе то, что написал' +
            ' или нарисовал автор, и продавать романы под своим именем. Иными словами, интеллектуальная собственность' +
            ' — это придуманный и созданный человеком результат. И одновременно с этим — права на него.'
        }
    ]
};
