class Example {
    constructor(htmlEle) {
        this.htmlEle = htmlEle,
        this.htmlEle.innerHTML = "<h1>It's alive!</h1>",

        this.handleClick = this.handleClick.bind(this);
        this.htmlEle.addEventListener('click', this.handleClick);
    }

    handleClick() {
        this.htmlEle.children[0].innerText = "OiOi"
    }
}

export default Example;