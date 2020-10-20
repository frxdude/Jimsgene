import React from 'react';
import { Text } from 'react-native';

const MText = (props) => {
    return(
        <Text style={{fontSize:props.size}}>
            {props.text}
        </Text>
    )
}
export default MText;