(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={buttonWrp:"FeedbackOptions_buttonWrp__2te-r",feedbackButton:"FeedbackOptions_feedbackButton__2ofmL"}},,,,,,function(e,t,a){e.exports={feedBacBlock:"styles_feedBacBlock__2tuuL"}},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(3),r=a.n(o),s=a(4),l=a(5),i=a(6),u=a(9),d=a(8),m=(a(15),function(e){var t=e.title,a=e.children;return c.a.createElement("section",{className:"sectionWrp"},c.a.createElement("h1",{className:"sectionTittle"},t),c.a.createElement("div",{className:"sectionContent"},a))}),b=(a(16),function(e){var t=e.good,a=e.neutral,n=e.bad,o=e.total,r=e.positivePercentage;return c.a.createElement("div",{className:"statisticSection"},c.a.createElement("p",{className:"statistic"},"Good = ",t),c.a.createElement("p",{className:"statistic"},"Neutral = ",a),c.a.createElement("p",{className:"statistic"},"Bad = ",n),c.a.createElement("p",{className:"statistic"},"Total = ",o),0===r?null:c.a.createElement("p",{className:"statistic"},"Positiv Feedback = ",r,"%"))});b.defaultProps={good:0,neutral:0,bad:0,total:0};var f=b,p=a(1),k=a.n(p);function v(e){var t=e.onLeaveFeedback;return c.a.createElement("div",{className:k.a.buttonWrp},c.a.createElement("button",{type:"button",name:"good",className:k.a.feedbackButton,onClick:t},"Good"),c.a.createElement("button",{type:"button",name:"neutral",className:k.a.feedbackButton,onClick:t},"Neutral"),c.a.createElement("button",{type:"button",name:"bad",className:k.a.feedbackButton,onClick:t},"Bad"))}var E=Notification=function(e){var t=e.message;return c.a.createElement("p",null,t)},g=a(7),N=a.n(g),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var a=t.target.name;e.setState((function(e){return Object(s.a)({},a,e[a]+1)}))},e.countPositiveFeedbackPercentage=function(t){return e.state.good/t*100},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,o=this.countTotalFeedback(),r=Math.round(this.countPositiveFeedbackPercentage(o,t));return c.a.createElement("div",{className:N.a.feedBacBlock},c.a.createElement(m,{title:"please leave a feedback"},c.a.createElement(v,{onLeaveFeedback:this.onLeaveFeedback})),c.a.createElement(m,{title:"Statistics"},o>0?c.a.createElement(f,{good:t,neutral:a,bad:n,total:o,positivePercentage:r}):c.a.createElement(E,{message:"No feedback given"})))}}]),a}(n.Component);r.a.render(c.a.createElement(h,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.4b29628e.chunk.js.map