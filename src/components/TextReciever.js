import React from 'react'

const TextReciever=()=>{
    return(
        <div className="center">
            <div className="hidden" data-quiet-profile-name="audible"></div>
            <div className="wrapper">
            <header>
            <h1 className="white-text">Receive Text</h1>
            </header>
            <section>
            <div className="hidden" data-quiet-warning></div>
            <pre className="white-text" data-quiet-receive-text-target>Your received text will show up here. Waiting...</pre>
            </section>
            </div>
            <div>
            <a href="/TextReciever" className="waves-effect waves-light btn-large">Retry</a>
            </div>
        </div>
    )
}

export default TextReciever