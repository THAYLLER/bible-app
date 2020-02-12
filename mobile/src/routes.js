import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Bible from './pages/Bible';
import Devotional from './pages/Devotional';
import Glossary from './pages/Glossary';
import Messages from './pages/Messages';
import Books from './pages/Books';
import Verses from './pages/Verses';
import Chapters from './pages/Chapters';

const Routes = createAppContainer(

  createStackNavigator({

    Main: {
      screen: Main,
      navigationOptions: {
        title: 'A fonte'
      }
    },
    Bible: {
      screen: Bible,
      navigationOptions: {
        title: 'A fonte - Bíblia'
      }
    },
    Books: {
      screen: Books,
      navigationOptions: {
        title: 'A fonte - Livros'
      }
    },
    Chapters: {
      screen: Chapters,
      navigationOptions: {
        title: 'A fonte - Capitúlos'
      }
    },
    Verses: {
      screen: Verses,
      navigationOptions: {
        title: 'A fonte - Versículos'
      }
    },
    Devotional: {
      screen: Devotional,
      navigationOptions: {
        title: 'A fonte - Devocional'
      }
    },
    Glossary: {
      screen: Glossary,
      navigationOptions: {
        title: 'A fonte - Glossário'
      }
    },
    Messages: {
      screen: Messages,
      navigationOptions: {
        title: 'A fonte - Menssagens'
      }
    }
  },{
    defaultNavigationOptions: {
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#1E90FF',
        }
    }
  })
);

export default Routes;