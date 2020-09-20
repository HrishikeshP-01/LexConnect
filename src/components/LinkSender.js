import React from 'react'

const LinkSender=()=>{
    return(
        <React.Fragment>
        <div className="center">
        <div className="hidden" data-quiet-profile-name="audible"/>
        <div className="wrapper">
        <header>
        <h3 className="white-text">Send text</h3>
        </header>
        <section>
        <div className="hidden" data-quiet-warning></div>
        <div className="form-group">
        <textarea autoFocus={true} autoCapitalize="none" autoComplete="off" spellCheck="off" className="form-control white-text"  rows="5" data-quiet-text-input></textarea>
      </div>
      <button type="button" className="btn btn-default waves-effect waves-light btn-large" data-quiet-send-button data-quiet-sending-text="Sending...">Send</button>
      </section>
      </div>
      </div>
      </React.Fragment>
    )
}

export default LinkSender