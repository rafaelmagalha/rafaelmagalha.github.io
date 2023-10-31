const formNewUser = {
    build:()=>{
        const root = document.getElementById('root');
        const formTemplate = document.createElement('form');
        formTemplate.className = "form-control";
        formTemplate.setAttribute("id","singForm")
        formTemplate.innerHTML = `
        <label for="form-label">nome</label>
        <input class="form-control" type="text" id="nome">
        <label for="form-label">idae</label>
        <input class="form-control" type="number" id="idae">
        <label for="form-label">login</label>
        <input class="form-control" type="text" id="login">
        <label for="form-label">senha</label>
        <input class="form-control" type="password" id="senha">
        `

        root.appendChild(formTemplate);
     },

}
export {formNewUser}