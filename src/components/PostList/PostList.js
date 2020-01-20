import React, { Component } from 'react';

import './PostList.css';

import Post from '../Post/Post';
import profile from '../../assets/profile.png';

class PostList extends Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Luan Neves",
          avatar: profile
        },
        date: "04 Jun 2019",
        content: "Pessoal, Alguém consegue avaliar se meu layout deste desafio ficou bom?",
        comments: [
          {
            id: 2,
            author: {
              name: "Luan Neves",
              avatar: profile
            },
            content: "Acredito que tenha ficado legal, alterei apenas algumas cores, fontes e não utilizei a logo disponibilizada..."
          },
          {
            id: 3,
            author: {
              name: "Luan Neves",
              avatar: profile
            },
            content: "O código não ficou idêntico ao da correção, porém acredito que com esta organização fique mais fácil de entender."
          }
        ]
      }, {
        id: 4,
        author: {
          name: 'Neil Cook',
          avatar: 'https://i.pravatar.cc/150?img=8'
        },
        date: '04 Jun 2019',
        content:
          'O que mais você fez de diferente além da estruturação do código?',
        comments: [
          {
            id: 5,
            author: {
              name: 'Luan Neves',
              avatar: profile
            },
            date: '04 Jun 2019',
            content:
              'Se você encontrar um post sem comentário, verá que o divisor que separa post de resposta apenas renderiza se existir respostas!(¬¬)'
          }, 
          {
            id: 10,
            author: {
              name: 'Neil Cook',
              avatar: 'https://i.pravatar.cc/150?img=8'
            },
            date: '04 Jun 2019',
            content:
              'Que massa!'
          },
          {
            id: 11,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '04 Jun 2019',
            content:
              'Aí sim!'
          },
        ]
      }, {
        id: 9,
        author: {
          name: 'Luan Neves',
          avatar: profile
        },
        date: '04 Jun 2019',
        content:
          'Este post, por exemplo, não possui resposta. Logo não renderiza o divisor!',
        comments: []
      }, {
        id: 6,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://i.pravatar.cc/150?img=51'
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 7,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '04 Jun 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 8,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '04 Jun 2019',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      }
    ]
  };

  render(){
  const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <Post key={post.id} {...post}/>
        ))}
      </div>
    );
  }
}

export default PostList;