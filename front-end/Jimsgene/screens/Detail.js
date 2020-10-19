import React,{useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Image,
    Dimensions
} 
from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';

const width = Math.round(Dimensions.get("window").width);
const height = Math.round(Dimensions.get("window").height);

const Detail = ({navigation}) => {
    const [counter, setCounter] = useState(0);
    const quantityInc = () => {
        setCounter(counter + 1);
    }
    const quantityDec = () => {
        setCounter(counter - 1);
    }
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                        <View style={styles.cont}>
                            <View style={styles.topBtn}>
                                <View style={styles.topLView}>
                                    <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                                        <MaterialIcons 
                                            name="arrow-back-ios"
                                            size={25}
                                            color="#f04748"
                                            style={styles.topLeft}
                                        /> 
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.topRView}>
                                    <TouchableOpacity>
                                        <FontAwesome5 
                                            name="shopping-bag"
                                            size={25}
                                            color="#f04748"
                                            style={styles.topRight}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.image}>
                            <ImageBackground source={require('../assets/orange.png')} style={styles.image}>
                                <Text style={styles.fruitName}>Orange</Text>
                                <Text style={styles.fruitPrice}>$4.6/kg</Text>
                            </ImageBackground>
                            </View>
                        <View>
                    </View>

                </View>
            </View>
            <View style={styles.bottom}>
                <View style={{flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 15, marginTop: 20}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../assets/fire.png')}
                            style={{width: 30,height: 30, marginRight: 5}}
                        />
                        <Text>33 calories</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../assets/star.png')}
                            style={{width: 30,height: 30, marginRight: 5}}
                        />
                        <Text>4.9 (2645 review)</Text>
                    </View>
                </View>
                <View style={{margin: 13}}>
                    <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent:'space-between', marginHorizontal: 10}}>
                    <View style={{width: '50%'}}>
                        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>Quantity</Text>
                        <View style={{flexDirection: 'row', justifyContent: "space-around", marginTop: 10}}>
                            <TouchableOpacity style={{padding: 5, backgroundColor: 'red', borderRadius: 5}} onPress={quantityDec}>
                                <Entypo 
                                    name="minus"
                                    size={15}
                                    color='white'
                                />
                            </TouchableOpacity>
                            <Text style={{fontWeight: 'bold'}}>{counter} kg</Text>
                            <TouchableOpacity style={{padding: 5, backgroundColor: 'red', borderRadius: 5}} onPress={quantityInc}>
                                <Entypo 
                                    name="plus"
                                    size={15}
                                    color='white'
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width: '50%'}}>
                        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>Delivery time</Text>
                        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
                            <Image 
                                source={require('../assets/alarm-clock.png')} 
                                style={{width: 30,height: 30, marginRight: 5}}
                            />
                            <Text style={{fontWeight: 'bold'}}>20-30 min</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={{
                    position: 'absolute',
                    bottom: 10,
                    alignSelf: 'center',
                    width: width-100,
                    height: 50,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    borderRadius: 40
                }}>
                    <LinearGradient colors={['#FF8767', '#FF8767', '#FE5426']} style={styles.gradient}>
                        <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18}}>Add to Cart</Text>
                    </LinearGradient>

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f7f6fd'
    },
    cont: {
        flex: 1,
        backgroundColor: '#f7f6fd'
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 40,
        elevation: 15
    },
    fruitName: {
        color: "black",
        fontSize: 32,
        fontWeight: "bold",
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center'
    },
    fruitPrice: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center'
    },
    image: {
        flex: 2,
        alignSelf:'center',
        width: width - 100,
        height: height - 460,
        // backgroundColor: 'grey'
    },
    top: {
        height: '55%',
        color: '#f7f4fc'
    },
    bottom: {
        height: '45%',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    topBtn: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    topLView:{
        // elevation: 1,
    },
    topLeft: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 50,
    },
    topRight: {
        alignItems:'center',
        padding: 8,
        borderRadius: 50,
        backgroundColor: 'white',
    }
});

export default Detail
