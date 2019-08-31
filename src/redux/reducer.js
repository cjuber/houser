const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip:'',
    img:'',
    mortgage: '',
    rent: '',
    houses: []
}

export const STEPONENAME = 'STEPONENAME'
export const STEPONEADDRESS = 'STEPONEADDRESS'
export const STEPONECITY = 'STEPONECITY'
export const STEPONESTATE = 'STEPONESTATE'
export const STEPONEZIP = 'STEPONEZIP'
export const STEPTWOIMG = 'STEPTWOIMG'
export const STEPTHREEMORTG = 'STEPTHREEMORTG'
export const STEPTHREERENT = 'STEPTHREERENT'
export const CANCEL = 'CANCEL'

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case STEPONENAME:
            return Object.assign({},state,{ name: action.payload})
        case STEPONEADDRESS:
            return Object.assign({},state,{ address: action.payload})
        case STEPONECITY:
            return Object.assign({},state,{city: action.payload})
        case STEPONESTATE:
            return Object.assign({},state,{state: action.payload})
        case STEPONEZIP:
            return Object.assign({},state,{zip: action.payload})
        case STEPTWOIMG:
            console.log(action.payload)
            return Object.assign({},state,{img: action.payload})
        case STEPTHREEMORTG:
            return Object.assign({},state,{mortgage: action.payload})
        case STEPTHREERENT:
            return Object.assign({},state,{rent: action.payload})
        case CANCEL:
            return Object.assign({}, state, {name: action.payload, address: action.payload, city: action.payload, state: action.payload, zip: action.payload, img: action.payload, mortgage: action.payload, rent: action.payload})
        

        default:
            return state
    }
}
export default reducer