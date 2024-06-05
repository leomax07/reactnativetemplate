import React from 'react';
import {
    Button,
    Colors,
    Flex,
    Icons,
    StyleSheet,
    Text,
} from 'squashapps-react-native-uikit';
import CustomStatusBar from '../CustomStatusBar';
import { useNavigation } from '@react-navigation/native';

const { SvgArrowLeft } = Icons;

const styles = StyleSheet.create({
    overAll: {
        paddingLeft: 30,
        paddingRight: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.GREY_30,
        backgroundColor: Colors.WHITE,
    },
    title: {
        marginHorizontal: 16,
    },
    btn: {
        backgroundColor: "#fff"
    }
});


const Header = () => {
    const navigation = useNavigation();
    console.log(navigation, "navigation")
    
    const handleClick = () => {
        // navigation.openDrawer(); 
    };

    return (
        <>
            <CustomStatusBar barStyle="dark-content" />
            <Flex overrideStyle={styles.overAll}>
                <Flex row center>
                    <Button onClick={handleClick} overrideStyle={styles.btn}>
                        <SvgArrowLeft />
                    </Button>
                    <Flex flex={1} center>
                        <Text type="heading500" overrideStyle={styles.title}>
                            Home
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Header;
