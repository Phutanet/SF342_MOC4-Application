import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import customData from './JSON/news'

export default class News extends React.Component {

    render() {        
        return (
            <View>
                <Image
                style={styles.banner}
                source={require('.././image/HomwBanner.jpg')}
            />
                { customData.map((data) =>{
                    return(
                        <>
                        <View style = {styles.row}>
                            <Image source={require('../image/docment-icon.png')} style = {styles.box1} />
                            <Text style = {styles.box2} >{data.title}</Text>
                        </View>
                        </>
                    )})}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    newsContainer: {
        padding: 10
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: "600"
    },
    newsDescription: {
        fontSize: 16,
        marginTop: 10
    },
    date: {
        fontSize: 14
    },
    image: { 
        width: 350, 
        height: 320, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    banner: {
        width: 450, 
        height:140,
        opacity: 0.8
    },
    box1: {
        width: 45,
        height: 47,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
    },
    box2: {
        width: 290,
        height: 'auto',
    },
    row: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        marginTop: 10,
    },

});