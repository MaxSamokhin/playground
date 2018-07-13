const DICTIONARY = {
    user_not_found: 'Пользователь не найден',
    wrong_email_or_password: 'Имя пользователя или пароль введены не верно'
};

const DEFAULT_MESSAGE = 'Непредвиденная ошибка';

export function getRussianTranslation(word: string): string {
    if (!DICTIONARY.hasOwnProperty(word)) {
        return DEFAULT_MESSAGE;
    }

    return DICTIONARY[word];
}