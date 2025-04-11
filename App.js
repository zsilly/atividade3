import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const artistas = [
  {
    nome: 'Frida Kahlo',
    nascimento: '6 de julho de 1907 – 13 de julho de 1954',
    movimento: 'Surrealismo e Realismo Mágico',
    tecnica: 'Pintura a óleo',
    resumo: 'Frida Kahlo foi uma das artistas mais marcantes do século XX. Sua obra é profundamente pessoal e reflete temas como dor, identidade, política e feminilidade. Após um acidente grave na juventude, passou longos períodos em recuperação, o que influenciou sua arte de maneira intensa e autobiográfica.',
    imagem: require('./assets/retrato1.jpg'),
  },
  {
    nome: 'Leonardo da Vinci',
    nascimento: '15 de abril de 1452 – 2 de maio de 1519',
    movimento: 'Renascimento',
    tecnica: 'Têmpera e óleo sobre madeira',
    resumo: 'Leonardo foi um verdadeiro polímata: pintor, escultor, inventor, cientista e anatomista. Sua obra mais famosa, "Mona Lisa", é um ícone da arte ocidental. Sua genialidade é lembrada não apenas pela arte, mas também pelas inovações e estudos em diversas áreas do conhecimento.',
    imagem: require('./assets/retrato2.jpg'),
  },
  {
    nome: 'Salvador Dalí',
    nascimento: '11 de maio de 1904 – 23 de janeiro de 1989',
    movimento: 'Surrealismo',
    tecnica: 'Óleo sobre tela',
    resumo: 'Dalí foi conhecido tanto por sua arte provocativa quanto por sua personalidade excêntrica. Suas obras frequentemente exploram o inconsciente, o sonho e o tempo, com símbolos como relógios derretendo. Ele revolucionou o surrealismo com sua técnica meticulosa e imaginação sem limites.',
    imagem: require('./assets/retrato3.jpg'),
  },
  {
    nome: 'Claude Monet',
    nascimento: '14 de novembro de 1840 – 5 de dezembro de 1926',
    movimento: 'Impressionismo',
    tecnica: 'Óleo sobre tela',
    resumo: 'Monet foi um dos fundadores do impressionismo. Sua série de pinturas sobre as Ninfeias e a Catedral de Rouen demonstram seu fascínio pela luz e pelo tempo. A busca pela representação da impressão visual de momentos tornou sua arte um marco na transição para a arte moderna.',
    imagem: require('./assets/retrato4.jpg'),
  },
  {
    nome: 'Vincent van Gogh',
    nascimento: '30 de março de 1853 – 29 de julho de 1890',
    movimento: 'Pós-impressionismo',
    tecnica: 'Óleo sobre tela com pinceladas marcadas',
    resumo: 'Van Gogh é hoje um dos pintores mais admirados do mundo, embora tenha sido pouco reconhecido em vida. Suas obras vibrantes, como "Noite Estrelada" e "Girassóis", expressam emoções intensas. Lutou com doenças mentais, o que impactou sua vida e produção artística.',
    imagem: require('./assets/retrato5.jpg'),
  },
  {
    nome: 'Francisco de Goya',
    nascimento: '30 de março de 1746 – 16 de abril de 1828',
    movimento: 'Romantismo',
    tecnica: 'Pintura a óleo e gravura',
    resumo: 'Goya foi um dos pintores mais importantes da Espanha. Inicialmente conhecido por retratar a aristocracia, sua obra evoluiu para críticas sociais e políticas sombrias, especialmente na série "Pinturas Negras". É considerado um precursor da arte moderna pela expressividade e audácia de seus trabalhos.',
    imagem: require('./assets/retrato6.jpg'),
  },
];

export default function ListaArtistas() {
  const [fontsLoaded] = useFonts({
    'LongShot': require('./assets/fonts/Long_Shot.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      {artistas.map((artista, index) => (
        <View key={index} style={styles.card}>
          <Image source={artista.imagem} style={styles.imagem} />
          <Text style={styles.nome}>{artista.nome}</Text>
          <Text style={styles.texto}><Text style={styles.label}>Nascimento e Morte: </Text>{artista.nascimento}</Text>
          <Text style={styles.texto}><Text style={styles.label}>Movimento: </Text>{artista.movimento}</Text>
          <Text style={styles.texto}><Text style={styles.label}>Técnica: </Text>{artista.tecnica}</Text>
          <Text style={styles.texto}><Text style={styles.label}>Resumo: </Text>{artista.resumo}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    padding: 16,
  },
  card: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  imagem: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  nome: {
    fontFamily: 'LongShot',
    fontSize: 26,
    color: '#ffffff',
    marginTop: 12,
    marginBottom: 4,
  },
  texto: {
    color: '#cccccc',
    fontSize: 16,
    marginBottom: 6,
    fontFamily: 'LongShot',
  },
  label: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
