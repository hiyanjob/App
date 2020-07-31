import React, { StyleSheet,Platform } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({

textViewResend:{
    flexDirection:'row',
    padding: 5,
    marginTop:5,
    alignItems:'center',
    justifyContent:'space-between',
    width:wp('82%'),
    marginLeft:34,
},
fotterIconImageView:{ width: wp('100%'), height: hp('9%'), marginTop:8, flexDirection: 'row', },
DashboarUserName:{
  fontSize: 20,
  fontWeight: 'bold',
  color:'#282828',
  justifyContent:'center',
  fontFamily:'ProximaNovaAltLight',
  marginRight:2,
},
//User Profile Pic like Bucket,Moment,Timeline
userPic:{ width: 65, marginLeft: 11, height: 65, marginBottom: 20, borderRadius: 5 },
//Timestamp
timeStamp:{ color: "white", fontSize: 14,fontFamily: "ProximaNovaAltBold" },

DashboardOtherName:
{
  fontSize: 14,
marginLeft:5,
color:'#5f5f61'
},
personalInfoImage:{
  height:15,
  width:15,
  opacity:0.5,
},
commonHeaderImg:{
  height:10,width:10
},
TouchableOpacityStyle:{
  position: 'absolute',
  width: 50,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  right: 30,
  bottom: 30,
},
FloatingButtonStyle: {
  resizeMode: 'contain',
  width: 85,
  height: 75,
},
footerView:{
  marginTop:'1%',
  width:'100%',  
  marginLeft:0,
  marginBottom:5,
borderBottomColor: '#f4f6f9',    
borderBottomWidth: 1,  
},
footerView1:{
  flexDirection:'row',
  margin:7,
  justifyContent:'space-around',
  height:60,
  marginVertical:18,
  marginTop:20
},
dobAlign:{
    backgroundColor:'#FFF',
    fontFamily:'Proxima-Nova',
     margin: 1,
    padding:5,
    height: hp('7%'),
    width:322,
    justifyContent:'center',
    alignItems:'flex-start',
    alignSelf:'center', 
    backgroundColor:'#FFF',
    fontFamily:'Proxima-Nova',
    marginVertical:2
},
errorText:{
  width:'80%',
  alignItems:'flex-start',
  backgroundColor:'#FFF',
  fontFamily:'Proxima-Nova',
  margin: 1,
  padding:5,
  justifyContent:'center',
  alignItems:'flex-start',
  alignSelf:'center', 
  backgroundColor:'#FFF',
  fontFamily:'Proxima-Nova',
  marginVertical:2},
touchabletxt: 
{  
    textAlign:'center', 
    justifyContent:'center',alignContent:'center',
    width:"100%",
    height:"100%",
},
followButton:{
  backgroundColor: '#87cefa',
  padding: 9,
  alignItems:'center',
  margin: 8,
  height: hp('5%'),
  width:wp('25%'),
  color:'blue',
  marginVertical:10
 },
 followButtontxt:{
  color: 'white',
  fontSize:13,
  alignItems:'center',
  textAlign:"center",
  fontFamily:'Proxima-Nova',
 },
generalInfoTextInput:{
  fontFamily:'ProximaNovaAltBold',
  fontSize:16,
  borderBottomWidth:1, 
  borderColor:'#ccc',
  width:'90%', 
  height:50,
  justifyContent:'center',
  alignItems:'center',
  marginLeft:'7%',
  marginTop:15
},
generalInfoTextInput1:{
  borderColor:'#ccc',
  width:'90%',
  borderBottomWidth:1, 
  height:35,
  justifyContent:'center',
  alignItems:'center',
  marginLeft:'7%',
  marginTop:15,
  fontFamily:'ProximaNova-Regular',
  fontSize:14,
},
generalInfoTextInputCity:{
  borderColor:'#ccc',
  width:'90%', 
  borderBottomWidth:1,
  height:35,
  justifyContent:'center',
  alignItems:'center',
  marginLeft:'7%',
  marginTop:15,
  fontFamily:'ProximaNova-Regular',
  fontSize:14,
},
generalInfoDropDown:{
    borderBottomWidth:1, 
    borderColor:'#ccc',
    width:'90%', 
    alignItems:'center',
    marginLeft:'6.5%',
   justifyContent:'center'
},
cmpanyInterstDropDown:{
  borderBottomWidth:1, 
  borderColor:'#ccc',
  width:'92%', 
  marginLeft:'5%',
  marginRight:'10%',
  justifyContent:'center',
  marginTop:10,
  marginBottom:5,
},
cmpanyInterstInputDropDown:{
  borderBottomWidth:1, 
  borderColor:'#ccc',
  width:'94%', 
  marginLeft:'4%',
  marginRight:'10%',
  justifyContent:'center',
  marginTop:5,
  marginBottom:7
},
generalInfoMthYear:{
  borderBottomWidth:1, 
  borderColor:'#ccc',
  width:'90%',
  marginRight:'2%',
  justifyContent:'center', 
  marginTop:7,
},
yassImage:{
    width:'50%',
    justifyContent:'center',
    alignItems:'center', 
    height: 80,
    marginLeft:'26%',
    marginBottom:2,
    marginTop:39,
    backgroundColor:'white'
},
button:{
    margin: 20,
    height: hp('7%'),
    width:wp('80%'),
    padding:10,
    justifyContent:'center',
    marginLeft:35,
    borderColor: 'grey',
    borderWidth: .2,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    backgroundColor:'#FAFAFA',
    marginVertical: 17,
},
LinearButton:{
        backgroundColor: '#87cefa',
        padding: 9,
        alignItems:'center',
        margin: 8,
        height: hp('8%'),
        width:wp('80%'),
        marginTop:20,
        justifyContent:'center',
        textAlign:'center',
        marginLeft:'9%',
        borderRadius:5,
        color:'blue'
},
viewSeparationInCompany:{
    width:'45%',
    height:'50%',
    marginTop:5,
    flexDirection:'row',
    justifyContent:'flex-start'
},
horizontalSeparator:{
    marginTop:'0%',
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 1,
    marginBottom:15,
},
personalBut: {
    marginVertical: 20,
    height: hp('5%'),
    width: wp('36%'),
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderWidth:1,
    fontFamily:'ProximaNova-Regular ',
    borderColor:'#e9e9ea'
  },
  personalButText: {
    color: '#000',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '6%',
    fontSize : 12,
    fontFamily:'ProximaNova-Regular' 
  },
  personalButText1: {
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '6%',
    fontSize : 12,
    fontFamily:'ProximaNova-Regular',
    fontWeight:'300', 
  },
  
  saveButton: {
    marginVertical: 20,
    marginRight:'5%',
    height: hp('5%'),
    width: wp('23%'),
    borderRadius:50,
    marginBottom:15,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  saveButtonTree: {
    marginVertical: 20,
    height: hp('5%'),
    width: wp('23%'),
    borderRadius:50,
    marginBottom:15,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  saveButtonText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
  },
  DeleteButton: {
    marginVertical: 20,
    height: hp('5%'),
    width: wp('23%'),
    borderRadius:50,
    marginRight:'5%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  deleteButtonText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
  },
  input: {
    padding:0,
    borderBottomWidth:1,
    borderColor:'#bdc2c9',
    fontSize:12,
    color:'black',
    height:50,
    fontFamily:'ProximaNova-Regular',
    marginBottom:5,
  },
  inputTree: {
    padding:0,
    borderBottomWidth:1,
    borderColor:'#dfdfe4',
    fontSize:12,
    color:'#d1d1d9',
    height:50,
    fontFamily:'ProximaNova-Regular',
    marginBottom:5,
  },
  location: {
    padding:0,
    borderBottomWidth:1,
    borderColor: '#bdc2c9',
    fontSize:14,
    color:'black',width:300,
    height:50,fontFamily:'ProximaNova-Regular'
  },




  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#bdc2c9',
    borderBottomWidth:1,
    marginTop:5,
    padding:2,
    marginBottom:5
},
profCompLogo:{
  resizeMode :'stretch',
  alignItems:'center',
  margin:8,
  width:20,
  height:20,
  marginLeft:15,
},
Imagestyle:{
    resizeMode :'stretch',
    alignItems:'center',
    width:40,
    height:40,
    marginLeft:8,
},
input1: {
    flex:1,
    padding:5,
    marginLeft:5,
  },
  ModalPicker:{ 
    borderColor: 'grey',
    borderStyle: 'solid',
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: '#FCFCFC', 
    height: hp('7%'),
    justifyContent: 'center',
    marginLeft:5,
    borderRadius:5,marginTop:10
  },

  ModalPicker1:{ 
    borderColor: 'grey',
    borderStyle: 'solid',
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: '#FCFCFC', 
    height: hp('7%'),
    justifyContent: 'center',
    marginLeft: '2%',
    borderRadius:5,marginTop:10
  },
  ModalPickerAdd:{ 

    borderColor: 'grey',
    borderStyle: 'solid',
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: '#FCFCFC', 
    height: hp('7%'),
    justifyContent: 'center',
    marginLeft: '4%',
    marginRight: '1%',
    borderRadius:5,marginTop:10
    // borderColor: 'grey',
    // borderStyle: 'solid',
    // overflow: 'hidden',
    // borderColor: 'grey',
    // backgroundColor: '#FCFCFC', 
    // height: hp('7%'),
    // justifyContent: 'center',
    // marginLeft: '4%',
    // marginRight: '1%',
    // borderRadius:5,
    // marginTop:25,
  },
  ModalPicker1:{
    borderColor:'grey',
    borderStyle: 'solid',
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor:'#FCFCFC',
    height: hp('7%'),
    justifyContent: 'center',
    marginLeft:5,
    borderRadius:5,marginTop:10
  },
  ModalPicker2:{ 
 
    borderColor: 'grey',
    borderStyle: 'solid',
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: '#FCFCFC',
    marginTop:5,
    height: hp('7%'),
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: '1%',
    borderRadius:5
  },
  dropdown:{
    width:110,
    height:50,
    justifyContent:'center',
    marginBottom:5,
    borderRadius:5
},
dropdown1:{
  backgroundColor:"#9c9b9b",
  width:90,
  height:50,
  justifyContent:'center',
  marginBottom:15,
  borderRadius:5
},
menuContainer: {
    flexDirection:'row',
    marginTop:25,
    marginRight:'5%',
    marginLeft:'5%',
  
},
modalContent1: {
    marginTop: '0%',
    // backgroundColor: "#fff",
    backgroundColor:'#f1adad',
    padding: 22,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  checkBoxText:{
    marginTop: 10,
    fontSize:14,
    marginLeft:'5%',
    color:'#3e3e3e',
    fontFamily:'ProximaNova-Regular',
    marginBottom:10
  },
  checkBoxTextPermissions:{
    marginTop: 5,
    fontSize:14,
    fontWeight:'400',
    color:'#3e3e3e',
    marginBottom:20,
    fontFamily:'ProximaNova-Regular'
  },
  permissionModalContainer: { 
      flex:1,
    justifyContent: "center",
    alignItems: "center",
  },


  permissionModalContainer_location: { 
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',width:300,height:10
},

  viewSetting:{
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        borderColor: "rgba(0, 0, 0, 0.1)",
        flexDirection : 'column',
},
persProfBut:{
  flexDirection: 'row',
  marginTop:2,
  height:17,
  justifyContent:'center',
  marginTop:8,
  marginBottom:12
},
ButtonInsideTextper:{
  color: '#fff',
  marginTop:'6%',
  justifyContent:'center',
  alignItems:'center',
  textAlign:'center',
  
  },
ButtonInsideText:{
  color: '#66757f',
  marginTop:'6%',
  justifyContent:'center',
  alignItems:'center',
  textAlign:'center',
  
  },
  ButtonInsideText1:{
    color: '#000',
    marginTop:'6%',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
    },
    ButtonInsideText2:{
      color: '#fff',
      marginTop:'8%',
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      fontSize:14,fontFamily:'ProximaNovaAltBold'
      },
      ButtonInsideText3:{
        color: '#66757f',
        marginTop:'8%',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        fontSize:14,fontFamily: 'ProximaNova-Regular'
        },
  connectButton:{
    marginTop:45,
    marginVertical: 20,
    marginLeft:'7.5%',
    height: 43,
    width: '30%',
    borderRadius:5
  },
  suggestButton:{
    marginTop:45,
    marginVertical: 20,
    height: 43,
    width: '30%',
    borderRadius:5,
    borderColor:'#69b3f6',
    backgroundColor:'#fff',
    borderWidth:1.5,
  },
  suggestText:{
    color: '#69b3f6',
    fontWeight:'600',
    fontSize:14,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
  },
  tabImages:{
    width: 22, 
    height: 22,
    marginRight:'16%',
    marginTop: 42,
  },
  profileHorizontalSeparator:{
    marginTop:1,
    width:'95%',
    marginLeft:19,
    borderBottomColor: '#c5c2cc',
    borderBottomWidth: 1,
  },
  createBucket:{
      margin: 20,
      marginVertical: 20,
      height: hp('6%'),
      textAlign:'center',
      alignItems:'center',
      borderRadius:5,
      width: wp('71%'),
      marginLeft:'15%',
      marginRight:'15%',
      fontFamily:'ProximaNova-Regular',
  },
  createBucketText:{
    color: 'white',
    marginTop:'3.5%',
  },
  fontDashboard:{
    color:'#a5b1b7',
    fontWeight:"400",
    fontFamily:'ProximaNova-Regular',
    marginTop:10
  },
  countDashboard:{
    fontWeight:'bold',
    color:'black',
    textAlign:'center',
    fontFamily:'ProximaNovaAltBold' ,
    fontSize:21
  },
  errorInput: {
    margin: 5,
    height: hp('10%'),
    width:wp('80%'),
    padding:10,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent:'center', 
    backgroundColor:'#FAFAFA',
    height:50,
    marginVertical: 8,
    fontFamily:'ProximaNova-Regular ', borderRadius:1
  },
  errorInput1: {
    margin: 5,
    height: hp('15%'),
    width:wp('80%'),
    padding:10,
    fontFamily:'ProximaNova-Regular ',
    justifyContent:'center',
    borderColor: 'red',
    borderWidth: 1, 
    overflow: 'hidden', 
    backgroundColor:'#FAFAFA',
    height:50,
    marginVertical: 7,
    borderRadius:2
  },
  signupInput: {
      margin: 5,
      padding:10,
      height: hp('7%'),
      width:315,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      borderColor: 'red',
      borderWidth: 1,
      borderStyle: 'solid', 
      overflow: 'hidden', 
      backgroundColor:'#FCFCFC',
      fontFamily:'ProximaNova-Regular ',
      marginVertical: 10,fontSize:14
   
  },
  signupInput1: {
    margin: 5,
    height: hp('7%'),
    width:148,
    padding:10,
    marginRight:15,
    justifyContent:'center',
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    backgroundColor:'#FCFCFC',
    marginVertical: 10,
    fontFamily:'ProximaNova-Regular ',
    fontSize:14
  },
  signupInput4: {
    margin: 5,
    padding:10,
    height: hp('7%'),
    width:315,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    backgroundColor:'#FCFCFC',
    fontFamily:'ProximaNovaAltBold',fontSize:14,
    marginVertical: 0
  },

addTouchableOpacity:{ borderWidth: 1, borderColor: 'transparent',alignItems: 'center',justifyContent: 'center', width: 70,position: 'absolute',bottom: 80,right: 10,height: 70, borderRadius: 100,  backgroundColor: 'transparent'},
  header:{width:"100%",height:84},

  img_bg:{flex: 1,height:180,width:'100%'},

  tab_bar:{width:"100%",height:68,backgroundColor:'#fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},

  tab_icon:{flex: 1, flexDirection: 'row',width:'25%',height:20, alignItems: 'center', justifyContent: 'center'},

  image_frame:{width:'100%',height:308,backgroundColor:'#678183'},

  frame_img:{width:54,height:54,borderRadius: 10,backgroundColor:'#f45d1a',margin:14,},

  img_txt:{width:200,height:100,justifyContent:'center',alignContent: 'center',flex:1,flexDirection:'row'},
 

  marginTopAnd: Platform.OS === "ios" ? { marginTop: 0 } : { marginTop: 0 }
});