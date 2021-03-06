import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  createAppContainer,
} from 'react-navigation';
import {
  createDrawerNavigator,
  DrawerItems,
} from 'react-navigation-drawer';
import {
  createStackNavigator,
} from 'react-navigation-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';

import PropTypes from 'prop-types';
import styles from './styles';
import LogoutButton from '../../components/LogoutButton';

import Home from '../../components/Home';
import Complaint from '../../components/Complaint';
import AlertForm from '../../components/AlertForm';
import SimpleList from '../../components/SimpleList';
import DocumentDetail from '../../components/DocumentDetail';
import ComplaintDetail from '../../components/ComplaintDetail';
import Profile from '../../components/Profile';
import ProfileEdit from '../../components/ProfileEdit';
import Onboarding from '../../components/Onboarding';
import ComplaintList from '../../components/ComplaintList';
import TermsAndConditions from '../../components/TermsAndConditions';
import Generic from '../../components/Generic';
import { displayName } from '../../../app.json';

class NavigationDrawerStructure extends React.Component {
  render() {
    const { navigationProps } = this.props;
    return (
      <SafeAreaView
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <View >
          <TouchableOpacity onPress={navigationProps.toggleDrawer}>
            <FontAwesome5 name="bars" style={styles.bars} size={22} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const TabStackNavigator = createStackNavigator({
  TabFirst: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: displayName,
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f50057',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
  TabSecond: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: displayName,
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f50057',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
  TabThird: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: displayName,
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f50057',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});

const ProfileStackNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Perfil',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f50057',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
      headerRight: () => (
        <>
          <Button
            title="Editar"
            onPress={() => { navigation.navigate('ProfileEdit'); }}
            type="clear"
            titleStyle={{ color: 'white' }}
          />
        </>
      ),
    }),
  },
  ProfileEdit: {
    screen: ProfileEdit,
    navigationOptions: ({ navigation }) => ({
      title: 'Editar datos de perfil',
      headerStyle: {
        backgroundColor: '#f50057',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});

const ComplaintsStackNavigator = createStackNavigator({
  Complaints: {
    screen: Complaint,
    navigationOptions: ({ navigation }) => ({
      title: 'Cargar denuncia',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f50057',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});

const ComplaintListStackNavigator = createStackNavigator({
  ComplaintList: {
    screen: ComplaintList,
    navigationOptions: ({ navigation }) => ({
      title: 'Mis denuncias',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f50057',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
  ComplaintDetail: {
    screen: ComplaintDetail,
    navigationOptions: ({ navigation }) => ({
      title: 'Denuncia',
      headerStyle: {
        backgroundColor: '#f50057',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});



const DocListStackNavigator = createStackNavigator({
  SimpleList: {
    screen: SimpleList,
    navigationOptions: ({ navigation }) => ({
      title: 'Documentos',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f50057',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
  DocumentDetail: {
    screen: DocumentDetail,
    navigationOptions: ({ navigation }) => ({
      title: 'Documento',
      headerStyle: {
        backgroundColor: '#f50057',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});



const OnboardingStackNavigator = createStackNavigator({
  Onboarding: {
    screen: Onboarding,
    navigationOptions: ({ navigation }) => ({
      title: 'Ayuda',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f50057',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});

const AlertFormStackNavigator = createStackNavigator({
  AlertForm: {
    screen: AlertForm,
    navigationOptions: ({ navigation }) => ({
      title: 'Nueva alerta',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f50057',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});

const TermsStackNavigator = createStackNavigator({
  TermsAndConditions: {
    screen: TermsAndConditions,
    navigationOptions: ({ navigation }) => ({
      title: 'T??rminos y condiciones',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f50057',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  }
});

const InfoStackNavigator = createStackNavigator({
  ComplaintsInfo: {
    screen: Generic,
    navigationOptions: ({ navigation }) => ({
      title: 'Informaci??n legal',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f50057',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigator = createDrawerNavigator({
  Tabs: {
    screen: TabStackNavigator,
    navigationOptions: {
      drawerLabel: 'Inicio',
      drawerIcon: () => (
        <FontAwesome5 name="home" size={15} />
      ),
    },
  },

  Profile: {
    screen: ProfileStackNavigator,
    navigationOptions: {
      drawerLabel: 'Perfil',
      drawerIcon: () => (
        <FontAwesome5 name="user-ninja" solid size={15} />
      ),
    },
  },

  Complaints: {
    screen: ComplaintsStackNavigator,
    navigationOptions: {
      drawerLabel: 'Cargar denuncia',
      drawerIcon: () => (
        <FontAwesome5 name="burn" size={15} />
      ),
    },
  },

  ComplaintList: {
    screen: ComplaintListStackNavigator,
    navigationOptions: {
      drawerLabel: 'Mis denuncias',
      drawerIcon: () => (
        <FontAwesome5 name="fire-alt" size={15} />
      ),
    },
  },

  SimpleList: {
    screen: DocListStackNavigator,
    navigationOptions: {
      drawerLabel: 'Documentos',
      drawerIcon: () => (
        <FontAwesome5 name="file-alt" size={15} />
      ),
    },
  },

  AlertForm: {
    screen: AlertFormStackNavigator,
    navigationOptions: {
      drawerLabel: 'Cargar alerta',
      drawerIcon: () => (
        <FontAwesome5 name="map" size={15} />
      ),
    },
  },

  TermsAndConditions: {
    screen: TermsStackNavigator,
    navigationOptions: {
      drawerLabel: 'T??rminos y condiciones',
      drawerIcon: () => (
        <FontAwesome5 name="book" solid size={15} />
      ),
    },
  },

  Information: {
    screen: InfoStackNavigator,
    navigationOptions: {
      drawerLabel: 'Informaci??n legal',
      drawerIcon: () => (
        <FontAwesome5 name="balance-scale" solid size={15} />
      ),
    },
  },

},
{
  contentComponent: (props) => (
    <SafeAreaView forceInset={{ horizontal: 'never' }} style={{ flex: 1 }}>
      <Image source={require('../../assets/images/header.jpg')} style={styles.itemPhoto}/>
      <ScrollView>
        <DrawerItems {...props} />
        <LogoutButton />
      </ScrollView>
      <View>
        <Image source={require('../../assets/images/fes.png')} style={styles.footerLogo}/>
      </View>
    </SafeAreaView>
  ),
});

NavigationDrawerStructure.propTypes = {
  navigationProps: PropTypes.object.isRequired,
};

SimpleList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const nav = createAppContainer(DrawerNavigator);

export default nav;
