import React,{useState, useEffect} from 'react'
import {Container, PostForm} from '../Components'
import appwriteService  from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom' 

function EditPost() {

    const [posts, setPosts] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect( () => {
        if(slug){
            appwriteService.getPost().then( (post) =>{
                if(post){
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    },[slug , navigate])

  return posts? (
    <div className='py-8' >
        <Container>
            <PostForm/>
        </Container>
    </div> 
  ) : null
}

export default EditPost