import { handleActions } from 'redux-actions';
const defaultState = {
    starList: [],
    virtual_item:1,
    page:1,
    limit:20
}
export default handleActions({
    star_action: (state, action) => {
        // console.log(state, action);
        let newStarState = JSON.parse(JSON.stringify(state));
        newStarState.starList = [...newStarState.starList,...action.value.items];
        newStarState.starList.splice(4,1)
        for(var i=0;i<newStarState.starList.length;i++){
            newStarState.starList[i].goodsList=newStarState.starList[i].goods[0];
        }
        // console.log(newStarState.starList)
        newStarState.page++;
        return newStarState;
    }
}, defaultState)