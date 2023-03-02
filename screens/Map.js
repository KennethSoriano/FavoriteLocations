import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

function Map() {
    const region = {
        latitude: 37,
        longitude: -122,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04
    };

    return (
        <MapView style={styles.map} initialRegion={region}></MapView>
    )
}

export default Map;

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})