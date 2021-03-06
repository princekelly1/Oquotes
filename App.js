import React, { Component } from "react";
import {View,Text,StyleSheet,ScrollView,Image} from "react-native";
import { Container, Content, Icon, Header, Body } from 'native-base'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import HomeScreen from "./src/pages/HomeScreen";
import LoginScreen from "./src/pages/Login";
import SignupScreen from "./src/pages/Signup";
import LogoutScreen from "./src/pages/Logout";
import ProfileScreen from "./src/pages/Profile";
export default class App extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
      <MyApp />
    )
  }

}

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
        <Image
          style={styles.drawerImage}
          source={require('./src/assets/images/logo2.png')} />
    </Header>
    <Content>
    <DrawerItems {...props} />
    </Content>
  </Container>

);

const MyApp = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Login: {
    screen: LoginScreen
  },
  Signup: {
    screen: SignupScreen
  },
  Home: {
    screen: HomeScreen
  },
  Profile: {
    screen: ProfileScreen
  },
  Logout: {
    screen: LogoutScreen
  }
},
  {
    initialRouteName: 'Login',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 150,
    backgroundColor: '#455a64'
  },
  drawerImage: {
    height: 150,
    width: 150,
  }

})
