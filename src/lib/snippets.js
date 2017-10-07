import React from 'react';

const snips = module.exports = {};

snips.node = (
  <div>
    <p>
      Using Node.js in combination with express, I'm able to construct a RESTful APIs quickly and efficiently. APIs easily accomodate two factor authentication and custom middleware.


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
      React's one way data flow, complimented by Redux's state managment lends way to the development of incredibly performant applications. React's component architecture is akin to a digital playground. It's by far my favorite framework to work with :D
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
