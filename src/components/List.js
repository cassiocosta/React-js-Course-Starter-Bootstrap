import React from 'react';
import ListItem from './ListItem';




class List extends React.Component{
    render(){
        const { data, remove, update} = this.props;
        return(
            <div>      
            {                
                data.map((item,i) => {
                    return (
                        <ListItem key={i}  data={item} remove={remove} update={update}/>
                    );
                })                
            }    
            </div>
        );
    }

}

export default List;