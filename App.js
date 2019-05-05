import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import {blue, lightGray} from "./utils/theme";
import ViewRoot from "./components/common/ViewRoot";
import DeckScreen from "./screens/DeckScreen";
import {getDecks} from "./utils/api";
import QuizScreen from "./screens/QuizScreen";
import NewDeck from "./components/NewDeck";
import NewCard from "./components/NewCard";
import { FontAwesome } from '@expo/vector-icons'
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

const HomeStack = createStackNavigator({
    HomeScreen: HomeScreen,
    DeckScreen: DeckScreen,
    QuizScreen: QuizScreen,
    NewCard: NewCard,
});

const NewDeckStack = createStackNavigator({
    NewDeck: NewDeck
});

const TabNavigator = createBottomTabNavigator({
    HomeScreenTab: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: () => <FontAwesome name='tasks' size={25} color={blue} />
        }
    },
    NewDeckTab: {
        screen: NewDeckStack,
        navigationOptions: {
            tabBarLabel: 'New Deck',
            tabBarIcon: () => <FontAwesome name='plus-square' size={25} color={blue} />
        }
    },
});

export default createAppContainer(TabNavigator);

//
// export default class App extends React.Component {
//     render() {
//         return (
//             <ViewRoot style={styles.app}>
//                 {/*<HomeScreen/>*/}
//                 {/*<DeckScreen deckId='React'/>*/}
//                 {/*<QuizScreen deckId='React'/>*/}
//                 {/*<NewDeck />*/}
//                 {/*<NewCard deckId='React'/>*/}
//             </ViewRoot>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     app: {
//         backgroundColor: lightGray,
//         padding: 16
//     }
// });
