const initialState = {
    numbersCode: '',
    screenClass: ['access-screen']
};

const PIN_CODE = '7788';

const reducer = (state = initialState, action) => {

    let newNumbersCode = state.numbersCode;
    let screenClass = [...state.screenClass];

    switch (action.type) {
        case 'ADD':
            if (state.numbersCode.length < 4) {
                newNumbersCode += action.value;
            }
            return {...state, numbersCode: newNumbersCode};
        case 'REMOVE':
            if (state.numbersCode.length > 0) {
                newNumbersCode = state.numbersCode.slice(0, state.numbersCode.length - 1);
            }
            if (screenClass.includes('active')) {
                screenClass.pop('active');
            }
            return {...state, numbersCode: newNumbersCode, screenClass: screenClass};
        case 'CONTROL_ENTER_CODE':
            if(state.numbersCode === PIN_CODE) {
               screenClass.push('active');
            }
            return {...state, screenClass: screenClass};
        default:
            return state;
    }
};

export default reducer;
