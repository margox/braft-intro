import React from 'react'
import BraftEditor from 'braft-editor'

export default class BasicDemo extends React.Component {

  render () {

    const controls = ['bold', 'italic', 'underline', 'separator']
    const extendControls = [
      {
        key: 'custom-button',
        type: 'button',
        text: '按钮',
        onClick: () => {
          alert('你好啊！')
        }
      }, {
        key: 'custom-dropdown',
        type: 'dropdown',
        text: '下拉菜单',
        component: <div style={{color: '#fff', padding: 10}}>你好啊！</div>
      }, {
        key: 'custom-modal',
        type: 'modal',
        text: '模态框',
        modal: {
          id: 'my-moda-1',
          title: '你好啊',
          children: (
            <div style={{width: 400, padding: '0 10px'}}>
              <img src="https://margox.cn/wp-content/uploads/2018/09/IMG_9508.jpg" style={{width: '100%', height: 'auto'}}/>
            </div>
          )
        }
        
      }
    ]

    return (
      <div className="demo-container pull-right">
        <h3 className="caption">增加扩展控件</h3>
        <h5 className="sub-caption">本页中的编辑器，增加了个4种不同类型的扩展控件，分别是：按钮、下拉菜单、模态框和自定义组件</h5>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="embed-editor">
          <BraftEditor controls={controls} extendControls={extendControls} contentStyle={{height: 210, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)'}}/>
        </div>
        <h5 className="section-caption">示例源码</h5>
        <div className="demo-code" dangerouslySetInnerHTML={{
          __html: '<pre><span style="color:#c586c0">import</span> <span style="color:#ce9178">&#x27;braft-editor/dist/index.css&#x27;</span><br/><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> React </span><span style="color:#c586c0">from</span> <span style="color:#ce9178">&#x27;react&#x27;</span><br/><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> BraftEditor, { EditorState } </span><span style="color:#c586c0">from</span> <span style="color:#ce9178">&#x27;braft-editor&#x27;</span><br/><br/><span style="color:#569cd6">export</span> <span style="color:#c586c0">default</span> <span style="color:#569cd6">class</span> <span style="color:#4ec9b0">BasicDemo</span> <span style="color:#569cd6">extends</span> <span style="color:#4ec9b0">React</span><span style="color:#d4d4d4">.</span><span style="color:#4ec9b0">Component</span><span style="color:#d4d4d4"> {</span><br/><br/>  <span style="color:#9cdcfe">state</span> <span style="color:#d4d4d4">= {</span><br/><span style="color:#d4d4d4">    editorState: EditorState.createFrom(</span><span style="color:#569cd6">null</span><span style="color:#d4d4d4">),</span><br/><span style="color:#d4d4d4">    outputHTML: </span><span style="color:#ce9178">&#x27;&lt;p&gt;&lt;/p&gt;&#x27;</span><br/><span style="color:#d4d4d4">  }</span><br/><br/>  <span style="color:#9cdcfe">handleChange</span> <span style="color:#d4d4d4">= (editorState) =&gt; {</span><br/>    <span style="color:#569cd6">this</span><span style="color:#d4d4d4">.setState({</span><br/><span style="color:#d4d4d4">      editorState: editorState,</span><br/><span style="color:#d4d4d4">      outputHTML: editorState.toHTML()</span><br/><span style="color:#d4d4d4">    })</span><br/><span style="color:#d4d4d4">  }</span><br/><br/>  <span style="color:#dcdcaa">render</span><span style="color:#d4d4d4"> () {</span><br/><br/>    <span style="color:#569cd6">const</span><span style="color:#d4d4d4"> { </span><span style="color:#9cdcfe">editorState</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">outputHTML</span><span style="color:#d4d4d4"> } =</span> <span style="color:#569cd6">this</span><span style="color:#d4d4d4">.state</span><br/><br/>    <span style="color:#c586c0">return</span><span style="color:#d4d4d4"> (</span><br/>      <span style="color:#808080">&lt;</span><span style="color:#569cd6">div</span><span style="color:#808080">&gt;</span><br/>        <span style="color:#808080">&lt;</span><span style="color:#569cd6">div</span> <span style="color:#9cdcfe">className</span><span style="color:#d4d4d4">=</span><span style="color:#ce9178">&quot;editor-wrapper&quot;</span><span style="color:#808080">&gt;</span><br/>          <span style="color:#808080">&lt;</span><span style="color:#569cd6">BraftEditor</span> <span style="color:#9cdcfe">value</span><span style="color:#d4d4d4">={editorState} </span><span style="color:#9cdcfe">onChange</span><span style="color:#d4d4d4">={</span><span style="color:#569cd6">this</span><span style="color:#d4d4d4">.handleChange}</span><span style="color:#808080">/&gt;</span><br/>        <span style="color:#808080">&lt;/</span><span style="color:#569cd6">div</span><span style="color:#808080">&gt;</span><br/>        <span style="color:#808080">&lt;</span><span style="color:#569cd6">h5</span><span style="color:#808080">&gt;</span><span style="color:#d4d4d4">输出内容</span><span style="color:#808080">&lt;/</span><span style="color:#569cd6">h5</span><span style="color:#808080">&gt;</span><br/>        <span style="color:#808080">&lt;</span><span style="color:#569cd6">div</span> <span style="color:#9cdcfe">className</span><span style="color:#d4d4d4">=</span><span style="color:#ce9178">&quot;output-content&quot;</span><span style="color:#808080">&gt;</span><span style="color:#d4d4d4">{outputHTML}</span><span style="color:#808080">&lt;/</span><span style="color:#569cd6">div</span><span style="color:#808080">&gt;</span><br/>      <span style="color:#808080">&lt;/</span><span style="color:#569cd6">div</span><span style="color:#808080">&gt;</span><br/><span style="color:#d4d4d4">    )</span><br/><br/><span style="color:#d4d4d4">  }</span><br/><br/><span style="color:#d4d4d4">}</span></pre>'
        }}></div>
      </div>
    )

  }

}