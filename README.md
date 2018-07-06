# react-member
it can use to pay

# 现象

QandA中碰到的问题：
```
let newData = {};
    ajax('http://localhost:9000/memberData').then(data => {
        return Promise.resolve({data:data});
    }).then(data => {
        newData = Object.assign({}, data);    
        this.setState({data:data});
        console.log(this.state);
    }).catch(e => {
        console.log(e);
        alert(`Error: ${e}`);
    });
```
在render中  const data = this.state.data; 
data第一次默认为构造函数中的值，所以渲染默认为空


// 发现一现象：input中的值inputVal，不会根据自己输入的值变化，页面中会一直显示设置的2，因为是最终render的
```
三种写法
<input value={inputVal} onChange={this.handleChange}/>
<input value={inputVal} onChange={(e)=> {console.log('1');}}/>
<input value={inputVal} onChange={this.handleChange.bind(this)}/>
handleChange(event) {
  // handleChange = (e) => {  //这种写法为什么写错了，难道是必须写在input标签中吗？

}
```
## 
https://reactjs.org/docs/lists-and-keys.html#keys  
使用key就能消除下面warning，可以根据props值获取key后面的值，所以应该传到组件中

Warning: Each child in an array or iterator should have a unique "key" prop.

// 为什么会出现2遍数据?因为生命周期中渲染第一次为空，

QandA.js:1 Uncaught Error: Module build failed: SyntaxError: Adjacent JSX elements must be wrapped in an enclosing tag (26:72)   
必须有一个wrap标签

第一次都为空，为什么map能渲染出来呢

```
let responses = response.index.map((item,index)=>{
    return <div key={index}><li key={index}>{item.title}{item.price}</li></div>
})
let response1 = response.index.map((item,index)=>{
    return <div key={index}><li key={index}>{item.title}{item.price}</li></div>
})
let response1 = (()=>{
    return <div><li>11{response.index[0].title}</li></div>
})
```