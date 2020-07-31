import { createStackNavigator, createAppContainer, DrawerNavigator, createDrawerNavigator } from 'react-navigation';
import SignUp from './app/component/SignUp';
import Login from './app/component/Login';
import ForgotPassword from './app/component/ForgotPassword';
import SelectOptions from './app/component/SelectOptions';
import Profile from './app/component/Profile';
import Splash from './app/component/Splash';
import ChangePassword from './app/component/ChangePassword';
import ChangePasswordMbl from './app/component/ChangePasswordMbl';
import UpdatePassowrd from './app/component/UpdatePassowrd';
import newprofile from './app/component/newprofile';
import friends from './app/component/friends';
import map from './app/component/map';
import users from './app/component/users';
import home from './app/component/home';
import FriendReq from './app/component/FriendReq';
import privateChat from './app/component/privateChat';
import RoomSelection from './app/component/RoomSelection';
import privateMessage from './app/component/privateMessage';
import singleChat from './app/component/singleChat';
import pop from './app/component/pop';
import ChatApp from './app/component/ChatApp';
import gift from './app/component/gift';
import ChatFlat from './app/component/ChatFlat';
import chat from './app/component/chat';
import ChatAppNew from './app/component/ChatAppNew';
import FlatListChatSample from './app/component/FlatListChatSample';
import Rewards from './app/component/Rewards';
import Settings from './app/component/Settings';
import Notifications from './app/component/Notifications';
import Others_profile from './app/component/Others_profile';
import logout from './app/component/logout';

const AppNavigator = createStackNavigator({

    Splash: { screen: Splash },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    ForgotPassword: { screen: ForgotPassword },
    SelectOptions: { screen: SelectOptions },
    ChangePassword: { screen: ChangePassword },
    ChangePasswordMbl: { screen: ChangePasswordMbl },
    Profile: { screen: Profile },
    newprofile: { screen: newprofile },
    Others_profile: { screen: Others_profile },
    home: { screen: home },
    privateChat: { screen: privateChat },
    gift: { screen: gift },
    FriendReq: { screen: FriendReq },
    UpdatePassowrd: { screen: UpdatePassowrd },
    friends: { screen: friends },
    map: { screen: map },
    users: { screen: users },
    singleChat: { screen: singleChat },
    RoomSelection: { screen: RoomSelection },
    privateMessage: { screen: privateMessage },
    ChatApp: { screen: ChatApp },
    singleChat: { screen: singleChat },
    Rewards: { screen: Rewards },
    Settings: { screen: Settings },
    Notifications: { screen: Notifications },
    logout: { screen: logout },
});
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
