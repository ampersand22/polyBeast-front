import { useState, useEffect, useCallback } from 'react'

const useSound = (soundFilePath) => {
    const [sound, setSound] = useState({ play: () => { } })
    const [playing, setPlaying] = useState(false)
    const play = useCallback(() => sound.play(), [sound])

    useEffect(() => {
        setSound(new Audio(soundFilePath))
    }, [soundFilePath])

    return [play]
}

export default useSound