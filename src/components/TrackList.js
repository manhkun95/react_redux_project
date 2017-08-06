import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

class TrackList extends Component{
  static propTypes = {
    tracks: PropTypes.array
  }

  static defaultProps = {
    tracks: []
  }
  render(){
    return (
      <div>
        {
          this.props.tracks.map((track, id)=> {
            return <div key = {id}> Track: {track.title} </div>;
          })
        }
      </div>
    )
  }
}

export default connect(({tracks})=>({tracks}))(TrackList)
