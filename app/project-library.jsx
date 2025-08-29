import { View, Text, StyleSheet, Platform, ScrollView, Pressable, TouchableOpacity, Modal } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

//This will hold the information of the videos
export const videos = [
    {id: '1', name: 'unnamed 1', length: '00:00'},
    {id: '2', name: 'unnamed 2', length: '00:00'},
    {id: '3', name: 'unnamed 3', length: '00:00'},
    {id: '4', name: 'unnamed 4', length: '00:00'}
]

export let currID = 'New Project';

const ProjectLibrary = () => {
    const [getSelect, setSelect] = useState(0);
    const [getMore, setMore] = useState(false);

    function updateSelect(id) {
        setSelect(id);
        console.log(`[SELECT] Selected video ${id}`);
    }

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Link href='/' style={styles.homeButton}>
                    <View style={{flexDirection: 'column'}}>
                        <FontAwesome6 name="house" size={24} style={{color: '#FFF7CA', textAlign: 'center'}}/>
                        <Text style={{color: '#FFF7CA', textAlign: 'center'}}>Go Home</Text>
                    </View>
                </Link>
                <Text style={styles.title}>Project Library</Text>
            </View>

            <View style={styles.galleryContainer}>
                <ScrollView id='gallery' style={styles.gallery} contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
                    <LinearGradient
                        colors={['#00203A', '#00485C']}
                        style={styles.gradient}
                    >   
                    {/* This will dynamically load the videos */}
                    {videos.map((video) => (
                        <Pressable key={video.id} style={[styles.projectCard, {borderWidth: (getSelect === video.id ? 2 : 0)}]} id={video.id} onPress={() => updateSelect(video.id)}>
                            <View href='/editor' style={styles.thumbnailWrapper}>
                                <View style={styles.thumbnail} />
                                <View style={styles.thumbnailCaption}>
                                    <Text style={styles.captionText}>{video.name}</Text>
                                    <Text style={styles.captionText}>{video.length}</Text>
                                </View>
                            </View>
                            {getSelect === video.id ? 
                                <View style={styles.projectButtons}>
                                    <Pressable onPress={currID = video.name}>
                                        <Link href='/editor' style={styles.projectButton}>Edit</Link>
                                    </Pressable>
                                    <Pressable onPress={() => setMore(true)}style={styles.projectButton}>
                                        <Text>More options</Text>
                                    </Pressable>
                                </View>
                            : null}
                        </Pressable>
                    ))}

                    </LinearGradient>
                </ScrollView>
                <Modal 
                    visible={getMore}
                    onRequestClose={() => setMore(false)}
                    animationType='fade'
                    transparent={true}
                    statusBarTranslucent={true}
                    >
                    <Pressable onPress={() => setMore(false)} style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                        width: '100%', height: '100%', 
                        flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <LinearGradient
                            colors={['#002ec3ff', '#4079ffff']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.buttonWrapper}
                        >   
                            <Pressable onPress={() => console.log("[UPLOAD] Request received")} style={styles.button}>
                                <Text style={styles.buttonText}>Upload</Text>
                            </Pressable>

                        </LinearGradient>
                        <LinearGradient
                            colors={['#c30075ff', '#ff40bfff']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.buttonWrapper}
                        >   
                            <Pressable onPress={() => console.log("[DELETE] Request received")} style={styles.button}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </Pressable>
                        </LinearGradient>
                    </Pressable>
                </Modal>
            </View>
        </View>
    )
}

export default ProjectLibrary

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        backgroundColor: '#01101b',
        paddingTop: Platform.OS === "android" ? 30 : 0,
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#FFF7CA',
        fontSize: 26,
        position: 'absolute',
        top: '70%',
    },
    homeButton: {
        position: 'absolute',
        padding: 10,
        flexDirection: 'column',
        top: '60%',
        left: '4%',
    },
    galleryContainer: {
        width: '100%',
        flex: 8,
    },
    gallery: {
        backgroundColor: '#00203A',
        width: '100%',
    },
    gradient: {
        width: '100%',
        alignItems: 'center',
    },
    projectCard: {
        borderColor: '#FFF7CA',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        width: 320,
        backgroundColor: '#00203A',
    },
    thumbnailWrapper: {
        width: '100%',
        height: 300,
    },
    thumbnail: {
        backgroundColor: '#000000',
        width: '100%',
        height: 220,
    },
    thumbnailCaption: {
        backgroundColor: '#208A69',
        width: '100%',
        height: 80,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    captionText: {
        color: '#FFF7CA',
        fontWeight: 'bold',
        fontSize: 20,
    },
    projectButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: '100%',
    },
    projectButton: {
        backgroundColor: '#A0F1C2',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        color: '#000000',
        fontWeight: 'bold',
    },
    buttonWrapper: {
        margin: 10,
        width: 360,
        height: 80,
        borderRadius: 15,

    },
    button: {
        width: '100%',
        height: '100%,',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFF7CA',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 24,
        height: '100%',
    },
})