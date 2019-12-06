import {
    createSwitchNavigator,
} from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack';
import { Login } from '../Screen/Authen';
import { HomePage } from '../Screen/Home';
import { ModalShare } from '../Screen/Share';

const AuthenStack = createStackNavigator({
    sc_login: {
        screen: Login,
    },

},
    {
        header: null,
        headerMode: 'none'

    }
);

const HomePageStack = createStackNavigator({
    sc_homepage: {
        screen: HomePage
    }
},
    {
        header: null,
        headerMode: 'none'

    }
);



const AppNavigator = createSwitchNavigator(
    {
        stackAuthen: {
            screen: AuthenStack
        },
        stackHomePage: {
            screen: HomePageStack
        }
    },
    {


    }
);

const RootModalStack = createStackNavigator(
    {
        Root: {
            screen: AppNavigator,
            path: "root"
        },
        // -- Screen Modal, Popup
        modal_share: ModalShare
    },
    {
        mode: "modal",
        headerMode: "none",
        transitionConfig: () => ({
            containerStyle: {
                backgroundColor: "transparent"
            }
        }),
        transparentCard: true,
        cardStyle: {
            backgroundColor: "transparent",
            opacity: 1
        }
    }
)

export default RootModalStack;