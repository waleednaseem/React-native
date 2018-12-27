import React, {Component} from 'react';
import {StyleSheet,
 Text,
 View,
 TouchableOpacity } from 'react-native';

export default class Note extends Component<Props> {
  render() {
    return (
	     <View key={this.props.keyval} style={styles.note}>
	     		<Text style={styles.noteText}>
	     			{this.props.val.date}
	     		</Text>
	     		<Text style={styles.noteText}>
	     			{this.props.val.note}
	     		</Text>
	     		<TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
	     			<Text style={style.noteDeleteText}>
	     				Delete
	     			</Text>
	     		</TouchableOpacity>
	     </View> 
    );
  }
} 

const styles = StyleSheet.create({
  	note:{
  		position:'relative',
  		padding: 20,
  		paddingRight: 100,
  		borderBottomWidth: 2,
  		borderBottomColor:'#ededed'
  	},
  	noteText:{
  		paddingLeft: 20,
  		borderLeftWidth: 10,
  		borderLeftColor: '#E91E63'
  	},
  	noteDelete:{
  		position: 'absolute',
  		justifyContent:'center',
  		alignItems:'center',
  		backgroundColor:'green',
  		padding: 10,
  		top: 10,
  		bottom: 10,
  		right: 10,

  	},
  	noteDeleteText:{
  		color:'white'
  	}
});