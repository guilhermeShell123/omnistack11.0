import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import { View, TouchableOpacity, Text, Image, Linking} from 'react-native';
import styles from './styles';
import logoImg from '../../assets/logo.png';

import * as MailComposer from 'expo-mail-composer';

export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}`;
    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Héroi do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        });
    }

    function sendWhatsapp(){
        //Deep linking
        Linking.openURL(`whatsapp://send?phone=5585996665075&text=${message}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={28} color="#E82041" />
            </TouchableOpacity>
        </View>

        <View style={styles.detail}>
            <Text style={[styles.detailProperty, {marginTop: 0}]}>ONG:</Text>
            <Text style={styles.detailValue}>{incident.name} </Text>

            <Text style={styles.detailProperty}>CASO:</Text>
            <Text style={styles.detailValue}>{incident.description}</Text>

            <Text style={styles.detailProperty}>VALOR: </Text>
            <Text style={styles.detailValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
        </View>


        <View style={styles.contatBox}>
            <Text style={styles.heroTitle}>Salve o dia!</Text>
            <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
            <Text style={styles.heroDescription}>Entre em contato:</Text>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                    <Text style={styles.actionText}>Whatsapp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action} onPress={sendMail}>
                    <Text style={styles.actionText}>E-mail</Text>
                </TouchableOpacity>
            </View>
        </View>


        </View>
    );
}