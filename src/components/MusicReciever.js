import React from 'react'

const MusicReciever=()=>{
    return(
        <div className="center">
            <div className="hidden" data-quiet-profile-name="audible"></div>
            <div className="wrapper">
            <header>
            <h1 className="white-text">Receive Music file</h1>
            </header>
            <section>
            <div className="hidden" data-quiet-warning></div>
            <pre className="white-text" data-quiet-receive-text-target>Your received music file/url will show up here. Waiting...</pre>
            </section>
            </div>
            <div>
            <a href="/MusicReciever" className="waves-effect waves-light btn-large">Retry</a>
            <p className="white-text">To prevent piracy I haven't included audio file transmission as of now.</p>
            <p className="white-text">Will be collaborating to ensure legal distribution of files</p>
            <p className="white-text">Until then enjoy music by sharing URLs !!</p>
            </div>
        </div>
    )
}

export default MusicReciever