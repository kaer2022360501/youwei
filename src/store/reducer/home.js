import { handleActions } from 'redux-actions';
const defaultState = {
    homeList: {}
}
export default handleActions({
    home_action: (state, action) => {
        console.log(state, action);
        let newStarState = JSON.parse(JSON.stringify(state));
        // let obj={};
        // obj.items=action.value.items;
        // obj.page=action.value.page;
        // obj.popularItems=action.value.popularItems;
        newStarState.starList = action.value;
        console.log(newStarState.starList)
        return newStarState;
    },
    home_star_action:(state,action)=>{
        let newStartState=JSON.parse(JSON.stringify(state));
        newStartState.startList=action.value;
        return newStartState;
    }
}, defaultState)
