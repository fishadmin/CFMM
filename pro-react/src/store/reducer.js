// export default (state,action)=>{
//   let {type,payload}=action;
//   switch (type){
    // case 'VIEW_NAV':
    //   return Object.assign({},state, {bNav:payload});
    // case 'VIEW_FOOT':
    //   return Object.assign({},state, {bFoot:payload});
    // case 'VIEW_LOADING':
    //   return Object.assign({},state, {bLoading:payload});
    // case 'UPDATE_HOME':
    //   return Object.assign({},state, {homeData:payload});
    // case 'UPDATE_SPEAK':
    //   return Object.assign({},state, {speakData:payload});
    // case 'UPDATE_USER':
    //   return Object.assign({},state, {user:payload});
    // default:
    //   return state;
//   }
// }

const reducer = (state,action) => {
  let {type,payload}=action;
  switch (type){
    // case 'SHOW_NAV':
    //   return Object.assign({},state,{
    //     bNav:true
    //   });
    //   break;
    // case 'HIDE_NAV':
    //   return Object.assign({},state,{
    //     bNav:false
    //   });
    //   break;
    case 'SHOW_FOOT':
      return Object.assign({},state,{
        bFoot:true
      });
      break;
    case 'HIDE_FOOT':
      return Object.assign({},state,{
        bFoot:false
      });
      break;
    case 'VIEW_LOADING':
      return Object.assign({},state, {bLoading:payload});
    case 'SHOW_LOADING':
      return Object.assign({},state,{
        bLoading:true
      });
      break;
    case 'HIDE_LOADING':
      return Object.assign({},state,{
        bLoading:false
      });
      break;
    case 'UPDATE_HOME':
      return Object.assign({},state,{
        homeData:payload
      });
    case 'UPDATE_SPEAK':
      return Object.assign({},state,{
        speakData:payload
      });
    case 'CLEAR_HOME':
      return Object.assign({},state,{
        homeData:[]
      });
    case 'CLEAR_SPEAK':
      return Object.assign({},state,{
        speakData:[]
      });
    case 'ADD_ITEM':
      let find=false;
      state.buyCar.forEach((item,index)=>{
        if(item.id===payload.id){
          find=true;
          item.number++;
        }
      });
      if(!find){
        payload.number=1;
        state.buyCar.push(payload);
      }
      return Object.assign({},state,{
        buyCar:[...state.buyCar]
      });
    case 'REMOVE_ITEM':
      // console.log('reducer66',payload);
      state.buyCar.forEach((item,index)=>{
        if(item.id===payload.id){
          state.buyCar.splice(index,1);
        }
      });
      // console.log(state.buyCar);
      return Object.assign({},state,{
        buyCar:[...state.buyCar]
      });
    case 'REMOVE_ALL':
      return Object.assign({},state,{
        buyCar:[]
      });
    case 'CHECK_ARR':
      return Object.assign({},state,{
        arr:payload
      });
    default:
      return state;
  }
};



export default reducer;