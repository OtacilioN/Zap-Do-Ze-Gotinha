import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import logo from '../assets/images/logo.png';

import { MonoText } from '../components/StyledText';

const AgerRecemLevel = props => (
  <View>
    <View
      style={{
        height: 60,
        width: 60,
        marginLeft: 90,
        borderColor: 'grey',
        borderWidth: 2,
        justifyContent: 'center',
        borderRadius: 10
      }}
    >
      <MonoText style={{ textAlign: 'center', color: 'grey' }}>{props.label}</MonoText>
    </View>
  </View>
);

const AgeLevel = props => (
  <View style={{ flex: 1 }}>
    <View style={{ marginLeft: 120, width: 1, borderLeftColor: 'grey', flex: 1, borderLeftWidth: 2 }}></View>
    <View
      style={{
        height: 60,
        width: 60,
        marginLeft: 90,
        borderColor: 'grey',
        borderWidth: 2,
        justifyContent: 'center',
        borderRadius: 10
      }}
    >
      <MonoText style={{ textAlign: 'center', color: 'grey' }}>{props.label}</MonoText>
    </View>
  </View>
);

const VacinaBody = props => {
  if (props.label === 'Até 15 Meses') {
    return (
      <View style={{ margin: 32 }}>
        <Text style={{ fontWeight: '600' }}>
          Ao nascer: <Text style={{ fontWeight: '300' }}>BCG e Hepatite B.</Text>
        </Text>
        <Text style={{ fontWeight: '600', marginTop: 8 }}>
          2 Meses{' '}
          <Text style={{ fontWeight: '300' }}>
            Pentavalente, Inativada de Poliomelite (VIP), Rotavírus Humano (VORH) e Pneumocócica 10.
          </Text>
        </Text>
        <Text style={{ fontWeight: '600', marginTop: 8 }}>
          3 Meses <Text style={{ fontWeight: '300' }}>Meningocócica C.</Text>
        </Text>
        <Text style={{ fontWeight: '600', marginTop: 8 }}>
          4 Meses{' '}
          <Text style={{ fontWeight: '300' }}>
            Pentavalente, Inativada de Poliomelite (VIP), Rotavírus Humano (VORH) e Pneumocócica 10.
          </Text>
        </Text>
        <Text style={{ fontWeight: '600', marginTop: 8 }}>
          5 Meses <Text style={{ fontWeight: '300' }}>Meningocócica C.</Text>
        </Text>
        <Text style={{ fontWeight: '600', marginTop: 8 }}>
          6 Meses <Text style={{ fontWeight: '300' }}>Pentavalente e Poliomelite (VOP).</Text>
        </Text>
        <Text style={{ fontWeight: '600', marginTop: 8 }}>
          12 Meses <Text style={{ fontWeight: '300' }}>Hepatite A, Tríplice Viral (SCR) e Pneumocócica 10.</Text>
        </Text>
        <Text style={{ fontWeight: '600', marginTop: 8 }}>
          15 Meses{' '}
          <Text style={{ fontWeight: '300' }}>
            Tríplice Bacteriana (DTP), Poliomelite Oral, Meningocócica C e Tetra viral.
          </Text>
        </Text>
      </View>
    );
  } else if (props.label === '4 anos') {
    return (
      <View style={{ margin: 32 }}>
        <Text style={{ fontWeight: '600' }}>
          4 anos: <Text style={{ fontWeight: '300' }}>Tríplice Bacteriana.</Text>
        </Text>
      </View>
    );
  } else if (props.label === '9 a 11 anos') {
    return (
      <View style={{ margin: 32 }}>
        <Text style={{ fontWeight: '600' }}>
          9 a 11 anos: <Text style={{ fontWeight: '300' }}>HPV.</Text>
        </Text>
      </View>
    );
  } else if (props.label === '10 a 19 anos') {
    return (
      <View style={{ margin: 32 }}>
        <Text style={{ fontWeight: '600' }}>
          10 a 19 anos:{' '}
          <Text style={{ fontWeight: '300' }}> Hepatite B, Febre Amarela, Tríplice Viral e Dupla Adulto (dT).</Text>
        </Text>
      </View>
    );
  } else if (props.label === '20 a 59 anos') {
    return (
      <View style={{ margin: 32 }}>
        <Text style={{ fontWeight: '600' }}>
          20 a 59 anos:{' '}
          <Text style={{ fontWeight: '300' }}> Hepatite B, Febre Amarela, Tríplice Viral e Dupla Adulto (dT).</Text>
        </Text>
      </View>
    );
  } else {
    return (
      <View style={{ margin: 32 }}>
        <Text style={{ fontWeight: '600' }}>
          60 anos e mais:{' '}
          <Text style={{ fontWeight: '300' }}> Febre Amarela, Influenza Sazonal e Pneumocócica 23.</Text>
        </Text>
      </View>
    );
  }
};

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: null };
  }
  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={{ justifyContent: 'center', marginTop: 16 }}>
          <MonoText style={{ textAlign: 'center', fontSize: 20 }}>Calendário de vacina</MonoText>
        </View>
        {this.state.clicked ? (
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              borderColor: 'grey',
              borderWidth: 1,
              margin: 16,
              borderRadius: 30
            }}
          >
            <TouchableOpacity onPress={() => this.setState({ clicked: null })}>
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
                size={26}
                style={{ alignSelf: 'flex-end', marginRight: 14, marginTop: 4 }}
                color={'grey'}
              />
            </TouchableOpacity>

            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Vacinas para a faixa etária de {this.state.clicked}
            </Text>
            <VacinaBody label={this.state.clicked} />
          </View>
        ) : (
          <View style={{ marginVertical: 16, flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => this.setState({ clicked: 'Até 15 Meses' })}>
                <AgerRecemLevel label="Até 15 Meses" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ clicked: '4 anos' })} style={{ flex: 1 }}>
                <AgeLevel label="4 anos" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ clicked: '9 a 11 anos' })} style={{ flex: 1 }}>
                <AgeLevel label="9 a 11 anos" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ clicked: '10 a 19 anos' })} style={{ flex: 1 }}>
                <AgeLevel label="10 a 19 anos" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ clicked: '20 a 59 anos' })} style={{ flex: 1 }}>
                <AgeLevel label="20 a 59 anos" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ clicked: 'Acima de 60 anos' })} style={{ flex: 1 }}>
                <AgeLevel label="Acima de 60 anos" />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Image source={logo} style={{ height: 200, width: 200 }}></Image>
            </View>
          </View>
        )}
      </ScrollView>
    );
  }
}

export default HomeScreen;

HomeScreen.navigationOptions = {
  header: null
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>You are not in development mode: your app will run at full speed.</Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30,
    flex: 1
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
});
