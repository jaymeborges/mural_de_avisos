module.exports = {

    posts: [
        {
        id:"sdgghhh",
        title:"Teste do Mural",
        description:"Descricao Teste"
        },
    ],
    
    getAll(){
        return this.posts
    },

    newPost(title,description){

        this.posts.push({id:generateID,title,description})

    },

    deletePost(id){
        
    }

}

function generateID(){
    return Math.random().toString(36).substr(2, 9)
}