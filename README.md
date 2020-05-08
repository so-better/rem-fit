## rem-fit 使用rem适配web页面

#### 可用于手机端，并且可以解决移动端的1px问题

```
const rf = new RemFit(7.5,true);//屏幕宽度设为7.5rem，第二个参数为true表示考虑dpr
rf.set();
window.addEventListener('resize',()=>{
	rf.set();
})
```
