import { View, Text, StyleSheet, Platform, ScrollView, TouchableOpacity, Pressable, Modal } from 'react-native'
import { Link } from 'expo-router'
import { cloneElement, useState } from 'react' // How to control states
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { videos, currID } from './project-library'

const Editor = () => {

    const [getDelete, setDelete] = useState(false);
    const [getMod, setMod] = useState(false);

    // Handle the playback of the video player
    const [getPlayPause, setPlayPause] = useState(true);
    const togglePlayPause = () => {
        setPlayPause((prev) => ((prev) ? false : true));
        console.log(getPlayPause ? "Playback playing" : "Playback paused");
    }

    // Handle the video playback resolution
    const [getMinMax, setMinMax] = useState(true);
    const toggleMinMax = () => {
        setMinMax((prev) => ((prev) ? false : true));
        console.log(getMinMax ? "Video maximized" : "Video minimized");
    }

    // Handle Overlay timeline toggle
    const [getOverlayTimeline, setOverlayTimeline] = useState(true);
    const toggleOverlayTimeline = () => {
        setOverlayTimeline((prev) => ((prev) ? false : true));
        console.log(getOverlayTimeline ? "Overlay timeline hidden" : "Overlay timeline displaying");
    }

    // Handle Video timeline toggle
    const [getVideoTimeline, setVideoTimeline] = useState(true);
    const toggleVideoTimeline = () => {
        setVideoTimeline((prev) => ((prev) ? false : true));
        console.log(getVideoTimeline ? "Video timeline hidden" : "Video timeline displaying");
    }

    // Handle Audio timeline toggle
    const [getAudioTimeline, setAudioTimeline] = useState(true);
    const toggleAudioTimeline = () => {
        setAudioTimeline((prev) => ((prev) ? false : true));
        console.log(getAudioTimeline ? "Audio timeline hidden" : "Audio timeline displaying");
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Link href='/' style={styles.homeButtom}>
                    <View style={{flexDirection: 'column'}}>
                        <FontAwesome6 name="house" size={24} style={{color: '#FFF7CA', textAlign: 'center'}}/>
                        <Text style={{color: '#FFF7CA', textAlign: 'center'}}>Go Home</Text>
                    </View>
                </Link>
                <Text style={styles.title}>{currID}</Text>
            </View>

            <View style={styles.workspace}>
                
                <View style={styles.playback}/>

                {/* Media playback control */}  
                <View style={styles.playbackControl}>
                    <TouchableOpacity onPress={togglePlayPause}>
                        <FontAwesome6 name={getPlayPause ? "play" : "pause"} size={24} style={styles.playbackButton}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={toggleMinMax}>
                        <FontAwesome6 name={getMinMax ? "maximize" : "minimize"} size={24} style={styles.playbackButton} />
                    </TouchableOpacity>
                </View>

                {/* Timeline */}
                <ScrollView style={styles.timeline} contentContainerStyle={{flexGrow: 1}}>
                    {/* Where the timeline goes */}
                    <View id="overlayTimeline">
                        <TouchableOpacity onPress={toggleOverlayTimeline}>
                            <View style={styles.timelineLabel}>
                                <FontAwesome6 name={getOverlayTimeline ? "caret-down" : "caret-right"} size={24} color="#FFF7CA" />
                                <Text style={{color:'#FFF7CA'}}>   Overlay</Text>
                            </View>
                        </TouchableOpacity>

                        <View id="overlayContent" style={[styles.overlayContent, {display: (getOverlayTimeline ? "flex" : "none")}]}>
                            {/* Script insert here */}
                        </View>
                    </View>

                    <View id="videoTimeline">
                        <TouchableOpacity onPress={toggleVideoTimeline}>
                            <View style={styles.timelineLabel}>
                                <FontAwesome6 name={getVideoTimeline ? "caret-down" : "caret-right"} size={24} color="#FFF7CA" />
                                <Text style={{color:'#FFF7CA'}}>   Video</Text>
                            </View>
                        </TouchableOpacity>

                        <View id="videoContent" style={[styles.videoContent, {display: (getVideoTimeline ? "flex" : "none")}]}>
                            {/* Script insert here */}
                        </View>
                    </View>

                    <View id="audioTimeline">
                        <TouchableOpacity onPress={toggleAudioTimeline}>
                            <View style={styles.timelineLabel}>
                                <FontAwesome6 name={getAudioTimeline ? "caret-down" : "caret-right"} size={24} color="#FFF7CA" />
                                <Text style={{color:'#FFF7CA'}}>   Audio</Text>
                            </View>
                        </TouchableOpacity>

                        <View id="audioContent" style={[styles.audioContent, {display: (getAudioTimeline? "flex" : "none")}]}>
                            {/* Script insert here */}
                        </View>
                    </View>

                    
                </ScrollView>

                {/* Action bar */}
                <ScrollView horizontal={true} contentContainerStyle={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}} style={styles.actionBar}>

                    <TouchableOpacity onPress={() => setMod(true)}>
                        <View style={styles.actionButtonWrap}>
                            <FontAwesome6 name="edit" size={24} style={styles.actionButton}/>
                            <Text style={styles.actionLabel}>Mod</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {console.log("Split button pressed")}}>
                        <View style={styles.actionButtonWrap}>
                            <FontAwesome6 name="arrows-split-up-and-left" size={24} style={styles.actionButton} />
                            <Text style={styles.actionLabel}>Split</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {console.log("Insert button pressed")}}>
                        <View style={styles.actionButtonWrap}>
                            <FontAwesome6 name="arrow-right-to-bracket" size={24} style={styles.actionButton} />
                            <Text style={styles.actionLabel}>Insert</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {console.log("Trim button pressed")}}>
                        <View style={styles.actionButtonWrap}>
                            <FontAwesome6 name="scissors" size={24} style={styles.actionButton} />
                            <Text style={styles.actionLabel}>Trim</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {console.log("Ask button pressed")}}>
                        <View style={styles.actionButtonWrap}>
                            <FontAwesome6 name="circle-question" size={24} style={styles.actionButton} />
                            <Text style={styles.actionLabel}>Ask</Text>
                        </View>
                    </TouchableOpacity>
                        
                    <TouchableOpacity onPress={() => setDelete(true)}>
                        <View style={styles.actionButtonWrap}>
                            <FontAwesome6 name="trash" size={24} style={[styles.actionButton, {color: 'red'}]} />
                            <Text style={[styles.actionLabel, {color: 'red'}]}>Delete</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>

                {/* Deletion Modal */}
                <Modal 
                    visible={getDelete}
                    onRequestClose={() => setDelete(false)}
                    animationType='fade'
                    transparent={true}
                    statusBarTranslucent={true}
                    >
                    <Pressable onPress={() => setDelete(false)} style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                        width: '100%', height: '100%', 
                        flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{backgroundColor: '#000000ff', borderRadius: 15, borderWidth: 2, borderColor: 'white', padding: 40}}>
                            <Text style={{color: '#FFF7CA', fontSize: 30, textAlign: 'center'}}>Are you sure?</Text>
                            <LinearGradient
                                colors={['#c30075ff', '#ff40bfff']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.buttonWrapper}
                            >   
                                <Pressable onPress={() => {console.log("[DELETE] Request received")}} style={styles.button}>
                                    <Text style={styles.buttonText}>Yes I'm sure</Text>
                                </Pressable>
                            </LinearGradient>
                        </View>
                    </Pressable>
                </Modal>

                {/* Modification modal */}
                <Modal 
                    visible={getMod}
                    onRequestClose={() => setMod(false)}
                    animationType='slide'
                    transparent={true}
                    statusBarTranslucent={true}
                    >
                    <Pressable onPress={() => setMod(false)} style={{
                        width: '100%', height: '100%', 
                        flex: 5, alignItems: 'center', justifyContent: 'center',
                        }}>
                    </Pressable>
                    <View style={{backgroundColor: '#091820ff', flex: 4, borderColor: 'black', borderTopWidth:4}}>
                        <Text style={{color: '#FFF7CA',textAlign: 'center', padding: 50, fontSize: 30}}>🚧Features Coming Soon @ SD2🚧</Text>
                    </View>
                </Modal>

            </View>

        </View>
    )
}

export default Editor

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        backgroundColor: '#01101bff',
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
    homeButtom: {
        padding: 10,
        position: 'absolute',
        flexDirection: 'column',
        top: '60%',
        left: '4%',
    },
    workspace: {
        width: '100%',

        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    playback: {
        backgroundColor: 'black',
        width: '100%',

        flex: 3,

    },
    playbackControl: {
        backgroundColor: '#01101bff',
        width: '100%',

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    playbackButton: {
        color: '#40FFB2',
        padding: 10,
        marginHorizontal: 30,
    },
    timeline: {
        backgroundColor: '#0f222fff',
        width: '100%',
        height: '40%',
        
    },
    timelineLabel: {
        marginHorizontal: 10,
        marginVertical: 10,
        letterSpacing: 10,

        flexDirection: 'row',
    },
    overlayContent: {
        minHeight: 20,
    },
    videoContent: {
        minHeight: 20,
    },
    audioContent: {
        minHeight: 20,
    },
    actionBar: {
        backgroundColor: '#093946ff',
        width: '100%',
        paddingBottom: Platform.OS === "android" ? 30 : 0,
    },
    actionButtonWrap: {
        flexDirection: 'column',
    },
    actionButton: {
        color: '#FFF7CA',
        padding: 4,
        marginHorizontal: 26,
        textAlign: 'center'
    },
    actionLabel: {
        color: '#FFF7CA',
        padding: 4,
        textAlign: 'center'
    },
    buttonWrapper: {
        margin: 10,
        width: 250,
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