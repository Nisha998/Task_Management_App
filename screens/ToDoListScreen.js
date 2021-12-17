import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet,Alert} from 'react-native';
//import {firebase} from '@firebase/firestore';
import db from '../config';
import firebase from 'firebase';


export default class ToDoListScreen extends React.Component {
  constructor(){
    super();
    this.state={
     userId : firebase.auth().currentUser.email,
     taskDescription:"",
     time:"",
     date:""
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }

addTask = async (taskDescription,time,date)=>{
    var userId = this.state.userId
    var randomRequestId = this.createUniqueId()
    db.collection('tasks').add({
        "user_id": userId,
        "task_Description":taskDescription,
        "Date":date,
        "Time"  : time,
        "task_status" : "inProgress",
        

    })

 this.setState({
        taskDescription :'',
        date : '',
        time:'',
        requestId: randomRequestId
    })

    return Alert.alert("Task Added Successfully")


  }

  componentDidMount(){
    this.addTask();
    
  }
  render(){
    
      return(
        <View style={styles.container}>
        <View>
          <Image
            source = {require("../images/todologo.png")}
            style= {{width:200, height:200}}/>
          <Text style={{textAlign:'center', fontSize:30,}}>To Do List</Text>
        </View>
        <View style={styles.inputView}>
        <TextInput
          style={styles.inputBox}
           multiline
          numberOfLines ={8}
          placeholder={"Task Description"}
          onChangeText={(text)=>{
                    this.setState({
                        taskDescription:text
                    })
                }}
                value={this.state.taskDescription}
          />
        
        </View>

        <View style={styles.inputView}>
        <TextInput
          style={styles.inputBox}
          placeholder={"Date"}
          onChangeText={(text)=>{
                    this.setState({
                        date:text
                    })
                }}
                value={this.state.date}
          />
      
   
        
        </View>

        <View style={styles.inputView}>
        <TextInput
          style={styles.inputBox}
          placeholder="Time"
          onChangeText={(text)=>{
                    this.setState({
                        time:text
                    })
                }}
                value={this.state.time}
          />
        
        </View>
        <Text style={styles.transactionAlert}></Text>

        <TouchableOpacity
          style={styles.submitButton}
          
            onPress={()=>{ this.addTask(this.state.taskDescription,this.state.date,this.state.time);
          }}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

         <TouchableOpacity
          style={styles.submitButton}
          onPress={async()=>{
            
          }}>
          <Text style={styles.submitButtonText}>Update</Text>
          
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitButton}
          
            onPress={()=>{ 
          }}>
          <Text style={styles.submitButtonText}>Delete</Text>
          
        </TouchableOpacity>
      </View>
      )
    }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
 /* displayText:{
    fontSize: 15,
    textDecorationLine: 'underline'
  },*/
  
  inputView:{
    flexDirection: 'row',
    margin: 20
  },
  inputBox:{
    width: 300,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
  
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:50
  },
  submitButtonText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'white'
  }
});
