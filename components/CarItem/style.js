import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    header: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    headerTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        // color: 'white',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    batterySection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    batteryImage: {
        height: 26,
        width: 70,
        marginRight: 12,
    },
    batteryText: {
      color: 'white',
      fontSize: 35,
        fontWeight: 'bold',

    },
    status: {
        color: 'white',
        alignItems: 'center',
        marginBottom: 175,
        justifyContent: 'center',
    },
    controls: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    controlsButton: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 50,
        padding: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
});

export default styles;
