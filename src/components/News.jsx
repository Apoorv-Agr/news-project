const React = require('react');
const ReactCreateClass = require('create-react-class');

var News = ReactCreateClass({
  render: function() {
    console.log(this.props.match);
    const textColor = {
      color: '#615e5e'
    };
    const bckColor = {
        backgroundColor:'#ffffff'
    };
    const mainHead = {
      color: 'rgb(0, 0, 0)',
      fontWeight: '700'
    };
    const subHeadingTextColor = {
      color: 'rgb(0, 0, 0)'
    };
    const locationStyle = {
      color: '#afafaf',
      fontWeight: '700'
    };
    const profPicStyle ={
      color : 'rgb(0, 0, 0)',
      padding: '1.5% 0% 0% 5%'
    };
    return(
      <div className="container">
        <div className="row">
          <div className="hidden-xs col-sm-1"></div>
          <div className="hidden-xs col-sm-10">
            <div className ="panel">
              <div className="row">
                <div className="hidden-xs col-sm-2" style={profPicStyle}>ProfPic1</div>
                <div className="hidden-xs col-sm-9">
                  <div className ="panel-heading">
                    <div style={mainHead} >Obesity in America</div>
                    <div style={subHeadingTextColor} >Why are Americans so fat ?</div>
                  </div>
                  <div className ="panel-body" style={textColor}>
                    <div>asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad asdasdad </div>
                    <div className = "row">
                      <div className="hidden-xs col-sm-3">PhotoThumbNail1</div>
                      <div className="hidden-xs col-sm-3"> PhotoThumbNail2</div>
                    </div>
                    <div className = "row">
                      <div className="hidden-xs col-sm-3" style={locationStyle}>Xyz, USA</div>
                    </div>
                  </div>
                </div>
                <div className="hidden-xs col-sm-1"></div>
              </div>
            </div>
          </div>
          <div className="hidden-xs col-sm-1"></div>
        </div>
        <div className="row">
          <div className="hidden-xs col-sm-1"></div>
          <div className="hidden-xs col-sm-10">
            <div className ="panel">
              <div className="row">
                <div className="hidden-xs col-sm-2" style={profPicStyle}>ProfPic2</div>
                <div className="hidden-xs col-sm-9">
                  <div className ="panel-heading">
                    <div style={mainHead} >ProfPic2</div>
                    <div style={mainHead} >UX Designer</div>
                    <div style={subHeadingTextColor} >log | Smart Software Developemnt Great User Experience</div>
                  </div>
                  <div className ="panel-body" style={textColor}>
                    <div>sdafkasldfkaslf sdafkasldfkaslf sdafkasldfkaslf sdafkasldfkaslf sdafkasldfkaslf sdafkasldfkaslf sdafkasldfkaslf sdafkasldfkaslf sdafkasldfkaslf sdafkasldfkaslf sdafkasldfkaslf sdafkasldfkaslf sdafkasldfkaslf</div>
                    <div className = "row">
                      <div className="hidden-xs col-sm-3"> Photo ThumbNail 1 </div>
                      <div className="hidden-xs col-sm-3"> Photo ThumbNail 2 </div>
                    </div>
                    <div className = "row">
                      <div className="hidden-xs col-sm-3" style={locationStyle}>Xyz, USA</div>
                    </div>
                  </div>
                </div>
                <div className="hidden-xs col-sm-1"></div>
              </div>
            </div>
          </div>
          <div className="hidden-xs col-sm-1"></div>
        </div>
      </div>
    );
  }
});
module.exports = News;
