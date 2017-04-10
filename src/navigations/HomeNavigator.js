import { StackNavigator } from 'react-navigation';
import Home from '../containers/Home';
import Detail from '../containers/Detail';
import UserDetail from '../containers/UserDetail';
import IllustComments from '../containers/IllustComments';
import UserIllust from '../containers/UserIllust';
import UserManga from '../containers/UserManga';
import UserBookmarkIllust from '../containers/UserBookmarkIllust';
import RelatedIllusts from '../containers/RelatedIllusts';
import SearchResultTabs from '../containers/SearchResultTabs'; //todo


const HomeNavigator = StackNavigator({
  Home: { 
    screen: Home,
    navigationOptions: {
      header: {
        visible: false
      }
    },
  },
  Detail: { 
    screen: Detail,
  },
  UserDetail: {
    screen: UserDetail,
  },
  IllustComments: {
    screen: IllustComments,
    navigationOptions: {
      title: 'User Comments',
    },
  },
  RelatedIllusts: {
    screen: RelatedIllusts,
    navigationOptions: {
      title: 'Related Works',
    },
  },
  UserIllust: {
    screen: UserIllust,
    navigationOptions: {
      title: 'User Illusts',
    }
  },
  UserManga: {
    screen: UserManga,
    navigationOptions: {
      title: 'User Mangas',
    }
  },
  UserBookmarkIllust: {
    screen: UserBookmarkIllust,
    navigationOptions: {
      title: 'Collection',
    }
  },
  SearchResult: {
    screen: SearchResultTabs,
  }
}, {
  navigationOptions: {
    header: {
      style: {
        backgroundColor: '#fff'
      }
    }
  },
  cardStyle: {
    backgroundColor: '#fff'
  },
  headerMode: 'screen',
});

export default HomeNavigator;