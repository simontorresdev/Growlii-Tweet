import Devit from '../../components/Devit'

export default function DevitPage(props){
  return(
    <>
      <Devit {...props} />
    </>
  )
}

export async function getServerSideProps (context) {
  const {params, res} = context
  const {id} = params


  // const apiResponse = await fetch(`http://localhost:3000/api/devits/${id}`)
  // const apiResponse = await fetch(`https://growliitweet.vercel.app/api/devits/${id}`)
  const apiResponse = await fetch(`https://growlii-tweet.vercel.app/api/devits/${id}`)

  if(apiResponse.ok){
    const props = await apiResponse.json()
    return {props}
  } 
  if(res){
    res.writeHead(404).end()
  }
}