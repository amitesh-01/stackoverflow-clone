import React from 'react';
import './rightSidebar.css';
import Widget from './Widget';
import WidgetTags from './WidgetTags';
const rightSidebar=()=>{
    return(
        <aside className='right-sidebar'>
            <Widget/>
            <WidgetTags/>
        </aside>
    )
}

export default rightSidebar;