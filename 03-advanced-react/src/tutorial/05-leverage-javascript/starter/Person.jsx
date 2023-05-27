import avatar from '../../../assets/default-avatar.svg';
import React from "react";
export function Person({name, nickName='Young-Money', images}) {

    // if images exist,get me the first one
    //const img = images && images[0] && images[0].small && images[0].small.url;
    // another method is using optional chaining in javascript
    const img = images?.[0]?.small?.url || avatar;

    return ( 
    <div>
       <img src={img} alt={name} style={{width: '50px'}} />
        <h4>{name}</h4>
        <p>Nickname: {nickName}</p>
    </div>
    );
}
