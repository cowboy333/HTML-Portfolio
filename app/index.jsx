import { StyleSheet, Text, View , StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const Home = () => {

    //added this section as well
    const [fonts] = useFonts({
        'Pacifico': require('../assets/fonts/Pacifico/Pacifico-Regular.ttf'),
    });
    (fonts ? console.log("[OK] --- Fonts loaded") : console.log(`[FAILED] --- failed to load font`));

    return(
        <LinearGradient
            colors={['#00203A', '#00485C']}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.containerContent}>
                <Text style={styles.title}>TapeIt</Text>

                <View style={styles.hLine}/>

                <Link href='/editor' id='newProject' style={styles.buttonWrapper}>
                    <LinearGradient
                        colors={['#00B6C3', '#40FFB2']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.button}
                    >   
                        <View style={styles.iconTextRow}>
                            <View style={styles.faviconWrapper}>
                                <AntDesign name="pluscircle" size={28} color="#00203A" style={styles.favicon}/>
                            </View>
                            <Text style={styles.buttonText}>New Project</Text>
                        </View>

                    </LinearGradient>
                </Link>

                <Link href='/project-library' id='projectLib' style={styles.buttonWrapper}>
                    <LinearGradient
                        colors={['#00B6C3', '#40FFB2']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.button}
                    >   
                        <View style={styles.iconTextRow}>
                            <View style={styles.faviconWrapper}>
                                <AntDesign name="folderopen" size={28} color="#00203A" style={styles.favicon}/>
                            </View>
                            <Text style={styles.buttonText}>Project Library</Text>
                        </View>

                    </LinearGradient>
                </Link>

                <View style={styles.hLine}/>

                {/* TODO: Dynamically update to most recent edited project */}
                <Link href='/editor' id='recentProj' style={styles.buttonWrapper}>
                    <LinearGradient
                        colors={['#00B6C3', '#40FFB2']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.button}
                    >   
                        <View style={styles.iconTextRow}>
                            <View style={styles.faviconWrapper}>
                                <AntDesign name="videocamera" size={28} color="#00203A" style={styles.favicon}/>
                            </View>
                            <Text style={styles.buttonText}>unnamed 1</Text>
                        </View>

                    </LinearGradient>
                </Link>
            </View>
            
        </LinearGradient>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerContent: {
        width: '100%',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#40FFB2',
        fontFamily: 'Pacifico',
        fontSize: 100,
        marginBottom: 40,
        position: 'relative',
        textAlign: 'center'
    },
    hLine: {
        width: '80%',
        borderBottomWidth: 2,
        borderColor: '#00B6C3',
        margin: 20,
    },
    buttonWrapper: {
        margin: 10,
        width: 300,
        height: 80,
    },
    button: {
        width: '100%',
        height: '100%,',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconTextRow: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
    },
    buttonText: {
        position: 'absolute',
        color: '#00203A',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 24,
        width: '55%',
        height: '100%',
        left: '40%'
    },
    faviconWrapper: {
        position: 'absolute',
        backgroundColor: '#FFF7CA',
        width: 100,
        height: '100%',
        left: 0,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    favicon: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})