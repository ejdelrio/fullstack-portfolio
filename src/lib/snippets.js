import React from 'react';

const snips = module.exports = {};

snips.node = (
  <div>
    <p>
      Using Node.js in combination with express, I'm able to construct RESTful APIs quickly and efficiently. APIs easily accomodate two factor authentication and custom middleware.


      Below is a sample of an endpoint that performs a complex database query. The query performs a radial search by distance, using longitude and latitude coordinates saved to the model.
    </p>
    <pre><code className='language-javascript'>
    profileRouter.get('/api/userQuery/', bearerAuth, {`profileFetch, function(req, res, next) {
      debug('GET /api/userQuery/'); searches work;
      //the limit parameter dictates how many items we'll pull per query
      //max represents max distance from the users location.

      let {maxDistance, coords, limit, type, genres} = req.query

      let locationQuery = {
        location: {
          $near: coords,
          $maxDistance: parseInt(maxDistance)/100;
        },
        type: req.query.type
      };

      Profile.find(locationQuery)
      .limit(parseInt(limit))
      .exec(function(err, result) {
        if(err) return next(createError(400, err.message));
        if(genres.length === 0) return res.json(result);


        let genreHashMap = {};
        let newResult = [];

        genres.forEach(val => {
          genreHashMap[val] = true;
        });

        result.forEach(val => {
          for (let i = 0; i < val.genre.length; i++) {

            if(genreHashMap[val.genre[i]]) {
              newResult.push(val);
              break;
            }
          }
        });
        res.json(newResult);
      })
      .catch(err => next(createError(404, err)));
    });
  }`}

    </code></pre>
  </div>
)

snips.react = (
  <div>
    <p>
      React's one way data flow, complimented by Redux's state managment lends way to the development of incredibly performant applications. React's component architecture is akin to a digital playground. It's by far my favorite framework to work with. The code below displays a React reusable React component that take several props, one being an object constructor for a trie search tree. The tree is than build using an array of strings. Any text input is passed into the tree to search, the the results are rendered below.
    </p>
    <pre><code className='language-javascript'>
    {`
    import React from 'react';

    class AutoCompInput extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          queryResults: [],
          textInput: ''
        }
        this.onChange = this.onChange.bind(this);
      }

      componentWillMount() {
        let {Tree, library} = this.props;
        this.genreLibrary = new Tree();
        this.genreLibrary.loadLibrary(library);
      }
      componentDidMount() {
        console.log(this.genreLibrary);
      }

      onChange(e) {
        let {name, value} = e.target;
        let queryResults = value.length > 0 ?  this.genreLibrary.searchWords(value): [];
        this.setState({
          [name]: value,
          queryResults
        })
      }

      render() {
        return(
          <div id={this.props.className}>
            <input
              type='text'
              name='textInput'
              placeholder={this.props.placeholder}
              onChange={this.onChange}
              value={this.state.textInput}
              autoComplete='off'
            />
            <ul>
              {this.state.queryResults.map((item, ind) => {
                return(
                  <li key={ind} onClick={() => this.props.onComplete(item)}>
                    {this.props.element(item)}
                  </li>
                )
              })}
            </ul>
          </div>
        )
      }
    }

    export default AutoCompInput
    `}
    </code></pre>
  </div>
)

snips.mongo = (
  <div>
    <p>
      Using MongoDB with Mongoose, I'm able to rapidly construct and model to leverage data persistence. Models can hold references to many other models allowing for the creation of complex objects. The code snippet below represents a MongoDB Model for what may be considered a profile model.
    </p>
    <pre><code className='language-javascript'>
      {
      `
      'use strict';


      require('dotenv').config();
      const mongoose = require('mongoose');
      const debug = require('debug')(#APP_NAME: Profile Model);
      const Schema = mongoose.Schema;

      const profileSchema = new Schema({
        userID: {type: Schema.Types.ObjectId, required: true, unique: true},
        userName: {type: String, unique: true, required: true},
        conversations: [{type: Schema.Types.ObjectId, ref: 'convoNode'}],
        type: {type: String, required: true},
        coords: [{type: Number, index: '2d', required: true}],
        notifications: [{type: Schema.Types.ObjectId, ref: 'notification'}],
        albums: [{type: Schema.Types.ObjectId, ref: 'album'}],
        photos: [{type: Schema.Types.ObjectId, ref: 'photo'}],
        videos: [{type: Schema.Types.ObjectId, ref: 'video'}],
        genres: [{type: String}],
        bio: {type: String, required: true}
      });

      const Profile = module.exports = mongoose.model('profile', profileSchema);`
    }
    </code></pre>
  </div>
)

snips.aws = (
  <div>
    <p>Amazon Web Services offers additional development tools for applications. One of the major features I leverage is the s3 storage. This allows photos, images and many other file types to be stored from the client without bloading precious data base space. The npm s3 module is used in conjution with the s3 cloud. Below is sample code for an s3 audio file upload.</p>
    <pre><code className='language-javascript'>
    {`
    WS.config.setPromisesDependency(require('bluebird'));

    const s3 = new AWS.S3();
    const dataDir = __dirname + '/../data-mp3s';
    const upload = multer({ dest: dataDir });

    const trackRouter = module.exports = Router();
    var trackKey = '';

    function s3uploadProm(params) {
      console.log('called s3uploadProm', params);
      return new Promise((resolve, reject) => {
        s3.upload(params, (err, s3data) => {
          if(err) console.log('s3uploadProm error', err);
          console.log('s3datas', s3data);
          resolve(s3data);
        });
      });
    }

    trackRouter.post('/api/album/:id/track', jsonParser, bearerAuth, profileFetch, upload.single('soundFile'), function (req, res, next) {
      debug('POST: /api/album/:id/track');

      if (!req.file) return next(createError(400, 'file not found'));

      if (!req.file.path) return next(createError(500, 'file not saved'));


      let ext = path.extname(req.file.originalname);

      let params = {
        ACL: 'public-read',
        Bucket: process.env.AWS_BUCKET,
        Key: req.file.filename + ext,
        Body: fs.createReadStream(req.file.path)
      };

      Album.findById(req.params.id)
      .then(album => {
        let track = new Track(req.body);
        track.albumID = album._id;
        track.profileID = req.profile._id;
        album.tracks.push(track._id);
        album.save();
      })
      .then(() => {
        return s3uploadProm(params)
      })
      .then(s3data => {
        trackKey = s3data.key;
        del([dataDir + '/*']);
        let trackData = {
          title: req.body.title,
          url: req.body.url,
          profileID: req.profile._id,
          albumID: req.params.id,
          awsKey: trackKey,
          awsURI: s3data.location
        };
        return Track.create(trackData);
      })
      .then(track => {
        console.log('CREATED THE TRACK!', track);
        res.json(track);
      })
      .catch(err => next(createError(404, err.message)));

    });
    `}
    </code></pre>
  </div>
)
