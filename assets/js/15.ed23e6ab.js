(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{345:function(t,e,i){},395:function(t,e,i){"use strict";var s=i(345);i.n(s).a},428:function(t,e,i){"use strict";i.r(e);i(27),i(41),i(20);var s={data:function(){return{time:"",date:"",week:["SUN","MON","TUE","WED","THU","FRI","SAT"]}},mounted:function(){var t=this;setInterval((function(){t.updateTime()}),1e3)},methods:{updateTime:function(){var t=new Date;this.time=this.zeroPadding(t.getHours(),2)+":"+this.zeroPadding(t.getMinutes(),2)+":"+this.zeroPadding(t.getSeconds(),2),this.date=this.zeroPadding(t.getFullYear(),4)+"-"+this.zeroPadding(t.getMonth()+1,2)+"-"+this.zeroPadding(t.getDate(),2)+" "+this.week[t.getDay()]},zeroPadding:function(t,e){for(var i="",s=0;s<e;s++)i+="0";return(i+t).slice(-e)}}},n=(i(395),i(2)),a=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"clock02"}},[e("span",{staticClass:"date02"},[this._v(this._s(this.date))]),this._v(" "),e("span",{staticClass:"time02"},[this._v(this._s(this.time))])])}),[],!1,null,"bc3f3434",null);e.default=a.exports}}]);