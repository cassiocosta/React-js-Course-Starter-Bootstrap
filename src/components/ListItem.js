import React from 'react';
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
            this.props.update(this.props.data.name, this.name.value);

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
                    <button onClick={() => remove(data.name)}>X</button>
                </div>
            </div>     
        );
    }

}

export default ListItem;