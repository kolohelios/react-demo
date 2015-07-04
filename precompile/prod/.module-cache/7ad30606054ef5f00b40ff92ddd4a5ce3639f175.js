
var showDate = React.createClass({displayName: "showDate",
  getDefaultProps: function(){
    return{
      today: new Date().toDateString()
    };
  },
  render: function(){
    return (
      React.createElement("h1", null, "Today: ", this.props.today)
    );
  }
})
React.render(React.createElement(ShowDate, null), document.body);
