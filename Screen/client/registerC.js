import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View , ImageBackground ,ScrollView,SafeAreaView, Image , TextInput ,TouchableOpacity} from 'react-native';
//import bgImage from './assets/logo.jpg'
import InputField from '../components/InputField';
import { Dimensions, input } from 'react-native-web';
import Icon from 'react-native-vector-icons/Ionicons'
import { Component } from 'react/cjs/react.production.min';
const {width:WIDTH} =Dimensions.get('window')
import client from '../../assets/regis.png'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';

//import {AuthContext} from '../contexte/AuthContext';
const RegisterClient = ({navigation}) => { 
    const [cin, setCin] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [Num_tel, setNumero] = useState('');
    const [email, setEmail] = useState('');
    const [Adr, setUsename] = useState('');
  const [MPass, setPassword] = useState('');

  async function AddClient(){

    
      
      fetch("http://192.168.43.230:3001/utilisateur/register" , {
          method: 'POST',
        
          headers:{
              "Content-Type" : 'application/json',
             
          },
          body:JSON.stringify({
            cin:cin,
            nom:nom,
            prenom:prenom,
            Num_tel:Num_tel,
            email:email,
            Adr:Adr,
            
            MPass:MPass,
            role:'client'




          }),

        
      }).then(res=>res.json())
      .then(async data=>{
        if(data){
         if(data.Adr!='' && data.MPass!=''){
          navigation.navigate('LoginC')
        }}
        
      })
      .catch(err=>{
        console.log(err)
      });
     
      
     
  }
 
  return (
    
     
      <ScrollView   showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25 }}>
          
       
          

    
            <View style={styles.container1}>
                <Image source={client} style={styles.logo} />
                <Text style={styles.text_header}>Register</Text>
        </View>
     
        <InputField
          label={'Nom'}
          icon={
            <Ionicons
              name="person"
              size={20}
              color="#666"
              style={{marginRight: 10}}
            />
          }
          onChangeText={text => setNom(text)}
        />
         
         <InputField
          label={'Prenom'}
          icon={
            <Ionicons
              name="person"
              size={20}
              color="#666"
              style={{marginRight: 10}}
            />
          }
        
        onChangeText={text => setPrenom(text)}
        />
     
     
         <InputField
          label={'Cin'}
          icon={
            <Ionicons
              name="person"
              size={20}
              color="#666"
              style={{marginRight: 10}}
            />
          }
         
        onChangeText={text => setCin(text)}
        />
    
    
   
     
     
    
  
  <InputField
          label={'Numéro de téléphone'}
          icon={
            <Ionicons
              name="call"
              size={20}
              color="#666"
              style={{marginRight: 10}}
            />
          }
        
        onChangeText={text => setNumero(text)}
        />
    
    <InputField
          label={'Email '}
          icon={
            <MaterialIcons
              name="mail"
              size={20}
              color="#666"
              style={{marginRight: 10}}
            />
          }
          keyboardType="email-address"
       
        onChangeText={text => setEmail(text)}
        />
   
    
     
     
   <InputField
          label={'Username'}
          icon={
            <Ionicons
              name="person"
              size={20}
              color="#666"
              style={{marginRight: 10}}
            />
          }
         
        onChangeText={text => setUsename(text)}
        />
    
    
  
     
     
     
      
    
       
  <InputField
          label={'Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="black"
       
              style={{marginRight: 10}}
            />
          }
          inputType="password"
       
        onChangeText={text => setPassword(text)}
        required
        
        />
        
        
        
     
        <CustomButton label={'Register'} onPress={() => {
            AddClient();
          }} /> 
      
      <View style={{flexDirection: 'row', marginTop: 20 ,marginBottom:30}}>
          <Text>Already have an accoutn? </Text>
          <TouchableOpacity >
            <Text style={styles.link} onPress={() => navigation.navigate('LoginC')}>Login</Text>
          </TouchableOpacity>
        </View>
  
       
        
    </ScrollView>
    
   
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width : null,
    height: null,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_header: {
    color: "#4A919E",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf:'center',
    marginBottom:20
  },
  scrollView: {
    backgroundColor: 'pink',
    marginVertical: 10,
  },
  icon:{
  
    top:8,
    left:37,
  },
  btnLogin:{
width: 200,
height : 45,
borderRadius : 25,
backgroundColor: 'black',
justifyContent: 'center',
marginTop : 20,
  },
  TextBtn :{
    color : 'white',
    fontSize:16,
    textAlign: 'center'
  },
  link: {
    color: '#4A919E',
  },
  input:{
    width:300,
    height:45,
    marginTop:10,
    marginBottom:10,
    borderRadius:25,
    fontSize:10,
    paddingLeft:45,
    backgroundColor: '#f5f5f5',
    color: 'black',
    marginHorizontal : 15

  },
  logoContainer:{
alignItems:'center'
},
btnEye:{

  top:17,
  right:60,
}
,
logoText:{
  color:'black',
fontWeight:600,
  fontSize:20,
  fontWeight:'400',
  marginTop:10,
  opacity:0.5,
  marginBottom:10
},
container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:230,
    height:180,

  
   
  }
});
export default RegisterClient;