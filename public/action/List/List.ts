import {GET_LIST} from '../../constants/List/List';

export function getList(list: any): any {
    return {
        type: GET_LIST,
        list: [
            {
                title: 'text1',
                text: 'text1'
            },
            {
                title: 'text2',
                text: 'text2'
            }
        ]
    };
}
