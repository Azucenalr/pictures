function ImageShow(){
    return(
        <div>
            <img src={Image.url.small} alt={Image.alt_description}/>
        </div>
    )
}
export default ImageShow