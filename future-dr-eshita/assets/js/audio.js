FutureDr.initAudio=()=>{const audio=FutureDr.$('#ambientAudio');if(!audio)return;audio.volume=.28;FutureDr.once(FutureDr.$('#touchStart'),['click','touchstart'],()=>audio.play().catch(()=>{}))};
