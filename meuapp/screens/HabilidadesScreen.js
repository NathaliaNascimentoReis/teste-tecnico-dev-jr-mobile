import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    FlatList,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const dadosHabilidades = [
    {
        id: '1',
        icon: 'logo-react',
        texto: 'Minha experiência com React vai além de simplesmente criar componentes. Eu foco na arquitetura da aplicação e na eficiência do código.',
    },
    {
        id: '2',
        icon: 'git-branch',
        texto: 'Meu conhecimento em Git vai além do básico do dia a dia. Estou confortável utilizando recursos avançados quando o projeto exige organização e correções cirúrgicas.',
    },
    {
        id: '3',
        icon: 'logo-html5',
        texto: 'Domino o HTML para a estruturação dos meus sistemas e potencializo com o dinamismo do JavaScript.',
    },
    {
        id: '4',
        icon: 'logo-css3',
        texto: 'O CSS moderno é uma ferramenta extremamente poderosa, e eu o utilizo para criar interfaces responsivas, rápidas e visualmente incríveis.',
    },
    {
        id: '5',
        icon: 'cloud',
        texto: 'Minha experiência em nuvem garante o armazenamento e a segurança dos bancos de dados e servidores que desenvolvo.',
    },
];

const data = [
    { id: '1', title: 'Postman' },
    { id: '2', title: 'Figma' },
    { id: '3', title: 'Github' },
    { id: '4', title: 'PostgreSQL' },
    { id: '5', title: 'Nodemon' },
    { id: '6', title: 'Node.js' },
    { id: '7', title: 'Supabase' },
    { id: '8', title: 'Render' },
    { id: '9', title: 'Prisma' },
    { id: '10', title: 'JavaScript' },
    { id: '11', title: 'Cors' },
];

const { width } = Dimensions.get('window');

export default function HabilidadesScreen() {
    const renderCard = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.icon}>
                <Ionicons name={item.icon} size={30} color="#386d68" />
            </View>
            <Text style={styles.infoTexto}>{item.texto}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <View style={styles.lista}>
            <Text style={styles.ponto}>•</Text>
            <Text style={styles.infoTexto}>{item.title}</Text>
        </View>
    );

    return (
        <ScrollView style={styles.background} contentContainerStyle={styles.container}>
            <View style={styles.tituloDiv}>
                <Ionicons name="star" size={24} color="#386d68" />
                <Text style={styles.titulo}>Minhas Habilidades</Text>
            </View>

            <View style={styles.linha}></View>

            <View style={styles.lista}>
                <FlatList
                    data={dadosHabilidades}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContainer}
                />
            </View>

            <View style={styles.outrosCampo}>
                <Ionicons name="star" size={20} color="#386d68" />
                <Text style={styles.texto}>
                    Outras tecnologias, linguagens e ferramentas que utilizo!
                </Text>
                <Ionicons name="star" size={20} color="#386d68" />
            </View>

            <View style={styles.maisHabilidades}>
                <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
                    {data.map((item) => (
                        <View key={item.id} style={styles.listaDois}>
                            <Text style={styles.ponto}>•</Text>
                            <Text style={styles.textoItem}>{item.title}</Text>
                        </View>
                    ))}
                </ScrollView>
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
        marginBottom: 20,
    },
    lista: {
        width: '100%',
    },
    flatListContainer: {
        paddingHorizontal: 20,
        paddingRight: 40,
        gap: 15,
    },
    card: {
        width: width * 0.85,
        height: 250,
        marginTop: 20,
        backgroundColor: '#c5e6e3',
        justifyContent: 'center',
        gap: 10,
        borderRadius: 12,
        padding: 12,
        borderColor: '#91bebb',
        borderWidth: 2,
        marginRight: 15,
        alignItems: 'center',
    },
    infoTexto: {
        color: '#386d68',
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 20,
        marginBottom: 5,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    icon: {
        alignItems: 'center',
        marginBottom: 8,
    },
    cardGithub: {
        width: width * 0.75,
        height: 140,
        marginTop: 20,
        backgroundColor: '#c5e6e3',
        justifyContent: 'center',
        gap: 10,
        borderRadius: 12,
        padding: 12,
        borderColor: '#91bebb',
        borderWidth: 2,
        marginRight: 15,
        alignItems: 'center',
    },
    infos: {
        flex: 1,
        gap: 5,
    },
    camposInfo: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    boldText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#284e4a',
        lineHeight: 20,
        marginRight: 5,
        textAlign: 'center',
    },
    outrosCampo: {
        width: width * 0.85,
        flexDirection: 'row',
        gap: 3,
        marginTop: 30,
        marginBottom: 10,
        alignItems: 'center',
    },
    texto: {
        color: '#386d68',
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 20,
        textAlign: 'center',
        flex: 1,
    },
    maisHabilidades: {
        width: width * 0.85,
        height: 180,
        marginTop: 20,
        backgroundColor: '#c5e6e3',
        justifyContent: 'center',
        gap: 10,
        borderRadius: 12,
        padding: 20,
        borderColor: '#91bebb',
        borderWidth: 2,
        marginRight: 15,
        alignSelf: 'center',
    },
    listaDois: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    ponto: {
        fontSize: 20,
        marginRight: 10,
        color: '#386d68',
    },
    textoItem: {
        color: '#386d68',
        fontSize: 18,
        fontWeight: '500',
    },
});
