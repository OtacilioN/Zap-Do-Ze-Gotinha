import React from 'react';
import { Platform, ScrollView, StyleSheet, WebView, View, Text, Image } from 'react-native';
import { MonoText } from '../components/StyledText';
import banner1 from '../assets/images/FAKEnews_SARAMPO.jpeg';
import banner2 from '../assets/images/fakenews-vacinagripe.png';
import banner3 from '../assets/images/banner3.png';
export default function LinksScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ alignContent: 'center', alignItems: 'center' }}>
        <View style={{ alignContent: 'center', alignItems: 'center', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
          <MonoText style={{ textAlign: 'center', fontSize: 20, margin: 16 }}>
            Banner de campanha de reforço de vacinação é falso
          </MonoText>
          <Image
            source={banner1}
            style={{ marginTop: 8, width: 300, height: 300, borderColor: 'grey', borderWidth: 2 }}
          ></Image>
          <Text style={{ margin: 16, fontSize: 14, textAlign: 'justify' }}>
            O Ministério da Saúde informa que não existe, no momento, uma campanha nacional de reforço da vacinação
            contra o Sarampo no Brasil. A imagem que circula nas redes sociais diz respeito a uma campanha realizada em
            2018. A vacinação contra o sarampo deve seguir o Calendário Nacional de Vacinação. Quem já foi vacinado, de
            acordo com a sua faixa etária, não precisa receber a vacina novamente. Confira sua caderneta de vacinação.
            Em caso de dúvida, procure uma unidade de saúde e informe-se. Acesse www.saude.gov.br/sarampo
          </Text>
        </View>
        <View style={{ alignContent: 'center', alignItems: 'center', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
          <MonoText style={{ textAlign: 'center', fontSize: 20, margin: 16 }}>
            Vacina contra gripe causa buraco em braço é falso
          </MonoText>
          <Image
            source={banner2}
            style={{ marginTop: 8, width: 300, height: 300, borderColor: 'grey', borderWidth: 2 }}
          ></Image>
          <Text style={{ margin: 16, fontSize: 14, textAlign: 'justify' }}>
            Olá! Essa mensagem é falsa! A mensagem contém características de Fake News, como erro de gramática,
            alarmista, informações vagas, não há datas e fontes confiáveis e além disso pede compartilhamento. A
            Secretaria de Saúde de São Vicente realizou uma busca em suas unidades de saúde e não encontrou nenhum fato
            relacionado ao texto que viralizou. Portanto, trata-se de Fake News! Não compartilhe. Ressaltamos que com
            respaldo técnico de equipes especializadas, o Ministério da Saúde garante que a vacinação é segura, sendo
            que seu resultado não se resume a evitar doenças. Vacinas salvam vidas. A recomendação é: não dê ouvidos às
            notícias falsas e vacine-se. Só entra no calendário nacional as vacinas com garantia de segurança e
            eficácia. Além do controle de segurança para o registro da vacina, amostras de lotes desses imunibiológicos
            passam por teste de qualidade no Instituto Nacional de Controle de Qualidade em Saúde (INCQS). A rede de
            frio garante que as doses sejam armazenadas dentro da temperatura determinada pelos laboratórios.
          </Text>
        </View>
        <View style={{ alignContent: 'center', alignItems: 'center' }}>
          <MonoText style={{ textAlign: 'center', fontSize: 20, margin: 16 }}>
            Paracetamol pode diminuir eficácia de vacinas em crianças - É VERDADE!
          </MonoText>
          <Image
            source={banner3}
            style={{ marginTop: 8, width: 300, height: 300, borderColor: 'grey', borderWidth: 2 }}
          ></Image>
          <Text style={{ margin: 16, fontSize: 14, textAlign: 'justify' }}>
            Olá, essa mensagem é verdadeira e a informação inclusive consta na publicação “Manual de Normas e
            Procedimentos para Vacinação”. Em estudos observou-se que as crianças que receberam paracetamol profilático
            apresentaram uma redução nos títulos de anticorpos das vacinas administradas. Por isso, de uma forma geral,
            não é indicado o uso de paracetamol antes ou imediatamente após a vacinação para não interferir na
            imunogenicidade da vacina. registrado em: Fake News
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Fake News'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
