import React from 'react';
import {StyleSheet,Button, FlatList,  Text, View, Image,TouchableOpacity} from 'react-native';
import dictionary from '../databaseArray';

export default class ScrollWords extends React.Component {

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
      <View style={{flex: 1, paddingTop:20, backgroundColor: 'lightblue'}}>

        

       
        <Text style={styles.heading}>Some English words and their Sanskrit translations</Text>
        <Text style={styles.word}>{this.state.list[this.state.keyid].word}</Text>
        <Text style={styles.SanskritScript}>{this.state.list[this.state.keyid].SanskritScript}</Text>
        <Text style={styles.inSanskrit}>{this.state.list[this.state.keyid].inSanskrit}</Text>
        <Button title="Next" onPress={this.showitem} style= {styles.button} color="green"/ >
      </View>
    );
  }
}


const styles = StyleSheet.create({
  heading:{
    marginTop: 80,
    alignSelf:'center',
    paddingBottom: 30,
    fontWeight: 'bold',
    fontSize:14,
  },
  word: {
    alignSelf:'center',
    fontSize:30,
    marginTop: 80,
  },
  inSanskrit: {
    alignSelf:'center',
    paddingBottom: 70,
    fontSize:30,
  },
  SanskritScript:{
    alignSelf:'center',
    fontWeight: 'bold',
    marginTop: 0,
    fontSize:30,
  },
  button:{
    marginTop: 60,
  }
});