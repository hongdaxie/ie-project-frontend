(window["webpackJsonpie-project"]=window["webpackJsonpie-project"]||[]).push([[16],{540:function(e,a,t){"use strict";t.r(a);t(150);var n=t(27),i=(t(215),t(151)),l=(t(221),t(157)),s=(t(85),t(32)),r=(t(219),t(156)),o=(t(152),t(11)),c=(t(218),t(79)),m=(t(216),t(118)),p=(t(153),t(86)),d=t(45),u=t(46),h=t(49),g=t(47),f=t(48),b=(t(443),t(438)),v=(t(417),t(412)),E=t(0),y=t.n(E),D=t(155),Y=t(55),w=t(116),j=t.n(w),x=v.a.Option,O=b.a.MonthPicker,V=function(e){function a(){var e;return Object(d.a)(this,a),(e=Object(h.a)(this,Object(g.a)(a).call(this))).getItemData=function(){e.setState({isLoading:!0}),Object(D.d)(e.props.match.params.id).then(function(a){a.data&&e.props.form.setFieldsValue({email:a.data.email,name:a.data.name,relationship:a.data.relationship,lastVaccineDate:j()(a.data.lastVaccineDate,"YYYY-MM-DD"),phoneNumber:a.data.phoneNumber})}).finally(function(){e.setState({isLoading:!1})})},e.handleSubmit=function(a){a.preventDefault(),e.props.form.validateFields(function(a,t){if(!a){var n=(new Date).getFullYear();t.lastVaccineDate.year()<n?t.nextVaccineDate=j()().format("YYYY-MM-DD"):t.nextVaccineDate="".concat(n+1,"-04-01");var i=t.lastVaccineDate.format("YYYY-MM-01");t.lastVaccineDate=i,e.setState({isUpdating:!0});var l={id:e.props.location.state.userid};t.userid=l,t.id=e.props.match.params.id;var s=JSON.stringify(t);Object(D.j)(s).then(function(a){a.data?(p.a.success("You have updated successfully!"),e.props.history.push({pathname:"/account"})):p.a.error("Failed to update!")}).finally(function(){e.setState({isUpdating:!1})})}})},e.validateToPhoneNumber=function(e,a,t){console.log("111"),/^04\d{8}$/.test(a)?(console.log("333"),t()):(console.log("222"),t("You should input legal phone number! Such as: 0413174686 "))},e.validateName=function(e,a,t){/^[A-Za-z\s]+$/.test(a)?t():t("You should input legal name!")},e.validateLength=function(e,a,t){a.length>20?t("The length of the name should no more than 20."):t()},e.state={isLoading:!1,isUpdating:!1},e}return Object(f.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getItemData()}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a=e("prefix",{initialValue:"61"})(y.a.createElement(v.a,{style:{width:70}},y.a.createElement(x,{value:"61"},"+61")));return y.a.createElement("div",null,y.a.createElement(n.a,{lg:{span:12,offset:6},md:{span:22,offset:1},style:{marginTop:"24px",marginBottom:"24px"}},y.a.createElement(i.a,{style:{maxWidth:"500px",margin:"auto"}},y.a.createElement("div",{style:{textAlign:"center",fontWeight:"bold",fontSize:"24px",marginBottom:"20px"}},"Update your grandparent information"),y.a.createElement(l.a,{spinning:this.state.isLoading},y.a.createElement(c.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit}),y.a.createElement(c.a.Item,{label:"E-mail"},e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(y.a.createElement(m.a,{disabled:this.state.isUpdating}))),y.a.createElement(c.a.Item,{label:"name"},e("name",{rules:[{required:!0,message:"Please input name!",whitespace:!0},{validator:this.validateName},{validator:this.validateLength}]})(y.a.createElement(m.a,{disabled:this.state.isUpdating}))),y.a.createElement(c.a.Item,{label:y.a.createElement("span",null,"Relationship\xa0",y.a.createElement(r.a,{title:"What`s the relationship with he/she?"},y.a.createElement(o.a,{type:"question-circle-o"})))},e("relationship",{rules:[{required:!0,message:"Please input relationship!",whitespace:!0},{validator:this.validateLength},{validator:this.validateName}]})(y.a.createElement(m.a,{disabled:this.state.isUpdating}))),y.a.createElement(c.a.Item,{label:y.a.createElement("span",null,"Vaccine record\xa0",y.a.createElement(r.a,{title:"When was the last tiem that the person took the flu shot?"},y.a.createElement(o.a,{type:"question-circle-o"})))},e("lastVaccineDate",{rules:[{type:"object",required:!0,message:"Please select time!"}]})(y.a.createElement(O,null))),y.a.createElement(c.a.Item,{label:"Phone Number"},e("phoneNumber",{rules:[{required:!0,message:"Please input your phone number!"},{validator:this.validateToPhoneNumber}]})(y.a.createElement(m.a,{addonBefore:a,placeholder:"eg.0431374686",style:{width:"100%"}}))),y.a.createElement(c.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},y.a.createElement(s.a,{type:"primary",htmlType:"submit",loading:this.state.isUpdating},"Update")))))))}}]),a}(E.Component);a.default=c.a.create({name:"editGrandparent"})(Object(Y.g)(V))}}]);
//# sourceMappingURL=16.f313005a.chunk.js.map