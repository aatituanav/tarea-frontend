import React from "react";
import { View, Text, StyleSheet, Image, Linking, TouchableWithoutFeedback, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const imagen = require('../../../assets/kwai.png'); // Ruta de tu imagen en .assets

const twitter = <Icon name={'twitter-square'} size={30} color={'white'} />
const kwai = <Image source={imagen} style={{ width: 30, height: 30, tintColor: 'white' }} />;
const facebook = <Icon name={'facebook-square'} size={30} color={'white'} />
const instagram = <Icon name={'instagram'} size={30} color={'white'} />
const whatsapp = <Icon name={'whatsapp'} size={30} color={'white'} />
const youtube = <Icon name={'youtube-play'} size={30} color={'white'} />
const drive = <Icon name={'google'} size={30} color={'white'} />


const ProfileCard = () => {
    const user = {
        avatar: "https://firebasestorage.googleapis.com/v0/b/tinderperros-161f1.appspot.com/o/IMG_20210817_093223304%20(1).jpg?alt=media&token=d2e17d9b-bb61-457d-af3f-51a0a17a93d8",
        coverPhoto: "https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg",
        name: "Andres Tituana"
    }
   

    return (
        <>
            <ImageBackground source={{ uri: user.coverPhoto }} style={styles.coverPhoto}>
                <View style={styles.container}>
                    <View style={styles.avatarContainer}>
                        <Image source={{ uri: user.avatar }} style={styles.avatar} />
                        <Text style={styles.name}>
                            {user.name}
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableWithoutFeedback style={{ color: 'blue' }} onPress={() => {
                            Linking.openURL('https://www.facebook.com/andres.tituanna')
                        }}>
                            {facebook}
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={{ color: 'blue' }} onPress={() => {
                            Linking.openURL('https://twitter.com/')
                        }}>
                            {twitter}
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={{ color: 'blue' }} onPress={() => {
                            Linking.openURL('https://www.instagram.com/andres.tituana/')
                        }}>
                            {instagram}
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => Linking.openURL('https://whatsapp.com/')}>
                            {whatsapp}
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => Linking.openURL('https://drive.com/')}>
                            {kwai}
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => Linking.openURL('https://youtube.com/')}>
                            {youtube}
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        justifyContent:'center'
    },
    coverPhoto: {
        width: '100%',
        height: '100%',
    },
    avatarContainer: {
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 10,
        borderColor: 'white'
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        justifyContent: 'space-around'
    }
});
export default ProfileCard