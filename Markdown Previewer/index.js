marked.setOptions({
    breaks:true,
    
});
const renderer = new marked.Renderer() ;
const placeHolder = `# Welcome to my React Markdown Previewer!
## This is Heading 2
### This is Heading 3
**This text will be bold**  
__This will also be bold__

_You **can** combine them_

### Here is a inline code element
 \`<div> </div>\`
### Block level code
\`\`\`
function(){
    return (console.log("Hello World))}
 \`\`\`
### Links
You may be using [Markdown Live Preview](https://markdownlivepreview.com/).
## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b
![This is a alt text.](./react-logo@3x.svg "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.


`;
class  App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            input:placeHolder
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({
            input:event.target.value
        });
    }
    
    render(){
      
       
        return(
            <div className="text-center">
                <h1>My Markdown Preview</h1> 
                <Editor input={this.state.input}
                    onChange={this.handleChange}/>
               <h1>Preview</h1>
               <div className="container-fluid">
                 <Preview rawData={this.state.input}/>
               </div>
            </div>
        )   
    }
}
function Editor(props){
    return(
        <div className="bluebox">
            <textarea 
            id="editor"
            value={props.input} 
            type="text"
            onChange={props.onChange}/>
        </div>
    )


    
}
function Preview({rawData}){

    return (
        
        <div dangerouslySetInnerHTML={{
            __html:marked.parse(rawData,{render:renderer}),
        }} id="preview" >

        </div>
    )
}


ReactDOM.render(<App/>,document.getElementById('root'))