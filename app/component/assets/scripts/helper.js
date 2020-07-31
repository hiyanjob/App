import { AsyncStorage,NetInfo } from "react-native"
import { Toast } from 'native-base';



export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
       
        // Error saving data
    }
}

export const retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return await value;
    } catch (error) {
      
        // Error retrieving data
    }
}

export const clearData = async () => {
    try {
        const value = await AsyncStorage.clear();
        return await value;
    } catch (error) {
       
        // Error retrieving data
    }
}

export const toastMsg = async (type, msg) => {
   
   
   
   
    Toast.show({
        style:24,
        position: "top",
        text: msg,
      //  buttonText: "Okay",
        type: type,
        textStyle: { color: "#fff", fontSize: 14 },
        duration: 5000,
        // style: {
        //     backgroundColor: "#2ecce1"
        //    }
    });
}

export const internetconnection = async () => {

    NetInfo.isConnected.fetch().then((isConnected) => {
    
        if (isConnected == true) {
            toastMsg("success", "Successful");
        } else {
            toastMsg("danger", "Check Your Internet Connection");
        }
    });
}



