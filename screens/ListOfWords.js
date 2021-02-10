import React from 'react';
import {Button, FlatList,  Text, View, Image} from 'react-native';
import dictionary from '../databaseArray';

export default class ListOfWords extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      list:dictionary,
      keyid:0,
    
    }
  }

  showitem= ()=>{
    for(var i=0;i<5;i++){
      this.setState({keyid:this.state.keyid+1})
    }
  }

  render(){

    return(
      <View style={{flex: 1, paddingTop:20, backgroundColor: 'forestgreen'}}>

        <FlatList
          data={this.state.list}
          renderItem={({item}) => (
            <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-between', 
              alignItems:'center', padding:10, backgroundColor: 'lawngreen', margin: 10}}>
              <Text>{item.word}</Text>
              <Text>{item.inSanskrit}</Text>
              <Text>{item.SanskritScript}</Text>
              </View>
            )}
            
          keyExtractor={(item, index) => index}
        />

      </View>
    );
  }
}
