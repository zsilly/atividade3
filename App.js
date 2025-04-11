import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [selectedArt, setSelectedArt] = useState(null);

  const [fontsLoaded] = useFonts({
    LongShot: require('./assets/fonts/Long_Shot.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  const artworks = [
    {
      image: require('./assets/dali.jpg'),
      title: 'A Persistência da Memória',
      author: 'Salvador Dalí',
      year: 1931,
      material: 'Óleo sobre tela',
      colors: 'Azul, marrom, dourado',
      description:
        'A Persistência da Memória é uma das obras mais icônicas de Salvador Dalí. Criada em 1931, representa relógios derretendo em uma paisagem desértica, simbolizando a relatividade do tempo. É um marco do surrealismo que desafia as percepções lógicas da realidade e do tempo.',
    },
    {
      image: require('./assets/dali2.jpg'),
      title: 'Paisagem Surrealista com Criança',
      author: 'Salvador Dalí',
      year: 1935,
      material: 'Óleo sobre tela',
      colors: 'Verde, bege, azul',
      description:
        'Nesta obra, Dalí combina elementos da infância com o mundo surreal, criando uma paisagem de sonho e mistério. O uso de cores suaves e figuras distorcidas reforça a atmosfera do subconsciente.',
    },
    {
      image: require('./assets/goya.jpg'),
      title: 'O Grande Bode',
      author: 'Francisco Goya',
      year: 1821,
      material: 'Óleo sobre tela',
      colors: 'Preto, marrom, bege',
      description:
        'Parte das “Pinturas Negras”, esta obra retrata uma figura satânica em um encontro sombrio. Goya aborda temas de medo e superstição com cores escuras e uma atmosfera opressiva.',
    },
    {
      image: require('./assets/goya2.webp'),
      title: 'Aparição Fantasmagórica',
      author: 'Francisco Goya',
      year: 1823,
      material: 'Óleo sobre tela',
      colors: 'Cinza, preto, tons de carne',
      description:
        'Nesta pintura, Goya explora figuras espectrais e o medo do desconhecido. A técnica e o uso do claro-escuro criam um clima de angústia e tensão emocional.',
    },
    {
      image: require('./assets/goya3.jpg'),
      title: 'Homem Rindo',
      author: 'Francisco Goya',
      year: 1820,
      material: 'Óleo sobre tela',
      colors: 'Preto, amarelo, branco',
      description:
        'Embora o sorriso aparente, esta obra transmite inquietação. Faz parte das obras mais obscuras de Goya, onde o riso pode ser interpretado como loucura ou desespero.',
    },
    {
      image: require('./assets/monet.jpg'),
      title: 'Pôr-do-sol em Veneza',
      author: 'Claude Monet',
      year: 1908,
      material: 'Óleo sobre tela',
      colors: 'Laranja, azul, lilás',
      description:
        'Esta obra de Claude Monet retrata a beleza do entardecer em Veneza com pinceladas suaves e tons vibrantes. A atmosfera tranquila e os reflexos da luz criam uma sensação de contemplação.',
    },
    {
      image: require('./assets/monet2.jpg'),
      title: 'Mulher com Sombrinha',
      author: 'Claude Monet',
      year: 1875,
      material: 'Óleo sobre tela',
      colors: 'Verde, branco, azul claro',
      description:
        'Retrato da esposa e filho de Monet em um dia ensolarado, essa obra é símbolo do Impressionismo. A luz natural e o vento no vestido trazem leveza e movimento à cena.',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {artworks.map((art, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedArt(art)}
            style={styles.card}
          >
            <Image source={art.image} style={styles.image} resizeMode="cover" />
            <View style={styles.info}>
              <Text style={styles.title}>{art.title}</Text>
              <Text style={styles.text}>Autor: {art.author}</Text>
              <Text style={styles.text}>Ano: {art.year}</Text>
              <Text style={styles.text}>Material: {art.material}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal */}
      {selectedArt && (
        <Modal
          visible={true}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setSelectedArt(null)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Image source={selectedArt.image} style={styles.modalImage} resizeMode="cover" />
              <Text style={styles.modalTitle}>{selectedArt.title}</Text>
              <Text style={styles.modalText}>Autor: {selectedArt.author}</Text>
              <Text style={styles.modalText}>Ano: {selectedArt.year}</Text>
              <Text style={styles.modalText}>Material: {selectedArt.material}</Text>
              <Text style={styles.modalText}>Cores principais: {selectedArt.colors}</Text>
              <Text style={styles.modalDescription}>{selectedArt.description}</Text>
              <Pressable onPress={() => setSelectedArt(null)} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 130,
    height: 130,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'LongShot',
    marginBottom: 4,
  },
  text: {
    color: '#ccc',
    fontSize: 14,
    fontFamily: 'LongShot',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '100%',
  },
  modalImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'LongShot',
    marginBottom: 10,
  },
  modalText: {
    color: '#ccc',
    fontSize: 14,
    fontFamily: 'LongShot',
    marginBottom: 4,
  },
  modalDescription: {
    color: '#aaa',
    fontSize: 14,
    fontFamily: 'LongShot',
    marginTop: 10,
    textAlign: 'justify',
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: '#444',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'LongShot',
  },
});
