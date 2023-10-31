/* eslint-disable react/prop-types */
import React from 'react';
import Emoji from './Emoji';


function EmojiList({ emojis, search }) {
  
  const uniqueGroups = Array.from(new Set(emojis.map(emoji => emoji.group)));
  
  return (
    <div className="container text-center ">
      {
        uniqueGroups.map(group => {
          if (search && group.toLowerCase().includes(search.toLowerCase())) {
            return (
                <div className='text-capitalize' key={group}><h1>{group.replace(/-/g, ' ')}</h1>
                <Emoji  group={group} emojis={emojis}/>
                
                </div>
                
            );
          } else if (!search) {
            return (
                <div className='text-capitalize' key={group}><h1 className='m-3'>{group.replace(/-/g, ' & ')}</h1>
                <Emoji  group={group} emojis={emojis}/>
                
                </div>
            );
          }
          return null;
        })
      }
    </div>
  );
}


export default EmojiList;
