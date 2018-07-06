import {GET_LIST} from '../../constants/List/List';

const initialState: any = {
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

export default function list(state: {} = initialState, action: any = {}) {
    switch (action.type) {
        case GET_LIST:
            return {
                list: action.list
            };
        default:
            return state;
    }
}
