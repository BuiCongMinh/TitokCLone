const cors = require('cors')
const express = require('express')
const path = require('path')
const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/publics', express.static(path.join(__dirname, 'publics')))
app.use(cors())

// app.use('/', (req, res) => {
// res.send('api worked!')
// })



app.use('/videos', (req, res) => {
    const videos = [
        {
            title: 'Video 5',
            description: 'Video 5 Description',
            source: `http://localhost:${port}/publics/videos/video5.mp4`,
            likeCounter: 3000,
            shareCounter: 3000,
            commentCounter: 3000,
            thumbnail: '',
            chanel: {
                name: 'MVN',
                folowerCounter: 0
            }
        },
        {
            title: 'Video 4',
            description: 'Video 4 Description',
            source: `http://localhost:${port}/publics/videos/video4.mp4`,
            likeCounter: 3000,
            shareCounter: 3000,
            commentCounter: 3000,
            thumbnail: '',
            chanel: {
                name: 'MVN',
                folowerCounter: 0
            }
        },
        {
            title: 'Video 3',
            description: 'Video 3 Description',
            source: `http://localhost:${port}/publics/videos/video3.mp4`,
            likeCounter: 3000,
            shareCounter: 3000,
            commentCounter: 3000,
            thumbnail: '',
            chanel: {
                name: 'MVN',
                folowerCounter: 0
            }
        },
        {
            title: 'Video 1',
            description: 'Video 1 Description',
            source: `http://localhost:${port}/publics/videos/video1.mp4`,
            likeCounter: 3000,
            shareCounter: 3000,
            commentCounter: 3000,
            thumbnail: '',
            chanel: {
                name: 'MVN',
                folowerCounter: 0
            }
        },
        {
            title: 'Video 2',
            description: 'Video 2 Description',
            source: `http://localhost:${port}/publics/videos/video2.mp4`,
            likeCounter: 3000,
            shareCounter: 3000,
            commentCounter: 3000,
            thumbnail: '',
            chanel: {
                name: 'MVN',
                folowerCounter: 0
            }
        },

    ]
    return res.status(200).json(videos)
})

//  ===== api ===== 

app.post('/api/v1/login', (req, res) => {
    const { username, password } = req.body
    if (username !== 'm@gmail.com' || password !== "1234" ) {
        return res.status(401).json({
            message: 'wrong email or passsword !'
        })
    }

    return res.status(200).json({
        message: 'succes',
        token: '123ABC'
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
