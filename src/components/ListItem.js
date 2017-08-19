import React from 'react';
import PropTypes from 'prop-types';
const style = {
    border: '1px solid black',
    position: 'relative'
}

class ListItem extends React.Component{

    constructor(){
        super();
        this.state = {
            toggled: false
        };
    }

    toggle(){
        if(this.state.toggled)
            this.props.update(this.props.data.id, this.name.value);

        this.setState({toggled: !this.state.toggled});

        


    }

    render(){
        const { data, remove } = this.props;

        return( 
            <div style={style}>
                <div onDoubleClick={() => this.toggle()}>
                    {!this.state.toggled &&
                        <span>{data.name}</span>
                    }
                    {this.state.toggled &&
                        <input 
                            type="text" 
                            defaultValue={data.name} 
                            ref={input => this.name = input} />
                    }
                    
                </div>
                <div style={{position: 'absolute', left: '90%', top:0}}>
                    <button onClick={() => remove(data.id)}>X</button>
                </div>
            </div>     
        );
    }

}
    ListItem.propTypes = {
        data: PropTypes.object.isRequired,
        remove: PropTypes.func.isRequired
};

export default ListItem;