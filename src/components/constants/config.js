const sequenceList = [
    {
        id: 0,
        title: 'Sequence 1 - 16 Bars',
        noteCount: 16,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick2',
                onNotes: [0, 3, 10, 17 ],
            },
            {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [4, 7, 9, 12, 15],
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [8],
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [2, 4, 6, 8, 10, 12, 14],
            },
            {
                title: 'Triangle',
                soundFile: 'triangle',
                onNotes: [7],
            },
            
        ]
    },
    {
        id: 1,
        title: 'Sequence 2 - 16 Bars',
        noteCount: 16,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 2, 4, 6, 8, 10, 12, 14],
            },
            {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [0, 4, 9],
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [12],
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [3, 7, 11],
            }
        ]
    },
    {
        id: 2,
        title: 'Sequence 3 - 32 Bars',
        noteCount: 32,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 4, 8, 12],
            },
            {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [4, 12],
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [2, 6, 10, 14],
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [0, 2, 4, 6, 8, 10, 12, 14],
            }
        ]
    },
    {
        id: 3,
        title: 'Sequence 4 - 64 Bars',
        noteCount: 64,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 4, 8, 12, 20],
            },
            {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [],
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [],
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [],
            }
        ]
    },
    {
        id: 4,
        title: 'Batman Loop - 32 Bars - 160BPM',
        noteCount: 32,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick2',
                onNotes: [0, 6, 16, 22],
            },
            {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [8, 24],
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [],
            },
            {
                title: 'Closed Hat',
                soundFile: 'lexhat',
                onNotes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 23, 24, 26, 27, 29, 30, 31],
            },
            {
                title: 'bat strings',
                soundFile: 'bat_strings',
                onNotes: [0],
            },
            {
                title: 'bat pad',
                soundFile: 'batmanpad',
                onNotes: [0],
            },
            {
                title: 'bat lead',
                soundFile: 'batmanlead',
                onNotes: [0],
            },
            {
                title: 'batman loop 1',
                soundFile: 'batmanloop1',
                onNotes: [],
            },
            {
                title: 'batman loop 2',
                soundFile: 'batmanloop2',
                onNotes: [],
            },
        ]
    },
    {
        id: 5,
        title: 'Club Kit - 32Bars - 140BPM',
        noteCount: 32,
        trackList: [
            {
                title: 'Lex Kick',
                soundFile: 'lexkick',
                onNotes: [0, 3, 6, 8, 16, 19,],
            },
            {
                title: 'lex clap',
                soundFile: 'lexclap',
                onNotes: [4, 12, 20, 28 ],
            },
            {
                title: 'lex hat',
                soundFile: 'lexhat',
                onNotes: [0, 2, 3 , 4, 6, 8, 10, 11, 12, 14, 16, 18, 19, 20, 22, 24, 26, 27, 28, 30, 31, 32 ],
            },
            {
                title: 'pb clubpad',
                soundFile: 'clubpad',
                onNotes: [0],
            },
            {
                title: 'pb clubpad2',
                soundFile: 'clubpad',
                onNotes: [16],
            },
            {
                title: 'pb club clip',
                soundFile: 'clubclip',
                onNotes: [],
            },
            {
                title: 'pb voc full',
                soundFile: 'pbvocalsamp',
                onNotes: [0],
            },
            {
                title: 'pb voc 1',
                soundFile: 'pbvocal1',
                onNotes: [],
            },
            {
                title: 'pb voc 2',
                soundFile: 'pbvocal2',
                onNotes: [],
            },
        ]
    },
]

const soundFiles = {
    'kick': require('./kick10.mp3'),
    'kick2': require('./kick2.wav'),
    'snare': require('./snare1.wav'),
    'triangle': require('./triangle.mp3'),
    'hh_closed': require('./closedhat1.mp3'),
    'hh_open': require('./openhat1.mp3'),
    'batmanloop1': require('./batmanloop1.wav'),
    'bat_strings': require('./batmanstring160bpm.wav'),
    'batmanloop2': require('./batmanloop2.wav'),
    'batmanlead': require('./batmanlead160bpm.wav'),
    'batmanpad': require('./batmanpad160bpm.wav'),
    'lexkick': require('./lexkick.wav'),
    'lexclap': require('./lexclap.wav'),
    'lexhat': require('./lexhat.wav'),
    'clubpad': require('./clubpad140.wav'),
    'clubclip': require('./clubclip1.wav'),
    'pbvocalsamp': require('./pbvocalsamp.wav'),
    'pbvocal1': require('./pbvocal1.wav'),
    'pbvocal2': require('./pbvocal2.wav'),
}

// const soundFilesArray = [
//     {
//     id: 0,
//     'kick': require('./kick10.mp3'),
//     'kick2': require('./kick2.wav'),
//     },
//     {
//     'snare': require('./snare1.mp3'),
//     'triangle': require('./triangle.mp3'),
//     'hh_closed': require('./closedhat1.mp3'),
//     'hh_open': require('./openhat1.mp3'),
//     'batmanloop1': require('./batmanloop1.wav'),
//     'bat_strings': require('./batmanstring160bpm.wav'),
//     'batmanloop2': require('./batmanloop2.wav'),
//     'batmanpad': require('./batmanpad160bpm.wav')
// }
// ]


// const soundPlay = () => {
//     const sound = new Howl ({
//         src,
//         html5: true
//     })
//     sound.play()
// }

export { sequenceList, soundFiles }