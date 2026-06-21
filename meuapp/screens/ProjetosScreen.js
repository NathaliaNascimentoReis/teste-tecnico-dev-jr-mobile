import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Alert,
    Linking,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

const { width } = Dimensions.get('window');

const data = [
    {
        id: '1',
        categoria: 'E-mail: ',
        icone: 'mail',
        title: 'nathalia.n.reis@aluno.senai.br',
    },
    {
        id: '2',
        categoria: 'Github: ',
        icone: 'logo-github',
        title: 'NathaliaNascimentoReis',
    },
    {
        id: '3',
        categoria: 'Linkedin: ',
        icone: 'logo-linkedin',
        title: 'Nathália Nascimento Reis',
    },
];

export default function ProjetosScreen() {
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const envio = () => {
        if (!email || !mensagem) {
            Alert.alert('Atenção', 'Por favor, preencha todos os campos antes de enviar.');
            return;
        }

        Alert.alert('Sucesso!', `Mensagem enviada com sucesso de: ${email}`);
        setEmail('');
        setMensagem('');
    };

    const abrirGithub = async () => {
        const url = 'https://github.com/NathaliaNascimentoReis';
        const suportado = await Linking.canOpenURL(url);

        if (suportado) {
            await Linking.openURL(url);
        } else {
            console.log(`Não foi possível abrir o link: ${url}`);
        }
    };

    return (
        <ScrollView style={styles.background} contentContainerStyle={styles.container}>
            <View style={styles.tituloDiv}>
                <Ionicons name="folder" size={24} color="#386d68" />
                <Text style={styles.titulo}>Meus Projetos</Text>
            </View>

            <View style={styles.linha}></View>

            <View style={styles.card}>
                <Text style={styles.tituloCard}>Descontaí</Text>
                <View style={styles.textos}>
                    <Text style={styles.infoTexto}>
                        O Descontaí é um site de cupons e descontos direcionado a aproximação de
                        clientes e estabelecimentos comerciais, permitindo aos usuários uma forma
                        simples de consultar ofertas atualizadas das lojas de sua preferência, e
                        para as lojas oferece a visualização, cadastro e gerenciamento de suas
                        propostas de comércio. Para isso, implementamos um banco de dados, cada
                        tabela previamente populada, que guarda as informações das lojas, cupons e
                        descontos. O controle dessas informações no site foi realizado pelo back-end
                        (a área administrativa com CRUD completo, feito em JavaScript, que, a partir
                        de APIs, permite evidenciar, atualizar, criar e deletar as lojas, os
                        descontos e os cupons.
                    </Text>
                    <Text style={styles.infoTexto}>
                        Dessa forma, o Descontaí se apresenta como uma solução intuitiva e ideal
                        tanto para os usuários, que buscam boas oportunidades de consumo, e para as
                        empresas, que desejam promover seus produtos de forma facilitada.
                    </Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.tituloCard}>BookPedia</Text>
                <View style={styles.textos}>
                    <Text style={styles.infoTexto}>
                        O projeto aqui apresentado, nominado “BookPedia”, engloba todos os
                        conhecimentos adquiridos durante o terceiro semestre do curso de
                        Desenvolvimento de Sistemas, abordando o Desenvolvimento Mobile (Front-End e
                        Back-End), Banco de dados relacional e metodologias de organização como o
                        Scrum e o Kanban, de forma eficiente e analítica, pensando nas necessidades
                        dos stakeholders. Para atender os requisitos exigidos, foi proposto pelos
                        docentes um cenário de inserção para ser desenvolvido: um aplicativo
                        bilíngue de clube do livro que auxilie alunos na inserção em universidades e
                        no desenvolvimento analítico de habilidades de interpretação de obras
                        literárias.
                    </Text>
                    <Text style={styles.infoTexto}>
                        O BookPedia é um aplicativo de clube do livro direcionado a estudantes e
                        entusiastas da literatura que permite aos usuários acessarem, de forma
                        simples, análises literárias de obras relevantes para estudos acadêmicos.
                        Para isso, implementamos um banco de dados, com cada tabela previamente
                        populada, que guarda as informações dos livros, autores, enredos, movimentos
                        literários, questões de vestibulares e muitas outras entidades que
                        enriquecem o conteúdo do aplicativo.
                    </Text>
                </View>
            </View>

            <TouchableOpacity onPress={abrirGithub} activeOpacity={0.7}>
                <View style={styles.cardGithub}>
                    <Ionicons name="logo-github" size={50} color="#386d68" />
                    <View style={styles.infos}>
                        <View style={styles.camposInfo}>
                            <Text style={styles.boldText}>Veja mais no meu perfil do github!</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={styles.outrosCampo}>
                <Text style={styles.texto}>Encontre-me nas redes e contate-me!</Text>
            </View>

            <View style={styles.redesCampo}>
                {data.map((item) => (
                    <View key={item.id} style={styles.lista}>
                        <Ionicons name={item.icone} size={24} color="#386d68" />
                        <Text style={styles.textoItem}>{item.categoria}</Text>
                        <Text style={styles.textoItem}>{item.title}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.cardContato}>
                <View style={styles.tituloContatoDiv}>
                    <Ionicons name="chatbubbles" size={20} color="#386d68" />
                    <Text style={styles.tituloCard}>Me envie perguntas ou propostas aqui!</Text>
                </View>

                <Text style={styles.labelInput}>Seu email: </Text>
                <TextInput
                    style={styles.input}
                    placeholder="exemplo@email.com"
                    placeholderTextColor="#7ca8a4"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.labelInput}>Pergunta/proposta:</Text>
                <TextInput
                    style={[styles.input, styles.inputMultiline]}
                    placeholder="Escreva sua mensagem aqui..."
                    placeholderTextColor="#7ca8a4"
                    multiline={true}
                    numberOfLines={4}
                    value={mensagem}
                    onChangeText={setMensagem}
                />

                <TouchableOpacity style={styles.botaoEnviar} onPress={envio}>
                    <Text style={styles.textoBotao}>Enviar Mensagem</Text>
                    <Ionicons name="send" size={16} color="#eff9f8" />
                </TouchableOpacity>
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
    card: {
        width: '100%',
        marginTop: 20,
        backgroundColor: '#c5e6e3',
        gap: 10,
        borderRadius: 12,
        padding: 16,
        borderColor: '#91bebb',
        borderWidth: 2,
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
    tituloCard: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#284e4a',
        marginRight: 5,
    },
    textos: {
        gap: 20,
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
        alignSelf: 'center',
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
        fontSize: 16,
        fontWeight: 'bold',
        color: '#284e4a',
        lineHeight: 20,
        marginRight: 5,
        textAlign: 'center',
    },
    cardContato: {
        width: '100%',
        marginTop: 20,
        backgroundColor: '#c5e6e3',
        borderRadius: 12,
        padding: 16,
        borderColor: '#91bebb',
        borderWidth: 2,
    },
    tituloContatoDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 15,
    },
    labelInput: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#284e4a',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#eff9f8',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderColor: '#91bebb',
        borderWidth: 1,
        color: '#386d68',
        fontSize: 16,
        marginBottom: 15,
    },
    inputMultiline: {
        height: 100,
        textAlignVertical: 'top',
    },
    botaoEnviar: {
        backgroundColor: '#386d68',
        borderRadius: 8,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        marginTop: 5,
    },
    textoBotao: {
        color: '#eff9f8',
        fontSize: 16,
        fontWeight: 'bold',
    },
    outrosCampo: {
        width: width * 0.85,
        flexDirection: 'row',
        gap: 3,
        marginTop: 50,
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
    redesCampo: {
        width: width * 0.85,
        height: 300,
        marginTop: 20,
        backgroundColor: '#c5e6e3',
        gap: 10,
        borderRadius: 12,
        padding: 20,
        borderColor: '#91bebb',
        borderWidth: 2,
        marginRight: 15,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    lista: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 5,
        flexWrap: 'wrap',
    },
    textoItem: {
        color: '#386d68',
        fontSize: 18,
        fontWeight: '500',
    },
});
