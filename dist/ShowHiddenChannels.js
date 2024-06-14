const w=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const m=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const A=window.enmity.modules.common.StyleSheet,H=window.enmity.modules.common.ColorMap;window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux;const S=window.enmity.modules.common.SVG;window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function f(n,l,y){return window.enmity.utilities.findInReactTree(n,l,y)}function E(n){return window.enmity.utilities.wrapInHooks(n)}function P(n){window.enmity.plugins.registerPlugin(n)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList;const M=e.Image;e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl,e.ScrollView,e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const b=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const C=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio,e.FormRow,e.FormSection,e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function L(n){return window.enmity.assets.getIDByName(n)}const u={byProps:(...n)=>window.enmity.modules.filters.byProps(...n),byName:(n,l)=>window.enmity.modules.filters.byName(n,l),byTypeName:(n,l)=>window.enmity.modules.filters.byTypeName(n,l),byDisplayName:(n,l)=>window.enmity.modules.filters.byDisplayName(n,l)};function k(...n){return window.enmity.modules.bulk(...n)}window.enmity.modules.common;function D(n){return window.enmity.patcher.create(n)}var R=m.memo(()=>{const n=A.createThemedStyleSheet({view:{verticalAlign:"center",justifyContent:"center",alignItems:"center",marginLeft:5},lock:{color:H.ThemeColorMap.CHANNELS_DEFAULT}});return m.createElement(C,{style:n.view},m.createElement(S.Svg,{width:16,height:16,viewBox:"0 0 1190.000000 1280.000000"},m.createElement(S.G,{transform:"translate(0.000000,1280.000000) scale(0.100000,-0.100000)",stroke:"none",fill:n.lock.color},m.createElement(S.Path,{d:"M5625 11949 c-726 -55 -1331 -308 -1787 -748 -391 -376 -650 -839 -788 -1406 -97 -398 -102 -478 -103 -1607 l-2 -940 -27 -23 c-17 -15 -56 -30 -105 -40 -240 -51 -368 -97 -486 -174 -288 -189 -455 -502 -507 -956 -12 -104 -16 -3002 -4 -3230 21 -421 144 -691 405 -887 61 -46 199 -117 274 -141 77 -26 229 -55 345 -67 73 -7 1009 -11 3095 -10 3153 1 3139 0 3328 44 321 75 545 253 646 515 90 234 93 323 88 2111 -4 1464 -7 1563 -43 1775 -52 301 -176 554 -348 706 -21 19 -46 41 -56 50 -86 81 -249 170 -390 214 -164 51 -231 77 -240 95 -6 12 -10 333 -10 862 0 962 -6 1086 -66 1418 -26 142 -101 429 -139 530 -133 353 -235 558 -395 795 -121 180 -342 418 -516 557 -273 217 -666 404 -1015 482 -337 75 -775 104 -1154 75z m480 -1109 c217 -19 424 -64 585 -127 410 -161 718 -458 894 -858 48 -109 129 -345 121 -353 -2 -3 0 -12 5 -22 12 -23 47 -218 60 -340 7 -60 11 -420 10 -979 0 -983 4 -916 -68 -949 -34 -16 -173 -17 -1762 -17 -1620 0 -1728 1 -1782 18 -51 16 -58 21 -63 50 -3 17 -4 442 -2 942 4 998 2 977 67 1245 122 500 369 885 716 1116 92 61 275 150 376 183 253 83 553 115 843 91z"}))))});const d=D("show-hidden-channels"),[B,v,p,g,N,x,_,V,O]=k(u.byName("BaseChannelItem",!1),u.byProps("getChannelPermissions"),u.byProps("getChannel"),u.byProps("hasUnread"),u.byProps("ChannelRecordBase"),u.byProps("stores","fetchMessages"),u.byName("MessagesConnected",!1),u.byName("MainMembers",!1),u.byProps("getOrCreate")),U={name:"ShowHiddenChannels",version:"2.0.2",description:"Displays all hidden channels which can't be accessed, this won't allow you to read them.",authors:[{name:"eternal",id:"263689920210534400"}],onStart(){var n;this.can=(n=v.can.__original)!=null?n:v.can;const l=this;N.ChannelRecordBase.prototype.isHidden=function(){return![1,3].includes(this.type)&&!l.can(w.Permissions.VIEW_CHANNEL,this)},d.after(v,"can",(c,[i])=>{if(i===w.Permissions.VIEW_CHANNEL)return!0}),d.after(g,"hasUnread",(c,[i],o)=>{var t;return o&&!((t=p.getChannel(i))!=null&&t.isHidden())}),d.after(g,"hasRelevantUnread",(c,[i],o)=>o&&!i.isHidden()),d.after(g,"hasNotableUnread",(c,[i],o)=>{var t;return o&&!((t=p.getChannel(i))!=null&&t.isHidden())}),d.after(g,"hasUnreadPins",(c,[i])=>{if(!p.getChannel(i))return!1}),d.after(g,"getMentionCount",(c,[i],o)=>{var t;return(t=p.getChannel(i))!=null&&t.isHidden()?0:o});const y=d.after(C,"render",(c,i,o)=>{const t=f(o,r=>{var a,s;return((a=r.props)==null?void 0:a.channel)&&((s=r.props)==null?void 0:s.isRulesChannel)!==void 0});!t||(d.after(t.type,"type",(r,[{channel:a}],s)=>{if(!(a!=null&&a.isHidden()))return s;const h=f(s,T=>{var I;return T!==s&&Array.isArray((I=T.props)==null?void 0:I.children)});return h&&h.props.children.push(m.createElement(R,null)),s}),y())}),F=L("nsfw_gate_lock");d.after(V,"default",(c,i,o)=>o&&(o=E(o.type.type)(o.props),o.props.children=(t=>{var r;const{channel:a}=(r=t.props)!=null?r:{},s=E(t.type)(t.props);return a!=null&&a.isHidden()&&(s.props.children.pop(),s.props.children.push(m.createElement(C,{style:{flex:1,alignItems:"center",justifyContent:"center"}},m.createElement(M,{style:{width:75,height:75},source:F})))),s})(o.props.children),o)),d.after(_,"default",(c,[i],o)=>{const t=i.channel;if(!(t!=null&&t.isHidden()))return o;const r=A.createThemedStyleSheet({image:{width:100,height:100,padding:5,marginBottom:15},container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:w.ThemeColorMap.BACKGROUND_PRIMARY},header:{color:w.ThemeColorMap.HEADER_PRIMARY,fontFamily:w.Fonts.PRIMARY_SEMIBOLD,fontWeight:"bold",fontSize:24},description:{color:w.ThemeColorMap.HEADER_SECONDARY,fontSize:16,fontFamily:w.Fonts.PRIMARY_SEMIBOLD,marginLeft:2.5,marginRight:2.5,paddingLeft:25,paddingRight:25,paddingTop:5,textAlign:"center"},lastMessage:{marginTop:5}});return m.createElement(C,{style:r.container},m.createElement(M,{style:r.image,source:F}),m.createElement(b,{style:r.header},"This is a hidden channel."),m.createElement(b,{style:r.description},"You cannot see the contents of this channel. However, you may see info by swiping to the right."),m.createElement(b,{style:{...r.description,...r.lastMessage}},"Last Message sent on ",this.parseSnowflake(t.lastMessageId),"."))}),d.after(B,"default",(c,[i],o)=>{var t;const{channel:r}=(t=f(i,s=>s==null?void 0:s.channel))!=null?t:{};if(!(r!=null&&r.isHidden()))return o;const a=f(o,s=>{var h;return s!==o&&Array.isArray((h=s.props)==null?void 0:h.children)});return a&&a.props.children.splice(4,0,m.createElement(R,null)),o}),d.instead(x,"fetchMessages",(c,i,o)=>{var t;const{channelId:r}=i[0],a=p.getChannel(r);if((t=a==null?void 0:a.isHidden)!=null&&t.call(a)){const s=O.getOrCreate(r);s.loadingMore=!1;return}return o.apply(c,i)})},onStop(){delete N.prototype.isHidden,d.unpatchAll()},parseSnowflake(n){try{const l=parseInt(n).toString(2).padStart(64,"0").substring(0,42),y=parseInt(l,2)+14200704e5;return new Date(y).toLocaleString()}catch(l){return console.error(l),"(Failed to get date)"}}};P(U);
