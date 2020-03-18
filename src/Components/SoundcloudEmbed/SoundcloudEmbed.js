import React from 'react'

export default function SoundcloudEmbed(props) {
    return (
        <div className="SoundcloudEmbed">
            <iframe 
                width="100%" 
                height="300" 
                scrolling="no" 
                frameborder="no"  
                src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + props.trackId + "&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"}
            >
            </iframe>
        </div>
    )
}
