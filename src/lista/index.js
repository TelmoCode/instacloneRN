import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';


class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data
        }

        this.mostrarLikes = this.mostrarLikes.bind(this);
        this.likes = this.likes.bind(this);
        this.carregarIcone = this.carregarIcone.bind(this);
    }

    carregarIcone(likeada){
        return likeada ? require('../img/likeada.png') : require('../img/like.png');
    
    }

    likes() {

        let feed = this.state.feed;

        if (feed.likeada === true) {

            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likeada - 1
                }
            })
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likeada + 1
                }
            })
        }
    }

    mostrarLikes(likers) {

        let feed = this.state.feed;
        
        if (feed.likers <= 0) {
            return;
        }

        return (

            <Text style={styles.likes}>
                {feed.likers} {feed.likers > 1 ? 'Curtidas' : 'Curtida'}
            </Text>
        );


        

    }

    render() {
        return (

            <View>
                <View style={styles.viewFeed}>
                    <Image
                        source={{ uri: this.state.feed.imgperfil }}
                        style={styles.imgFeed}
                    />
                    <Text style={styles.nomeFeed}>{this.state.feed.nome}</Text>
                </View>

                <Image
                    resizeMode='cover'
                    source={{ uri: this.state.feed.imgPublicacao }}
                    style={styles.imgPublicacao}
                />

                <View style={styles.rodape}>


                    <TouchableOpacity onPress={this.likes}>
                        <Image
                            source={this.carregarIcone(this.state.feed.likeada)}
                            style={styles.btnLike}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnArea}>
                        <Image
                            source={require('../img/send.png')}
                            style={styles.btnLike}
                        />
                    </TouchableOpacity>

                </View>

                {this.mostrarLikes(this.state.feed.likers)}

                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>
                        {this.state.feed.nome}
                    </Text>
                    <Text style={styles.descripRodape}>
                        {this.state.feed.descricao}
                    </Text>
                </View>


            </View>

        );
    }
}

const styles = StyleSheet.create({

    viewFeed: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'

    },

    nomeFeed: {

        fontSize: 18,
        marginLeft: 20,
        alignItems: 'center',
        fontWeight: 'bold'

    },

    imgFeed: {
        width: 50,
        height: 50,
        borderRadius: 100,
        padding: 8
    },

    imgPublicacao: {
        flex: 1,
        height: 400
    },

    rodape: {
        padding: 5,
        flexDirection: 'row',

    },

    btnArea: {
        paddingLeft: 5

    },

    btnLike: {
        width: 33,
        height: 33

    },

    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center'

    },

    nomeRodape: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5

    },

    descripRodape: {
        fontSize: 15,
        paddingLeft: 5

    },

    likes: {
        fontWeight: 'bold',
        marginLeft: 5

    }


})

export default Lista;