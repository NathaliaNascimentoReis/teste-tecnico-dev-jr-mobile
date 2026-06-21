import {
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PerfilScreen() {
    return (
        <ScrollView style={styles.background} contentContainerStyle={styles.container}>
            <View style={styles.tituloDiv}>
                <Ionicons name="person" size={24} color="#386d68" />
                <Text style={styles.titulo}>Bem-vindo ao meu perfil!</Text>
            </View>

            <View style={styles.linha}></View>

            <View style={styles.card}>
                <Image
                    source={{
                        uri: 'https://i.pinimg.com/736x/0e/53/de/0e53dee842f7e54849b82442685ac980.jpg',
                    }}
                    style={styles.foto}></Image>
                <View style={styles.infos}>
                    <View style={styles.camposInfo}>
                        <Text style={styles.boldText}>Meu nome:</Text>
                        <Text style={styles.infoTexto}>Nathália Nascimento Reis</Text>
                    </View>
                    <View style={styles.camposInfo}>
                        <Text style={styles.boldText}>Minha idade:</Text>
                        <Text style={styles.infoTexto}>18 anos</Text>
                    </View>
                    <View style={styles.camposInfo}>
                        <Text style={styles.boldText}>Meu curso:</Text>
                        <Text style={styles.infoTexto}>Técnico em Desenvolvimento de Sistemas</Text>
                    </View>
                </View>
            </View>

            <View style={styles.cardSobre}>
                <Text style={styles.tituloCard}>Sobre Mim</Text>
                <View style={styles.textos}>
                    <Text style={styles.infoTexto}>
                        Sou aluna do curso Técnico em Desenvolvimento de Sistemas do SENAI e sou uma
                        desenvolvedora FullStack apaixonada por desenvolvimento organizado,
                        planejado e cuidadoso com o desejo dos meus clientes. Perterço à turma 2TDS2
                        e estou no processo de conclusão do técnico, em conjunto com o Ensino Médio
                        pelo SESI, neste ano de 2026.
                    </Text>
                    <Text style={styles.infoTexto}>
                        Estudo a área de tecnologia há alguns anos e me especializo em criar
                        soluções inovadoras e eficientes.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#eff9f8',
    },
    container: {
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    tituloDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        width: '100%',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#386d68',
        alignSelf: 'center',
    },
    linha: {
        width: '100%',
        height: 1,
        backgroundColor: '#386d68',
        marginTop: 10,
    },
    card: {
        marginTop: 20,
        backgroundColor: '#c5e6e3',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        borderRadius: 12,
        padding: 12,
        borderColor: '#91bebb',
        borderWidth: 2,
    },
    foto: {
        width: 100,
        height: 100,
        borderRadius: 65,
        alignSelf: 'center',
    },
    infos: {
        flex: 1,
        gap: 5,
    },
    camposInfo: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    infoTexto: {
        color: '#386d68',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        marginBottom: 5,
    },
    boldText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#284e4a',
        lineHeight: 20,
        marginRight: 5,
    },
    cardSobre: {
        width: '100%',
        marginTop: 20,
        backgroundColor: '#c5e6e3',
        gap: 10,
        borderRadius: 12,
        padding: 16,
        borderColor: '#91bebb',
        borderWidth: 2,
    },
    tituloCard: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#284e4a',
        marginRight: 5,
    },
    textos: {
        gap: 20,
    },
});
