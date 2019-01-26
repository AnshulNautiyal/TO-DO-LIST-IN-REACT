import React from 'react';


const List = ({toDoItem, handleDelete}) => {
    
    const items = toDoItem.length > 0 ? 
                    toDoItem.map((item,index) => {
                        return (
                            <div className="card" key={item.id}>    
                                <header className="card-header" >
                                    <p className="card-header-title">
                                        {item.task}
                                        
                                    </p>
                                    <button className="delete" style={{ margin: '.8rem' }} onClick={() => handleDelete(item.id)}></button>
                                   
                                </header>
                                
                            </div>
                        )
                    }) :

                    (
                        <div className="notification is-primary has-text-weight-bold">
                            Yepeeeeee!!!! Your To Do List Is Empty.<span role="img" aria-label="smiley">😀</span>
                        </div>
                    );
    
    return (
        
        <div className="section">
            <div className="container"> 
                {items}
            </div>
        </div>
            
        
    )
}

export default List;