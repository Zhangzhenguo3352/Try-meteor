import React,{Component} from 'react'
import Radium from 'radium'

class UserInfo extends Component {
	getStyle(){
		return{
			img:{
				height:'100px',
				width:'100px',
				display:'block',
				borderRadius:'50%',
				margin:'30px auto'
			},
			ul:{
				display:'flex',
				justifyContent:'center',
				textAlign:'center',
				width:'100%',
				listStyle:'none',
				paddingLeft:0
			},
			li:{
				flexGrow:'1',
				borderLeft:'1px solid rgba(0,0,0,1)'
			},
			bottom10px:{
				marginBottom:'10px'
			}
		}
	}
	//Zhangzhenguo3352
	render(){
		let userInfo = this.props.userInfo
		let styles = this.getStyle()
		return(
			<div>
				<img src={userInfo.avatar_url} style={styles.img}/>
				<ul style={styles.ul}>
					<li style={[styles.li,{borderLeft:'0'}]}>
						<div style={styles.bottom10px}>被别人关注了：{userInfo.followers}人</div>
						<div>关注别人：{userInfo.following}人</div>
					</li>
					<li style={styles.li}>
						<div style={styles.bottom10px}>GitHub名字叫：{userInfo.login}</div>
						<div>id是：{userInfo.id}</div>
					</li>
					<li style={styles.li}>
						<div style={styles.bottom10px}>账号创建时间：{userInfo.created_at}</div>
						<div>最新活动时间：{userInfo.updated_at}</div>
					</li>
				</ul>
			</div>
		)
	}
}

export default Radium(UserInfo);