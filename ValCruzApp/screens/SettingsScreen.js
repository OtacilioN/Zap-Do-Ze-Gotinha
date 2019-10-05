import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import postos from '../data/postos';

class SettingsScreen extends React.Component {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  //-8.056537, -34.899155
  constructor(props) {
    super(props);
    this.state = { paddingBottom: 1 };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1, paddingBottom: this.state.paddingBottom }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          initialRegion={{
            latitude: -8.056537,
            longitude: -34.899155,
            latitudeDelta: 0.0922 * 1.5,
            longitudeDelta: 0.0421 * 1.5
          }}
          onMapReady={() => this.setState({ paddingBottom: 0 })}
        >
          {postos.map(marker => (
            <Marker
              title={marker.unidade}
              description={marker.endereco}
              key={marker.unidade}
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              pinColor={'red'}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

export default SettingsScreen;

SettingsScreen.navigationOptions = {
  title: 'Locais de vacinação'
};
