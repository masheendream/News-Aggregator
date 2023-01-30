const ContentDetails = ({content}) => {
    return(
        <div className="content-details">
            <h4>{content.title}</h4>
            <p>{content.body}</p>
            <p>{content.url}</p>
            <p>{content.createdAt}</p>
        </div>
    )
}

export default ContentDetails