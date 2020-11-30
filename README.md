## 1.todosList案例
			1.熟练组件化编码流程，数组的常用方法
			2.不要通过非setState的方式修改数据,操作状态时，push、unshift等方法尽量不用。
			3.所有的todo列表交给App管理，因为兄弟组件间暂时不能直接“对话”
			4.yarn add nanoid，用于生成数据的唯一标识
			5.掌握reduce方法
			6.注意：<input type="checkbox" checked={done} 会有一个警告，写onChange即可

## 2.github搜索案例
			1.请务必开启5000服务器，随后配置脚手架的代理
			2.拆分静态组件
			3.分析得知：Search组件负责搜索，List组件负责展示，状态要交给App
			4.List组件不仅要展示用户信息，还要展示：欢迎词、loading、错误信息
			5.在App中设计一个方法：updateAppState去更新App的状态，一个一个写太麻烦
			6.批量的给List组件传递参数：<List {...this.state}/>
			7.在List中用三目运算符进行连续判断，从而决定List组件展示什么