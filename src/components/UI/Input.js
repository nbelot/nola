import React, {useState} from 'react';

const input = props => {
    const [dirty, setDirty] = useState(false);
    const [valid, setValid] = useState(true)
    let inputElement = null;

    const changeInputHandler = event => {
        props.changed(event);
        setDirty(true);
        if(props.required) {
            if(event.target.value.trim() === '') {
                setValid(false);
            } else {
                setValid(true);
            }
        }
    }

    switch ( props.eleType ) {
        case ( 'input' ):
            inputElement = <input
                placeholder={props.placeholder}
                value={props.value}
                onChange={changeInputHandler} />;
            break;
        case ('textarea') :
            console.log('TBD')


    }

    return (
        <React.Fragment>
            {inputElement}
            {dirty && !valid ? <div>This field is required</div> : null}
        </React.Fragment>
    )
}

export default input;