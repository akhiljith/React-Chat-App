
const MyMessage = (message)=> {
    //Checking our message contains any attachments.
    if(message?.attachments?.length>0){
        return(
            <img 
            src={message.attachments[0].file}
            alt='message-attachment'
            className='message-image'
            style={{float:'right'}}
            />
        )
    }
    // give styles to our message. Which appear at right side.
    return(
        <div style={{float:'right',marginRight:'18px',color:'white',backGroundColor:'#3b2a50'}}>
            {message.text}
        </div>
    )
}

export default MyMessage;