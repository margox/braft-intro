import './styles.scss'
import React from 'react'
import BraftEditor, { EditorState } from 'braft-editor'

export default class BasicDemo extends React.Component {

  state = {
    editorState: EditorState.createFrom(null),
    outputHTML: '<p></p>'
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }

  render () {

    const { editorState, outputHTML } = this.state

    return (
      <div className="demo-container pull-right">
        <h3 className="caption">基本使用</h3>
        <h5 className="sub-caption">本页面将演示如何用最基本的方式使用Braft Editor</h5>
        <h5 className="section-caption">功能要点</h5>
        <ul className="points">
          <li>- 使用editorState.toHTML()实时获取html</li>
        </ul>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="embed-editor">
          <BraftEditor value={editorState} onChange={this.handleChange} contentClassName="demo-editor"/>
        </div>
        <h5 className="section-caption">输出内容</h5>
        <div className="output-content"><pre><code>{outputHTML}</code></pre></div>
        <h5 className="section-caption">示例源码</h5>
        <div className="demo-code" dangerouslySetInnerHTML={{
          __html: '<pre><span style="color:#c586c0">import</span> <span style="color:#ce9178">&#x27;braft-editor/dist/index.css&#x27;</span><br/><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> React </span><span style="color:#c586c0">from</span> <span style="color:#ce9178">&#x27;react&#x27;</span><br/><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> BraftEditor, { EditorState } </span><span style="color:#c586c0">from</span> <span style="color:#ce9178">&#x27;braft-editor&#x27;</span><br/><br/><span style="color:#569cd6">export</span> <span style="color:#c586c0">default</span> <span style="color:#569cd6">class</span> <span style="color:#4ec9b0">BasicDemo</span> <span style="color:#569cd6">extends</span> <span style="color:#4ec9b0">React</span><span style="color:#d4d4d4">.</span><span style="color:#4ec9b0">Component</span><span style="color:#d4d4d4"> {</span><br/><br/>  <span style="color:#9cdcfe">state</span> <span style="color:#d4d4d4">= {</span><br/><span style="color:#d4d4d4">    editorState: EditorState.createFrom(</span><span style="color:#569cd6">null</span><span style="color:#d4d4d4">),</span><br/><span style="color:#d4d4d4">    outputHTML: </span><span style="color:#ce9178">&#x27;&lt;p&gt;&lt;/p&gt;&#x27;</span><br/><span style="color:#d4d4d4">  }</span><br/><br/>  <span style="color:#9cdcfe">handleChange</span> <span style="color:#d4d4d4">= (editorState) =&gt; {</span><br/>    <span style="color:#569cd6">this</span><span style="color:#d4d4d4">.setState({</span><br/><span style="color:#d4d4d4">      editorState: editorState,</span><br/><span style="color:#d4d4d4">      outputHTML: editorState.toHTML()</span><br/><span style="color:#d4d4d4">    })</span><br/><span style="color:#d4d4d4">  }</span><br/><br/>  <span style="color:#dcdcaa">render</span><span style="color:#d4d4d4"> () {</span><br/><br/>    <span style="color:#569cd6">const</span><span style="color:#d4d4d4"> { </span><span style="color:#9cdcfe">editorState</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">outputHTML</span><span style="color:#d4d4d4"> } =</span> <span style="color:#569cd6">this</span><span style="color:#d4d4d4">.state</span><br/><br/>    <span style="color:#c586c0">return</span><span style="color:#d4d4d4"> (</span><br/>      <span style="color:#808080">&lt;</span><span style="color:#569cd6">div</span><span style="color:#808080">&gt;</span><br/>        <span style="color:#808080">&lt;</span><span style="color:#569cd6">div</span> <span style="color:#9cdcfe">className</span><span style="color:#d4d4d4">=</span><span style="color:#ce9178">&quot;editor-wrapper&quot;</span><span style="color:#808080">&gt;</span><br/>          <span style="color:#808080">&lt;</span><span style="color:#569cd6">BraftEditor</span> <span style="color:#9cdcfe">value</span><span style="color:#d4d4d4">={editorState} </span><span style="color:#9cdcfe">onChange</span><span style="color:#d4d4d4">={</span><span style="color:#569cd6">this</span><span style="color:#d4d4d4">.handleChange}</span><span style="color:#808080">/&gt;</span><br/>        <span style="color:#808080">&lt;/</span><span style="color:#569cd6">div</span><span style="color:#808080">&gt;</span><br/>        <span style="color:#808080">&lt;</span><span style="color:#569cd6">h5</span><span style="color:#808080">&gt;</span><span style="color:#d4d4d4">输出内容</span><span style="color:#808080">&lt;/</span><span style="color:#569cd6">h5</span><span style="color:#808080">&gt;</span><br/>        <span style="color:#808080">&lt;</span><span style="color:#569cd6">div</span> <span style="color:#9cdcfe">className</span><span style="color:#d4d4d4">=</span><span style="color:#ce9178">&quot;output-content&quot;</span><span style="color:#808080">&gt;</span><span style="color:#d4d4d4">{outputHTML}</span><span style="color:#808080">&lt;/</span><span style="color:#569cd6">div</span><span style="color:#808080">&gt;</span><br/>      <span style="color:#808080">&lt;/</span><span style="color:#569cd6">div</span><span style="color:#808080">&gt;</span><br/><span style="color:#d4d4d4">    )</span><br/><br/><span style="color:#d4d4d4">  }</span><br/><br/><span style="color:#d4d4d4">}</span></pre>'
        }}></div>
      </div>
    )

  }

}