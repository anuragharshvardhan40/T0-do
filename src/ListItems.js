import React from 'react';
import './ListItem.css'

function ListItems(props){
    const items = props.items;
    const ListItems =items.map(items =>
        {
          return <div className = "list" keys = "items.key">
           <p>{items.text}</p>
          </div>
        })
    return(
       <div>{ListItems}</div> 
    )
}

export default ListItems;